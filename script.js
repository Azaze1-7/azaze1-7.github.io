document.addEventListener('DOMContentLoaded', function () {
  const text1 = document.getElementById('text1');
  const text2 = document.getElementById('text2');
  const fontSize = document.getElementById('fontSize');
  const textColor = document.getElementById('textColor');
  const generateBtn = document.getElementById('generate');
  const selectedImage = document.getElementById('selectedImage');
  const topText = document.getElementById('topText');
  const bottomText = document.getElementById('bottomText');

  const popup = document.getElementById('popup');
  const popupImage = document.getElementById('popupImage');
  const popupTopText = document.getElementById('popupTopText');
  const popupBottomText = document.getElementById('popupBottomText');
  const closePopup = document.getElementById('closePopup');
  
  let selectedImgSrc = '';
  const imageOptions = document.querySelector('.image-options');
  const imagesData = ['imagenes/IMG_20240724_132456.jpg', 'imagenes/images (16).jpeg', 'imagenes/images (17).jpeg'];

  imagesData.forEach(src => {
    const imgElement = document.createElement('img');
    imgElement.src = src;
    imgElement.classList.add('image-option');
    imgElement.addEventListener('click', function () {
      document.querySelectorAll('.image-options img').forEach(img => img.classList.remove('selected'));
      this.classList.add('selected');
      selectedImgSrc = this.src;
      selectedImage.src = this.src; 
      enableGenerateButton();
    });
    imageOptions.appendChild(imgElement);
  });

  function applyTextStyles(textElement, text, fontSizeValue, textColorValue) {
    textElement.textContent = text;
    textElement.style.fontSize = fontSizeValue + 'px';
    textElement.style.color = textColorValue;
  }

  function updatePreview() {
    const fontSizeValue = parseInt(fontSize.value, 10);
    applyTextStyles(topText, text1.value, fontSizeValue, textColor.value);
    applyTextStyles(bottomText, text2.value, fontSizeValue, textColor.value);
  }

  function enableGenerateButton() {
    generateBtn.disabled = !(selectedImgSrc && text1.value && text2.value && fontSize.value >= 10 && fontSize.value <= 60);
  }

  text1.addEventListener('input', updatePreview);
  text2.addEventListener('input', updatePreview);
  fontSize.addEventListener('input', updatePreview);
  textColor.addEventListener('input', updatePreview);

  generateBtn.addEventListener('click', function () {
    if (!selectedImgSrc) {
      alert('Por favor, selecciona una imagen.');
      return;
    }
    if (!text1.value || !text2.value) {
      alert('Por favor, completa los campos de texto.');
      return;
    }

    const fontSizeValue = parseInt(fontSize.value, 10);
    if (fontSizeValue < 10 || fontSizeValue > 60) {
      alert('Por favor, elige un tamaño de fuente entre 10px y 60px.');
      return;
    }

    applyTextStyles(topText, text1.value, fontSizeValue, textColor.value);
    applyTextStyles(bottomText, text2.value, fontSizeValue, textColor.value);

    applyTextStyles(popupTopText, text1.value, fontSizeValue, textColor.value);
    applyTextStyles(popupBottomText, text2.value, fontSizeValue, textColor.value);
    popupImage.src = selectedImgSrc;  

    popup.style.display = 'flex';
  });

  closePopup.addEventListener('click', function () {
    popup.style.display = 'none'; 
  });

 
});
  