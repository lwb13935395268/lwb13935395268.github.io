// let config = {
//     entry: './src/home/index.js',
//     output: {
//         filename: 'home/helloworld.js',
//         path: '/docs'
//     }
// }

// function Webpack(config) {
//     this.config = config;
// }

// Webpack.prototype.compile = function () {
//     let { entry, output } = this.config;
//     let { filename, path } = output;
//     let [dir, file] = filename.split('/');
//     var str = `// 将${entry}中的代码打包到${path}/${dir}/文件夹中，
//     //文件名称叫${file}`
//     console.log(str)
// }

// const webpack = new Webpack(config);
// webpack.compile();


let configs ={
    entry: {
        home: './src/home/home.js',
        index: './src/index/index.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: '/docs'
    }
}

function pass (configs){
    this.configs = configs;
}
pass.prototype.compile = function (){
    let { entry, output } = this.configs;
    for(key in entry){
        var sj = parseInt(Math.random()*8999+1000);
        var strs =  ` 将${entry[key]}中的代码打包到${output.path}/文件夹中，
             文件名称叫${key}.${sj}.js`
        console.log(strs)
    }
}

const Pass = new pass(configs);
Pass.compile();

