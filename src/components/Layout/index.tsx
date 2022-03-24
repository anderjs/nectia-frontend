import React from "react";

import Styles from './styles';

const Layout: React.FC = (props) => {
  return (
    <Styles.Container>
      {props.children}
    </Styles.Container>
  )
};

export default Layout;
