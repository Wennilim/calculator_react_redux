import { LOAD_ANS, LOAD_CLEAR, LOAD_BACKSPACE, LOAD_BUTTONS } from "./Calculator.actionType";

export const loadButtons = (num) => {
    return{
        type:LOAD_BUTTONS,
        payload:num
    }
}

export const loadAns = (num) => {
    return{
        type:LOAD_ANS,
        payload:num
    }
}

export const loadClear = (num) => {
    return{
        type:LOAD_CLEAR,
        payload:num
    }
}

export const loadBackspace = (num) => {
    return{
        type:LOAD_BACKSPACE,
        payload:num
    }
}

