import hotelImageBed from '../assets/images/bed.png'
import hotelImagePin from '../assets/images/pin.png'
import './style.css';

export const HotelListItem = ({ title, description, city, country, rooms, price, image }) => {
    return <article className="hotel-item__article">
        <img className="hotel-item__img-class" src={image} alt="img-sainte-jeanne" />
        <div className="hotel-item__description">
            <div className="hotel-item__info ">
                <h2 className="hotel-item__title ">{title}</h2>
                <p className="hotel-item__parrafo">{description}</p>
            </div>
            <div className="hotel-item__location ">
                <div className="hotel-item__icon ">
                    <span>
                        <img className="hotel-item__icon-img" src={hotelImagePin} alt="iconimg" />
                    </span>
                    <p className="hotel-item__sub-title ">{city}, {country}</p>
                </div>
                <div className="hotel-item__icon">
                    <span>
                        <img className="hotel-item__icon-img" src={hotelImageBed} alt="icon-img" />
                    </span>
                    <p className="hotel-item__sub-title ">{rooms} Habitaciones</p>
                </div>
                <div className="hotel-item__price">
                    <span className="price-icon">{''.padStart(price, '$')} </span>
                </div>
            </div>
        </div>
        <button className="hotel-item__button">
            Reservar
        </button>
    </article>
}