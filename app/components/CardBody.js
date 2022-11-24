import { cardBody } from '../page.module.scss'

import ButtonArea from './ButtonArea'
import Plan from './Plan'
import Description from './Description'

function CardBody() {
    return (
        <div className={cardBody}>
            <Description />
            <Plan />
            <ButtonArea />
        </div>
    )
}

export default CardBody