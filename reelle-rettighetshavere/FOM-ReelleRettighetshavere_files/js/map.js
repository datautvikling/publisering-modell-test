var MC=function(){};MC.Map=function(){};MC.Map.prototype={entry:new Array(),Entry:function(A,B){this.key=A;this.value=B;this.toString=function(){return"["+A+","+B+"]"}},size:function(){return this.entry.length},indexOf:function(B){var A=this.size();var C=Number(arguments[1])||0;C=C<0?Math.ceil(C):Math.floor(C);if(C<0){C+=A}for(;C<A;C++){if(C in this.entry&&this.entry[C].key===B){return C}}return -1},put:function(B,C){var A=this.indexOf(B);if(A>=0){this.entry[A]=new this.Entry(B,C)}else{this.entry.push(new this.Entry(B,C))}},get:function(B){var A=this.indexOf(B);if(A>=0){return this.entry[A].value}return null},remove:function(B){if(typeof B=="number"){return this.entry.splice(B,1)}else{var A=this.indexOf(B);if(A>=0){return this.entry.splice(A,1)}}return null},keySet:function(){var B=new Array();var C=0;var A=this.size();for(;C<A;C++){B.push(this.entry[C].key)}return B},values:function(){var B=new Array();var C=0;var A=this.size();for(;C<A;C++){B.push(this.entry[C].value)}return B},entrySet:function(){return this.entry},containsKey:function(A){return this.indexOf(A)>=0},clear:function(){entry=new Array()}};