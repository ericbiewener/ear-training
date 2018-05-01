// @flow
import React, {Component, type Node} from 'react';
import styled, { keyframes } from 'styled-components'

const rippleAnimation = keyframes`
  100% {
    transform: scale(2);
    opacity: 0;
  }
`

const RippleItem = styled.div`
  position: absolute;
  left: ${p => `${p.position.x}px`};
  top: ${p => `${p.position.y}px`};
  width: ${p => `${p.size}px`};
  height: ${p => `${p.size}px`};
  background: ${p => p.color || 'black'};
  border-radius: 50%;
  user-select: none;
  pointer-events: none;
  transform: scale(0);
  opacity: .7;
  animation: ${rippleAnimation} .7s linear;
`;

const RippleContainer = styled.div`
  position: relative;
  align-self: center;
  overflow: hidden;
`

type Props = {
  color: string,
  center?: boolean,
  children: Node,
}

type State = { ripples: RippleItem[] }

class Ripple extends Component<Props, State> {
  counter = 0
  rippleContainer: HTMLElement
  state = {
    ripples: []
  };

  createRipple = (e: SyntheticMouseEvent<*>) => {
    const { width, height, left, top } = this.rippleContainer.getBoundingClientRect();

    const size = Math.max(width, height);

    const position = this.props.center
      ? { x: 0, y: 0 }
      : { x: e.clientX - left - (size / 2), y: e.clientY - top - (size / 2)}
    
    // Material UI adds a rendered ripple to the array rather than rendering it in the main `render()` method,
    // so copy their approach
    this.setState(prevState => ({ ripples: [...prevState.ripples, (
      <RippleItem
        position={position}
        size={size}
        key={this.counter++}
        color={this.props.color}
        onAnimationEnd={this.removeRipple}
      />
    )]}))
  }

  removeRipple = () => this.setState(prevState => {
    return { ripples: prevState.ripples.slice(1)}
  })
  
  render() {
    const { color, children, ...props } = this.props;

    return (
      <RippleContainer
        {...props}
        innerRef={el => this.rippleContainer = el}
        onMouseDown={this.createRipple}
      >
        {children}
        {this.state.ripples}
      </RippleContainer>
    )
  }
}

export default Ripple
