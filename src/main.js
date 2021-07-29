let html = document.querySelector('#html')
let style = document.querySelector('#style')
let string = 
`/*你好，我是一名前端新人
接下我要展示前端功底了
首先要准备一个div*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/* 接下来我吧div变成一个八卦图
 * 注意看好了
 *首先，把 div 变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦是阴阳形成的
 *一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 
    0%, rgba(255,255,255,1) 50%, rgba(0,
    0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*阴阳鱼*/
#div1::before {
    width:100px;
    height:100px;
    
    top:0;
    left:50%;
    transform: translateX(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, 
        rgba(255,255,255,1) 0%, rgba(255,255,255,1) 
        25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
  }
#div1::after {
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform: translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 0%, 
    rgba(0,0,0,1) 25%, rgba(249,249,249,1) 25%, 
    rgba(255,255,255,1) 100%);
  }
`

;
let string2 = "";

let n = 0;


let step = ()=>{
    setTimeout(()=>{
     
       string[n] === '\n' ? string2 += '<br>':string[n] ===' '? string2 += '&nbsp': string2 += string[n];
    //    string2 += string[n] === '\n' ? '<br>': string[n];//不是回车就继续搬，是的话就加<br>换行
       html.innerHTML = string2;
       style.innerHTML = string.substring(0, n);
       if(n < string.length-1){
        n += 1;
        window.scroll(0,99999)
        html.scroll(0,99999)
        step();//循环延时的关键
       }
       
       
    }, 20)
}
step();
// setInterval(()=>{
//     n = n+1
//     demo.innerHTML = n;
// }, 1000);
