

let x = 'outer scope';
(function () {

    console.log(x);

    let x = 'inner scope';

}());


// example referred from http://jsrocks.org/2015/01/temporal-dead-zone-tdz-demystified