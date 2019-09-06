import React from "react";

import "./styles/dropdown.scss";

const Dropdown = props => {
  const { title, options, active, toggleDropdown, itemClick } = props;

  return (
    <div className="dropdown-wrapper">
      <div className={`dropdown ${active ? "is-active" : ""}`}>
        <div className="dropdown-trigger">
          <button
            className="button"
            onClick={toggleDropdown}
            aria-haspopup="true"
            aria-controls="dropdown-menu"
          >
            <span>{title}</span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            {options.map((value, key) => {
              return (
                <button
                  key={key}
                  className="dropdown-item"
                  onClick={() => itemClick(value)}
                >
                  {value}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
