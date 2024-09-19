import axios from "axios";
import { makeObservable, observable, flow, action } from "mobx";

class HealthStore {
    healthProducts = [];
    healthPageData = [];
    selectedsubCataegory = 'health';


    constructor() {
        makeObservable(this, {
            healthProducts: observable,
            healthPageData: observable,
            onHealthHandeler: flow,
            onHealthPageHandler: flow,
            sortByPriceHtoL: action,
            sortByPriceLtoH: action,
            sortByRatingHtoL: action
        });
    }

    *onHealthHandeler() {
        try {
            const response = yield axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"${this.selectedsubCataegory}"}`, {
                headers: {
                    projectId: "5m649p45bw1w"
                }
            });
            const data = yield response.data.data;
            this.healthProducts = [...data];
        } catch (error) {
            console.log(error);
        }
    }

    * onHealthPageHandler(page) {  // Accept page parameter
        try {
            const response = yield axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?limit=10&page=${page}&filter={"subCategory":"${this.selectedsubCataegory}"}`, {
                headers: {
                    projectId: "5m649p45bw1w"
                }
            });
            const data = yield response.data.data;
            this.healthPageData = [...this.healthPageData, ...data];  // Append new data for infinite scroll
        } catch (err) {
            console.log(err);
        }
    }

    sortByPriceLtoH = () => {
        const sorted = this.healthPageData.sort((a, b) => a.price - b.price);
        this.healthPageData = [...sorted];
    };

    sortByPriceHtoL = () => {
        const sorted = this.healthPageData.sort((a, b) => b.price - a.price);
        this.healthPageData = [...sorted];
    };

    sortByRatingHtoL = () => {
        const sorted = this.healthPageData.sort((a, b) => b.ratings - a.ratings);
        this.healthPageData = [...sorted];
    };



}


const healthStore = new HealthStore();
export default healthStore;
