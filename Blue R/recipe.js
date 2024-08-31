const cardID=localStorage.getItem("id")
const SINGLEURL2="recipes.json"
const getData=async (URL) =>{
    try{
        const { data } = await axios.get(URL) 
        return data
    }catch(err){
        console.log(err);
    }
}
const singleRecipe=await getData(SINGLEURL2)
let parentElement=document.querySelector(".main")
let text=document.querySelector(".heading-2")
//take id from recipes.json
for(let item of singleRecipe){
   // console.log(item.ID);
    if(cardID.includes(item.ID)){
        text.style.visibility="hidden"
        parentElement.innerHTML=`
           <div class="cardOfRecipe">
              <div class="info">
               <img class="img" src=${item.url}>
               <div class="description">
                 <h1> ${item.name}</h1>
                 <p> ${item.time}</p>
                 <p class="need">You need</p>
                        <ul>
                            <li>item 1</li>
                            <li>item 2</li>
                            <li>item 3</li>
                            <li>item 4</li>
                            <li>item 5</li>
                        </ul>
               </div>         
             </div>
            <p class="para"> ${item.paragraph} </p>
         </div>     
            
        `
    }
}
console.log(singleRecipe);
