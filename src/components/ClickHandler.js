const ClickHandler = () => {
    const clickHandler = () => {
        console.log('Button click');
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default ClickHandler