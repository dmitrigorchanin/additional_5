module.exports = function check(str, bracketsConfig) {

  if (str.split('').length%2!=0){
    console.log("false")
    return false;
  }
  var Config = new Object();

  for (var i=0; i<bracketsConfig.length;i++){
    Config[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }

  var array = str.split('');
  var stek = [];

  for (var i = 0; i<=array.length;i++){
    if (i===array.length){
      if (stek.length!=0){
          return false;
      }
      else {
          return true;
      }
    }
    if (array[i]===stek[0]){
      stek.shift();
    }
    else if (array[i] in Config){
        stek.unshift(Config[array[i]]);
    }
    else{
        return false;
    }

  }
  return true;
  
}
