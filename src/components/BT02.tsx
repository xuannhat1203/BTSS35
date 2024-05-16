interface Product {
  id: number;
  name: string;
  price: string;
  quantity: number;
}
export default function BT02() {
  const product: Product = {
    id: 1,
    name: "Coca Cola",
    price: "100$",
    quantity: 10,
  };
  return (
    <div>
      <h4>Bài 2: Thông tin sản phẩm</h4>
      <ul>
        <li>ID: {product.id}</li>
        <li>Name: {product.name}</li>
        <li>Price: {product.price}</li>
        <li>Quantity: {product.quantity}</li>
      </ul>
    </div>
  );
}
