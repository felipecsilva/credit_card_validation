document.addEventListener('DOMContentLoaded', function() {
    const cardInput = document.getElementById('card-number');
    const submitButton = document.getElementById('submit-button');
    const resultDisplay = document.getElementById('result');

    submitButton.addEventListener('click', function() {
        const cardNumber = cardInput.value.trim();
        const cardBrand = identifyCardBrand(cardNumber);

        if (cardBrand) {
            resultDisplay.textContent = `Card Brand: ${cardBrand}`;
        } else {
            resultDisplay.textContent = 'Invalid card number. Please try again.';
        }
    });

    function identifyCardBrand(number) {
        const cardPatterns = {
            'Visa': /^4[0-9]{12}(?:[0-9]{3})?$/,
            'MasterCard': /^5[1-5][0-9]{14}$/,
            'American Express': /^3[47][0-9]{13}$/,
            'Discover': /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        };

        for (const [brand, pattern] of Object.entries(cardPatterns)) {
            if (pattern.test(number)) {
                return brand;
            }
        }
        return null;
    }
});