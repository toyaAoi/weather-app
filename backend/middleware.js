const logger = {
  info: (...params) => console.log(...params),
};

export const requestLogger = (req, _res, _next) => {
  logger.info("Method:", req.metgod);
};
