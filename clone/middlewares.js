import routes from "./routes.js";

// 전역 범위에 변수 추가
export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  next(); // ★★★★★★★★
};
