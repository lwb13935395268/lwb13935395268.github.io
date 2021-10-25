import rount from '../home/rount';
class Url{
    constructor(url){
        this.url = url;
        this.json={};
        this.keyArr=[];
        this.exec();
    }

    exec(){
        console.log(this.url);
        if(typeof this.url =='object')return;
        let str = this.url.substring(1);
        this.keyArr = str.split("&");
        this.keyArr.forEach(item=>{
            let tempArr = item.split('=');
            this.json[tempArr[0]] = tempArr[1];
        })
        console.log(this.json);
    }

    get(name){
        return this.json[name];
    }
    parse(){
        var arr = [];
        var str = '';
        for(const key in this.url){
            arr.push(key+'='+this.url[key]);
        }
        for(let i = 0;i<arr.length;i++){
            str+=arr[i]+'&';
        }
        str = str.substring(0,str.length-1);
        console.log(str);
    }
}
var url1 = new Url(window.location.search);
rount.forEach(item=>{
    if(item.id == url1.json.type){
        document.querySelector('.texts').querySelector('p').innerHTML = item.article;
    }
})
url1.get('type'); //1
url1.get('id'); //2
url1.get('name'); //xiaoming

// var params = {
//     type:'1',
//     id:'1',
//     name:'xiaoming'
// }

// var url2 = new Url(params);
// url2.params();

