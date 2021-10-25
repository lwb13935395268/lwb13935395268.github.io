import '../css/Ani.css'
import Animate from '../../assets/js/Ani'

// export default class TranList {
//     constructor(parse){
//         this.parse = parse;
//         this.newArr = this.parse.targets.slice();
//         this.animation(this.newArr);
//     }


// animation(arr) {
//         if (!arr.length) {
//             this.num--;
//             this.newArr = this.parse.slice();
//             if(this.num){
//                 this.animation(this.newArr);
//             } else {
//                 return;
//             }
//         } else {
//             var arr1 = arr.shift();
//             var tis = this;
//             arr1.el.classList.add(arr1.animationClassName);
//             const handleEventListener = function (e){
//                 arr1.el.classList.remove(arr1.animationClassName);
//                 tis.animation(arr);
//                 arr1.el.removeEventListener('animationend',handleEventListener);
//             }
//             arr1.el.addEventListener('animationend',handleEventListener);
//         }
//     }


// animation(arr) {
//     var _this = this;
//     if(!arr.length)return;
//     var arr1 = arr.shift();
//     arr1.el.classList.add(arr1.animationClassName);
//     arr1.el.addEventListener('animationstart',function(){
//         setTimeout(() => {
//             _this.animation(arr);
//         }, 0);
//     })
// }
// }

// export default class TranList{
//     constructor(){

//     }
//     exce(item){
//         console.log(item);
//         console.log('动画动起来了');
//         item.classList.add('change1');
//         let addevent = function(){
//             item.classList.remove('change1');
//             item.removeEventListener('animationend',addevent);
//         }
//         item.addEventListener('animationend',addevent);
//     }

//     load(){
//         if(this.type == 'translate'){
//             this.module = new TranList();
//             this.module.exce(this.el);
//         }
//     }

// }


//作业五：
export default class TranList extends Animate {
    constructor() {
        super();
    }
    exec() {
        this.el.classList.add('change1');
    }
}
