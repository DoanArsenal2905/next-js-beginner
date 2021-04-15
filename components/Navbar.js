import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Link href='/'>
          <a><Image src='/006hand_113724.png' width={60} height={60} /></a>
        </Link>
      </div>
      <div className='menu'>
        <Link href='/'><a>Home</a></Link>
        <Link href='/users'><a>Users</a></Link>
        <Link href='/about'><a>About</a></Link>
      </div>
    </nav>
  )
}

export default Navbar