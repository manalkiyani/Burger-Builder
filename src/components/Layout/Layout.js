import React,{Component} from 'react';

import Aux from '../../hoc/Auxilliary';
import classes from './Layout.module.css';
import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/sideDrawer';


class Layout extends Component 
{
    state={
        showSideDrawer:false
    }
    sideDrawerClosedHandler =()=>
    {
        this.setState({
            showSideDrawer:false
        })

    }
    toggleSideDrawerHandler=()=>
    {
        

        this.setState((prevState)=>{
          return  {showSideDrawer:!prevState.showSideDrawer}
        })
        
    }
    render()
    {
        return(
            <Aux>
            <Toolbar
           
            toggle={this.toggleSideDrawerHandler}
            />
           <SideDrawer 
                show={this.state.showSideDrawer}
                closed={this.sideDrawerClosedHandler}
           />
            <main className={classes.Content}>
                {this.props.children}
            </main>
            </Aux>
        );
    }
   
}
export default Layout;