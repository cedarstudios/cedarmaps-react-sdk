![Logo](https://camo.githubusercontent.com/6af2fd8b1f7c23d44b39a785ac06ba27a469da1e/687474703a2f2f6170692e63656461726d6170732e636f6d2f646f63732f696d672f63656461726d6170732d6170692e706e67)

# @cedarstudios/react-cedarmaps | [Documentation](https://github.com/alex3165/react-mapbox-gl/blob/master/docs/API.md)



#### React wrapper for [mapbox-gl-js](https://www.mapbox.com/mapbox-gl-js/api/).
<br/><br/>

## Getting Started

```
npm install @cedarstudios/react-cedarmaps --save
```

Example:

Please see [This Example App](https://github.com/cedarstudios/cedarmaps-react-sdk/tree/master/example)

Methods:

- getReactMapboxGl(): Get React Mapboxgl reference object 


## Components

### Proxy components (proxy between React and Mapbox API)
- ReactMapboxGL
- Layer & Feature
  - property `symbol` displays a mapbox symbol.
  - property `line` displays a lineString.
  - property `fill` displays a polygon.
  - property `circle` displays a mapbox circle.
  - property `raster` displays a mapbox raster tiles.
  - property `fill-extrusion` displays a layer with extruded buildings.
  - property `background` displays a mapbox background layer.
  - property `heatmap` displays a mapbox heatmap layer.
- Source
- GeoJSONLayer

### DOM components (normal React components)
- ZoomControl
- ScaleControl
- RotationControl
- Marker (Projected component)
- Popup (Projected component)
- Cluster

