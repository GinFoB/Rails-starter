var HelloWorld = /** @class */ (function () {
    function HelloWorld(name) {
        this.name = name;
    }
    HelloWorld.prototype.print = function () {
        alert("Hello World, " + this.name + "!");
    };
    return HelloWorld;
}());
console.log("abcdef");
