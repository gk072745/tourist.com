
let rating = ()=>{
return `<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>&nbsp; <span>711</span>&nbsp; <span>reviews</span>`
}

let usefulCount=()=>{
    return `<p onclick="likeCount()"><i class="ri-thumb-up-fill"></i> Useful</p>
    <p><i class="ri-share-forward-fill"></i> Share</p>`
}

export {rating,usefulCount} 