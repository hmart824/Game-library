import React , {useEffect , useState } from 'react';
import { useContextValue } from '../../Context/Customcontext';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { getPlatformsIcon } from '../../Utils/Util_functions';
import { ImCross } from "react-icons/im";
import './Library.css';
import db from '../../Firebase';
import { useNavigate } from 'react-router';

function Library() {
  const {currentUser} = useContextValue();
    const [collection, setCollection] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
     const getCollection = async()=>{
        db.collection('library').doc(currentUser.email).collection('games').orderBy('timeStamp' , 'asc').onSnapshot((snapshot)=>{
            let collection = snapshot.docs.map((doc)=> doc.data());
            setCollection(collection);
        })
     }
        getCollection();
     
    })
    const remove = (e , id)=>{
      e.stopPropagation();
        db.collection('library').doc(currentUser.email).collection('games').onSnapshot((snapshot)=>{
          snapshot.docs.forEach((doc) => {
            if (doc.data().id === id) {   
              doc.ref.delete();              
              console.log(doc.id , "removed")
            }
          });
        });
      }
    
    const goTo = (id)=>{
      navigate(`/games/${id}`);
    }
    
  return (
    <div className="library">
        <h1>{currentUser?.displayName}</h1>
        <div className="collection">
            {collection?.map((game)=>{
                return <div className="item" key={game.id} onClick={()=> goTo(game.id)}>
                            <div className="remove">
                                <ImCross onClick={(e)=> remove(e , game.id)}/>
                            </div>
                            <div className="item-img">
                                <LazyLoadImage
                                  src={game.background_image}
                                  effect='blur'
                                  placeholderSrc={game.background_image}
                                />
                            </div>
                            <div className="item-detail">
                            {game.platforms?.map((el)=>{
                                return <span key={el.platform.id} className='platform'>{getPlatformsIcon(el.platform.slug)}</span>
                                })}
                                <span className="platform"></span>
                                <p>{game.title.slice(0,20)}</p>
                            </div>
                        </div>
            })}
        </div>
    </div>
  )
}

export default Library