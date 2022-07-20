const getBaseRoute = (path) => {
  let pathName=path.split("/");
  if(pathName.length === 2){
    pathName = "home";
  }else{
    pathName=pathName[2]===""?"home":pathName[2];
  }
  return pathName;
}

export default getBaseRoute;
