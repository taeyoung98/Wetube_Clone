// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const CONFIRM_ACCOUNT = "/confirm-account";

const PHOTOS = "/photos";
const PROFILE = "/profile";

// Courses
const COURSES = "/courses";
const COURSES_NEW = "/new";
const COURSES_MINE = "/mine";

// Api
const API = "/api";
const API_DOCUMENTATION = "/documentation";
const API_V1 = "/api/v1";
const API_V1_BUY = "/buy";
const API_V1_REFUND = "/refund";
const API_V2 = "/api/v2";
const API_V2_REMOVE = "/remove";
const API_V2_EDIT = "/edit";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  confirmAccount: CONFIRM_ACCOUNT,
  courses: COURSES,
  coursesNew: COURSES_NEW,
  coursesMine: COURSES_MINE,
  api: API,
  apiDocumentation: API_DOCUMENTATION,
  apiv1: API_V1,
  apiv1Buy: API_V1_BUY,
  apiv1Refund: API_V1_REFUND,
  apiv2: API_V2,
  apiv2Remove: API_V2_REMOVE,
  apiv2Edit: API_V2_EDIT,

  photos: PHOTOS,
  profile: PROFILE,
};

export default routes;
