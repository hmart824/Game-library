import React ,{useEffect, useState} from 'react';
import { useContextValue } from '../../Context/Customcontext';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import db from '../../Firebase';
import {firebase} from '../../Firebase';
import { collection,getDocs } from "firebase/firestore";
import { getPlatformsIcon , myStyle , getDate } from '../../Utils/Util_functions';
import { useNavigate } from 'react-router';

function DetailHeader(props) {
  const {currentUser} = useContextValue();
  const navigate = useNavigate();
  const [added, setAdded] = useState(false);


  useEffect(() => {
    const checkLibrary = async ()=>{
      const gamesCollection = collection(db, "library" , currentUser.email , "games")
      const games = await getDocs(gamesCollection);
      games.forEach((doc) => {
        if(doc.data().id === props.gameDetail.id){
          return setAdded(true);
        }
      })
    }
    if(currentUser){
      checkLibrary();
    }
  }, [currentUser , props.gameDetail.id]);

  const addToLibrary = async ()=>{
    if(!added && currentUser){
      console.log(currentUser.email)
      setAdded(true);
      let payload = {
        id: props.gameDetail.id,
        title: props.gameDetail.name,
        background_image: props.gameDetail.background_image,
        platforms: props.gameDetail.parent_platforms,
        timeStamp: firebase.firestore.Timestamp.now()
      }
      await db.collection('library').doc(currentUser.email).collection('games').add(payload);
      console.log(props.gameDetail.id , 'added to library');
    }else if(!currentUser){
      navigate('/login');
    }
  }

  return (
    <>
        <div className="img">
            <LazyLoadImage
              src={props.gameDetail.background_image}
              effect='blur'
              placeholderSrc={props.gameDetail.background_image}
              />
            
            {props.gameDetail.metacritic && <span className='metacitric-score' title='Metacritic Score' style={myStyle(props.gameDetail.metacritic)}>{props.gameDetail.metacritic}</span>}
            
          </div>
          <div className="title">
            <h1>{props.gameDetail.name}</h1>
            {props.gameDetail.released && <small className='date'>{getDate(props.gameDetail.released)}</small>}
            {props.gameDetail.parent_platforms?.map((el)=>{
              return <span key={el.platform.id} className='platform'>{getPlatformsIcon(el.platform.slug)}</span>
            })}
              <p className='my-3'>Genre : {props.gameDetail.genres?.map((el)=>{return el.name}).join(' , ')}</p>
              <p>Platform : {props.gameDetail.platforms?.map((el)=>{return el.platform.name}).join(' , ')}</p>
              <p>Developers : {props.gameDetail.developers?.map((el)=>{return el.name}).join(' , ')}</p>
              <p>Publishers : {props.gameDetail.publishers?.map((el)=>{return el.name}).join(' , ')}</p>
              <p>Available On : {props.gameDetail.stores?.map((el)=>{return el.store.name}).join(' , ')}</p>
              <button type="button" className="btn btn-outline-success btn-sm btn-style" onClick={addToLibrary}>{currentUser && added ? 'In Library' : 'add to library'}</button>
          </div>
    </>
  )
}

export default DetailHeader