function textFormatter(text: string, maxWidth: number) {
    let strings = text.split('\n')
    return strings.map(function (str) {
        return splitStringWithoutNewline(str, maxWidth)
    }).join('\n')
}

export = textFormatter;

function splitStringWithoutNewline(string: string, maxWidth: number) {
  let newText = ''
  let words = string.split(' ')
  let totalNewlines = 0
  for(let i = 0; i < words.length; i++) {
    let lastLine = (newText).split('\n').pop()
    let beginning = lastLine.length === 0

    // word fits on current line
    if((lastLine + words[i]).length < maxWidth) {
      newText += beginning ? '' : ' '
      newText += words[i]
    }
    // word would fit if it had its own line
    else if(words[i].length <= maxWidth) {
      newText += '\n'
      newText += words[i]
    }
    // word had no chance, break it up
    else {
      let full = lastLine.length === maxWidth || lastLine.length === maxWidth-1
      newText += (beginning || full) ? '' : ' '
      let charsLeft = maxWidth - (
        lastLine + (beginning ? '' : ' ')
      ).length
      let charsForRestOfLine = words[i].substring(0,charsLeft)
      newText += charsForRestOfLine
      let carryChars = words[i].substring(charsLeft)
      while(carryChars.length > 0){
        let toAdd = carryChars.substring(0, maxWidth)
        newText += '\n'
        newText += toAdd
        carryChars = carryChars.substring(maxWidth)
      }
    }
  }
  return newText
}
