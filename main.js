const example = document.querySelector('#example')
const ctx = example.getContext('2d')
example.width = 1000
example.height = 750
ctx.fillStyle = 'white'
ctx.fillRect(0, 0, 1000, 750)
let r, x, i, xs, ys;
r = 2.5, x = 0.25;
ctx.fillStyle = 'black'
ctx.strokeRect(0, 0, 1000, 750)
while (r < 4) {
    for (i = 1; i < 100; i++) {
        x = r * x * (1 - x)
        if (i > 50) {
            xs = Math.round(((r - 2.5) / 1.5) * 1000)
            ys = Math.round((1 - x) * 750)
            ctx.fillRect(xs, ys, 1, 1)
        }
    }
    r += 0.0001
}