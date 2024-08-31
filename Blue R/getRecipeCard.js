export const getRecipeCard=(recipes, parentElement, createElement) => {
    for(let recipe of recipes){
        const cardContainer=createElement("div")
        cardContainer.classList.add("card")

        const img=createElement("img")
        img.classList.add("img")
        // img.setAttribute("src", recipe.[image-url])
        img.setAttribute("src", recipe.url)
        cardContainer.appendChild(img)

        const description=createElement("div")
        description.classList.add("description")

        const txt=createElement("p")
        txt.innerText=recipe.name
        description.appendChild(txt)

        const time=createElement("p")
        time.innerText=recipe.time
        description.appendChild(time)

        cardContainer.appendChild(description)

 
        const cuisine=createElement("p")
        cuisine.innerText=recipe.type
        cuisine.classList.add("cuisine")
        cardContainer.appendChild(cuisine)
       
        const btnDiv=createElement("div")
        btnDiv.classList.add("cardBtn")

        const btnG=createElement("button")
        btnG.classList.add("btn")
        btnG.setAttribute("data-id", recipe.ID)
        btnG.innerText="Get Recipe"
        btnDiv.appendChild(btnG)

        const btnA=createElement("button")
        btnA.classList.add("btn", "add")
        btnA.setAttribute("data-id", recipe.id)
        btnA.innerText="Add to cart"
        btnDiv.appendChild(btnA)

        cardContainer.appendChild(btnDiv)

        parentElement.appendChild(cardContainer)

    }
    
}
