// the "_" was defined in webpack.config.js with webpack.ProvidePlugin. 
// This practice is the shimming and it is recommended by webpack documentation.
console.log('the difference between informed arrays is', _.difference([1,2,3,8,9], [1,4,5]))