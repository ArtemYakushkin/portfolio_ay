import { projectsData } from './dataBase.js';

const projectItems = document.querySelectorAll('.project__item');

projectItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Извлекаем данные из projectsData на основе индекса
        const { imgDesk, title, skills, demoLink, gitLink } = projectsData[index];

        // Вызываем функцию отображения модального окна, передавая данные
        displayModal(imgDesk, title, skills, demoLink, gitLink);
    });
});

function displayModal(imgDesk, skills, title, demoLink, gitLink) {
    // Создаем элементы модального окна
    const modal = document.createElement('div');
    modal.classList.add('modal');
    document.body.classList.add('stop-scrolling');

    const content = document.createElement('div');
    content.classList.add('modal__content');

    // Заполняем контент модального окна данными
    content.innerHTML = `
        <button class="modal__close-btn">
            <i class='bx bxs-shield-x'></i>
        </button>
        <h2 class="modal__title">${skills}</h2>
        <img class="modal__img" src="${imgDesk}" alt="">
        <p class="modal__skills">${title}</p>
        <div class="modal__btn-box">
            <a class="modal__btn btn-git" href="${gitLink}" target="_blank">
                <i class='bx bxl-github'></i>
                Git Repo
            </a>
            <a class="modal__btn btn-git" href="${demoLink}" target="_blank">
                <i class='bx bx-smile'></i>
                Demo
            </a>
        </div>
    `;

    // Добавляем контент в модальное окно
    modal.appendChild(content);

    // Добавляем модальное окно в body
    document.body.appendChild(modal);

    // Закрываем модальное окно при клике вне него
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.remove();
            document.body.classList.remove('stop-scrolling');
        }
    });

    // Закрываем модальное окно при клике на кнопку "modal__close-btn"
    const buttonClose = document.querySelector('.modal__close-btn');
    buttonClose.addEventListener('click', () => {
        modal.remove();
        document.body.classList.remove('stop-scrolling');
    });

    // Закрываем модальное окно при клике на кнопку "Esc"
    window.addEventListener('keydown', (event) => {
        if (event.keyCode === 27) {
            modal.remove();
            document.body.classList.remove('stop-scrolling');
        }
    });

};



