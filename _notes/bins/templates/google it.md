<%*
  if (tp.file.selection() === "" ) {
    new Notice('Please select some text first!');
  } else {
    %>[<% tp.file.selection() %>](https://google.com/search?q=<% encodeURIComponent(tp.file.selection()) %>)<%*
  }
%>