// script.js
class Pizza {
    constructor(size, toppings, crust, instructions) {
        this.size = size;
        this.toppings = toppings;
        this.crust = crust;
        this.instructions = instructions;
    }

    describe() {
        return `You ordered a ${this.size} pizza with ${this.toppings.join(', ')} on a ${this.crust} crust. Special instructions: ${this.instructions}`;
    }
}

document.getElementById('pizzaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const size = document.getElementById('size').value;
    const crust = document.getElementById('crust').value;
    const instructions = document.getElementById('instructions').value;
    const toppings = [...document.querySelectorAll('input[name="toppings"]:checked')].map(input => input.value);

    const pizza = new Pizza(size, toppings, crust, instructions);

    document.getElementById('orderSummary').textContent = pizza.describe();
});

document.getElementById('studentInfo').textContent = 'Student Name: Saad Zaidi | ID: 1226354';
