// Part 3: Transforming Data
let csv = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26'

const arr = []
let obj = {}
let cell = ''
let counter = 0
let nCount = 0

for (let i = 0; i < csv.length; i++) {
    let char = csv[i]

    if (char !== ',' && char !== '\n') {
        cell = cell + char
    }

    if (char === ',') {
        if (counter === 0) {
            obj.id = cell
        } else if (counter === 1) {
            obj.name = cell
        } else if (counter === 2) {
            obj.occupation = cell
        }
        counter++
        cell = ''
    }

    if (char === '\n' || i === csv.length - 1) {
        if (nCount === 0) {
            nCount++
        } else {
            obj.age = cell
            arr.push(obj)
        }

        cell = ''
        obj = {}
        counter = 0
    }
}

console.log(arr)

// Part 4: Sorting and Manipulating Data
// Remove the last element from the sorted array.
arr.pop()

// Insert the following object at index 1:
const barry = { 
    id: "48", 
    name: "Barry", 
    occupation: "Runner", 
    age: "25" 
}
arr.splice(1, 0, barry)

// Add the following object to the end of the array:
let bilbo = { 
    id: "7", 
    name: "Bilbo", 
    occupation: "None", 
    age: "111" 
}
arr.push(bilbo)
console.table(arr)

// Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. 
// This calculation should be accomplished using a loop.
let avgAge = 0;
for (let i = 0; i < arr.length; i++) {
    avgAge += parseInt(arr[i].age)
}

console.log(`Avg age is: ${avgAge / arr.length}`)
