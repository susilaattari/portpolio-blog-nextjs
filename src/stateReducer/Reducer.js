import Init from "./Init";
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "namaUser":
      return { ...state, name: (state.name = action.payload) };
    case "themeValue":
      return { ...state, theme: state.theme === "dark" ? "light" : "dark" };
    case "reset":
      return Init(action.payload);
    default:
      throw new Error();
  }
}
export default reducer;
