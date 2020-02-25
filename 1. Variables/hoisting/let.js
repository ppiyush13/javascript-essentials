
function let_hoisting() {

    console.log('Before initialization');
    console.log('Value of var a', a);           // Will Throw ReferenceError
    console.log('Type of var a', typeof a);     // Will Throw ReferenceError

    // TDZ ends on next statement
    let a = 10;

    console.log('After initialization');
    console.log(a);
    console.log(typeof a);

}

let_hoisting();