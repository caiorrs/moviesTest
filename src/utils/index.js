import VMasker from 'vanilla-masker';

export const priceMasker = (price) => VMasker.toMoney(price, { unit: 'U$$' });
