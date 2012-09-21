/**
 * Special Scroll Events to detect when a user starts and stops scrolling. This code was
 * more efficient then the jQuery .scroll event as it uses timers to find out when a user
 * stops scrolling and fires off the special event scrollstop.
 *
 * @author  James Padolsey
 */
(function()
{
  var special = jQuery.event.special,
  uid1 = 'D' + (+new Date()),
  uid2 = 'D' + (+new Date() + 1);
  special.scrollstart =
  {
    setup: function() 
    {
     var timer, handler = function(evt) 
     {
       var _self = this, _args = arguments;
       if (timer)
      {
        clearTimeout(timer);
      }
      else
      {
        evt.type = 'scrollstart';
        jQuery.event.handle.apply(_self, _args);
      }
      timer = setTimeout(function()
      {
        timer = null;
      }, special.scrollstop.latency);
    };
      jQuery(this).bind('scroll', handler).data(uid1, handler);
    },
    teardown: function() 
    {
      jQuery(this).unbind('scroll', jQuery(this).data(uid1));
    }
  };
  special.scrollstop =
  {
    latency: 300,
    setup: function()
    {
      var timer, handler = function(evt) 
      {
        var _self = this,
        _args = arguments;
        if (timer)
        {
          clearTimeout(timer);
        }
        timer = setTimeout(function()
        {
          timer = null;
          evt.type = 'scrollstop';
          jQuery.event.handle.apply(_self, _args);
        }, special.scrollstop.latency);
      };
      jQuery(this).bind('scroll', handler).data(uid2, handler);
    },
    teardown: function()
    {
      jQuery(this).unbind('scroll', jQuery(this).data(uid2));
    }
  };
})();
