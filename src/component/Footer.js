import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import './index.css'

class Footer extends React.Component {
    state = {  }
    render() { 
        return <footer className="main-buttom">
            <Link to="/main/home">首页</Link>
            <Link to="/main/classfiy">分类</Link>
            <Link to="/main/vip">Vip</Link>
            <Link to="/main/shopping">购物车</Link><span className="num">{this.props.num}</span>
            <Link to="/main/my">我的</Link>
        </footer>
    }
}

const mapStateToProps = state=>{
    return {
        num:state.cart.reduce((total,item)=>total+=item.num,0)
    }
}

 
export default connect(mapStateToProps)(Footer);