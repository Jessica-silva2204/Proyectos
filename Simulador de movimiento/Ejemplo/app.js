//1. mover el boton
const movingButton = document.getElementById('movingButton');
        movingButton.addEventListener('click', () => {
            const newTop = Math.random() * (window.innerHeight - 50) + 'px';
            const newLeft = Math.random() * (window.innerWidth - 100) + 'px';
            movingButton.style.top = newTop;
            movingButton.style.left = newLeft;
});
//2.Manejar eventos para calcular la raiz
const calculateButton = document.getElementById('calculateButton');
calculateButton.addEventListener('click', () =>{
    const numberInput = document.getElementById('numberInput').value;
    const sqrtResult = document.getElementById('sqrtResult');
    const number = parseFloat(numberInput);

    if(!isNaN(number) && number >= 0){
        sqrtResult.value = Math.sqrt(number).toFixed(4);
    }else{
        sqrtResult.value = 'Error: No es un número positivo';
    }
}); 
//3. Boton de contador
const countButton = document.getElementById('countButton');
const countField = document.getElementById('countField');
let count = 0;
countButton.addEventListener('click', () => {
    count += 1;
    countField.value = count;
});
