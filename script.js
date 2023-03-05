// davaleba 1
let x=0;
for(let i=5; i<100;i++){
    console.log(i);
}
// davleba2
let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for(let item of array1){
    if(item>0 && item <10){
        console.log(item);
    }
}
// davaleba 3
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for(let a of array2){
    if(a===5){
        console.log('aris');
        break;
    }
}
// davaleba 4

let array3= [1, 2, 3, 4, 5];

let sami = 0;

for(s = 0; s < array3.length; s++){
    sami = sami + array3[s];
}
console.log(sami);
// davaleba5

let array4 = [1, 2, 3, 7, 6, 9];

let otxi = 0;

for(i = 0; i < array4.length; i++){
    otxi = otxi + array4[i];
}

let result = otxi / array4.length;

console.log(result);

// davaleba 6
let array5 = [1, 2, 3, 7, 6, 9];
for (let y of array5) {

  if (y === 7) {
    continue;
  }

  console.log(y);
}

// davaleba7
let user = {
    firstname: 'giorgi',
    lastname: 'smith',
    age: 25,
    studentstatus: 'active',
  };
  
  delete user.studentstatus;
  console.log(user);
  
//   davaleba8
let user1 = {
    name: 'giorgi',
    age:  20,
    studentstatus: 'active'
}

if (user1.age < 18 && user1.studentstatus == 'active'){
    console.log('Hello');
}
else if (user1.name == 'levani') {
    console.log('hello levani');
}
else if (user1.studentstatus == 'active' || user1.age < 25) {
    console.log('hello world');
}
else {
    console.log('error')
}

// davaleba9
let array = [
    [2, -3, 5, 10],
    [25, -24, -11, 100],
    [-6, -7, 10],
  ];
  
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    for (let c of element) {
      if (c > 0) {
        console.log(c);
      }
    }
  }
  
// davaleba 10
let array10 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];

for (const x of array10) {

    // pirveli
    if (x % 2 ===0){
        console.log(x);
    }
    // meore
    if (x % 2 ===1){
        console.log(x);
    }
}
// davaleba 11
let users = [
    { username: "giorgi", status: false },
    { username: "levani", status: false },
    { username: "anna", status: true },
  ];
  for(const u of users){
    if (u.status===true){
        console.log(u);
    }
  }