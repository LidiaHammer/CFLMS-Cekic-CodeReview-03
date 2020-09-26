function calculateInsurance() {
  var a = document.getElementById('nameInput').value;

  num1 = document.getElementById('ageInput').value;

  var c = document.getElementById('select').value;

  num2 = document.getElementById('horsepowerInput').value;

  var OMG = '<span id="calculateAustria"></span>';

  var Output = '' + a + ' , your insurance costs ' + OMG + ' €.';

  document.getElementById('result').innerHTML = Output;
  if (c == 'Austria') {
    document.getElementById('calculateAustria').innerHTML = Math.round(
      (num2 * 100) / num1 + 50,
    );
  } else if (c == 'Hungary') {
    document.getElementById('calculateAustria').innerHTML = Math.round(
      (num2 * 120) / num1 + 100,
    );
  } else {
    document.getElementById('calculateAustria').innerHTML = Math.round(
      (num2 * 150) / (num1 + 3) + 50,
    );
  }

  return Output;
}

function CountrySelector() {
  var select = docuement.getElementById('select').value;
  console.log(select);
}
document
  .getElementById('submit')
  .addEventListener('click', calculateInsurance, false);
