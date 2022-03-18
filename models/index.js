module.exports = (app) => {
  app.models = {
    User: require("./user.js"),
    Particular: require("./particular.js"),
    Message: require("./message.js"),
    Location: require("./location.js"),
    Delivery: require("./delivery.js"),
    Announcement: require("./announcement.js"),
    Business: require("./business.js"),
  };
};
