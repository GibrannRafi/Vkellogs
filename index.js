document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    const inputFname = document.getElementById('inputfname');
    const inputUname = document.getElementById('inputuname');
    const inputEmail = document.getElementById('inputemail');
    const inputPhone = document.getElementById('inputphone');
    const message = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validasiForm()) {            
            form.submit();
            window.location.href = "../index.html";
        }
    });

    function validasiForm() {
        // Validasi nama depan
        if (inputFname.value.trim() === '') {
            alert('Nama depan harus diisi.');
            inputFname.focus();
            return false;
        }

        // Validasi username
        if (inputUname.value.trim() === '') {
            alert('Username harus diisi.');
            inputUname.focus();
            return false;
        }

        // Validasi email
        if (inputEmail.value.trim() === '') {
            alert('Email harus diisi.');
            inputEmail.focus();
            return false;
        } else if (!inputEmail.value.includes('@')) {
            alert('Email harus valid.');
            inputEmail.focus();
            return false;
        }

        // Validasi nomor telepon
        if (inputPhone.value.trim() === '') {
            alert('Nomor telepon harus diisi.');
            inputPhone.focus();
            return false;
        } else if (!/^\d+$/.test(inputPhone.value)) {
            alert('Nomor telepon harus berupa angka.');
            inputPhone.focus();
            return false;
        }

        // Validasi pesan
        if (message.value.trim() === '') {
            alert('Pesan harus diisi.');
            message.focus();
            return false;
        }

        // Jika semua validasi terpenuhi
        return true;
    }
});
