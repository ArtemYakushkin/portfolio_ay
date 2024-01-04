import { projectsData } from './dataBase.js';

const sliderContainer = document.querySelector('.project__carousel');
const card = createGalletyItem(projectsData);

sliderContainer.insertAdjacentHTML('beforeend', card);

function createGalletyItem(projectsData) {
    return projectsData.map(({ imgMob, imgTab, imgDesk }) => {
        return `
            <li class="project__card">
                <div class="project__img">
                    <img src="${imgMob}" alt="" draggable="false" />
					<img src="${imgTab}" alt="" draggable="false" />
					<img src="${imgDesk}" alt="" draggable="false" />
                </div>
            </li>    
        `;
    }).join('');
}