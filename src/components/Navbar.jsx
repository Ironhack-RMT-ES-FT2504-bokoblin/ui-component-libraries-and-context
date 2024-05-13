import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>

      <Link to="/">Home</Link>
      <Link to="/contact">Contacts</Link>
      <Link to="/about">About</Link>
      <Link to="/book/list">Book List</Link>
      <Link to="/book/add">Add a Book</Link>
      <button>☀️/🌑</button>

    </nav>
  )
}

export default Navbar