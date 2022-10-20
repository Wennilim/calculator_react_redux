import { LOAD_ANS, LOAD_CLEAR, LOAD_BACKSPACE, LOAD_BUTTONS } from "./Calculator.actionType";

export const CALCULATOR_KEY = 'calculatorStore'
let initialState ={
    num:'',
    ans:'',
}

export const calculatorReducer = (state = initialState, action) =>{
    let {type, payload} = action
    
     switch(type){
        case LOAD_BUTTONS:
            return{
                ...state,
                ...payload,
                number:state.number.concat(action.payload)
           
                
            }

            case LOAD_ANS:
                 try{
                   return {
                    ...state,
                    ...payload,
                    ans:eval(state.number).toString()
                   }

                }catch(err){
                    return {
                        ...state,
                        ...payload,
                        ans:' Syntax Error'
                    }
                }

               case LOAD_CLEAR:
                return{
                    ...state,
                    ...payload,
                    number:'',
                    ans:''
                }

                case LOAD_BACKSPACE:
                    return{
                        ...state,
                        ...payload,
                        number:(state.number).slice(0,-1),
                        ans:''
                    }

                default: return state
    }


}