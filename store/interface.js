export const state = () => ({
  menuToggle: false,
  bubbleToggle: false,
  bubbleToggleUrl: null,
  bubbleActive: false,
});

//------------------------------------------------------//
// Getters
//------------------------------------------------------//
export const getters = {
  getState: state => key => {
    return state[key];
  },
  // getMenuToggle: state => {
  //   return state.menuToggle;
  // },
  // getActiveBubble: state => {
  //   return state.activeBubble;
  // },
};
// END Getters -------------------------------------//

export const mutations = {
  setStateSwitch(state, payload) {
    if (payload.value) {
      state[payload.key] = payload.value;
    } else {
      state[payload.key] = !state[payload.key];
    }
  },
  setBubbleToggleUrl(state, payload) {
    state[payload.key] = payload.value;
  },
  // setMenuToggle(state) {
  //   state.menuToggle = !state.menuToggle;
  // },
  // activeBubble(state) {
  //   state.activeBubble = !state.activeBubble;
  // },
};
