/*global Pen */

var p = new Pen("theCanvas");
p.goto(300, 400);

// ***
//function pentagon() {
//    for (var i = 0; i < 5; i++) {
//        p.go(100).turn(72);
//    }
//    p.close().draw();
//}
//
//function spiro() {
//    for (var i = 0; i < 360; i += 15) {
//        p.fillstyle("hsla(" + i + ", 100%, 50%, 0.1)").pensize(0);
//        pentagon();
//        p.turn(15);
//    }
//}
//
//for (var i = 0; i < 16; i++) {
//    spiro();
//    p.go(60).turn(360/16);
//}

// ***
//function arcr(size, deg) {
//    for (var i = 0; i < deg; i++) {
//        p.go(size).turn(1);
//    }
//}
//function arcl(size, deg) {
//    for (var i = 0; i < deg; i++) {
//        p.go(size).turn(-1);
//    }
//}
//
//function ray(deg) {
//    arcr(1, deg);
//    arcl(1, deg);
//    arcr(1, deg);
//    arcl(1, deg);
//}
//for (var i = 0; i < 9; i++) {
//    ray(120);
//    p.turn(200);
//}

// ***

function branch(size, inc) {
    if (size < 1) return;
    
    p.go(size).set();
    p.turn(-15);
    branch(size - inc, inc);
    p.penup().home().pendown().set();
    p.turn(15);
    branch(size - inc * 2, inc);
    p.penup().home().pendown();
}

branch(30, 10);

p.draw();