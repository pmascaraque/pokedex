import React from "react";
import AdvancedSearch from './AdvancedSearch';

const Search: React.FC = () => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <div>
      Search

      <button onClick={() => setToggle(!toggle)} >
        {toggle ? <AdvancedSearch /> : "show advanced search"}
      </button>
    </div>
  );
}

export default Search;