const select = document.querySelector('select');
const allLang = ['en', 'ua'];

select.addEventListener('change', changeURLLanguadge);

// перенаправить на URL с указанием языка
function changeURLLanguadge() {

    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();

};

function changeLanguage() { 

    let hash = window.location.hash;
    hash = hash.substr(1);
    
    // проверяем, если пользователь ввел в адрессной строке язык, которого не существует,
    // то устанавливать язык по-умолчанию
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    select.value = hash;

    // document.querySelector('.lng-home').innerHTML = langArr['home'][hash];

    for (let key in langArr) {
        document.querySelector('.lng-' + key).innerHTML = langArr[key][hash];
    }

};

changeLanguage();

