//function clickEvent() {
   // alert('クリックされました');
//}
//ボタンが押された時に AddStringToTextarea()が発動して、
//テキストボックスのsampleUserInputをUserString変数に入れて テキストエリア"\n"で行を開けて
//テキストエリアのsampleInputedListに追加している

function AddStringToTextarea() {
    
    var UserString = document.getElementById('sampleUserInput').value;
    alert(UserString);
    document.getElementById('sampleInputedList').value += UserString + "\n";
 }
