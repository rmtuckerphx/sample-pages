// const d3 = require('d3');
// require('./scripts/d3-flextree');
// const markmap = require('./scripts/view.mindmap');
// const parse = require('./scripts/parse.markdown');
// const transform = require('./scripts/transform.headings');

// d3.text("data/features.md", function(error, text) {
//   if (error) throw error;
//   const data = transform(parse(text));

//   markmap('svg#mindmap', data, {
//     preset: 'colorful', // or default
//     linkShape: 'diagonal' // or bracket
//   });
// });



// d3.select('svg#mindmap').append('circle').attr("r", 40);
debugger;

d3.text("data/features.md", function(error, text) {
  
  if (error) {
    console.log(error);
  }
  
  console.log(text);
                
  const data = transform(parseMarkdown(text));

  console.log(data);
  
});
