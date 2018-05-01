import React from 'react';
import styled from 'styled-components';
import * as mx from '../assets/styles/mixins';
import {vr} from '../assets/styles/variables';
import Ripple from './Ripple';

export const Icon = styled.i`
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
`

export const Button = styled.button`
  color: ${p => p.color};
  background: none;
  transition: transform 25ms;
  padding: ${vr.spacing1};
  align-self: center;

  &:active {
    transform: scale(0.95);
  }
`

export const TextButton = styled(Button)`
  position: relative;

  &:after {
    content: "";
    height: 1px;
    width: 0;
    background: ${p => p.color};
    display: block;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    transition: width 125ms;
  }

  &:active {
    &:after {
      width: 100%;
    }
  }
`
TextButton.defaultProps = {color: 'white'}

const CircleButton = styled(Button)`
  ${mx.circle('40px')}
  padding: 0;
  display: flex;
  position: relative;
  overflow: hidden;

  i {
    margin: auto;
  }
`

const IconButton = ({ children, color, ...props }) => {
  return (
    <Ripple color={color} center>
      <CircleButton color={color} {...props}>
        <Icon>{children}</Icon>
      </CircleButton>
    </Ripple>
  )
}

export const CorrectButton = p => (
  <IconButton color={vr.green} {...p}>check</IconButton>
)

export const WrongButton = p => (
  <IconButton color={vr.orange} {...p}>close</IconButton>
)

export const PlayButton = styled(Button)`
  ${mx.circle('100px')}
  border: 5px solid ${p => p.color};
  border-radius: 50%;

  &:active {
    box-shadow: 0 0 30px ${p => p.color};
  }
`
PlayButton.defaultProps = {color: vr.lightBlue}
