import Image from "next/image"
import hero from '../../public/images/illustration-hero.svg'

function CardImage() {
    return <Image src={hero} alt='illustration-hero' />
}

export default CardImage