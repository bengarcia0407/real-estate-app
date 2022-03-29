import Link from 'next/link'
import { FC } from 'react'
import classes from './StateBreadcrumb.module.css'

interface StateBreadcrumbProps {
  self: string
  state: {
    label: string
    url: string
  }
}

const StateBreadcrumb: FC<StateBreadcrumbProps> = ({ self, state }) => {
  return (
    <ul className={classes.breadcrumb}>
      <li>Home</li>
      <li>{self}</li>
      <li>
        <Link href={state.url}>{state.label}</Link>
      </li>
    </ul>
  )
}

export default StateBreadcrumb
