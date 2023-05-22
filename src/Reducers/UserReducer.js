const INITIAL_STATE = {
    token: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    defaultGuestNumber: "",
    allergy: ""
}

function UserReducer(state = INITIAL_STATE, action){

    switch(action.type){
        case 'SET_USER': {
            return {
                ...state,
                token: action.payload.token,
                firstname: action.payload.firstname,
                lastname: action.payload.lastname,
                email: action.payload.email,
                phone: action.payload.phone,
                defaultGuestNumber: action.payload.defaultGuestNumber,
                allergy: action.payload.allergy,
                roles: action.payload.roles
            }
        }
        case 'REMOVE_USER': {
            return {
                ...state,
                token: "",
                firstname: "",
                lastname: "",
                email: "",
                phone: "",
                defaultGuestNumber: "",
                allergy: "",
                roles: ""
            }
        }
    }

    return state;
}

export default UserReducer;
