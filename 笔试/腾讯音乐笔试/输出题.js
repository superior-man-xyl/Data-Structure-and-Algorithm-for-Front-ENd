function test() {
    getName = function () {
        Promise.resolve().then(() => {
            console.log(0);
        })
        console.log(1);
    }
    return this
}
test.getName = function () {
    setTimeout(() => {
        console.log(2);
    }, 0);
    console.log(3);
}
test.prototype.getName = function () {
    console.log(4);
}
var getName = function () {
    console.log(5);
}

function getName() {
    console.log(6);
}

test.getName()
getName()
test().getName()
getName()
new test.getName()
new test().getName()
new new test().getName()