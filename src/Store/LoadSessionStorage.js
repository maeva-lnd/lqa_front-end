import {useDispatch} from "react-redux";


const LoadSessionStorage = () => {

    const dispatch = useDispatch();

    dispatch ({
        type: "SET_USER",
        payload: {
            token: window.sessionStorage.getItem('token'),
            firstname: window.sessionStorage.getItem('firstname'),
            lastname: window.sessionStorage.getItem('lastname'),
            phone: window.sessionStorage.getItem('phone'),
            email: window.sessionStorage.getItem('email'),
            defaultGuestNumber: window.sessionStorage.getItem('defaultGuestNumber'),
            allergy: window.sessionStorage.getItem('allergy'),
        }
    })
}

export default LoadSessionStorage;