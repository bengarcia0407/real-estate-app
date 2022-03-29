import { hiddenGems, mostPopular, newest } from '@/constants/hosts'
import Hero from './Hero/Hero'
import classes from './HomeTemplate.module.css'
import { Hosts } from './Hosts'
import { LearnMore } from './LearnMore'

const HomeTemplate = () => {
  return (
    <div className={classes.root}>
      <Hero />
      <div className={classes.content}>
        <Hosts
          title={mostPopular.title}
          subtitle={mostPopular.subtitle}
          hosts={mostPopular.hosts}
        />
      </div>
      <LearnMore />
      <div className={classes.content}>
        <Hosts
          title={newest.title}
          subtitle={newest.subtitle}
          hosts={newest.hosts}
        />
      </div>
      <div className={classes.content}>
        <Hosts
          title={hiddenGems.title}
          subtitle={hiddenGems.subtitle}
          hosts={hiddenGems.hosts}
        />
      </div>
    </div>
  )
}
export default HomeTemplate
