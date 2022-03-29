import classNames from 'classnames/bind'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { MdOutlineLocationOn, MdStar, MdStarOutline } from 'react-icons/md'
import Rating from 'react-rating'
import { TopHostBagde } from '../Icons'
import classes from './HostCard.module.css'

export interface HostProps {
  title: string
  image: string
  location?: string
  rating?: number
  isTopHost?: boolean
  url: string
}

const cx = classNames.bind(classes)

const HostCard: FC<HostProps> = ({
  title,
  image,
  location,
  rating,
  isTopHost,
  url
}) => {
  return (
    <div className={classes.root}>
      {isTopHost && (
        <div className={classes.badge}>
          <TopHostBagde />
        </div>
      )}
      <div className={classes.card}>
        <div className={classes.image}>
          <Link href={url} passHref>
            <a>
              <Image src={image} alt="" layout="fill" objectFit="cover" />
            </a>
          </Link>
        </div>
        <div className={classes.box}>
          <h2>
            <Link href={url} passHref>
              {title}
            </Link>
          </h2>
          <div>
            <p
              className={cx({
                hidden: !location
              })}
            >
              <MdOutlineLocationOn className={classes.marker} />
              {location}
            </p>
            {rating && (
              <Rating
                initialRating={rating}
                emptySymbol={
                  <MdStarOutline className={classes.rating} size={22} />
                }
                fullSymbol={<MdStar className={classes.rating} size={22} />}
                fractions={2}
                readonly
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HostCard
