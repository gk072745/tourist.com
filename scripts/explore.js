


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
   let h1=document.createElement("h1")
   h1.innerText=`Explore ${city_info_data[city_info_data.length-1].name}`
   h1.style.fontSize="50px"
   h1.style.marginLeft="5%"
   let about_div=document.getElementById("city_about")
   let about=document.createElement("h1")
   about.innerText=`About ${city_info_data[city_info_data.length-1].name}`
   let about_info=document.createElement("p")
   about_info.setAttribute("id","about_info")
   about_info.innerText="East meets West in this sun-soaked state, where Indian culture intertwines with Portuguese influences left over from a 500-year occupation. The beaches have long served as a magnet for serene hedonists. To the north, the tourist-centric scene is prevalent, with an international flair that is now skewing more hip than hippie. Travel south for stretches of unspoiled sand and an escape from large resorts. Temples, mosques and wildlife sanctuaries provide diversions from the beach."
   let header=document.getElementById("header_container")
   header.append(h1)
   div.append(image)
   search_element.append(div)
   about_div.append(about,about_info)
}
city_info_appenddata(city_info_data)