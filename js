document.addEventListener('DOMContentLoaded', () => {
    // Som de Clique (Opcional: use um link online se não tiver o arquivo)
    const clickSound = new Audio('https://www.soundjay.com/buttons/sounds/button-16.mp3');

    const modal = document.getElementById('product-modal');
    const cards = document.querySelectorAll('.card-link');
    
    // Filtros
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            clickSound.play();
            document.querySelector('.filter-btn.active').classList.remove('active');
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            cards.forEach(card => {
                card.style.display = (filter === 'all' || card.dataset.category === filter) ? 'block' : 'none';
            });
        });
    });

    // Abrir Modal
    cards.forEach(card => {
        card.addEventListener('click', () => {
            clickSound.play();
            document.getElementById('modal-img').src = card.querySelector('img').src;
            document.getElementById('modal-title').innerText = card.dataset.name;
            document.getElementById('modal-desc').innerText = card.dataset.desc;
            modal.classList.add('open');
        });
    });

    // Fechar Modal
    document.getElementById('close-modal').addEventListener('click', () => {
        modal.classList.remove('open');
    });
});