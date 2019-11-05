
/* addons/shared_addons/modules/solutions/js/solutions.js */

;$(function(){$('#openbutton, #flyoutform .c4close').click(function(){$('#flyoutform').toggleClass('active');});if(($('#catalog-solutions').length>0)&&($('.catalog-child-solutions').length>0)){$('#catalog-solutions, .catalog-child-solutions').change(function(){var select=$(this);$('#solution-html').load('/solutions/catalog/'+$(this).find('option:selected').val()+'/content',function(){if(select.attr('id')=='catalog-solutions'){var parentSolutionId=select.find('option:selected').data('solution-id');$('.catalog-child-solutions').addClass('hidden');$('.catalog-child-solutions#parent-id-'+parentSolutionId).removeClass('hidden');}});});}
if((($('#foreground-image').length>0)&&($('select#foreground').length>0))||(($('#background-image').length>0)&&($('select#background').length>0))){if($('#foreground-image').length>0){var foreground=$('select#foreground option').filter(function(){return $(this).html()=="White";}).val();if(foreground){$('#foreground-image').css('background-image','url('+foreground+')');}else{$('#foreground-image').css('background-image','url('+$('select#foreground option:nth-child(2)').val()+')');}
$('select#foreground').change(function(){if($(this).val()!="")
{$('#foreground-image').css('background-image','url('+$(this).val()+')');}});}
if($('#background-image').length>0){var background=$('select#background option').filter(function(){return $(this).html()=="White";}).val();if(background){$('#background-image').css('background-image','url('+background+')');}else{$('#background-image').css('background-image','url('+$('select#background option:nth-child(2)').val()+')');}
$('select#background').change(function(){if($(this).val()!="")
{$('#background-image').css('background-image','url('+$(this).val()+')');}});}}});
