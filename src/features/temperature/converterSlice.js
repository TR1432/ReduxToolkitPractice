import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    value: 0,
    initialscale: "Celsius",
    finalscale: "Fahrenheit",
    msg:''
}

export const converterSlice = createSlice({
    name: "convert",
    initialState,
    reducers: {
        input: (state, action) => {
            state.value = action.payload
        },
        toCelcius: (state, action) => {
            if(action.payload == 0){
                state.initialscale = "Celsius"
            }else if(action.payload == 1){
                state.finalscale = "Celsius"
            }else{

            }
        },
        toFahrenheit: (state, action) => {
            if(action.payload == 0){
                state.initialscale = "Fahrenheit"
            }else if(action.payload == 1){
                state.finalscale = "Fahrenheit"
            }else{

            }
        },
        toKelvin: (state, action) => {
            if(action.payload == 0){
                state.initialscale = "Kelvin"
            }else if(action.payload == 1){
                state.finalscale = "Kelvin"
            }else{

            }
        },
        display: (state,action) => {
            state.msg = `${state.value} ${state.initialscale} is ${action.payload} ${state.finalscale}`
        }
    }
})

export const { input, toCelcius, toFahrenheit, toKelvin, display } = converterSlice.actions

export default converterSlice.reducer