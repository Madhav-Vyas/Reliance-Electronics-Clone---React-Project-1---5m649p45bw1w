import axios from "axios";
import { makeObservable, observable, flow, action } from "mobx";

class WMstore {
    wm = [];
    wmPageData = [];
    selectedsubCataegory = 'washingMachine';


    constructor() {
        makeObservable(this, {
            wm: observable,
            wmPageData: observable,
            onWmHandeler: flow,
            onWmpageHandler: flow,
            sortByPriceHtoL: action,
            sortByPriceLtoH: action,
            sortByRatingHtoL: action
        });
    }

    *onWmHandeler() {
        try {
            const response = yield axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"${this.selectedsubCataegory}"}`, {
                headers: {
                    projectId: "5m649p45bw1w"
                }
            });
            const data = yield response.data.data;
            this.wm = [...data];
        } catch (error) {
            console.log(error);
        }
    }

    *onWmpageHandler(page) {  // Accept page parameter
        try {
            const response = yield axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?limit=10&page=${page}&filter={"subCategory":"${this.selectedsubCataegory}"}`, {
                headers: {
                    projectId: "5m649p45bw1w"
                }
            });
            const data = yield response.data.data;
            this.wmPageData = [...this.wmPageData, ...data];  // Append new data for infinite scroll
        } catch (err) {
            console.log(err);
        }
    }

    sortByPriceLtoH = () => {
        const sorted = this.wmPageData.sort((a, b) => a.price - b.price);
        this.wmPageData = [...sorted];
    };

    sortByPriceHtoL = () => {
        const sorted = this.wmPageData.sort((a, b) => b.price - a.price);
        this.wmPageData = [...sorted];
    };

    sortByRatingHtoL = () => {
        const sorted = this.wmPageData.sort((a, b) => b.ratings - a.ratings);
        this.wmPageData = [...sorted];
    };



}


const wmStore = new WMstore();
export default wmStore;
