import React from 'react'

const Recipe = ({recipe}) => {
    return (
        <div className="recipe-item">
            <a href={recipe.url}><img src={recipe.image} alt={recipe.label} /></a>
            <h2 className="item-title">{recipe.label}</h2>            
            <p className="item-calories"><span className="calories-label">Calories: </span>{recipe.calories.toFixed(1)}</p>
            {recipe.mealType ? <p className="item-calories"><span className="calories-label">Meal Type: </span>{recipe.mealType}</p> : '' }
            <p className="item-calories"><span className="calories-label">Health Labels: </span>{recipe.healthLabels}</p>
            
            <div className="recipe-body">
                {recipe.text}
            </div>
            <div className="ingredients-list">
            <p className="item-calories"><span className="ingredients-label">ingredients: </span></p>
                <ul>
                {recipe.ingredientLines.map(ingredient=>(
                   <li><a key={ingredient}>{ingredient}</a></li>
               ))}
               </ul>
            </div>
            <p className="item-calories"><a className="calories-source" target="_blank" href={recipe.url}>Source: {recipe.source}</a></p>
        </div>
    )
}
export default Recipe;