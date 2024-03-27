const inputJumPil = document.querySelector('.jumPil .jumlahPilihanInput');
const kotak = document.querySelector('.kotak');
const okButton = document.querySelector('.okButton');

function createHobiInputs(jumlah) {
    for (let i = 0; i < jumlah; i++) {
        const label = document.createElement('label');
        label.innerText = 'HOBI ' + (i + 1) + ' :';

        const input = document.createElement('input');
        input.type = 'text';
        input.classList.add('form-control', 'form-control-sm', 'hobiInput');
        input.placeholder = 'Masukkan hobi ' + (i + 1);

        const div = document.createElement('div');
        div.appendChild(label);
        div.appendChild(input);
        kotak.appendChild(div);
    }
}

function createCheckboxInputs(hobiInputs) {
    hobiInputs.forEach(hobi => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('form-check-input');

        const label = document.createElement('label');
        label.classList.add('form-check-label');
        label.innerText = hobi;

        const div = document.createElement('div');
        div.classList.add('form-check');
        div.appendChild(checkbox);
        div.appendChild(label);
        kotak.appendChild(div);
    });
}

okButton.addEventListener('click', function() {
    const jumlahHobi = parseInt(inputJumPil.value);
    if (!isNaN(jumlahHobi) && jumlahHobi > 0) {
        createHobiInputs(jumlahHobi);
        
        const okButton2 = document.createElement('button');
        okButton2.innerText = 'OK';
        kotak.appendChild(okButton2);
        
        okButton.disabled = true;
        
        okButton2.addEventListener('click', function() {
            const hobiInputs = [];
            document.querySelectorAll('.hobiInput').forEach(input => { // seleksi hanya input dengan kelas 'hobiInput'
                hobiInputs.push(input.value);
            });
            createCheckboxInputs(hobiInputs);
            okButton2.disabled = true;
            
            const submitButton = document.createElement('button');
            submitButton.innerText = 'Submit';
            kotak.appendChild(submitButton);
            
            submitButton.addEventListener('click', function() {
                const namaDepan = document.querySelector('.NamaDepan .namaDepanInput').value;
                const namaBelakang = document.querySelector('.NamaBelakang .namaBelakangInput').value;
                const email = document.querySelector('.email .emailInput').value;
                
                const pilihanCheckbox = [];
                document.querySelectorAll('.form-check-input:checked').forEach(checkbox => {
                    const label = checkbox.nextElementSibling.innerText;
                    pilihanCheckbox.push(label);
                });

                kotak.innerHTML = "Hallo, nama saya " + namaDepan + " " + namaBelakang + ", dengan email " + email + ", saya mempunyai sejumlah " + jumlahHobi + " pilihan hobi yaitu " + hobiInputs.join(", ") + ", dan saya menyukai " + pilihanCheckbox.join(", ");
            });
        });
    } else {
        alert('Masukkan jumlah pilihan hobi yang valid!');
    }
});
