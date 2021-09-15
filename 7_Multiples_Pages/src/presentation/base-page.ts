import { Header, Menu } from './components'

new Header('Webpack multiples pages').render()

new Menu([
    { href: '/', title: 'Home'},
    { href: '/about.html', title: 'About'},
    { href: '/contact.html', title: 'Contact'},
  ]).render()