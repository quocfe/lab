// Chuyển đổi code Javascript phía dưới sang ES6, sử dụng classs thay thế cho
object.prototype;
Shape.prototype.move = function (x, y) {
	this.x = x;
	this.y = y;
};
// ES6
class Shape {
	move(x, y) {
		this.x = x;
		this.y = y;
	}
}
