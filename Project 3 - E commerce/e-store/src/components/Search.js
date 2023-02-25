import React from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {

    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = React.useState('');

    const handleChange = (evt) => {
        setSearchTerm(evt.target.value);
    }
    React.useEffect(() => {
        
        const delay = setTimeout(() => {
            navigate('/search/?s=' + searchTerm)
        }, 500);

        // when the component is unMounted(ex: browser tab is closed), timeout wont be run in background
        return ()=> clearTimeout(delay); 

    }, [searchTerm])

    return (
        <div id='search'>
            <label forhtml='search'>Search</label>
            <input type='text' name='search' onChange={handleChange} />
        </div>
    )
}

export default Search;