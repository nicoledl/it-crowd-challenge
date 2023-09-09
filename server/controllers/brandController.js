const Brand = require("../database/models/Brand");

// get all brands
async function getAllBrands(req, res) {
  try {
    const brands = await Brand.findAll();
    res.json(brands);
  } catch (error) {
    console.error("Error al buscar marcas:", error);
    res.status(500).json({ error: "Error al buscar marcas" });
  }
}

// create new brand
async function createBrand(req, res) {
  try {
    const { name, image_url } = req.body;
    const brand = await Brand.create({
      name,
      image_url,
    });
    console.log("Brand created:", brand.toJSON());
    res.status(201).json(brand);
  } catch (error) {
    console.error("Error creating brand:", error);
    res.status(500).json({ error: "Error creating brand" });
  }
}

// modify brand
async function updateBrand(req, res) {
  try {
    const { name, image_url } = req.body;
    await Brand.update(
      {
        name,
        image_url,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.json({ message: "Brand was modify" });
  } catch (error) {
    console.error("Error al actualizar el producto:", error);
    res.status(500).json({ error: "Error al actualizar el producto" });
  }
}

// delete brand
async function deleteBrand(req, res) {
  try {
    await Brand.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: "Marca eliminada con éxito" });
  } catch (error) {
    console.error("Error al eliminar la marca:", error);
    res.status(500).json({ error: "Error al eliminar la marca" });
  }
}

module.exports = {
  getAllBrands,
  createBrand,
  updateBrand,
  deleteBrand,
};
