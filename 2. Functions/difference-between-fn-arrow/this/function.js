

(() => {

    function Language(name) {

        const obj = {
            level1: {
                level2: {
                    //name: 'for below to work',
                    level3: function () {
                        return this.name;
                    },
                },
            },
        };

        this.name = name;

        this.getName = function() {
            return obj.level1.level2.level3();
        }
    }

    const language = new Language('ECMAScript');
    console.log(language.getName()); 

})();