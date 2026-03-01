import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { Shop } from './page/shop/shop';
import { Products } from './page/products/products';
import { Cart } from './page/cart/cart';
import { Login } from './page/login/login';
import { Contact } from './page/contact/contact';
import { About } from './page/about/about';
import { combineLatest } from 'rxjs';
import { Register } from './page/register/register';

export const routes: Routes = [
    {
        path: '',
        component:Home
    },
    {
        path:'shop',
        component:Shop
    },
    {
        path:'product',
        component:Products
    },
    {
        path:'cart',
        component:Cart

    },
    {
        path:'login',
        component:Login,
        
    },
    {
        path:'about',
        component:About
    },
    {
        path:'contact',
        component:Contact
    }
    ,
    {
        path:'register',
        component:Register
    }

];
