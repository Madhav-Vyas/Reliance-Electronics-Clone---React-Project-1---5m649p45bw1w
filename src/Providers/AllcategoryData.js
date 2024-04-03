import React, { useState, createContext, useContext } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [getToken, setToken] = useState(localStorage.getItem('token'));
    const [getName, setName] = useState(localStorage.getItem('name'));

    const [getAc, setAc] = useState([]);
    const [audio, setAudio] = useState([]);
    const [gethealth, sethealth] = useState([]);
    const [getkitchen, setKitchen] = useState([]);
    const [getLaptop, setLaptop] = useState([]);
    const [getMobile, setMobile] = useState([]);
    const [getRefrigerator, setRefrigerator] = useState([]);
    const [getTablet, setTablet] = useState([]);
    const [getTelevison, setTelevison] = useState([]);
    const [getTravel, setTravel] = useState([]);
    const [getWashingMachine, setWashingMachine] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [orderHistory, setOrderHistory] = useState([]);
    const [totalCartItems, setTotalCartItems] = useState(0);



    const totalCartItemsHandler = (data) => {
        setTotalCartItems(data);
    }

    const searchTermHandler = (data) => {
        setSearchTerm(data);
    }

    const onTokenHandler = (data) => {
        setToken(data);
        localStorage.setItem('token', data);
    };
    const onNameHandler = (data) => {
        setName(data);
        localStorage.setItem('name', data);
    };

    const audioDatahandler = (data) => {
        setAudio(data); // Update audio state directly
    };

    const acDataHandler = (data) => {
        setAc(data);
    };

    const healthDatahandler = (data) => {
        sethealth(data);
    };

    const kitchenDataHandler = (data) => {
        setKitchen(data);
    };

    const laptopDatahandler = (data) => {
        setLaptop(data);
    };

    const mobileDataHandler = (data) => {
        setMobile(data);
    };

    const refrigeratorDatahandler = (data) => {
        setRefrigerator(data);
    };

    const tabletDataHandler = (data) => {
        setTablet(data);
    };

    const televisonDatahandler = (data) => {
        setTelevison(data);
    };

    const travelDataHandler = (data) => {
        setTravel(data);
    };
    const washingMachineDatahandler = (data) => {
        setWashingMachine(data);
    };


    const object = {
        getName,
        getToken,
        onTokenHandler,
        onNameHandler,

        getAc,
        acDataHandler,

        audio,
        audioDatahandler,

        gethealth,
        healthDatahandler,

        getkitchen,
        kitchenDataHandler,

        getLaptop,
        laptopDatahandler,

        getMobile,
        mobileDataHandler,

        getRefrigerator,
        refrigeratorDatahandler,

        getTablet,
        tabletDataHandler,

        getTelevison,
        televisonDatahandler,

        getTravel,
        travelDataHandler,

        getWashingMachine,
        washingMachineDatahandler,

        searchTerm,
        searchTermHandler,

        totalCartItems,
        totalCartItemsHandler

    };

    return (
        <DataContext.Provider value={object}>
            {children}
        </DataContext.Provider>
    );
};

export function useData() {
    return useContext(DataContext);
}