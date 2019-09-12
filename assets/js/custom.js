// Intercepta el Formulario de Contacto
$.validator.setDefaults({
    submitHandler: function () {
        alert("¡Formulario Enviado Correctamente!");
    }
});

//Valida el Formulario de Contacto
$("#contact-form").validate({
    rules: {
        txtFirstName: {
            required: true,
        },
        txtLastName: {
            required: true,
        },
        txtAddress: {
            required: true,
        },
        txtCity: {
            required: true,
        },
        txtCommune: {
            required: true,
        },
        txComment: {
            required: true
        }
    },
    messages: {
        txtFirstName: {
            required: "Por favor, escriba su Nombre",
        },
        txtLastName: {
            required: "Por favor, escriba su Apellido"
        },
        txtAddress: {
            required: "Por favor, escriba la Dirección",
        },
        txtCity: {
            required: "Por favor, escriba una Ciudad",
        },
        txtCommune: {
            required: "Por favor, seleccione una Comuna"
        },
        txtComment: {
            required: "Por favor, escriba un Comentario"
        }

    },
    errorElement: "em",
    errorPlacement: function (error, element) {
        // Add the `invalid-feedback` class to the error element
        error.addClass("invalid-feedback");
        if (element.prop("type") === "checkbox") {
            error.insertAfter(element.next("label"));
        } else {
            error.insertAfter(element);
        }
    },
    highlight: function (element, errorClass, validClass) {
        $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).addClass("is-valid").removeClass("is-invalid");
    }
});

