'use strict';



// Escript para formulario del home

function handleSubmitContact (event) {
    event.preventDefault();
    let name = document.getElementById('name');
    let correo = document.getElementById('correo');
    let message = document.getElementById('message');

        let data = [
            {
                "name": "firstname",
                "value": name.value
            },
            {
                "name": "email",
                "value": correo.value
            },
            {
                "name": "message",
                "value": messagel.value
            },
        ];

        let json_value = {
            "fields": data,
            "skipValidation": false
        };

        console.log("data", data);

        $.ajax({
            url: 'https://api.hsforms.com/submissions/v3/integration/submit/23210611/9a4ffdd3-32ed-4a26-9d39-4191badbe389',
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(json_value),
            success: function (response) {
                document.getElementById('contact_form').reset();
                let alertSucces = document.getElementById('mail_success_contact');
                alertSucces.style.display = "block";
                setTimeout(function () { alertSucces.style.display = "none"; }, 5000);
            },
            error: function (response) {
                let alertError = document.getElementById('mail_fail_contact');
                alertError.style.display = "block";
                setTimeout(function () { alertError.style.display = "none"; }, 5000);
            }
        });
    }
}
