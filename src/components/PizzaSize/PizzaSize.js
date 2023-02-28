import './PizzaSize.css';

export default function PizzaSize({Size, ImgLink}) {
    return (
        <>
            <div className="Pizza-size-card">


                <img src={ImgLink} className="ImgSize" alt="logo" />
                <span className='Pizza-size-text'>{Size}</span>



            </div>
        </>
    );
}