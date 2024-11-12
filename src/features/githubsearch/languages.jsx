import axios from 'axios';
import { useState } from 'react';

function Languageslist(props) {
    const [languages, setLanguages] = useState([]);
    const [error, setError] = useState(null);

    axios.get("https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json")
    .then( response => setLanguages(response.data) )
    .catch( error => setError(error))

    if (error) {
        return (
            <div>Refresh Page</div>
        );
    }

    return (
        <select name="gitsearch" className='dark:bg-theme-orange text-center'
        value={props.value}
        onChange={props.onChange}
        >
            {languages.map((language, index) => (
                <option key={index} value={language.title}>{language.title}</option>
            ))}
        </select>
    );
}

export default Languageslist;