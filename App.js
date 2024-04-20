const heading= React.createElement("h1",{id:"heading"},"Hello from React");
const root=ReactDOM.createRoot(document.getElementById("root"));



const parent=React.createElement(
"div",
{id:"parent"},
[
    React.createElement(
        "div",
        {id:"child1"},[    
    React.createElement("h1",{id:"heading1"},"i amheading1"),
    React.createElement("h1",{id:"heading2"},"i amheading2")    
    ]
    ),
    React.createElement(
        "div",
        {id:"child2"},[    
    React.createElement("h1",{id:"heading3"},"i amheading3"),
    React.createElement("h1",{id:"heading3"},"i amheading4")    
    ]
    )


] 

);
root.render(parent);
console.log(parent);
