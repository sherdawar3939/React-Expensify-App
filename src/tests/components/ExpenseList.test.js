import React from 'react';
import { shallow  } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import toJson from 'enzyme-to-json';
import expenses from '../fixtures/expenses';

test('should render expense list expenses', ()=>{
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(toJson(wrapper)).toMatchSnapshot()
})


test('should render expense list with empty array', ()=>{
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(toJson(wrapper)).toMatchSnapshot()
})