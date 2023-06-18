import axios from 'axios';
import React, { Component } from 'react';
import Gameitems from '../GamesItem/Gameitems';
import './Home.css';
import Loader from '../Loader/Loader';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class Home extends Component {

    
    constructor(){
        super();
        this.state = {
            games: [],
            totalResults: 0,
            page: 1 ,
            loading: true
        }
    }

    async getGames(){
        this.setState({loading: true});
        let res = await axios.get(this.props.URL(this.state.page));
        this.setState({
            games: res.data.results,
            totalResults: res.data.count,
            loading: false
        }) 
    }
    async componentDidMount(){
        this.getGames();  
    }
    // https://api.rawg.io/api/games?genre=action&key=bef892605937470db41e81a497c8b119&page=1
    // https://api.rawg.io/api/games/outlast?key=bef892605937470db41e81a497c8b119

     fetchMoreData = async()=>{   
        let p = this.state.page + 1;
        this.setState({page: p});
        let res = await axios.get(this.props.URL(p));
        this.setState({
            games: this.state.games.concat(res.data.results)
        })
      }   
   
    


  render() {
    return (
        <>
        
         <InfiniteScroll
          dataLength={this.state.games?.length}
          next={this.fetchMoreData}
          hasMore={this.state.games?.length !== this.state.totalResults}
          loader={<Loader/>}
        >
        <div className="card-row">
        <h3>{this.props.title}</h3>
            {this.state.games.map((element)=>{
                 return <Gameitems key={element.id} id={element.id} name = {element.name} bgImg={element.background_image} parentPlatform={element.parent_platforms} releasedDate={element.released} rating={element.rating} ratingTop={element.rating_top} metacritic={element.metacritic}/>
            })}
        </div> 
        </InfiniteScroll>
    </>
     
    )
  }
}
