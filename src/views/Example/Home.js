import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Color from '../HOC/Color'
import logo from '../../assets/images/logoMixi.jpg'

class Home extends React.Component {
    componentDidMount(){
        // setTimeout(() =>{
        //     this.props.history.push('/todos')
        // },3000)
    }
    render() {
        console.log('>>> Check props', this.props)
        return (
            <>
                
            <div>
                Hello world from Hompage with HoangHandSome
            </div>

            <div>
                <img src={logo} />
            </div>
            </>
        );
    }
}

// export default withRouter(Home);
export default Color(Home);
