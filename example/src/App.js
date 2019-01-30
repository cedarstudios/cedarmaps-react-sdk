import React, {Component} from 'react'
import CedarMaps from '@cedarstudios/react-cedarmaps'
import {getBoundsFromPoints} from './helpers/utils'
import {
  BLUE_DOT_MARKER_URL,
  CABS_MARKER_URL,
  PARKINGLOT_MARKER_URL,
} from './constants/markers'
import {polyline,center,points} from './constants/data'
class Example extends Component {

  renderLines({polyline, Layer, Feature}) {
    const lineLayout = {
      'line-cap': 'round',
      'line-join': 'round'
    }
    if (!polyline || polyline.length === 0) return
    const mappedPoints = polyline.map(point => [point.lng, point.lat])
    const linePaint = {
      'line-color': '#bc0000',
      'line-width': 6
    }
    return (
      <Layer type="line" layout={lineLayout} paint={linePaint}>
        <Feature coordinates={mappedPoints}/>
      </Layer>
    )
  }

  render() {
    if (!CedarMaps) return <div/>
    let mapCenter = center
    const sum = polyline.reduce((sum, point) => {
      sum.lat += point.lat
      sum.lng += point.lng
      return sum
    }, {lat: 0, lng: 0})
    mapCenter.lat = sum.lat / polyline.length
    mapCenter.lng = sum.lng / polyline.length
    const {ne, sw} = getBoundsFromPoints(polyline)
    const {RotationControl, ZoomControl, ScaleControl, Feature, Layer, Marker} = CedarMaps.getReactMapboxGl()
    return (
      <CedarMaps
        containerStyle={{
          height: '100vh',
          width: '100%'
        }}
        token='YOUR ACCESS TOKEN'
        preserveDrawingBuffer={false}
        center={[mapCenter.lng, mapCenter.lat]}
        fitBounds={[sw, ne]}
      >
        <RotationControl/>
        <ZoomControl/>
        <ScaleControl/>
        {this.renderPoints({points, Marker})}
        {this.renderLines({polyline, Layer, Feature})}
      </CedarMaps>
    )
  }

  renderPoints({points, Marker}) {
    return points.map((point, index) => {
      const markerUrl = index === 0 ? CABS_MARKER_URL : index === points.length - 1 ?
        PARKINGLOT_MARKER_URL : BLUE_DOT_MARKER_URL
      return (
        <Marker
          coordinates={[point.lng, point.lat]}
          key={index}
        >
          <img src={markerUrl}/>
        </Marker>
      )
    })
  }
}

export default Example
