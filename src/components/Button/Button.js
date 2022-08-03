import { filterProps } from 'framer-motion';
import React from 'react';
import * as Btn from './Button.style';

const Button = (props) => {
  return <Btn.Button onClick={filterProps.onClick}></Btn.Button>;
};
export default Button;
