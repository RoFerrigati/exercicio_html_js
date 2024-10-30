const form = document.getElementById('numForm');
const inputA = document.getElementById('campoA');
const inputB = document.getElementById('campoB');
const messageDiv = document.createElement('div'); 
form.appendChild(messageDiv); 


form.addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    const valueA = parseFloat(inputA.value);
    const valueB = parseFloat(inputB.value);


    if (valueB > valueA) {
        messageDiv.textContent = 'ISSO AE! O número B é maior que o número A.'; 
        messageDiv.className = 'message'; 
    } else {
        messageDiv.textContent = 'INCORRETO! O número B deve ser maior que o número A.'; 
        messageDiv.className = 'message error'; 
    }
});
