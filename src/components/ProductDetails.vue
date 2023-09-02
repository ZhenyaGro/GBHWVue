<template>
  <div class="product-info">
    <h2>Product</h2>
    <ul>
      <li><span>Name:</span><span>{{ product.name }}</span></li>
      <li><span>Price:</span><span>{{ formattedPrice }}</span></li>
      <li><span>Status:</span><span>{{ product.available ? 'Available' : 'Out of stock' }}</span></li>
    </ul>
  </div>
</template>

<script>
/*
Вы разрабатываете приложение для интернет-магазина и у вас есть компонент Vue под названием "ProductDetails". Компонент отображает детали о конкретном продукте, включая его название, цену и статус доступности.

Внутри компонента "ProductDetails" создайте свойство "product" с объектом, представляющим информацию о продукте. Объект должен иметь свойства "name" (название продукта), "price" (цена продукта) и "available" (флаг, указывающий на доступность продукта).
Используя вычисляемое свойство, назовите его "formattedPrice", которое будет возвращать форматированную цену продукта со знаком валюты. Например, если цена равна 99.99, вычисляемое свойство должно вернуть строку "$99.99".
В компоненте "ProductDetails" отобразите название продукта, его форматированную цену и статус доступности.
Если продукт доступен, отобразите текст "Available", в противном случае - "Out of stock".
*/
export default {
  data() {
    return {
      product: {
        name: 'Some product',
        price: '99.99',
        available: true
      },
    };
  },

  computed: {
    formattedPrice() {
      return `$${this.product.price}`;
    }
  }
}
</script>

<style>
.product-info {
  width: fit-content;
  border: 3px solid black;
  padding: 30px;
}

ul {
  padding: 0;
}

li {
  list-style-type: none;
  display: flex;
  gap: 12px;
  justify-content: space-between;
}
</style>