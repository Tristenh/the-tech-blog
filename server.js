const express = require("express");
const session = require("express-session");
const routes = require("./controllers");
const exphbs = require("express-handlebars");
const path = require("path");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
// create instance of handlebars engine
const hbs = exphbs.create({});
const app = express();
const PORT = process.env.PORT || 3006;
// configure handlebars as the default template engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
// serve static files
app.use(express.static(path.join(__dirname, "public")));
global.__basedir = __dirname;
const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
// handling unmatched routes and serving  404
app.get("*", (req, res) => {
  res.status(404).send("page not found");
});
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
