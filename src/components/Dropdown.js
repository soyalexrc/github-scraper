import React from 'react';
import {IoMdArrowDropdown} from 'react-icons/io';
import '../styles/Dropdown.css';

const DropDown = ({toggleDropdown, sortType, sortTypes, changeRepoSort, active}) => {
  return (
    <div className='dropdown'>
      <button className={`${active ? 'dropdown__button--active' : 'dropdown__button'}`} onClick={() => toggleDropdown()}>
        <label>{sortType}</label>
        <IoMdArrowDropdown className={`${active ? 'svg--active' : ''}`} />
      </button>
      <ul className={`${active ? 'dropdown__list--active' : 'dropdown__list'}`}>
        {sortTypes.map((type, i) => (
          <li className="dropdown__list--item" key={i}>
            <button onClick={() => changeRepoSort(type)}>{type}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
