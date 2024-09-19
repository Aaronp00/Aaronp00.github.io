


document.addEventListener('DOMContentLoaded', function() {
    console.log('The document is ready.');
    

    const pop_up = document.getElementById("customPop");
    const closeNlButton = document.querySelector(".close");

    // Get the form element
    const form = document.getElementById('newsletterForm');

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        // Check if the form is valid
        if (form.checkValidity()) {
            // Prevent the form from submitting the normal way
            event.preventDefault();

            // Show the custom modal
            pop_up.style.display = "block";

            // Optional, clear the form inputs
            form.reset();
        } else {
            // If form is invalid, the browser will show the validation errors
            event.preventDefault(); // Prevents form submission to allow error display
            form.reportValidity(); // This triggers the validation messages to show
        }
    });

    // Close the popup when the close button is clicked
    closeNlButton.onclick = function() {
      pop_up.style.display = "none";
    }


    // Close the popup if the user clicks outside the modal content
    window.onclick = function(event) {
        if (event.target == pop_up) {
          pop_up.style.display = "none";
        }
    }
});