export const applyFilters = (data: any[], selectedOptions: string[][]) => {
  const [names, models, priceRanges, locations] = selectedOptions;

  return data.filter(car => {
    const nameMatch = names.length === 0 || names.includes(car.Name);
    const modelMatch = models.length === 0 || models.includes(car.Model);
    const locationMatch = locations.length === 0 || locations.includes(car.Location);

    let priceMatch = true;
    if (priceRanges.length > 0) {
      priceMatch = priceRanges.some(range => {
        const price = car.Price;
        if (range === 'Price1') return price <= 10000;
        if (range === 'Price2') return price > 10000 && price <= 20000;
        if (range === 'Price3') return price > 20000 && price <= 50000;
        if (range === 'Price4') return price > 50000;
        return false;
      });
    }

    return nameMatch && modelMatch && locationMatch && priceMatch;
  });
};

export const handleSort = (data: any[], sortOption: string) => {
  const sortedCards = [...data];
  
  switch (sortOption) {
    case 'alpha':
      sortedCards.sort((a, b) => a.Name.localeCompare(b.Name));
      break;
    case 'priceAsc':
      sortedCards.sort((a, b) => a.Price - b.Price);
      break;
    case 'priceDesc':
      sortedCards.sort((a, b) => b.Price - a.Price);
      break;
    default:
      break;
  }

  return sortedCards;
};
