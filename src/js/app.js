import classie from 'desandro-classie'

const navigation = () => {
  const menuToggle = document.querySelector('header .nav-toggle')
  const header = document.querySelector('header')
  // Handle Mobile Menu Button
  let text = 'Menu'
  menuToggle.addEventListener('click', () => {
    classie.toggle(header, 'nav-responsive')
    text = header.className === 'nav-responsive' ? 'Close' : 'Menu'
    menuToggle.textContent = text
  })
}

navigation()
