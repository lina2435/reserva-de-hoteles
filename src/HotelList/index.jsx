import { hotelsData } from "../data";
import { HotelListItem } from "../HotelListItem";
import "./style.css";

export const HotelList = ({
    filterStartDate,
    filterEndDate,
    filterSize,
    filterPrice,
    filterAllCountry
}) => {
    const hotels = hotelsData.filter((hotel) => {
        if (!filterPrice) {
            return true;
        }
        return hotel.price === filterPrice
    }).filter((hotel) => {
        if (!filterAllCountry) {
            return true;
        }
        return hotel.country === filterAllCountry
    }).filter((hotel) => {
        if (!filterSize) {
            return true;
        }
        if (filterSize === 'Pequeño' && hotel.rooms <= 10) {
            return true;
        }
        if (filterSize === 'Mediano' && hotel.rooms > 10 && hotel.rooms <= 20) {
            return true;
        }

        if (filterSize === 'Grande' && hotel.rooms <= 20) {
            return true
        }
        return false
    }).filter((hotel) => {
        return true
    }
    );
    if (hotels.length === 0) {
        return <p className="none-hotels">Sin resultados</p>
    }
    return (
        <div className="hotel-list">
            {hotels.map((hotel, i) => {
                return <HotelListItem title={hotel.name} description={hotel.description} city={hotel.city} country={hotel.country} rooms={hotel.rooms} price={hotel.price} image={hotel.photo} key={i} />;
            })}
        </div>
    );
};
