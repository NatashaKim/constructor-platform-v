import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import ToneSynth from '../module_components/ToneSynth'
import Sampler from '../module_components/Sampler'
import Sequencer from '../module_components/Sequencer'

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

        const components = {
          ToneSynth: ToneSynth,
          Sampler: Sampler,
          Sequencer: Sequencer,
          ChorusEffect: ChorusEffect,
          DistortionEffect: DistortionEffect,
          FeedbackDelayEffect: FeedbackDelayEffect,
          FreeverbEffect: FreeverbEffect,
          JCReverbEffect: JCReverbEffect,
          PingPongDelayEffect: PingPongDelayEffect,
          ReverbEffect: ReverbEffect,
          TremoloEffect: TremoloEffect,
          VibratoEffect: VibratoEffect,
          Channel: Channel
        }

        const ComponentType = components[type]

        instrumentModuleElements.push(
          <ComponentType
            id={id}
            name={name}
            node={node}
            settings={settings}
            handlePropertyValueChange={handlePropertyValueChange}
            key={i}
          />
        )
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
