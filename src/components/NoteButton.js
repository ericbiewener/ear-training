// @flow
import React, { Component, type Node } from 'react';
import {noteMap, type NoteName} from '../notes';
import {BarButton} from './ui';

type Props = {
  note: NoteName,
  children: Node,
}

export class NoteButton extends Component<Props> {
  isPlaying = false
  sound: HTMLAudioElement
  
  constructor(props: Props) {
    super(props);
    this.initAudio(props.note)
  }

  componentDidMount() {
    document.addEventListener('touchend', this.stop)
  }

  componentWillUnmount() {
    document.removeEventListener('touchend', this.stop)
  }
  
  componentWillReceiveProps({note}: Props) {
    if (note !== this.props.note) this.initAudio(note)
  }

  initAudio(note: NoteName) {
    this.sound = new window.Audio(noteMap[note])
    this.sound.addEventListener('ended', () => this.isPlaying = false)
  }

  play = () => {
    this.isPlaying = true
    this.sound.currentTime = 0
    this.sound.volume = 1
    this.sound.play()
  }
  
  stop = () => {
    this.isPlaying = false
    
    const interval = setInterval(() => {
      if (this.isPlaying) { // If we start playing it again before it finishes fading out
        clearInterval(interval)
      } else if (!this.sound.volume) {
        this.sound.pause()
        clearInterval(interval)
      } else {
        // Because of weird floating point issues, decreasing by 0.01 isn't precise and will overshoot 0
        this.sound.volume = Math.max(0, this.sound.volume - 0.01)
      }
    }, 0.1)
  }
  
  render() {
    return (
      <BarButton
        {...this.props}
        onTouchStart={this.play}
        onTouchEnd={this.stop}
      />
    )
  }
}
