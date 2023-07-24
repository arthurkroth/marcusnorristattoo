// GLOBAL VARIABLES - ARTHUR KROTH

var inputPhone = document.getElementById("inputPhone");

// CHECK IF THE INPUTPHONE FIELD IS RECEIVING A NUMBER AND MINIMUM 10 NUMBERS - ARTHUR KROTH
inputPhone.addEventListener("input", function (event) {
  var phoneNumber = event.target.value;
  // Use regular expression to check if the input contains only numbers
  var isValidPhoneNumber = /^\d+$/.test(phoneNumber);
  var isValidLength = phoneNumber.length >= 10;

  if (!isValidPhoneNumber || !isValidLength) {
    inputPhone.setCustomValidity("Please enter a valid phone number (e.g., 0830101010) with a minimum of 10 digits.");
  } else {
    inputPhone.setCustomValidity(""); // Clear the custom error message
  }
});

//  MODIFYING THE DOM OF THE INDEX PAGE - ARTHUR KROTH
function changeIndex() {
  var image = document.getElementById("imageIndex");
  var imagePath = image.src;

  if (imagePath.endsWith("bio1.jpg")) {
    image.src = "images/bio2.jpg";
  } else if (imagePath.endsWith("bio2.jpg")) {
    image.src = "images/bio3.jpg";
  } else {
    image.src = "images/bio1.jpg";
  }
}

// BOOTSTRAP SCRIPT FOR FORM VALIDATIONS WITH MANUAL/PERSONAL MODIFICATIONS TO WORK ON THIS SPECIFIC FORM - ARTHUR KROTH
// JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          //Next command is to scroll the page to the field if the condition is not met.
          window.scrollTo(300, 300);
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

/* this script will hide images that are not selected and the image that is selected will be displayed in a full-screen overlay along with the text */
 function showSelected(imageName, priceText) {
  var overlay = document.getElementById("overlay");
  var mainContent = document.getElementById("mainContent");

  mainContent.style.display = "none";

  overlay.style.display = "block";
  var selectedImg = document.getElementById("selectedImage");
  selectedImg.src = "images/" + imageName;
  var selectedPrice = document.getElementById("selectedPrice");
  selectedPrice.textContent = priceText;
}

function hideOverlay() {
  var overlay = document.getElementById("overlay");
  var mainContent = document.getElementById("mainContent");

  overlay.style.display = "none";
  mainContent.style.display = "block";
}

var overlay = document.getElementById("overlay");
overlay.addEventListener("click", function () {
  hideOverlay();
});
