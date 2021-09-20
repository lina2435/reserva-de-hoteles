import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import CalendarToday from '@material-ui/icons/CalendarToday';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import './Filters.css'

function Filters({
    filterStartDate,
    setFilterStartDate,
    filterEndDate,
    setFilterEndDate,
    filterSize,
    setFilterSize,
    filterPrice,
    setFilterPrice,
    filterAllCountry,
    setFilterAllCountry,
}) {
    return <form className="filters" action="">
        <Input type="date" value={filterStartDate} onChange={(ev) => setFilterStartDate(ev.target.value)} className="filters__input" placeholder="Cualquier fecha " />
        <Input type="date" value={filterEndDate} onChange={(ev) => setFilterEndDate(ev.target.value)} className="filters__input" placeholder="Cualquier fecha " />
        <Select native value={filterAllCountry} onChange={(ev) => setFilterAllCountry(ev.target.value)} className="filters__select">
            <option value="">Todos los paises</option>
            <option value="Argentina">Argentina</option>
            <option value="Brasil">Brasil</option>
            <option value="Chile">Chile</option>
            <option value="Uruguay">Uruguay</option>
        </Select>
        <Select value={filterPrice} onChange={(ev) => setFilterPrice(Number(ev.target.value))} native className="filters__select">
            <option value="">Todos los Precios</option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
        </Select>
        <Select value={filterSize} onChange={(ev) => setFilterSize(ev.target.value)} native className="filters__select">
            <option value="">Cualquier Tamaño</option>
            <option value="Pequeño">Pequeño</option>
            <option value="Mediano">Mediano</option>
            <option value="Grande">Grande</option>
        </Select>
        <Button className="btn-filter" variant="contained" color="primary" startIcon={<DeleteIcon />} onClick={() => {
            setFilterSize("");
            setFilterPrice("");
            setFilterStartDate("");
            setFilterEndDate("");
            setFilterAllCountry("");
        }} >
            Limpiar
        </Button>
    </form >
}

export default Filters;