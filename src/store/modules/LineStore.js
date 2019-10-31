
const state = {
    lines: [
        { line_1: { s: [50, 50], t: [100, 100]}, line_2: { s: [200, 200], t: [100, 100]} }, 
        { line_1: { s: [29, 29], t: [300, 300]}, line_2: { s: [200, 200], t: [400, 400]} }]
}


const getters = {
    lines: state => {
        return state.lines
    }
}
  

const actions = {
  
}
  

const mutations = {
   /* updateState (state, idx, point){
        state.lines[idx] = point
    },*/
}
  
export default {
    state,
    getters,
    actions,
    mutations
}