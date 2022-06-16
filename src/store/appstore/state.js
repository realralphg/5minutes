import drawerLinks from '../../constants/mentorDrawerLinks';
import getBaseRouteFromUrl from 'src/helpers/getBaseRouteFromUrl';

export default function () {
  // console.log(getBaseRouteFromUrl(window.location.href));
  return {
    drawerLinks,
    activeRoute: ""
  }
}
