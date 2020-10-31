const defaultState = {
  posts: [
    { id: "1", title: "Tarun", body: "Founder at Blink-Reached" },
    { id: "2", title: "Ashutosh", body: "Founder at Blink-Reached" },
    { id: "3", title: "Pramod", body: "Founder at Blink-Reached" },
    { id: "4", title: "Nilesh", body: "Founder at Blink-Reached" },
    { id: "5", title: "Udit", body: "Founder at Blink-Reached" },
  ],
};
const myReducer = (state = defaultState, action) => {
  if (action.type === "DEL_POST") {
    let newPosts = state.posts.filter((post) => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts,
    };
  }
  if (action.type === "ADD_POST") {
    state.posts.push(action.post);
    let newPosts = state.posts;
    return {
      ...state,
      posts: newPosts,
    };
  }
  return state;
};

export default myReducer;
