function calculateBMI() {
  // Clear previous results
  document.getElementById("result").innerHTML = "";

  // Get user input
  var weightInput = document.getElementById("weight");
  var heightInput = document.getElementById("height");
  var weight = weightInput.value;
  var height = heightInput.value;

  // Validate input
  var error = false;
  if (weight <= 0 || height <= 0) {
    error = true;
    weightInput.classList.add("error");
    heightInput.classList.add("error");
    document.getElementById("result").textContent =
      "Please enter valid weight and height.";
  } else {
    weightInput.classList.remove("error");
    heightInput.classList.remove("error");
  }

  // Calculate BMI if input is valid
  if (!error) {
    var bmi = weight / (height * height);
    document.getElementById("result").textContent =
      "Your BMI is: " + bmi.toFixed(2);
  }
}
