
import OrdersInfo from "../../components/OrdersInfo/OrdersInfo";
import OrdersFeed from "../../components/OrdersFeed/OrdersFeed";
import styles from "./feed.module.css"

const FeedPage = ():JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main_container}>
        <OrdersFeed />
        <OrdersInfo />
      </div>
    </div>
  )
}

export default FeedPage;