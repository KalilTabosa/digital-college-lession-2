export function ProductsList() {
  function _li({ name, description, thumbnail }) {
    return `
        <li class="products-list__item">
        <div class="products-list__item-thumbnail">
        <img
            class="product__thumbnail"
            src="${thumbnail}"
            alt="${name}"
        />
        </div>
        <div class="products-list__item-main-content">
        <h4 class="product__name">
            ${name}
        </h4>
        <p class="product__description">
            ${description}
        </p>
        </div>
        <div class="products-list__item-action-buttons">
        <button class="button" data-open-modal="1">Detalhes</button>
        </div>
        <div class="modal" data-modal="1">
            <div class="modal__container">
              <div class="modal__header">
                <h2>${name}</h2>
                <button class="button modal__close-button" data-close-modal="1">
                  Close
                </button>
              </div>
              <div class="modal__body">
                <table class="product__details-table">
                  <caption>
                    Detalhes técnicos
                  </caption>
                  <tbody>
                    <tr>
                      <th>Marca</th>
                      <td>dsds</td>
                    </tr>
                    <tr>
                      <th>Fabricante</th>
                      <td>dsds</td>
                    </tr>
                    <tr>
                      <th>Modelo</th>
                      <td>dsds</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
    </li>`
  }

  function render(products = []) {
    const ul = document.querySelector('.products-list')
    if (ul) {
      products.forEach((product) => {
        ul.insertAdjacentHTML('beforeend', _li(product))
      })
    }
  }

  return {
    render
  }
}
