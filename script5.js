document.getElementById('mostrarFormulario').addEventListener('click', function() {
    document.getElementById('formulario').style.display = 'block';
    document.getElementById('tarjeta').style.display = 'none';
    this.style.display = 'none';
});

function crearTarjeta() {
    const nombre = document.getElementById("Nombre").value;
    const puesto = document.getElementById("Puesto").value;

    if (nombre && puesto) {
        const tarjetaHTML = `
            <h3>Felicitaciones, ${nombre}!</h3>
            <p>Te damos la bienvenida como nuestro nuevo <strong>${puesto}</strong>.</p>
            <p>¡Esperamos grandes cosas de ti!</p>
        `;

        const tarjeta = document.getElementById('tarjeta');
        tarjeta.innerHTML = tarjetaHTML;
        tarjeta.style.display = 'block';
        document.getElementById('formulario').style.display = 'none';
    } else {
        alert("Por favor completa todos los campos.");
    }
}
