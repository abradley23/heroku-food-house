import "./SearchForm.css";
import React, { useState } from 'react';

const SearchForm = ({ setSearch, initialPlaceholder }) => {
 const [query, setQuery] = useState(initialPlaceholder);

 // this method triggers when we change the input on line 18
 const onChange = event => setQuery(event.target.value);

 // this method triggers when we submit the form.
 const onSubmit = (event) => {
   event.preventDefault();
   setSearch(query);
 }

 return (
   <form className="form-inline d-flex justify-content-center md-form form-sm active-cyan-2 mt-2" onSubmit={onSubmit}>
     <input className="form-control form-control-sm mr-3 w-75" type="text" value={query} onChange={onChange} placeholder="Search"
    aria-label="Search"/>
   </form>
 );
};

export default SearchForm;
