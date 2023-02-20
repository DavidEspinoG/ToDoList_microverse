import "./style.scss";

const fancyFunc = () => {
  return [1, 2]
};

const [a, b] = fancyFunc();

console.log(a, b)