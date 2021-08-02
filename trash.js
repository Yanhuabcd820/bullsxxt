
const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

}
const phrase = ['很簡單', '很容易', '很快', '很正常']

function makeTrashSentence(targetQuery) {

  // const target = 'engineer'
  // const targetQuery = {
  //   target: 'engineer'
  // }

  let targetName = ''
  if (targetQuery === 'engineer') {
    targetName = '工程師'
  }
  if (targetQuery === 'designer') {
    targetName = '設計師'
  }
  if (targetQuery === 'entrepreneur') {
    targetName = '創業家'
  }
  if (targetQuery === undefined) {
    return '請從上方選擇一個職業'
  }

  let taskWho = task[`${targetQuery}`]
  let taskIndex = Math.floor(Math.random() * taskWho.length)
  // console.log(taskWho[taskIndex])

  let phraseIndex = Math.floor(Math.random() * phrase.length)
  // console.log(phrase[phraseIndex])

  let trashSentence = `身為一個${targetName}, ${taskWho[taskIndex]}, ${phrase[phraseIndex]}吧!`

  // console.log(targetQuery)

  return trashSentence


}

module.exports = makeTrashSentence