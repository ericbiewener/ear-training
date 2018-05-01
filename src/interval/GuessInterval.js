// @flow
import _ from 'lodash'
import React, {Component} from 'react'
import styled from 'styled-components';
import {NoteButton} from '../components/NoteButton'
import {CorrectButton, WrongButton} from '../components/ui';
import {notes, type NoteName} from '../notes';

type Props = {
  root: NoteName,
}

type State = {
  interval: NoteName,
}

export class GuessInterval extends Component<Props, State> {
  octave: NoteName[]
  
  constructor(props: Props) {
    super(props)
    this.initOctave(props.root)
    this.state = {interval: _.sample(this.octave)}
  }

  componentWillReceiveProps({root}: NoteName) {
    if (root === this.props.root) return
    this.initOctave(root)
    this.setState({ interval: _.sample(this.octave)})
  }

  initOctave(root: NoteName) {
    const start = notes.indexOf(root) + 1
    this.octave = notes.slice(start, start + 12)
  }

  markCorrect = () => {
    this.setState({ interval: _.sample(this.octave)})
  }

  render() {
    return (
      <ButtonWrapper>
        <NoteButton note={this.props.root}>Root</NoteButton>
        <NoteButton note={this.state.interval}>?</NoteButton>
        <CorrectButton onClick={this.markCorrect} />
        <WrongButton onClick={this.markCorrect} />
      </ButtonWrapper>
    );
  }
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
