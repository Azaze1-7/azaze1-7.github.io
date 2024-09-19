function calcularSigno() {
    const añoNacimiento = document.getElementById('año-nacimiento').value;
    const resto = añoNacimiento % 12;

    const imagenes = document.querySelectorAll('.signo-imagen');
    imagenes.forEach(img => img.style.display = 'none');

    const signos = [
        { nombre: 'Mono', id: 'mono' },
        { nombre: 'Gallo', id: 'gallo' },
        { nombre: 'Perro', id: 'perro' },
        { nombre: 'Cerdo', id: 'cerdo' },
        { nombre: 'Rata', id: 'rata' },
        { nombre: 'Buey', id: 'buey' },
        { nombre: 'Tigre', id: 'tigre' },
        { nombre: 'Conejo', id: 'conejo' },
        { nombre: 'Dragón', id: 'dragon' },
        { nombre: 'Serpiente', id: 'serpiente' },
        { nombre: 'Caballo', id: 'caballo' },
        { nombre: 'Cabra', id: 'cabra' }
    ];

    const signo = signos[resto];
    
    document.getElementById('signo').textContent = "Tu signo es: " + signo.nombre;
    document.getElementById(signo.id).style.display = 'block';
}
