require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const { gql } = require('apollo-server');
const { url } = require('inspector');
const fetch = require('node-fetch');

const typeDefs = gql`

    type Coin {
        id: String
        symbol: String
        name: String
        nameid: String
        rank: Int
        price_usd: String
        percent_change_24h: String
        percent_change_1h: String
        percent_change_7d: String
        market_cap_usd: String
        volume24: Float
        volume24_native: Float
        csupply: String
        price_btc: String
        tsupply: String
        msupply: String


        
    }

    type Market {
        name: String
        base: String
        quote: String
        price: Float
        price_usd: Float
        volume: Float
        volume_usd: Float
        time: Float
    }

    type Query {
        getcoins: [Coin]
        getmarket: [Market]
    }
`;

let coins;

fetch('https://api.coinlore.net/api/tickers/')
.then(getcoins => getcoins.json())
.then(data => {
    coins = data.data
});

const resolvers =  {
    Query: {
        getcoins: () => coins,

        getmarket: async (_,{ id }) => {
            const response = await fetch(`https://api.coinlore.net/api/coin/markets/?id=80`);
            return response.json();
        },

        }  

    }


const server = new ApolloServer({ typeDefs, resolvers });

//    id: ID! getmarket: [Market]
//symbol: String
//name: String
//nameid: Stringnpm run se

server.listen().then(({url}) => {
    console.log(`Server is running on ${url}`);
});
