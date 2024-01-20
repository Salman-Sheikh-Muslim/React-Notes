//https://babeljs.io/repl //go to the following link to see JSX conversion to JS.

function Message(){
    //JSX (JavaScript XML) Syntax
    const name= 'Salman';
    if(name)
        return <h1>Hello {name}!</h1>; // Under the hood this (<h1>Hello World!</h1>;) get converted to JavaScript.
    return  <h1>Hello World!</h1>
    }


export default Message;//exporting this as a default object from this module