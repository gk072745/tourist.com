let searchdata=()=>
{
    let div=document.getElementById("search_location_search_bar_container");
    div.style.borderRadius=0;
    div.style.boxShadow="none";
    div.style.borderBottom="2px solid black"
    let nearbydiv=document.getElementById("search_location_search_bar_mega_container_child_one")
    nearbydiv.style.display="block";
    let megacont=document.getElementById("search_location_search_bar_mega_container")
    megacont.style.backgroundColor="#ffffff"
    let body=document.getElementById("home_container")
    body.style.color="black"
}

let backtonormal=()=>
{
    
}