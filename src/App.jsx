
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import About from './pages/About'
import BookList from './pages/books/BookList'
import BookDetails from './pages/books/BookDetails'
import BookAddForm from './pages/books/BookAddForm'

function App() {

  return (
    <>

      <Navbar />
     
      <Routes>

        <Route path="/" element={ <Home />}/>
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/book/list" element={ <BookList /> } />
        <Route path="/book/add" element={ <BookAddForm /> } />
        <Route path="/book/details/:bookId" element={ <BookDetails /> } />

      </Routes>

    </>
  )
}

export default App
