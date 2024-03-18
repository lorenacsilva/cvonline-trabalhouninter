document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    showPopup();
});

function showPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'block';
}

document.getElementById('closeButton').addEventListener('click', function() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
});
