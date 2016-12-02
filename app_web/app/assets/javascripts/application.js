// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require jquery
//= require bootstrap-sprockets

$(document).ready(function(){
  $('#bot-button').on('click', function(event) {
    $.ajax({
      url: '/ask_bot',
      type: 'json',
      method: 'get',
      data: { query: $('#query').val() },
      success: function(data) {
	res = data['response']['result']['fulfillment']['speech'] == "" ? 'Sorry, I don\'t understand :(' : data['response']['result']['fulfillment']['speech'];
	var query = $('#query').val();
	$("#historique").append('<li class="list-group-item"> [you] '+query+"</li>");
	$('#callout-alerts-no-default').removeClass('hide');
	$("#historique").append('<li class="list-group-item list-group-item-danger"> [Botcher] '+res+"</li>");
	$('#query').val('');

      }
    });
  });
});
