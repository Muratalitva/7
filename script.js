const cartItems = []
const container = document.getElementById('container')
const searchValue = document.getElementById('search')
const searchButton = document.getElementById('searchBTN')
const cart = document.getElementById('cart')
function renderItems(array) {
    container.innerHTML = ''
    array.forEach(element => {
        container.innerHTML += `
        <div class="card">

        <img src="${element.image}" alt="">
    
        <h1>${element.title}</h1>
        <p>${element.description}</p>
        <div>
          <h2>${element.price}</h2>
          <b>${element.currency}</b>
        </div>
        <button onclick="addTocart(${element.id})"  id="btn">add to cart</button>
      </div>
        `
    });
}
function addTocart(el) {


    cartItems.push(data[Number(el)])
    renderCartItems(cartItems)


}

function renderCartItems(array) {
    cart.innerHTML = ''
    array.forEach(element => {
        cart.innerHTML += `   <div class="cartItem">
        <img width="30px" class="cartImage" src="${element.image}" alt="">
        <div>
          <h1>${element.title}</h1>

          <h2>${element.price} <u>${element.currency}</u></h2>
        </div>
      </div>`
    })
}
function search() {
    const filteredData = []
    data.forEach((el) => {
        if (el.title === searchValue.value) {
            filteredData.push(el)
        }
    })
    renderItems(filteredData)
}
searchButton.addEventListener('click', search)

function clearFilter() {
    renderItems(data)
}

const productsList = document.getElementById("products");

document.getElementById("filter").addEventListener("click", () => {
  const min = Number(document.getElementById("min").value)
  const max = Number(document.getElementById("max").value)

  productsList.innerHTML = products.filter(product => product.price >= min && product.price <= max).map(product => `<li>${product.name} - ${product.price}</li>`).join("");
});

renderItems(data)