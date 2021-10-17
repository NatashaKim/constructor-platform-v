import * as Tone from 'tone'
import { generateUniqId } from '../utilities'

const synthSettings = {
  volume: -25,
  detune: 0,
  envelope: {
    attack: 0.03,
    attackCurve: 'exponential',
    decay: 0.2,
    decayCurve: 'exponential',
    sustain: 0.2,
    release: 0.2,
    releaseCurve: 'exponential'
  },
  oscillator: {
    type: 'fatsine',
    modulationType: 'sine',
    // partialCount: 0,
    // partials: [],
    phase: 0,
    harmonicity: 6
  }
}

function membraneSynth() {
  return new Tone.MembraneSynth({
    pitchDecay: 0.05,
    octaves: 10,
    oscillator: {
      type: 'sine'
    },
    envelope: {
      attack: 0.001,
      decay: 0.4,
      sustain: 0.01,
      release: 1.4,
      attackCurve: 'exponential'
    }
  })
}

// const chorusSettings = {
//   wet: 0,
//   type: 'sine',
//   frequency: 1.5,
//   delayTime: 3.5,
//   depth: 0.7,
//   spread: 180
// }
//
// const freeverbSettings = {
//   wet: 0.55,
//   roomSize: 0.23,
//   dampening: 40
// }
//
// const pingPongDelaySettings = {
//   wet: 0,
//   delayTime: 0.25,
//   maxDelayTime: 1
// }
//
// const tremoloSettings = {
//   wet: 0,
//   frequency: 10,
//   type: 'sine',
//   depth: 0.5,
//   spread: 180
// }
//
// const vibratoSettings = {
//   wet: 0,
//   maxDelay: 0.005,
//   frequency: 5,
//   depth: 0.1,
//   type: 'sine'
// }
const distortionSettings = {
  wet: 0,
  distortion: 0,
  oversample: '4x'
}

const channelSettings = {
  volume: 1,
  pan: 0,
  mute: false,
  solo: false
}

// function instrument() {
const synthNode = new Tone.MembraneSynth(synthSettings)
const distortionNode = new Tone.Distortion(distortionSettings)
// const chorusNode = new Tone.Chorus(chorusSettings).start()
// const freeverbNode = new Tone.Freeverb(freeverbSettings)
// const pingPongDelayNode = new Tone.PingPongDelay(pingPongDelaySettings)
// const tremoloNode = new Tone.Tremolo(tremoloSettings)
// const vibratoNode = new Tone.Vibrato(vibratoSettings)
const channelNode = new Tone.Channel(channelSettings).toDestination()

synthNode.chain(
  distortionNode,
  // chorusNode,
  // freeverbNode,
  // pingPongDelayNode,
  // tremoloNode,
  // vibratoNode,
  channelNode
)

const instrument = [
  {
    id: generateUniqId(),
    name: 'Membrane Synth',
    type: 'ToneSynth',
    node: synthNode,
    settings: synthSettings
  },
  {
    id: generateUniqId(),
    name: 'Distortion',
    type: 'Distortion',
    node: distortionNode,
    settings: distortionSettings
  },
  // {
  //   id: generateUniqId(),
  //   name: 'Chorus',
  //   type: 'Chorus',
  //   node: chorusNode,
  //   settings: chorusSettings
  // },
  // {
  //   id: generateUniqId(),
  //   name: 'Freeverb',
  //   type: 'Freeverb',
  //   node: freeverbNode,
  //   settings: freeverbSettings
  // },
  // {
  //   id: generateUniqId(),
  //   name: 'Ping Pong Delay',
  //   type: 'PingPongDelay',
  //   node: pingPongDelayNode,
  //   settings: pingPongDelaySettings
  // },
  // {
  //   id: generateUniqId(),
  //   name: 'Tremolo',
  //   type: 'Tremolo',
  //   node: tremoloNode,
  //   settings: tremoloSettings
  // },
  // {
  //   id: generateUniqId(),
  //   name: 'Vibrato',
  //   type: 'Vibrato',
  //   node: vibratoNode,
  //   settings: vibratoSettings
  // },
  {
    id: generateUniqId(),
    name: 'Channel',
    type: 'Channel',
    node: channelNode,
    settings: channelSettings
  }
]

const v = 1

const part = new Tone.Part(
  function (time, note) {
    synthNode.triggerAttackRelease(
      note.noteName,
      note.duration,
      time,
      note.velocity
    )
  },
  [
    {
      time: '0:1:0',
      noteName: 'C3',
      duration: '16n',
      velocity: v
    },
    {
      time: '0:1:2',
      noteName: 'C3',
      duration: '16n',
      velocity: v
    },
    {
      time: '1:1:0',
      noteName: 'C3',
      duration: '16n',
      velocity: v
    },
    {
      time: '1:1:2',
      noteName: 'C3',
      duration: '16n',
      velocity: v
    },
    {
      time: '1:3:0',
      noteName: 'C3',
      duration: '16n',
      velocity: v
    },
    {
      time: '2:1:0',
      noteName: 'C3',
      duration: '16n',
      velocity: v
    },
    {
      time: '2:1:2',
      noteName: 'C3',
      duration: '16n',
      velocity: v
    },
    {
      time: '3:1:0',
      noteName: 'C3',
      duration: '16n',
      velocity: v
    },
    {
      time: '3:1:2',
      noteName: 'C3',
      duration: '16n',
      velocity: v
    },
    {
      time: '3:2:2',
      noteName: 'C3',
      duration: '16n',
      velocity: v
    }
  ]
)

part.loopEnd = '4m'
part.loop = true

export { instrument, part }
