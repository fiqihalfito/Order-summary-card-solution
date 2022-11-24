import { buttonArea, proceed, cancel } from '../page.module.scss'

function ButtonArea() {
    return (
        <div className={buttonArea}>
            <button className={proceed}>Proceed to Payment</button>
            <button className={cancel}>Cancel Order</button>
        </div>
    )
}

export default ButtonArea