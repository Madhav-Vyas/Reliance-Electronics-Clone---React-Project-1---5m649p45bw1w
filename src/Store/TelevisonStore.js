import axios from "axios";
import { makeObservable, observable, flow, action } from "mobx";

class TVstore {
    tv = [];
    tvPageData = [];
    selectedsubCataegory = 'tv';


    constructor() {
        makeObservable(this, {
            tv: observable,
            tvPageData: observable,
            onTVHandeler: flow,
            onTVpageHandler: flow,
            sortByPriceHtoL: action,
            sortByPriceLtoH: action,
            sortByRatingHtoL: action
        });
    }

    *onTVHandeler() {
        try {
            const response = yield axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"${this.selectedsubCataegory}"}`, {
                headers: {
                    projectId: "5m649p45bw1w"
                }
            });
            const data = yield response.data.data;
            this.tv = [...data];
        } catch (error) {
            console.log(error);
        }
    }

    *onTVpageHandler(page) {  // Accept page parameter
        try {
            const response = yield axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?limit=10&page=${page}&filter={"subCategory":"${this.selectedsubCataegory}"}`, {
                headers: {
                    projectId: "5m649p45bw1w"
                }
            });
            const data = yield response.data.data;
            this.tvPageData = [...this.tvPageData, ...data];  // Append new data for infinite scroll
        } catch (err) {
            console.log(err);
        }
    }

    sortByPriceLtoH = () => {
        const sorted = this.tvPageData.sort((a, b) => a.price - b.price);
        this.tvPageData = [...sorted];
    };

    sortByPriceHtoL = () => {
        const sorted = this.tvPageData.sort((a, b) => b.price - a.price);
        this.tvPageData = [...sorted];
    };

    sortByRatingHtoL = () => {
        const sorted = this.tvPageData.sort((a, b) => b.ratings - a.ratings);
        this.tvPageData = [...sorted];
    };



}


const tvStore = new TVstore();
export default tvStore;
