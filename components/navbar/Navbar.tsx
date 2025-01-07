import DarkMode from './DarkMode'
import LinksDropdown from './LinksDropdown'
import NavSearch from './NavSearch'
import Logo from './Logo'

function Navbar() {
  return (
    <div className='border-b'>
      <div className='container flex flex-col flex-wrap gap-4 py-8 sm:flex-row sm:items-center sm:justify-between'>
        <Logo />
        <NavSearch />

        <div className='flex items-center gap-4'>
          <DarkMode />
          <LinksDropdown />
        </div>
      </div>
    </div>
  )
}

export default Navbar
