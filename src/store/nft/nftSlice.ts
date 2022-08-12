import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

interface nestedData {
    data: [{id: string, attributes: string}]
}
interface resInter{
    data:  nestedData
}

interface BidInterface {
    nftName: string;
    nftId: string;
    bidPrice: string;
}

interface initialStateInterface{
    
}

export const nftBidding = createAsyncThunk('nft/bid', async (data: BidInterface, thunkApi) => {
    const jwt = Cookies.get('jwt')
    const {bidPrice, nftName, nftId} = data;
    console.log({bidPrice, nftName, nftId})
    try {
        //FETCHING NFT BY TOKEN ID 
        const {data}  : resInter = await axios.get(`http://localhost:1337/api/nfts?filters[nftId]=${nftId}`);
        const nft =  data.data[0]
        let res;
        if(!nft){
            res = await axios({
                url: 'http://localhost:1337/api/nfts',
                method: 'post',
                headers: {
                    Authorization: `Bearer ${jwt}`
                },
                // data: {data: {name: listingInfo[0].asset.name, tokenId: listingInfo[0].tokenId.toString()}}
                data: {data: {name: nftName, nftId: nftId}}
            });
            console.log(res)
        }
        const nft_id = nft ? nft.id : res?.data.data.id;
        // console.log({nftTokenId})
        console.log(nft_id)

        // //NFT Id to link bidder with nft
        const bidRes = await axios({
            url: 'http://localhost:1337/api/bids',
            method: 'post',
            headers: {
                Authorization: `Bearer ${jwt}`
            },
            data: {data : {name: Cookies.get('name'), price: bidPrice, nft: nft_id, nftId: nft_id}}
        });
    } catch (error) {
        console.log((error as Error).message);
    }
})

const nftSlice = createSlice({
    name: 'nft',
    initialState: '',
    reducers: {},
    extraReducers: (builder) => {
        // builder.addCase(bid.pending, (state) => {

        // })

    }
})

export default nftSlice.reducer;

