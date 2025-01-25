module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    // Check if the logged-in user is Author Admin
    const loggedInUser = ctx.state.user;

    if (loggedInUser && loggedInUser.role.name === 'Author Admin') {
      // Check if the request involves assigning roles
      const body = ctx.request.body;
      const isRoleAssignment = body?.role;

      if (isRoleAssignment) {
        const assignedRole = await strapi.db.query('plugin::users-permissions.role').findOne({
          where: { id: body.role },
        });

        // Restrict to assigning only the 'Author' role
        if (assignedRole.name !== 'Author') {
          return ctx.forbidden('Author Admin can only assign the Author role.');
        }
      }
    }

    await next();
  };
};