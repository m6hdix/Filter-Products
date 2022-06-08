let allProdruct = []
const fillterTarget = {
    searchItems: ""
}
document.addEventListener("DOMContentLoaded", () => {

    axios
        .get("http://localhost:3000/posts")
        .then((response) => {
            allProdruct = response.data
            fllterApp(allProdruct, fillterTarget);

        })
        .catch(e => console.log(e))


})

function fllterApp(_product, _fillter) {
    const fillterResult = _product.filter((p) => {
        return p.class.toLowerCase().includes(_fillter.searchItems.toLowerCase())

    })
    var targetPirint = document.querySelector(".products")
    targetPirint.innerHTML = ""
    fillterResult.forEach((element) => {
        const pirinter = document.createElement("div")
        pirinter.classList.add("card-items")
        pirinter.innerHTML = `   <figure><img src=${element.img} alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${element.title}</h2>
            <p>${element.price}</p>
            <div class="card-actions ">
                <button class="btn ">Buy Now</button>
            </div>
        </div>`
        targetPirint.append(pirinter)


    });
}
const searchBox = document.querySelector("#search")
searchBox.addEventListener("input", (e) => {
    fillterTarget.searchItems = e.target.value
    fllterApp(allProdruct, fillterTarget);

})

const brns = document.querySelectorAll(".btn")
brns.forEach((e) => {
    e.addEventListener("click", (el) => {
        const tareget = el.target.dataset.filter
        fillterTarget.searchItems = tareget
        fllterApp(allProdruct, fillterTarget);
        if (tareget == "All") {
            const fillterTarget = {
                searchItems: ""
            }
            fllterApp(allProdruct, fillterTarget);
        }
    });
})