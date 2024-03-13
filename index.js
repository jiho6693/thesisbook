const apiKey = "2fcd83828c7a6dd5b3be29bc0b6fdd9c"
let lat = "41.825226"; 
let lon = "-71.418884";

const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+ lat + '&lon=' + lon +'&units=imperial&appid='+ apiKey +'';




function createRain(){
    var rainContainer = document.createElement("div");
    rainContainer.id = "rain";
    for (var i = 0; i < 60; i++) {
      var drop = document.createElement("div");
      drop.className = "drop";
      drop.style.left = Math.random() * 100 + "%";
      drop.style.animationDuration = (1+ Math.random() * 2) + "s";
      rainContainer.appendChild(drop);
    }

    document.body.appendChild(rainContainer);

    setTimeout(function() {
        rainContainer.remove();
      }, 6000);

      document.body.classList.add('blur1');
      setTimeout(function() {
        document.body.classList.remove('blur1');
      }, 6000);

    }

function createClouds(){
    document.body.classList.add('blur');
      setTimeout(function() {
        document.body.classList.remove('blur');
      }, 6000);
}

//reset
document.addEventListener("DOMContentLoaded", function() {
    var myElement = document.getElementById("myElement0");
    myElement.addEventListener("click", function() {
      location.reload(); // 페이지 새로고침
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var myElement = document.getElementById("myElement01");
    myElement.addEventListener("click", function() {
      location.reload(); // 페이지 새로고침
    });
  });


  // Night
function changeBackgroundColor() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "gray";

  setTimeout(function() {
      document.body.style.backgroundColor = ''; // 이전에 설정된 색상으로 돌아갑니다.
  }, 5000); 
}

document.addEventListener("DOMContentLoaded", function() {
  var myElement = document.getElementById("night");
  myElement.addEventListener("click", changeBackgroundColor);
});

// Dawn
function changeBackgroundColor1() {

  var brightness = 10; // 밝기를 계산합니다.
  var color = "rgb(" + Math.round(10 + 0.5 * brightness) + ", " + Math.round(10 + 0.5 * brightness) + "," + Math.round(30 + 1.5 * brightness) + ")";
  document.body.style.backgroundColor = color;
  document.body.style.color = "gray";

  setTimeout(function() {
      document.body.style.backgroundColor = '';
      document.body.style.color =''; // 이전에 설정된 색상으로 돌아갑니다.
  }, 5000);
}

document.addEventListener("DOMContentLoaded", function() {
  var myElement = document.getElementById("dawn");
  myElement.addEventListener("click", changeBackgroundColor1);
});

document.addEventListener("DOMContentLoaded", function() {
  var myElement = document.getElementById("dusk");
  myElement.addEventListener("click", changeBackgroundColor1);
});

// Sunrise
function changeBackgroundColor2() {
  var redness = 10; // 빨간 색감을 계산합니다.
  var color = "rgb(255, " + Math.round(41 + 2 * redness) + ", 30)";
  document.body.style.backgroundColor = color;
  document.body.style.color = "purple";

  // 5초 후에 원래 색상으로 변경합니다.
  setTimeout(function() {
    document.body.style.backgroundColor = '';
    document.body.style.color =''; // 이전에 설정된 색상으로 돌아갑니다.
  }, 5000); // 5초(5000 밀리초) 후에 실행됩니다.
}

document.addEventListener("DOMContentLoaded", function() {
  var myElement = document.getElementById("sunrise");
  myElement.addEventListener("click", changeBackgroundColor2);
});

document.addEventListener("DOMContentLoaded", function() {
  var myElement = document.getElementById("sunset");
  myElement.addEventListener("click", changeBackgroundColor2);
});

// Sunrise
function changeBackgroundColor3() {
  var redness = 10; // 빨간 색감을 계산합니다.
  var color = "white";
  document.body.style.color = "black";
  document.body.style.backgroundColor = color;

  // 5초 후에 원래 색상으로 변경합니다.
  setTimeout(function() {
    document.body.style.backgroundColor = '';
    document.body.style.color =''; // 이전에 설정된 색상으로 돌아갑니다.
  }, 5000); // 5초(5000 밀리초) 후에 실행됩니다.
}

document.addEventListener("DOMContentLoaded", function() {
  var myElement = document.getElementById("day");
  myElement.addEventListener("click", changeBackgroundColor3);
});





//   //노을 비 
//   document.addEventListener("DOMContentLoaded", function() {
//     var myElement = document.getElementById("myElement2");
//     myElement.addEventListener("click", changeBackgroundColor1);
//     myElement.addEventListener("click", createRain);

// });

// //day- clear
// function changeBackgroundColor2() {
//     document.body.style.backgroundColor = "White";
//   }
//   document.addEventListener("DOMContentLoaded", function() {
//     var myElement = document.getElementById("myElement3");
//     myElement.addEventListener("click", changeBackgroundColor2);
//   });

// //day - Rainy

//   document.addEventListener("DOMContentLoaded", function() {
//     var myElement = document.getElementById("myElement4");
//     myElement.addEventListener("click", changeBackgroundColor2);
//     myElement.addEventListener("click", createRain);

// });

// //dawn - cloudy
// function changeBackgroundColor3() {
//     document.body.style.backgroundColor = "rgb(69, 107, 221)";
//   }
//   document.addEventListener("DOMContentLoaded", function() {
//     var myElement = document.getElementById("myElement5");
//     myElement.addEventListener("click", changeBackgroundColor3);
//     myElement.addEventListener("click", createClouds);
//   });
// //dawn - Rainy
//   document.addEventListener("DOMContentLoaded", function() {
//     var myElement = document.getElementById("myElement6");
//     myElement.addEventListener("click", changeBackgroundColor3);
//     myElement.addEventListener("click", createRain);
//   });






// 시간대에 따른 배경색 변화


document.addEventListener("DOMContentLoaded", function() {
  // 첫 번째로 실행되는 배경색 변경 함수 호출
  changeBackgroundColor();

  // 5분마다 배경색 변경 함수를 호출하기 위한 setInterval 설정
  setInterval(changeBackgroundColor, 15000); // 5분(300초)마다 배경색이 변경되도록 설정

  function changeBackgroundColor() {
      var now = new Date();
      // var hours = now.getHours();
      // var minutes = now.getMinutes();
       var hours = 8;
      var minutes = 1;

      // 배경색 조건에 따라 처리
      if (hours >= 20 || hours < 5) {
          document.body.style.backgroundColor = "black";
          document.body.style.color = "gray";
          var element = document.getElementById("night");
          element.style.color = "rgb(3, 250, 56)";
      } else if (hours >= 5 && hours < 6) {
          var brightness = minutes; // 밝기를 계산합니다.
          var color = "rgb(" + Math.round(10 + 0.5 * brightness) + ", " + Math.round(10 + 0.5 * brightness) + "," + Math.round(30 + 1.5 * brightness) + ")";
          document.body.style.backgroundColor = color;
          document.body.style.color = "gray";
          var element = document.getElementById("dawn");
          element.style.color = "rgb(3, 250, 56)";
      } else if (hours >= 6 && hours < 7) {
          var redness = minutes; // 빨간 색감을 계산합니다.
          var color = "rgb(255, " + Math.round(41 + 2 * redness) + ", 30)";
          document.body.style.backgroundColor = color;
          var element = document.getElementById("sunrise");
          element.style.color = "rgb(3, 250, 56)";
      } else if (hours >= 7 && hours < 18) {
          document.body.style.backgroundColor = "white";
          var element = document.getElementById("day");
          element.style.color = "rgb(3, 250, 56)";
      } else if (hours >= 18 && hours < 19) {
          var redness = minutes; // 빨간 색감을 계산합니다.
          var color = "rgb(255, " + Math.round(150 - 2 * redness) + ", 30)";
          document.body.style.backgroundColor = color;
          var element = document.getElementById("sunset");
          element.style.color = "rgb(3, 250, 56)";
      } else if (hours >= 19 && hours < 20) {
          var brightness = minutes; // 밝기를 계산합니다.
          var color = "rgb(" + Math.round(10 + 0.2 * brightness) + ", " + Math.round(10 + 0.2 * brightness) + "," + Math.round(90 - brightness) + ")";
          document.body.style.backgroundColor = color;
          document.body.style.color = "gray";
          var element = document.getElementById("dusk");
          element.style.color = "rgb(3, 250, 56)";
      }
  }
});



  function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();

    // 시, 분, 초 추출
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // 시계 업데이트
    clock.textContent = `${hours}:${minutes}:${seconds}`;
  }

  // 1초마다 시계 업데이트 호출
  setInterval(updateClock, 1000);

  // 초기 로드 시 시계 업데이트 호출
  updateClock();




//날씨


fetch(url)
  .then(response => response.json())
  .then((data) => { console.log(data)
    const weather = data.weather[0].main;
    console.log(weather)
    if(weather === "Rain"|| weather === "" ){
    //rain
        var rainContainer = document.createElement("div");
    rainContainer.id = "rain";
    for (var i = 0; i < 60; i++) {
      var drop = document.createElement("div");
      drop.className = "drop";
      drop.style.left = Math.random() * 100 + "%";
      drop.style.animationDuration = (1+ Math.random() * 2) + "s";
      rainContainer.appendChild(drop);
    }

    document.body.appendChild(rainContainer);

    document.querySelector('body').classList.add('blur1');
    } 


    else if(weather === "Clouds"|| weather === "B" ){
        

    document.querySelector('body').classList.add('blur');
    }
    else if(weather === "Clear"){
        console.log("not bad")
        // document.querySelector('body').classList.add('blur');
    }else{

    }

  })

 window.addEventListener('load', getWeather);

