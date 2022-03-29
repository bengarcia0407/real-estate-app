import dynamic from 'next/dynamic'

export const Hosts = dynamic(() => import('./Hosts'))
