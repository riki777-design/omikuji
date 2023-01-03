window.onload = function () {

    const list = {
        "超 神がかった運気でしょう":5,
        "ウルトラレアが舞い込んでくるでしょう":5,
        "安心して。あなたは愛されしモフモフの神":5,
        "あなたがトレンド。あなたを軸に地球も回る。":10,
        "今日の空もあなたの味方です":20,
        "運気爆上がりでしょう":20,
        "向かうとこテキなし":35
    };

  
    var timer;
    // START・STOPボタンクリックのイベント
    document.getElementById("button").onclick = function () {
      // START
      if (this.textContent == "START") {
        // ボタンのテキストを"STOP"に変更
        this.textContent = "STOP";
  
        // ルーレットタイマーを設定
        timer = setInterval(function () {
          var random = Math.floor(Math.random() * Object.keys(list).length);
          document.getElementById("img").src = "img/" + Object.keys(list)[random] + ".png";
        }, 50);
      // STOP
      } else {
        // ボタンのテキストを"START"に変更
        this.textContent = "START";
  
        var rate = 0;
        var random = Math.floor(Math.random() * 100);
        for(var data in list){
          rate += list[data];
          if(random <= rate){
            document.getElementById("img").src = "img/" + data + ".png";
            document.getElementById("result").innerText =  data ;
            
            // ルーレットタイマーを停止
            clearInterval(timer);
            return;
          }
        }
      }
    };
  };