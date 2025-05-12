
type State = {
    // id: string,
    name: string,
    phone_number: string,
    age: string,
    national_code: string,
    doctor: string,
    bime: string,
    day: string,
    time: string,
    services: string
}
type Action = 
{
    type: string,
    data?: {
        name: any;
        value: any;
    };
}
export const initialState:State = {
    // id: "",
    name: "",
    phone_number: "",
    age: "",
    national_code: "",
    doctor: "",
    bime: "",
    day: "",
    time: "",
    services: ""
}


export const stateReducer = (state:State , action:Action) =>{
    switch(action.type){
        case "state_change":
            return {...state , [action.data?.name] : action.data?.value}
        default: return state
    }
}