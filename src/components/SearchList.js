import React, { useState, useEffect } from 'react';
import SearchBar from '../pages/SearchBar';
import data from '../data/Data';
import '../styles/SearchList.css';

const SearchList = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [noMatches, setNoMatches] = useState(false);
    const [sortOrder, setSortOrder] = useState('');

    useEffect(() => {
        if (filteredData.length > 0) {
            // Apply the 'show' class to trigger the opacity transition
            const timer = setTimeout(() => {
                const items = document.querySelectorAll('.nft-item');
                items.forEach(item => {
                    item.classList.add('show');
                });
            }, 100); // Adjust the delay to match your desired transition timing

            return () => clearTimeout(timer);
        }
    }, [filteredData]);

    const handleSearch = (query) => {
        if (query.trim() === '') {
            setFilteredData([]); // Clear filtered data if query is empty
            setNoMatches(false); // Reset noMatches state
        } else {
            const searchRegex = new RegExp(`\\b${query.toLowerCase()}`);
            const filtered = data.filter(item =>
                searchRegex.test(item.title.toLowerCase())
            );
            setFilteredData(filtered);
            setNoMatches(filtered.length === 0); // Update noMatches state
        }
    };

    const handleSort = (order) => {
        setSortOrder(order);
        const sorted = [...filteredData].sort((a, b) => {
            const priceA = a.price;
            const priceB = b.price;

            if (order === 'ascending') {
                return priceA - priceB;
            } else if (order === 'descending') {
                return priceB - priceA;
            }
        });
        setFilteredData(sorted);
    };

    return (
        <div>
            {/* SearchBar component */}
            <SearchBar onSearch={handleSearch} onSort={handleSort} />
            <div className="nft-grid">
                {/* Display filtered and sorted data */}
                {noMatches ? (
                    <p>No matches found for your search.</p>
                ) : (
                    filteredData.map(item => (
                        <div key={item.img} className="nft-item">
                            <img src={item.img} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>{item.price}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default SearchList;