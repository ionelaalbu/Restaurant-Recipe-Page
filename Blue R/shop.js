const cardID=localStorage.getItem("id")

const SINGLEURL="recipes.json"
const getData=async (URL) =>{
    try{
        const { data } = await axios.get(URL) 
        return data
    }catch(err){
        console.log(err);
    }
}
const singleRecipe=await getData(SINGLEURL)
let parentElement=document.querySelector(".CARD")
// const createElement=(element)=>document.createElement(element)
for(let item of singleRecipe){
        if(cardID.includes(item.id)){
            console.log(item.id);
            parentElement.innerHTML=`
                <div class="container">
                        <img class="img" src="${item.url} " alt="">
                        <p>${item.name}  </p>
                        <p>${item.price} </p>
                        <button class="pay">Pay</button>
                    </div>
            `
        }
}

let button=document.querySelector(".pay")
button.addEventListener("click", ()=>{
    console.log("click");
    parentElement.innerHTML=""
    localStorage.clear()
    window.location.href="payment.html"
})
