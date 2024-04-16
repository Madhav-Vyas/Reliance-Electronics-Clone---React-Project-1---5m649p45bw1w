import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import "../Providers/QR.jpg"

const BuynowPaymentPage = () => {
    const navigate = useNavigate();

    const [cod, setCod] = useState();
    const location = useLocation();

    const { price, pincode, firstname, lastname, houseNo, colony, landmark, city, state, mobile, landline } = location.state;


    // State to store selected payment method
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [qr, setQr] = useState(false);
    const [text, setText] = useState(false);
    const [getForm, setForm] = useState(false);
    const [error, setError] = useState("")
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

    useEffect(() => {
        payment()
    }, [selectedPayment])
    const payment = () => {
        if (selectedPayment === "paytm" || selectedPayment === "Google-pay") {
            setQr(true);
            setForm(false);
            setText(false);
            setCod(false)
        }

        else if (selectedPayment === "Credit-Card") {
            setForm(true);
            setQr(false);
            setText(false)
            setCod(false);
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

    const [cardNumber, setCardNumber] = useState(null);
    const [cardHolder, setCardHolder] = useState(null);
    const [expiryDate, setExpiryDate] = useState(null);
    const [cvv, setCvv] = useState(null);


    const handleSubmit = (event) => {
        event.preventDefault();

        if (!cardNumber || !cardHolder || !expiryDate || !cvv) {
            setError("* Fill all the Fields")
        }
        else if (cardNumber.length < 16 || cardNumber.length > 16) {
            setError("Enter a Valid Card Number");
        }
        else if (expiryDate.length < 4 || expiryDate.length > 4) {
            setError("Please Check and Re-enter Valid  Expiry Date ")
        }
        else if (cvv.length < 3 || cvv.length > 3) {
            setError("Enter Valid CVV");
        }

        else {
            console.log("Form submitted!");
            setForm(false)
            setText(true);
            navigate("/ordersuccessB", {
                state: {
                    price, pincode, firstname, lastname, houseNo, colony, landmark, city, state, mobile, landline
                }
            })
        }
    };
    const successhandler = () => {
        navigate("/ordersuccessB", {
            state: {
                price, pincode, firstname, lastname, houseNo, colony, landmark, city, state, mobile, landline
            }
        })
    }


    return (<>
        <div className='bg-white w-4/5 flex-col justify-center mx-auto'>
            <div className='text-xl m-6 font-bold'>Shipping Address</div>

            <span> <div className='card p-4 bg-slate-300 w-96 m-4'>
                <span> <input type="radio" checked /></span>
                <span className='text-lg font-bold'>{firstname} {lastname}</span>
                <p>{houseNo} , {colony} , {landmark}</p>
                <p>{city}-{pincode} , {state}</p>
                <p>Mobile: {mobile}</p>



            </div></span>


            <div className="max-w-lg ml-6 mt-24 mb-96">
                <div className="mb-4">
                    <div className='text-2xl'>Order Total : &#8377;{price}</div>
                </div>
                <div className="mb-4">
                    <p className="font-semibold mb-2">Select Payment Method:</p>
                    <div className='h-32'> <select
                        value={selectedPayment}
                        onChange={handlePaymentChange}
                        className="block w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="">Select Payment Method</option>
                        <option value="Credit-Card">Credit Card</option>
                        <option value="Google-pay">Google Pay</option>
                        <option value="paytm">Paytm</option>
                        <option value="COD">Cash on Delivery</option>
                        {/* Add more options for other payment methods if needed */}
                    </select></div>



                </div>
                {/* <button onClick={paymentHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-12">
                Make Payemt
            </button> */}
                {cod && <><button onClick={successhandler} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-12">
                    Proceed
                </button>
                    {/* <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-2 rounded" onClick={continueShopping}>Continue Shopping</button> */}
                </>}

                {/* ..........................................................For GooglePay and Paytm..................................................................................................... */}
                {qr && <> <img className='w-40 h-auto' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/google-payment-qr-code-template-design-f00259ea89eb7cc0f6cc20bd8967a639_screen.jpg?ts=1702881345"></img>
                    <div className='text-sm text-green-600 mt-1'>Scan It To Make Payment </div>
                    <button onClick={successhandler} className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out  text-sm">paid</button>
                    <div className='text-xs text-red-500'>*Click here if payment is made Sucessful</div>


                </>}
                {/* ..........................................................For CreditCard Payments..................................................................................................... */}
                {getForm &&
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white rounded-lg overflow-hidden p-6 space-y-6 shadow-lg">
                        {error && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                <strong className="font-bold">Error:</strong>
                                <span className="block sm:inline">{error}</span>
                            </div>
                        )}
                        <div className="mb-4">
                            <label htmlFor="cardNumber" className="block text-gray-700 font-bold mb-2">Card Number</label>
                            <input
                                type="number"
                                id="cardNumber"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                placeholder="Enter card number"
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                minLength={16}  // Minimum 16-digit card number
                                maxLength={16}  // Maximum 16-digit card number
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="cardHolder" className="block text-gray-700 font-bold mb-2">Card Holder</label>
                            <input
                                type="text"
                                id="cardHolder"
                                value={cardHolder}
                                onChange={(e) => setCardHolder(e.target.value)}
                                placeholder="Enter card holder name"
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="mb-4">
                                <label htmlFor="expiryDate" className="block text-gray-700 font-bold mb-2">Expiry Date</label>
                                <input
                                    type="number"
                                    id="expiryDate"
                                    value={expiryDate}
                                    onChange={(e) => setExpiryDate(e.target.value)}
                                    placeholder="MM/YY"
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    minLength={4}  // Minimum length of 4 characters
                                    maxLength={4}  // Maximum length of 4 characters
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="cvv" className="block text-gray-700 font-bold mb-2">CVV</label>
                                <input
                                    type="number"
                                    id="cvv"
                                    value={cvv}
                                    onChange={(e) => setCvv(e.target.value)}
                                    placeholder="CVV"
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    minLength={4}  // Minimum 3-digit CVV
                                    maxlength={4}  // Maximum 3-digit CVV
                                />
                            </div>
                        </div>
                        <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                    </form>
                }
                {/* {text && <>
                    <div className='text-green-600 w-full text-nowrap mb-2'>Order Placed Sucessfully and will be deliverd to you in 3-4 business days✅</div>

                </>} */}

                {/* {order && <> */}
                {/* <div className='text-green-600'>Order Placed Sucessfully and will be deliverd to you in 3-4 business days✅</div> */}

                {/* </> */}

            </div>

        </div>

    </>
    )
}

export default BuynowPaymentPage