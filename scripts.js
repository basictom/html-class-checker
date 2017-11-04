$(document).ready(function() {
  $('#checkIt').click(function() {
    var userInput = $('#inputHTML').val();
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

      // console.log(styles);

      console.log($(this).css("class"));

      // console.log(sortArray);
      // console.log(styles);

      // $(sortArray).each(function(index, value){
      //   console.log(index);
      //   console.log(value);
      //   console.log(styles.indexOf(value));
      //   if(styles.indexOf(value)){
      //     console.log("matched styles");
      //   }else{
      //     console.log("unmatched styles");
      //   }
      // });

    });
  })
});


// $( document ).ready(function() {
//
//  $( "#checkIt" ).click(function() {
//  var myArray;
//  var unique;
//  var sourceStyles;
//
//  $("#results").css("display","none");
//
//  clearDivs();
//
//   myArray = [];
//
//   // grab the source code
//   var txtHold = $("#inputHTML").val();
//   txtHold = $.trim(txtHold);
//   // get rid of all spaces (multi classes) first
//   $(txtHold).find('[class]').each(function(index){
//       var tmp = $(this).attr('class');
// 	  if(tmp.indexOf(" ")!==-1){
// 		tmp = tmp.replace(/ /g, ',');
// 		tmp = tmp.split(',');
// 		$.each(tmp,function(i,l){
// 		 myArray.push(l);
// 		});
// 	  }else{
// 		  myArray.push($(this).attr('class'));
// 	  }
//   });
//
//   // check to see that classes were found
//   if(myArray == ""){
// 	alert("Your input doesn't have any classes.");
// 	clearDivs();
// 	return;
//   }
//
//   // get rid of the dupes in the array
//   unique=myArray.filter(function(itm,i,a){
//     if(itm){ return i==a.indexOf(itm); }
//   });
//
//
//   // sort it
//   unique.sort();
//
//   // grab the <style> data from the input source code
//   if(txtHold.indexOf('@media')==-1){
// 	alert("Your input has no media query (mobile styles).");
// 	clearDivs();
//   }else{
// 	sourceStyles = txtHold.substr(txtHold.indexOf('@media'),(txtHold.indexOf('</style>',txtHold.indexOf('@media'))-txtHold.indexOf('@media')));
//   }
//
//   // loop through the array
//   $( unique ).each(function(index,value){
//
// 	 // see if each class is present in the <style>
// 	 if(value != undefined){
//
// 		 if(sourceStyles.indexOf(value)!=-1){
//
// 		  if(sourceStyles.indexOf(value+"]")!=-1 | sourceStyles.indexOf(value+" ]")!=-1 | sourceStyles.indexOf(value+"{")!=-1 | sourceStyles.indexOf(value+" {")!=-1){
//         console.log(sourceStyles.indexOf(value));
// 		   $( "#match" ).append("<div>" + value + "</div>");
// 		  }else{
// 		   $( "#fail" ).append("<div>" + value + "</div>");
// 		  }
// 		 }else{
// 		  $( "#fail" ).append("<div>" + value + "</div>");
// 		 }
// 	 }
// 	 $("#results").css("display","block");
//
//   });
//
//   function clearDivs(){
//    // clear the results divs
//    $( "#match" ).html("");
//    $( "#fail" ).html("");
//   }
//
//   });
//
// });
