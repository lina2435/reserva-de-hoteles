import './Header.css'
function Header({
    filterStartDate,
    filterEndDate,
    filterSize,
    filterPrice,
    filterAllCountry }) {
    return <header>
        <div className="header">
            <h1>Hoteles</h1>
            <h2> En cualquier fecha:Del {filterStartDate} al {filterEndDate}</h2>
            <h2> En cualquier pais:{filterAllCountry}</h2>
            <h2>De cualquier precio:{''.padStart(filterPrice, '$')}.</h2>
            <h2>De cualquier tamaño: {filterSize}</h2>
        </div>
    </header>
}

export default Header;