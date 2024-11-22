// Function to concatenate text from both input boxes
function concatenateText() {
    const text1 = document.getElementById("text1").value;
    const text2 = document.getElementById("text2").value;
  
    if (text1 || text2) {
      document.getElementById("result").textContent = text1 + " " + text2;
    } else {
      document.getElementById("result").textContent = "Please enter text in both fields.";
    }
  }
  
  //TODO Function to reverse the text in the first input box
  function reverseText() {
    
  }
  
  // Function to clear both input boxes
  function clearInputs() {
    document.getElementById("text1").value = "";
    //TODO clear "text2" as well
    document.getElementById("result").textContent = "Inputs cleared!";
  }
  
  // TODO Add event listeners to the buttons
  function setupEventListeners() {
    
  }
  
  // Initialize event listeners when the DOM content is loaded
  window.addEventListener("DOMContentLoaded", setupEventListeners);
  