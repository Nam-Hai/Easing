const ease = N.Select.el('.easing-container');
let xCont = [];
let yCont = [];
let xyCont = [];

const n = 19;
for (let i = 0; i < n; i++) {
    xCont.push(ease[i].querySelector('.X'));
    yCont.push(ease[i].querySelector('.Y'));
    xyCont.push(ease[i].querySelector('.XY'));
}


let t = 0;
let x = 0;
let y = 0;

let Ease = [
    t => t,
    t => 1 - Math.cos(t * (.5 * Math.PI)),
    t => Math.sin(t * (.5 * Math.PI)),
    t => -.5 * (Math.cos(Math.PI * t) - 1),
    t => t * t,
    t => t * (2 - t),
    t => t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1,
    t => t * t * t,
    t => --t * t * t + 1,
    t => t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
    t => t * t * t * t,
    t => 1 - --t * t * t * t,
    t => t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
    t => t * t * t * t * t,
    t => 1 + --t * t * t * t * t,
    t => t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t,
    t => 0 === t ? 0 : 2 ** (10 * (t - 1)),
    t => 1 === t ? 1 : 1 - 2 ** (-10 * t),
    t => 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * 2 ** (10 * (t - 1)) : .5 * (2 - 2 ** (-10 * --t))

]

setInterval(() => {

    t += 0.01

    for (let i = 0; i < n; i++) {
        x = N.Lerp(0, 150, t);
        y = N.Lerp(0, 150, Ease[i](t));
        N.T(xCont[i], x, 0, 'px');
        N.T(yCont[i], 0, -y, 'px');
        N.T(xyCont[i], x, -y, 'px')
    }

    if (t >= 1) {
        t = 0
    }
}, 1000 / 60)