var $contactForm = $('#contact-form');
$contactForm.submit(function(e) {
  e.preventDefault();
  $.ajax({
    url: '//formspree.io/list-reply@lists.uncommonplaces.com',
    method: 'POST',
    data: $(this).serialize(),
    dataType: 'json',
    beforeSend: function() {
      $contactForm.append('<div class="alert alert--loading">Sending message…</div>');
    },
    success: function(data) {
      $contactForm.find('.alert--loading').hide();
      $contactForm.append('<div class="alert disapear alert--success">Thank you!</div>');
    },
    error: function(err) {
      $contactForm.find('.alert--loading').hide();
      $contactForm.append('<div class="alert disapear alert--error">Hm, something went wrong.</div>');
    }
  });
});