import React, { useState } from 'react'


export default function AddProduct(props) {
    const[data,setdata]=useState({Productname : "" ,Brand:"",Quantity:"",Price:"",Actions:""})
   

    
    function handleFormSubmit(e) {
        e.preventDefault();
      
        props.savedata(data)
       
        setdata({Productname : "" ,
        Brand:"",
        Quantity:"",
        Price:"",
        Actions:""
           
        })
      
    }

    function handleProductNameChange(e) {
        

        e.preventDefault();
        var name = e.target.name;
         setdata( { ...data,[name]: e.target.value} )
        
    }

    function handleBrandChange(e) {
        e.preventDefault();
        var name = e.target.name;
         setdata( { ...data,[name]: e.target.value} )
       
      
    }

    function handleQuantityChange(e) {
        e.preventDefault();
        var name = e.target.name;
         setdata( { ...data,[name]: e.target.value} )
       
    }

    function handlePriceChange(e) {
        e.preventDefault();
        var name = e.target.name;
         setdata( { ...data,[name]: e.target.value} )
       
        
    }

    function handleActionChange(e) {
        e.preventDefault();
        var name = e.target.name;
         setdata( { ...data,[name]: e.target.value} )
    
       
    }



    return (
        <div>
         
         <input name="Productname" value={data.Productname} type="text" placeholder='Enter ProductName ' onChange={handleProductNameChange}></input>
         <input name="Brand" value={data.Brand} type="text" placeholder='Enter Brand'  onChange={handleBrandChange}></input>
         <input name="Quantity"  value={data.Quantity} type="text"   placeholder='Enter Quantity ' onChange={handleQuantityChange}></input>
         <input name="Price" value={data.Price} type="text"  placeholder='Enter Price'   onChange={handlePriceChange}></input>
         <input name="Actions" value={data.Actions} type="text" placeholder='Enter Actions'   onChange={handleActionChange}></input>
         <button onClick={handleFormSubmit}>Save</button>
         <div>

         </div>
       
        </div>
    )
}