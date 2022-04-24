import "./MealItem.css"
const MealItem = props => {

    function ValueAddedToCart(event){
        props.onValAdded(event.target.name)
    }

    return <div className="meal-item">
        <div className="meal-about">
            <p className="meal-name">{props.data.name_of_meal}</p>
            <p className="meal-desc"><i>{props.data.desc_of_meal}</i></p>
            <p className="meal-price">{props.data.price_of_meal}</p>
        </div>

        <div className="meal-amount">
            <p className="meal-amount-p">Amount <input className="amount-value" type={"number"} value={"1"}></input></p>
            <div>
                <button className="meal-add-btn" onClick={ValueAddedToCart} name={props.data.name_of_meal}>+ Add</button>
            </div>
        </div>
    </div>
}

export default MealItem;