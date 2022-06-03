import { Circle } from "./Circle";

function distance(circleOne: Circle, circleTwo: Circle, d:number){
    let distance = Math.pow((circleOne._radius - circleTwo._radius), 2) + Math.pow(d, 2);
    return Math.sqrt(distance);
}

let circle1 = new Circle(20);
let circle2 = new Circle(10);

console.log(distance(circle1, circle2, 20));