import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

class IndexPage extends React.Component{
  render(){
    console.log(this.props)
    return(
      <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div>
        <button onClick={()=>this.props.ClickBtn('+')}>+</button>
        <span>{this.props.num}</span>
        <button onClick={()=>this.props.ClickBtn('-')}>-</button>
      </div>
    </div>
    )
  }
}

IndexPage.propTypes = {
  num:Number
};
IndexPage.preventDefault={
  num:1000
}
const mapstateToProps =state=> {
  return{
    num:state.num.num
  }
}
const mapDispatchToProps = dispatch=>{
  return{
    ClickBtn:type=>dispatch({
      type:'num/ClickBtn',
      Nums:{type}
    })
  }
}

export default connect(mapstateToProps,mapDispatchToProps)(IndexPage);
