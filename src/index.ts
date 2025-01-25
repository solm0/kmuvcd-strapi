const condition = {
  displayName: 'Can only assign Authors', // Name shown in the Admin Panel
  name: 'can-only-assign-authors',        // Unique condition name
  async handler(user) {
    const allowedAdminRoles = ['author'];
    return { code: { $in: allowedAdminRoles } };
  },
};

module.exports = {
  async bootstrap({ strapi }) {
    // Register the condition
    await strapi.admin.services.permission.conditionProvider.register(condition);
  },
};