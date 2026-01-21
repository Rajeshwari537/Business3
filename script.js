let cart = [];
let total = 0;

function addToCart(service, price) {
    cart.push({ service, price });
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById("cartItems");
    const totalPrice = document.getElementById("totalPrice");
    const discountMsg = document.getElementById("discountMsg");

    cartItems.innerHTML = "";
    total = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.service} - ₹${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    // ✅ DISCOUNT LOGIC
    if (total > 1000) {
        total = total * 0.9;
        discountMsg.textContent = "🎉 10% Discount Applied!";
    } else {
        discountMsg.textContent = "";
    }

    totalPrice.textContent = total.toFixed(2);
}

// ✅ FEEDBACK VALIDATION
document.getElementById("feedbackForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const mobilePattern = /^[6-9]\d{9}$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email");
        return;
    }

    if (!mobilePattern.test(mobile)) {
        alert("Please enter a valid mobile number");
        return;
    }

    document.getElementById("successMsg").textContent =
        "Thank you for your feedback 🐾";
});

// ✅ CLEAR FORM
function clearForm() {
    document.getElementById("feedbackForm").reset();
    document.getElementById("successMsg").textContent =
        "Form cleared successfully 😊";
}

// ✅ HIDE / SHOW SECTION
function toggleTestimonials() {
    const box = document.getElementById("testimonialBox");
    box.style.display = box.style.display === "none" ? "flex" : "none";
}
