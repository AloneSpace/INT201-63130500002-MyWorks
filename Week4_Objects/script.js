class Person {
    constructor(id, name) {
        if (id.length != 13) this._id = "unknown";
        else this._id = id;

        this._name = name;
    }

    //getter

    get id() {
        return this._id;
    }

    //setter

    set id(id) {
        this._id = id; //backing field
    }

    set name(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    toString() {
        return `person id = ${this._id}, person name= ${this._name}`;
    }
}

let per1 = new Person("1234567", "SomSri");

per1.name = "Umaporn";

console.log(per1.name);
