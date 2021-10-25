// import TranList from "./TranList";
// import Transpan from "./Transpan";
// export default class Animation{
//     constructor(parse){
//         this.parse = parse;
//     }
//     run(){
//         this.parse.animation(this.parse.animation(this.newArr));
//     }
// }

// export default class Animation{
//     constructor(parse){
//         this.el = parse.el;
//         // this.animation = {'module' : new TranList};
//         this.type = parse.type;
//         console.log(this.type);
//     }
//     // run(){
//     //     this.animation['module'].exce(this.el);
//     // }
//     load(){
//         let obj = {
//             'translate' : new TranList(),
//             'transpan' : new Transpan()
//         }

//         obj[this.type].exce(this.el);
//     }

//     static create(type){
//         return new Animation(type);
//     }
//     mount(ele){
//         // console.log(ele);
//         this.el = ele;
//         this.load();
//     }
// }

// export default class Animate{
//     constructor(){
//         // console.log(props);
//         // this.el = props.el;
//         // this.type = props.type;
//     }
//     static create(){
//         return new Animate();
//     }
//     use(TranList){
//         try{
//             this.model = TranList.install();
//         }catch(e){
//             TranList;
//         }
//         return this;
//     }
//     mount(el){
//         this.model.exec(el);
//     }
// }

export default class Animate {
    static el;
    static model;
    constructor(prims) {
        this.el = Animate.el;
        this.model = Animate.model
    }
    static create() {
        return new Animate();
    }
    use(TranList) {
        try {
            this.model = TranList;
        } catch (e) {
            TranList;
        }
        return this;
    }
    mount(pass) {
        this.model = pass;
        this.TranList.model().exce();
    }
}