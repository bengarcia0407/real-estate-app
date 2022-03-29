import { HostCard } from '@/components/common/Cards'
import { HostProps } from '@/components/common/Cards/HostCard'
import { FC } from 'react'
import classes from './Hosts.module.css'

export interface HostsProps {
  title: string
  subtitle?: string
  hosts: HostProps[]
}

const Hosts: FC<HostsProps> = ({ title, subtitle, hosts }) => {
  return (
    <>
      <h2 className={classes.title}>{title}</h2>
      {subtitle && <h3 className={classes.subtitle}>{subtitle}</h3>}
      <div className={classes.hosts}>
        {hosts.map((host, index) => (
          <HostCard
            key={index}
            title={host.title}
            image={host.image}
            location={host.location}
            rating={host.rating}
            isTopHost={host.isTopHost}
            url={host.url}
          />
        ))}
      </div>
    </>
  )
}

export default Hosts
