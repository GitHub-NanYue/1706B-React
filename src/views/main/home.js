import React, { Component } from 'react';
import Request from '../../until/request';
import {connect} from 'react-redux';
import './home.css'

class Home extends Component {
    ClickBtn(e,item){
        this.props.ClickBtn(item)
    }
    detailBtn(id,items){
        this.props.history.push('/detail?id='+id,items)
        this.props.detailBtn({id,items})
    }
    render() { 
        let {list} = this.props
        console.log(list)
        return <div className='Home'>
            {
                list.map((item,index)=>{
                    return <div key={index} className="Home-main">
                        <img src={item.image} alt="" className="Home-img"  onClick={()=>this.detailBtn(item.id,item)} />
                        <p className="text">{item.name}</p>
                        <div className="NumBtn"><p>￥<span>{item.money}</span></p><div className="Btn" onClick={e=>{this.ClickBtn(e,item)}}>＋</div></div>
                    </div>
                })
            }
        </div>
    }
    componentDidMount(){
        this.props.DataList()
    }
}

let mapStateToProps = state =>{
    console.log(state)
    return {list:state.list}
}

let mapDispatchToProps = dispatch =>{
    return{
        DataList(){
            Request('/data/list').then(res=>{
                console.log(res)
                dispatch({type:'DATA_LIST',list:res})
            })
        },
        ClickBtn:payload=>{
            dispatch({
                type:'CART_LIST',
                payload
            })
        },
        detailBtn:payload=>{
            dispatch({
                type:'DETAIL_BTN',
                payload
            })
        }
          
    }
}

Home = connect(mapStateToProps,mapDispatchToProps)(Home)
export default Home;