import { OrderType } from 'types/OrderType';

class HtmlTemlate {
  getOrderTemplate(data: OrderType) {
    const products = data.products.map((product) => {
      return `<div style="display: flex; padding: 10px; gap: 0 40px; border-bottom: 1px solid black;"><div>${product.name}</div><div>${product.articleNumber}</div><div>${product.price}</div></div>`;
    });
    const orderPrice = data.products.reduce(
      (acc, product) => acc + product.price,
      0,
    );
    return `
        <div style=" margin: 0 auto;
        max-width: 1000px;
        display: flex;
        flex-direction: column;
        gap: 10px 0;
        border: 1px solid black;
        border-bottom: none;">
          <div style="display: flex; padding: 10px; gap: 0 40px; border-bottom: 1px solid black;">
            <div>Имя</div>
            <div>${data.client_name}</div>
          </div>
          <div style="display: flex; padding: 10px; gap: 0 40px; border-bottom: 1px solid black;">
            <div>Телефон</div>
            <div>${data.phone}</div>
          </div>
          <div style="display: flex; padding: 10px; gap: 0 40px; border-bottom: 1px solid black;">
            <div>Email</div>
            <div>${data.email}</div>
          </div>
          ${products}
          <div style="display: flex; padding: 10px; gap: 0 40px; border-bottom: 1px solid black;">
            <div>Общая Ценя</div>
            <div>${orderPrice}</div>
          </div>
          </div> `;
  }
}
export default new HtmlTemlate();
