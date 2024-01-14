const select = document.querySelector('.header__dropdown-btn');
const list = document.querySelector('.header__dropdown-list');
const listItems = document.querySelectorAll('.header__dropdown-item');
const allLang = ['en', 'ua'];

select.addEventListener('click', function () {
    list.classList.toggle('header__dropdown-list--visible');
});

listItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {

        // перенаправить на URL с указанием языка
        let lang = this.dataset.value;
        location.href = window.location.pathname + '#' + lang;
        location.reload();

        e.stopPropagation();
        select.focus();
        
        list.classList.remove('header__dropdown-list--visible');
    })
});

document.addEventListener('click', function (e) {
    if (e.target !== select) {
        list.classList.remove('header__dropdown-list--visible');
    }
})

function changeLanguage() { 

    let hash = window.location.hash;
    hash = hash.substr(1);
    
    // проверяем, если пользователь ввел в адрессной строке язык, которого не существует,
    // то устанавливать язык по-умолчанию
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    select.dataset.value = hash;
    select.innerText = hash;

    for (let key in langArr) {
        document.querySelector('.lng-' + key).innerHTML = langArr[key][hash];
    }

};

changeLanguage();

