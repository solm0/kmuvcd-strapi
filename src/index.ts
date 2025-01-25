const condition = {
  displayName: 'Can only assign Authors',
  name: 'can-only-assign-authors',
  async handler(user) {
    const allowedAdminRoles = ['strapi-author'];
    const result = { code: { $in: allowedAdminRoles } };
    return result;
  },
};

export default {
  async bootstrap({ strapi }) {
    // const roles = await strapi.admin.services.role.find();
    // console.log('Admin Roles:', roles.map(role => ({ name: role.name, code: role.code })));
    await strapi.admin.services.permission.conditionProvider.register(condition);
  },
};