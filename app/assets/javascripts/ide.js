
// $(document).ready(function(){
//   console.log('Hi from IDE ');
// });
// $(document).on('turbolinks:load', function() {
//   mode = $('#mode').val();
//   snippets = [];
//   var cEditor = new CodeMirror(document.getElementById("code_editor"), {
//     lineNumbers: true,
//     extraKeys: null,
//     mode: mode,
//     lineWrapping: true,
//     viewportMargin: Infinity,
//     matchBrackets: true
//     // extraKeys: {
//     //     "F11": function(cm) {
//     //       setFullScreen(cm, !isFullScreen(cm));
//     //     },
//     //     "Esc": function(cm) {
//     //       if (isFullScreen(cm)) setFullScreen(cm, false);
//     //     }
//     //   }
//   });
//   height = $('.container-fluid').width();
//   cEditor.setSize(height-2,400);
//   if(gon.submission) {
//     $('#mode').val(gon.lang_name)
//     cEditor.setOption("mode",gon.lang_name);
//     cEditor.setValue(gon.user_source_code);
//   } else {
//     var lang_code = $('#mode option:selected');
//     $(lang_code).addClass('pre');
//     fetch_snippets($(lang_code).text());
//   }
//   setTimeout(function() {
//     cEditor.refresh();
//   },1000);

//   $('#mode').change(function(event) {
//     var pre = $('#mode').find('.pre');
//     var lang_code = $('#mode option:selected');
//     cEditor.setOption("mode",$(this).val());
//     snippets[$(pre).text()] = cEditor.getValue();
//     if( snippets[$(lang_code).text()] == undefined) {
//       fetch_snippets($(lang_code).text());
//     } else {
//       cEditor.setValue(snippets[$(lang_code).text()]);
//     }
//     $(pre).removeClass('pre');
//     $(lang_code).addClass('pre');
//     $('#default-lang').text("Set "+$(lang_code).text()+ " as default");
//   });

//   $('#theme li').click(function() {
//     cEditor.setOption("theme",$(this).attr('value'));
//   });
//   $('#autocomplete').click(function(event) {
//     event.stopPropagation();
//   });
//   $('#autocomplete input').change(function(event) {
//     if($(this).is(":checked")){
//         cEditor.setOption("extraKeys", {"Ctrl-Space": "autocomplete"});
//       } else {
//         cEditor.setOption("extraKeys", null);
//       }
//   });

//   $("#default-lang").click(function(event) {
//     /* Act on the event */
//       event.stopPropagation();
//       var lang_code = $('#mode option:selected').text();
//       $.ajax({
//         url: "/users/set_lang/"+lang_code,
//         success: function(data){
//           if( data['status'] == 'OK') toastr['success'](lang_code+" is set as your default language");
//           else if( data['status'] == 'SET') toastr['warning'](lang_code+" is already your default language");
//           else toastr['error']('try again');
//         },
//         error: function(data) {
//           toastr['error']('Cannot set please try again');
//         },
//         type: 'POST'
//       });
//   });


// // $(function(){
// //   window.codemirror_editors = {};
// //   $('.codemirror').each(function(){
// //     var $el = $(this);
// //     codemirror_editors[$el.attr('id')] = CodeMirror.fromTextArea($el[0],
// //       { mode: "text/html", 
// //         tabMode: "indent",
// //         textWrapping: true,
// //         lineNumbers: true,
// //       });
// //   });
