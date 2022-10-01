let searchdata=()=>
{
    let div=document.getElementById("search_location_search_bar_container");
    div.style.borderRadius="10px 10px 0px 0px";
    div.style.boxShadow="none";
    div.style.borderBottom="2px solid black"
    let nearbydiv=document.getElementById("search_location_search_bar_mega_container_child_one")
    nearbydiv.style.display="block";
    nearbydiv.style.display="flex"
    let megacont=document.getElementById("search_location_search_bar_mega_container")
    megacont.style.backgroundColor="#ffffff"
    megacont.style.borderRadius="10px"
    megacont.style.zIndex="20";
    let image=document.getElementById("search_location_image");
    image.style.color="white"
    image.style.opacity="0.2"
}
// geting data from api

const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f5ff8f3b73msh66d41967f11035cp14257djsn62fcad3d29ae",
      "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
    },
  };
let getdata=async()=>
{
        let city_name = document.getElementById("search_location_search_bar").value ;

        let res=await fetch(`https://booking-com.p.rapidapi.com/v1/hotels/locations?locale=en-gb&name=${city_name}`,options)
        let searchdata=await res.json()
        console.log(searchdata)
        searchlocationappenddata(searchdata)
}
let Search_container=document.getElementById("search_location_search_bar_mega_container_child_two")
let searchlocationappenddata=(searchdata)=>
{
    Search_container.innerHTML="";
    searchdata.forEach(function(el)
    {
        let div=document.createElement("div")
        div.style.borderBottom="0.1px solid gray"
        div.style.height="100Px";
        div.setAttribute("id","cityname_search_box")
        div.onclick=()=>
        {
            getdata_cityname_search_box(el)
        }
        let div1=document.createElement("div")
        div1.style.display="flex"
        let div2=document.createElement("div")
        let h3=document.createElement("h3")
        h3.setAttribute("id","search_location_h3")
        h3.innerText=`${el.name},`;
        h3.style.marginLeft="1%"
        let p1=document.createElement("h3")
        p1.innerText=el.country;
        let hotels=document.createElement("h4")
        hotels.innerText=`hotes:-${el.hotels}`
        hotels.style.marginLeft="1%";
        div1.append(h3,p1)
        div2.append(hotels)
        div.append(div1,div2)
        Search_container.append(div)
    })
}
let recent_data=JSON.parse(localStorage.getItem("recent_data"))||[];
let getdata_cityname_search_box=(el)=>
{
   recent_data.push(el) 
   localStorage.setItem("recent_data",JSON.stringify(recent_data))
   window.location.href="../html/explore.html";
}

let recent_data_container=document.getElementById("search_location_container_recent")
let recent_data_append=(recent_data)=>
{
    recent_data.forEach(function(el)
    {
        let div=document.createElement("div")
        let h5=document.createElement("h4")
        h5.innerText=`${el.name},`;
        h5.style.marginLeft="1%"
        let p1=document.createElement("p")
        p1.innerText=el.country;
        div.append(h5,p1)
        recent_data_container.append(div)
    });
}
recent_data_append(recent_data)

let reloaded=()=>
{
    location.reload()
}