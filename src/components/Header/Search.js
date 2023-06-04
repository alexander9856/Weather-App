import { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate';
export const Search = () => {
    const [search, setSearch] = useState('');
    const handleOnChange = (searchValue) => {
        setSearch(searchValue)
    }
    return (
        <AsyncPaginate
            placeholder='Search for city'
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
        />
    )
}