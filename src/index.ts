const condition = {
  displayName: 'Can only assign Authors',
  name: 'can-only-assign-authors',
  async handler(user) {
    const allowedAdminRoles = ['Author'];
    return { role: { $in: allowedAdminRoles } };
  },
};

export default {
  async bootstrap({ strapi }) {
    await strapi.admin.services.permission.conditionProvider.register(condition);
  },
};