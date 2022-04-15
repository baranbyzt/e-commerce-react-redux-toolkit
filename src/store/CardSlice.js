
import { createSlice } from "@reduxjs/toolkit";

export const CardSlice = createSlice({
    name: 'card',
    initialState:{
        // our items
     items: [
        {
            id:1,
            amount:3,
             product_received:0,
            price:5,
            title: 'domates',
            img: 'https://www.medikalakademi.com.tr/wp-content/uploads/2021/02/domates-tomato-4.jpg.webp'
        },
        {
            id:2,
            amount:11,
             product_received:0,
            price:8,
            title: 'biber',
            img: 'https://productimages.hepsiburada.net/s/20/500/9883561852978.jpg'
        },
        {
            id:3,
            amount:13,
             product_received:0,
            price:9,
            title: 'marul',
            img: 'https://st2.myideasoft.com/shop/du/95/myassets/products/207/pr_01_207.jpg?revision=1422463367'
        },
        {
            id:4,
            amount:9,
             product_received:0,
            price:12,
            title: 'armut',
            img: 'https://www.mismarsanalmarket.com/UserFiles/Fotograflar/org/5361-armut-armut-armut.jpg'
        },
        {
            id:5,
            amount:25,
             product_received:0,
            price:11,
            title: 'elma',
            img: 'https://ayb.akinoncdn.com/products/2021/06/18/7827/73061620-37a9-444e-9d8d-1442ea2c1178_size780x780_quality60_cropCenter.jpg'
        },
        {
            id:6,
            amount:24,
             product_received:0,
            price:13,
            title: 'sarımsak',
            img: 'https://www.erenlercep.com/image/cache/catalog/2021urunler/1haziran/006160-550x550.jpg'
        },
        {
            id:7,
            amount:32,
             product_received:0,
            price:3,
            title: 'karpuz',
            img: 'https://productimages.hepsiburada.net/s/6/1500/9722532986930.jpg'
        },
        {
            id:8,
            amount:44,
             product_received:0,
            price:9,
            title: 'mandalina',
            img: 'https://img.fidandeposu.com/nova-mandalina-fidani-mandalina-fidani-230-19-B.jpg'
        },
        {
            id:9,
            amount:16,
             product_received:0,
            price:10,
            title: 'muz',
            img: 'https://reimg-carrefour.mncdn.com/mnresize/600/600/productimage/30086005/30086005_0_MC/8796857466930_1613125839167.jpg'
        },
        

     ],
     // our total money
      total_basket :0,
      total_spend: 0,
       myinnerid : 9
    },
    reducers: {
        toadd: (state,action) => {
            const dd = action.payload -1
            if(state.items[dd].amount <= state.items[dd].product_received){

            }else{
                state.items[dd].product_received += 1
            }
        },
        btnincreaseitem:(state,action) => {
            const dd = action.payload -1
        
            if(state.items[dd].amount <= state.items[dd].product_received){

            }else{
                state.items[dd].product_received += 1
            }
            
        },
        btndecreaseitem:(state,action) => {
            const dd = action.payload -1
            state.items[dd].product_received -= 1
        },
        btndeleteitem:(state,action) => {
            const dd = action.payload -1
            state.items[dd].product_received = 0
        },
        totalspend:(state,action) => {
            const money = action.payload;
            state.total_spend += money;
        },
        totalspendreduce:(state,action) => {
            const money = action.payload;
        state.total_spend -= money;
        },
        superbasket_increase:(state,action) => {
        
           let myid =action.payload -1
   
           if(state.items[myid].amount > state.items[myid].product_received){
            state.total_basket +=1  
           }
        else{
            
           }
        },
        superbasket_decrease:(state,action) => {
          
            if(state.total_basket <= 0) {
              
            }else{
                state.total_basket -=action.payload
            }
            
        },
      
    }
})

export const selectTodos = state => state.card.items;
export const selectmoney = state => state.card;
export const {toadd,btnincreaseitem,totalspendreduce,
    superbasket_increase,superbasket_decrease,addbasket
    ,btndecreaseitem,btndeleteitem,totalspend} = CardSlice.actions;
export default CardSlice.reducer;
