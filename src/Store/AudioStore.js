import axios from "axios";
import { makeObservable, observable, flow, action } from "mobx";

class AudioStore {
    audio = [];
    audioPageData = [];
    selectedSubCategory = 'audio';  // Corrected variable name

    constructor() {
        makeObservable(this, {
            audio: observable,
            audioPageData: observable,
            onAudioHandler: flow,
            onAudioPageHandler: flow,
            sortByPriceHtoL: action,
            sortByRatingHtoL: action,
            sortByPriceLtoH: action
        });
    }

    *onAudioHandler() {
        try {
            const response = yield axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"${this.selectedSubCategory}"}`, {
                headers: {
                    projectId: "5m649p45bw1w"
                }
            });
            const data = yield response.data.data;
            this.audio = [...data];  // Corrected to assign to the correct observable
        } catch (error) {
            console.log(error);
        }
    }

    *onAudioPageHandler(page) {
        try {
            const response = yield axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?limit=10&page=${page}&filter={"subCategory":"${this.selectedSubCategory}"}`, {
                headers: {
                    projectId: "5m649p45bw1w"
                }
            });
            const data = yield response.data.data;
            this.audioPageData = [...this.audioPageData, ...data];  // Append new data for infinite scroll
        } catch (err) {
            console.log(err);
        }
    }

    sortByPriceLtoH = () => {
        const sorted = this.audioPageData.sort((a, b) => a.price - b.price);  // Create a shallow copy before sorting
        this.audioPageData = [...sorted];
    };

    sortByPriceHtoL = () => {
        const sorted = this.audioPageData.sort((a, b) => b.price - a.price);
        this.audioPageData = [...sorted];
    };

    sortByRatingHtoL = () => {
        const sorted = this.audioPageData.sort((a, b) => b.ratings - a.ratings);
        this.audioPageData = [...sorted];
    };
}

const audioStore = new AudioStore();
export default audioStore;
