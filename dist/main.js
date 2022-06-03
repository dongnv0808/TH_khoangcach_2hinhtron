"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
function distance(circleOne, circleTwo, d) {
    let distance = Math.pow((circleOne._radius - circleTwo._radius), 2) + Math.pow(d, 2);
    return Math.sqrt(distance);
}
let circle1 = new Circle_1.Circle(20);
let circle2 = new Circle_1.Circle(10);
console.log(distance(circle1, circle2, 20));
