// Función para abrir el enlace de WhatsApp con el mensaje predeterminado
function sendWhatsAppMessage() {
    const userName = prompt("Por favor, ingresa tu nombre:");

    // Verificar si el usuario ingresó un nombre
    if (userName) {
        // Guardar el nombre en una variable
        alert(userName) + ", oprimi aceptar..." ;
        console.log("Nombre del usuario:", userName);

        // Puedes hacer más cosas con el nombre aquí
    } else {
        alert("No ingresaste ningún nombre.");
        return;
    }
    // Número de teléfono y mensaje predeterminado
    const phoneNumber = '543547679206';  // Reemplaza con el número de teléfono real
    const message = `Hola, soy , ${userName},estoy en la puerta` ;

    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message);

    // Crear el enlace de WhatsApp
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    // Abrir el enlace en una nueva ventana o pestaña
    window.open(whatsappLink, '_blank');
}

// Asignar el evento 'click' al botón
document.getElementById('btn').onclick = sendWhatsAppMessage;
