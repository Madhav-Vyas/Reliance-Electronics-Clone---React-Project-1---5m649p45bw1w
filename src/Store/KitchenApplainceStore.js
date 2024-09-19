import axios from "axios";
import { makeObservable, observable, flow, action } from "mobx";

class KAstore {
    kitchenApplainces = [];
    KApageData = [];
    selectedsubCataegory = 'kitchenappliances';


    constructor() {
        makeObservable(this, {
            kitchenApplainces: observable,
            KApageData: observable,
            onKAHandeler: flow,
            onKApageHandler: flow,
            sortByPriceHtoL: action,
            sortByPriceLtoH: action,
            sortByRatingHtoL: action
        });
    }

    *onKAHandeler() {
        try {
            const response = yield axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"${this.selectedsubCataegory}"}`, {
                headers: {
                    projectId: "5m649p45bw1w"
                }
            });
            const data = yield response.data.data;
            this.kitchenApplainces = [...data];
        } catch (error) {
            console.log(error);
        }
    }

    *onKApageHandler(page) {  // Accept page parameter
        try {
            const response = yield axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?limit=10&page=${page}&filter={"subCategory":"${this.selectedsubCataegory}"}`, {
                headers: {
                    projectId: "5m649p45bw1w"
                }
            });
            const data = yield response.data.data;
            this.KApageData = [...this.KApageData, ...data];  // Append new data for infinite scroll
        } catch (err) {
            console.log(err);
        }
    }

    sortByPriceLtoH = () => {
        const sorted = this.KApageData.sort((a, b) => a.price - b.price);
        this.KApageData = [...sorted];
    };

    sortByPriceHtoL = () => {
        const sorted = this.KApageData.sort((a, b) => b.price - a.price);
        this.KApageData = [...sorted];
    };

    sortByRatingHtoL = () => {
        const sorted = this.KApageData.sort((a, b) => b.ratings - a.ratings);
        this.KApageData = [...sorted];
    };



}


const kitchenStore = new KAstore();
export default kitchenStore;
