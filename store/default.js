export const state = () => ({
  items: [],
  errors: [],
  title: "mijnticenik",
  author: "Mitchel van Eijgen <mvaneijgen@gmail.com>",
  description: "Nuxt.js project",
});

export const getters = {
  getDefaults: state => key => {
    return state[key];
  },
};
