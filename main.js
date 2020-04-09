(function() {
  function list(insert){

    this.setColors = function setColors(){
      var setList = []
      insert.replace(/(--\w+): (#\w+); \/\* (.+) \*\//gm, function(regex, attr, value, comment) {
        
        setList.push({
          attr,
          value,
          comment
        })
      })
      console.log(setList)
    }
  }

  var newList = new list(`
  --color: #000000; /* name colors */
  --text_color: #fff; /* texto colors */
  --title: #fff; /* title list */
  `);

  newList.setColors();

})()