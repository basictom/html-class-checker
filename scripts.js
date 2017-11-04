$(document).ready(function() {
  $('#checkIt').click(function() {
    var userInput = $('#inputHTML').val();
    let fail = $('#fail').text();
    let pass = $('#match').text();
    userInput = $.trim(userInput);
    let styleTop = userInput.indexOf("<style>");
    let styleBott = userInput.indexOf("</style>");
    let styleTag = styleBott - styleTop;
    let newArray = [];
    let styles = [];

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

      let sortArray = newArray.filter(function(value, index, array){
        if(value){
          return index=array.indexOf(value);
        }
      });

      if(userInput.indexOf("style")==-1){
        alert("No style tag in head!!");
      }else{
        styles = userInput.substr(styleTop, styleTag);
      }

      // let classNames = styles.substr(".", styles.indexOf("{"));
      let classes = styles.match(/\.([a-z0-9\-_])*/gi).map(function(str){
        if(str.charAt(0) == "."){
          str = str.slice(1);
        }
        // console.log(str);
        return str;
      });

      let matched;
      let notMatched;

      $.each(sortArray, function(index, htmlValue){
        // console.log(value);
        $.each(classes, function(i, headValue){
          if(htmlValue == headValue){
            console.log("matched");
            matched = headValue;
          }else{
            console.log("in style tag but not HTML");
            notMatched = htmlValue;
          }
        })
      });

      fail = "Testing string";

    });
  })
});
