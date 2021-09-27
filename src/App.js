const Dog=(props)=>{
    return React.createElement("div",{},[
        React.createElement('h3',{},props.nam),
        React.createElement('h3',{},props.weight)
    ])
}
const App=()=>{
    var arr=[1,2,3,4];
    return React.createElement(
        "div",{},
        [
            React.createElement("h3",{},"DOG WEBSITE"),
            ...[arr].map(item => React.createElement("h1",{},item)),//... spread operator creates one element of array.
            React.createElement(Dog,{
               nam:"Bull",
               weight:"40.50"
            },) ,
            React.createElement(Dog,{
                nam:"Bul",
                weight:"40.5"
             },) 
        ]
    )
};
ReactDOM.render(
    React.createElement(
        App
    ),document.getElementById("root")
);