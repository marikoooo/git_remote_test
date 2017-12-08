$(function(){

//モーダルウィンドウを出現させるクリックイベント
$("#modal-open").click( function(){

  //キーボード操作などにより、オーバーレイが多重起動するのを防止する
  $( this ).blur() ;  //ボタンからフォーカスを外す
  if( $( "#modal-overlay" )[0] ) return false ;   //新しくモーダルウィンドウを起動しない (防止策1)
  //if($("#modal-overlay")[0]) $("#modal-overlay").remove() ;   //現在のモーダルウィンドウを削除して新しく起動する (防止策2)

  //オーバーレイを出現させる
  $( "body" ).append( '<div id="modal-overlay"></div>' ) ;
  $( "#modal-overlay" ).fadeIn( "slow" ) ;

  //コンテンツをセンタリングする
  centeringModalSyncer() ;

  //コンテンツをフェードインする
  $( "#modal-content" ).fadeIn( "slow" ) ;

  //[#modal-overlay]、または[#modal-close]をクリックしたら…
  $( "#modal-overlay,#modal-close" ).unbind().click( function(){

    //[#modal-content]と[#modal-overlay]をフェードアウトした後に…
    $( "#modal-content,#modal-overlay" ).fadeOut( "slow" , function(){

      //[#modal-overlay]を削除する
      $('#modal-overlay').remove() ;

    } ) ;

  } ) ;

} ) ;

//リサイズされたら、センタリングをする関数[centeringModalSyncer()]を実行する
$( window ).resize( centeringModalSyncer ) ;

  //センタリングを実行する関数
  function centeringModalSyncer() {

    //画面(ウィンドウ)の幅、高さを取得
    var w = $( window ).width() ;
    var h = $( window ).height() ;

    // コンテンツ(#modal-content)の幅、高さを取得
    // jQueryのバージョンによっては、引数[{margin:true}]を指定した時、不具合を起こします。
//    var cw = $( "#modal-content" ).outerWidth( {margin:true} );
//    var ch = $( "#modal-content" ).outerHeight( {margin:true} );
    var cw = $( "#modal-content" ).outerWidth();
    var ch = $( "#modal-content" ).outerHeight();

    //センタリングを実行する
    $( "#modal-content" ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} ) ;

  }

} ) ;





//描画に使用するjsを記述


// 1)確認ボタンが押されたら 入力フォームを非表示にして入力内容をテキストで表示する
// 2)訂正ボタンが押されたら デフォルトの画面に戻す
// 3)送信ボタンが押されたら 送信完了画面を表示する


/*
 * 表示・非表示の制御
 */
  var change = function(type){
    if(type === true){
      $(".def").hide();
      $(".hide").show();
    }else{
      $(".def").show();
      $(".hide").hide();
      $(".del").remove(); //確認画面で表示したテキストを削除
    }
  };

/*
 * 確認ボタンが押されたら
 */
  //   var button = document.getElementById("modal-open");

  //   button.addEventListener("click", function(e) {
  //   e.preventDefault();
  //  //  $(".fm").each( function() {
  //  //    var id = $(this).attr("id");
  //  //    var fm = $("#"+id);
  //  // //フォームのタイプによって処理を分岐
  //  //    switch( fm.prop("type") ){
  //  //      case 'text':
  //  //        $(fm).after('<span class="hide del">'+fm.val()+'</span>');
  //  //      break;
  //  //      case 'radio':
  //  //        var val = $("#"+id+":checked");
  //  //        if( $(val).prop('checked') ) {
  //  //          $(fm).after('<span class="hide del">'+val.val()+'</span>');
  //  //        }
  //  //      break;
  //  //      case 'textarea':
  //  //        var val = fm.val();
  //  //        val = val.replace(/\n/g, "<br />");
  //  //        $(fm).after('<span class="hide del">'+val+'</span>');
  //  //      break;
  //  //    }
  //  //  });
  //  //  change(true);

  //   var textForm = document.getElementById("textForm").value;

  //       // 取得した値を別のフォームに表示
  //   var resultForm = document.getElementById("resultForm");
  //       resultForm.value = textForm;
  // });
/*
 確認ボタンが押されたら、class=”fm”の要素を取得し、
 ループしながらフォームタイプに応じて処理します。
 チェックボックスとラジオボタンはチェックされていれば処理、テキストエリアは改行の処理を行います。
 走査した要素の下に入力した値を追加し、テキストエリアなどを非表示にします。
 ここでは汎用的にフォームタイプで処理していますが、複雑な処理が必要ならば、idごとに処理しても良いと思います。
 */


 /*
 * 訂正ボタンが押されたら
 */
  $(document).on('click','#back',function(){
    change();
  });


/*
 * 送信ボタンが押されたら
 */
  // $(document).on('click','#send',function(){
  //   var data = $("#form").serialize();

  //     $.ajax({
  //         type: "POST",
  //         url: "mail.php",
  //         data: data,
  //         success: function(callback){

  //         }
  //     });

  //   $("#form").html('送信しました');
  //   reset();
  // });

/*
フォームの中身をメッセージで置き換えます。
PHPなどに値を渡して処理したいのであれば、非同期通信で処理します。
そのPHPでセンドメール処理を行えば、メールフォームになるって事ですね。
 */






