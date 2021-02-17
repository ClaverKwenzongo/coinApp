import React, { Fragment, useState } from "react";

import { gql, useQuery } from "@apollo/client";

import { CoinTile, Header, Button, Loading } from "../components";

export const COIN_TILE_DATA = gql`
  fragment CoinTile on Coin {
    __typename
    id
    symbol
  }
`;

export const GET_COINS = gql`
  query GetCoinList($after: String) {
    getcoins(after: $after) {
      cursor
      hasMore
      coins {
        ...CoinTile
      }
    }
  }
  ${COIN_TILE_DATA}
`;


/*const Coins = () => {
  return <div />;
};*/

const Coins = () => {
    const { data, loading, error } = useQuery(GET_COINS);
  
    if (loading) return <Loading />;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;
  
    return (
      <Fragment>
        <Header />
        {data.coins &&
          data.coins.coins &&
          data.coins.coins.map(coin => (
            <CoinTile key={coin.id} coin={coin} />
          ))}
      </Fragment>
    );
  };
  

export default Coins;
