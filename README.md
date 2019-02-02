![Logo](https://camo.githubusercontent.com/6af2fd8b1f7c23d44b39a785ac06ba27a469da1e/687474703a2f2f6170692e63656461726d6170732e636f6d2f646f63732f696d672f63656461726d6170732d6170692e706e67)

# @cedarstudios/react-cedarmaps | [Documentation](https://github.com/alex3165/react-mapbox-gl/blob/master/docs/API.md)


#### React wrapper for [mapbox-gl-js](https://www.mapbox.com/mapbox-gl-js/api/).
This package is a wrapper over `react-mapbox-gl` library.

<br/><br/>

## Getting Started
1- Install package
```
npm install @cedarstudios/react-cedarmaps --save
```

2- Import package 

```js
import CedarMaps from '@cedarstudios/react-cedarmaps'
```

3- Render component.
```js
render() {
  return {
    <CedarMaps
        containerStyle={{
          height: '100vh',
          width: '100%'
        }}
        token='YOUR ACCESS TOKEN'
        center={[ 51.34379364705882,  35.74109568627451]}
      >
    </CedarMaps>
  }
}
```

4- (Optional) Get `ReactMapboxGl` object and start adding Markers, Polylines or Controls you can read more about ReactMapboxGl in [Documentation](https://github.com/alex3165/react-mapbox-gl/blob/master/docs/API.md)
```js
const {RotationControl, ZoomControl, ScaleControl} = CedarMaps.getReactMapboxGl()
 return (
      <CedarMaps
        containerStyle={{
          height: '100vh',
          width: '100%'
        }}
        token='YOUR ACCESS TOKEN'
        preserveDrawingBuffer={false}
        center={[ 51.34379364705882,  35.74109568627451]}
      >
        <RotationControl/>
        <ZoomControl/>
        <ScaleControl/>
      </CedarMaps>
    )
```

##Example:

Please see [This full example Example App source](https://github.com/cedarstudios/cedarmaps-react-sdk/tree/master/example)

##Methods:

- getReactMapboxGl(): Get React Mapboxgl reference object 
