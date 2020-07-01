import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const BASE_URL = "http://localhost:5000";

/* eslint-disable no-debugger */

export const store = new Vuex.Store({
    state: {
        Products: [],
        ProductTypes: {
            "meat": { text: "Meat"},
            "fruit": { text: "Fruit" },
            "bakery": { text: "Bakery" },
            "dairy": { text: "Dairy" },
            "vegetable": { text: "Vegetables" }
        }
    },
    getters: {
        products: state => {
            return state.Products;
        }
    },
    mutations: {
        SAVE_PRODUCT_LIST: (state, payload) => {
            state.Products = payload.data;
        }
    },
    actions: {
        initStore(context){
            return axios.get(`${BASE_URL}/api/kitchenart`)
                .then((response) => {
                    // debugger
                    context.commit("SAVE_PRODUCT_LIST", response.data);
                    return true;
                })
                .catch((err) => {
                    // debugger
                    console.log(err.toString());
                    return false;
                });
        },
        filterProducts(context, productType) {
            let listObj = context.state.Products;
            const view = listObj.filter(product =>
                product.type === productType);

            return view;
        }
    }
});