// import firebase from 'firebase'
export default {
    state: {
        user:{
            isAuthenticated: false,
            uid: null
        }
    },
    mutations: {
        SET_USER(state, payload){
            state.user.isAuthenticated = true
            // state.user.uid = payload
        },
        UNSET_USER(state){
            state.user = {
                isAuthenticated: false,
                uid: null
            }
        }
    },
    actions: {
        SIGNUP({commit}, payload){
            commit('SET_PROCESSING', true)
            commit('CLEAR_ERROR')

            .then(() => {
                commit('SET_PROCESSING', false)
            })
            .catch(function(error) {
                commit('SET_PROCESSING', false)
                commit('SET_ERROR', error.message)
              });
        },
        SIGNIN({commit}, payload){
            commit('SET_PROCESSING', true)

            .then(() => {
                commit('SET_PROCESSING', false)
            })
            .catch(function(error) {
                commit('SET_PROCESSING', false)
                commit('SET_ERROR', error.message)
              });
        },
        SIGNOUT({commit}){
            // firebase.auth().signOut()
            // .then(() => {
                // console.log('ffffff')
                // this.$router.push("/project")
            // })
            commit('UNSET_USER')
        },
        STATE_CHANGED({commit}, payload){
            if(payload){
                commit('SET_USER')
            }else{
                commit('UNSET_USER')
            }
        }
    },
    getters:{
        isUserAuthenticated: (state) => state.user.isAuthenticated
    }
 }