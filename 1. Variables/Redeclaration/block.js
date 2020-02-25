

(() => {

    {
        let foo = 10;

        console.log(10); // Even this wont be executed, parser itself will throw the error

        let foo; // SyntaxError thrown.
    }
})();