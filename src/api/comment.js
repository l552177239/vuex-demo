const _comments = [
  { text: '哈哈' },
  { text: '嘿嘿' },
  { text: '呵呵' }
]

export default {
  getComments(item){
    setTimeout(() => item(_comments), 2000)
  }
}
