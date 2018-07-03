// @flow
import React, {Component} from 'react';
import styled from 'styled-components';
import {vr} from './assets/styles/variables';
import {Interval} from './components/Interval';

type State = {
  isSinging: boolean
}

export class App extends Component<{}, State> {
  state = { isSinging: false }

  toggleMode = () => this.setState(prevState => ({ isSinging: !prevState.isSinging }))
  
  render() {
    const {isSinging} = this.state
    return (
      <Container>
        <Interval root="2G" isSinging={isSinging} />
        <SingGuessToggle onClick={this.toggleMode}>
          {isSinging ? 'Sing' : 'Guess'}
        </SingGuessToggle>
      </Container>
    );
  }
}

const SingGuessToggle = styled.button`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  padding: ${vr.spacing2} 0;
  background: none;

  &:active {
    transform: scale(0.85)
  }
`

const Container = styled.div`
  position: relative;
  height: 100%;
`
