



let name = 'ashvin';
console.log(name[0])

console.log('hi' + name);


let colors = ["red", "orange", 'purple']
console.log(colors.length)
console.log(colors.pop())


let d = {
    name: "ashvin",
    age: 12
}


console.log(d.name)



name = "ashvin"
let l = []

function F(number) {

    for (let i = 0; i < name.length; i++) {
        l.push(name[i])
    }
    console.log("hi")
    while (l.length != 0) {
        console.log(l.pop())
    }

}
F(2)
console.log(Math.floor(Math.random()))

// terinary operator

function check ( age){
    age>18 ? console.log("u can drive"): console.log("you cannot drive")
    age>18 ? console.log("u can drive"): age>16 ?  console.log("u can drive a scooter"):console.log("you cannot drive")
}

check(14)


// arrow funtions
const print = (phrase) => console.log(phrase)

const numbers = [ 1,2,3,4,5,6,7,8,9]

const transformer = numbers.map((x)=>x*x,numbers).filter((number)=>number%2==0)


console.log(transformer)


//gettrs and setters in js

let person = {
    fullname: "ashvin",
    job: "software developer",

    get intro() {
        let intro = `Hi, I am ${this.fullname} working as a ${this.job}`;
        return intro;
    },

    set modify(x) {
        this.fullname = x.fullname;
        this.job = x.job;
    }
}

person.modify = { fullname: "navadeep", job: "engineer" };
console.log(person.intro);
