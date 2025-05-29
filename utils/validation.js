export function validateCardNumber(cardNumber) {
    const cardPatterns = {
        'Visa': /^4[0-9]{12}(?:[0-9]{3})?$/,
        'MasterCard': /^5[1-5][0-9]{14}$/,
        'American Express': /^3[47][0-9]{13}$/,
        'Discover': /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    };

    for (const [brand, pattern] of Object.entries(cardPatterns)) {
        if (pattern.test(cardNumber)) {
            return brand;
        }
    }
    return 'Unknown';
}

export function isValidLength(cardNumber) {
    return cardNumber.length >= 13 && cardNumber.length <= 19;
}

export function validateCard(cardNumber) {
    return isValidLength(cardNumber) && validateCardNumber(cardNumber) !== 'Unknown';
}