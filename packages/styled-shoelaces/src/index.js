import {
  col, container, flex, row,
} from 'shoelaces';
import styled from 'styled-components';

const render = (func) => styled.div`${func}`;

export const Col = render(col);
export const Container = render(container);
export const Flex = render(flex);
export const Row = render(row);

export default {
  Container, Row, Col, Flex,
};
