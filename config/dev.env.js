'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    TOKEN: '"123456789"'
    // TOKEN:'"a9b17aef-7446-417e-9c49-623957632983"'
})
