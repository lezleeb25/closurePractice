// Closure
function showName (firstName, lastName) {
	var nameIntro = "Your name is ";
	// this inner function has access to the outer function's variables, including the parameter​
    function makeFullName () {     
    	return nameIntro + firstName + " " + lastName;    
    }
    return makeFullName ();
}
showName ("Michael", "Jackson"); // Your name is Michael Jackson

// //////////////////////////////////////////
//JQuery example
// //////////////////////////////////////////
$(function() {
​
​	var selections = []; 
	$(".niners").click(function() { // this closure has access to the selections variable​
		selections.push (this.prop("name")); // update the selections variable in the outer function's scope​
	});
​
});



// //////////////////////////////////////////
// Closures have access to the outer function’s variable even after the outer function returns
// inner function still has access to the outer function’s variables even after the outer function has returned
// //////////////////////////////////////////
function celebrityName (firstName) {
    var nameIntro = "This celebrity is ";
    // this inner function has access to the outer function's variables, including the parameter
   function lastName (theLastName) {
        return nameIntro + firstName + " " + theLastName;
    }
    return lastName;
}

var mjName = celebrityName ("Michael"); // At this juncture, the celebrityName outer function has returned.

// The closure (lastName) is called here after the outer function has returned above
// Yet, the closure still has access to the outer function's variables and parameter
mjName ("Jackson"); // This celebrity is Michael Jackson


// //////////////////////////////////////////
// Closures store references to the outer function’s variables; they do not store the 
// actual value.  Closures get more interesting when the value of the outer function’s 
// variable changes before the closure is called. And this powerful feature can be harnessed 
// in creative ways, such as this private variables example first demonstrated by Douglas Crockford: 
// //////////////////////////////////////////
function celebrityID () {
    var celebrityID = 999;
    // We are returning an object with some inner functions
    // All the inner functions have access to the outer function's variables
    return {
        getID: function ()  {
            // This inner function will return the UPDATED celebrityID variable
            // It will return the current value of celebrityID, even after the changeTheID function changes it
          return celebrityID;
        },
        setID: function (theNewID)  {
            // This inner function will change the outer function's variable anytime
            celebrityID = theNewID;
        }
    };
}

var mjID = celebrityID (); // At this juncture, the celebrityID outer function has returned.
mjID.getID(); // 999
mjID.setID(567); // Changes the outer function's variable
mjID.getID(); // 567: It returns the updated celebrityId variable




// //////////////////////////////////////////
// //////////////////////////////////////////
// //////////////////////////////////////////
function celebrityIDCreator (theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
        theCelebrities[i]["id"] = function (j)  { // the j parametric variable is the i passed in on invocation of this IIFE
            return function () {
                return uniqueID + j; // each iteration of the for loop passes the current value of i into this IIFE and it saves the correct value to the array
            } (); // BY adding () at the end of this function, we are executing it immediately and returning just the value of uniqueID + j, instead of returning a function.
        } (i); // immediately invoke the function passing the i variable as a parameter
    }
    return theCelebrities;
}

var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];

var createIdForActionCelebs = celebrityIDCreator (actionCelebs);

var stalloneID = createIdForActionCelebs [0];
console.log(stalloneID.id); // 100

var cruiseID = createIdForActionCelebs [1];
console.log(cruiseID.id); // 101




// ///////////////////////////////////
function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();

// ///////////////////////////////////




function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
















