import moment from 'moment';
import { setStartDate,setEndDate,setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';

test('should set up startDate action object', ()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate:moment(0)
    })
})

test('should set up endDate action object', ()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    })
})

test('action object for text filter', ()=>{
    const action = setTextFilter( 'sher');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: 'sher'
    })
})

    test('action object sortBy date', ()=>{
        const action = sortByDate();
        expect(action).toEqual({
            type:'SORT_BY_DATE',
        })
    })

    test('action object sortBy amount', ()=>{
        const action = sortByAmount();
        expect(action).toEqual({
            type:'SORT_BY_AMOUNT',
        })
    })
