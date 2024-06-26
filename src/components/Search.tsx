import React from 'react';
import MagnifyingGlassIcon from '../icons/MagnifyingGlassIcon';
interface SearchProps {
    placeholder?: string;
    onSearchChange?: (search: string) => void;
    onSubmit?: (search: string) => void;
    disabled?: boolean;
}
const Search: React.FC<SearchProps> = ({ onSearchChange, onSubmit, placeholder = 'Type to search ...', disabled = false }) => {
    const [searchValue, setSearchValue] = React.useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
        onSearchChange && onSearchChange(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit && onSubmit(searchValue);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-full py-0.5 flex items-center border border-mediumGray">
            <div className="text-mediumGray ml-2"><MagnifyingGlassIcon /></div>
            <input className="outline-none px-2 rounded-full w-full text-regular" value={searchValue} onChange={handleSearchChange} placeholder={placeholder} disabled={disabled} />
        </form>
    );
}
export default Search;