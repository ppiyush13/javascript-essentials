
(function(){

    console.log(getName());

    function getName() {
        return 'JavaScript';
    }

    console.log(getName());

    {

        function getName() {
            return 'ECMAScript';
        }

        console.log(getName());

    }

    console.log(getName());

})();