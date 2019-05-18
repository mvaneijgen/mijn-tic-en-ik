export const state = () => ({
  menuToggle: false,
});

//------------------------------------------------------//
// Getters
//------------------------------------------------------//
export const getters = {
  getMenuToggle: state => {
    return state.menuToggle;
  },
};
// END Getters -------------------------------------//

export const mutations = {
  setMenuToggle(state) {
    state.menuToggle = !state.menuToggle;
  },
};
