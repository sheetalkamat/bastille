export = function(extension: string, base64data: string) {
  // e.g. "data:image/png;base64,iVBORw0KGgo....."
  return [
    'data:', mediaTypes[extension], '/', extension, ';base64,', base64data
  ].join('')
}

let mediaTypes = {
  mp3: 'audio'
, ogg: 'application'
, png: 'image'
, jpg: 'image'
, jpeg: 'image'
}
