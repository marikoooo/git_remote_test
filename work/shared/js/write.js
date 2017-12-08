

    var button = document.getElementById("modal-open");

    button.addEventListener("click", function(e) {
    e.preventDefault();
   //  $(".fm").each( function() {
   //    var id = $(this).attr("id");
   //    var fm = $("#"+id);
   // //フォームのタイプによって処理を分岐
   //    switch( fm.prop("type") ){
   //      case 'text':
   //        $(fm).after('<span class="hide del">'+fm.val()+'</span>');
   //      break;
   //      case 'radio':
   //        var val = $("#"+id+":checked");
   //        if( $(val).prop('checked') ) {
   //          $(fm).after('<span class="hide del">'+val.val()+'</span>');
   //        }
   //      break;
   //      case 'textarea':
   //        var val = fm.val();
   //        val = val.replace(/\n/g, "<br />");
   //        $(fm).after('<span class="hide del">'+val+'</span>');
   //      break;
   //    }
   //  });
   //  change(true);

    var textForm = document.getElementById("textForm").value;
    console.log("testForm")

        // 取得した値を別のフォームに表示
    var resultForm = document.getElementById("resultForm");
        resultForm.value = textForm;
  });


























