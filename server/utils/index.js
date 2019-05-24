/**
 * Authentication middleware for authenticate routes.
 * Use:
 * router.get('/authenticated-route', authenticate(), async (ctx, next)) {
 * @param object ctx  Context
 * @param object next if authenticated, goes to next
 * @returns
 * }
 */
exports.authenticate = () => {
  return (ctx, next) => {
    if (ctx.isAuthenticated()) {
      return next();
    } else {
      ctx.redirect('/users');
    }
  };
};
