import React from "react";

interface IGridContainerProps {
  children?: React.ReactNode;
}

const GridContainer: React.FC<IGridContainerProps> = ({ children }) => (
  <div
    className={`grid mobile:grid-rows-auto mobile:grid-cols-1 laptop:grid-rows-2 laptop:grid-cols-4 gap-8 justify-items-center items-center p-8`}>
    {children}
  </div>
);

export default GridContainer;
