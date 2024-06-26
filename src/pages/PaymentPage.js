import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useData } from '../Providers/AllcategoryData';
import { toast } from 'react-toastify';
const PaymentPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    //cartOrders is a variable which contains all the orders which are placed and we map this variable on orederHistory page and cartOrderHistoryHandler is a function which adds new orders on list of past orders placed
    const { cartOrders, cartOrderHistoryHandler, datahandler, data } = useData();

    //this is data recived from checkoutpage
    const { totalPrice, pincode, firstname, lastname, houseNo, colony, landmark, city, state, mobile, landline } = location.state;
    console.log(data);
    // State to store selected payment method
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [qr, setQr] = useState(false);
    const [text, setText] = useState(false);
    const [getForm, setForm] = useState(false);
    const [error, setError] = useState("");
    const [cod, setCod] = useState(false);
    // Function to handle dropdown change
    const handlePaymentChange = (event) => {
        setSelectedPayment(event.target.value);
    };
    const [order, setOrder] = useState(false);
    const paymentHandler = () => {
        setOrder(true);
    }
    const continueShopping = () => {
        navigate("/");
    }
    const onEdit = () => {
        navigate("/chekoutpageb")
    }

    const clearCartHandler = async () => {
        console.log("function is called");
        try {

            const response = await axios.delete("https://academics.newtonschool.co/api/v1/ecommerce/cart/", {

                headers: {

                    projectId: "5m649p45bw1w",

                    Authorization: `Bearer ${getToken}`,

                    'Content-Type': 'application/json',

                }

            });

            console.log(response);

        } catch (err) {

            console.error("Error clearing cart:", err);

        }

    }

    //when we change mode of payment this function is called
    useEffect(() => {
        payment()
    }, [selectedPayment])

    //this function adds the new cart orders to the cartOrders Array
    const onPlacedHandler = () => {

        cartOrderHistoryHandler(data);
    }
    console.log(cartOrders);
    const payment = () => {
        if (selectedPayment === "paytm" || selectedPayment === "Google-pay") {
            setQr(true);
            setForm(false);
            setText(false);
            setCod(false);
        }

        else if (selectedPayment === "Credit-Card") {
            setForm(true);
            setQr(false);
            setText(false);
            setCod(false)
        }
        else if (selectedPayment === "COD") {
            setForm(false);
            setQr(false);
            setCod(true);
            setText(false);
        }

        else {
            setForm(false);
            setQr(false);
            setCod(false);
            setText(false);
        }

    }


    const paidHandler = () => {
        setQr(false);
        setText(true);
        setForm(false)
    }

    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [month, setMonth] = useState()
    const [year, setYear] = useState()

    var date = new Date(expiryDate);

    // Get the timestamp (number of milliseconds since January 1, 1970)

    var timestamp = date.getTime();
    //this function is called when payment method is credit-card along with onPlaceHandler function is called to add new orders
    const handleSubmit = (event) => {
        event.preventDefault();
        onPlacedHandler();

        if (!cardNumber || !cardHolder || !month || !year || !cvv) {
            toast.error("* Fill all the Fields")
        }
        else if (cardNumber.length < 16 || cardNumber.length > 16) {
            toast.error("Enter a Valid Card Number , It Should be of 16 digits");
        }

        else if (month > 12 || month < 1) {
            toast.error("Please Check and Re-enter Valid  Expiry Date ")
        }

        else if (year < 2024) {
            toast.error("Your Card is Expired")
        }
        else if (year == 2024 && month < 6) {
            toast.error("Your Card is Expired")
        }

        else if (timestamp < Date.now()) {
            toast.error("Please Check and Re-enter Valid  Expiry Date ")
        }
        else if (cvv.length < 3 || cvv.length > 3) {
            toast.error("Enter Valid CVV");
        }
        else {
            console.log("Form submitted!");
            setForm(false)
            setText(true);

            toast.success("Order Placed Successfully")
            navigate("/ordersuccess", {
                state: {
                    totalPrice, pincode, firstname, lastname, houseNo, colony, landmark, city, state, mobile, landline
                }
            })

        }

    };
    //this function is called when payment method is COD along with onPlaceHandler function is called to add new orders
    const successhandler = async () => {
        onPlacedHandler();
        await clearCartHandler();
        navigate("/ordersuccess", {
            state: {
                totalPrice, pincode, firstname, lastname, houseNo, colony, landmark, city, state, mobile, landline
            }
        })


    }

    return (<>
        <div className='bg-white w-4/5 ml-4  md:w-4/5 flex flex-col md:flex-row justify-around md:mx-auto md:gap-20 mt-8 mb-8'>


            <span>
                <div className='text-xl m-6 font-bold'>Shipping Address <i className="fa-solid fa-truck" style={{ color: "blue" }}></i></div>
                <div className='card p-4 bg-slate-300 w-64 md:w-96 m-4'>

                    <span><input type="radio" checked /></span>
                    <span className='text-md  md:text-lg font-bold'>{firstname} {lastname}</span>
                    <p>{houseNo}, {colony}, {landmark}</p>
                    <p>{city}-{pincode}, {state}</p>
                    <p>Mobile: {mobile}</p>
                </div>
            </span>

            <div className="max-w-lg mx-6  mt-8 mb-40">
                <div className="mb-4">
                    <div className='text-2xl'>Order Total: &#8377;{totalPrice}</div>
                </div>
                <div className="mb-4">
                    <p className="font-semibold mb-2">Select Payment Method:</p>
                    <div className="h-20 md:32">
                        <select
                            value={selectedPayment}
                            onChange={handlePaymentChange}
                            className="block w-64 md:w-full p-2 border border-gray-300 rounded"
                        >
                            <option value="">Select Payment Method</option>
                            <option value="Credit-Card">Credit Card</option>
                            {/* <option value="Google-pay">Google Pay</option>
                            <option value="paytm">Paytm</option> */}
                            <option value="COD">Cash on Delivery</option>
                        </select>
                    </div>
                </div>
                {cod && (
                    <button onClick={successhandler} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-12">
                        Proceed
                    </button>
                )}

                {/* {qr && (
                    <>
                        <img className='w-40 h-auto' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/google-payment-qr-code-template-design-f00259ea89eb7cc0f6cc20bd8967a639_screen.jpg?ts=1702881345" alt="Google Pay QR Code"></img>
                        <div className='text-sm text-green-600 mt-1'>Scan It To Make Payment</div>
                        <button onClick={successhandler} className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out text-sm">paid</button>
                        <div className='text-xs text-red-500'>*Click here if payment is made Successful</div>
                    </>
                )} */}

                {getForm && (
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white rounded-lg overflow-hidden p-6 space-y-6 shadow-lg">
                        {error && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                <strong className="font-bold">Error:</strong>
                                <span className="block sm:inline">{error}</span>
                            </div>
                        )}
                        <div className="mb-4">
                            <label htmlFor="cardNumber" className="block text-gray-700 font-bold mb-2">Card Number</label>
                            <input type="text" id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} placeholder="Enter card number" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="cardHolder" className="block text-gray-700 font-bold mb-2">Card Holder</label>
                            <input type="text" id="cardHolder" value={cardHolder} onChange={(e) => setCardHolder(e.target.value)} placeholder="Enter card holder name" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>




                        <div className="grid grid-cols-2 gap-4">
                            <div className="mb-4">
                                <label htmlFor="expiryDate" className="block text-gray-700 font-bold mb-2">Expiry Date</label>


                                {/* <input type="date" id="expiryDate" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} placeholder="MMYY" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" /> */}


                                <div className='border flex '>
                                    <div><input className="appearance-none  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" onChange={(e) => setMonth(e.target.value)} value={month} placeholder='MM' min={1} max={12} /></div>

                                    <div className='md:text-2xl'>/</div>

                                    <div><input className="appearance-none  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" onChange={(e) => setYear(e.target.value)} value={year} placeholder='YYYY' /></div>
                                </div>
                            </div>








                            <div className="mb-4">
                                <label htmlFor="cvv" className="block text-gray-700 font-bold mb-2">CVV</label>
                                <input type="text" id="cvv" value={cvv} onChange={(e) => setCvv(e.target.value)} placeholder="CVV" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                        </div>
                        <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                    </form>
                )}
            </div>
        </div>
    </>

    )
};

export default PaymentPage;
