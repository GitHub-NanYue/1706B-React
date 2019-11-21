import React, { Component } from 'react';
import RouterView from '../router/routerView'
import Footer from '../component/Footer'
import './main.css'
class Main extends Component {
    render() { 
        return <div className='Main'>
            <div className="main-Top">
                头部
            </div>
            <div className="main-main">
                <RouterView routes={this.props.routes}></RouterView>
            </div>
            <Footer />
        </div>
    }
}
 
export default Main;

