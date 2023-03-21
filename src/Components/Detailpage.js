import { React , useEffect , useState} from 'react';
import axios from 'axios';
import { getPlatformsIcon , myStyle , getDate , getStoreIcon } from './Util_functions';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Screenshots from './Screenshots';
import { detailURL , screenshotsURL , storesURL , trailersURL } from './Api';
import { useParams } from 'react-router';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import './Detailpage.css';

export default function Detailpage() {
  const {id} = useParams();
  const [gameDetail, setGameDetail] = useState([]);
  const [screenshots, setScreenshots] = useState([]);
  const [stores, setStores] = useState([]);
  const [trailers, setTrailers] = useState([]);

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
      console.log(res.data.results);
      setTrailers(res.data.results);
    }

    getTrailers(id);
  
  },[id]);


  const goToSite = (link)=>{
    console.log('clicked')
    window.open(`${link}`);
  };
  


    
  return (
    <>
    <div className="detail-container" style={{"--img": `url(${gameDetail.background_image})`}}>
        <div className="game-detail">
          <div className="img">
            <LazyLoadImage
              src={gameDetail.background_image}
              effect='blur'
              placeholderSrc={gameDetail.background_image}
              />
            
            {gameDetail.metacritic && <span className='metacitric-score' title='Metacritic Score' style={myStyle(gameDetail.metacritic)}>{gameDetail.metacritic}</span>}
            
          </div>
          <div className="title">
            <h1>{gameDetail.name}</h1>
            {gameDetail.released && <small className='date'>{getDate(gameDetail.released)}</small>}
            {gameDetail.parent_platforms?.map((el)=>{
              return <span key={el.platform.id} className='platform'>{getPlatformsIcon(el.platform.slug)}</span>
            })}
              <p className='my-3'>Genre : {gameDetail.genres?.map((el)=>{return el.name}).join(' , ')}</p>
              <p>Platform : {gameDetail.platforms?.map((el)=>{return el.platform.name}).join(' , ')}</p>
              <p>Developers : {gameDetail.developers?.map((el)=>{return el.name}).join(' , ')}</p>
              <p>Publishers : {gameDetail.publishers?.map((el)=>{return el.name}).join(' , ')}</p>
              <p>Available On : {gameDetail.stores?.map((el)=>{return el.store.name}).join(' , ')}</p>
              <button type="button" className="btn btn-outline-success btn-sm btn-style">add to library</button>
          </div>
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
    </div>
    </>
  )
}

