Library.load({"js/animate.js":["Graphics"]});var SplitPane=function(a){this.autosize=a;addEvent(window,"load",this.init);window.splitPaneObj=this};SplitPane.MSIE=navigator.userAgent.indexOf("MSIE")>=0;SplitPane.prototype={repaint:function(){if(navigator.userAgent.indexOf("MSIE 6")>=0){this.init()}},init:function(){window.splitPaneObj.updateTree();var e=document.getElementsByTagName("TD");for(var c=0;c<e.length;c++){var d=e[c].className+" ";if(d.indexOf("splitpane-vdivider")!=-1){e[c].style.padding="0px";e[c].style.margin="0px";e[c].style.zIndex="1000";e[c].style.cursor=SplitPane.MSIE?"col-resize":"e-resize";e[c].divider="vertical";e[c].dividerWidth=e[c].offsetWidth;e[c].containerWidth=Graphics.findWidth(e[c].parentNode);var b=previousSibling(e[c]);var a=nextSibling(e[c]);if(b&&a){e[c].pTd=b;e[c].nTd=a;e[c].onmousedown=function(k){this.mouseOffset=Graphics.mousePosition(k||window.event);this.startX=Graphics.findX(this);this.containerWidth=Graphics.findWidth(this.parentNode);if(this.containerWidth==0){var j=document.getElementById("splitpane");this.containerWidth=j.offsetWidth}this.dWidth=(this.dividerWidth/this.containerWidth)*100;this.style.width=this.dWidth+"%";this.pTd.minWidth=this.pTd.style.minWidth?this.pTd.style.minWidth.replace(/px/g,""):this.pTd.offsetWidth;this.pTd.maxWidth=this.pTd.style.maxWidth?this.pTd.style.maxWidth.replace(/px/g,""):this.containerWidth;this.nTd.minWidth=this.nTd.style.minWidth?this.nTd.style.minWidth.replace(/px/g,""):this.nTd.offsetWidth;this.nTd.maxWidth=this.nTd.style.maxWidth?this.nTd.style.maxWidth.replace(/px/g,""):this.containerWidth;var h=this.pTd.minWidth-this.pTd.offsetWidth;var i=this.nTd.offsetWidth-this.nTd.maxWidth;this.moveableLeft=h>i?h:i;var g=this.pTd.maxWidth-this.pTd.offsetWidth;var f=this.nTd.offsetWidth-this.nTd.minWidth;this.moveableRight=g<f?g:f;this.pTd.startWidth=this.pTd.offsetWidth;this.nTd.startWidth=this.nTd.offsetWidth;window.splitPaneObj.dragObject=this;addEvent(document,"mousemove",window.splitPaneObj.mouseMove);addEvent(document,"mouseup",window.splitPaneObj.mouseUp)}}}}},mouseMove:function(g){var d=Graphics.mousePosition(g||window.event);var f=window.splitPaneObj.dragObject;if(f){if(f.divider=="vertical"&&d.x!=f.mouseOffset.x){window.splitPaneObj.beforeDrag();var h=d.x-f.startX;if((h<f.moveableLeft&&f.moveableLeft!=0)||(h>f.moveableRight&&f.moveableRight!=0)){window.splitPaneObj.updateTree();return false}var a=(((f.pTd.startWidth+h)/f.containerWidth)*100);a=(a<0?0:a);var b=a-f.dWidth;var c=(100-f.dWidth)-a;f.pTd.style.width=(b<0?0:b)+"%";f.nTd.style.width=(c<0?0:c)+"%";window.splitPaneObj.updateTree()}}return false},mouseUp:function(a){window.splitPaneObj.dragObject=null;removeEvent(document,"mousemove",window.splitPaneObj.mouseMove);removeEvent(document,"mouseup",window.splitPaneObj.mouseUp)},beforeDrag:function(){var a=document.getElementById("tabs");a.style.width="0px";a.style.visibility="hidden"},updateTree:function(){var a=document.getElementById("splitpane-first");var c=document.getElementById("tabs");var e=parseInt(a.offsetWidth)-5;var d=parseInt(a.style.minWidth.replace(/px/g,""))-5;var b=e;if(b>d){c.style.width=b+"px"}else{c.style.width=d+"px"}c.style.visibility="visible"}};var splitPane=new SplitPane(false);window.addEventListener("resize",function(b){var e=document.getElementById("splitpane-first");if(e.style.visibility!="hidden"){var h=document.getElementById("splitpane-second");var f=document.getElementById("splitpane");var c=document.getElementById("tabs");var i=parseInt(f.offsetWidth);var d=parseInt(c.offsetWidth);var g=d/i*100;var a=100-g;e.style.width=g+"%";h.style.width=a+"%"}});