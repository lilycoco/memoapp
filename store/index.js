const STORAGE_NAME = 'vuex_data'
const strageData = localStorage.getItem(STORAGE_NAME)

export const state = () => strageData ? JSON.parse(strageData) : {
  memoList: []
}

export const getters = {
  memoData(state) {
    return index => state.memoList[index]
  }
}

export const plugins = [
  (store) => {
    store.subscribe(() => {
      localStorage.setItem(STORAGE_NAME, JSON.stringify(store.state))
    })
  }
]

export const mutations = {
  addMemo(state) {
    const widthCount = Math.floor(window.innerWidth / 250)
    state.memoList = [
      ...state.memoList,
      {
        toppo: Math.floor(state.memoList.length / widthCount) * 350,
        left: (state.memoList.length % widthCount) * 250,
        text: ''
      }
    ]
  },
  reduceMemo(state, index) {
    state.memoList = [...state.memoList]
    state.memoList.splice(index, 1)
  },
  updateText(state, { index, text }) {
    state.memoList = [...state.memoList]
    state.memoList[index] = {
      ...state.memoList[index],
      text
    }
  },
  mouseMove(state, { draggingIndex, target }) {
    state.memoList = [...state.memoList]
    state.memoList[draggingIndex] = target
  }
}
