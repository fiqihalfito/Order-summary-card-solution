import CardBody from './CardBody'
import CardImage from './CardImage'
import styles from '../page.module.scss'

function Card() {
    return (
        <div className={styles.card}>
            <CardImage />
            <CardBody />
        </div>
    )
}

export default Card