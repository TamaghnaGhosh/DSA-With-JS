// const p = new Promise((resolve, reject) =>
//   setTimeout(() => resolve("Tamaghna"), 5000)
// );
// const p = new Promise((resolve, reject) =>
//   setTimeout(() => reject("Tamaghna"), 5000)
// );

// const p1 = new Promise((resolve, reject) =>
//   setTimeout(() => resolve("Tamaghna Ghosh"), 3000)
// );
// async function getData() {
//   return p;
// }

// async function getData1() {
//   console.log("hello World!");

//   const res = await p;
//   console.log("Tama await");
//   console.log(res);

//   const res1 = await p1;
//   console.log("Tama await 1");
//   console.log(res1);
// }
// getData1().catch((err) => console.error(err));

// function getData() {
//   p.then((res) => {
//     console.log(res);
//   });
//   console.log("Tama not await");
// }
// getData();

// let arr = [1, 2, 3, 4, 2, 4, 3];
// const count = {};

// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   if (element in count) {
//     count[element] += 1;
//   } else {
//     count[element] = 1;
//   }
//   // count[element] = count[element] ? count[element] + 1 : 1;
// }
// console.log(count);

// function rotateArray(arr, steps) {
//   const n = arr.length;
//   const effectiveSteps = steps % n;
//   arr.unshift(...arr.splice(-effectiveSteps));
//   return arr;
// }

// // Example usage:
// const array = [1, 2, 3, 4, 5];
// const steps = 2;
// console.log("Original array:", array);
// console.log("Rotated array:", rotateArray(array, steps));

// function rotateArray(arr, steps) {
//   // If steps are negative, make them positive
//   if (steps < 0) {
//       steps = arr.length + steps;
//   }
//   // Repeat the process 'steps' times
//   for (let i = 0; i < steps; i++) {
//       // Take out the last element and add it to the beginning
//       const lastElement = arr.pop();
//       arr.unshift(lastElement);
//   }
//   return arr;
// }

// // Example usage:
// const array = [1, 2, 3, 4, 5];
// const steps = 2;
// console.log("Original array:", array);
// console.log("Rotated array:", rotateArray(array, steps)); // Output: [4, 5, 1, 2, 3]

// const originalArray = [1, 2, 3, 4, 5, 1, 2, 5, 6, 6];
// function uniQueElement(num) {
//   const uniqu = [];
//   // for(let i=0;i<num.length;i++){
//   //     const element = num[i];
//   // if(!uniqu.includes(element)){
//   //   uniqu.push(element)
//   // }
//   const uniQueArray = num.filter((element, i, array) => {
//     if (!uniqu.includes(element)) {
//       return uniqu.push(element);
//     }
//   });
//   return uniQueArray;
// }
// const unique = uniQueElement(originalArray);
// console.log(unique);

// const Name = "Hi I am Tamaghna Ghosh I am a Frontend Engineer";

// const LongestStringLengthFunction = (name) => {
//   let stringToArray = name.split(" ");
//   let longestStringLength = "";
//   for (let index = 0; index < stringToArray.length; index++) {
//     const element = stringToArray[index];
//     // console.log("🚀 ~ LongestStringLengthFunction ~ element.length:", element," ",element.length)
//     if (element.length > longestStringLength.length) {
//       longestStringLength = stringToArray[index];
//     }
//   }
//   return longestStringLength;
// };

// const longestStringLength = LongestStringLengthFunction(Name);
// console.log("🚀 ~ longestStringLength:", longestStringLength);

// function firstNonRepeatingChar(str) {
//   for (let i = 0; i < str.length; i++) {
//     let char = str.charAt(i);
//     console.log("🚀 ~ firstNonRepeatingChar ~ char:", char)
//     if (str.indexOf(char) === str.lastIndexOf(char)) {
//       return char;
//     }
//   }
//   return null;
// }

// // Example usage:
// const str = "abacabad";
// const firstNonRepeat = firstNonRepeatingChar(str);
// console.log("First non-repeating character:", firstNonRepeat);

// const str = "Hi I am Tamaghna Ghosh I am FrontEnd Engineer";

// const lonestFirstWord = (str) =>
//   str.split(" ").reduce((longest, word) => {
//     if (word.length > longest.length) {
//       return word;
//     } else {
//       return longest;
//     }
//   }, "");

// const res = lonestFirstWord(str);
// console.log(res);

// *************Event Loop *************
// function task(message) {
//   // emulate time consuming task
//   let n = 1;
//   while (n > 0) {
//     n--;
//   }
//   console.log(message);
// }
// async function responceFetch() {
//   let responceFetch = await fetch(
//     "https://jsonplaceholder.typicode.com/todos/1"
//   );
//   const json = await responceFetch.json();
//   console.log("🚀 ~ responceFetch:", json);
// }

// console.log("Start script...");
// task("Download a file.");

// console.log("Done!");
// responceFetch();
// setTimeout(() => {
//   console.log("🚀 " + "setTimeout");
// }, 1000);

// function isPrime(n) {
//   // Check if n is less than or equal to 1
//   if (n <= 1) {
//     return false;
//   }

//   // Iterate from 2 to the square root of n
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     // If n is divisible by i, it is not prime
//     if (n % i === 0) {
//       return false;
//     }
//   }

//   // If n is not divisible by any number from 2 to its square root, it is prime
//   return true;
// }

// // Example usage:
// const number = 23;
// const isPrimeNumber = isPrime(number);

// if (isPrimeNumber) {
//   console.log(`${number} is a prime number.`);
// } else {
//   console.log(`${number} is not a prime number.`);
// }

// const name = { firstName: "Tamaghna", lastName: "Ghosh" };
// const printFullName = function (homeTown, state) {
//   console.log(
//     this.firstName +
//       " " +
//       this.lastName +
//       " is my name" +
//       " and, I am stay in " +
//       homeTown +
//       " " +
//       " district  of " +
//       state
//   );
// };

// printFullName.call(name, "Barrackpore", "West-Bengal");
// printFullName.apply(name, ["Barrackpore", "West-Bengal"]);
// let bidPrintFullName = printFullName.bind(name, "Barrackpore", "West-Bengal");
// console.log(bidPrintFullName);
// bidPrintFullName();

// prototype methods
// function Car(name,model){
//   this.name = name;
//   this.model = model;
// }

// Car.prototype.displayInfo = function(){
//   console.log(this.name,"",this.model);
// }

// const myCar = new Car("Tata","Nano");

// console.log(myCar.name)
// myCar.displayInfo()

// const array = [1,2,3,4,5,6];
// const step = 2;
// function arrayRev(arr,steps){
//     if(step < 0){
//         steps = steps + arr.length;
//     }
//     for(let i = 0; i < steps; i++){
//         const rmvLastElem = arr.pop();
//         arr.unshift(rmvLastElem)
//     }
//     return arr;
// }
// const revArr = arrayRev(array,step);
// console.log(revArr)

// const array = 11;

// function isPrime(arr) {
//   if (arr <= 1) {
//     return "Not Prime";
//   }
//   for (let i = 2; i < Math.sqrt(arr); i++) {
//     if (arr % i === 0) {
//       return "Not Prime";
//     }
//   }
//   return "Prime";
// }
// const res = isPrime(array);
// console.log(res);

// const  arr = [1,2,3,4,5];
// var k=7;
// var pos = 2;

// op = [1,2,7,3,4,5];
// var new_arr =[]
// var j=0;
// for (var i=0;i<arr.length+1;i++){

//     if(i===pos){
//         new_arr[i]=k
//         continue;
//     }
//     else{
//         new_arr[i]=arr[j]
//         j++;
//     }

// }
// console.log(new_arr);

// const arr = [1, 2, 3, 4, 5];
// let k = 7;
// let pos = 2;

// // o/p = [1,2,7,3,4,5];
// let new_arr = [];

// for (let i = 0, j = 0; i < arr.length + 1; i++, j++) {
//   if (i !== pos) {
//     // new_arr.push(arr[j]);
//     new_arr[i] = arr[j];
//     console.log("🚀 ~ new_arr:", new_arr);
//   } else {
//     new_arr[i] = k;
//     j--;
//   }
// }

// console.log(new_arr);

// arr.splice(pos, 0, k);

// console.warn(arr);

// function fibonacci(n) {
//   let a = 0,
//     b = 1;

//   for (let i = 2; i <= n; i++) {
//     let temp = b;
//     b = a + b;
//     a = temp;
//   }

//   if (n === 0) {
//     return a;
//   } else {
//     return b;
//   }
//   //   return n === 0 ? a : b;
// }

// // Example usage
// console.log(fibonacci(5));
// console.log(fibonacci(10));

// function fibonacci(n) {
//   // Create an array to store calculated Fibonacci numbers
//   const fibArray = [0, 1];

//   // Base cases
//   // fibArray[0] = 0;
//   // fibArray[1] = 1;

//   // Calculate Fibonacci numbers using dynamic programming
//   for (let i = 2; i <= n; i++) {
//     fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
//   }

//   // Return the nth Fibonacci number
//   return fibArray[n];
// }

// // Example usage
// console.log(fibonacci(10)); // Output: 55
// console.log(fibonacci(15)); // Output: 610

// const array = [1, 2, 3, 4, 1, 2, 3, 5];

// let obj = new Set(array);

// obj.add(8);

// obj.delete(5);

// let objAdd = { name: "Tamaghna" };

// obj.add(objAdd);

// console.log(obj.has(name));
// console.log(obj.__proto__);

// let myMap = new Map([
//   ["a1", "Roni"],
//   ["a2", "Ghosh"],
// ]);
// // myMap.set("a2","Tama")
// // myMap.delete("a2")
// // console.log("🚀 ~ myMap:", myMap.get("a2"));

// for (const [key, value] of myMap) {
//   console.log("🚀 ~ key:", key + "" + "🚀 ~ value:", value);
// }

// let ws = new WeakSet();
// let obj1 = { name: "Roni" };
// let obj2 = { name: "Ghosh" };
// ws.add(obj1);
// ws.add(obj2);
// // ws.delete(obj2);
// console.log("🚀 ~ ws:", ws);

// let wm = new WeakMap();
// let obj1 = {};
// let obj2 = {};
// let obj3 = {};
// wm.set(obj1, "Tamaghna");
// wm.set(obj2, "Ghosh");
// wm.set(obj3, "Roni");
// console.log("🚀 ~ wm:", wm);

// let array = ["A", 1, 2, 3, "B", 4, 5, 6];

// console.dir(array);

// const arr = ['A', 'N', 'U'];
// arr[10] = 10;

// console.log(arr.length)

// function findMissingNumber(arr) {
//     let n = arr.length + 1; // The length of the array plus 1
//     let expectedSum = (n * (n + 1)) / 2; // Sum of numbers from 1 to n
//     let actualSum = 0; // Initialize actual sum

//     // Calculate actual sum of elements in the array
//     for (let num of arr) {
//         actualSum += num;
//     }

//     // The missing number is the difference between expected and actual sum
//     let missingNumber = expectedSum - actualSum;

//     return missingNumber;
// }

// // Example usage:
// let arr = [1, 2, 3, 4, 6];
// console.log("The missing number is:", findMissingNumber(arr)); // Output: 5

// function Person(name){
//     this.name = name;
// }

// Person.prototype.age = 25;

// const viratKohli = new Person('Virat');

// console.log(Object.values(viratKohli));

// const arr = [];
// for(let key in viratKohli){
//     arr.push(viratKohli[key])
// }
// console.log(arr)

// function generatorPassword(){
//     let pass = '';
//     let charStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@$%^*~+=&-/';
//     let passwordLength = 20;
//     for(let i=0;i<=passwordLength;i++){
//         let char = Math.floor(Math.random()*charStr.length)
//      //   pass = pass.concat(charStr.charAt(char));
//         pass += charStr.charAt(char);
//     }
//     console.log(pass)
//  }
//  generatorPassword()

// const find = (str) => {
//     let strToArr = str.split(" ");
//     let strToRes = [];
//     strToArr.forEach((item, i) => {
//       strToRes.push(item.replace(item[0], item[0].toUpperCase()));
//     });
//     strToRes.unshift("#");
//     let returnArrToStr = strToRes.join("");
//     return returnArrToStr;
//   };
//   console.log(find("My name is tamaghna ghosh")); //o/p- #MyNameIsTamaghnaGhosh


function a(){
  console.log(x);
  let x = 10;
}
a();

// let a = 10;
// setTimeout(()=>{ a=20 }, 100);
// console.log(a)
