import { menuLinks } from '@/constants/links'
import AppleStoreImg from '@/public/images/apple-store.png'
import GoogleStoreImg from '@/public/images/google-store.png'
import LogoImg from '@/public/images/logo-footer.png'
import Image from 'next/image'
import Link from 'next/link'
import {
  RiFacebookBoxFill,
  RiInstagramLine,
  RiTwitterFill
} from 'react-icons/ri'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.navigation}>
        <a className={classes.branding_link}>
          <Image src={LogoImg} alt="Boondockers Logo" />
        </a>
        <ul className={classes.menu}>
          <li className={classes.title}>Boondockers Welcome</li>
          {menuLinks.map((item, index) => (
            <li key={index}>
              <Link href={item.url}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <ul className={classes.menu}>
          <li className={classes.title}>Support</li>
          <li>
            <Link href="/about/courtesy-contract">Courtesy Contract</Link>
          </li>
          <li>
            <Link href="#">Contact Us</Link>
          </li>
        </ul>
        <ul className={classes.menu}>
          <li className={classes.title}>Company</li>
          <li>
            <Link href="/about/about-us">Who We Are</Link>
          </li>
          <li>
            <Link
              href="https://harvesthosts.com/partnerships/?_ga=2.112372804.1121547924.1648063130-1614829691.1647802828"
              passHref
            >
              <a target="_blank">Partnerships</a>
            </Link>
          </li>
          <li>
            <Link href="/press">Press</Link>
          </li>
          <li className={classes.title}>Get The App</li>
          <li className={classes.image}>
            <Link
              href="https://apps.apple.com/us/app/harvest-hosts/id1321631420"
              passHref
            >
              <a target="_blank" className={classes.link_image}>
                <Image src={AppleStoreImg} alt="Apple App Store" unoptimized />
              </a>
            </Link>
          </li>
          <li className={classes.image}>
            <Link
              href="https://play.google.com/store/apps/details?id=com.harvesthosts.client&hl=en_US&gl=US"
              passHref
            >
              <a target="_blank" className={classes.link_image}>
                <Image src={GoogleStoreImg} alt="Google Play" unoptimized />
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <ul className={classes.social_links}>
        <li>
          <Link href="https://www.facebook.com/BoondockersWelcome">
            <a target="_blank">
              <RiFacebookBoxFill size={24} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/boondockerswelc">
            <a target="_blank">
              <RiTwitterFill size={24} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/boondockers.welcome">
            <a target="_blank">
              <RiInstagramLine size={24} />
            </a>
          </Link>
        </li>
      </ul>
      <ul className={classes.copyright}>
        <li>© 2021 Harvest Hosts</li>
        <li>
          <Link href="/about/guarantee">Satisfaction Guarantee</Link>
        </li>
        <li>
          <Link href="https://harvesthosts.com/terms-of-use/?_ga=2.112372804.1121547924.1648063130-1614829691.1647802828">
            Terms & Conditions
          </Link>
        </li>
        <li>
          <Link href="/about/privacy-policy">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/about/cookie-policy">Cookie Policy</Link>
        </li>
        <li>
          <Link href="/about/courtesy-contract">Courtesy Contract</Link>
        </li>
        <li>
          <Link href="/sitemap.xml">Sitemap</Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
