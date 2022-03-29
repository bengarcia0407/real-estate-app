interface Link {
  label: string
  url: string
  blank?: boolean
}

export const menuLinks: Link[] = [
  { label: 'Host Locations', url: '/searchhosts' },
  { label: 'Become a Guest', url: '/become-a-guest' },
  { label: 'Become a Host', url: '/become-a-host' },
  { label: 'How it Works', url: '/how-it-works' },
  { label: 'Blog', url: '/blog' }
]
