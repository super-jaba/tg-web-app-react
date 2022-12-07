import React, { useState } from 'react';
import useTelegram from '../../hooks/useTelegram';
import ProductItem from '../ProductItem/ProductItem';
import "./ProductList.css";

const products = [
  {id: 1, title: 'Jeans', price: 5000, description: 'Blue straight jeans'},
  {id: 2, title: 'Jacket', price: 15000, description: 'Leather jacket'},
  {id: 3, title: 'Nike Blazer', price: 7000, description: 'Classic Nike shoes'},
  {id: 4, title: 'Hat', price: 3000, description: 'Cowboy style hat'},
  {id: 5, title: 'Gloves', price: 500, description: 'Warm winter gloves'},
  {id: 6, title: 'T-shirt', price: 1500, description: 'I <3 NY T-shirt'},
  {id: 7, title: 'Coat', price: 50000, description: 'Black gangster coat'},
  {id: 1, title: 'Socks', price: 1000, description: 'Funny socks'}
];

const getTotalPrice = (products = []) => {
  return products.reduce((acc, item) => {
    return acc += item.price;
  }, 0)
}

export default function ProductList() {
  const [addedItems, setAddedItems] = useState([]);
  const {tg} = useTelegram();

  const onAdd = (product) => {
    const alreadyAdded = addedItems.find(item => item.id === product.id);
    let newItems = [];
    if (alreadyAdded) {
      newItems = addedItems.filter(item => item.id !== product.id);
    } else {
      newItems = [...addedItems, product];
    }

    setAddedItems(newItems);

    if (newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.setParams({text: `Buy for ${getTotalPrice(newItems)}`})
      tg.MainButton.show();
    }
  }

  return (
    <div className={'list'}>
      {products.map(item => {
        <ProductItem 
          product={item}
          onAdd={onAdd}
          className={'item'}
        />
      })}
    </div>
  );
}
