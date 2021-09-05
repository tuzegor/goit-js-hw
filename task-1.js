const quantityCategories = document.querySelector("#categories").children.length

console.log("Количество категорий:",quantityCategories);

document.querySelectorAll("li h2").forEach(elem => {
    console.log(`Категория: ${elem.textContent}, Количество: ${elem.nextElementSibling.children.length}`)
})