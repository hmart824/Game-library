import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './DevelopmentTeam.css'

function DevelopmentTeam(props) {
  return (
    <>
        <h3>Development Team</h3>
        <div className="team">
          {props.developers.map((person)=>{
            return <div key={person.id} className="person" style={{"--personImg": `url(${person.image_background})`}}>
                      <div className="person-img">
                        {person.image && 
                        <LazyLoadImage
                          src={person.image}
                          effect='blur'
                          placeholderSrc={person.image}
                          />}
                      </div>
                      <div className="person-info">
                        <p className='text-success'>{person.name}</p>
                        {person.positions.map((el)=>{
                        return <p key={el.id}>{el.name}</p>
                        })}
                      </div>
                    </div>
          })}
        </div>
    </>
  )
}

export default DevelopmentTeam