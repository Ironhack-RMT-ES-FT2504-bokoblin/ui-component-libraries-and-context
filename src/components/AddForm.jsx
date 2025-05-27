import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ThemeContext } from '../context/theme.context';

function AddForm() {

  const { isDarkTheme } = useContext(ThemeContext)

  return (
    <Form className='mx-5 p-2'>
      
      <Form.Group className="mb-3">
        <Form.Label htmlFor="title">Title</Form.Label>
        <Form.Control type="text" name="title" data-bs-theme={isDarkTheme ? "dark" : "light"}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="description">Description</Form.Label>
        <Form.Control type="text" name="description" data-bs-theme={isDarkTheme ? "dark" : "light"}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="content">Content</Form.Label>
        <Form.Control type="text" name="content" data-bs-theme={isDarkTheme ? "dark" : "light"}/>
      </Form.Group>

      <Button className={isDarkTheme ? 'dark-btn' : 'light-btn'} variant="outline-success">Add new Book</Button>

    </Form>
  )
}

export default AddForm