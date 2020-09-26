hexo.extend.renderer.register('json', 'json', function (
  data,
  options,
  callback
) {
  try {
    return callback(null, JSON.stringify(JSON.parse(data.text)))
  } catch (error) {
    return callback(error, 'JSON stringify error')
  }
})
