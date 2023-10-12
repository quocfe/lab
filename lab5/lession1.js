// * từ khóa this sẽ trỏ về ĐỐI TƯỢNG mà nó đang thuộc về

// ** ví dụ

var person = {
	name: 'John',
	age: 30,
	greet: function () {
		console.log('Hello, my name is ' + this.name);
	},
};

console.log(person.greet());
