import React from 'react';
import { LoadButton } from './Button.styled';

export class Button extends React.Component {
  state = {};

  render() {
    return <LoadButton type="button"> Load More</LoadButton>;
  }
}
