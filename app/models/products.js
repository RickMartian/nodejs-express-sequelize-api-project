module.exports = (sequelize, DataTypes) => {

    const Products = sequelize.define('Products', {
        name: DataTypes.STRING,
        quantity: DataTypes.STRING
    });

    return Products;

}