window.onload=function(){
        var btns=document.getElementById("top").getElementsByTagName("span");
        var divs=document.getElementById("bottom").getElementsByTagName("div");
//      console.log(btns);
//      console.log(divs);
		//banner img check
		// btns[i].onclick = function(){

        for(var i=0;i<btns.length;i++){
//          console.log(i);

            btns[i].index=i;//此处为难点，意思是给每一个按钮设置一个index属性
            btns[i].onclick= function () {
                //清空所有的按钮和div的类
               /* if (i === 0){
                    $('#user-post-detail').attr("src","img/user/detail(2).png");
                    $('#user-post-like').attr("src","img/user/like.png");
                }
                if (i === 1){}{
                    $('#user-post-like').attr("src","img/user/like(2).png");
                    $('#user-post-detail').attr("src","img/user/detail.png");
                }*/
                console.log(btns)
                // console.log("btns");
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
function changeImg1(){
    $('#user-post-detail').attr("src","img/user/detail(2).png");
    $('#user-post-like').attr("src","img/user/like.png");


}
function changeImg2(){
    $('#user-post-like').attr("src","img/user/like(2).png");
    $('#user-post-detail').attr("src","img/user/detail.png");

}