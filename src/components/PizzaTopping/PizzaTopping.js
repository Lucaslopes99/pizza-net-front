import './PizzaTopping.css';

export default function PizzaTopping({ image, toppingName, toppingDescription }) {
    return (
        <div className="pizza-topping-card">
            <img
                src={image}
                alt={toppingName}
                className="pizza-topping-img"
            />
            <div className='pizza-topping-text'>
                <h3 className='pizza-topping-name'>{toppingName}</h3>
                <p className='pizza-topping-description'>{toppingDescription}</p>
            </div>
            <div className='add-button-rounded'>
                
                <span className='add-button-rounded-plus'>+</span>
            </div>
        </div>
    );
}