import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import ToneSynth from '../module_components/ToneSynth'
import ChorusEffect from '../module_components/ChorusEffect'
import DistortionEffect from '../module_components/DistortionEffect'
import FeedbackDelayEffect from '../module_components/FeedbackDelayEffect'
import FreeverbEffect from '../module_components/FreeverbEffect'
import JCReverbEffect from '../module_components/JCReverbEffect'
import PingPongDelayEffect from '../module_components/PingPongDelayEffect'
import ReverbEffect from '../module_components/ReverbEffect'
import TremoloEffect from '../module_components/TremoloEffect'
import VibratoEffect from '../module_components/VibratoEffect'
import Channel from '../module_components/Channel'

export default class SynthRoom extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { instruments, handlePropertyValueChange } = this.props
    const instrumentElements = []

    instruments.forEach((instrument, i) => {
      const instrumentModuleElements = []

      instrument.forEach((instrumentModule, i) => {
        const { id, name, type, node, settings } = instrumentModule
        let instrumentModuleElement

        switch (type) {
          case 'ToneSynth':
            instrumentModuleElement = (
              <ToneSynth
                id={id}
                name={name}
                node={node}
                settings={settings}
                handlePropertyValueChange={handlePropertyValueChange}
                key={i}
              />
            )
            break
          case 'Chorus':
            instrumentModuleElement = (
              <ChorusEffect
                id={id}
                name={name}
                node={node}
                settings={settings}
                handlePropertyValueChange={handlePropertyValueChange}
                key={i}
              />
            )
            break
          case 'Distortion':
            instrumentModuleElement = (
              <DistortionEffect
                id={id}
                name={name}
                node={node}
                settings={settings}
                handlePropertyValueChange={handlePropertyValueChange}
                key={i}
              />
            )
            break
          case 'FeedbackDelay':
            instrumentModuleElement = (
              <FeedbackDelayEffect
                id={id}
                name={name}
                node={node}
                settings={settings}
                handlePropertyValueChange={handlePropertyValueChange}
                key={i}
              />
            )
            break
          case 'Freeverb':
            instrumentModuleElement = (
              <FreeverbEffect
                id={id}
                name={name}
                node={node}
                settings={settings}
                handlePropertyValueChange={handlePropertyValueChange}
                key={i}
              />
            )
            break
          case 'PingPongDelay':
            instrumentModuleElement = (
              <PingPongDelayEffect
                id={id}
                name={name}
                node={node}
                settings={settings}
                handlePropertyValueChange={handlePropertyValueChange}
                key={i}
              />
            )
            break
          case 'JCReverb':
            instrumentModuleElement = (
              <JCReverbEffect
                id={id}
                name={name}
                node={node}
                settings={settings}
                handlePropertyValueChange={handlePropertyValueChange}
                key={i}
              />
            )
            break
          case 'Tremolo':
            instrumentModuleElement = (
              <TremoloEffect
                id={id}
                name={name}
                node={node}
                settings={settings}
                handlePropertyValueChange={handlePropertyValueChange}
                key={i}
              />
            )
            break
          case 'Vibrato':
            instrumentModuleElement = (
              <VibratoEffect
                id={id}
                name={name}
                node={node}
                settings={settings}
                handlePropertyValueChange={handlePropertyValueChange}
                key={i}
              />
            )
            break
          case 'Channel':
            instrumentModuleElement = (
              <Channel
                id={id}
                name={name}
                node={node}
                settings={settings}
                handlePropertyValueChange={handlePropertyValueChange}
                key={i}
              />
            )
            break
        }

        instrumentModuleElements.push(instrumentModuleElement)
      })

      instrumentElements.push(
        <div className="Row" key={i}>
          {instrumentModuleElements}
        </div>
      )
    })

    return <div className="SynthRoom">{instrumentElements}</div>
  }
}

SynthRoom.propTypes = {
  instruments: PropTypes.array.isRequired,
  handlePropertyValueChange: PropTypes.func.isRequired
}
