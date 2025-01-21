let users =["kiran","chetan","nitish","bob","ANR"]
let i = users.map((user)=>{
//console.log(users)
return user;
});
console.log(i);
let j = users.forEach((user)=>{
    //console.log(users)
    return user;
    });
    console.log(j);
    // create an array of objects
    // 
    let userDetails ={
        name: "kiran",
        age: 20,
        city: "hyd",
        occupation: "software engineer",
        salary: 12345679,
    }
let q=JSON.stringify(userDetails)
console.log("JSON Object :",q);
let y =JSON.parse(q);
console.log(y);