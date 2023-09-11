require("dotenv").config();

module.exports = {
  username: process.env.DB_USERNAME || 3000,
  password: process.env.DB_PASSWORD || "root2305",
  database: process.env.DB_DATABASE || "sequelize",
  host: process.env.DB_HOST || localhost,
  dialect: process.env.DB_DIALECT || mysql, 
  define: {
    timestamps: false,
  },
};
