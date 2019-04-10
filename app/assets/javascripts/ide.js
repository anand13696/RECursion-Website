$(document).ready(function() {
  // console.log('Hi! from IDe.js');
  $(function(){
    window.codemirror_editors = {};
    $('.codemirror').each(function(){
      var $el = $(this);
      codemirror_editors[$el.attr('id')] = CodeMirror.fromTextArea($el[0],
        { mode: "text/x-csrc", 
          tabMode: "indent",
          textWrapping: false,
          lineNumbers: true,
          lineWrapping: true,
          viewportMargin: Infinity,
          matchBrackets: true
        });
    });
  });
});