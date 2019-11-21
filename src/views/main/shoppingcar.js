import React, { Component } from 'react';
import {connect} from 'react-redux'
import './home.css'
class Shopping extends Component {
    changeChecked(id){
        this.props.changeChecked(id)
    }
    checkAll(e){
        this.props.checkAll(e.target.checked)
    }
    changeClick(id,type){
        let index = this.props.cart.findIndex(item=>item.id==id)
        let {num} = this.props.cart[index]
        if(num == 1 && type == '-'){
            let res = window.confirm('确定要删除吗？')
            if(res){
                this.props.changeClick({id,type})
            }
        }else{
                this.props.changeClick({id,type})
            }
    }
    render() { 
        let {cart} = this.props
        return <div>
            <header>
                <p>刘于 13683599888</p>
                <p>送至：北京八维教育软工学院 网站</p>
            </header>
            <div>
                <div><input type="checkbox"checked={cart.every(item=>item.checked)} onChange={(e)=>this.checkAll(e)}/>多点超市</div>
                {cart.map((item,index)=>{
                    return <div key={index} className="Cart-Main">
                        <input type="checkbox" checked={item.checked} onChange={()=>this.changeChecked(item.id)}/>
                        <div>
                            <p>{item.name}</p>
                            <p>${item.money}</p>
                        </div>
                        <div className="Btns">
                            <button onClick={()=>{this.changeClick(item.id,'-')}}>－</button>
                                <span>{item.num}</span>
                            <button onClick={()=>{this.changeClick(item.id,'+')}}>＋</button>
                        </div>
                    </div>
                })}
            </div>
        </div>
    }
}

let mapStateToProps = state=>{
    return{
        cart:state.cart
    }
}

let mapDispatchToProps = dispatch=>{
    return{
        changeChecked:payload=>{
            dispatch({
                type:'CHANGE_CHECKED',
                payload
            })
        },
        checkAll:payload=>{
            dispatch({
                type:'CHECKALL',
                payload
            })
        },
        changeClick:payload=>{
            dispatch({
                type:'CHANGE_CLICK',
                payload
            })
        }
    }
}

 
export default connect(mapStateToProps,mapDispatchToProps)(Shopping);