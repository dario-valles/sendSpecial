// Simple error Handler
// we can improve it by handling different
// type of errors (HTTPNotFoundError,…) or accepting a custom message/status.

module.exports = function errorHandler() {
  return async (ctx, next) => {
    try {
      await next();
    } catch (error) {
      ctx.body = 'Error on server';
      ctx.status = 500;
    }
  };
};
