$(document).ready(function(){
	// $.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
 //    // var myData = data.Search.length;
 //    // console.log(myData);
 //    // for(var i = 0; i < data.Search.length; i++){
 //    // 	var myData = data.Search[i].Title;
 //    // 	console.log(myData);
 //    // }
 //    // or
 //    var myData = data.Search;
 //    $.each(myData, function(index, value){
 //    	console.log(value.Title);
 //    });
 //  });

 	$('#search-term').submit(function(event){
    	event.preventDefault();
    	var searchTerm = $('#query').val();
    	getRequest(searchTerm);
	});

	// $.get('http://www.omdbapi.com/?s=Star%20Wars&r=json',
	// 	function(data){
 //    console.log(data);
 //  }, 'xml');
});

// function getRequest(searchTerm){
//   $.getJSON('http://www.omdbapi.com/?s=' + searchTerm + '&r=json', function(data){
//     showResults(data.Search);
//   });
// }

function getRequest(searchTerm){
  $.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&key=&q=ABCD', function(data){
    showResults(data.items);
  });
}

function showResults(results){
  var html = "";
  $.each(results, function(index,value){
    html += '<p>' + value.items + '</p>';
    console.log(value.items);
  });
  $('#search-results').html(html);
}