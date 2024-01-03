import { projectsData } from './projectsData.js';

const sliderContainer = document.querySelector('.project__carousel');
const card = createGalletyItem(projectsData);

sliderContainer.insertAdjacentHTML('beforeend', card);

function createGalletyItem(projectsData) {
    return projectsData.map(({ imgTab }) => {
        return `
            <li class="project__card">
                <div class="project__img">
                    <img src="${imgTab}" alt="" draggable="false" />
                </div>
            </li>    
        `;
    }).join('');
}