//  Q1-Document-Manipulation

// Task 1: Create an array containing information about different products, including their names, prices, and descriptions.

let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

let products2 =[
    { name: "Jeans", price: 39.99, description: "Blue denim jeans" },
    { name: "Sneakers", price: 59.99, description: "Air Jordan 1 1985" },
    { name: "Jacket", price: 79.99, description: "Sport jacket for basketball" }
];

// Task 2: Write a function to display the product information on the webpage dynamically.

function displayProducts(productList) {
    let productContainer = document.getElementById('product-display');
    // productContainer.innerHTML = '';
    // Commented out to test displaying multiple list

    productList.forEach(product => {
        let productDiv = document.createElement('div');

        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <p>${product.description}</p>
        `;
        productContainer.appendChild(productDiv);
    });
}

// displayProducts(products)
// displayProducts(products2)

// Task 3: Implement an event listener to trigger the display of products when the page loads.

document.addEventListener('DOMContentLoaded', function() {
    displayProducts(products);
    displayProducts(products2);
})

// Q2-Form-Manipulation-with-JavaScript

const form = document.getElementById('form');

form.addEventListener('submit',function(event){
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const displayFormInput = {
        "Username": username,
        "Email": email,
        "Message":message
    };

    console.log(displayFormInput);

});

// Q3-Styling-with-JavaScript

function changeColor(){
    const box = document.getElementById('box');
    box.style.backgroundColor = "red"

}

function changeTextColor(){
    const text = document.getElementById('textColor');
    text.style.color = "blue"

}

function buttonColor(){
    const button = document.getElementById('clickMe');
    button.style.background = "green"

}
