
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.job = ""
    }

    getName = () => {
        return this.name;
    }

    getAge = () => {
        return this.age;
    }

    setJob = (job) => {
        this.job = job
    }
}

// let person1 = new Person("pedro", 19)
// let person2 = new Person("jerry", 23)
// console.log(person1.getName());
// console.log(person2.getName());


// class House {
//     constructor(address, price, residents) {
//         this.address = address;
//         this.price = price;
//         this.residents = residents;
//     };

//     getAddress = () => {
//         return this.address
//     }

//     getPrice = () => {
//         return this.price
//     }

//     getResidents = () => {
//         return this.residents
//     }
    
//     addResident = (resident) => {
//         this.residents.push(resident)
//     }
// }


// let Pedro = new Person("pedro", 19);
// let David = new Person("David", 21);
// // console.log(Pedro);

// let house = new House("iufhifcs", 280000, [Pedro, David])
// console.log(house.getResidents());

// let Paulo = new Person("Paulo", 19)
// house.addResident(Paulo);
// console.log(house.getResidents());

// let Pedro = new Person("pedro", 19);
// let house = new House("iufhifcs", 2030, [])
// Pedro.setJob("Developer")
// house.addResident(Pedro);
// console.log(house.getResidents());

class Programmer extends Person{
    constructor(name, age, company, salary, language) {
        super(name, age)
        this.company = company;
        this.salary = salary;
        this.language = language;
    }

    sayHi = () => {
        console.log(`Hello, I'm a programmer! My name is ${this.getName()}, I work for ${this.company}`);
    }
}

let programmer = new Programmer("Pedro", 19, "Twitch", 1000000, "Javascript")
programmer.sayHi()