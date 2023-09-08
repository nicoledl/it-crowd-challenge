const Product = require("../database/models/Product");
const Brand = require("../database/models/Brand");
const { Op } = require("sequelize");

// search product
async function searchProducts(req, res) {
  try {
    const { keyword } = req.query;

    const products = await Product.findAll({
      where: {
        [Op.or]: [
          {
            name: {
              [Op.like]: `%${keyword}%`, // Búsqueda insensible a mayúsculas y minúsculas en MySQL
            },
          },
          {
            description: {
              [Op.like]: `%${keyword}%`, // Búsqueda insensible a mayúsculas y minúsculas en MySQL
            },
          },
        ],
      },
      include: {
        model: Brand,
        attributes: ["name", "image_url"],
      },
    });

    res.json(products);
  } catch (error) {
    console.error("Error al buscar productos:", error);
    res.status(500).json({ error: "Error al buscar productos" });
  }
}

module.exports = {
  searchProducts,
};
