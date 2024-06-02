

const div = document.querySelector('.div2')
axios('https://fakestoreapi.com/products')


.then((res)=>{
    console.log(res.data)
    res.data.map((item)=>{
        div.innerHTML+=`
        <div>
        <div class="bg-success p-2 text-dark bg-opacity-25 shadow p-3 mb-5 rounded" style="width: 17rem;   ">
        <img src="${item.image}" id="img_all" class="img_all  card-img-top" alt="...">

        <div class="card-body">
          <h4 class="card-text">Category : ${item.category}</h4>
          <h5 class="card-text text-danger">Rating : ${item.rating.rate}</h5>
          <h3 class="card-text">Price : ${item.price}</h3>
    
          <a href="#" class="btn btn-primary">Go somewhere  </a> 
          
        
        </div>
      </div>
      <div/>
        `
    })

})
.catch((err)=>{
console.log (err)
})
