// import Tone from 'tone'
//
// function kickDrum() {
//   return new Tone.MembraneSynth()
//   // {
//   //   pitchDecay: 0.05,
//   //   octaves: 10,
//   //   oscillator: {
//   //     type: 'sine'
//   //   },
//   //   envelope: {
//   //     attack: 0.001,
//   //     decay: 0.4,
//   //     sustain: 0.02,
//   //     release: 1,
//   //     attackCurve: 'exponential'
//   //   }
//   // }
// }
//
// // prettier-ignore
// function kick2(kickDrum) {
//   return new Tone.Sequence(
//     function(time, note) {
//       kickDrum.triggerAttackRelease(note, '16n', time)
//     },
//     [
//       'G0', 'G0', null, null, null, null, null, null,
//       'G0', null, null, null, null, 'G0', null, null,
//       'G0', 'G0', null, null, null, null, null, null,
//       'G0', null, null, null, null, null, null, null,
//       'G0', 'G0', null, null, null, null, null, null,
//       'G0', null, null, null, null, null, null, null,
//       'G0', 'G0', null, null, null, null, null, null,
//       'G0', null, null, null, null, null, null, 'G0'
//     ],
//     '16n'
//   )
// }
//
// export { kickDrum, kick2 }
