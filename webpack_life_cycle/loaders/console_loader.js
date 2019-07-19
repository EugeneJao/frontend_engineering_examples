module.exports = function loader(source) {
  console.log('running in console-loader', source);
  return `export default ${ JSON.stringify(source) }`;
};
