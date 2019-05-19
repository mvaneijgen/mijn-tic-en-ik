export const state = () => ({
  menuToggle: false,
  activeBubble: false,
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
  // setMenuToggle(state) {
  //   state.menuToggle = !state.menuToggle;
  // },
};
