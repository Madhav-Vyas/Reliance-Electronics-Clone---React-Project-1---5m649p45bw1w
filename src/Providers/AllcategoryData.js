import React, { useState, createContext, useContext } from 'react';

//created the context, from this data context our App.js component is being wrapped in index.js page
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [getToken, setToken] = useState(localStorage.getItem('token'));
    const [getName, setName] = useState(localStorage.getItem('name'));

    // const [getAc, setAc] = useState([]);
    // const [audio, setAudio] = useState([]);
    // const [gethealth, sethealth] = useState([]);
    // const [getkitchen, setKitchen] = useState([]);
    // const [getLaptop, setLaptop] = useState([]);
    // const [getMobile, setMobile] = useState([]);
    // const [getRefrigerator, setRefrigerator] = useState([]);
    // const [getTablet, setTablet] = useState([]);
    // const [getTelevison, setTelevison] = useState([]);
    // const [getTravel, setTravel] = useState([]);
    // const [getWashingMachine, setWashingMachine] = useState([]);


    const [searchTerm, setSearchTerm] = useState("");

    const [totalCartItems, setTotalCartItems] = useState(0);
    const [orderHistory, setOrderHistory] = useState([]);
    const [cartOrders, setCartOrders] = useState([]);

    const [buyNowTotalPriceAfterQty, setBuyNowTotalpriceAfterQty] = useState(0);

    //Items shown on cart page are stored in this "data" state;
    const [data, setData] = useState([]);

    const buyQtySetter = (data) => {
        setBuyNowTotalpriceAfterQty(data);
    }

    const totalCartItemsHandler = (data) => {
        setTotalCartItems(data);
    }
    //items on cart page are set by this setter
    const datahandler = (data) => {
        setData(data)
    }

    //Function for setting search term in context
    const searchTermHandler = (data) => {
        setSearchTerm(data);
    }

    //Function for settng token and adding it it to local-Storage
    const onTokenHandler = (data) => {
        setToken(data);
        localStorage.setItem('token', data);
    };

    //Function for settng name and adding it to local-Storage
    const onNameHandler = (data) => {
        setName(data);
        localStorage.setItem('name', data);
    };

    // const audioDatahandler = (data) => {
    //     setAudio(data); // Update audio state directly
    // };

    // const acDataHandler = (data) => {
    //     setAc(data);
    // };

    // const healthDatahandler = (data) => {
    //     sethealth(data);
    // };

    // const kitchenDataHandler = (data) => {
    //     setKitchen(data);
    // };

    // const laptopDatahandler = (data) => {
    //     setLaptop(data);
    // };

    // const mobileDataHandler = (data) => {
    //     setMobile(data);
    // };

    // const refrigeratorDatahandler = (data) => {
    //     setRefrigerator(data);
    // };

    // const tabletDataHandler = (data) => {
    //     setTablet(data);
    // };

    // const televisonDatahandler = (data) => {
    //     setTelevison(data);
    // };

    // const travelDataHandler = (data) => {
    //     setTravel(data);
    // };
    // const washingMachineDatahandler = (data) => {
    //     setWashingMachine(data);
    // };

    //when order is placed dirctly witout adding it to cart , then orderHistory is being set using this function
    const orderHistoryHandler = (data) => {
        setOrderHistory(prev => [...prev, data]);
        localStorage.setItem('orderHistory', JSON.stringify([...orderHistory, data]));
    }

    //when order is placed  adding it to cart , then cartOrders is being set using this function
    const cartOrderHistoryHandler = (data) => {
        setCartOrders(prev => [...prev, data]);
        localStorage.setItem('cartOrderHistory', JSON.stringify([...cartOrders, data]));
    }

    //this is object in which all function and varibles are added ,so that it can be added in provider and can be used useing useContext
    const object = {
        getName,
        getToken,
        onTokenHandler,
        onNameHandler,

        cartOrders,
        cartOrderHistoryHandler,

        orderHistory,
        orderHistoryHandler,

        // getAc,
        // acDataHandler,

        // audio,
        // audioDatahandler,

        // gethealth,
        // healthDatahandler,

        // getkitchen,
        // kitchenDataHandler,

        // getLaptop,
        // laptopDatahandler,

        // getMobile,
        // mobileDataHandler,

        // getRefrigerator,
        // refrigeratorDatahandler,

        // getTablet,
        // tabletDataHandler,

        // getTelevison,
        // televisonDatahandler,

        // getTravel,
        // travelDataHandler,

        // getWashingMachine,
        // washingMachineDatahandler,

        searchTerm,
        searchTermHandler,

        totalCartItems,
        totalCartItemsHandler,

        buyNowTotalPriceAfterQty,
        buyQtySetter,

        data,
        datahandler

    };

    return (
        <DataContext.Provider value={object}>
            {children}
        </DataContext.Provider>
    );
};
//useData is the function which will be used to called, so that we can all data which are used in context API
export function useData() {
    return useContext(DataContext);
}