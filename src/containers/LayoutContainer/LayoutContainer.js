import React,{useState} from 'react';
import Routes from '../../router/Routes';
import './LayoutContainer.scss';
import LayoutFooterComponent from './components/LayoutFooterComponent/LayoutFooterComponent';
import LayoutNavBarComponent from './components/LayoutNavBarComponent/LayoutNavBarComponent';



function LayoutContainer(props){
const [isLoading,setIsLoading]=useState(false);

return (
    <div className={"site-custom"}>
        <LayoutNavBarComponent></LayoutNavBarComponent>       
        <div className={"site-custom-content"}>
         
            <Routes />
            
        </div>
        <LayoutFooterComponent></LayoutFooterComponent>
    </div>
	);
}

export default LayoutContainer;