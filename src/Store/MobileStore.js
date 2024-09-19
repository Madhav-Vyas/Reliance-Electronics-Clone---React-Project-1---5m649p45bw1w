import axios from "axios";
import { makeObservable, observable, flow, action } from "mobx";

class MobileStore {
    mobile = [];
    mobilePageData = [];
    selectedsubCataegory = 'mobile';


    constructor() {
        makeObservable(this, {
            mobile: observable,
            mobilePageData: observable,
            onMobileHandeler: flow,
            onMobilePageHandler: flow,
            sortByPriceHtoL: action,
            sortByPriceLtoH: action,
            sortByRatingHtoL: action
        });
    }

    *onMobileHandeler() {
        try {
            const response = yield axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"${this.selectedsubCataegory}"}`, {
                headers: {
                    projectId: "5m649p45bw1w"
                }
            });
            const data = yield response.data.data;
            this.mobile = [...data];
        } catch (error) {
            console.log(error);
        }
    }

    *onMobilePageHandler(page) {  // Accept page parameter
        try {
            const response = yield axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?limit=10&page=${page}&filter={"subCategory":"${this.selectedsubCataegory}"}`, {
                headers: {
                    projectId: "5m649p45bw1w"
                }
            });
            const data = yield response.data.data;
            this.mobilePageData = [...this.mobilePageData, ...data];  // Append new data for infinite scroll
        } catch (err) {
            console.log(err);
        }
    }

    sortByPriceLtoH = () => {
        const sorted = this.mobilePageData.sort((a, b) => a.price - b.price);
        this.mobilePageData = [...sorted];
    };

    sortByPriceHtoL = () => {
        const sorted = this.mobilePageData.sort((a, b) => b.price - a.price);
        this.mobilePageData = [...sorted];
    };

    sortByRatingHtoL = () => {
        const sorted = this.mobilePageData.sort((a, b) => b.ratings - a.ratings);
        this.mobilePageData = [...sorted];
    };



}


const mobileStore = new MobileStore();
export default mobileStore;
