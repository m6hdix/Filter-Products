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
        return p.title.toLowerCase().includes(_fillter.searchItems.toLowerCase())
    })
    console.log(fillterResult);
}
const searchBox = document.querySelector("#search")
searchBox.addEventListener("input", (e) => {
    fillterTarget.searchItems = e.target.value
    fllterApp(allProdruct, fillterTarget);
})