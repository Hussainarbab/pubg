document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const ucAmount = document.getElementById('uc-amount').value;
    const phoneNumber = document.getElementById('phone-number').value;

    if(ucAmount > 0 && phoneNumber) {
        alert(`Processing payment for ${ucAmount} UC via EasyPaisa. Phone: ${phoneNumber}`);
        
    } else {
        alert('Please fill out all fields correctly.');
    }
});
