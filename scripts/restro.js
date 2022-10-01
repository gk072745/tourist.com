

let jacksapprow=[
    {
      src: "https://media-cdn.tripadvisor.com/media/photo-i/25/9f/10/27/syrah.jpg",
      price:2500,
      name: "Syrah",
    },
    {
        src: "https://media-cdn.tripadvisor.com/media/photo-i/1c/c3/12/3d/grilled-cheese-and-bellpepper.jpg",
        price:1500,
        name: "Mosaic",
    },
    {   
      src: "https://media-cdn.tripadvisor.com/media/photo-i/11/77/89/99/photo4jpg.jpg",
      price:3500,
      name: "TK's Oriental Grill",
    },
    {
        src: "https://media-cdn.tripadvisor.com/media/photo-i/25/9f/10/27/syrah.jpg",
        price:2300,
        name: "Syrah",
      },
      {
          src: "https://media-cdn.tripadvisor.com/media/photo-i/1c/c3/12/3d/grilled-cheese-and-bellpepper.jpg",
          price:1400,
          name: "Mosaic",
      },
      {   
        src: "https://media-cdn.tripadvisor.com/media/photo-i/11/77/89/99/photo4jpg.jpg",
        price:2400,
        name: "TK's Oriental Grill",
      },
      {
        src: "https://media-cdn.tripadvisor.com/media/photo-i/25/9f/10/27/syrah.jpg",
        price:2900,
        name: "Syrah",
      },
      {
          src: "https://media-cdn.tripadvisor.com/media/photo-i/1c/c3/12/3d/grilled-cheese-and-bellpepper.jpg",
          price:2800,
          name: "Mosaic",
      },
      {   
        src: "https://media-cdn.tripadvisor.com/media/photo-i/11/77/89/99/photo4jpg.jpg",
        price:2700,
        name: "TK's Oriental Grill",
      },
      {
        src: "https://media-cdn.tripadvisor.com/media/photo-i/25/9f/10/27/syrah.jpg",
        price:2800,
        name: "Syrah",
      },
      {
          src: "https://media-cdn.tripadvisor.com/media/photo-i/1c/c3/12/3d/grilled-cheese-and-bellpepper.jpg",
          price:2850,
          name: "Mosaic",
      },
      {   
        src: "https://media-cdn.tripadvisor.com/media/photo-i/11/77/89/99/photo4jpg.jpg",
        price:2970,
        name: "TK's Oriental Grill",
      },
      {
        src: "https://media-cdn.tripadvisor.com/media/photo-i/25/9f/10/27/syrah.jpg",
        price:2370,
        name: "Syrah",
      },
      {
          src: "https://media-cdn.tripadvisor.com/media/photo-i/1c/c3/12/3d/grilled-cheese-and-bellpepper.jpg",
          price:2240,
          name: "Mosaic",
      },
      {   
        src: "https://media-cdn.tripadvisor.com/media/photo-i/11/77/89/99/photo4jpg.jpg",
        price:2340,
        name: "TK's Oriental Grill",
      },
      {
          src: "https://media-cdn.tripadvisor.com/media/photo-i/25/9f/10/27/syrah.jpg",
          price:2590,
          name: "Syrah",
        },
        {
            src: "https://media-cdn.tripadvisor.com/media/photo-i/1c/c3/12/3d/grilled-cheese-and-bellpepper.jpg",
            price:2990,
            name: "Mosaic",
        },
        {   
          src: "https://media-cdn.tripadvisor.com/media/photo-i/11/77/89/99/photo4jpg.jpg",
          price:2900,
          name: "TK's Oriental Grill",
        },
        {
          src: "https://media-cdn.tripadvisor.com/media/photo-i/25/9f/10/27/syrah.jpg",
          price:3240,
          name: "Syrah",
        },
        {
            src: "https://media-cdn.tripadvisor.com/media/photo-i/1c/c3/12/3d/grilled-cheese-and-bellpepper.jpg",
            price:2770,
            name: "Mosaic",
        },
        {   
          src: "https://media-cdn.tripadvisor.com/media/photo-i/11/77/89/99/photo4jpg.jpg",
          price:2880,
          name: "TK's Oriental Grill",
        },
        {
          src: "https://media-cdn.tripadvisor.com/media/photo-i/25/9f/10/27/syrah.jpg",
          price:2970,
          name: "Syrah",
        },
        {
            src: "https://media-cdn.tripadvisor.com/media/photo-i/1c/c3/12/3d/grilled-cheese-and-bellpepper.jpg",
            price:4100,
            name: "Mosaic",
        },
        {   
          src: "https://media-cdn.tripadvisor.com/media/photo-i/11/77/89/99/photo4jpg.jpg",
          price:4360,
          name: "TK's Oriental Grill",
        },
      
  ]

function renderdom(){
    let shopitems=document.getElementById("shop_items");
    shopitems.innerHTML = null;
     jacksapprow.forEach((el)=>{
     let div=document.createElement("div");
     let img=document.createElement("img");
     img.src=el.src;
     let p1=document.createElement("p");
     p1.innerText=el.price;
     let p2=document.createElement("p");
     p2.innerText=el.name;
     div.append(img,p1,p2);
     shopitems.append(div);
    });
   
}


renderdom();


 