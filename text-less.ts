
function textLess(text: string, maxLines: number, furthestChar: number): { text: string, proceed: boolean, done: boolean } {
  maxLines = maxLines || text.split('\n').length
  furthestChar = furthestChar || 0
  var textUntilFurthestChar = text.substring(0, furthestChar)
  var displayLines = textUntilFurthestChar.split('\n')
  var displayText = displayLines
    .slice(displayLines.length - maxLines, displayLines.length)
    .join('\n')
  return {
    text: displayText
  , proceed: textLess.bind(null, text, maxLines, furthestChar+1)
  , done: furthestChar >= text.length
  }
}

export = textLess;
