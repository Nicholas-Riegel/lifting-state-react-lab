const BurgerStack = ({stack, removeFromBurger}) => {
    return <ul>
        {stack.map((ingredient, i)=>(
            <li key={i} style={{backgroundColor: ingredient.color}}>
                {ingredient.name}
                <button onClick={()=>removeFromBurger(ingredient)}>x</button>
            </li>
        ))}
        </ul>;
  };
  
  export default BurgerStack;
  