window.onload=function(){

    var leftIn=document.getElementById('left-in');
    var rightIn=document.getElementById('right-in');
    var leftOut=document.getElementById('left-out');
    var rightOut=document.getElementById('right-out');
	var leftInput=document.getElementById('word');
	var ul=document.getElementById('list');
	var li=ul.getElementsByTagName('li');
	
	//点击左侧入添加一个子节点
	leftIn.onclick=function(){
		 
		 var ul=document.getElementById('list');
		 var li=ul.getElementsByTagName('li')[0];
	     var para=document.createElement('li');
	     var cla=li.getAttribute('class');
	     para.innerHTML=leftInput.value;
	     para.setAttribute('class',cla);
	     ul.insertBefore(para,li);
         }
    
    //点击右侧入添加一个子节点
	rightIn.onclick=function(){
		 
		 var ul=document.getElementById('list');
		 var li=ul.getElementsByTagName('li')[0];
	     var para=document.createElement('li');
	     var cla=li.getAttribute('class');
	     para.innerHTML=leftInput.value;
	     para.setAttribute('class',cla);
	     ul.appendChild(para);
         }
    
    //点击左侧出删除一个子节点
    leftOut.onclick=function(){
    	 
    	 var ul=document.getElementById('list');
    	 var li=ul.getElementsByTagName('li')[0];
         ul.removeChild(li);
    }

    //点击右侧出删除一个子节点
    rightOut.onclick=function(){
    	 
    	 var ul=document.getElementById('list');
    	 var li=ul.getElementsByTagName('li');
    	 var li=ul.getElementsByTagName('li')[li.length-1];
         ul.removeChild(li);
    }

    //为每一个数据块添加点击事件
    for(var i=1;i<li.length;i++){
    	 li[i].onclick=function(){
    	 	ul.removeChild(this);
    	 }
    }
    
} 
