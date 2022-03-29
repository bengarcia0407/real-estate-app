import dynamic from 'next/dynamic'

export const DefaultLayout = dynamic(() => import('./Default/DefaultLayout'))
