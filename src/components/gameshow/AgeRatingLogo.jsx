export default function ageRating(rating) {
  const pegi18 = '/pegi-18.png';
  const pegi16 = '/pegi-16.png';
  const pegi12 = '/pegi-12.png';
  const pegi3 = '/pegi-3.png';

  switch (rating) {
    case 'Mature' || 'Adult':
      return pegi18;
    case 'Teen 10+':
      return pegi16;
    case 'Teen':
      return pegi12;
    case 'Everyone 10+':
      return pegi3;
    case 'Everyone':
      return pegi3;
    default:
      return 'N/A';
  }
}
