import React, {Component} from 'react'
import ReactMapboxGl, * as ReactMapboxGlLib from 'react-mapbox-gl'
import MapboxGl from 'mapbox-gl'
import {CEDARMAPS_BASE_URL, RTL_PLUGIN_URL} from './constants/config'
import {cleanUrl} from './helpers/utils'
import {
  DARK_STYLE_URL,
  LIGHT_STYLE_URL,
  LIGHT_RASTER_STYLE_URL
} from './constants/styles'

MapboxGl
  .setRTLTextPlugin(RTL_PLUGIN_URL)

const styleMapper = {
  'style://streets-light': LIGHT_STYLE_URL,
  'style://streets-dark': DARK_STYLE_URL,
  'style://streets-light-raster': LIGHT_RASTER_STYLE_URL
}

export default class CedarMaps extends Component {
  constructor(props) {
    super(props)
    this.Map = ReactMapboxGl({})
  }

  static getReactMapboxGl() {
    return ReactMapboxGlLib
  }

  render() {
    const {
      Map
    } = this
    const {mapStyle, token, mapBaseUrl = CEDARMAPS_BASE_URL} = this.props
    const baseUrl = cleanUrl(mapBaseUrl)
    const cedarMapStyle = [baseUrl, styleMapper[mapStyle] || LIGHT_STYLE_URL].join('/')
    const tileJsonUrl = `${cedarMapStyle}?access_token=${token}`

    if (!Map) return <div/>
    return (
      <Map
        {...this.props}
        style={tileJsonUrl}
      />
    )
  }
}

