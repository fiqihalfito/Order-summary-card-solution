import Image from 'next/image'
import hero from '../public/images/illustration-hero.svg'
import music from '../public/images/icon-music.svg'

import Card from './components/Card'

import { container } from './page.module.scss'



export default function Home() {
  return (
    <div className={container}>
      <Card />
    </div>
  )
}
