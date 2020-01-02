export default {
    state: {
        count: 0
    },
    getters: {
        doneTodos: state => {
            return state.count
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
};