import { WIDGET_URL } from "../utils/constansts";

export const Widget=(props)=>{
    const {widData}=props;
    
    
return(
<div >

<img className="widget-image" src={WIDGET_URL+widData.imageId}></img>
</div>);
}