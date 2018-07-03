// @flow
import _ from 'lodash'
import React, {Component} from 'react'
import {vr} from '../assets/styles/variables';
import {NoteButton} from '../components/NoteButton'
import {BarButtonContainer, CorrectButton, WrongButton} from '../components/ui';
import {notes, type NoteName} from '../notes';

type Props = {
  root: NoteName,
  isSinging: boolean,
}

type State = {
  interval: NoteName,
}

export class Interval extends Component<Props, State> {
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
    const { root, isSinging} = this.props;
    const {interval} = this.state
    return (
      <BarButtonContainer>
        <NoteButton note={root} color={vr.lightBlue}>Root</NoteButton>
        <NoteButton note={interval} color={vr.purple}>{isSinging ? interval : '?'}</NoteButton>
        <CorrectButton onClick={this.markCorrect} />
        <WrongButton onClick={this.markCorrect} />
      </BarButtonContainer>
    );
  }
}

const notes = [
  'A',
  'A#',
  'B',
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
]

function getInterval(note1, note2) {
  const low
  const high
  if (note1 < note2) {
    low = note1
    high = note2
  }
  else {
    low = note2
    high = note1
  }

  const lowOctave = low.
}
