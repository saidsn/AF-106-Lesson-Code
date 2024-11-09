//! OOP in JS

// class Person {
//   constructor(x, y, z) {
//     this.firstname = x;
//     this.surname = y;
//     this.age = z;
//   }

//   show() {
//     console.log(
//       `Name: ${this.firstname}, Surname: ${this.surname}, Age: ${this.age}`
//     );
//   }
// }

// const nergiz = new Person("Nergiz", "Abdullayeva", 20);
// const seda = new Person("Seda", "Novruz", 19);
// nergiz.show();
// seda.show();

//! Static methods in JS

// class Calculate {
//   static firstname = "Seid";

//   sum(num1, num2) {
//     console.log(num1 + num2);
//   }

//   static sub(num1, num2) {
//     console.log(num1 - num2);
//   }
//   mult(num1, num2) {
//     console.log(num1 * num2);
//   }
//   div() {
//     console.log(num1 / num2);
//   }
// }
// const calc = new Calculate();

// calc.sum(10, 5);
// Calculate.sum(10, 5);
// console.log(Calculate.firstname);

// calc.mult(5, 5);

//! Encapsulation in JS

// class BankAccount {
//   #balance;

//   constructor(initialBalance) {
//     this.#balance = initialBalance;
//   }

//   add(amount) {
//     if (amount > 0 && amount < 2000) {
//       this.#balance += amount;
//       console.log(
//         `You added ${amount} to your balance and now your balance is ${
//           this.#balance
//         }`
//       );
//     }
//   }

//   get(amount) {
//     if (amount > 0 && amount <= this.#balance) {
//         this.#balance -= amount;
//         console.log(`You get ${amount} from your balance and now your balance is ${this.#balance}`);
//     }
//   }
// }
// const account = new BankAccount(100);
// account.add(200);
// account.get(150)
// account.get(60)
// // console.log(BankAccount.balance);
// // console.log(account.balance);

//! Inheritance vs Polymorphism in JS

// class Animal {
//   constructor(name, sound) {
//     this.name = name;
//     this.sound = sound;
//   }

//   makeSound() {
//     console.log(`${this.name} can be say ${this.sound}`);
//   }
// }

// class Dog extends Animal {}
// class Cat extends Animal {}
// class Bird extends Animal {}

// const dog = new Dog("Rex", "ham-ham");
// dog.makeSound();
// const cat = new Cat("Tom", "meow-meow");
// cat.makeSound();
// const bird = new Bird("Koko", "chirik-chirik");
// bird.makeSound();

//! Super keyword in JS

// class Person {
//   name = "Elnur";

//   ok() {
//     console.log(this.name);
//   }
// }

// class Student extends Person {
//   hoqqa() {
//     super.ok();
//   }
// }

// // const person = new Person()
// // person.write()

// const student = new Student();
// student.hoqqa();

// //! Super() in JS

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Student extends Person {
//   constructor(name, age, height) {
//     super(name, age);
//     this.height = height;
//   }

//   get() {
//     console.log(`Name: ${this.name}, Age: ${this.age}, Height: ${this.height}`);
//   }
// }

// const student = new Student("Arzu", 19, 1.54);
// student.get()
