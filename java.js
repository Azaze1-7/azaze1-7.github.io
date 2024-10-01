window.onload = function() {
    const contenido = document.getElementById('contenido');
    
    let article1 = document.createElement('article');
    
    let encabezado1 = document.createElement('div');
    encabezado1.classList.add('encabezado');
    encabezado1.innerText = 'Conócenos';

    let textoImagenDiv = document.createElement('div');
    textoImagenDiv.classList.add('texto-imagen');

    let texto = document.createElement('div');
    texto.classList.add('texto');
    texto.innerText = 'Mi Foto';

    let imagenDiv = document.createElement('div');
    imagenDiv.classList.add('imagen');
    let imagen = document.createElement('img');
    imagen.src = 'imagenes/m.png';
    imagen.alt = 'Avatar';

    imagenDiv.appendChild(imagen);

    textoImagenDiv.appendChild(texto);
    textoImagenDiv.appendChild(imagenDiv);

    article1.appendChild(encabezado1);
    article1.appendChild(textoImagenDiv);

    let article2 = article1.cloneNode(true);

    contenido.appendChild(article1);
    contenido.appendChild(article2);
}
