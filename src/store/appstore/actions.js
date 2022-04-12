import getBaseRoute from '../../helpers/getBaseRoute';

export function setActiveRoute (context, data) {
  let path = getBaseRoute(data.path);
  context.commit("setActiveRoute", {activeRoute: path})
}

