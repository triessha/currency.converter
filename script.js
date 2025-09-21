const currencies = {
    "USD": { rate: 1, flag: "🇺🇸" },
    "EUR": { rate: 0.91, flag: "🇪🇺" },
    "GBP": { rate: 0.78, flag: "🇬🇧" },
    "INR": { rate: 83.5, flag: "🇮🇳" }, // India explicitly included
    "JPY": { rate: 150.5, flag: "🇯🇵" },
    "AUD": { rate: 1.45, flag: "🇦🇺" },
    "CAD": { rate: 1.36, flag: "🇨🇦" },
    "CNY": { rate: 6.9, flag: "🇨🇳" },
    "CHF": { rate: 0.88, flag: "🇨🇭" },
    "NZD": { rate: 1.55, flag: "🇳🇿" },
    "SEK": { rate: 10.0, flag: "🇸🇪" },
    "SGD": { rate: 1.35, flag: "🇸🇬" }
};
const fromSelect = document.getElementById("fromCurrency");
const toSelect = document.getElementById("toCurrency");
const resultDisplay = document.getElementById("result");

// Populate dropdowns
for (let currency in currencies) {
    const fromOption = document.createElement("option");
    fromOption.value = currency;
    fromOption.text = `${currencies[currency].flag} ${currency}`;
    fromSelect.appendChild(fromOption);

    const toOption = document.createElement("option");
    toOption.value = currency;
    toOption.text = `${currencies[currency].flag} ${currency}`;
    toSelect.appendChild(toOption);
}

// Convert currency
function convertCurrency() {
    const fromCurrency = fromSelect.value;
    const toCurrency = toSelect.value;
    const amount = parseFloat(document.getElementById("amount").value);

    if(isNaN(amount)) {
        alert("Please enter a valid amount");
        return;
    }

    const converted = (amount / currencies[fromCurrency].rate) * currencies[toCurrency].rate;
    resultDisplay.textContent = `${amount} ${fromCurrency} = ${converted.toFixed(2)} ${toCurrency}`;
}
