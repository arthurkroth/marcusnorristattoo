/*function changeIndex(){
    document.getElementById("imageIndex").src="images/Marcus Norris.jpg";
}*/

var inputPhone = document.getElementById("inputPhone").value;

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

// // Function to check if a given value is a number
// function isNumber(value) {
//   return /^-?\d+\.?\d*$/.test(value);
// }

// // Function to handle the form submission

// function handleSubmit(event) {
//   event.preventDefault(); // Prevent the form from submitting initially

//   if (isNumber(inputPhone)) {
//     event.target.submit();
//   } else {
//     alert("Not a valid phone number");
//   }
// }

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
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
