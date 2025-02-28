$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
    setTimeout(() => {
      alert('Giờ em mở cửa phòng ra đi á. hí hí')    
  }, 7000);
  const audio = document.querySelector('audio')
  audio.play();
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }
});
