import { createStore,combineReducers } from "redux";
import { v4 as uuidv4 } from 'uuid'


//Add Expense
const addExpense = ({description='', note ='', amount = ''})=>({
    type:'ADD_EXPENSE',
    expense:{
        id:uuidv4(),
        description,
        note,
        amount
    }
})

//Remove Expense
const removeExpense = ({id}={})=>({
    type:'REMOVE_EXPENSE',
    id
}) 

//Edit expense
const editExpense = (id , updates)=> ({
    type:'EDIT_EXPENSE',
    id,
    updates
})

//Set text filter
const setTextFilter = (text = '') =>({
    type:'SET_TEXT_FILTER',
    text
})

//Sort by date
const sortByDate = ()=> ({
    type:'SORT_BY_DATE'
})

//sort by amount
const sortByAmount = ()=> ({
    type:'SORT_BY_AMOUNT'
})

//start date
const setStartDate = (date )=> ({
    type:'SET_START_DATE',
    date
    
})
//end date
const setEndDate = (date)=> ({
    type:'SET_END_DATE',
    date
})


//expenses reducer
const combineReducerDefaultState = []
const expensesReducer = (state = combineReducerDefaultState, action)=>{
   switch(action.type){
       case 'ADD_EXPENSE':
       return [
        ...state,
        action.expense
       ]
       case 'REMOVE_EXPENSE':
       return state.filter(({id})=>id !== action.id);
       case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
            })
       default:
        return state
   }
}


//filters reducer
const combineFiltersReducer = {
    text:'', 
    sortBy:'', 
    startDate:undefined, 
    endDate:undefined
}

//Filter Reducer
const filtersReducer = (state = combineFiltersReducer, action) => {
   switch(action.type){
    case 'SET_TEXT_FILTER':
       return {
           ...state,
           text:action.text
       }
    case 'SORT_BY_AMOUNT':
        return {
            ...state,
            sortBy:'amount'
        }
    case 'SORT_BY_DATE':
        return {
            ...state,
            sortBy:'date'
        }
    case 'SET_START_DATE':
        return {
            ...state,
            startDate:action.date
        }
        case 'SET_END_DATE':
        return {
            ...state,
            endDate:action.date
        }
       default:   
        return state
   }
}


//Create Store
const store = createStore(combineReducers({
         expenses:expensesReducer,
         filters:filtersReducer
}))

store.subscribe(()=>{
console.log(store.getState());
})

// const store1 = store.dispatch(addExpense({description:"Sher", note : "Rent", amount:200}));
// const store2 = store.dispatch(addExpense({description:"khalid", note : "coffee", amount:300}));
// store.dispatch(removeExpense({id:store1.expense.id}));
// store.dispatch(editExpense(store2.expense.id, {amount:600}));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(sortByDate());
// store.dispatch(sortByAmount());

store.dispatch(setStartDate(125))
store.dispatch(setStartDate())
store.dispatch(setEndDate(1250))


const demoState = {
    expenses:[{
        id:'394843948',
        description:'',
        note:'',
        amount:889,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
}