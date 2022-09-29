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
// geting data
let getdata=async(e)=>
{
    if(e.key==="Enter")
    {
        let query = document.getElementById("search_location_search_bar").value ;
    console.log(query)
    }
}
