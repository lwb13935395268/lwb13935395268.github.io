// var s = `
//     # hello world
//     ## 我是h2标签
//     ### 我是h3标签
//     #### 我是h4标签
//     ##### 我是h5标签
//     ###### 我是h6标签
// `;

// // let res = s.replace(/(#+\s+)|\S+|\n+/g,function(item){
// //     console.log(item);
// //     return item;
// // })

// let res = s.match(/(#+\s*)|\S+|\n/g);
// console.log(res);

// let textCount = document.querySelector('article').innerHTML;
// console.log(textCount);
// let text = textCount.match(/(#+\s*)|\S+/g);
// console.log(text);
// let hs = [];
// let content = [];
// var oDiv= document.createElement('div');
// for(let i = 0; i < text.length;i++){
//     if(i % 2== 0){
//         let h=document.createElement('h'+(text[i].length-1));
//         hs.push(h);
//     }else{
//         content.push(text[i]);
//     }   
// }
// console.log(hs);
// console.log(content);
// hs.forEach((item,index) =>{
//     item.innerText = content[index]
//     console.log(item);
//     oDiv.appendChild(item);
// });
// document.querySelector('article').innerHTML= '';
// document.querySelector('article').appendChild(oDiv);

// class Markdown {
//     constructor(props) {
//         this.el = typeof props == 'string' ? props : props.el.innerHTML;
//     }
//     parseHtml() {
//         let res = this.el.match(/(#+\s*)|\S+|\n/g);
//         console.log(res);
//         res = res.join('').trim().split('\n');
//         console.log(res);
//         res.forEach(element => {
//             let arr = element.split(' ');
//             let hs = document.createElement('h' + arr[0].length);
//             hs.innerText = arr[1];
//             document.querySelector('article').appendChild(hs);
//         })
//     }
// }
// let md = new Markdown({
//     el: document.querySelector('article')
// });
// let res = md.parseHtml();


// var deptData = [
// {
//     deptName:'某某公司',
//     type:2
// },
// {
//     deptName:'子公司',
//     type:4
// },
// {
//     deptName:'子子部门',
//     type:5
// }
// ]
// var a = '2->4，5'; 
// var resu = format() // 某某公司->子公司，子子部门

// function format(){
// //首先把数字放在数组里面
// let numArr = [];
// let strArr = [];
// let str = '';
// a.replace(/\d/g,function(item){
//     numArr.push(item);
// })
// //运用replace来看其他的
// a.replace(/\D+/g,function(item){
//     strArr.push(item);
// })

// for (let i = 0; i < deptData.length; i++) {
//             if (deptData[i].type = numArr[i]) {
//                 if (strArr[i]) {
//                     str += deptData[i].deptName + strArr[i];
//                 } else {
//                     str += deptData[i].deptName;
//                     continue;
//                 }
//             }
//         }
      
// return str;
// }
// console.log(resu);


// //第三个作业;
// var text = '{{ username }}';
// // username是一个变量  用正则匹配到 username
// let resStr = text.replace(/[^{}\n\s]\S+/g,function(item){
// console.log(item);
// });
// var reg1 = /\s/;

// var str = 'hello';
// var str = new String('hello');
// class Markdown{
//     constructor(text){
//         this.text = text;
//     }
//     parse(){
//         return this.parseHtml(this.text);
//     }
//     parseHtml(text){
        // let reg = /(#+)\s+([^\n]+)/;
        // let flag = false;   
        // let res = text.replace(reg,function(item){
        //     console.log(item);
        //     flag = true;
        //     let n = RegExp.$1.length > 6 ? 6 : RegExp.$1.length;  // 1-6个#号；
        //     let textConent = RegExp.$2;
        //     return `<h${n}>${textConent}</h${n}>`;
        // })
        // if(flag){
        //     res = this.parseHtml(res);
        // }
        // return res;

//         let arr = text.split('/n');
//         arr.shift();
//         arr.pop();

//     }
// }
class Markdown{
    constructor(popar){
        this.popar = popar.el;
        this.arr = [];
        this.exec();
    }
    exec(){
        var res = this.popar.match(/(#*|\S+)\s+\S+\n/g);
        var num = 0;
        res.forEach(element => {
            if(/#+/.test(element)){
                num++;
                num = num > 6 ? 6 : num;
                var h = `<h${num}>${element.split(' ')[1] == '' ? element.split(' ')[1] = element.split(' ')[2].trim() : element.split(' ')[1].trim()}</h${num}>`;
                this.arr.push(h);
            }else{
                var p = `<p>${element.trim()}</p>`;
                this.arr.push(p);
            }
        });
    }
}

var el = document.querySelector('article');
let h = el.h;
let md = new Markdown(el.h);
let res = md.parse();
el.innerHTML = res;

// function format(){
//     return a.replace(/\d+/g,function(item){
//         return deptData.filter(data=>{
//             return data.type == item;
//         })[0].deptName;
//     })
// }

// var a = /(?<=\{\{\s*)\S+(?=\s*\)}}/
