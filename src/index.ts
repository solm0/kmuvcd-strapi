const condition = {
  displayName: 'Can only assign Authors',
  name: 'can-only-assign-authors',
  async handler(user) {
    const allowedAdminRoles = ['strapi-author'];
    return { role: { name: { $in: allowedAdminRoles } } };
  },
};

export default {
  async bootstrap({ strapi }) {
    // const roles = await strapi.admin.services.role.find();
    // console.log('Admin Roles:', roles.map(role => ({ name: role.name, code: role.code })));
    await strapi.admin.services.permission.conditionProvider.register(condition);
  },
};