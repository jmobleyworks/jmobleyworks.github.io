// Function to interpolate between two colors
function lerpColor(a, b, amount) {
    let ar = a >> 16, ag = a >> 8 & 0xff, ab = a & 0xff,
        br = b >> 16, bg = b >> 8 & 0xff, bb = b & 0xff,
        rr = ar + amount * (br - ar),
        rg = ag + amount * (bg - ag),
        rb = ab + amount * (bb - ab);
    return ((rr << 16) | (rg << 8) | rb);
}