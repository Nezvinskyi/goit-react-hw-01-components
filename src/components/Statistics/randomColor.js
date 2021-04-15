const randomColor = () => {
  return `rgb(${Math.round(Math.random() * 255)}, ${Math.round(
    Math.random() * 255,
  )}, ${Math.round(Math.random() * 255)})`;
};

export default randomColor;
