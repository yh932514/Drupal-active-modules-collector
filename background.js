chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' red!');
  chrome.tabs.executeScript({
    code: 'var row =0; var x=document.getElementsByClassName("form-checkbox"); for(i=0; i<x.length; i++){if(!x[i].checked){x[i].parentNode.parentNode.parentNode.style.display= "none";} else{row++;}}; var y =document.getElementsByTagName("details");  for(j=0; j<y.length; j++){y[j].setAttribute("open", "true");}; var a =document.getElementsByClassName("admin-requirements");  for(z=0; z<a.length; z++){if(a[z].innerHTML.indexOf("Requires") == -1){a[z].style.display="none";} else{a[z].style.color="red";}}; alert("There are "+ row +" active modules.");'
  });
});
//
 //