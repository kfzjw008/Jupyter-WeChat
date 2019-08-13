
const app = getApp()

const markersize = 30

function range(start, edge, step) {
  for (var ret = [];
    (edge - start) * step > 0; start += step) {
    ret.push(start);
  }
  return ret;
}

function markers(northeast, southwest, scale, width, height) {

  const markerslng = (northeast.longitude - southwest.longitude) * markersize / width
  const markerslat = (northeast.latitude - southwest.latitude) * markersize / height

  const maxlon = northeast.longitude
  const minlon = southwest.longitude
  const maxlat = northeast.latitude
  const minlat = southwest.latitude

  const lons = range(minlon, maxlon, markerslng)
  const lats = range(minlat, maxlat, markerslat)

  let _markers = []
  lons.forEach((lon, i) => {
    lats.forEach((lat, j) => {
      _markers.push({
        id: lon + ',' + lat,
        latitude: lat,
        longitude: lon,

        alpha: 0, //将图片设置为透明,通过开发者工具看不出效果,但真机是有效果的
        width: markersize,
        height: markersize
      })
    })
  })
  return _markers
}

Page({
  data: {
    polygons: [],
    controls: [{
      id: 1,
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }],
    markers: []
  },
  createMarkers() {

    this.mapCtx = wx.createMapContext('map')
    const query = wx.createSelectorQuery()
    const map = query.select('#map').boundingClientRect()

    let that = this

    that.mapCtx.getRegion({
      success(res1) {
        that.mapCtx.getScale({
          success(res2) {
            query.exec((res) => {
              let width = res[0].width;
              let height = res[0].height;
              let _markers = markers(res1.northeast, res1.southwest, res2.scale, width, height)
              that.data.markers = _markers
              that.setData(that.data)
            })
          }
        })
      }
    })
  },
  regionchange(e) {
    this.createMarkers()
  },
  markertap(e) {
    console.log(e.markerId.split(","))
    var jd = e.markerId.split(",")[0];
    var wd = e.markerId.split(",")[1];
    console.log(jd)
    console.log(wd)

this.setData({
jd:jd,
wd:wd
})



  },
  controltap(e) {
    console.log(e.controlId)
  },
  onReady(e) {
    this.createMarkers()
  }
})



