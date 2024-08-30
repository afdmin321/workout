import { OrderType } from 'types/OrderType';

class HtmlTemlate {
  getOrderTgTemplate(data: OrderType) {
    return `Имя: ${data.client_name}; Телефон: ${data.phone}; Стоимость: ${data.products.reduce(
      (acc, product) => acc + product.price,
      0,
    )}`;
  }
  getOrderTemplate(data: OrderType) {
    const products = data.products
      .map((product) => {
        return `<li style="padding: 10px; border-bottom: 1px solid black;">
      <div>
      <div style="display: inline-block; width: 35%;"><a href="https://воркаут.рф/products/${product.id}">Cылка на продукт</a></div>
      <div style="display: inline-block; font-weight: 900;">${product.articleNumber}</div>
      <div style="display: inline-block; font-weight: 900;">Цена: ${product.price}Р</div>
      </div>
      <br/>
      <div>
      </li>`;
      })
      .join('');
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
          <div style="display: flex; flex-direction: row; padding: 10px; gap: 0 40px; border-bottom: 1px solid black;">
            <div style="display: inline-block; width: 40%;">Имя:</div>
            <div style="display: inline-block; font-weight: 900;">${data.client_name}</div>
          </div>
          <div style="display: flex; flex-direction: row; padding: 10px; gap: 0 40px; border-bottom: 1px solid black;">
            <div style="display: inline-block; width: 40%;">Телефон:</div>
            <div style="display: inline-block; font-weight: 900;">${data.phone}</div>
          </div>
     <div style=" padding: 10px">Товары:</div>
          <ol>
          ${products}
          </ol>
          <div style="display: flex; flex-direction: row; padding: 10px; gap: 0 40px; border-bottom: 1px solid black;">
            <div style="display: inline-block; width: 40%;">Общая Цена:</div>
            <div style="display: inline-block; font-weight: 900;" >${orderPrice + 'Р' || 'по запросу'}</div>
          </div>
          </div> `;
  }
}
export default new HtmlTemlate();
