// let config = {
//     entry:'./src/home/index.js',
//     output:{
//         filename:'home/helloworld.js',
//         path:'/docs'
//     }
// }

// // split('/')  home/helloworld.js  ['home','helloworld.js']

// function Webpack(config){
//     this.config = config;
// }

// Webpack.prototype.compile = function(){
//     let { entry,output } = this.config;
//     let { filename,path } = output;
//     let [dir,file] = filename.split('/');
//     //let [username,usernam2] = ['xiaoming','xiaohong']
//     var str = `// 将${entry}中的代码打包到${path}/${dir}/文件夹中，
//     //文件名称叫${file}`
//     console.log(str)
// }

// const webpack = new Webpack(config);
// webpack.compile();


