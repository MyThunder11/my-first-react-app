const ChildComponent = (props) => {
    return ( 
        <div>
            <button onClick={ () => props.greetHandler('eva')}>Greet Parent</button>
        </div>
     );
}
 
export default ChildComponent;