import * as Tone from 'tone'
import { generateUniqId } from '../utilities'

const synthSettings = {
  volume: -10,
  detune: 0,
  portamento: 0.05,
  envelope: {
    attack: 0.05,
    attackCurve: 'exponential',
    decay: 0.9,
    decayCurve: 'exponential',
    sustain: 0.2,
    release: 1.5,
    releaseCurve: 'exponential'
  },
  oscillator: {
    type: 'pulse',
    modulationType: 'sine',
    // partialCount: 0,
    // partials: [],
    phase: 0,
    harmonicity: 0.5
  }
}

const freeverbSettings = {
  wet: 0.78,
  roomSize: 0.23,
  dampening: 40
}

const pingPongDelaySettings = {
  wet: 0.18,
  delayTime: 0.25,
  maxDelayTime: 1
}

const tremoloSettings = {
  wet: 1,
  frequency: 10,
  type: 'sine',
  depth: 0.5,
  spread: 180
}

const vibratoSettings = {
  wet: 0.13,
  maxDelay: 0.005,
  frequency: 5,
  depth: 0.1,
  type: 'sine'
}

const channelSettings = {
  volume: -14,
  pan: 0,
  mute: true,
  solo: false
}

// function instrument() {
const synthNode = new Tone.Synth(synthSettings)
const freeverbNode = new Tone.Freeverb(freeverbSettings)
const pingPongDelayNode = new Tone.PingPongDelay(pingPongDelaySettings)
const tremoloNode = new Tone.Tremolo(tremoloSettings)
const vibratoNode = new Tone.Vibrato(vibratoSettings)
const channelNode = new Tone.Channel(channelSettings).toDestination()

synthNode.chain(
  freeverbNode,
  pingPongDelayNode,
  tremoloNode,
  vibratoNode,
  channelNode
)

const instrument = [
  {
    id: generateUniqId(),
    name: 'Verse Synth',
    type: 'ToneSynth',
    node: synthNode,
    settings: synthSettings
  },
  {
    id: generateUniqId(),
    name: 'Freeverb',
    type: 'FreeverbEffect',
    node: freeverbNode,
    settings: freeverbSettings
  },
  {
    id: generateUniqId(),
    name: 'Ping Pong Delay',
    type: 'PingPongDelayEffect',
    node: pingPongDelayNode,
    settings: pingPongDelaySettings
  },
  {
    id: generateUniqId(),
    name: 'Tremolo',
    type: 'TremoloEffect',
    node: tremoloNode,
    settings: tremoloSettings
  },
  {
    id: generateUniqId(),
    name: 'Vibrato',
    type: 'VibratoEffect',
    node: vibratoNode,
    settings: vibratoSettings
  },
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
      noteName: 'D5',
      duration: '8n',
      velocity: v
    },
    {
      time: '0:1:2',
      noteName: 'E5',
      duration: '8n',
      velocity: v
    },
    {
      time: '0:2:0',
      noteName: 'F#5',
      duration: '8n',
      velocity: v
    },
    {
      time: '0:2:2',
      noteName: 'E5',
      duration: '8n',
      velocity: v
    },
    {
      time: '0:3:0',
      noteName: 'D5',
      duration: '8n',
      velocity: v
    },
    {
      time: '1:0:0',
      noteName: 'D5',
      duration: '8n',
      velocity: v
    },
    {
      time: '1:0:2',
      noteName: 'E5',
      duration: '16n',
      velocity: v
    },
    {
      time: '1:0:3',
      noteName: 'F#5',
      duration: '8n',
      velocity: v
    },
    {
      time: '1:1:1',
      noteName: 'E5',
      duration: '16n',
      velocity: v
    },
    {
      time: '1:1:2',
      noteName: 'D5',
      duration: '8n',
      velocity: v
    },
    {
      time: '1:2:0',
      noteName: 'D5',
      duration: '8n',
      velocity: v
    },
    {
      time: '1:2:2',
      noteName: 'E5',
      duration: '16n',
      velocity: v
    },
    {
      time: '1:2:3',
      noteName: 'F#5',
      duration: '8n',
      velocity: v
    },
    {
      time: '1:3:1',
      noteName: 'E5',
      duration: '16n',
      velocity: v
    },
    {
      time: '1:3:2',
      noteName: 'D5',
      duration: '8n',
      velocity: v
    },
    {
      time: '2:0:0',
      noteName: 'C#5',
      duration: '4n.',
      velocity: v
    },
    {
      time: '2:1:2',
      noteName: 'E5',
      duration: '4n',
      velocity: v
    },
    {
      time: '2:2:2',
      noteName: 'E5',
      duration: '4n.',
      velocity: v
    },
    {
      time: '3:0:0',
      noteName: 'C#5',
      duration: '4n.',
      velocity: v
    },
    {
      time: '3:1:2',
      noteName: 'E5',
      duration: '4n',
      velocity: v
    },
    {
      time: '3:2:2',
      noteName: 'E5',
      duration: '4n.',
      velocity: v
    },
    {
      time: '4:1:0',
      noteName: 'B4',
      duration: '8n.',
      velocity: v
    },
    {
      time: '4:1:2',
      noteName: 'C#5',
      duration: '8n',
      velocity: v
    },
    {
      time: '4:2:0',
      noteName: 'B4',
      duration: '4n.',
      velocity: v
    },
    {
      time: '4:3:2',
      noteName: 'D5',
      duration: '4n',
      velocity: v
    },
    {
      time: '5:0:2',
      noteName: 'B4',
      duration: '4n',
      velocity: v
    },
    {
      time: '5:1:2',
      noteName: 'E5',
      duration: '4n',
      velocity: v
    },
    {
      time: '5:2:2',
      noteName: 'B4',
      duration: '4n',
      velocity: v
    },
    {
      time: '6:0:0',
      noteName: 'A4',
      duration: '4n.',
      velocity: v
    },
    {
      time: '6:1:2',
      noteName: 'G4',
      duration: '2n',
      velocity: v
    },
    {
      time: '7:0:0',
      noteName: 'B4',
      duration: '4n.',
      velocity: v
    },
    {
      time: '7:1:2',
      noteName: 'A4',
      duration: '2n',
      velocity: v
    }
  ]
)

part.loopEnd = '8m'
part.loop = true

export { instrument, part }
