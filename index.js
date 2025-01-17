// index.js

// Example using a simple array and iterating over it

const myArray = ['apple', 'banana', 'cherry'];

// Using a for...of loop
for (const fruit of myArray) {
  console.log(fruit);
}

// Using forEach method
myArray.forEach(fruit => {
  console.log(fruit);
});

// Example using a map and iterating over its entries

const myMap = new Map([
  ['name', 'John Doe'],
  ['age', 30],
  ['city', 'New York']
]);

// Using for...of loop to iterate over entries
for (const [key, value] of myMap.entries()) {
  console.log(`${key}: ${value}`);
}

// Using forEach method to iterate over entries
myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
#include<iostream>
using namespace std;
int MediaDeviceInfo(){
    cout<<"Hello world"<<endl;
}