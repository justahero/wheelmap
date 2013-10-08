# For more information see: http://emberjs.com/guides/routing/

@Wheelmap.Router.map ()->
  @resource 'index', path: '/', queryParams: ['lat', 'lng', 'zoom', 'node_id']

# index route showing map (no map route because, we need it more than once)
# route returns models filtered by bounding box of map view ... how to?