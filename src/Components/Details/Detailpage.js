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

export default function Detailpage(props) {
  const {getDataFromURL, reset , gameDetail , stores , developers } = useContextValue();
  const {id} = useParams();
  useEffect(() => {
    try{
      getDataFromURL(detailURL , id , 'gameDetail')
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
  


    
  return (
    <>
    {/* <Navbar setUser={setUser}/>  */}
     <div className="detail-container" style={{"--img": `url(${gameDetail.background_image})`}}>
        <div className="game-detail">
          <DetailHeader gameDetail={gameDetail}/>
        </div>
        
        <section className="screenshots my-3">
          <Screenshots />
        </section>

        <section className="about-game my-3">
          <h3>About</h3>
          <p>{gameDetail.description_raw}</p>
        </section>

        <section className="requirements">
          <h3>Pc Requirements</h3>
          <p>{gameDetail.platforms?.map( el => {
            return el.platform.slug === 'pc' && el.requirements.minimum;
          })}</p>
          <p>{gameDetail.platforms?.map( el => {
            return el.platform.slug === 'pc' && el.requirements.recommended;
          })}</p>
        </section>

        {stores && <section className="stores">
          <h3>Available On</h3>
          <ul>
            {stores?.map((el)=>{
              return <li key={el.id} onClick={()=>{goToSite(el.url)}}>{getStoreIcon(el.store_id).icon} <span>{getStoreIcon(el.store_id).name}</span></li>
            })}
          </ul>
        </section>}

        <section className="dev-team">
            {developers && <DevelopmentTeam developers={developers}/>}
        </section>
    </div>
    </>
  )
}

