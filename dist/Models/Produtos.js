const produtos = (sequelize, DataTypes) => {
    const Produtos = sequelize.define('Produtos', {
        nomeProduto: {
            type: DataTypes.STRING
        },
        fabricante: {
            type: DataTypes.INTEGER
        },
        quantidadeEmEstoque: {
            type: DataTypes.INTEGER
        },
        valor: {
            type: DataTypes.FLOAT
        }
    }, {
        tableName: 'Produtos'
    });
    return Produtos;
};
module.exports = produtos;
//# sourceMappingURL=Produtos.js.map