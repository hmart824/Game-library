import React from 'react';
import './DevelopmentTeam.css'

function DevelopmentTeam(props) {
  return (
    <>
        <h3>Development Team</h3>
        {props.developers.map((person)=>{
          return <div key={person.id} className="person" style={{"--personImg": `url(${person.image_background})`}}>
                    <div className="person-img">
                      {person.image && <img src={person.image} alt={person.name}/>}
                    </div>
                    <div className="person-info">
                      <p className='text-success'>{person.name}</p>
                      {person.positions.map((el)=>{
                      return <p key={el.id}>{el.name}</p>
                      })}
                    </div>
                  </div>
        })}
    </>
  )
}

export default DevelopmentTeam