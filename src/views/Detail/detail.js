import React, { Component } from 'react';
import {connect} from 'react-redux'

class Detail extends Component {
    
    render() { 
        let {detail} = this.props
        console.log(detail)
        return <div>
            <div>{detail.items.name}</div>
        </div>
    }
}
 
let mapStateToProps = state=>{
    return{
        detail:state.detail
    }
}

let mapDispatchToProps = dispatch=>{
    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Detail);