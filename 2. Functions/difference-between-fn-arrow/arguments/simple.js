
(() => {

    function format() {
        
        const innerFn = (...args) => {
            console.log('Inner function');

            console.log('arguments', arguments);
            console.log('...args', args);
        };

        console.log('Outer function');

        console.log('arguments', arguments);

        // now call innerFn
        innerFn('x', 'y', 'z');
    }

    format('a', 'b', 'c');

})();