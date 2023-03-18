import React, { Component } from 'react';
import axios from 'axios';
import './Search.css';
import Searchitems from './Searchitems';
import { searchGamesURL } from './Api';
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class Search extends Component {

  constructor(){
    super();
    this.state = {
      page: 1,
      searchInput: '',
      searchedGames: [],
      totalResults: 0,
      interval : 0,

    }
  }

  searchGames = (title , page)=>{
    clearTimeout(this.state.interval);
    let intval = setTimeout(async ()=>{
      if(title){
        console.log(title);
      let res = await axios.get(searchGamesURL(title , page));
      this.setState({
        searchedGames : res.data.results,
        totalResults : res.data.count,
      })
    }
    },500);
    this.setState({interval: intval});
  }
  
  fetchMoreData = async()=>{   
    let p = this.state.page + 1;
    this.setState({page: p});
    let res = await axios.get(searchGamesURL(this.state.searchInput.replace(/\s+/g," ").trim() , p));
    this.setState({
      searchedGames: this.state.searchedGames.concat(res.data.results)
    })
  }   


  render() {
    return (
      <div className="search">
        <div className="inp">
            <input 
            type="text" 
            name="search_input" 
            spellCheck='false' 
            placeholder='Search Games' 
            value={this.state.searchInput} 
            onChange={(e)=>{this.setState({searchInput : e.target.value})}}
            onKeyUp={()=>{this.searchGames(this.state.searchInput.replace(/\s+/g," ").trim() , this.state.page)}}
            />
        </div>
        
        {this.state.searchedGames?.length !== 0 && <div className="search-list my-2">
        <InfiniteScroll
          dataLength={this.state.searchedGames?.length}
          next={this.fetchMoreData}
          hasMore={this.state.searchedGames?.length !== this.state.totalResults}
          loader={<Loader/>}
          height={432}
          >
              {this.state.searchedGames.map((item)=>{
                return <Searchitems key={item.id} bgImg={item.background_image} name={item.name} gameId={item.id}/>
              })}
          </InfiniteScroll>
        </div>}
        
      </div>
    )
  }
}
