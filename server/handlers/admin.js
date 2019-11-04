const connection = require('../db');

const admin = (req, res) => {
    const sql = 'SELECT categoryID, categoryName, picture FROM categories'
    connection.query(sql, (err, result) => {
        if (err) throw err;
        const categoriesName = result.map(r => r.categoryName)
        res.json(categoriesName)
    });
}

const addProducts = (req, res) => {
    const productCategory = {
        "milk": 1,
        "bread": 2,
        "drink": 3,
        "candies": 4
    }
    req.body.map(p => p.category = productCategory[p.category])
    // console.log('11', req.body)
    // let category = productCategory[req.body.category]
    let sql = '';
    for (let i = 0; i < req.body.length; i++) {
        sql += `INSERT INTO products(productName, categoryID, description, picture, unitPrice, UnitsInStock)
        VALUES
        ('${req.body[i].productName}', ${req.body[i].category}, '${req.body[i].description}','${req.body[i].picture}',${req.body[i].unitPrice},${req.body[i].unitsInStock});`
    }
    console.log('14', sql)
    // const sql = `INSERT INTO products(productName, categoryID, description, picture, unitPrice, UnitsInStock)
    // VALUES
    // ('${req.body.productName}', ${category}, '${req.body.description}','${req.body.picture}',${req.body.unitPrice},${req.body.unitsInStock})`
    // products.push(sql)
    // console.log('pro', products)
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result)
    });
}

module.exports = { admin, addProducts }