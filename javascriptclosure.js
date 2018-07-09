//problem
function add() {
    var counter; 
    counter += 1;
    return counter;
}

add();
add();
add();



// solution 
var add = (unction () {
    var counter = 0;
    return function () {counter += 1; return counter;}
};

var a = add();
a();
a();
a();
