var request = require('request');
var fs = require('fs');
var content = fs.readFileSync("template.html","utf-8")

config = {
  url: 'https://docraptor.com/docs',
  encoding: null,
  headers: {
    'Content-Type': 'application/json'
  },
  json: {
    user_credentials: "",
    doc: {
      document_content: content,
      type: "pdf",
      test: true,
      // prince_options: {
      //   media:   "screen",          // use screen styles instead of print styles
      //   baseurl: "http://hello.com" // URL to use for generating absolute URLs for assets from relative URLs
      // }
    }
  }
};

request.post(config, function(err, response, body) {
  fs.writeFile('doc_raptor_sample.pdf', response.body, "binary", function(writeErr) {
    console.log('Saved!');
  });
});