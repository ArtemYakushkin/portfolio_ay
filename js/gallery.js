import { projectsData } from './dataBase.js';

const sliderContainer = document.querySelector('.project__slider');
const card = createGalletyItem(projectsData);

sliderContainer.insertAdjacentHTML('beforeend', card);

function createGalletyItem(projectsData) {
    return projectsData.map(({ imgMob }) => {
        return `
            <div class="project__item">
                <img src="${imgMob}" alt="" />
            </div>  
        `;
    }).join('');
};

// const thumbnailContainer = document.querySelector('.thumbnail');
// const miniCard = createMiniCard(projectsData);

// thumbnailContainer.insertAdjacentHTML('beforeend', miniCard);

// function createMiniCard(projectsData) {
//     return projectsData.map(({ imgMob, imgDesk }) => {
//         return `
//             <div class="item active">
//                 <img src="${imgMob}" alt="" />
//             </div>
//         `;
//     }).join('');
// }