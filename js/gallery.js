import { projectsData } from './projectsData.js';

const sliderContainer = document.querySelector('.project__carousel');
const card = createGalletyItem(projectsData);

sliderContainer.insertAdjacentHTML('beforeend', card);

function createGalletyItem(projectsData) {
    return projectsData.map(({ imgTab }) => {
        return `
                <img src="${imgTab}" alt="" />
            `;
    }).join('');
}