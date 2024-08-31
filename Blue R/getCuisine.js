export const getCuisineCard=(arrOfCuisine, parentElement, createElement) =>{
    for(let cuisine of arrOfCuisine){

        const cuisineContainer=createElement("div")
        cuisineContainer.classList.add("filterBox")
        cuisineContainer.setAttribute("data-id", cuisine.ID)

        const checkbox=createElement("input")
        checkbox.setAttribute("type", "checkbox")
        checkbox.classList.add("checkbox")
        checkbox.setAttribute("data-id", cuisine.ID)

        const label=createElement("label")
        label.setAttribute("data-id", cuisine.ID)
        label.classList.add("label")
        label.appendChild(checkbox)

        const labelText=createElement("span")
        labelText.innerText=cuisine.name
        labelText.setAttribute("data-id", cuisine.ID)

        label.appendChild(labelText)
        cuisineContainer.appendChild(label)
        parentElement.appendChild(cuisineContainer)
    }
}