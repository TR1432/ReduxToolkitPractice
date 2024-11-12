import { useSelector, useDispatch } from 'react-redux';
import { input, toCelcius, toFahrenheit, toKelvin, display } from './converterSlice';
import "./temp.css"

function Temperature() {
    const dispatch = useDispatch();
    const temp = useSelector((state) => state.temperature);

    const handleInput = (e) => {
        dispatch(input(e.target.value));
    };

    const handleClick = () => {
        let { initialscale: from, finalscale: to, value } = temp;
        let convertedValue;
        value = Number(value);
        if (from === "Celsius" && to === "Fahrenheit") {
            convertedValue = (value * 9/5) + 32;
        } else if (from === "Celsius" && to === "Kelvin") {
            convertedValue = value + 273.15;
        } else if (from === "Fahrenheit" && to === "Celsius") {
            convertedValue = (value - 32) * 5/9;
        } else if (from === "Fahrenheit" && to === "Kelvin") {
            convertedValue = ((value - 32) * 5/9) + 273.15;
        } else if (from === "Kelvin" && to === "Celsius") {
            convertedValue = value - 273.15;
        } else if (from === "Kelvin" && to === "Fahrenheit") {
            convertedValue = ((value - 273.15) * 9/5) + 32;
        } else {
            convertedValue = value;
        }
        convertedValue = Math.round(convertedValue * 100) / 100
        dispatch(display(convertedValue));
    };

    const handleChangeinitial = (e) => {
        const scale = e.target.value;
        if (scale === "Celsius") dispatch(toCelcius(0));
        else if (scale === "Fahrenheit") dispatch(toFahrenheit(0));
        else if (scale === "Kelvin") dispatch(toKelvin(0));
    }

    const handleChangefinal = (e) => {
        const scale = e.target.value;
        if (scale === "Celsius") dispatch(toCelcius(1));
        else if (scale === "Fahrenheit") dispatch(toFahrenheit(1));
        else if (scale === "Kelvin") dispatch(toKelvin(1));
    }

    return (
        <div className='col-span-1 rounded-lg  dark:bg-theme-yellow dark:text-theme-orange h-[200px] min-h-full p-2'>
            <div className='text-center font-bold text-lg tracking-wide mb-2'>Temperature Converter</div>
            <div className='text-center text-sm mb-2'>Enter the temperature, select units, and submit</div>
            <div className='grid grid-cols-3 gap-4 pe-10 ps-10'>
                <input className="col-span-1 rounded-md p-1 dark:bg-theme-ash"
                    type='number'
                    onInput={handleInput}
                    name="Temperature"
                    value={temp.value}
                />
                <select className="col-span-1 rounded-md p-1 cursor-pointer dark:bg-theme-ash"
                    name="initial Unit"
                    value={temp.initialscale}
                    onChange={handleChangeinitial}
                >
                    <option value="" disabled>Select initial unit</option>
                    <option value="Celsius">Celsius</option>
                    <option value="Fahrenheit">Fahrenheit</option>
                    <option value="Kelvin">Kelvin</option>
                </select>
                <select className="col-span-1 rounded-md p-1 cursor-pointer dark:bg-theme-ash"
                    name="final Unit"
                    value={temp.finalscale}
                    onChange={handleChangefinal}
                >
                    <option value="" disabled>Select final unit</option>
                    <option value="Celsius">Celsius</option>
                    <option value="Fahrenheit">Fahrenheit</option>
                    <option value="Kelvin">Kelvin</option>
                </select>
                <button onClick={handleClick} className="col-span-3 ms-20 me-20 dark:bg-theme-ash rounded-lg md:rounded-none active:scale-90 md:hover:rounded-lg duration-100">Convert</button>
            </div>
            <div className='col-span-3 text-center m-2 text-black'>{temp.msg}</div>
        </div>
    );
}

export default Temperature;