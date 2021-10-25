export default class Transpan{
    constructor(){

    }
    exce(item){
        console.log(item);
        console.log('动画动起来了');
        item.classList.add('change2');
        let addevent = function(){
            item.classList.remove('change2');
            item.removeEventListener('animationend',addevent);
        }
        item.addEventListener('animationend',addevent);
    }

    // load(){
    //     if(this.type == 'translate'){
    //         this.module = new TranList();
    //         this.module.exce(this.el);
    //     }
    // }
}