function updateRemoveButtons() {
    const removeButtons = document.querySelectorAll('.ingredient-row .btn-danger');
    const ingredientRows = document.querySelectorAll('.ingredient-row');

    removeButtons.forEach(button => {
        button.disabled = ingredientRows.length <= 3;
    });
}

function addIngredient() {
    const ingredientsDiv = document.getElementById('ingredients');
    const ingredientRow = document.createElement('div');
    ingredientRow.className = 'ingredient-row';

    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.className = 'ingredient form-control ingredient-input';
    newInput.placeholder = 'Informe um ingrediente culinário...';

    const removeButton = document.createElement('button');
    removeButton.className = 'btn btn-danger';
    removeButton.innerText = 'Excluir';
    removeButton.onclick = () => removeIngredient(removeButton);

    ingredientRow.appendChild(newInput);
    ingredientRow.appendChild(removeButton);
    ingredientsDiv.appendChild(ingredientRow);

    updateRemoveButtons();
}

function removeIngredient(button) {
    const ingredientRow = button.parentElement;
    ingredientRow.remove();
    updateRemoveButtons();
}

async function submitForm() {
    const ingredientInputs = document.getElementsByClassName('ingredient');
    const ingredientes = [];

    for (let i = 0; i < ingredientInputs.length; i++) {
        if (ingredientInputs[i].value.trim()) {
            ingredientes.push(ingredientInputs[i].value.trim());
        }
    }

    if (ingredientes.length < 1){
        alert('Por favor, preencha o campo com um destino!');
        return;
    }

    const data = { ingredientes };

    try {
        const response = await fetch('http://localhost:5000/receita', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        const responseDiv = document.getElementById('response');
        if (result && result.length > 0) {
            const receita = `${result.join('')}`;
            responseDiv.innerHTML = receita;
        } else {
            responseDiv.innerHTML = `<p>Erro: ${result.Erro}</p>`;
        }
        responseDiv.style.display = 'block';
    } catch (error) {
        const responseDiv = document.getElementById('response');
        responseDiv.innerHTML = `<p>Erro: ${error.message}</p>`;
        responseDiv.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', updateRemoveButtons);