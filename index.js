

let url0="https://js202-mock-server.herokuapp.com/api/data0";
let url1="https://js202-mock-server.herokuapp.com/api/data1";
let url2="https://js202-mock-server.herokuapp.com/api/data2";
let url3="https://js202-mock-server.herokuapp.com/api/data3";
let page1=1;
let page2=1;
let page3=1;
let page4=1;

let getdata0=async()=>{
 try{
  let res=await fetch(`${url0}?_page=${page1}&_limit=4`);
  res=await res.json();
  renderdom0(res);
 
 }
 catch(err){
  console.log(err);
 }
}
getdata0();
let getdata1=async()=>{
  try{
   let res=await fetch(`${url1}?_page=${page2}&_limit=4`);
   res=await res.json();
   renderdom1(res);
  
  }
  catch(err){
   console.log(err);
  }
 }
 getdata1();
 let getdata2=async()=>{
  try{
   let res=await fetch(`${url2}?_page=${page3}&_limit=4`);
   res=await res.json();
   renderdom2(res);
  
  }
  catch(err){
   console.log(err);
  }
 }
 getdata2();
 let getdata3=async()=>{
  try{
   let res=await fetch(`${url3}?_page=${page4}&_limit=4`);
   res=await res.json();
   renderdom3(res);
  
  }
  catch(err){
   console.log(err);
  }
 }
 getdata3();


let renderdom0=(data)=>{
let container0=document.getElementById("cube00");
container0.innerHTML=null;
data.forEach((el)=>{
  let card=document.createElement("div");
  let img=document.createElement("img");
  img.src=el.src;
  let p1=document.createElement("h2");
  p1.innerText=el.keSJi;
  let p2=document.createElement("p");
  p2.innerText=el.yyzcQ;
  let p3=document.createElement("p");
  p3.innerText=el.biGQs;
  
  card.append(img,p1,p2,p3);
  container0.append(card);
});

console.log(data);
}
let renderdom1=(data)=>{
  let container1=document.getElementById("cube10");
  container1.innerHTML=null;
  data.forEach((el)=>{
    let card=document.createElement("div");
    let img=document.createElement("img");
    img.src=el.src;
    let p1=document.createElement("h3");
    p1.innerText=el.keSJi;
    let p2=document.createElement("p");
    p2.innerText=el.yyzcQ;
    let p3=document.createElement("h4");
    p3.innerText=el.biGQs;
    
    card.append(img,p1,p2,p3);
    container1.append(card);
  });
  
  console.log(data);
}
let renderdom2=(data)=>{
    let container2=document.getElementById("cube20");
    container2.innerHTML=null;
    data.forEach((el)=>{
      let card=document.createElement("div");
      let img=document.createElement("img");
      img.src=el.url;
      let p1=document.createElement("h2");
      p1.innerText=el.keSJi;
      let p2=document.createElement("h3");
      p2.innerText=el.yyzcQ;
      let p3=document.createElement("p");
      p3.innerText=el.biGQs;
      
      card.append(img,p1,p2,p3);
      container2.append(card);
    });
    
    console.log(data);
}
let renderdom3=(data)=>{
      let container3=document.getElementById("cube30");
      container3.innerHTML=null;
      data.forEach((el)=>{
        let card=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.src;
        let p3=document.createElement("h1");
        p3.innerText=el.biGQs;
        
        card.append(img,p3);
        container3.append(card);
      });
      
      console.log(data);
}







let next1=async()=>{
  if(page1>3)
  {
    return;
  }
  page1++;
  getdata0();
}
let previous1=async()=>{
  if(page1<1)
  {
    return;
  }
  page1--;
  getdata0();
}


let next2=async()=>{
  if(page2>3)
  {
    return;
  }
  page2++;
  getdata1();
}
let previous2=async()=>{
  if(page2<1)
  {
    return;
  }
  page2--;
  getdata1();
}


let next3=async()=>{
  if(page3>3)
  {
    return;
  }
  page3++;
  getdata2();
}
let previous3=async()=>{
  if(page3<1)
  {
    return;
  }
  page3--;
  getdata2();
}


let next4=async()=>{
  if(page4>3)
  {
    return;
  }
  page4++;
  getdata3();
}
let previous4=async()=>{
  if(page4===0)
  {
   return;
  }
  page4--;
  getdata3();
}













