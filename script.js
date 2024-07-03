document.getElementById('cardholder-name-input').addEventListener('input', updateCardName);
document.getElementById('card-number-input').addEventListener('input', updateCardNumber);
document.getElementById('exp-month-input').addEventListener('input', updateExpDate);
document.getElementById('exp-year-input').addEventListener('input', updateExpDate);
document.getElementById('cvc-input').addEventListener('input', updateCVC);

function updateCardName() {
    const cardholderName = document.getElementById('cardholder-name-input').value;
    document.getElementById('cardholder-name-display').textContent = cardholderName || 'FELICIA LEIRE';
}

function updateCardNumber() {
    const cardNumber = document.getElementById('card-number-input').value;
    document.getElementById('card-number-display').textContent = cardNumber || '9591 6489 6389 101E';
}

function updateExpDate() {
    const expMonth = document.getElementById('exp-month-input').value;
    const expYear = document.getElementById('exp-year-input').value;
    document.getElementById('exp-month-display').textContent = expMonth || '09';
    document.getElementById('exp-year-display').textContent = expYear || '00';
}

function updateCVC() {
    const cvc = document.getElementById('cvc-input').value;
    document.getElementById('cvc-display').textContent = cvc || '000';
}

document.getElementById('card-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('card-form').classList.add('hidden');
    document.getElementById('thank-you').classList.remove('hidden');
});

document.getElementById('continue-button').addEventListener('click', function() {
    document.getElementById('thank-you').classList.add('hidden');
    document.getElementById('card-form').classList.remove('hidden');
    document.getElementById('card-form').reset();
    updateCardName();
    updateCardNumber();
    updateExpDate();
    updateCVC();
});
