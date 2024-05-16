

  
import {  useState } from "react";
import products from "./products";
import './App.css'

function Display() {
     
   var [items,setItems]=useState(products)
   var [filterProducts,setFilterProducts]=useState([])
   var [selectedCategory,setSelectedCategory]=useState('')
   var [selectedBrand,setSelectedBrand]=useState('');
   var [maxPrice,setMaxPrice]=useState('')
   var [minPrice,setMinPrice]=useState('')
      var show=()=>{
        setSelectedCategory(document.getElementById('category').value);
        setSelectedBrand(document.getElementById('brand').value)
        setMaxPrice(document.getElementById('maxprice').value)
        setMinPrice(document.getElementById('minprice').value)
         // single filter
        if (selectedCategory!=''&& selectedBrand=='' && maxPrice==''&&minPrice=='') {
             setFilterProducts(items.filter((p)=>{return p.category==selectedCategory}))
        }
        else if (selectedCategory==''&& selectedBrand!='' && maxPrice==''&&minPrice=='') {
             setFilterProducts(items.filter((p)=>{return p.brand==selectedBrand}))
        }
        else if (selectedCategory==''&& selectedBrand=='' && maxPrice!=''&&minPrice=='') {
              setFilterProducts(items.filter((p)=>{return p.pprice<=maxPrice}))
        } 
        else if (selectedCategory==''&& selectedBrand=='' && maxPrice==''&&minPrice!='') {
              setFilterProducts(items.filter((p)=>{return p.pprice>=minPrice}))
        } 
          // double filter 
       else if (selectedCategory!=''&& selectedBrand!='' && maxPrice==''&&minPrice=='') {
         setFilterProducts(items.filter((p)=>{return p.category==selectedCategory && p.brand==selectedBrand}))
        }   
        else if (selectedCategory!=''&& selectedBrand=='' && maxPrice!=''&&minPrice=='') {
         setFilterProducts(items.filter((p)=>{return p.category==selectedCategory&& p.pprice<=maxPrice}))
        }
        else if (selectedCategory!=''&& selectedBrand=='' && maxPrice==''&&minPrice!='') {
              setFilterProducts(items.filter((p)=>{return p.category==selectedCategory && p.pprice>=minPrice}))
           }  
          //thriple filter
          else if (selectedCategory!=''&& selectedBrand!='' && maxPrice!=''&&minPrice=='') {
            setFilterProducts(items.filter((p)=>{return p.category==selectedCategory && p.brand==selectedBrand && p.pprice<=maxPrice}))
           } 
           else if (selectedCategory!=''&& selectedBrand!='' && maxPrice==''&&minPrice!='') {
            setFilterProducts(items.filter((p)=>{return p.category==selectedCategory && p.brand==selectedBrand && p.pprice<=minPrice}))
           } 
           else if (selectedCategory!=''&& selectedBrand=='' && maxPrice!=''&& minPrice!='') {
            setFilterProducts(items.filter((p)=>{return p.category==selectedCategory && p.pprice==maxPrice && p.pprice<=minPrice}))
           } 
          //four filters
          else if (selectedCategory!=''&& selectedBrand!='' && maxPrice!=''&& minPrice!='') {
            setFilterProducts(items.filter((p)=>{return p.category==selectedCategory&& p.brand==selectedBrand && p.pprice==maxPrice && p.pprice<=minPrice}))
           } 

        setItems(products);
      }
   return(
        
      <div>
         <div>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/003/240/364/small/shopping-online-on-phone-paper-art-modern-pink-background-gifts-box-free-vector.jpg" height={"100px"} width={'90%'} ></img>
         </div>
         <div className="select-box">
        <div className="dorp-down"> 
            <select id="category" onChange={show} value={selectedCategory}>
            <option value={''}>SELECT CATEGORY</option>
                <option value={'electronics'}>electronics</option>
                <option value={'footware'}>footware</option>
                <option value={'furniture'}>furniture</option>
                <option value={'fashion'}>fashion</option>
            </select>
            </div>
            <div className="select-brand">
            <select id="brand" onChange={show} value={selectedBrand}>
               <option value={''}>SELECT BRAND</option>
               <option value={'LG'}>LG</option>
               <option value={'Samsung'}>SAMSUNG</option>
               <option value={'Oneplus'}>ONEPLUS</option>
               <option value={'HP'}>HP</option>
               <option value={'Dell'}>DELL</option>
               <option value={'Lenovo'}>LENOVO</option>
               <option value={'Asus'}>ASUS</option>
               <option value={'fastrack'}>FASTRACK</option>
               <option value={'Boat'}>BOAT</option>
               <option value={'Noise'}>NOISE</option>
               <option value={'whirlpool'}>WHIRLPOOL</option>
               <option value={'Godrej'}>GODREJ</option>
               <option value={'Heiar'}>HEIAR</option>
               <option value={'Voltas'}>VOLTAS</option>
               <option value={'Bata'}>BATA</option>
               <option value={'paragon'}>PARAGON</option>
               <option value={'sparks'}>SPARKS</option>
               <option value={'campus'}>CAMPUS</option>
               <option value={'nike'}>NIKE</option>
               <option value={'Mfurniture'}>MFURNITURE</option>
               <option value={'Nfurniture'}>NFURNITURE</option>
               <option value={'Kfurniture'}>KFURNITURE</option>
               <option value={'Hfurniture'}>HFURNITURE</option>
               <option value={'uspolo'}>USPOLO</option>
               <option value={'ketch'}>KETCH</option>
               <option value={'jockey'}>JOCKEY</option>
               <option value={'wrong'}>WRONG</option>
               <option value={''}></option>
               <option value={''}></option>
               <option value={''}></option>
            </select>
          </div>
             <div className=""><input type="number" placeholder="Max price" id="maxprice"></input></div>
             <div className=""><input type="number" placeholder="Min price" id="minprice"></input></div>
           </div>
        {filterProducts.map((ele)=>{return <div className='main-card'>
                 <div className='card' style={{width:'19rem'}}>
                    <img src={ele.pimage} className='crad-img-top' style={{height:'200px'}}></img>
                    <div className='card-header'>{ele.category}</div>
                     <div className='card-body'>
                         <div className='card-title'><strong>TYPE : </strong>{ele.pname}</div>
                         <div className='card-text'><strong>BRAND : </strong>{ele.brand} <strong>RATING : </strong>{ele.prating}</div>
                         <div className='card-text'><strong>PRICE : </strong>{ele.pprice}</div>
                         <button type='submit' className='btn btn-warning'>Add to cart</button>
                     </div>
                 </div>
             </div> })} 
              
                     
      </div>
      
   )
    
}

export default Display;