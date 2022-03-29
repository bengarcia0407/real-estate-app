import dynamic from 'next/dynamic'

export const HostCard = dynamic(() => import('./HostCard'))
export const StateCard = dynamic(() => import('./StateCard'))
