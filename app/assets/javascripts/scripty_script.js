
$(document).ready(function(){
  function displayResultsRound(results, roundNumber) {
    var endPoint = 10;

    if(results.length < 10){
      endPoint = results.length;
    }

    for(var i = 0; i < endPoint; i++){
      var divGrid = $("<div class='grid-item'></div>")
      var img = $("<img></img>");
      var src = results[i]["images"]["original"]["url"];
      $(img).attr("src", src).addClass("result".concat(i));
      $('.pagination').show();
      $('#results' + roundNumber).append(divGrid.append(img));
    }
    $('.pagination').find('[data-id="1"]').addClass("active");
    $('#results1').show();
  }

  // gif
  $('#gif-search').on('change', function(e){
    $('.results-section').empty();
    $('.pagination').empty();
    e.preventDefault();
    var keyword = $('#gif-search').val().replace(/\s/g, '+');
    var url = 'https://api.giphy.com/v1/gifs/search?q=' + keyword + '&api_key=dc6zaTOxFJmzC&limit=100';
    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'json'
    })
    .done(function(responseData) {
      var results = responseData["data"];
      var numberOfRounds = Math.round(results.length / 10);

      for(var i = 1; i <= numberOfRounds; i++) {
        var endPoint = i*10;
        var startPoint = i*10 - 10;
        var range = results.slice(startPoint, endPoint);
        displayResultsRound(range, i);
        var li = $("<li class='waves-effect goto' data-id=" + i +"> <a href='#!'>" + i + "</a></li>");

        $('.pagination').append(li);
        // $(li).attr({"id", "goto-" + i)};
      }
    })
  });

  $('.pagination').on('click', '.goto', function(){
    var pageNumber = $(this).attr('data-id');
    $('.results-section').hide();

    $('#results' + pageNumber).fadeIn('slow');
    $('.waves-effect').removeClass('active')
    $(this).addClass('active');
  })

  // select gif
  $('.all-gifs').on('click', 'img', function(){
    $('.all-gifs img').css("border", "none").removeClass("selected-gif");
    $(this).css("border", "3px solid #ffdee3").addClass("selected-gif");
  });
  
  $('#gif-form').on('submit', function(){

    var author = $('.main-gif-section #component_author').val();
    var to_prompt = $('.main-gif-section #to-prompt-gif').is(':checked');
    var prompt_id = $('#component_prompt_id').val();
    var selectedGifUrl = $('.selected-gif').attr('src');
    
    $.ajax({
      url: '/gifs',
      type: 'post',
      data: {content: selectedGifUrl, author: author, to_prompt: to_prompt, prompt_id: prompt_id},
    })
    .done(function() {
      console.log("success");
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
  })
  // user selects the gif they want & it's highlighted
  // user clicks Submit - send that img, author, to_post to the backend
  // save it as a Gif
  // render it in the feed

});

jQuery(window).on('load', function(){ 
  $('.grid').masonry({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.grid-item',
    // use element for option
    // columnWidth: '.grid-sizer',
    percentPosition: true
  })
});