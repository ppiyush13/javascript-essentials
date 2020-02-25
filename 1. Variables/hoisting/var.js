
function var_hoisting() {

    console.log('Before initialization');
    console.log('Value of var a', a);
    console.log('Type of var a', typeof a);


    var a = 10;

    console.log('After initialization');
    console.log(a);
    console.log(typeof a);

}

var_hoisting();