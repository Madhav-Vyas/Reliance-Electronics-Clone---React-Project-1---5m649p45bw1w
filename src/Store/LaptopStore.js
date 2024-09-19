import axios from "axios";
import { makeObservable, observable, flow, action } from "mobx";

class LaptopStore {
    laptop = [];
    laptopPageData = [];
    selectedsubCataegory = 'laptop';


    constructor() {
        makeObservable(this, {
            laptop: observable,
            laptopPageData: observable,
            onLaptopHandeler: flow,
            onLaptopPageHandler: flow,
            sortByPriceHtoL: action,
            sortByPriceLtoH: action,
            sortByRatingHtoL: action
        });
    }

    *onLaptopHandeler() {
        try {
            const response = yield axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"${this.selectedsubCataegory}"}`, {
                headers: {
                    projectId: "5m649p45bw1w"
                }
            });
            const data = yield response.data.data;
            this.laptop = [...data];
        } catch (error) {
            console.log(error);
        }
    }

    *onLaptopPageHandler(page) {  // Accept page parameter
        try {
            const response = yield axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?limit=10&page=${page}&filter={"subCategory":"${this.selectedsubCataegory}"}`, {
                headers: {
                    projectId: "5m649p45bw1w"
                }
            });
            const data = yield response.data.data;
            this.laptopPageData = [...this.laptopPageData, ...data];  // Append new data for infinite scroll
        } catch (err) {
            console.log(err);
        }
    }

    sortByPriceLtoH = () => {
        const sorted = this.laptopPageData.sort((a, b) => a.price - b.price);
        this.laptopPageData = [...sorted];
    };

    sortByPriceHtoL = () => {
        const sorted = this.laptopPageData.sort((a, b) => b.price - a.price);
        this.laptopPageData = [...sorted];
    };

    sortByRatingHtoL = () => {
        const sorted = this.laptopPageData.sort((a, b) => b.ratings - a.ratings);
        this.laptopPageData = [...sorted];
    };



}


const laptopStore = new LaptopStore();
export default laptopStore;
