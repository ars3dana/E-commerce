const sequelize = require("./../db.js");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  nickname: {type: DataTypes.STRING}
});

const Cart = sequelize.define("cart", {
  id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
  userId: {type: DataTypes.UUID, allowNull:false},
  productId: {type: DataTypes.UUID, allowNull: false},
  count:{type: DataTypes.INTEGER, defaultValue: 0, allowNull: false}
});

const Product = sequelize.define("product", {
  id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
  title: { type: DataTypes.STRING, unique: true,allowNull: false },
  img: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
  brand: {type: DataTypes.STRING},
  type: {type: DataTypes.STRING,allowNull: false},
  size: {type: DataTypes.STRING},
  model: {type: DataTypes.STRING},
  price: {type: DataTypes.INTEGER},
  hot: {type: DataTypes.BOOLEAN},
});


User.belongsToMany(Product, {through: Cart})
Product.belongsToMany(User, {through: Cart})

module.exports = {
  User,
  Cart,
  Product,
};
