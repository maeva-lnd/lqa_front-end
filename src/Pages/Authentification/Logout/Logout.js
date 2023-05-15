import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";


const Logout = () => {

    const [state, setState] = useState(1)
    const dispatch = useDispatch();
    const nav = useNavigate();

    useEffect(() => {
        // Suppression des variables de session lors d'une déconnexion
        window.sessionStorage.removeItem("token");
        window.sessionStorage.removeItem("firstname");
        window.sessionStorage.removeItem("lastname");
        window.sessionStorage.removeItem("email");
        window.sessionStorage.removeItem("phone");
        window.sessionStorage.removeItem("defaultGuestNumber");
        window.sessionStorage.removeItem("allergy");

        dispatch({type:'REMOVE_USER'})

        setState(0)
        nav("/");

    }, [state]);




};

export default Logout;