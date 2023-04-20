import { React , useEffect , useState} from 'react';
import axios from 'axios';
import Screenshots from './Screenshots';
import DevelopmentTeam from './DevelopmentTeam';
import DetailHeader from './DetailHeader';
import { getStoreIcon } from './Util_functions';
import { detailURL , screenshotsURL , storesURL , trailersURL , devTeamURL} from './Api';
import { useParams } from 'react-router';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import './Detailpage.css';

export default function Detailpage() {
  const {id} = useParams();
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(currentUser);
  const [gameDetail, setGameDetail] = useState([]);
  const [screenshots, setScreenshots] = useState([]);
  const [stores, setStores] = useState([]);
  const [trailers, setTrailers] = useState([]);
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    const getDetails = async(id)=>{
      let res = await axios.get(detailURL(id));
      setGameDetail(res.data);
    }

    getDetails(id);

    const getScreenshots = async(id)=>{
      let res = await axios.get(screenshotsURL(id));
      setScreenshots(res.data.results);
    }

    getScreenshots(id);


    const getStores = async(id)=>{
      let res = await axios.get(storesURL(id));
      setStores(res.data.results);
    }

    getStores(id);

    const getTrailers = async(id)=>{
      let res = await axios.get(trailersURL(id));
      setTrailers(res.data.results);
    }

    getTrailers(id);

    const getDevelopers = async(id)=>{
      let res = await axios.get(devTeamURL(id));
      setDevelopers(res.data.results);
    }

    getDevelopers(id);
  
  },[id]);


  const goToSite = (link)=>{
    window.open(`${link}`);
  };
  


    
  return (
    <>
    {/* <Navbar setUser={setUser}/>  */}
     <div className="detail-container" style={{"--img": `url(${gameDetail.background_image})`}}>
        <div className="game-detail">
          <DetailHeader gameDetail={gameDetail} currentUser={user}/>
        </div>
        
        <div className="screenshots my-3">
          <Screenshots screenshots={screenshots} trailers={trailers}/>
        </div>

        <section className="about-game my-3">
          <h3>About</h3>
          <p>{gameDetail.description_raw}</p>
        </section>

        <section className="requirements">
          <h3>Pc Requirements</h3>
          <p>{gameDetail.platforms?.map( el => {
            if(el.platform.slug === 'pc'){
              return el.requirements.minimum
            }
          })}</p>
          <p>{gameDetail.platforms?.map( el => {
            if(el.platform.slug === 'pc'){
              return el.requirements.recommended
            }
          })}</p>
        </section>

        <section className="stores">
          <h3>Available On</h3>
          <ul>
            {stores?.map((el)=>{
              return <li key={el.id} onClick={()=>{goToSite(el.url)}}>{getStoreIcon(el.store_id).icon} <span>{getStoreIcon(el.store_id).name}</span></li>
            })}
          </ul>
        </section>

        <section className="dev-team">
            <DevelopmentTeam developers={developers}/>
        </section>
    </div>
    </>
  )
}

