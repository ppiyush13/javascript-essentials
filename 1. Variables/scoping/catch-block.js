

(() => {

    console.log(ex); // will throw an ReferenceError

    try {

        throw 5;

    }
    catch(ex) {

        console.log(ex);
    
    }

})();