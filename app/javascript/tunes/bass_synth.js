import * as Tone from 'tone'
import { generateUniqId } from '../utilities'

const synthSettings = {
  volume: -5,
  detune: 0,
  portamento: 0,
  envelope: {
    attack: 0.03,
    attackCurve: 'exponential',
    decay: 0.9,
    decayCurve: 'exponential',
    sustain: 0.0,
    release: 0.4,
    releaseCurve: 'exponential'
  },
  oscillator: {
    type: 'fmsine',
    modulationType: 'sine',
    // partialCount: 0,
    // partials: [],
    phase: 0,
    harmonicity: 0.5
  }
}

// const distortionSettings = {
//   wet: 0,
//   distortion: 0,
//   oversample: '4x'
// }

const feedbackDelaySettings = {
  wet: 0,
  delayTime: 0.8,
  maxDelay: 0.8
}

// const freeverbSettings = {
//   wet: 0.55,
//   roomSize: 0.23,
//   dampening: 40
// }

const jcReverbSettings = {
  wet: 0,
  roomSize: 0.5
}

// const pingPongDelaySettings = {
//   wet: 0,
//   delayTime: 0.25,
//   maxDelayTime: 1
// }
//
// const reverbSettings = {
//   wet: 0,
//   decay: 1.5,
//   preDelay: 0.01
// }

const channelSettings = {
  volume: -14,
  pan: 0,
  mute: false,
  solo: false
}

const synthNode = new Tone.Synth(synthSettings)
// const distortionNode = new Tone.Distortion(distortionSettings)
const feedbackDelayNode = new Tone.FeedbackDelay(feedbackDelaySettings)
// const freeverbNode = new Tone.Freeverb(freeverbSettings)
const jcReverbNode = new Tone.JCReverb(jcReverbSettings)
// const pingPongDelayNode = new Tone.PingPongDelay(pingPongDelaySettings)
// const reverbNode = new Tone.Reverb(reverbSettings)
const channelNode = new Tone.Channel(channelSettings).toDestination()
synthNode.chain(
  // distortionNode,
  feedbackDelayNode,
  // freeverbNode,
  jcReverbNode,
  // pingPongDelayNode,
  // reverbNode,
  channelNode
)

const instrument = [
  {
    id: generateUniqId(),
    name: 'Bass Synth',
    type: 'ToneSynth',
    node: synthNode,
    settings: synthSettings
  },
  // {
  //   id: generateUniqId(),
  //   name: 'Distortion',
  //   type: 'Distortion',
  //   node: distortionNode,
  //   settings: distortionSettings
  // },
  {
    id: generateUniqId(),
    name: 'Feedback Delay',
    type: 'FeedbackDelay',
    node: feedbackDelayNode,
    settings: feedbackDelaySettings
  },
  // {
  //   id: generateUniqId(),
  //   name: 'Freeverb',
  //   type: 'Freeverb',
  //   node: freeverbNode,
  //   settings: freeverbSettings
  // },
  {
    id: generateUniqId(),
    name: 'JC Reverb',
    type: 'JCReverb',
    node: jcReverbNode,
    settings: jcReverbSettings
  },
  // {
  //   id: generateUniqId(),
  //   name: 'Ping Pong Delay',
  //   type: 'PingPongDelay',
  //   node: pingPongDelayNode,
  //   settings: pingPongDelaySettings
  // },
  // {
  //   id: generateUniqId(),
  //   name: 'Reverb',
  //   type: 'Reverb',
  //   node: reverbNode,
  //   settings: reverbSettings
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
      time: '0:0:0',
      noteName: 'D2',
      duration: '8n',
      velocity: v
    },
    {
      time: '0:3:2',
      noteName: 'A2',
      duration: '16n',
      velocity: v
    },
    {
      time: '1:0:0',
      noteName: 'D2',
      duration: '8n',
      velocity: v
    },
    {
      time: '1:2:0',
      noteName: 'D2',
      duration: '8n',
      velocity: v
    },
    {
      time: '2:0:0',
      noteName: 'F#2',
      duration: '8n',
      velocity: v
    },
    {
      time: '2:3:2',
      noteName: 'C#3',
      duration: '16n',
      velocity: v
    },
    {
      time: '3:0:0',
      noteName: 'F#2',
      duration: '8n',
      velocity: v
    },
    {
      time: '3:2:0',
      noteName: 'F#2',
      duration: '8n',
      velocity: v
    },
    {
      time: '4:0:0',
      noteName: 'B1',
      duration: '16n',
      velocity: v
    },
    {
      time: '4:3:2',
      noteName: 'F#2',
      duration: '16n',
      velocity: v
    },
    {
      time: '5:0:0',
      noteName: 'B1',
      duration: '8n',
      velocity: v
    },
    {
      time: '5:2:0',
      noteName: 'B1',
      duration: '8n',
      velocity: v
    },
    {
      time: '6:0:0',
      noteName: 'G1',
      duration: '16n',
      velocity: v
    },
    {
      time: '6:0:2',
      noteName: 'G1',
      duration: '16n',
      velocity: v
    },
    {
      time: '6:1:2',
      noteName: 'G1',
      duration: '16n',
      velocity: v
    },
    {
      time: '6:2:0',
      noteName: 'G1',
      duration: '8n',
      velocity: v
    },
    {
      time: '6:3:0',
      noteName: 'G1',
      duration: '16n',
      velocity: v
    },
    {
      time: '7:0:0',
      noteName: 'A1',
      duration: '16n',
      velocity: v
    },
    {
      time: '7:0:2',
      noteName: 'A1',
      duration: '16n',
      velocity: v
    },
    {
      time: '7:1:2',
      noteName: 'A1',
      duration: '16n',
      velocity: v
    },
    {
      time: '7:2:0',
      noteName: 'A1',
      duration: '8n',
      velocity: v
    },
    {
      time: '7:3:0',
      noteName: 'A1',
      duration: '16n',
      velocity: v
    },
    {
      time: '7:3:2',
      noteName: 'A1',
      duration: '16n',
      velocity: v
    }
  ]
)

part.loopEnd = '8m'
part.loop = true

export { instrument, part }
