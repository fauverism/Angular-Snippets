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

//For multiple checkboxes appearing on the same page
if($scope.answerType==='CHECKBOX') {
  $timeout(function() {
    $('.none-of-the-above').change(function() {
      var x = $(this);
      var isChecked = x.is(':checked');
      if (x.hasClass('none-of-the-above') && isChecked) {
        x.parents('ul.m_choices li').siblings().find('input').attr('checked', false);
      } else if ( (x.hasClass('normal')) && !isChecked ) {
        x.parents('ul li').siblings().find('input.none-of-the-above').attr('checked', false);
      }
    });
    $('.normal').change(function() {
      $(this).parents('ul li').siblings().find('input.none-of-the-above').attr('checked', false);
    });
  },100);
}

/*
This code is used in order to have a 'None of the Above' that deselects all checkboxes in the checkbox group. This also removes the 'None of the Above' :checked if another checkbox is checked while 'None of the Above' is checked.
*/
