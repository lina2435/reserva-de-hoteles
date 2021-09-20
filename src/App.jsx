import Header from "./Header/Header";
import "./App.css";
import Filters from "./Filters/Filters";
import { HotelList } from "./HotelList";
import { useState } from "react"
function App() {
    const [filterStartDate, setFilterStartDate] = useState();
    const [filterEndDate, setFilterEndDate] = useState();
    const [filterAllCountry, setFilterAllCountry] = useState();
    const [filterPrice, setFilterPrice] = useState();
    const [filterSize, setFilterSize] = useState();
    return <main>
        <Header
            filterStartDate={filterStartDate}
            filterEndDate={filterEndDate}
            filterAllCountry={filterAllCountry}
            filterPrice={filterPrice}
            filterSize={filterSize} />
        <Filters
            filterStartDate={filterStartDate}
            setFilterStartDate={setFilterStartDate}
            filterEndDate={filterEndDate}
            setFilterEndDate={setFilterEndDate}
            filterAllCountry={filterAllCountry}
            setFilterAllCountry={setFilterAllCountry}
            filterPrice={filterPrice}
            setFilterPrice={setFilterPrice}
            filterSize={filterSize}
            setFilterSize={setFilterSize}

        />
        <HotelList
            filterStartDate={filterStartDate}
            filterEndDate={filterEndDate}
            filterAllCountry={filterAllCountry}
            setFilterAllCountry={setFilterAllCountry}
            filterPrice={filterPrice}
            filterSize={filterSize} />
    </main>;
}


export default App;