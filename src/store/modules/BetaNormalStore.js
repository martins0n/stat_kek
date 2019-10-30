
const state = {
    success: 12,
    trials: 20
}


const getters = {
    success: state => {
        return state.success
    },
    trials: state => {
        return state.trials
    }
}
  

const actions = {
  
}
  

const mutations = {
    updateState (state, success, trials){
        state.success = success
        state.trials = trials
    },
    success (state, success){
        state.success = success
    },
    trials (state, trials){
        state.trials = trials
    }
}
  
export default {
    state,
    getters,
    actions,
    mutations
}