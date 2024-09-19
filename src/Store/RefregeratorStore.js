import axios from "axios";
import { makeObservable, observable, flow, action } from "mobx";

class Refstore {
    fridge = [];
    fridgePageData = [];
    selectedsubCataegory = 'refrigerator';


    constructor() {
        makeObservable(this, {
            fridge: observable,
            fridgePageData: observable,
            onFridgeHandeler: flow,
            onFridgePageHandler: flow,
            sortByPriceHtoL: action,
            sortByPriceLtoH: action,
            sortByRatingHtoL: action
        });
    }

    *onFridgeHandeler() {
        try {
            const response = yield axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"${this.selectedsubCataegory}"}`, {
                headers: {
                    projectId: "5m649p45bw1w"
                }
            });
            const data = yield response.data.data;
            this.fridge = [...data];
        } catch (error) {
            console.log(error);
        }
    }

    *onFridgePageHandler(page) {  // Accept page parameter
        try {
            const response = yield axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?limit=10&page=${page}&filter={"subCategory":"${this.selectedsubCataegory}"}`, {
                headers: {
                    projectId: "5m649p45bw1w"
                }
            });
            const data = yield response.data.data;
            this.fridgePageData = [...this.fridgePageData, ...data];  // Append new data for infinite scroll
        } catch (err) {
            console.log(err);
        }
    }

    sortByPriceLtoH = () => {
        const sorted = this.fridgePageData.sort((a, b) => a.price - b.price);
        this.fridgePageData = [...sorted];
    };

    sortByPriceHtoL = () => {
        const sorted = this.fridgePageData.sort((a, b) => b.price - a.price);
        this.fridgePageData = [...sorted];
    };

    sortByRatingHtoL = () => {
        const sorted = this.fridgePageData.sort((a, b) => b.ratings - a.ratings);
        this.fridgePageData = [...sorted];
    };



}


const refStore = new Refstore();
export default refStore;
