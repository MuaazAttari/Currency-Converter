const currency = {
  USD: 1,
  PKR: 280,
  INR: 74.57,
  EUR: 0.905,
};
document
  .getElementById("converter-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let formCurrency = document.getElementById("from").value;
    let toCurrency = document.getElementById("to").value;
    let amount = document.getElementById("amount").value;

    let fromAmount = currency[formCurrency];
    let toAmount = currency[toCurrency];
    let baseAmount = amount / fromAmount;
    let convertedAmount = baseAmount * toAmount;
    document.getElementById(
      "result"
    ).textContent = `Converted Amount: ${Math.round(convertedAmount)}`;
  });
