import DashBoard from './components/Dashboard'
import Layout from './components/Layout'
import Login from './components/Login'
import ListCustomer from './components/customer/ListUser'
import CreateCustomer from './components/customer/CreateUser'
import EditCustomer from './components/customer/EditUser'
import ListStaff from './components/staff/ListUser'
import CreateStaff from './components/staff/CreateUser'
import EditStaff from './components/staff/EditUser'
import ListDeposit from './components/deposit/ListDeposit'
import CreateDeposit from './components/deposit/CreateDeposit'
import EditDeposit from './components/deposit/EditDeposit'




const makeRoutes = (store) => {
    const routes = [
        {path: '/', name: 'home', component: Layout, beforeEnter: (to, from, next) => {
            if(store.state.user.login){
                next()
            } else next({path: '/login'})
        },children: [
            {path: 'dashboard', name: 'dashboard', component: DashBoard},
            {path: 'customer/list', name: 'listcustomer', component: ListCustomer},
            {path: 'customer/create', name: 'createcustomer', component: CreateCustomer},
            {path: 'customer/edit/:id', name: 'editcustomer', component: EditCustomer},
            {path: 'staff/list', name: 'liststaff', component: ListStaff},
            {path: 'staff/create', name: 'createstaff', component: CreateStaff},
            {path: 'staff/edit/:id', name: 'editstaff', component: EditStaff},
            {path: 'deposit/list', name: 'listdeposit', component: ListDeposit},
            {path: 'deposit/create', name: 'createdeposit', component: CreateDeposit},
            {path: 'deposit/edit/:id', name: 'editdeposit', component: EditDeposit},
        ]},
        {path: '/login', name: 'login', component: Login, beforeEnter: (to, from, next) => {
            if(!store.state.user.login){
                next()
            } else next({path: '/dashboard'})
        }}
    ]

    return routes
}

export default makeRoutes;