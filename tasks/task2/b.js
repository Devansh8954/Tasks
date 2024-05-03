document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('.chocolate-checkbox');
    const totalPriceDisplay = document.getElementById('total-price');
    const resetButton = document.getElementById('reset-button');
    let totalPrice = 0;
  
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          totalPrice += parseInt(checkbox.value);
        } else {
          totalPrice -= parseInt(checkbox.value);
        }
        totalPriceDisplay.textContent = `Total Price: $${totalPrice}`;
      });
    });
  
    resetButton.addEventListener('click', () => {
      checkboxes.forEach(checkbox => {
        checkbox.checked = false;
      });
      totalPrice = 0;
      totalPriceDisplay.textContent = `Total Price: $${totalPrice}`;
    });
  });
  