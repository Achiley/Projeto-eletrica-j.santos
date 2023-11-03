// Função para rolar para a seção
function scrollToSection(event, target) {
    event.preventDefault();
    const section = document.querySelector(target);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Event listeners aos links
const links = document.querySelectorAll('.rolar_pag');
links.forEach(link => {
    link.addEventListener('click', event => {
        const target = link.getAttribute('href');
        scrollToSection(event, target);
    });
});
