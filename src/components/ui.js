import React from 'react';
import styled from 'styled-components';
import {transparentize} from 'polished';
import {vr} from '../assets/styles/variables';
import RippleButton from './RippleButton';

// TODO: remove if not used, including material-icons package
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

export const BarButtonContainer = styled.div`
  display: flex;
  height: 100%;
`

export const BarButton = styled(RippleButton)`
  flex: 1 1 0;
  padding-bottom: ${vr.spacing2};
  background: linear-gradient(to top, ${p => transparentize(.5, p.color)} 0%, black 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`

export const CorrectButton = props => <BarButton color={vr.green} {...props} />
export const WrongButton = props => <BarButton color={vr.red} {...props} />

