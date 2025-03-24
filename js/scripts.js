// script.js

// Class to represent a Pizza order
class Pizza {
    constructor(size, toppings, crust, instructions) {
        this.size = size; // Pizza size
        this.toppings = toppings; // Array of toppings
        this.crust = crust; // Type of crust
        this.instructions = instructions; // Special instructions
    }

    // Method to describe the pizza order
    describe() {
        return `You ordered a ${this.size} pizza with ${this.toppings.length > 0 ? this.toppings.join(', ') : 'no toppings'} on a ${this.crust} crust. Special instructions: ${this.instructions || 'None'}`;
    }
}

// Event listener for form submission
document.getElementById('pizzaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh

    // Retrieving values from the form
    const size = document.getElementById('size').value;
    const crust = document.getElementById('crust').value;
    const instructions = document.getElementById('instructions').value.trim();
    const toppings = [...document.querySelectorAll('input[name="toppings"]:checked')].map(input => input.value);

    // Form validation
    if (!size || !crust) {
        alert('Please select a size and crust type.');
        return;
    }

    // Creating a Pizza object
    const pizza = new Pizza(size, toppings, crust, instructions);

    // Displaying the order summary
    document.getElementById('orderSummary').textContent = pizza.describe();

    // Dynamically show student info on click
    document.getElementById('studentInfo').textContent = 'Student Name: Saad Zaidi | ID: 123456';

    // Logging the order for debugging
    console.log(pizza);
});

