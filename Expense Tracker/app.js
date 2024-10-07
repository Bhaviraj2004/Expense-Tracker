document.getElementById('addexpense').addEventListener('click', function(e) {
    e.preventDefault();  // Prevents form from refreshing

    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const amount = document.getElementById('amount').value;

    if (description && category && amount) {
        // Append description to the list
        const descList = document.getElementById('expense-descriptions');
        const newDesc = document.createElement('li');
        newDesc.textContent = description;
        descList.appendChild(newDesc);

        // Append category to the list
        const categoryList = document.getElementById('expense-categories');
        const newCategory = document.createElement('li');
        newCategory.textContent = category;
        categoryList.appendChild(newCategory);

        // Append amount to the list
        const amountList = document.getElementById('expense-amounts');
        const newAmount = document.createElement('li');
        newAmount.textContent = amount;
        amountList.appendChild(newAmount);

        // Clear the input fields after adding
        document.getElementById('description').value = '';
        document.getElementById('category').value = '';
        document.getElementById('amount').value = '';
    } else {
        alert('Please fill in all fields.');
    }
});

// Clear all expenses
document.getElementById('clearexpense').addEventListener('click', function() {
    document.getElementById('expense-descriptions').innerHTML = '';
    document.getElementById('expense-categories').innerHTML = '';
    document.getElementById('expense-amounts').innerHTML = '';
});
