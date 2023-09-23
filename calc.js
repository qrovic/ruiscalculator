
function appendToDisplay(value) {
    let display = document.getElementById('display');
    display.value += value;
  }
  
  function clearDisplay() {
    let display = document.getElementById('display');
    display.value = '';
  }
  
  function calculateResult() {
    let display = document.getElementById('display');
    try {
      let result = eval(display.value);
      display.value = result;
    } catch (error) {
      display.value = 'Error';
    }
  }

