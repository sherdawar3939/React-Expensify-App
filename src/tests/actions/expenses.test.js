import { editExpense, removeExpense, addExpense  } from "../../actions/expenses";

test('should set up expense remove action object', ()=>{
    const action = removeExpense({id:'123abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    });
});

test('should set up edit expense action object', ()=>{
    const action = editExpense('123abc', { note:'new value' });
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',
        updates:{
            note:'new value'
        }
    });
});

test('should set up add expense action object', ()=>{
    const expenseData = {
        description:"sher",
        note:"Hi Sher", 
        amount:12, 
        createdAt:1000
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id: expect.any(String)
        }
    });
});