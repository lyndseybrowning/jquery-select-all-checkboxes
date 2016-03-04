(function ($) {
  $.fn.selectAll = function (opts) {
    return this.each(function () {

      var options = $.extend({
        showCount: false
      }, opts);

      var self = $(this),
          target = self.data('target'),
          totalChks = $('input' + target).length,
          markChked = function () {
            var numChked = $('input' + target + ":checked").length;
            self.prop('checked', (totalChks > 0) ? (numChked === totalChks) : false);
          };

      self.on('click', function () {
        $(target).prop('checked', self.is(':checked'));
      });

      $(target).on('click', markChked);
      markChked();
    });
  };
})(jQuery);


