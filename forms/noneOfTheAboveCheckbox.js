'use strict';

//This method uses ng-class on the input element and an if statement inside of the controller
//ng-class="m_sub.m_bExclusive ? 'none-of-the-above' : 'normal'"

if($scope.answertype==='CHECKBOX') {
  $timeout(function () {
    $('.none-of-the-above').on('click', function() {
      $('input.normal').attr('checked', false);
      $('.none-of-the-above').attr('checked', true);
    });
    $('input.normal').on('click', function() {
      $('.none-of-the-above').attr('checked', false);
    });
  },100);
}

/*
This code is used in order to have a 'None of the Above' that deselects all checkboxes in the checkbox group. This also removes the 'None of the Above' :checked if another checkbox is checked while 'None of the Above' is checked.
*/
