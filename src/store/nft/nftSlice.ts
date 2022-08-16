import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

interface nestedData {
    data: [{id: string, attributes: string}]
}
interface resInter{
    data:  nestedData;
}

interface BidInterface {
    nftName: string;
    nftId: string;
    bidPrice: string;
}

interface initialStateInterface{    
    id: number | undefined;
    bidData: [{id: string, attributes: {name: string, nftId: string, price: string, createdAt: string}}] | [];
    bidLoading: boolean;
    error: string | unknown;
}

export const nftBidding = createAsyncThunk('nft/bid', async (data: BidInterface, thunkApi) => {
    const jwt = Cookies.get('jwt')
    const {bidPrice, nftName, nftId} = data;
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
                data: {data: {name: nftName, nftId: nftId}}
            });
        }
        const nft_id = nft ? nft.id : res?.data.data.id;

        // //NFT Id to link bidder with nft
        const bidRes = await axios({
            url: 'http://localhost:1337/api/bids',
            method: 'post',
            headers: {
                Authorization: `Bearer ${jwt}`
            },
            data: {data : {name: Cookies.get('name'), price: bidPrice, nft: nft_id, nftId: nft_id}}
        });
        console.log({bidRes})
    } catch (error) {
        console.log((error as Error).message);
    }
})

export const fetchNftBids = createAsyncThunk('nft/fetchBids', async (nftId: number, thunkApi) => {  
    console.log('fetch bid called')  
    try {
        const res = await axios({
            url: `http://localhost:1337/api/nfts?filters[nftId]=${nftId}&populate=bids`,
            method: 'get'
        });
        const {data} = res;
        console.log({sliceData: data});
        if(data.data.length < 1) return undefined;
        return data.data[0].attributes.bids.data;
    } catch (error) {
        return thunkApi.rejectWithValue((error as Error).message);
    }
})

const initialState : initialStateInterface = {
    id: undefined,
    bidData: [],
    bidLoading: false,
    error: ''
} 

const nftSlice = createSlice({
    name: 'nft',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchNftBids.pending, (state) => {
            state.bidLoading = true;        
        })
        builder.addCase(fetchNftBids.fulfilled, (state, action) => {
            state.bidLoading = false;
            state.bidData = action.payload;
        })
        builder.addCase(fetchNftBids.rejected, (state, action) => {
            state.bidLoading = false;
            state.error = action.payload;      
        })

    }
})

export default nftSlice.reducer;

