import axios from "axios";
import { makeObservable, observable, flow, action } from "mobx";

class ACstore {
    ac = [];
    acPageData = [];
    selectedsubCataegory = 'ac';


    constructor() {
        makeObservable(this, {
            ac: observable,
            acPageData: observable,
            onAcHandeler: flow,
            onAcpageHandler: flow,
            sortByPriceHtoL: action,
            sortByPriceLtoH: action,
            sortByRatingHtoL: action
        });
    }

    *onAcHandeler() {
        try {
            const response = yield axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"${this.selectedsubCataegory}"}`, {
                headers: {
                    projectId: "5m649p45bw1w"
                }
            });
            const data = yield response.data.data;
            this.ac = [...data];
        } catch (error) {
            console.log(error);
        }
    }

    *onAcpageHandler(page) {  // Accept page parameter
        try {
            const response = yield axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?limit=10&page=${page}&filter={"subCategory":"${this.selectedsubCataegory}"}`, {
                headers: {
                    projectId: "5m649p45bw1w"
                }
            });
            const data = yield response.data.data;
            this.acPageData = [...this.acPageData, ...data];  // Append new data for infinite scroll
        } catch (err) {
            console.log(err);
        }
    }

    sortByPriceLtoH = () => {
        const sorted = this.acPageData.sort((a, b) => a.price - b.price);
        this.acPageData = [...sorted];
    };

    sortByPriceHtoL = () => {
        const sorted = this.acPageData.sort((a, b) => b.price - a.price);
        this.acPageData = [...sorted];
    };

    sortByRatingHtoL = () => {
        const sorted = this.acPageData.sort((a, b) => b.ratings - a.ratings);
        this.acPageData = [...sorted];
    };



}


const acStore = new ACstore();
export default acStore;
