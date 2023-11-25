import styles from './warning.module.css'

const WarningPage = ():JSX.Element => {
  
  return (
     <div className={styles.main_container}>
      <h3 className={`${styles.title} text text_type_main-large`}>О сайте</h3>
      <p style={{color: `#0CC`,marginBottom: '12px'}} className={`${styles.list_item} text text_type_main-small`}>Авторизация, оформление заказа и ленты заказов (общие и в профиле) - это по настояющему, тут используяется рабочий backend (REST API, WEBSOCKET).</p>

      <p className={`${styles.text} text text_type_main-medium`}>Основной функционал:</p>
      <ul className={`custom-scroll ${styles.list_container}`}>

        <li className={`${styles.list_item} text text_type_main-default`}>• Интерактивный бургер-конструктор (инструкция в "Как собрать бургер").</li>
        <li className={`${styles.list_item} text text_type_main-default`}>• Чтобы оформить заказ необходимо авторизироваться.</li>
        <li className={`${styles.list_item} text text_type_main-default`}>• Следите за статусом созданных вами заказов в реальном времени на странице "Личный кабинет" нажав на "История заказов".</li>
        <li className={`${styles.list_item} text text_type_main-default`}>• Если не хотите регистрироваться воспользуйтесь логином и паролем: <span style={{color: `red`,marginBottom: '12px'}} className={`${styles.list_item} text text_type_main-small`}>Пожалуйста, не меняйте почту, логин и пароль если решили решили использовать эти данные (этими данными будут пользузоваться другие)</span></li>
        <li className={`${styles.list_item} text text_type_main-small`}>Логин: foto2@mail.ru</li>
        <li className={`${styles.list_item} text text_type_main-small`}>Пароль: 123456 </li>
        <li className={`${styles.list_item} text text_type_main-default`}>Авторизация:</li>
        <li className={`${styles.list_item} text text_type_main-default`} style={{color: `#0CC`,marginBottom: '12px'}}>• Можно зарегистрироваться перейдя на страницу "Личный кабинет".</li>
        <li className={`${styles.list_item} text text_type_main-default`} style={{color: `#0CC`,marginBottom: '12px'}}>• Достаточно ввести логин и пароль 1 раз и больше не вводить.</li>

        <li className={`${styles.list_item} text text_type_main-default`} style={{color: `#0CC`,marginBottom: '12px'}}>• Можно менять данные укзаанные при регистрации на странице "Личный кабинет".</li>
        <li className={`${styles.list_item} text text_type_main-default`} style={{color: `#0CC`,marginBottom: '12px'}}>• Можно восстановить пароль, если вы не авторизированы (страница "Личный кабинет"). Если вы указали реальную почту, то на нее придет письмо с кодом для восстановления.</li>


      </ul>
      <p className={`${styles.text} text text_type_main-medium`}>Как собрать бургер:</p>
      <ul className={`custom-scroll ${styles.list_container}`}>

        <li className={`${styles.list_item} text text_type_main-default`}>• Чтобы собрать бургер перенесите ингредиенты в синию зону:</li>
        <li className={`${styles.list_item} text text_type_main-default`}>1) Нажмите на серую зону ингридиента (долго держать не нужно).</li>
        <li className={`${styles.list_item} text text_type_main-default`}>2) Сразу же переносите выбранный ингридиент не отпуская пальца (мышку) в <span style={{color: `#0098ff`,marginBottom: '12px'}} className={`${styles.list_item} text text_type_main-small`}>синию</span> зону бургера (если после 1 шага появилcя <span style={{color: `#0CC`,marginBottom: '12px'}} className={`${styles.list_item} text text_type_main-small`}>зеленый текст</span> над картинкой ингридиента, значит вы делаете все верно).</li>
        <li className={`${styles.list_item} text text_type_main-default`}>3) Отпустите палец с экрана как только зона бургера поменяет цвет с <span style={{color: `#0098ff`,marginBottom: '12px'}} className={`${styles.list_item} text text_type_main-small`}>синего</span> на <span style={{color: `rgb(255, 48, 231)`,marginBottom: '12px'}} className={`${styles.list_item} text text_type_main-small`}>фиолетовый</span>.</li>
        <li className={`${styles.list_item} text text_type_main-default`} style={{color: `#0CC`,marginBottom: '12px'}}>• Можно добавить только 1 вид булочки. Если попытаться добавить еще одну, то новая заменит старую.</li>
        <li className={`${styles.list_item} text text_type_main-default`} style={{color: `#0CC`,marginBottom: '12px'}}>• Любые другие ингридиенты добавляются в любом количестве.</li>
        <li className={`${styles.list_item} text text_type_main-default`} style={{color: `#0CC`,marginBottom: '12px'}}>• Ингридиент можно удлаить перенеся его в зону ингридиентов или нажав на иконку корзины.</li>
        <li className={`${styles.list_item} text text_type_main-default`} style={{color: `#0CC`,marginBottom: '12px'}}>• Ингридиенты можно поменять местами в конструкторе бургера перенеся ингрдиент поверх того, с позицией которого вы хотите поменять местами.</li>



      </ul>
      <p className={`${styles.text_close} text text_type_main-small`}>Чтобы закрыть это окно нажмите на крестик (справа сверху), клавишу Esc или на черную зону вне зоны текста.</p>
     </div>
  )
}

export default WarningPage;