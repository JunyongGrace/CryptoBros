import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, FormControl, Select, MenuItem } from '@mui/material';
import '../components/styles/SearchBar.css';


const SearchBar = ({ onSearch, onSort }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('');

    // Handle input change for search query
    const handleInputChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        onSearch(query);
    };

    // Handle change in sorting order
    const handleSortChange = (event) => {
        const order = event.target.value;
        setSortOrder(order);
        onSort(order);
    };

    return (
        <div className="search-bar">
            <div className="search-bar-input">
                {/* Search input */}
                <TextField
                    fullWidth
                    label="Search by Title"
                    variant="outlined"
                    value={searchQuery}
                    onChange={handleInputChange}
                    InputProps={{
                        endAdornment: (
                            <SearchIcon />
                        )
                    }}
                />
            </div>
            <div className="search-bar-filter">
                {/* Sort dropdown */}
                <FormControl>

                    <Select value={sortOrder} onChange={handleSortChange}>
                        <MenuItem value="ascending">Price - Ascending</MenuItem>
                        <MenuItem value="descending">Price - Descending</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    );
};

export default SearchBar;
