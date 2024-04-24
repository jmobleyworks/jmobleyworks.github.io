//DayNightCycle.js

// Define the gradients for different times of day
let timeOfDayGradients = {
    '0': { 0: 0x000010, 0.5: 0x000040, 1: 0x000070 }, // midnight, pitch black transitioning to deep blue
    '1': { 0: 0x000040, 0.5: 0x000070, 1: 0x0000A0 }, // 1 AM, deep blue getting lighter
    '2': { 0: 0x000070, 0.5: 0x0000A0, 1: 0x0000D0 }, // 2 AM, blue getting even lighter
    '3': { 0: 0x0000A0, 0.5: 0x0000D0, 1: 0x0000FF }, // 3 AM, light blue transitioning to purple
    '4': { 0: 0x0000D0, 0.5: 0x0000FF, 1: 0x3333FF }, // 4 AM, purple transitioning to lighter blue
    '5': { 0: 0x0000FF, 0.5: 0x3333FF, 1: 0x6666FF }, // 5 AM, light blue transitioning to yellow
    '6': { 0: 0x3333FF, 0.5: 0x6666FF, 1: 0xFFFF00 }, // 6 AM, sunrise, yellow
    '7': { 0: 0x6666FF, 0.5: 0xFFFF00, 1: 0xFFFFCC }, // 7 AM, yellow transitioning to light yellow
    '8': { 0: 0x9999FF, 0.5: 0xCCCCFF, 1: 0xFFFFCC }, // 8 AM, light yellow with a hint of blue
    '9': { 0: 0xCCCCFF, 0.5: 0xFFFFCC, 1: 0xFFFFCC }, // 9 AM, light yellow
    '10': { 0: 0xFFFFCC, 0.5: 0xFFFFCC, 1: 0xFFFFCC }, // 10 AM, light yellow
    '11': { 0: 0xFFFFCC, 0.5: 0xFFFFCC, 1: 0xFFFFCC }, // 11 AM, light yellow
    '12': { 0: 0xFFFFCC, 0.5: 0xFFFFCC, 1: 0xFFFFCC }, // noon, light yellow
    '13': { 0: 0xFFFFCC, 0.5: 0xFFFFCC, 1: 0xFFFFCC }, // 1 PM, light yellow
    '14': { 0: 0xFFFFCC, 0.5: 0xFFFFCC, 1: 0xFFFFCC }, // 2 PM, light yellow
    '15': { 0: 0xFFFFCC, 0.5: 0xFFFFCC, 1: 0xFFFFCC }, // 3 PM, light yellow
    '16': { 0: 0xFFFFCC, 0.5: 0xFFFFCC, 1: 0xCCCCFF }, // 4 PM, light yellow transitioning to light blue
    '17': { 0: 0xFFFFCC, 0.5: 0xFFFF00, 1: 0xFF0000 }, // 5 PM, light blue transitioning to red
    '18': { 0: 0xFFFF00, 0.5: 0xFF0000, 1: 0x6666FF }, // 6 PM, sunset, red
    '19': { 0: 0xFF0000, 0.5: 0x6666FF, 1: 0x3333FF }, // 7 PM, red transitioning to blue
    '20': { 0: 0x6666FF, 0.5: 0x3333FF, 1: 0x0000FF }, // 8 PM, blue getting darker
    '21': { 0: 0x3333FF, 0.5: 0x0000FF, 1: 0x0000CC }, // 9 PM, dark blue transitioning to purple
    '22': { 0: 0x0000FF, 0.5: 0x0000CC, 1: 0x000099 }, // 10 PM, purple transitioning to deep blue
    '23': { 0: 0x0000CC, 0.5: 0x000099, 1: 0x000066 }  // 11 PM, deep blue transitioning to pitch black
}

// Function to draw the day/night cycle
function drawDayNightCycle() {
    let gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    let colors;
    let nextColors;
    let timeOfDay;
    let hour = Math.floor(time * 24);
    let nextHour = (hour + 1) % 24; // Next hour, wraps around to 0 after 23
    let fraction = (time * 24) - hour; // Fraction of the current hour that has passed
    colors = timeOfDayGradients[hour];
    nextColors = timeOfDayGradients[nextHour];
    timeOfDay = 'Hour ' + hour;
    document.getElementById('timeLabel').innerText = timeOfDay + ' ' + Math.round(time * 100) + '%';
    for (let stop in colors) {
        let color = lerpColor(colors[stop], nextColors[stop], fraction);
        gradient.addColorStop(stop, '#' + ('000000' + color.toString(16)).slice(-6));
    }
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}