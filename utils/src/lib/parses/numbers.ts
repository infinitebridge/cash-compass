export const formatCurrency = (value: string) => {
  const numericValue = value.replace(/[^0-9.]/g, '');
  if (numericValue) {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Number.parseFloat(numericValue));
  }
  return '0.00';
};
