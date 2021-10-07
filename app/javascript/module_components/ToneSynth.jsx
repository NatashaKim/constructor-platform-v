import React, { PureComponent } from 'react'

import Slider from '../control_components/Slider'
import ButtonSet from '../control_components/ButtonSet'

export default class ToneSynth extends PureComponent {
  constructor(props) {
    super(props)
  }

  updateNodeParams = () => {
    const { node, settings } = this.props
    const { volume, oscillator } = settings
    const { type } = oscillator

    node.volume.value = volume
    node.oscillator.type = type
  }

  render() {
    console.log(this.props)
    const { settings } = this.props
    const { volume, oscillator } = settings
    const { type } = oscillator

    const oscillatorTypes = ['sine', 'square', 'triangle', 'sawtooth']

    this.updateNodeParams()

    return (
      <div className="ToneSynth">
        <Slider
          name="Volume"
          property={['volume']}
          min={-20}
          max={10}
          step={0.01}
          value={volume}
          handleChange={this.props.handlePropertyValueChange}
        />

        <ButtonSet
          name="Type"
          property={['oscillator', 'type']}
          value={type}
          options={oscillatorTypes}
          handleChange={this.props.handlePropertyValueChange}
        />
      </div>
    )
  }
}
