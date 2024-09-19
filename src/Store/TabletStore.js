import axios from "axios";
import { makeObservable, observable, flow, action } from "mobx";

class Tabletstore {
    tablet = [];
    tabletPageData = [];
    selectedsubCataegory = 'tablet';


    constructor() {
        makeObservable(this, {
            tablet: observable,
            tabletPageData: observable,
            onTabletHandler: flow,
            onTabletpageHandler: flow,
            sortByPriceHtoL: action,
            sortByPriceLtoH: action,
            sortByRatingHtoL: action
        });
    }

    *onTabletHandler() {
        try {
            const response = yield axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"${this.selectedsubCataegory}"}`, {
                headers: {
                    projectId: "5m649p45bw1w"
                }
            });
            const data = yield response.data.data;
            this.tablet = [...data];
        } catch (error) {
            console.log(error);
        }
    }

    *onTabletpageHandler(page) {  // Accept page parameter
        try {
            const response = yield axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?limit=10&page=${page}&filter={"subCategory":"${this.selectedsubCataegory}"}`, {
                headers: {
                    projectId: "5m649p45bw1w"
                }
            });
            const data = yield response.data.data;
            this.tabletPageData = [...this.tabletPageData, ...data];  // Append new data for infinite scroll
        } catch (err) {
            console.log(err);
        }
    }

    sortByPriceLtoH = () => {
        const sorted = this.tabletPageData.sort((a, b) => a.price - b.price);
        this.tabletPageData = [...sorted];
    };

    sortByPriceHtoL = () => {
        const sorted = this.tabletPageData.sort((a, b) => b.price - a.price);
        this.tabletPageData = [...sorted];
    };

    sortByRatingHtoL = () => {
        const sorted = this.tabletPageData.sort((a, b) => b.ratings - a.ratings);
        this.tabletPageData = [...sorted];
    };



}


const tabletStore = new Tabletstore();
export default tabletStore;
