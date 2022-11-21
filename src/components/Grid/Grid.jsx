import React from "react";
import PropTypes from "prop-types";

function Grid(props) {
  const { col, gap, mdCol, smCol, children } = props;

  const style = {
    gap: gap ? `${gap}px` : "0px",
  };

  const colCls = col ? `grid-col-${col}` : "";
  const mdColCls = mdCol ? `grid-col-md-${mdCol}` : "";
  const smColCls = smCol ? `grid-col-sm-${smCol}` : "";

  return (
    <div className={`grid ${colCls} ${mdColCls} ${smColCls}`} style={style}>
      {children}
    </div>
  );
}

Grid.propTypes = {
  col: PropTypes.number.isRequired,
  mdCol: PropTypes.number,
  smCol: PropTypes.number,
  gap: PropTypes.number,
};

export default Grid;
