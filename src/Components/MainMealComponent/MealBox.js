import React from "react";
import "./MealBox.css"
import MealItem from "./MealItem";
const MealBox = props =>{

    const MealData=[
        {
            name_of_meal:"Pizza",
            desc_of_meal:"Never as Before",
            price_of_meal:"Rs. 120"
        },
        {
            name_of_meal:"Spring Rolls",
            desc_of_meal:"Eat The Crisp",
            price_of_meal:"Rs. 50"
        },
        {
            name_of_meal:"Burger",
            desc_of_meal:"Just loving it",
            price_of_meal:"Rs.60"
        },
        {
            name_of_meal:"Sandwich",
            desc_of_meal:"Fresh light meal",
            price_of_meal:"Rs. 30"
        }
    ];

    function ValueAddedNow(item){
        props.onChangeBox(item)
    }

    function makeAllData(item){
        return <><MealItem data={item} onValAdded={ValueAddedNow}/><br /><hr className="makeHorizontol" /><br /></>
    }

    

    const showData=MealData.map(makeAllData)

    return (
        <div className="meal-box" >
            {showData}
        </div>
    )
}

export default MealBox;