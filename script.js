$(document).ready(function () {

  const key = 'AIzaSyDNSib_S4mcroSkKxOROlBJkBZSMB6Pd18';
  const playlistId = 'PLBfn79ogQWMucm4DHTFAHo_syQ61JTW-q';
  const URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

  var option {
    part: 'snippet',
    key: key,
    maxResults: 80,
    playlistId: playlistId
  }

  loadVids();

  function loadVids() {
      $.getJSON(URL, options, function (data) {
      consol.log(data);
});
