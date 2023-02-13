// Exercise
// Create a class Animal that has:
// name
// type - carnivore / herbivore / omnivore
// age
// size
// eat - a method that checks if the input is an Animal.
// If the input is an Animal and If this object animal is herbivore write in the console:
//  The animal(this animal name) is a herbivore and does not eat other animals
// If the input is an Animal, and If this object animal is not herbivore, then change
// the input Animal property isEaten to true and log in the console: The animal(this animal name)
//  ate the(the input animal name).
// If the animal is twice as large or larger than this animal than just log in the console:
//  The animal(this animal name) tried to eat the(the input animal name) but it was too large.
// If the input is not an animal just write: The animal(this animal name) is eating(the input).
//     isEaten = default false

class Animal {
    constructor(name, type, age, size) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = false;
    }
    eat(input) {
        if (input instanceof Animal) {
            if (this.type === "herbivore") {
                console.log(` The animal ${this.name} is a herbivore and does not eat other animals.`)
            } else if (this.type !== "herbivore") {
                if (input.size >= this.size * 2) {
                    console.log(`The animal ${this.name} tried to eat the ${input.name} but it was too large.`)
                } else {
                    this.isEaten = true;
                    console.log(`The animal ${this.name} ate the ${input.name}.`)
                }
            }
        } else {
            console.log(`The animal ${this.name} is eating ${input}.`)
        }
    }
}

let animal1 = new Animal('Wolf', 'carnivore', 10, 173);
let animal2 = new Animal('Cow', 'herbivore', 7, 92);
let animal3 = new Animal('Panda', 'empty', 7, 92);
let animal4 = new Animal('Leopard', 'carnivore', 7, 100);
let animal5 = new Animal('Elephant', 'herbivore', 7, 400);
let food = (`bamboo`);

animal1.eat(animal2);
animal2.eat(animal2);
animal4.eat(animal5);
animal3.eat(food);

