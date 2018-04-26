import G2 from './assets/audio/2G.mp3'
import G2sh from './assets/audio/2Gsh.mp3'
import A3 from './assets/audio/3A.mp3'
import A3sh from './assets/audio/3Ash.mp3'
import B3 from './assets/audio/3B.mp3'
import C3 from './assets/audio/3C.mp3'
import C3sh from './assets/audio/3Csh.mp3'
import D3 from './assets/audio/3D.mp3'
import D3sh from './assets/audio/3Dsh.mp3'
import E3 from './assets/audio/3E.mp3'
import F3 from './assets/audio/3F.mp3'
import F3sh from './assets/audio/3Fsh.mp3'
import G3 from './assets/audio/3G.mp3'

console.log(F3sh, D3sh)

export type NoteName = 
  | '2G'
  | '2G#'
  | '3A'
  | '3A#'
  | '3B'
  | '3C'
  | '3C#'
  | '3D'
  | '3D#'
  | '3E'
  | '3F'
  | '3F#'
  | '3G'

export const noteMap: { [NoteName]: string } = {
  '2G': G2,
  '2G#': G2sh,
  '3A': A3,
  '3A#': A3sh,
  '3B': B3,
  '3C': C3,
  '3C#': C3sh,
  '3D': D3,
  '3D#': D3sh,
  '3E': E3,
  '3F': F3,
  '3F#': F3sh,
  '3G': G3,
}

export const notes: NoteName[] = Object.keys(noteMap).sort()
