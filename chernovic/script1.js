window.addEventListener('DOMContentLoaded', () => { // назначаем глобальный обработчик событий,
      // Табы                     //который упорядочит загрузку контента 
    const tabs = document.querySelectorAll('.tabheader__item'), // табы на которые нажимаем
          tabsContent = document.querySelectorAll('.tabcontent'), //весь контент, который нахдиться в нашей верстке
          tabsParent = document.querySelector('.tabheader__items'); //
// точка указывает на класс
    //    function hideTabContent() { // ф-я, которая только скрывает все ненужные нам табы, 
    //                               //элемены страници, которые есть сейчас на сайте
    //     tabsContent.forEach(item => {// называем item аргумент списеа в результате перебора табов
    //         item.style.display = 'none';

      function hideTabContent() { // ф-я, которая только скрывает все ненужные нам табы, 
       
           tabsContent.forEach(item => { // с использованием классов

               item.classList.add('hide'); // классы css, hide скрываем элементы
               item.classList.remove('show', 'fade'); // удаляем показ 
   
           });

           // удаляем класс активности
           tabs.forEach(item => {
               item.classList.remove('tabheader__item_active'); // точку не ставим так как итак 
           });                      //работаеь с классами на что указывает classList
       }
          //функция которая показует табы

    //    function showTabContent(i = 0) {
    //        tabsContent[i].style.display = 'block';
    //        tabs[i].classList.add('tabheader__item_active');//добавляеи класс активности          
    //    }

    function showTabContent(i = 0) {     //функция которая показует табы
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active'); //в каждом элементе таба удаляем класс активности
          }

       hideTabContent();
       showTabContent();

       // используем дилегирование событий и назначить обработчик события клика
       tabsParent.addEventListener('click', (event) => {  //назначаем событие клик
           const target = event.target;

           if (target && target.classList.contains('tabheader__item')) { 
                           //через contains определим,
                             //что точно кликнули в таб
            tabs.forEach((item, i) => { // нужно определить номер ссылки на таб и показать контент
                          //item список табов,а i номер єлемента таба
                if (target == item) { // если элемент псевдо массива совпадает с тем куда кликнул пользователь
                    hideTabContent(); // target элемент в который кликнули, будет сопадать
                                     //с элементом item который перебираем в цикле forEach
                    showTabContent(i); //тогда мы берем номер таба и показываем на странице
                   }// а остальные скрываем
                });
                   }
       });

       // Таймер

       const deadline = '2021-07-05'; //'2021-07-05';

       function getTimeRemaining(endtime) { // расчет всех временных промежутков
           const t = Date.parse(endtime) - Date.parse(new Date()),
                 days = Math.floor(t / (1000*60*60*24)), // округляем
                 // сколько времени осталост на время в сутках , в милисекундах
                 hours = Math.floor((t / (1000*60*60) % 24)),
// делим остаток (endtime) времени на час в милисекундах
// %  делит и возвращает остаток от деления
// получим колличество часов которые не хватает до полных суток
                 minutes = Math.floor((t / 1000/60) % 60),
                 seconds = Math.floor((t / 1000) % 60);

                 return {          // возвращаем объект
                     'total': t,   // если таймер закончился
                     'days': days,
                     'hours': hours,
                     'minutes': minutes,
                     'seconds': seconds
                 };
       }
       function getZero(num) { // вспомогательная функция, которая запускает число 
        if (num >= 0 && num < 10) { //и что-то делает внутри
            return `0${num}`;
        } else {
            return num;
        }
    }

// устанавливаем таймер на страницу
       function setClock(selector, endtime) {

            const timer = document.querySelector(selector),
                  days = timer.querySelector('#days'), // уникальные id
                  hours = timer.querySelector('#hours'),
                  minutes = timer.querySelector('#minutes'),
                  seconds = timer.querySelector('#seconds'),
                  timeInterval = setInterval(updateClock, 1000);

                  updateClock();// запускает дату устранив мегание прошлой даты

// будет обновлять наш таймер каждую секунду
       function updateClock() {
           const t = getTimeRemaining(endtime); // расчет времени который 
           //остался на данный момент, поместим на станицу это дедлайн
           
           days.innerHTML = getZero(t.days); // передаем значение в ф-ю getZero
           hours.innerHTML = getZero(t.hours);
           minutes.innerHTML = getZero(t.minutes);
           seconds.innerHTML = getZero(t.seconds);
           // интервал нужно остановить
           if (t.total <= 0) {             //если время уже вышло
               clearInterval(timeInterval); //останавливаем таймер
           }
       }
       }
       setClock('.timer', deadline);

     // Modal
     
     const modalTrigger = document.querySelectorAll('[data-modal]'),
     // кнопки которые будут вызывать модальное окно
           modal = document.querySelector(".modal"),
     // переменная, которая отвечает за само модальное окно 
     //      modalCloseBtn = document.querySelector('[data-close]');
     // кнопка отвечающая за закрытие

     function openModal() {
        modal.classList.add('show');
            modal.classList.remove('hide');
            // modal.classList.toggle('show'); переключатель вместо пред двух
           // назначить класс в верстке
            document.body.style.overflow = 'hidden';
          clearInterval(modalTimerId); // форма окрывается только один раз  
    }

modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
    // () => {
    //     modal.classList.add('show');
    //     modal.classList.remove('hide');
    //     // modal.classList.toggle('show'); переключатель вместо пред двух
    //     document.body.style.overflow = 'hidden';// окно за формой не прокручиваеться
});

//});



function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

//modalCloseBtn.addEventListener('click', closeModal);

// () => {
//     modal.classList.add('hide');
//     modal.classList.remove('show');
//     document.body.style.overflow = 'hidden';
// });

modal.addEventListener('click', (e) => { // форма убераеться кликом в области окна
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
        closeModal();                    // клик на крестик с закрытием окна
    
    //if (e.target === modal) {
        // modal.classList.add('hide');
        // modal.classList.remove('show');
        // document.body.style.overflow = ''; 
        closeModal();
    }
});

document.addEventListener('keydown', (e) => { // закрытие формы нажатие Esc
                                             // , открытие Enter 
    if (e.code === "Escape" && modal.classList.contains("show")) {
        closeModal();
    }
});

const modalTimerId = setTimeout(openModal, 5000);
// через 5 сек форма появляется

function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientWidth >= document.documentElement.scrollHeight) {
        openModal();
        window.removeEventListener('scroll', showModalByScroll);
        // один раз закрыл форму и она не появляеться
    }
}

window.addEventListener('scroll', showModalByScroll); // долистал до конца и форма появляеться
    
 // , {once: true}

// Menu - используем классы для карточек



class MenuCard {                // класс всегда с большой буквы
    constructor(src, alt, title, descr, price, parentSelector, ...classes) { 
        // используем дефелтное значение класса во избежении ошибок при добавлении новых свойств, через rest оператор
        // передав аргументы нужно записать в свойства нового объекта
        this.src = src; // this обращаемся к экземпляру нового созданного объекта и записываем свойство
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.price = price;
        this.classes = classes; // или || 'menu__item'; не сможем перебрать 220строку forEach
        this.parent = document.querySelector(parentSelector);//DOM element
        // Выбор элемента и передача в настройку нашего класса
        this.transfer = 27;
        this.changeToUAH(); // вернет видоизмененное значение
    }

    changeToUAH() {                    // создаем метод, что будет делать
        this.price = this.price * this.transfer;
    }

    render() { // создаем верстку на странице
        const element = document.createElement('div'); //готовая карточка
      
        if (this.classes.length === 0) { //вместо прописывания дефолтного класса
          this.element = 'menu__item';
          element.classList.add(this.element); // ставим дефолтный класс, в который будет прописываться свойство
       } else {
           this.classes.forEach(className => element.classList.add(className));
       }
       
        this.classes.forEach(className => element.classList.add(className));
        // this.classes - масив, пройтись по каждому элементу внутри className, элемент берем с вытащить название classList и его подсоединить add ckassName к этому div
        element.innerHTML = `     
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
        `;
        this.parent.append(element);// используем DOM element 
        // append для того, чтобы новосозданный элемент поместили во внутрь
    }
}

// const div = new MenuCard();
// div.render();
new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    '.menu .container',
    // 'menu__item', // не забудь прописать дефолтный класс
    // 'big'         //
).render(); // если вызов на месте используя один раз

new MenuCard(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    24,
    ".menu .container",
   // 'menu__item'
).render();

new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    21,
    ".menu .container",
    //'menu__item'
).render();


// Forms


            const forms = document.querySelectorAll('form');// Получим вск формы на странице

            const message = {
                loading: 'img/form/spinner.svg',
                success: 'Спасибо! Скоро мы с вами свяжемся',
                failure: 'Что-то пошло не так ...'
            };

           forms.forEach(item => {
               postData(item);
           });

           function postData(form) {
               form.addEventListener('submit', (e) => {
                   e.preventDefault();

                   let statusMessage = document.createElement('img');
                   statusMessage.src = message.loading;
                   statusMessage.style.cssText = `
                        display:block;
                        margin: 0 auto;
                   `;
                   form.insertAdjacentElement('afterend', statusMessage);

              //     form.appendChild(statusMessage);

                   const request = new XMLHttpRequest();
//Используйте объекты XMLHttpRequest (XHR) для взаимодействия с серверами. Вы можете получать 
//данные из URL-адреса без необходимости полного обновления страницы. Это позволяет веб-странице
// обновлять только часть страницы, не нарушая того, что делает пользователь.

                   request.open('POST', 'server.php');

                   request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                   const formData = new FormData(form);


                   const object = {};
                   formData.forEach(function(value, key){
                       object[key] = value;
                   });
                   const json = JSON.stringify(object);
       
                   request.send(json);
       
               // request.send(formData);

                   request.addEventListener('load', () => {
                       if (request.status === 200) {
                           console.log(request.response);
                            showThanksModal(message.success);
                     //      statusMessage.textContent = message.success;
                           form.reset();

                           statusMessage.remove();


                        //    setTimeout(() => {
                        //        statusMessage.remove();
                        //    }, 2000);
                       } else{
                            showThanksModal(message.failure);

                        //   statusMessage.textContent = message.failure;
                       }
                   });
               });
           }
    
           function showThanksModal(message) {
            const prevModalDialog = document.querySelector('.modal__dialog');
    
            prevModalDialog.classList.add('hide');
            
            openModal();
    
            const thanksModal = document.createElement('div');
            thanksModal.classList.add('modal__dialog');
            thanksModal.innerHTML = `
                <div class="modal__content">
                    <div class="modal__close" data-close>×</div>
                    <div class="modal__title">${message}</div>
                </div>
            `;
            document.querySelector('.modal').append(thanksModal);
            setTimeout(() => {
                thanksModal.remove();
                prevModalDialog.classList.add('show');
                prevModalDialog.classList.remove('hide');
                closeModal();
            }, 4000);
    }

});

