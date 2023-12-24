

//Booking Section validations

function bookNow() {
      // Get form elements
      var whereTo = document.getElementById('whereTo');
      var numberOfPersons = document.getElementById('numberOfPersons');
      var startDate = document.getElementById('startDate');
      var endDate = document.getElementById('endDate');
      var description = document.getElementById('description');

      // Validate whereTo
      if (whereTo.value === "") {
        alert("Please select a destination.");
        return;
      }

      // Validate numberOfPersons
      if (numberOfPersons.value === "" || numberOfPersons.value <= 0) {
        alert("Please enter a valid number of persons.");
        return;
      }

      // Validate startDate
      if (startDate.value === "") {
        alert("Please select a start date.");
        return;
      }

      // Validate endDate
      if (endDate.value === "") {
        alert("Please select an end date.");
        return;
      }


      // Validate description
      if (description.value.length < 50) {
        alert("Description must be at least 50 characters.");
        return;
      }

     
      // success message
    alert("Form submitted successfully!");

}









