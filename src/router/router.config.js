import React from 'react';

//一级路由
import Main from '../views/main'
import Detail from '../views/Detail/detail'

// 二级路由
import Home from '../views/main/home'
import ShoppingCar from '../views/main/shoppingcar'

export default {
    routes:[{
        path:'/',
        redirect:'/main/home'
    },{
        path:'/detail',
        component:Detail
    },{
        path:'/main',
        component:Main,
        children:[{
            path:'/main/home',
            component:Home,
        },{
            path:'/main/classFiy',
            component:()=><p>分类</p>,
        },{
            path:'/main/vip',
            component:()=><p>Vip</p>,
        },{
            path:'/main/shopping',
            component:ShoppingCar,
        },{
            path:'/main/my',
            component:()=><p>我的</p>,
        }]
    }]
}