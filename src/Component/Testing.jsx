import React from 'react'
import { useLocation } from 'react-router-dom'
import './Testing.css'
import { InstagramEmbed } from 'react-social-media-embed'

const Testing = () => {

    const location = useLocation()
    console.log(location.state.id)

  return (
    <div className="test">
        <div className='blog-comp'>
            <div className="img-div">
                <img src={location.state.id.img} alt="gloria" />
            </div>
            <div className="text-div">
                <h2>{location.state.id.title}</h2>
                <p>{location.state.id.content}</p>
                <p>{location.state.id.content2}</p>
                <p>{location.state.id.content3}</p>
                <div className="gallery">
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px'}}>
                        <InstagramEmbed url={location.state.id.gallery1} height={600} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px'}}>
                        <InstagramEmbed url={location.state.id.gallery2} height={600} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px'}}>
                        <InstagramEmbed url={location.state.id.gallery3} height={600} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testing
