import { projectsData } from './dataBase.js';

const sliderContainer = document.querySelector('.project__slider');
function createGalletyItem(projectsData) {
    return projectsData.map(({ imgMob }) => {
        return `
            <div class="project__item">
                <img src="${imgMob}" alt="" />
            </div>
        `;
    }).join('');
};
const card = createGalletyItem(projectsData);

sliderContainer.insertAdjacentHTML('beforeend', card);


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

    const content = document.createElement('div');
    content.classList.add('modal__content');

    // Заполняем контент модального окна данными
    content.innerHTML = `
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
        }
    });
}