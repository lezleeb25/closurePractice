// Notes from class - Closure
// returning a function from another function
var outer = function() {
	return function() {
		alert('hello')
	};
};

var outersInner = outer();
outersInner();

// ///////////////////////////////
// ///////////////////////////////

var outer = function() {
	var x = 'Hello World';
	return function() {
		alert(x)
	};
};

var outersInner = outer();
outersInner();


// ///////////////////////////////
// ///////////////////////////////

var outer = function(x) {
	return function() {
		alert(x)
	};
};

var outersInner = outer('Hello World');
outersInner();


// ///////////////////////////////
// ///////////////////////////////
// Can have private variables

var outer = function(x) {
	var y = 10;
	x *= y;

	return function() {
		alert(x)
	};
};

var outersInner = outer(10);
outersInner();









