import prisma from "../db";

// get all products
export const getProduct = async (req, res) => {
  const userId = req.user.id;
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      products: true, // joining the tables ( for mongo db population)
    },
  });

  return res.json({ data: user.products });
};

// get one product
export const getOneProduct = async (req, res) => {
  const product = await prisma.product.findUnique({
    where: {
      id: req.params.id,
      belongsToId: req.user.id,
    },
  });

  res.json({ data: product });
};

export const createProduct = async (req, res, next) => {
  try {
    const product = await prisma.product.create({
      data: {
        name: req.body.name,
        belongsToId: req.user.id,
      },
    });

    res.json({
      data: product,
    });
  } catch (e) {
    next(e);
  }
};

export const updateProduct = async (req, res) => {
  const updated = prisma.product.update({
    where: {
      id_belongsToId: {
        id: req.params.id,
        belongsToId: req.user.id,
      },
    },
    data: {
      name: req.body.name,
    },
  });

  res.json({
    data: updated,
  });
};

export const deleteProduct = async (req, res) => {
  const deletedProduct = await prisma.product.delete({
    where: {
      id_belongsToId: {
        id: req.params.id,
        belongsToId: req.user.id,
      },
    },
  });

  res.json({
    data: deletedProduct,
  });
};
