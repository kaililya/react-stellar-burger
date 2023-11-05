![Type Script](https://img.shields.io/badge/-TypeScript-000?logo=typescript&logoColor=3178C6&style=flat)![React](https://img.shields.io/badge/-React-000?&logo=React)![Redux](https://img.shields.io/badge/-ReduxToolkit-000?logo=Redux&logoColor=764ABC&style=flat)![React Router](https://img.shields.io/badge/-ReactRouter-000?logo=reactrouter&logoColor=CA4245&style=flat)![ReactDnD](https://img.shields.io/badge/-ReactDnD-000?logo=React&logoColor=3178C6&style=flat)![Cypress](https://img.shields.io/badge/-Cypress-000?logo=cypress&logoColor=764ABC&style=flat)
![Jest](https://img.shields.io/badge/-Jest-000?logo=jest&logoColor=764ABC&style=flat)![HTML5](https://img.shields.io/badge/-HTML5-000?&logo=HTML5)![CSS3](https://img.shields.io/badge/-CSS3-000?&logo=CSS3)![GIT](https://img.shields.io/badge/-GIT-000?&logo=GIT)![NPM](https://img.shields.io/badge/-NPM-000?logo=npm&logoColor=CC3534&style=flat)
# Проект: Stellar Burgers (Космическая бургерная)
## [Ссылка на сайт](https://kaililya.github.io/react-stellar-burger/)
#### О проекте

---

##### Проект представляет собой сайт с возможномтью оформления заказа в бургерной Stellar Burgers при помощи приложения-конструктора, позволяющего пользователю самостоятельно выбрать ингредиенты для бургера.

В хэдере располагается панель навигации c ссылками для перехода в другие разделы сайта. Основной раздел страницы представлен 2 секциями: список доступных ингредиентов и состав заказа.

### Конструктор
Список доступных ингредиентов разделен на категории, которые соответствуют их типам. В случае, если список не может быть полностью отображен в выделенной для него части интерфейса, сбоку компонента появляется полоса прокрутки. При нажатии на карточку ингридиента открывается модальное окно с крупным изображением и информацией о пищевой ценности. Вкладки в верхней части списка могут позволяют автоматически прокрутить его до нужной категории. Во время ручной прокрутки подсвечивается вкладка, соответствующая просматриваемому разделу.

В секции состав заказа отображаются все добавленные пользователем позиции. Их добавление происходит по принципу Drag-and-drop при переносе ингредиентов мышью из описанного выше общего списка ингредиентов. В случае отсутствия достаточного места для полного отображения всех включенных в заказ позиций в разделе появляется полоса прокрутки. Первый и последний ингредиент находятся за пределами прокручиваемой области, всегда видны и не могут быть перемещены на другие места. Другие составляющие заказа меняются между собой местами при передвижении их мышкой. В нижней части компонента отображается итоговая стоимость составленного набора. Рядом расположена кнопка оформления заказа. Нажатие на кнопку приводит к открытию модального окна с подтверждением оформления и номером заказа.

### Страница профиля и заказы

На сайте присуствует страница профиля, на которой авторизированный пользователь может отследить статус готовности всех его заказов и подробное описание каждого заказа, а также поменять персональные данные. Если у пользователя нет аккаунта, то он может легко его создать на странице регистрации. Если пользователь забыл пароль, то он может его восстановить на странице восстановления пароля, при помощи проверочного кода, который пользователь получит на почту указанную при регистрации (есть настоящий back-end).

---

### Технологии:
 + Язык программирования ![Type Script](https://img.shields.io/badge/-TypeScript-000?logo=typescript&logoColor=3178C6&style=flat)
 + В качестве фраймоврка используется ![React](https://img.shields.io/badge/-React-000?&logo=React) 
 + Хранилище данных в браузере разработано при помощи ![Redux Toolkit](https://img.shields.io/badge/-ReduxToolkit-000?logo=Redux&logoColor=764ABC&style=flat)
 + Клиентский роутинг и навигация на сайте разработаны и описаны при помощи ![React Router](https://img.shields.io/badge/-ReactRouter-000?logo=reactrouter&logoColor=CA4245&style=flat)
 + Использована библиотека UI-компонентов Яндекс.Практикум.Реакт
 + Лента заказов отражается при помощи Web Sockets
 + Для тестирования приложения использовани ![Jest](https://img.shields.io/badge/-Jest-000?logo=jest&logoColor=764ABC&style=flat) и ![Cypress](https://img.shields.io/badge/-Cypress-000?logo=cypress&logoColor=764ABC&style=flat)

---

#### Особенности
 + Функционал Drag-and-drop реализован с применением библиотеки React DnD.
 + Автоматическая JWT-авторизация (если пользователь авторизовался, то при повторном посещения сайта ему не нужно заново вводить идентификационные данные).
 + Только десктоп верстка.
 + Отсуствие хардкор данных, все приходит с backend.
 + Клиентский роунтинг, который ограничивает функционал для не авторизованных пользователей.
 + 


---

#### Начало работы с Create React App
Проект запускается локально по адресу http://localhost:3000/ путем клонирования данного репозитория и последовательного запуска команд в терминале (должны быть установлены программы Git, NodeJS и менеджер пакетов npm).


#### Доступные скрипты

В каталоге проекта вы можете запустить:

- ##### `npm start` - запустить проект,

- ##### `npm test` - протестировать проект,

- ##### `npm run build` - собрать проект.
 
- ##### `npm test` //для Unit тестирования :

- ##### `npm run cypress` //для E2E тестирования:


Создает приложение для производства в папке "build".\
Он правильно связывает React в рабочем режиме и оптимизирует сборку для достижения наилучшей производительности.

---

