import { React , useEffect } from 'react';
import { useContextValue } from '../../Context/Customcontext';
import Screenshots from '../Screenshots/Screenshots';
import DevelopmentTeam from '../DevelopmentTeam/DevelopmentTeam';
import DetailHeader from './DetailHeader';
import { getStoreIcon } from '../../Utils/Util_functions';
import { detailURL , screenshotsURL , storesURL , trailersURL , devTeamURL} from '../../Api/Api';
import { useParams } from 'react-router';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import './Detailpage.css';
import Loader from '../Loader/Loader';

export default function Detailpage(props) {
  const {getDataFromURL, reset , gameDetails , loading } = useContextValue();
  const {id} = useParams();
  useEffect(() => {
    try{
      getDataFromURL(detailURL , id , 'detail')
      getDataFromURL(screenshotsURL , id , 'screenshots')
      getDataFromURL(storesURL , id , 'stores')
      getDataFromURL(trailersURL , id , 'trailers')
      getDataFromURL(devTeamURL , id , 'developers')
    }catch(err){
        console.log(err);
      }
  
      return ()=>{
        reset();
      }
  },[id]);


  const goToSite = (link)=>{
    window.open(`${link}`);
  };
  
  if(loading){
    return <Loader/>
  }
  return (
    <>
     <div className="detail-container" style={{"--img": `url(${gameDetails.detail.background_image})`}}>
        <div className="game-detail">
          <DetailHeader gameDetail={gameDetails.detail}/>
        </div>
        
        <section className="screenshots my-3">
          <Screenshots />
        </section>

        <section className="about-game my-3">
          <h3>About</h3>
          <p>{gameDetails.detail.description_raw}</p>
        </section>

        <section className="requirements">
          <h3>Pc Requirements</h3>
          <p>{gameDetails.detail.platforms?.map( el => {
            return el.platform.slug === 'pc' && el.requirements.minimum;
          })}</p>
          <p>{gameDetails.detail.platforms?.map( el => {
            return el.platform.slug === 'pc' && el.requirements.recommended;
          })}</p>
        </section>

        {gameDetails.stores && <section className="stores">
          <h3>Available On</h3>
          <ul>
            {gameDetails.stores?.map((el)=>{
              return <li key={el.id} onClick={()=>{goToSite(el.url)}}>{getStoreIcon(el.store_id).icon} <span>{getStoreIcon(el.store_id).name}</span></li>
            })}
          </ul>
        </section>}

        <section className="dev-team">
            {gameDetails.developers && <DevelopmentTeam developers={gameDetails.developers}/>}
        </section>
    </div>
    </>
  )
}

