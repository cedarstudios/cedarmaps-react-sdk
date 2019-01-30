export const getBoundsFromPoints = points => {
  const padding = .001
  const maxLat = Math.max(...points.map(point => point.lat))
  const minLat = Math.min(...points.map(point => point.lat))
  const maxLng = Math.max(...points.map(point => point.lng))
  const minLng = Math.min(...points.map(point => point.lng))
  return {ne: {lat: maxLat + padding, lng: maxLng + padding}, sw: {lat: minLat - padding, lng: minLng - padding}}
}
