import axios from "axios";
import { makeObservable, observable, flow, action } from "mobx";

class Travelstore {
    travel = [];
    travelPageData = [];
    selectedsubCataegory = 'travel';


    constructor() {
        makeObservable(this, {
            travel: observable,
            travelPageData: observable,
            onTravelHandeler: flow,
            onTravelpageHandler: flow,
            sortByPriceHtoL: action,
            sortByPriceLtoH: action,
            sortByRatingHtoL: action
        });
    }

    *onTravelHandeler() {
        try {
            const response = yield axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"${this.selectedsubCataegory}"}`, {
                headers: {
                    projectId: "5m649p45bw1w"
                }
            });
            const data = yield response.data.data;
            this.travel = [...data];
        } catch (error) {
            console.log(error);
        }
    }

    *onTravelpageHandler(page) {  // Accept page parameter
        try {
            const response = yield axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?limit=10&page=${page}&filter={"subCategory":"${this.selectedsubCataegory}"}`, {
                headers: {
                    projectId: "5m649p45bw1w"
                }
            });
            const data = yield response.data.data;
            this.travelPageData = [...this.travelPageData, ...data];  // Append new data for infinite scroll
        } catch (err) {
            console.log(err);
        }
    }

    sortByPriceLtoH = () => {
        const sorted = this.travelPageData.sort((a, b) => a.price - b.price);
        this.travelPageData = [...sorted];
    };

    sortByPriceHtoL = () => {
        const sorted = this.travelPageData.sort((a, b) => b.price - a.price);
        this.travelPageData = [...sorted];
    };

    sortByRatingHtoL = () => {
        const sorted = this.travelPageData.sort((a, b) => b.ratings - a.ratings);
        this.travelPageData = [...sorted];
    };



}


const travelStore = new Travelstore();
export default travelStore;
