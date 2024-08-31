import { getRecipeCard } from "./getRecipeCard.js";
import { getCuisineCard }  from "./getCuisine.js"

const RECIPEURL='recipes.json'
const CUISINEURL='cuisine.json'

const createElement=(element)=>document.createElement(element)

const cardParentContainer=document.querySelector(".main")
const cuisineParentContainer=document.querySelector(".filter")

const getData=async (URL)=>{
    try{
        const { data } =await axios.get(URL)
        return data
    }catch(err){
        console.log(err);
        
    }
}

const recipes=await getData(RECIPEURL)
const cuisines=await getData(CUISINEURL)

getRecipeCard(recipes, cardParentContainer, createElement)
getCuisineCard(cuisines, cuisineParentContainer, createElement)

//input
const searchBox=document.querySelector(".input")
let searchValue=""
let fillteredArrOfRecipes=[]

const getFilteredData=()=>{
    //for input, searching on input the name of recipes
    fillteredArrOfRecipes= searchValue?.length > 0? recipes.filter((recipe) => recipe.name.toLowerCase().includes(searchValue)) : recipes
    if(arrOfSelectedCuisine?.length >0){
        //apply filter bassed on input search
        fillteredArrOfRecipes=searchValue?.length <1 ? recipes : fillteredArrOfRecipes
        // apply filter bassed of: if the cuisine key from recipes.json 
        //matches the id of filter.json? it will return me the cards
        fillteredArrOfRecipes=fillteredArrOfRecipes.filter(recipe => arrOfSelectedCuisine.includes(recipe.Cuisine)) 
    }
    return fillteredArrOfRecipes
}

const searchInputHandler=(event)=>{
    searchValue=event.target.value.toLowerCase()
    const filteredData=getFilteredData()
    cardParentContainer.innerHTML=""
    getRecipeCard(filteredData, cardParentContainer, createElement)
}

searchBox.addEventListener("keyup", searchInputHandler)

//filter
let arrOfSelectedCuisine=[]

const handleCuisineClick=(event)=>{
    const id=event.target.dataset.id
    const isSelected=event.target.checked
    const selectedCuisine=cuisines.reduce((acc,cur) => 
        cur.ID === acc ? cur.Cuisine : acc, id)
    arrOfSelectedCuisine=isSelected ? [...arrOfSelectedCuisine, selectedCuisine] : arrOfSelectedCuisine.filter((item) => item !== selectedCuisine)
    const filteredArrOfCuisine=getFilteredData()
    cardParentContainer.innerHTML=""
    getRecipeCard(filteredArrOfCuisine, cardParentContainer, createElement)
}

cuisineParentContainer.addEventListener("click", handleCuisineClick)

cardParentContainer.addEventListener("click", (event)=>{
    let cardID=event.target.dataset.id
    let arr=["111", "222", "333", "444", "555", "666", "777", "888", "999", "1000", "1001", "1002", "1003", "1004", "1005", "1025", "1006", "1007", "1008", "1009", "1010", "1011", "1012", "1013", ]
    if(arr.includes(cardID)){
        localStorage.clear()
        localStorage.setItem("id", cardID)
        location.href="recipe.html"
    }else{
        localStorage.setItem("id", cardID)
        location.href="shop.html"
    }
})