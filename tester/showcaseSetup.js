/**
 * Script to set up the css of the main page if javascript is enabled
 */
$(document).ready(function() 
{
  setup();
  $(window).resize(function() {
    $('.container').unbind();
    $('.slide-nav').unbind();
    setup();
  });
});

function setup()
{
  var viewport = $('.container').width();
  var slide = $('.slide').width();
  var margin = (viewport * .1);
  var cont_properties = 
  {
    'position': 'relative',
    'left': margin + 'px',
    'overflow': 'auto',
    'overflow-y': 'hidden',
    'margin-left': '0px'
  };
  var tmp_array = new Array();
  //var slide_array = set_properties('#slide', margin, 0, viewport, 0, tmp_array);
  $('.container').css(cont_properties);
  set_properties($('.slide').length, '0px');
  /*Trying to get window resizing figured out here
   */
  var property_array = new Array();
  var result_array = get_properties($('.slide').length, property_array);
  navigation_animation();
  var start_scroll_pos;
  var end_scroll_pos;
  scroll_animation(result_array);
}

/**
 * Recursive function to set the styles of the slide divs
 *
 * @param {String} in_element_name This is the name of the div, in this
 * example the name is slide.
 * @param {Number} in_margin This is the numeric value of the margin that 
 * each slide should have.
 * @param {Number} in_x_pos This is the the left position that the div   
 * will receive once it's position have been changed to absolute.
 * @param {Number} in_width This is the width of the container (viewport) 
 * and is used to compute the next div's position.
 * @param {Number} in_num This is simply a counter that the function uses 
 * to do recursion as well as select each slide.
 *
 * @return {null}
 **/

function set_properties(in_num, in_left){
  if(in_num > 0){
    var slide_num = $('.slide').length - in_num;
    var slide_holder = $('#slide' + slide_num).parent();
    var cont_position = $('.container').position();
    var properties = 
    {
      'position': 'absolute',
      'left': in_left,
      'background-color': 'red',
      'width': $('.container').width(),
      'height': $('.container').height()
    }
    slide_holder.css(properties, in_left);
    in_left = (parseInt(in_left.split('px')[0]) + parseInt( slide_holder.css('width').split('px')[0])) + 'px';
    set_properties( ( in_num - 1 ), in_left );
  }
  else
  {
    return;
  }
}

/**
 * Recursive function that returns an array of the slide positions. 
 * This is used to reposition the viewport after a user has scrolled.
 *
 * @param in_loc {String} This is the current location of the viewport
 * (e.g. '150px').
 * @param in_element_name {String} This is the class name of the div.
 * @param in_num {Number} This is the number of the slide that is 
 * currently being examined.
 * @param in_dist_array {Array} This is an array that the left and right
 * distances of the slides get pushed to for computations.
 *
 * @return in_dist_array {Array} This is an array that the left and right
 * distances of the slide get pushed to for computations
 **/
 function get_properties(in_num, in_array){
   if(in_num > 0)
   {
    var slide_num = $('.slide').length - in_num;
    var properties = {
      'slide_left': parseInt($('#slide' + slide_num).parent().css('left').split('px')[0]),
      'slide_right':(parseInt($('#slide' + slide_num).parent().css('left').split('px')[0]) + parseInt($('#slide' + slide_num).parent().css('width').split('px')[0])),
    }
    in_array[($('.slide').length - in_num)] = properties;
    get_properties( ( in_num - 1), in_array);
   }
   return in_array;
 }//END: get_properties()

function scroll_animation(in_property_array)
{
  $('.container').bind('scrollstop', function()
  {
    console.log('A scroll has occured');
    $('.container').unbind('scrollstop');
    end_scroll_pos = $('.container').scrollLeft();
    for(var i = 0; i < in_property_array.length; i++)
    {
      if(end_scroll_pos >= in_property_array[i]['slide_left'] && end_scroll_pos <= in_property_array[i]['slide_right'] - 1)
      {
        var left_animate = $('#slide'+(i)).parent().css('left').split('px')[0];
        $('.container').animate(
        {
          scrollLeft: left_animate
        }, 'slow', function()
        {
          scroll_animation(in_property_array);
        })
      }
    }
  });
}

function navigation_animation(){
$('.container').stop('true', 'true');
$('.slide-nav').bind('click', function(event)
  {
    console.log('navigation item clicked');
    //TODO: pull data using regex first element number, second unit
    var left_animate = $($(this).attr('href')).parent().css('left').split('px')[0];
    $('.container').animate(
    {
      scrollLeft: left_animate
    }, 'slow');
    event.preventDefault();
  });
}
