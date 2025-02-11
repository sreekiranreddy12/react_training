// let element = document.getElementById("demo");
// element.innerText="Google+";

// console.log(element);

// let ele = document.getElementsByClassName("test");
// console.log(ele);
// console.log(Array.isArray(ele));
// ele[0].innerText="Hello";
// ele[0].style.backgroundColor="red";

// let x=[...ele];
// console.log(x,Array.isArray(x));

// x.map(element=>{
//     element.innerText="Hello";
//     element.style.backgroundColor="tomato";
// })

// let ele = document.getElementsByTagName("div");
// console.log(ele);

// let ele = document.getElementsByName("formData");
// [...ele].map(inp=>{
//     console.log(inp.value);
// })

// let ele = document.getElementById("mru");
// console.log(ele);



// let ele = document.querySelector("#mru");
// console.log(ele);

// let ele = document.querySelector(".test");
// console.log(ele);


// let ele = document.querySelectorAll(".test");
// console.log(ele);

//  let ele =document.createElement("h1");
//  ele.innerText=" Dyanmic creation of html element";
//  ele.id="demo";

//  let image =document.createElement("img");
//  image.src="3606208.jpg";
//  console.log(image);
//  document.body.appendChild(ele);
//  document.body.appendChild(image);
//  l

// let vd = document.createElement("video");
// vd.setAttribute("src","./video.mp4");
// vd.setAttribute("controls","controls");
// console.log(vd);

// document.body.appendChild(vd);



// let h1= document.createElement("h1");
// h1.setAttribute("id","demo");
// h1.innerText="My name is kiran";
// console.log(h1);

// document.body.appendChild(h1);

// let mainEle = document.createElement("div");
// mainEle.setAttribute("id", "mainBlock");
// mainEle.style.border="2px solid red";
// mainEle.style.width="550px";
// mainEle.style.height="550px";
// console.log(mainEle);

// let topEle = document.createElement("div");
// topEle.setAttribute("class", "topBlock");
// //console.log(topEle);
// let image = document.createElement("img");
// image.src="./cat.jpg"
// image.style.width = "550px";
// console.log(image);

// let bottomEle = document.createElement("div");
// bottomEle.setAttribute("class", "bottomBlock");
// //console.log(bottomEle);

// let h1 = document.createElement("h1");
// h1.innerText = "CAT";
// console.log(h1);

// let btn = document.createElement("button");
// btn.innerText="View More";
// btn.style.border="none";
// btn.style.padding="20px";
// btn.style.backgroundColor="dodgerblue";
// btn.style.color="color";
// console.log(btn);
// mainEle.appendChild(topEle);

// topEle.appendChild(image);

// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);

// mainEle.appendChild(bottomEle);
// document.body.appendChild(mainEle);
// mainEle.appendChild(topEle);

let form = document.querySelector("form");

let username = document.getElementById("uName");
let password = document.getElementById("uPass");
let check = document.getElementById("check");
let show = document.getElementById("show");

let gender = document.getElementsByName("gender");
// console.log(gender);    
check.addEventListener("click",event=>{
    if(event.target.checked){
        password.setAttribute("type","text");
        show.innerText="Hide Password";

        
    }
    else{
        password.setAttribute("type","password");
        show.innerText="Show Password";
    }
})

form.addEventListener("submit" , event=>{
    event.preventDefault();
    let un = username.value;
    let up = password.value;
    let gen = "";


    for(let i=0;i<=gender.length-1;i++){
        // console.log(gender[i].value);
        // console.log(gender[i].checked);
        if(gender[i].checked == true){
            // console.log(gender[i].value);
            gen = gender[i].value;

        }

    }

    // 
    // 
    // console.log(un , up , gen);

    let userDetails ={
        username:un,
        password:up,
        gender:gen
    }
    console.log(userDetails);
    localStorage.setItem("userData" ,
        JSON.stringify(userDetails)
    )
})