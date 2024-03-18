

const inputJumPil = document.querySelector('.inputJumPil')
const kotak = document.querySelector('.kotak')
const button = document.querySelector('.okButton')
const jumlahValue = parseInt(inputJumPil.value);




function onClick() {
    const jumlahValue = parseInt(inputJumPil.value);
    for (let i = 0; i < jumlahValue; i++) {
        const label = document.createElement('label');
        const input = document.createElement('input');

        label.innerText = "pilihan" + (i + 1);
        input.type = "text";

        const div = document.createElement('div');

        div.append(label);
        div.append(input);

        kotak.append(div);
    }
}



button.addEventListener('click', onClick);




