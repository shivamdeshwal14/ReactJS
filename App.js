
import React from "react";
import ReactDOM from "react-dom/client"

// const heading =React.createElement(
//     "h1",{id:"heading"},"Namaste React"
// );

const root=ReactDOM.createRoot(document.getElementById("root"));

const tittle=()=>(
<h1>Namste React using JSX</h1>

);
const Heading=()=>(
    <div>
        <h1>Hello</h1>
         {tittle()}
    </div>
   
);

// root.render(jsxheading);
root.render(<Heading/>)