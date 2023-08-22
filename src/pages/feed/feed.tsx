
import OrdersInfo from "../../components/OrdersInfo/OrdersInfo";
import OrdersFeed from "../../components/OrdersFeed/OrdersFeed";
import styles from "./feed.module.css"

const FeedPage = ():JSX.Element => {
  return (
    <div className={styles.wrapper}>
      {/* <h2 className="text text_type_main-large">Лента заказов</h2> */}
      <div className={styles.main_container}>
        <OrdersFeed />
        <OrdersInfo />
      </div>
    </div>
  )
}

export default FeedPage;