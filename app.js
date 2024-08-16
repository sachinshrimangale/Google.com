// const URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"
// let getdata=async()=>
// {
// let data = await fetch(URL)
// console.log(data)
// let json = await fetch(data.json)
// console.log(json)
// }
// console.log(getdata())
// let body = document.querySelector("body")
// body.addEventListener("mouseover",()=>{
//     window.document.body.style.backgroundColor ="transparent"
// })
// console.log(window)
let modebtn =document.querySelector("#modebtn");
crntmode = "light";
modebtn.addEventListener("click",()=>{
    if(crntmode === "light")
    {
        crntmode ="dark";
        document.body.style.backgroundColor ="black";
        document.header.style.color ="white";
    }
    else{
        crntmode ="light"
        document.body.style.backgroundColor = "white";
        document.header.style.color ="black";

    }
    console.log(crntmode)
})

let icons = document.querySelector("span");
icons.addEventListener("click",()=>{
    alert("Go to Apps!!")
})
let icons2 = document.querySelector(".material-icons");
icons2.addEventListener("click",()=>{
    alert("Go to Profile!!")
})

