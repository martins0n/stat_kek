
const state = {
    lines: [
        { stageFirst: { s: [50, 50], t: [100, 100]}, stageSecond: { s: [200, 200], t: [100, 100]} }, 
        { stageFirst: { s: [29, 29], t: [300, 300]}, stageSecond: { s: [200, 200], t: [400, 400]} }]
}


const getters = {
    lines: state => {
        return state.lines
    }
}
  

const actions = {
  
}
  

const mutations = {
   updateStateLines (state, value){
       console.log(value)
        state.lines[value.idx][value.infoStage][value.pos] = value.point
    }
}
  
export default {
    state,
    getters,
    actions,
    mutations
}