import React from "react";

// - Hooks
import useProducts from "src/hooks/useProducts";

const Products: React.FunctionComponent = () => {
  const { handleFetchProducts } = useProducts();

  React.useEffect(handleFetchProducts, [handleFetchProducts]);

  return (
    <React.Fragment>
      <div />
    </React.Fragment>
  );
}

export default Products;