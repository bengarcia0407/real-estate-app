import { DefaultLayout } from '@/components/layouts'
import { HomeTemplate } from '@/components/templates'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <HomeTemplate />
    </DefaultLayout>
  )
}

export default Home
