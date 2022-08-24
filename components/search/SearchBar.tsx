import React from "react";
import AdvancedSearch from './AdvancedSearch';
import { AiOutlineArrowDown as ArrowDown } from 'react-icons/ai';

const SearchBar: React.FC = () => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <div className="bg-slate-400">
      <div>
        <input type="text" placeholder="Search name or number.." className="border-2 border-slate-400" />
      </div>
      <button onClick={() => setToggle(!toggle)} >
        {toggle ? <AdvancedSearch /> : <div>Show Advanced Search <ArrowDown /></div>}
      </button>
    </div>
  );
}

export default SearchBar;