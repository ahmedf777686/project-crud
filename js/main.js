

var addproduct = document.getElementById('addproduct')
var productprice = document.getElementById('productprice')
var productcategory = document.getElementById('productcategory')
var productdesc = document.getElementById('productdesc')
var searchprpduct = document.getElementById('searchprpduct')
var btnadd = document.getElementById('btnadd')
var btnup = document.getElementById('btnup')
var btn11 =document.querySelectorAll('.btn11')

var indexup =0;
var productarray=[]
if(localStorage.getItem('username')!= null){
    productarray=JSON.parse(localStorage.getItem('username'))
displayprpduct()
}

function addprod(){
if(regexname()==true&&regexprice()==true&&regexcategory()==true&& regexdesc()==true){


    var product={
        name:addproduct.value,
        price:productprice.value,
        category:productcategory.value,
        desc:productdesc.value,
    }
    productarray.push(product)
    localStorage.setItem('username',JSON.stringify(productarray))
    displayprpduct()
    clrproduct()
    deletevalid()
}

}


function displayprpduct(){


    var cartona='';
    for(var i=0;i<productarray.length;i++){
        cartona+=`      <tr>
        <td>${i}</td>
        <td>${productarray[i].name}</td>
        <td>${productarray[i].price}</td>
        <td>${productarray[i].category}</td>
        <td>${productarray[i].desc}</td>
        <td><button onclick="upproduct(${i})" class="btn btn-outline-primary">update</button></td>
        <td><button onclick="deleteprod(${i})" class="btn btn-outline-danger">delete</button></td>
       
    </tr>`
    }
    document.getElementById('tbody').innerHTML = cartona
}




function upproduct(index){
    indexup=index
    var up = productarray[index]
    addproduct.value= up.name
    productprice.value= up.price
    productcategory.value= up.category
    productdesc.value= up.desc
btnadd.classList.add('d-none')
btnup.classList.remove('d-none')
}

function up(){
    var product={
        name:addproduct.value,
        price:productprice.value,
        category:productcategory.value,
        desc:productdesc.value,
    }
     productarray.splice(indexup,1,product)
     localStorage.setItem('username',JSON.stringify(productarray))
     btnadd.classList.remove('d-none')
btnup.classList.add('d-none')
     displayprpduct()
}









function deleteprod(index){
productarray.splice(index,1)
localStorage.setItem('username',JSON.stringify(productarray))
displayprpduct()
}
 function search(){
    var inp =searchprpduct.value
    var cartona='';
    for(var i=0;i<productarray.length;i++){
        if(productarray[i].name.toLowerCase().includes(inp.toLowerCase())){

 
        cartona+=`      <tr>
        <td>${i}</td>
        <td>${productarray[i].name}</td>
        <td>${productarray[i].price}</td>
        <td>${productarray[i].category}</td>
        <td>${productarray[i].desc}</td>
        <td><button class="btn btn-outline-primary">update</button></td>
        <td><button onclick="deleteprod(${i})" class="btn btn-outline-danger">delete</button></td>
       
    </tr>`
}
    }

    document.getElementById('tbody').innerHTML = cartona
 }

 function clrproduct(){
    addproduct.value=''
    productprice.value=''
    productcategory.value=''
    productdesc.value=''
 }



 function regexname(){
    var a =  /^[A-Z][a-z]{2,8}$/
    var text = addproduct.value
    if(a.test(text)==true){
        addproduct.classList.add('is-valid')
        addproduct.classList.remove('is-invalid')
        return true
    }else{
        addproduct.classList.add('is-invalid')
        addproduct.classList.remove('is-valid')
    }

 }
 function regexprice(){
    var regex =  /^[1-9]{3,8}$/
    var text = productprice.value
    if(regex.test(text)==true){
        productprice.classList.add('is-valid')
        productprice.classList.remove('is-invalid')
        return true
    }else{
        productprice.classList.add('is-invalid')
        productprice.classList.remove('is-valid')
    }

 }
 function regexcategory(){
    var z =  /^[a-z]{2,8}$/
    var text = productcategory.value
    if(z.test(text)==true){
        productcategory.classList.add('is-valid')
        productcategory.classList.remove('is-invalid')
        return true
    }else{
        productcategory.classList.add('is-invalid')
        productcategory.classList.remove('is-valid')
    }

 }
 function regexdesc(){
    var c =  /^[a-z]{5,15}$/
    var text = productdesc.value
    if(c.test(text)==true){
        productdesc.classList.add('is-valid')
        productdesc.classList.remove('is-invalid')
        return true
    }else{
        productdesc.classList.add('is-invalid')
        productdesc.classList.remove('is-valid')
    }

 }




 function deletevalid(){

    for(var i =0;i<btn11.length;i++){
        btn11[i].classList.remove('is-valid')
    }
 }


 for(var i=0;i<btn11.length;i++){
    btn11[i].addEventListener('blur',function(){
        regexname()
        regexprice()
        regexcategory()
        regexdesc()
    })
 }