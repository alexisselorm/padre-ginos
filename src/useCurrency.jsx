const intl = Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "EUR",
});

export const priceConverter = (price) => intl.format(price);

export default function useCurrency(price) {
  return priceConverter(price);
}
