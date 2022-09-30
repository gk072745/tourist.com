


let city_info_data=JSON.parse(localStorage.getItem("recent_data"))||[];
console.log(city_info_data)
console.log(city_info_data.length);
let search_element=document.getElementById("city_information_container")
let city_info_appenddata=(city_info_data)=>
{
    search_element.innerHTML="";
   console.log(city_info_data[city_info_data.length-1])
   let div=document.createElement("div")
   let image=document.createElement("img")
   image.src=city_info_data[city_info_data.length-1].image_url;
   image.setAttribute("id","searched_image")
   div.append(image)
   search_element.append(div)
}
city_info_appenddata(city_info_data)