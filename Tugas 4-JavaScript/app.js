const inputJumPil = document.querySelector('.inputJumPil');
const kotak = document.querySelector('.kotak');
const button = document.querySelector('.okButton');
const button2 = document.createElement('button');
const inputNama = document.querySelector('.inputNama');
const inputValues = []; 
const submit = document.createElement('button'); 
    

function onClick() {
    const jumlahValue = parseInt(inputJumPil.value);
    for (let i = 0; i < jumlahValue; i++) {
        const label = document.createElement('label');
        const input = document.createElement('input');

        label.innerText = "pilihan " + (i + 1) + " : ";
        input.type = "text";

        const div = document.createElement('div');

        div.append(label);
        div.append(input);

        kotak.append(div);

        inputValues.push(input);
    }

    button.disabled = true;
    button2.innerText = "OK";
    kotak.append(button2);
}

button.addEventListener('click', onClick);

button2.addEventListener('click', function () {
    const jumlahValue = inputValues.length;
    const div = document.createElement('div'); 
   
    submit.addEventListener('click', function() {
        const selectedValue = document.querySelector('input[type="radio"]:checked + label').innerText;
        const resultText = "Hallo, nama saya " + inputNama.value + ", saya mempunyai sejumlah " + jumlahValue + " pilihan yaitu " + inputValues.map(input => input.value).join(", ") + ", dan saya memilih " + selectedValue;
        kotak.innerHTML = ""; 
        const resultElement = document.createElement('p');
        resultElement.innerText = resultText;
        kotak.append(resultElement);
    });

    for (let i = 0; i < jumlahValue; i++) {
        const radioButton = document.createElement('input');
        radioButton.type = "radio";
        radioButton.name = "pilihan"; 

        const label = document.createElement('label');
        label.innerText = inputValues[i].value;

        const radio = document.createElement('div'); 
        radio.append(radioButton);
        radio.append(label);

        div.append(radio); 
    }
    kotak.append(div);
    submit.innerText = "SUBMIT";
    kotak.append(submit); 
    button2.disabled = true;
});
