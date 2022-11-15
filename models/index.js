const User = require("./User");
const Goals = require("./Goals");
const Checklist = require("./Checklist");

User.hasMany(Goals, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Goals.belongsTo(User, {
  foreignKey: "user_id",
});

Goals.hasMany(Checklist, {
  foreignKey: "goals_id",
  onDelete: "CASCADE",
});

Checklist.belongsTo(Goals, {
  foreignKey: "goals_id",
});

module.exports = { User, Goals, Checklist };
