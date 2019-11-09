
const state = {
    lines: [
        { stageFirst: { p: [50, 50], q: [100, 100]}, stageSecond: { p: [200, 200], q: [100, 100]} }, 
        { stageFirst: { p: [29, 29], q: [300, 300]}, stageSecond: { p: [200, 200], q: [400, 400]} }]
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
        state.lines[value.index][value.infoStage][value.pos] = value.point
    },
    addRandomLine (state, value){
        var first = Math.floor(Math.random() * 100)
        state.lines.push({
            stageFirst: { 
                p: [first , first + 100], 
                q: [first + 100, first + 200]}, 
            stageSecond: { 
                p: [first, first + 100], 
                q: [first + 100, first + 200]}
        })
    },
    deleteLine (state, value){
        state.lines.splice(value, 1)
    }
}
  
export default {
    state,
    getters,
    actions,
    mutations
}