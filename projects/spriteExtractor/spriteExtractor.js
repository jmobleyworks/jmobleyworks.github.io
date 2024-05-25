class SpriteExtractor {
    constructor(options = {}) {
        this.tolerance = options.tolerance || 20;
        this.numSamples = options.numSamples || 4444;
        this.edgePadding = options.edgePadding || 10;
        this.debug = options.debug || false;
        this.backgroundColor = null;
        this.seeds = [];
        this.extractedSprites = [];
        this.globalVisited = new Set();
    }

    initializeCanvas(image) {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = image.width;
        this.canvas.height = image.height;
        this.ctx.drawImage(image, 0, 0);
        this.backgroundColor = this.getBackgroundColor();
    }

    getBackgroundColor() {
        const data = this.ctx.getImageData(0, 0, 1, 1).data;
        return [data[0], data[1], data[2]];
    }

    isForeground(testColor) {
        return Math.abs(testColor[0] - this.backgroundColor[0]) > this.tolerance ||
               Math.abs(testColor[1] - this.backgroundColor[1]) > this.tolerance ||
               Math.abs(testColor[2] - this.backgroundColor[2]) > this.tolerance;
    }

    isBackground(testColor) {
        return Math.abs(testColor[0] - this.backgroundColor[0]) <= this.tolerance &&
               Math.abs(testColor[1] - this.backgroundColor[1]) <= this.tolerance &&
               Math.abs(testColor[2] - this.backgroundColor[2]) <= this.tolerance;
    }

    getRandomForegroundSeeds() {
        return Array.from({ length: this.numSamples }).map(() => ({
            x: Math.floor(Math.random() * (this.canvas.width - 2 * this.edgePadding) + this.edgePadding),
            y: Math.floor(Math.random() * (this.canvas.height - 2 * this.edgePadding) + this.edgePadding)
        })).filter(point => this.isForeground(this.ctx.getImageData(point.x, point.y, 1, 1).data));
    }

    extractSprite(seed) {
        let spriteData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        let minX = this.canvas.width, minY = this.canvas.height, maxX = 0, maxY = 0;
        const stack = [seed];
        const localVisited = new Set();
        let isCutOff = false;

        if (this.extractedSprites.some(extractedSprite => extractedSprite && this.isPointInSprite(seed, extractedSprite))) {
            return null;
        }

        while (stack.length > 0) {
            let point = stack.pop();
            let x = point.x, y = point.y;
            const key = `${x},${y}`;

            if (x < 0 || x >= this.canvas.width || y < 0 || y >= this.canvas.height || localVisited.has(key) || this.globalVisited.has(key)) continue;

            let currentColor = [
                spriteData.data[(y * this.canvas.width + x) * 4],
                spriteData.data[(y * this.canvas.width + x) * 4 + 1],
                spriteData.data[(y * this.canvas.width + x) * 4 + 2]
            ];

            if (this.isBackground(currentColor)) continue;

            minX = Math.min(minX, x);
            minY = Math.min(minY, y);
            maxX = Math.max(maxX, x);
            maxY = Math.max(maxY, y);

            if (x === 0 || x === this.canvas.width - 1 || y === 0 || y === this.canvas.height - 1) {
                isCutOff = true;
            }

            localVisited.add(key);
            this.globalVisited.add(key);

            stack.push({ x: x + 1, y: y });
            stack.push({ x: x - 1, y: y });
            stack.push({ x: x, y: y + 1 });
            stack.push({ x: x, y: y - 1 });
        }

        if (isCutOff || minX > maxX || minY > maxY) {
            console.log("Invalid sprite dimensions or sprite cut off along an edge. Skipping...");
            return null;
        }

        let spriteWidth = maxX - minX + 1;
        let spriteHeight = maxY - minY + 1;
        let sprite = this.ctx.createImageData(spriteWidth, spriteHeight);

        for (let y = minY; y <= maxY; y++) {
            for (let x = minX; x <= maxX; x++) {
                const pixelIndex = (y * this.canvas.width + x) * 4;
                const spritePixelIndex = ((y - minY) * spriteWidth + (x - minX)) * 4;

                let currentColor = [
                    spriteData.data[pixelIndex],
                    spriteData.data[pixelIndex + 1],
                    spriteData.data[pixelIndex + 2]
                ];

                if (!this.isBackground(currentColor)) {
                    sprite.data[spritePixelIndex] = spriteData.data[pixelIndex];
                    sprite.data[spritePixelIndex + 1] = spriteData.data[pixelIndex + 1];
                    sprite.data[spritePixelIndex + 2] = spriteData.data[pixelIndex + 2];
                    sprite.data[spritePixelIndex + 3] = 255;
                }
            }
        }

        const spriteObject = { sprite, minX, minY, maxX, maxY };
        this.extractedSprites.push(spriteObject);
        return spriteObject;
    }

    isPointInSprite(point, spriteObject) {
        if (!spriteObject || !spriteObject.sprite) {
            console.log("Invalid sprite object: ", spriteObject);
            return false;
        }
        const x = point.x - spriteObject.minX;
        const y = point.y - spriteObject.minY;
        if (x < 0 || y < 0 || x >= spriteObject.sprite.width || y >= spriteObject.sprite.height) {
            return false;
        }
        const pixelIndex = (y * spriteObject.sprite.width + x) * 4;
        return spriteObject.sprite.data[pixelIndex + 3] > 0;
    }

    drawSprite(spriteObject, container) {
        if (spriteObject === null) return;

        const { sprite, minX, minY, maxX, maxY } = spriteObject;
        let spriteWidth = maxX - minX + 1, spriteHeight = maxY - minY + 1;

        const spriteCanvas = document.createElement('canvas');
        spriteCanvas.width = spriteWidth;
        spriteCanvas.height = spriteHeight;
        const spriteCtx = spriteCanvas.getContext('2d');

        spriteCtx.putImageData(sprite, 0, 0);

        const img = document.createElement('img');
        img.src = spriteCanvas.toDataURL();
        img.width = spriteWidth;
        img.height = spriteHeight;
        container.appendChild(img);
    }

    processImage(image, container) {
        this.initializeCanvas(image);
        this.seeds = this.getRandomForegroundSeeds();

        if (this.debug) {
            this.ctx.fillStyle = 'red';
            this.seeds.forEach(seed => this.ctx.fillRect(seed.x, seed.y, 5, 5));
        }

        this.seeds.forEach(seed => {
            const spriteObject = this.extractSprite(seed);
            if (spriteObject) {
                this.drawSprite(spriteObject, container);
            }
        });
    }
}

export default SpriteExtractor;
