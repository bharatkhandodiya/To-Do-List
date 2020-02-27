// Create a "close" button and append it to each list item
var close_list = document.getElementsByTagName("li");
var i;
for(i=0;i<close_list.length;i++){
  var create = document.createElement("button");
  var t = document.createTextNode("Remove");
  create.className ="close";
  create.appendChild(t);
  close_list[i].appendChild(create);
}

// Create a "checked" button and append it to each list item

// var check_list = document.getElementsByTagName("li");
// var i;
// for(i=0;i<check_list.length;i++){
//   var checked = document.createElement("button");
//   var checked_Text = document.createTextNode("Finish");
//   checked.className ="checked";
//   checked.appendChild(checked_Text);
//   check_list[i].appendChild(checked);
// }

// Click on a close button to hide the current list item

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('checked');
// console.log(list);
// list.addEventListener('click', function() {
//    list.style.textDecoration="line-through";
//    console.log(list)
// });

// Add function

function add(){
	var li = document.createElement("li");
//<li></li>
  
  var inputValue = document.getElementById("user_input").value;
// abc
  var text = document.createTextNode(inputValue);
  li.appendChild(text);
  if(inputValue === ""){
    alert("Enter Your List");
  }else{
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("user_input").value="";
  
  var create = document.createElement("button");
  var t = document.createTextNode("Remove");
  create.className ="close";
  create.appendChild(t);
  li.appendChild(create)
  
  // var checked = document.createElement("button");
  // var checked_Text = document.createTextNode("Finish");
  // checked.className ="checked";
  // checked.appendChild(checked_Text);
  // li.appendChild(checked);
  
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }  
}



