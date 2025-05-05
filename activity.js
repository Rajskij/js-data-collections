// Part 2: Expanding Functionality
let csv = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26'

let cell = ''
let table = []
let row = []

for (let i = 0; i < csv.length; i++) {
	let char = csv[i] 

	if (char !== ',' && char !== '\n') {
		cell = cell + char
	} 

	if (char === ',') {
		row.push(cell)
		cell = ''
	} 

	if (char === '\n' || i === csv.length - 1) {
		row.push(cell)
		cell = ''
		table.push(row)
		row = []
	}
}

// console.log(table)


// Part 3: Transforming Data
// Hard way to solve Part 3

// let csv = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26'

// const objArr = []
// let obj = {}
// let cell = ''
// let counter = 0
// let nCount = 0

// for (let i = 0; i < csv.length; i++) {
//     let char = csv[i]

//     if (char !== ',' && char !== '\n') {
//         cell = cell + char
//     }

//     if (char === ',') {
//         if (counter === 0) {
//             obj.id = cell
//         } else if (counter === 1) {
//             obj.name = cell
//         } else if (counter === 2) {
//             obj.occupation = cell
//         }
//         counter++
//         cell = ''
//     }

//     if (char === '\n' || i === csv.length - 1) {
//         if (nCount === 0) {
//             nCount++
//         } else {
//             obj.age = cell
//             objArr.push(obj)
//         }

//         cell = ''
//         obj = {}
//         counter = 0
//     }
// }

// console.log(objArr)

// Easier way to solve Part 3
let obj = {}
let objArr = []

for (let i = 1; i < table.length; i++) {
    let row = table[i]

    for (let j = 0; j < row.length; j++) {
        if (j === 0) {
            obj.id = row[j]
        } else if (j === 1) {
            obj.name = row[j]
        } else if (j === 2) {
            obj.occupation = row[j]
        } else {
            obj.age = row[j]
        }
    }

    objArr[i - 1] = obj
    obj = {}
}

console.log(objArr)

// Part 4: Sorting and Manipulating Data
// Remove the last element from the sorted array.
objArr.pop()

// Insert the following object at index 1:
const barry = { 
    id: "48", 
    name: "Barry", 
    occupation: "Runner", 
    age: "25" 
}
objArr.splice(1, 0, barry)

// Add the following object to the end of the array:
let bilbo = { 
    id: "7", 
    name: "Bilbo", 
    occupation: "None", 
    age: "111" 
}
objArr.push(bilbo)
console.table(objArr)

// Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. 
// This calculation should be accomplished using a loop.
let avgAge = 0;
for (let i = 0; i < objArr.length; i++) {
    avgAge += parseInt(objArr[i].age)
}

console.log(`Avg age is: ${avgAge / objArr.length}`)
