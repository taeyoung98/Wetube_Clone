export const localsMiddleware = (req, res, next) => {
  // res.locals.siteName = "Tiring Site";
  res.locals.siteTitle = "Nomad Movies";
  next();
};
