import { StateBreadcrumb } from '@/components/common/Breadcrumbs'
import { StateCard } from '@/components/common/Cards'
import HeroImg from '@/public/images/tmp/tmp-hero.jpg'
import Image from 'next/image'
import classes from './Hero.module.css'

// TODO: Change the mocked info
const hero = {
  title: 'California RV Camping',
  subtitle: 'Stay with the locals',
  image: HeroImg,
  description:
    'Make your California trip authentic and unforgettable with an RV camping stay at a friendly Boondockers Welcome Host location. ',
  state: {
    label: 'California',
    url: '/state/california'
  }
}

const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.card}>
        <StateCard
          title={hero.title}
          subtitle={hero.subtitle}
          description={hero.description}
        />
        <StateBreadcrumb self={hero.title} state={hero.state} />
      </div>
      <div className={classes.image}>
        <Image
          src={hero.image}
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </div>
  )
}

export default Hero
