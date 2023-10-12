let person = {
	firstname: 'Albert',
	lastname: 'Einstein',

	setLastname: function (_lastname) {
		this.lastname = _lastname;
	},

	setFirstname: function (_firstname) {
		this.firstname = _firstname;
	},

	getFullName: function () {
		return this.firstname.concat(this.lastname);
	},
};

person.setLastname('Nguyen');
person.setFirstname('Quoc');

console.log(person.getFullName());
