import { Link } from 'react-router-dom'

import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"

function BookList() {
  return (
    <div>
      
      <h1>Book List</h1>

      <div>

        <div>
          <img src={img1} alt="cover" width={120} height={200}/>
          <h3>Book1</h3>
          <p>Lorem ipsum, dolor sit amet</p>
          <Link to="/book/details/1">See Book 1</Link>
        </div>

        <div>
          <img src={img2} alt="cover" width={120} height={200}/>
          <h3>Book2</h3>
          <p>Lorem ipsum, dolor sit amet</p>
          <Link to="/book/details/2">See Book 2</Link>
        </div>

        <div>
          <img src={img3} alt="cover" width={120} height={200}/>
          <h3>Book3</h3>
          <p>Lorem ipsum, dolor sit amet</p>
          <Link to="/book/details/3">See Book 3</Link>
        </div>

      </div>


    </div>
  )
}

export default BookList