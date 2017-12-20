window.onload=function(){
        var btns=document.getElementsByTagName("span");
        var divs=document.getElementById("bottom").getElementsByTagName("div");
        for(var i=0;i<btns.length;i++){
            btns[i].index=i;//此处为难点，意思是给每一个按钮设置一个index属性
            btns[i].onclick= function () {
                //清空所有的按钮和div的类
                for(var j=0;j<btns.length;j++){
                    btns[j].className='';
                    divs[j].className='';
                }
                //把当前的按钮和对应的div的class设置成对应格式
                this.className="action";
                divs[this.index].className="show";//this.index=btns[i].index 记录了当前点击按钮的索引值
            }
        }
    }