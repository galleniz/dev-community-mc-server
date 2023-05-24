var currentStep = 1;
var totalSteps = 4;

function nextStep() {
  var currentStepElement = document.getElementById("step" + currentStep);
  currentStepElement.style.display = "none";

  currentStep++;
  if (currentStep > totalSteps) {
    currentStep = totalSteps;
  }

  var nextStepElement = document.getElementById("step" + currentStep);
  nextStepElement.style.display = "block";

  if (currentStep === totalSteps) {
    var serverIPElement = document.getElementById("serverIP");
    serverIPElement.innerText = "devcomunnity.aternos.me"; // Reemplaza con la IP real del servidor
  }
}
