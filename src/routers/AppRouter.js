import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import Header from '../components/HeaderPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseHelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = ()=> (
    <BrowserRouter>
    <div>
      <Header />
      <Switch>
       <Route path = "/" component = {ExpenseDashboardPage} exact={true}></Route>
       <Route path = "/create" component = {AddExpensePage}></Route>
       <Route path = "/edit" component = {EditExpensePage}></Route>
       <Route path = "/help" component = {ExpenseHelpPage}></Route>
       <Route  component = {NotFoundPage}></Route>
      </Switch>
    </div>
   </BrowserRouter>
)
 export default AppRouter