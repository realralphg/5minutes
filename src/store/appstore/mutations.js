export function setActiveRoute(state, payload){
  console.log("Mutation reached");
  state.activeRoute = payload.activeRoute;
}
