// @flow
import _ from 'lodash'
import React, {Component} from 'react'
import {Note} from '../components/Note'
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
      <div>
        <Note note={this.props.root}>Root</Note>
        <Note note={this.state.interval}>?</Note>
        <button onClick={this.markCorrect}>Correct</button>
      </div>
    );
  }
}
