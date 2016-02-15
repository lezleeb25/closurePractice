// My try
var Person = function() {
	this.name = 'Fred';
	this.age = 22;
};

Person.prototype.displayData = function() {
	console.log(this);
};

var Student = function() {
	Person.call(this);
		this.email = 'freddy@gmail.com';
		this.phone = '4028762364';
} 

Student.prototype = Object.create(Person.prototype);
var Student = new Student();
Student.displayData();



// /////////////////////////
// Ben's example
// /////////////////////////
var Person = function() {
	this.property1 = true;
	this.property2 = true;
}

Person.prototype.displayData = function() {
	console.log(this);
}

var Student = function() {
	Person.call(this);
	this.newProperty1 = true;
	this.newProperty2 = true;
}

Student.prototype = Object.create(Person.prototype);
var Student = new Student();
Student.displayData();

// /////////////////////////
String.prototype.reverse = function() {
 	return this.split('').reverse().join('');
};

// function () {
// 	return this.split('').reverse().join('');
// }
'abc'.reverse();

var str = "My new string";
str.reverse();



// /////////////////////////
// /////////////////////////
arr.forEach(function(item) {
	console.log(item);
});






















