import React,{useState} from 'react';
import LayoutFooterComponent from './components/LayoutFooterComponent/LayoutFooterComponent';
import LayoutNavBarComponent from './components/LayoutNavBarComponent/LayoutNavBarComponent';


function LayoutContainer(){
const [isLoading,setIsLoading]=useState(false);

return (
    <div className={"container"}>
        <LayoutNavBarComponent></LayoutNavBarComponent>
        <div className="container is-flex custom-content-place is-text-green">
            here content place
            {this.props.children}
        </div>
        <LayoutFooterComponent></LayoutFooterComponent>
    </div>
	);
}

export default LayoutContainer;