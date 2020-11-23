export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Tiring Site";
  next();
};
