
const state = {
    lines: [{ points: [10, 10, 100, 100]}],
    counter:  1
}


const getters = {
    lines: state => {
        return state.lines
    },
    counter: state => {
        return state.counter
    }
}
  

const actions = {
  
}
  

const mutations = {
   
}
  
export default {
    state,
    getters,
    actions,
    mutations
}