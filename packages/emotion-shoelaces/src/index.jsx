/** @jsx jsx */
import {
  col, container, flex, row,
} from 'shoelaces';
import { jsx } from '@emotion/core';

const render = (func) => (props) => (
  <div css={func(props)} {...props} />
);

export const Col = render(col);
export const Container = render(container);
export const Flex = render(flex);
export const Row = render(row);
export default {
  Container, Row, Col, Flex,
};
