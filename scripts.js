$(document).ready(function() {
  $('#sendIt').click(function() {
    var userInput = $('#inputHTML').val();
    let fail = $('#fail').text();
    let pass = $('#extraClasses').text();
    userInput = $.trim(userInput);
    let styleTop = userInput.indexOf("<style");
    let styleBott = userInput.indexOf("</style>");
    let styleTag = styleBott - styleTop;
    let newArray = [];
    let styles = [];

    clearDivs();

    $(userInput).find('[class]').each(function(index){
      var clss = $(this).attr('class');
      if(clss.indexOf(" ")){
        clss = clss.replace(/ /g, ',');
        clss = clss.split(',');
        $.each(clss,function(x,y){
          newArray.push(y);
        });
      }else{
        newArray.push($(this).attr('class'));
      }

      if(newArray == ""){
        alert("No classes were found.");
      }

      });

      if(userInput.indexOf("<style")==-1 || userInput.indexOf("<style") == ""){
        alert("No style tag in head!!");
        clearDivs();
      }else{
        styles = userInput.substr(styleTop, styleTag);
      }

      let classes = styles.match(/\.([a-z0-9\-_])*/gi).map(function(str){
        if(str.charAt(0) == "."){
          str = str.slice(1);
        }
        return str;
      });

      let removeDupes = (arr) => {
        let a = new Set(arr);
        let b = a.values();
        return Array.from(b);
      }

      let uniqueClasses = removeDupes(classes);
      let htmlClasses = removeDupes(newArray);

      let outputArray = [];
      let count = 0;

      // uniqueClasses and htmlClasses are compared here and
      // push anything that isn't matched into outputArray
      $.grep(uniqueClasses, function(el) {
        if($.inArray(el, htmlClasses) == -1)
          outputArray.push(el);
          count++;
      });

      $.each(outputArray, function(index, value){
        if(value != undefined){
          $('#extraClasses').append("<div>" + value + "</div>");
        }
      });


      function clearDivs(){
        $('#extraClasses').html("");
      };

  })
});
