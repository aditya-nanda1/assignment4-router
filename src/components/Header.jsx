import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <nav className="container">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/user-info">User Info</NavLink>
      </nav>
    </header>
  )
}
