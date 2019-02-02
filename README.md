<a href="https://www.cedarmaps.com">
  <img src="http://api.cedarmaps.com/docs/img/cedarmaps-api.png" width="500"/>
</a>

# CedarMasp SDK for React

## What is CedarMaps?

CedarMaps is the location data platform for mobile and web applications. We provide [building blocks](https://www.cedarmaps.com) to add location features like maps, search, and navigation into any experience you create. Use our simple and powerful APIs & SDKs and our open source libraries for interactivity and control.

## Sign up for CedarMaps

Not a CedarMaps user yet? [Sign up for an account here](https://www.cedarmaps.com/#demo). Once you’re signed in, all you need to start building is a CedarMaps access token.

---

This guide will take you through the process of integrating CedarMaps into your React application.

This package is a wrapper over [react-mapbox-gl](https://www.mapbox.com/mapbox-gl-js/api/) library.

## Table of Contents
- [Installation](#installation)
- [Rendering Component](#rendering-component)
    - [Adding Markers](#adding-markers)
- [Example](#example)

## Installation

**Npm**
```
npm install @cedarstudios/react-cedarmaps --save
```

**Yarn**
```
yarn add @cedarstudios/react-cedarmaps
```

## Rendering Component

```js
import CedarMaps from '@cedarstudios/react-cedarmaps'
```

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

### Adding Markers

Get `ReactMapboxGl` object and start adding Markers, Polylines or other controls. 

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

You can read more about `ReactMapboxGl` in [Mapbox Documentation](https://github.com/alex3165/react-mapbox-gl/blob/master/docs/API.md)


## Example

You can consult [this example](https://github.com/cedarstudios/cedarmaps-react-sdk/tree/master/example) for getting acquainted with our package.
