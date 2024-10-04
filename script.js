$(function() {
    $('.btn').click(function() {
      $(this).toggleClass('active'); // Toggle active class on click
  
      // Update text based on active state
      if ($(this).hasClass('active')) {
        $(this).text('Deactivate Me'); // Change text when activated
      } else {
        $(this).text('Activate Me'); // Change text when deactivated
        $(this).addClass('deactivated'); // Add deactivated class for animation
        setTimeout(() => {
          $(this).removeClass('deactivated'); // Remove class after animation
        }, 1000); // Duration of the blastOut animation
      }
    });
  });
  