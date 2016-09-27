/*jshint node:true*/
module.exports = {
  description: 'Install Dependencies',

  normalizeEntityName: function() {},

  afterInstall: function(options) {
    return this.addAddonToProject('ember-cli-velocity');
  }
};
