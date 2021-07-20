<%*
  function getUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  var out = '';
  var exclude_tags = [
    '#double_click_me'
  ];
  var tUnique = tp.file.tags.filter(getUnique);
  var tArr = tUnique.filter(t => exclude_tags.includes(t) === false);
  if (tArr.length) {
    tArr.sort();
    var tStr = tArr.join(', ').replace(/#/g,'');
    out = '[' + tStr + ']';
  }
%><%* tR += out %>