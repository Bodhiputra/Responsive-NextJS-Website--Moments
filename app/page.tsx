import Image from 'next/image'
import Hero from './components/Hero'
import Slider from './components/Slider'
import {SliderData} from './components/SliderData'
import Instagram from './components/Instagram'


export default function Home() {
  return (
    <div>
      <Hero heading= 'Moments Photography' message = 'I love caputring things that will forever be remembered.'/>
      <Slider slides = {SliderData} />
      <Instagram/>
    </div>
  )
}
