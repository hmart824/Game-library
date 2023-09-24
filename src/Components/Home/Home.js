import React, { useEffect } from "react";
import { useContextValue } from "../../Context/Customcontext";
import Gameitems from "../GamesItem/Gameitems";
import "./Home.css";
import Loader from "../Loader/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home(props) {
  const { getGames, fetchMoreGames, games, loading } = useContextValue();

  useEffect(() => {
    if (!games[props.title]) {
      getGames(props.URL, props.title);
    }
  }, []);

  // https://api.rawg.io/api/games?genre=action&key=bef892605937470db41e81a497c8b119&page=1
  // https://api.rawg.io/api/games/outlast?key=bef892605937470db41e81a497c8b119

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <InfiniteScroll
        dataLength={games[props.title]?.data.length || 0}
        next={() => fetchMoreGames(props.URL, props.title)}
        hasMore={
          games[props.title]?.data.length !== games[props.title]?.totalResults
        }
        loader={<Loader />}
      >
        <div className="card-row">
          <h3>{props.title}</h3>
          {games[props.title]?.data.map((element) => {
            return (
              <Gameitems
                key={element.id}
                id={element.id}
                name={element.name}
                bgImg={element.background_image}
                parentPlatform={element.parent_platforms}
                releasedDate={element.released}
                rating={element.rating}
                ratingTop={element.rating_top}
                metacritic={element.metacritic}
              />
            );
          })}
        </div>
      </InfiniteScroll>
    </>
  );
}
