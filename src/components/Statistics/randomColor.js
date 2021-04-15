const randomColor = () => {
  // диапазон для контрастности - более темные цвета
  const min = 0;
  const max = 150;
  return `rgb(${Math.round(Math.random() * (max - min) + min)}, ${Math.round(
    Math.random() * (max - min) + min,
  )}, ${Math.round(Math.random() * (max - min) + min)})`;
};

export default randomColor;
