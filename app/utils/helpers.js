Here's your API Key for the Article Search API: a6f9a5320d1840048ffb027df13c74fe

// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "a6f9a5320d1840048ffb027df13c74fe",
  'q': "aaron judge",
  'begin_date': "20160101",
  'end_date': "20170709"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});