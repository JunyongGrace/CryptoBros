import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ size }) => {
    // Get and set the address search term
    const [searchParams,] = useSearchParams();

    return (
        <TextField
            fullWidth size={size} label='Address' name='q' defaultValue={searchParams.get('q')} variant='filled' type='search'
            InputProps={{
                endAdornment: (
                    <InputAdornment position='end'>
                        <SearchIcon />
                    </InputAdornment>
                )
            }}
        />
    );
}

export default SearchBar;