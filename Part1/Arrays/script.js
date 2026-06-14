// let arr = [1,2,3,4,5,6]     //create
// console.log(arr);           //access
// console.log(arr[0]); //print 1
// console.log(arr[10]); //print undefined
// arr[2] = 12; //modify the 2nd index(3) to 12


//Methods
// let arr = [1, 2, 3, 4, 5, 6];
// arr.push(7000); //add 7000 after last index
// arr.pop(); //remove last index
// arr.shift(); //remove starting index
// arr.unshift(0);  //add 0 at starting index
// arr.splice(2,1);  //it remove the item from particular index. splice(from_index,how_many_index)
// let newArr = arr.slice(0,3);  //it return value of sliced array. slice(from_index,how_many_index)
// arr.reverse()
// let sr = arr.sort(function(a,b){
//     // return b-a  //descending order
//     return a-b  //ascending order
// })

// ForEach
// arr.forEach(function(val){
//     console.log(val);

// })

// Map
// let newArr = arr.map(function(val){
//     return 12
// })

// Filter
// let newArr = arr.filter(function (val) {
//     if (val > 5) return true;
// })

// Reduce
// let ans = arr.reduce(function(accumulator,val){
//     return accumulator + val;
// },0)

// Find
// let arr = [
//     {id:1, key:1},
//     {id:2, key:2},
//     {id:3, key:1},
// ]
// let ans = arr.find(function(val){
//     return val.key === 2;
// })

// Some         return true if some condition returns true
// let arr = [1, 2, 3, 4, 5, 6, 91];
// let any = arr.some(function(val){
//     return val > 80
// })


// every         return true if every condition returns true
// let arr = [10, 2, 3, 4, 5, 6, 91];
// let any = arr.every(function (val) {
//     return val > 1
// })

// let arr = [1, 2, 3, 4, 5, 6];
// let [a,b,,c]= arr;      //Destructuring

// let arr = [1, 2, 3, 4, 5, 6];
// // let arr2 = arr;  //copy reference of arr
// let arr3 = [...arr];    //copy value of arr

// let arr = ["apple", "guava", "banana"]
// arr.push("mango");
// arr.unshift("pineapple");
// arr[2]="kiwi"

// let arr = ["green", "yellow"]
// arr.splice(1,0,"red","blue")

// let arr = [1, 2, 3, 4, 5, 6]
// let newArr = arr.slice(1,4)
// console.log(newArr);


// let names = ["Zara","Arjun","Bhavya","Mira"]
// names.sort()
// names.reverse()
// names.sort().reverse()

// let arr = [1,2,3,4]
// let sqr = arr.map(function(num){
//     return num * num ;
// })


// let arr = [5,10,8,12,30]
// let newArr = arr.filter(function(val){
//     // if(val > 10) return val;
//     return val > 10
// })

// let arr = [10, 20, 30];
// let newArr = arr.reduce((accumulator,val)=>{
//     return accumulator + val
// },0)

// let arr = [12, 15, 3, 8, 20]
// let newArr = arr.find((val)=>{
//     return val < 10;
// })

// let arr = [45, 60, 28, 90]
// let newArr = arr.some((val)=>{
//     return val < 35
// })

// let arr = [2,4,6,8,10]
// let newArr = arr.every((val)=>{
//     return val % 2 == 0
// })

// let fullName = ["Harsh", "Sharma"]
// let [firstName,lastName] = fullName

// let a = [1, 2]
// let b = [3, 4]
// let c = [...a, ...b]

// let countries = ["UK", "USA"]
// countries = ["INDIA", ...countries]

let arr = [1, 2, 3]
let newArr = [...arr]