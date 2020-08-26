export const state = () => ({
  menuToggle: false,
  bubbleToggle: false,
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
    state[payload.key] = !state[payload.key];
  },
  // setMenuToggle(state) {
  //   state.menuToggle = !state.menuToggle;
  // },
  // activeBubble(state) {
  //   state.activeBubble = !state.activeBubble;
  // },
};
