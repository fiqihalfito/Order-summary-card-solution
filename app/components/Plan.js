import { plan, planInfo, planContent } from '../page.module.scss'

import Image from "next/image"
import music from '../../public/images/icon-music.svg'
import Link from 'next/link'


function Plan() {
    return (
        <div className={plan}>
            <div className={planContent}>
                <Image src={music} alt='music' />
                <span className={planInfo}>
                    <h4>Annual Plan</h4>
                    <p>$59.99/year</p>
                </span>
            </div>
            <a href="#">Change</a>
        </div>
    )
}

export default Plan