const submitBtn = document.querySelector(`#submit`);
const resetBtn = document.querySelector(`#reset`);
const userInput = document.querySelector(`#subtotal`);
const stateTax = document.querySelector(`#state-tax`);
const cityTax = document.querySelector(`#city-tax`);
const exciseTax = document.querySelector(`#excise-tax`);
const grandTotal = document.querySelector(`#grand-total`);
const error = document.querySelector(`#error`);

const state = 0.095;
const city = 0.1111;
const excise = 0.15;

const calculateTaxes = (amount, tax) => {
  let result = (amount * tax).toFixed(2);
  return result;
}

const calculateTotal = (amount, state, city, excise) => {
  let result = amount + state + city + excise;
  return result.toFixed(2);
}

// submit button functionality
submitBtn.addEventListener(`click`, (e) => {
  e.preventDefault();

  let subtotal = parseFloat(userInput.value);
  
  if(!subtotal) {
    error.textContent = `Oops – enter a valid amount!`;
  } else {
    // clear error message
    error.textContent = ``;

    // calculate taxes
    let calcState = parseFloat(calculateTaxes(subtotal, state));
    let calcCity = parseFloat(calculateTaxes(subtotal, city));
    let calcExcise = parseFloat(calculateTaxes(subtotal, excise));
  
    // update DOM
    stateTax.textContent = `$${calcState}`;
    cityTax.textContent = `$${calcCity}`;
    exciseTax.textContent = `$${calcExcise}`;
  
    const finalAmount = calculateTotal(subtotal, calcState, calcCity, calcExcise);
    grandTotal.textContent = `$${finalAmount}`;
  }
})

// reset button functionality
resetBtn.addEventListener(`click`, (e) => {
  e.preventDefault();

  // reset DOM states
  userInput.value = ``;
  error.textContent = ``;
  stateTax.textContent = `--`;
  cityTax.textContent = `--`;
  exciseTax.textContent = `--`;
  grandTotal.textContent = `--`;
})