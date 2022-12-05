import React from "react";

function Sidebar(props) {
  const { material, colors, setCompareArr, compareArr } = props;

  const handleFilter = (e) => {
    if (compareArr.length == 0) {
      setCompareArr([{ type: e[0], id: e[1] }]);
    } else {
      let newArr = compareArr.filter((item) => item.type !== e[0]);
      setCompareArr([...newArr, { type: e[0], id: e[1] }]);
    }
  };

  const handleReset = (e) => {
    if (compareArr.length > 0) {
      let newArr = compareArr.filter((item) => item.type !== e[0]);
      setCompareArr([...newArr]);
    }
  };

  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-list-tag">Materials</li>
        <li
          className="sidebar-list-heading"
          onClick={() => {
            handleReset(["materialId"]);
          }}
        >
          All
        </li>
        {material?.map((item, index) => {
          return (
            <li
              className="sidebar-list-elements"
              onClick={() => {
                handleFilter(["materialId", item.id]);
              }}
              key={index}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
      <ul className="sidebar-list">
        <li className="sidebar-list-elements">Colors</li>
        <li
          className="sidebar-list-heading"
          onClick={() => {
            handleReset(["colorId"]);
          }}
        >
          All
        </li>
        {colors.map((item, index) => {
          return (
            <li
              className="sidebar-list-elements"
              onClick={() => {
                handleFilter(["colorId", item.id]);
              }}
              key={index}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
