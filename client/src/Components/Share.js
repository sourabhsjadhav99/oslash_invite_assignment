import React from 'react'
import { FiShare2} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import "./Style.css"
const Share = () => {
  return (
    <div className='share-container'>
      <Link to="/invite" id='share-btn'><span >Share</span><span className='logo-share'><FiShare2/></span></Link>      
    </div>
  )
}
export default Share
