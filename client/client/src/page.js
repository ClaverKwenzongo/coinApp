import React, { Fragment, useState } from "react";

import { gql } from "@apollo/client";

export const COIN_TILE_DATA = gql`
  fragment CoinTile on Launch {
    __typename
    id
    symbol
  }
`;

export const GET_COINS = gql`
  query GetCoinList($after: String) {
    coins(after: $after) {
      cursor
      hasMore
      coins {
        ...CoinTile
      }
    }
  }
  ${COIN_TILE_DATA}
`;


const Coins = () => {
  return <div />;
};

export default Launches;
