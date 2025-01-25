const condition = {
  displayName: 'Can only assign Authors', // Name shown in the Admin Panel
  name: 'can-only-assign-authors',        // Unique condition name
  async handler(user) {
    const allowedAdminRoles = ['strapi-author'];
    return { code: { $in: allowedAdminRoles } };
  },
};

module.exports = {
  async bootstrap({ strapi }) {
    const roles = await strapi.admin.services.role.find();
    console.log('Admin Roles:', roles.map(role => ({ name: role.name, code: role.code })));
    await strapi.admin.services.permission.conditionProvider.register(condition);
  },
};