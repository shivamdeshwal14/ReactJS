Two types of exports

export default Header---export only one
import Header from "../" 
component at a time
<!-- names exports -->
export const a="hello"
import {a} from "../"



# React hooks
normal JS utility function written by facebook Developers have its on specific usecase

2 main hooks
useState()-- generate state variable
useEffect

 it is a  array distructuring
 const arr=useState(resList);
const[listofRestro,setListofRestro]=arr;
const listofRestro=arr[0];
const setListOfRestro=arr[1]

whenever the state variale updates or state is changes
react rerenders its components

UseEffect hook-



optional chaining
json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info

Shimmer UI-Loading fake UI before 
actual data fetched and actual UI loaded

<!-- condtional Rendering -->

rendering based on condition  example-Shimmer UI



const [btnName,setBtnName]=useState("Logout");

we can change const variable using useState?
how?
when we update value react update this value and call the header function
again
render component again and treat btnName as new variable


whenever the state variable updates react triggers a reconcilation cycle
or rerender the whole component



use effect-calls everytime when the component renders
but when we pass dependenci array it changes the behaviour of 
useeffect
useEffect  called whenever the value of dependicy array-
withour array-every time component rerenders
WITH EMPTY ARRAY []=useEffect called once when the component renders intialy


 useEffect(()=>{
        console.log("UseEffect Called");
    },[btnName])

    btnName is working as dependency here it will change every time 
    btn Name changed



some rules for state variables or hoooks
always declare on the top of functional component

declare inside function 
dont create hookes inside conditional statements or loop
dont create inside function


React-router-dom-npm js library
open different pages on diff URLS

RouterProvider-provide the routing config
createBrowserRouter-create the routing 


SERVER SIDE ROUTING- MAKE A NETWORK CALL FETCH DATA
render it on ui refresh whole page

Client Side routing
not making any network call-all components are already loaded in the client side
SPAC-Single page application via client side routing

React implents client side routing

