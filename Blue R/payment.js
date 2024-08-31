let btn=document.querySelector(".btn")
let gb=document.querySelector("#GB")
btn.addEventListener("click", (event)=>{
    event.preventDefault()
    const name=document.getElementById('name').value
    const cardNumber=document.getElementById('card-number').value
    const expiry=document.getElementById('expiry').value
    const cvc=document.getElementById('cvc').value
    let green=document.querySelector(".green")
    let red=document.querySelector(".red")

    if(name && cardNumber && expiry && cvc){
        green.style.visibility="visible"
        setTimeout(function callback(){
            window.location.href="home.html"
         }, 2000)
        console.log("da");
        
    }else{
        red.style.visibility="visible"
        setTimeout(function callback(){
           red.style.visibility="hidden"
        }, 2000)
        console.log("no");
    }
})
