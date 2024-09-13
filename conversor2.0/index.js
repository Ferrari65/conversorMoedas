function convert() {
    const amountInput = document.getElementById('amount');
    const currencySelect = document.getElementById('currency');
    const resultElement = document.getElementById('result');
    
    const amount = parseFloat(amountInput.value);
    const currency = currencySelect.value;
    
    if (isNaN(amount)) {
        resultElement.textContent = 'Por favor, insira um valor válido.';
        return;
    }
    
    let convertedAmount;
    let resultText;
    
    const conversionRate = 5.0;
    
    if (currency === 'BRL') {
        convertedAmount = amount / conversionRate;
        resultText = `${amount} Reais são aproximadamente ${convertedAmount.toFixed(2)} Dólares.`;
    } else {
        convertedAmount = amount * conversionRate;
        resultText = `${amount} Dólares são aproximadamente ${convertedAmount.toFixed(2)} Reais.`;
    }
    
    resultElement.textContent = resultText;
}
