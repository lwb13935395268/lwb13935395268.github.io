import rount from './rount'
// import { runtime } from 'webpack';
// import { doc } from 'prettier';
// import Animate from '../../assets/js/Ani';
// import TranList from '../../assets/js/TranList';
// import Transpan from '../../assets/js/Transpan';
// new Ani(new Tlist({
//     targets: [
//         {
//             el: document.querySelector('.h1'),
//             animationClassName: 'change1'
//         },
//         {
//             el: document.querySelector('.h2'),
//             animationClassName: 'change1'
//         },
//         {
//             el: document.querySelector('.h3'),
//             animationClassName: 'change1'
//         }
//     ],
//     num:2
// }))


// var ani = new Ani({
//     el:document.querySelector('.h1'),
//     model:new TranList()
// })

// ani.run();

// 作业二： 
// let animate = new Ani({
//     el:document.querySelector('.h1'),
//     type:'translate',
// })
// animate.load();

// 作业三： 
// Animate.create({  
//     type:'translate',
// }).mount(document.querySelector('.h1'))

//作业四
// Animate.create().use(TranList).mount(document.querySelector('.h1'));

// let animate = Animate.create().use(TranList).mount(document.querySelector('.h1'));
// let animate2 = Animate.create().use(Transpan).mount(document.querySelector('.h1'));

//articles
var ocen = document.querySelector('.n-center');
var ohead = document.querySelector('.header1');
String.prototype.ellipse = function(num){
    if(this.length>num){
        var hide = this.substr(0,num);
        hide +='...'+document.querySelector('.select');
        return hide;
    }else{
        return this;
    }
}

rount.forEach(article => {
    var cloneNode = ohead.cloneNode(true);
    // cloneNode.querySelector('.h1').innerHTML = article.title;
    cloneNode.querySelector('.texts').innerHTML = article.article.ellipse(100);
    cloneNode.querySelector('.texts').querySelector('h2').dataset.id = article.id;
    cloneNode.querySelector('.texts').querySelector('h2').onclick = function(e){
        window.location.href = '../articleDetails.html?type='+e.target.dataset.id;
    }
    cloneNode.querySelector('.select').onclick=function(){
        var hiddentext=article.article+= document.querySelector('.hiddentext');
        cloneNode.querySelector('.texts').innerHTML=hiddentext;
        cloneNode.querySelector('.hiddentext').onclick=function(){
            cloneNode.querySelector('.texts').innerHTML=article.article.ellipse(100);
        }
    }
    ocen.appendChild(cloneNode);
})

    /**
     * @description 截取字符串,超出...
     * @param el: 元素
     * @param textCount : 字符串截取长度 number类型;
     * @param findAllButtonText: 非必填项,默认为'查看全部'
     * @param showFindAllButton :非必填项,是否显示'查看全部'按钮,默认为false
     * **/
    
    //  let ellipsis = new Ellipsis({
    //     el:document.querySelector('.texts'),
    //     textCount:30,
    //     findAllButtonText:"查看所有",
    //     showFindAllButton:true
    // })
    
    // ellipsis.exec();