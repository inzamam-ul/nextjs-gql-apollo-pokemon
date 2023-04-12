export const handleColor = (type) => {
  switch (type) {
    case "Grass":
      return "success";
    case "Fire":
      return "error";
    case "Water":
      return "primary";
    case "Bug":
      return "warning";
    case "Normal":
      return "info";
    case "Poison":
      return "secondary";
    case "Electric":
      return "warning";
    default:
      return "info";
  }
};

export const handleVariant = (type) => {
  switch (type) {
    case "Grass":
      return "outlined";
    case "Fire":
      return "outlined";
    case "Water":
      return "outlined";
    case "Bug":
      return "outlined";
    default:
      return "filled";
  }
};
