//1.
const recipeNameElem = document.getElementById("recipe-name");
console.log(recipeNameElem.innerText);

//2.
console.log(recipeNameElem.tagName);

//3.
const descElem = document.querySelector(".description");
console.log(window.getComputedStyle(descElem).fontSize);

//4.
const imgElem = document.querySelector(".image-container > img");
console.log(imgElem.getAttribute("alt"));

//5.
const imgInfo = {
    url: imgElem.getAttribute("src"),
    height: imgElem.height,
    width: imgElem.width
};
console.log(imgInfo);

//6.
const ingrElem = document.querySelector(".ingredients-list-paste");
console.log(ingrElem.childElementCount);

//7.
const forthIngr = ingrElem.children[3];
console.log(forthIngr.innerText);

//8.
const instructsElem = document.querySelector(".instructions-list");
const instructsArray = [];
for (let i = 0; i < instructsElem.children.length; i++) {
    instructsArray.push({
        order: i + 1,
        instruction: instructsElem.children.item(i).innerText
    });
}
console.log(instructsArray);

