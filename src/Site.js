import { useState } from 'react'
import products from './products'
import './App.css'
function Site() {

  var [selectedCategory, setSelectedCategory] = useState('');
  var [Brand,setBrand]=useState('');
  var [MaxpriceRange, setMaxPriceRange] = useState('');
  var [MinpriceRange,setMinPriceRange]=useState('');
  var [search ,setSearch] =useState(products);
   
   // Filter products based on selected category and price range
   var filteredProducts = products.filter((product) => {
    var categoryMatch = selectedCategory ? product.category === selectedCategory : true;
    var brandMatch = Brand ? product.brand === Brand: true; 
    var MaxpriceMatch = MaxpriceRange ? product.pprice <= MaxpriceRange : true;
    var MinpriceMatch = MinpriceRange ? product.pprice >= MinpriceRange : true;
    var searchMatch = search ?  product.pname === search : true;

    return /*Single filter */categoryMatch , brandMatch , MaxpriceMatch , MinpriceMatch, searchMatch,
    /*Double filter */ 
    categoryMatch && brandMatch , categoryMatch && MaxpriceMatch,categoryMatch && MinpriceMatch,
    /*Triple filter */
    categoryMatch && brandMatch && MaxpriceMatch,
    categoryMatch && brandMatch && MinpriceMatch,
    categoryMatch && MaxpriceMatch && MinpriceMatch,
    /*Four filter */
    categoryMatch && brandMatch && MaxpriceMatch && MinpriceMatch;
  });
    return(
       <div>
          <div className='select-box'>
            <div className='drop-down'>
        <select  value={selectedCategory} id='category' onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">SELECT CATEGORY</option>
        {Array.from(new Set(products.map((product) => product.category))).map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      </div> 
      <div className='select-brand'>
      <select  value={Brand} id='brand' onChange={(e) => setBrand(e.target.value)}>
        <option value="">SELECT ITEMS</option>
        {Array.from(new Set(products.map((product) => product.brand))).map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
      </div>
      <div>
      <input id='maxprice'
        type='number'
        placeholder="Max Price"
        value={MaxpriceRange}
        onChange={(e) => setMaxPriceRange(e.target.value)}></input>
        </div>
        <div> 
        <input id='minprice'
        type='number'
        placeholder="Min Price"
        value={MinpriceRange}
        onChange={(e) => setMinPriceRange(e.target.value)}></input>   
          </div>
          <div> 
        <input id='minprice'
        type='text'
        placeholder="Serach Product"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}></input>   
          </div>
          </div>
            {filteredProducts.filter((item)=>{
              return search.toLocaleString() ==='' ? item : item.pname.toLocaleLowerCase().includes(search)
            }).map((ele)=>{return <div className='main-card'>
                <div className='card' style={{width:'19rem'}}>
                    <img src={ele.pimage} className='crad-img-top' style={{height:'200px'}} ></img>
                    <div className='card-header'>{ele.category}</div>
                    <div className='card-body'>
                        <div className='card-title'><strong>TYPE : </strong>{ele.pname}</div>
                        <div className='card-text'><strong>BRAND : </strong>{ele.brand} <strong>RATING : </strong>{ele.prating}</div>
                        <div className='card-text'><strong>ABOUT : </strong>{ele.pdesc}</div>
                        <div className='card-text'><strong>PRICE : </strong>{ele.pprice}</div>
                        <button type='submit' className='btn btn-warning'>Add to cart</button>
                    </div>
                </div>

            </div>})}
        </div>
    
    )
    }
export default Site;