import comment from '../../api/comment'
import * as types from '../mutation-types'

let state = {
  all: [

  ]
}

const mutations = {
  [types.ADD_COMMENT] (state, { text }) {
    state.all.push({ text })
  },
  [types.LOAD_COMMENTS] (state, { comments }) {
    state.all = comments
  }
}

const actions = {
  getAllPosts ({ commit }) {
    comment.getComments(comments => {
      commit(types.LOAD_COMMENTS, { comments })
    })
  }
}

export default {
  state,
  actions,
  mutations
}
