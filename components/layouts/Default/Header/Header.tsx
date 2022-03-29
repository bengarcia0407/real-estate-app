import { menuLinks } from '@/constants/links'
import LogoImg from '@/public/images/logo.png'
import classNames from 'classnames/bind'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import classes from './Header.module.css'

const cx = classNames.bind(classes)

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.className = isOpen ? 'overflow-hidden' : ''
  }, [isOpen])

  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <Link href="/" passHref>
          <a className={classes.branding_link}>
            <Image
              src={LogoImg}
              alt="Boondockers Welcome - A Harvest Hosts Company Logo"
            />
          </a>
        </Link>
        <nav>
          <ul
            className={cx({
              menu: true,
              active: isOpen
            })}
          >
            {menuLinks.map((item, index) => (
              <li key={index}>
                <Link href={item.url}>{item.label}</Link>
              </li>
            ))}
            <li className={classes.divisor}>
              <Link href="https://membership.harvesthosts.com/login/" passHref>
                <a target="_blank">Login</a>
              </Link>
            </li>
            <li>
              <Link href="/become-a-guest" passHref>
                <a className={classes.button}>Join Now</a>
              </Link>
            </li>
          </ul>
          <div
            className={cx({
              hamburger: true,
              active: isOpen
            })}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
