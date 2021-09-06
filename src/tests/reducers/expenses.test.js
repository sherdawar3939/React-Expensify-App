import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should remove expense by id', ()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id:expenses[1].id
    }
    const result = expensesReducer(expenses, action);
    expect(result).toEqual([expenses[0], expenses[2]]);
});

test('should set up add expense object', ()=>{
    const expense = {
        id:'1',
        description:'sher',
        amount:123,
        note:'hi sher',
        createdAt:123
    }
    const action = {
        type:'ADD_EXPENSE',
        expense   
    }
    const result = expensesReducer(expenses, action);
    expect(result).toEqual([...expenses, expense])
})

test('should set edit expense object', ()=>{
    const amount=2525;
    const action = {
        type:'EDIT_EXPENSE',
        id:expenses[0].id,
        updates: {
            amount
        }
    }
    const result = expensesReducer(expenses, action);
    expect(result[0].amount).toEqual(amount)
})

test('should not edit expense object if id not found', ()=>{
    const amount=2525;
    const action = {
        type:'EDIT_EXPENSE',
        id:'-1',
        updates: {
            amount
        }
    }
    const result = expensesReducer(expenses, action);
    expect(result).toEqual(expenses)
})