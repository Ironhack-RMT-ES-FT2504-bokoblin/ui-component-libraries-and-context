import React from 'react'

function AddForm() {
  return (
    <form>
      
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" name="title"/>
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <input type="text" name="description"/>
      </div>

      <div>
        <label htmlFor="content">Content</label>
        <input type="text" name="content"/>
      </div>

      <button>Add new Book</button>

    </form>
  )
}

export default AddForm