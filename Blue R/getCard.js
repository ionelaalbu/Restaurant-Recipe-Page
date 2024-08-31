export const getCard=(cardOfRecipes, parentElement, createElement)=>{
    for(let card of cardOfRecipes){
        const cardOne=createElement("div")
        cardOne.classList.add("cardOfRecipe")
        cardOne.setAttribute("data-id", card.ID)

        let div=createElement("div")
        div.classList.add("info")
        cardOne.appendChild(div)

        let img=createElement("img")
        img.classList.add("img")
        img.setAttribute("src", card.url)
        div.appendChild(img)

        let desc=createElement("div")
        desc.classList.add("description")
        div.appendChild(desc)

        let title=createElement("h1")
        title.innerText=card.name
        desc.appendChild(title)

        let min=createElement("p")
        parentElement.innerText=card.time
        desc.appendChild(min)

        let need=createElement("p")
        parentElement.classList.add("need")
        desc.appendChild(need)

        let ul=createElement("ul")
        let li1=createElement("li")
        li1.innerText="item 1"
        let li2=createElement("li")
        li2.innerText="item 2"
        let li3=createElement("li")
        li3.innerText="item 3"
        let li4=createElement("li")
        li4.innerText="item 4"
        let li5=createElement("li")
        li5.innerText="item 5"
        ul.appendChild(li1)
        ul.appendChild(li2)
        ul.appendChild(li3)
        ul.appendChild(li4)
        ul.appendChild(li5)
        desc.appendChild(ul)

        let para=createElement("p")
        para.innerText=card.paragrph
        cardOne.appendChild(para)


        parentElement.appendChild(cardOne)
    }
    
}