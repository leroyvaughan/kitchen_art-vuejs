import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


let BASE_URL = "http://localhost:5000";
if (document.location.href != "http://localhost:5001/") {
    BASE_URL = "";
}


export const store = new Vuex.Store({
    state: {
        Products: [],
        ProductTypes: {
            "fruit": { id: "fruit", text: "Fruit" },
            "meat": { id: "meat", text: "Meat"},
            "bakery": { id: "bakery", text: "Bakery" },
            "dairy": { id: "dairy", text: "Dairy" },
            "vegetable": { id: "vegetable", text: "Vegetables" }
        },
        Frames: [
            "orange", "blue", "greenB", "gray", "brown", "purple", "img"
        ]
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