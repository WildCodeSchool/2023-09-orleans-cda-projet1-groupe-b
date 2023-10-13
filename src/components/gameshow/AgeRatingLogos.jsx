export default function ageRating(rating) {
  const pegi18 = "/src/assets/196px-PEGI_18.svg.png";
  const pegi16 = "/src/assets/197px-PEGI_16.svg.png";
  const pegi12 = "/src/assets/197px-PEGI_12.svg.png";
  const pegi3 = "/src/assets/197px-PEGI_3.svg.png";

  switch (rating) {
    case "Mature" || "Adult":
      return pegi18;
    case "Teen 10+":
      return pegi16;
    case "Teen":
      return pegi12;
    case "Everyone 10+":
      return pegi3;
    case "Everyone":
      return pegi3;
    default:
      return "N/A";
  }
}
