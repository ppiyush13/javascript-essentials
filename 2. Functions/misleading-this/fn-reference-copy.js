(() => {
    function Student(name) {
        this.name = name;

        this.getName = function() {
            return this.name;
        }
    };

    const student = new Student('Alan');
    console.log(student.getName()); // Alan

    const fnReference = student.getName;
    console.log(fnReference()); // this is pointing to global object or window in case of browser
})();