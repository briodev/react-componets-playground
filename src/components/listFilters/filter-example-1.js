import React from 'react'

export default function Filter() {

    let products = [
      { name: "A", color: "Blue", size: 50, locations: ['USA', 'Europe'], details: {length: 20, width: 70} },
      { name: "B", color: "Blue", size: 60, locations: [], details: {length: 20, width: 70} },
      { name: "C", color: "Black", size: 70, locations: ['Japan'], details: {length: 20, width: 71} },
      { name: "D", color: "Green", size: 50, locations: ['USA'], details: {length: 20, width: 71} },
    ]; 
    
    let filters = {
      color: ["Blue", "Black"],
      size: [70, 50],
      locations: ['Japan', 'USA'],
      details: {length: 20, width: 71}
    };

    const multiFilter = (products, filters) => {
      return products.filter((product) => {
        return Object.entries(filters).every(([filterProperty, filterValues]) => {
    
          switch(Object.prototype.toString.call(product[filterProperty])){
    
            case '[object Object]':
              return Object.entries(filterValues).every(([extFilterProperty, extFilterValue]) => {
                return new Map(Object.entries(product[filterProperty])).get(extFilterProperty) === extFilterValue;
              });
    
            case '[object Array]':
              return product[filterProperty].some((productValue) => {
                return filterValues.includes(productValue);
              });
    
            default:
              return filterValues.includes(product[filterProperty]);
    
          }
    
        });
      });
    };

    console.log(multiFilter(products, filters));

  return (
    <div>
      <h1>Test Filter</h1>
      { JSON.stringify(multiFilter(products, filters), null, 2) }

    </div>
  )
}