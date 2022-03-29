import { FC } from 'react'
import classes from './StateCard.module.css'

interface StateCardProps {
  title: string
  subtitle: string
  description: string
}

const StateCard: FC<StateCardProps> = ({ title, subtitle, description }) => {
  return (
    <div className={classes.card}>
      <h1 className={classes.title}>{title}</h1>
      <h3 className={classes.subtitle}>{subtitle}</h3>
      <p className={classes.description}>{description}</p>
    </div>
  )
}

export default StateCard
