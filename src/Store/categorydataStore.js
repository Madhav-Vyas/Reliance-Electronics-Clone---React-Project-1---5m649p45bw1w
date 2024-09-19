import { makeObservable, observable, action } from "mobx";

class CategoryStore {
    getAc = [];
    getAudio = [];
    getHealth = [];
    getKitchen = [];
    getLaptop = [];
    getMobile = [];
    getRefrigerator = [];
    getTablet = [];
    getTelevison = [];
    getTravel = [];
    getWashingMachine = [];


    constructor() {
        makeObservable(this, {
            getAc: observable,
            getAudio: observable,
            getHealth: observable,
            getKitchen: observable,
            getLaptop: observable,
            getMobile: observable,
            getRefrigerator: observable,
            getTablet: observable,
            getTelevison: observable,
            getTravel: observable,
            getWashingMachine: observable,

            acdataHandler: action,
            audioDataHandler: action,
        })
    }
    acdataHandler(input) {
        this.getAc(input)
    }
    audioDataHandler(input) {
        this.getAudio = input
    }


}
const categoryDataStore = new CategoryStore()
export default categoryDataStore