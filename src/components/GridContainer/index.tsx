import React from "react";

interface IGridContainerProps {
  children?: React.ReactNode;
  columns?: number;
  rows?: number;
}

const GridContainer: React.FC<IGridContainerProps> = ({
  children,
  columns = 4,
  rows = 2,
}) => (
  <div
    className={`grid mobile:grid-rows-auto mobile:grid-cols-1 laptop:grid-rows-${rows} laptop:grid-cols-${columns} gap-8 justify-items-center items-center p-8`}>
    {children}
  </div>
);

export default GridContainer;
