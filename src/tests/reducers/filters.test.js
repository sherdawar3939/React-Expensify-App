import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set up default text value', ()=>{
    const action = filtersReducer(undefined, {type:'@@INIT'});
    expect(action).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')

    });
});

test('should set up sort by date', ()=>{
    const currentState = {
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    }
    const action = {type:'SORT_BY_DATE'}
    const result = filtersReducer(currentState, action);
    expect(result.sortBy).toEqual('date')
})

test('should set text filter', ()=>{
     const text = 'my car';
     const action = {
         type:'SET_TEXT_FILTER',
         text
     }
     const state = filtersReducer(undefined, action);
     expect(state.text).toEqual(text)
})

test('should set start date', ()=>{
    const startDate = moment();
    const action = {
        type:'SET_START_DATE',
        startDate
    }
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate)
})

test('should set end date', ()=>{
    const endDate= moment();
    const action = {
        type:'SET_END_DATE',
        endDate
    }
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate)
})