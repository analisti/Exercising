// Função para rolagem suave
const smoothScroll = () => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Função para lidar com o envio do formulário
const handleFormSubmission = () => {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let formData = new FormData(this);

        fetch(this.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            console.log('Formulário enviado com sucesso');
            this.reset();
        }).catch(error => {
            console.error('Erro ao enviar o formulário', error);
        });
    });
}

// Função para rotação do carrossel
const rotateCarousel = () => {
    const carousel = document.querySelector('.carousel');
    const items = carousel.querySelectorAll('.item');
    let selectedIndex = 0;

    const angle = selectedIndex * -120; // Ajuste o ângulo conforme necessário
    carousel.style.transform = 'rotateY(' + angle + 'deg)';

    const prevButton = document.querySelector('.previous-button');
    prevButton.addEventListener('click', function () {
        selectedIndex--;
        rotateCarousel();
    });

    const nextButton = document.querySelector('.next-button');
    nextButton.addEventListener('click', function () {
        selectedIndex++;
        rotateCarousel();
    });
}

// Função para alternar entre os modos claro e escuro
const toggleDarkMode = () => {
    const themeIcon = document.getElementById('theme-icon');

    // Imprime o elemento selecionado no console
    console.log(themeIcon);

    themeIcon.addEventListener('click', () => {
        console.log('Ícone de tema clicado');
        document.body.classList.toggle('dark-mode');
    });
}

// Chamar as funções quando o DOM estiver totalmente carregado
document.addEventListener('DOMContentLoaded', () => {
    smoothScroll();
    handleFormSubmission();
    rotateCarousel();
    toggleDarkMode(); // Adicionado a chamada para a função de alternar o modo escuro
});