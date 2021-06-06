const path = require('path')

module.exports = {
    module : {
        rules : [
            {
                test : /\.scss$/,
                loader : ['sass-loader'],
                include : path.resolve(__dirname,"../")
            }
        ]
    }
}