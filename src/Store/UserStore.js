import axios from "axios";
import { makeObservable, observable, action } from "mobx";
import { useNavigate } from "react-router-dom";

class UserData {
    getData = {
        name: "",
        email: "",
        password: "",
        appType: "ecommerce"
    }
    error = '';

    constructor() {
        makeObservable(this, {
            getData: observable,
            error: observable,
            onChangeHandler: action,
            onSubmitHandler: action
        });
    }

    // Handle form field changes
    onChangeHandler = (e) => {
        this.getData = { ...this.getData, [e.target.name]: e.target.value };
    }
    //navigate = useNavigate()
    // Handle form submission
    onSubmitHandler = (navigate, setError, toast) => {
        this.error = null;

        if (!this.getData.name) {
            this.error = 'userName is mandatory';
            return;
        } else if (!this.getData.email) {
            this.error = 'email is mandatory';
            return;
        } else if (!this.getData.password) {
            this.error = 'password cannot be empty';
            return;
        }

        axios.post('https://academics.newtonschool.co/api/v1/user/signup', this.getData, {
            headers: {
                projectID: '5m649p45bw1w'
            }
        })
            .then((result) => {
                console.log(result);
                // navigate('/login');  // Navigation handled by passing function from component
                toast.success("Registered Successfully");  // Toast handled in component
            })
            .catch((error) => {
                console.log(error);
                this.error = "Internal server error, please try again later.";
                // setError(this.error);  // Setting error in the component
            });
    }
}

const userStore = new UserData();
export default userStore;
