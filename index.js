// Header Section

const shoppingBag = document.getElementById("cart-box");
const CartItem = document.getElementById("cart-icon");
const crossBtn = document.getElementById("cross-btn");

shoppingBag.addEventListener("click", () => {
  const showCart = CartItem.getAttribute("data-visible");

  if (showCart === "false") {
    CartItem.setAttribute("data-visible", true);
  } else {
    CartItem.setAttribute("data-visible", false);
  }
});

crossBtn.addEventListener("click", () => {
  const showCart = CartItem.getAttribute("data-visible");

  if (showCart === "true") {
    CartItem.setAttribute("data-visible", false);
  }
});

function validate() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  // Simple validation for non-empty fields
  if (name === "" || email === "" || phone === "" || message === "") {
    alert("All fields must be filled out");
    return false;
  }

  var nameRegex = /^[a-zA-Z]{6,}$/;
  if (!nameRegex.test(name)) {
    alert(
      "Name should contain only alphabets and have a minimum length of 6 characters"
    );
    return false;
  }

  // Email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  // Phone number validation (allow only numbers)
  var phoneRegex = /^\d+$/;
  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid phone number (numbers only)");
    return false;
  }

  document.getElementById("success-message").style.display = "block";

  return true; // Form will be submitted if validation passes
}
