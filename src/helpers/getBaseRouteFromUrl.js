const getBaseRouteFromUrl = (path) => {
  let pathName=path.split("/");
  pathName=pathName[1]===""?"home":pathName[1];

  return pathName;
}

export default getBaseRouteFromUrl;
