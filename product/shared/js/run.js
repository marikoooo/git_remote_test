$(function(){function o(){var o=$(window).width(),e=$(window).height(),n=$("#modal-content").outerWidth(),d=$("#modal-content").outerHeight();$("#modal-content").css({left:(o-n)/2+"px",top:(e-d)/2+"px"})}$("#modal-open").click(function(){if($(this).blur(),$("#modal-overlay")[0])return!1;$("body").append('<div id="modal-overlay"></div>'),$("#modal-overlay").fadeIn("slow"),o(),$("#modal-content").fadeIn("slow"),$("#modal-overlay,#modal-close").unbind().click(function(){$("#modal-content,#modal-overlay").fadeOut("slow",function(){$("#modal-overlay").remove()})})}),$(window).resize(o)});var change=function(o){!0===o?($(".def").hide(),$(".hide").show()):($(".def").show(),$(".hide").hide(),$(".del").remove())};$(document).on("click","#back",function(){change()});