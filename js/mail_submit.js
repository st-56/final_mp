document.getElementById("myform").addEventListener("submit", function (event) {
  event.preventDefault(); // 防止表單的默認提交行為

  // 在這裡可以添加處理提交的邏輯，例如發送表單數據到後端

  // 彈出提交成功的提示框
  alert("提交成功！");

  // 如果你想在提示框關閉後進行其他操作，可以在這裡添加代碼

});