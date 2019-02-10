/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
  col, container, flex, row,
} from 'shoelaces';

const render = (func) => (props) => (
  <div
    css={func(props)}
    {...props}
  />
);

export const Col = render(col);
export const Container = render(container);
export const Flex = render(flex);
export const Row = render(row);

export default {
  Container, Row, Col, Flex,
};
