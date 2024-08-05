var Bike = /** @class */ (function () {
    function Bike() {
        this.handel = 1;
        this.mirror = 2;
        this.gears = 5;
        this.wheels = 2;
    }
    Bike.prototype.withwheel = function () {
        return this.wheel;
    };
    return Bike;
}());
var deep = new Bike();
console.log(deep);
