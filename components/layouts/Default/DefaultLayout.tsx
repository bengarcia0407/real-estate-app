import { FC } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

const DefaultLayout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default DefaultLayout
