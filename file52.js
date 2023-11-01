const { faker } = require('@faker-js/faker'); 
let arr = Array.from(Array(10)) 
arr = arr.map((i) => faker.person.firstName()) 
 
for (let i = 0, tmp; i < arr.length - 1; i++) { 
    for (var j = 0; j < arr.length - 1; j++) { 
        if (arr[j] > arr[j + 1]) { 
            tmp = arr[j]; 
            arr[j] = arr[j + 1]; 
            arr[j + 1] = tmp; 
        } 
    } 
} 
console.table(arr)
