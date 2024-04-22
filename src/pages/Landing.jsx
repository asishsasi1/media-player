import React from 'react'
import { Link } from "react-router-dom"
import landingImg from '../assets/music-beat.gif'
import { Card } from 'react-bootstrap'
import settingimg from '../assets/settings_icon.gif'
import settingimg1 from '../assets/guitar-sing.gif'
import settingimg2 from '../assets/icegif-110.gif'





function Landing() {
  return (
    <>
    <div className="landingsection container">
      <div className='row align-items-center my-5'>
        <div className='col-lg-5'>
    <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
    <p className='mt-3' style={{textAlign:'justify'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti reprehenderit quam corporis quae provident laudantium, consectetur officia laborum id ratione quod, fugit facere fugiat dolorem eius consequuntur ipsam pariatur. Qui.</p>
    <Link to={'/home'} className='btn btn-info mt-3'>Get started</Link>
        </div>
        <div className='col'></div>
        <div className='col-lg-6'>
          <img src={landingImg} alt="landing page" />
        </div>
      </div>
      <div className="Features my-5">
        <h3 className='text-center'>Features</h3>
        <div className="row">
          <div className="col-lg-4">
          <Card style={{ width: '18rem',height:'400px' }}>
      <Card.Img variant="top" style={{height:'250px'}} src={settingimg} />
      <Card.Body>
        <Card.Title>Managing videos</Card.Title>
        <Card.Text>
         Users can upload,view and remove the videos
        </Card.Text>
        </Card.Body>
    </Card>
      
     
          </div>
          <div className="col-lg-4">
          <Card style={{ width: '18rem',height:'400px' }}>
      <Card.Img variant="top" style={{height:'250px'}} src={settingimg1} />
      <Card.Body>
        <Card.Title>Managing videos</Card.Title>
        <Card.Text>
         Users can upload,view and remove the videos
        </Card.Text>
        </Card.Body>
    </Card>
      
     
          </div>
          <div className="col-lg-4">
          <Card style={{ width: '18rem',height:'400px' }}>
      <Card.Img variant="top" style={{height:'250px'}} src={settingimg2} />
      <Card.Body>
        <Card.Title>Managing videos</Card.Title>
        <Card.Text>
         Users can upload,view and remove the videos
        </Card.Text>
        </Card.Body>
    </Card>
      
     
          </div>
         
        </div>
      </div>
      {/* footer */}
      <div className="my-5 row border rounded p-5">
        <div className='col-lg-5'>
          <h3 className='text-warning'>Simple Fast and powerful</h3>
          <p style={{textAlign:'justify'}}>
            <span className='fs-5'>play Everything:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero perspiciatis aspernatur, nam numquam aperiam beatae provident tenetur ducimus illo, minus necessitatibus magnam. Quo natus illum ipsa autem, accusantium voluptates est?
          </p>
          <p style={{textAlign:'justify'}}>
            <span className='fs-5'>play Everything:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero perspiciatis aspernatur, nam numquam aperiam beatae provident tenetur ducimus illo, minus necessitatibus magnam. Quo natus illum ipsa autem, accusantium voluptates est?
          </p>
          <p style={{textAlign:'justify'}}>
            <span className='fs-5'>play Everything:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero perspiciatis aspernatur, nam numquam aperiam beatae provident tenetur ducimus illo, minus necessitatibus magnam. Quo natus illum ipsa autem, accusantium voluptates est?
          </p>
        </div>
        <div className='col'></div>
        <div className='col-lg-6'>
        <iframe width="100%" height="474" src="https://www.youtube.com/embed/L0yEMl8PXnw" title="AAVESHAM Official Teaser | Jithu Madhavan | Fahadh Faasil | Sushin Shyam" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
     
    </>
  )
}

export default Landing
