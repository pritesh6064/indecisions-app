class Person
{
    constructor(name = 'Annonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getDescription(){
        //return 'Hi! ' + this.name;                //ES5
        return `Hi. I am ${this.name} and I am ${this.age}`;            //How to use template string in ES6
    }    
}


class Student extends Person
{
    constructor(name, age, major){
        super(name,age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let desc = super.getDescription(this.name,this.age);

        if(this.hasMajor()){
            desc += ` and my Major is ${this.major}`;
        }
        return desc;
    }
}

class Traveler extends Person
{
    constructor (name, age, location)
    {
        super(name,age);
        this.location = location;
    }

    hasLocation(){
        return !!this.location;
    }

    getDescription(){
        let desc = super.getDescription(this.name,this.age);

        if(this.hasLocation())
        {
            desc += ` and I am from ${this.location}`;
            return desc;
        }
    }
}


const me = new Student('Patrice', 27, 'Computer Science');
console.log(me.getDescription());

const me2 = new Student();
console.log(me2.getDescription());

const me3 = new Traveler('Radpat',27, 'Illinois');
console.log(me3.getDescription());
