const products = [
    {
        id: 1, name:"product 1", price: 19.99, imageUrl: "product1.jpg"
    },
    {
        id: 1, name:"product 2", price: 29.99, imageUrl: "product2.jpg"
    },
    {
        id: 1, name:"product 3", price: 39.99, imageUrl: "product3.jpg"
    }
];
document.addEventListener("DOMContentLoaded",() =>
{
    const productsContainer = document.querySelector(".products");
    products.forEach(product =>{
        const productElement = document.createElement ("div");
        productElement.innerHTML =`
        <img src="${product.imageUrl}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productsContainer.appendChild(productElement);
});
});

function addToCart(productId) {
// Logic to add product to cart (could use local storage or send request to server)
alert(Product with ID ${productId} added to cart!);
}
