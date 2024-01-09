import { projectsData } from './dataBase.js';

const sliderContainer = document.querySelector('.project__slider');
function createGalletyItem(projectsData) {
    return projectsData.map(({ imgMob }) => {
        return `
            <div class="project__item">
                <img src="${imgMob}" alt="" />
                <span class="project__text">See More</span>
            </div>
        `;
    }).join('');
};
const card = createGalletyItem(projectsData);

sliderContainer.insertAdjacentHTML('beforeend', card);