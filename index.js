const apiKey = "2fcd83828c7a6dd5b3be29bc0b6fdd9c"
let lat = "41.825226"; 
let lon = "-71.418884";

const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+ lat + '&lon=' + lon +'&units=imperial&appid='+ apiKey +'';


window.onload = function() {
  const textElement = document.getElementById('changing-text');
  const texts = [
    "This space changes according to your weather and time.",
    "Your space could be night or early dawn",
    "Also, could also have rain or be cloud",
    "The digital space is intertwined with reality"
  ];
  let index = 0;
  let intervalId; // setInterval 함수의 반환값을 저장할 변수

  const firstElement = document.getElementById('day');
  const secondElement = document.getElementById('night');
  const thirdElement = document.getElementById('dawn');
  const fourthElement = document.getElementById('rainy');
  const fifthElement = document.getElementById('cloudy');

  // 인터벌 시작 함수
  function startInterval() {
    intervalId = setInterval(() => {
      textElement.textContent = texts[index];
      index = (index + 1) % texts.length;

      // 텍스트에 따라 클릭할 요소 변경
      let clickElement;
      if (index === 0 || index === 1) {
        clickElement = firstElement;
      } else if (index === 2) {
        // 2번째 텍스트일 때, 두 개의 요소를 차례대로 클릭
        clickElement = [secondElement, thirdElement];
      } else if (index === 3) {
        clickElement = [fourthElement, fifthElement];
      }

      // 클릭할 요소가 배열이면 순서대로 클릭
      if (Array.isArray(clickElement)) {
        clickElement.forEach((element, i) => {
          setTimeout(() => {
            if (element) {
              element.click();
            } else {
              console.error(`${i+1}번째 클릭할 요소를 찾을 수 없습니다.`);
            }
          }, i * 1000); // 1초 간격으로 클릭
        });
      } else {
        // 클릭할 요소가 정의되어 있다면 바로 클릭
        if (clickElement) {
          clickElement.click();
        } else {
          console.error("클릭할 요소를 찾을 수 없습니다.");
        }
      }
    }, 2500);
  }

  // 버튼 클릭 이벤트 처리
  const playButton = document.getElementById('playbutton');
  playButton.addEventListener('click', function() {
    if (intervalId) {
      // 인터벌이 실행 중인 경우 멈추고 버튼 클래스를 토글
      clearInterval(intervalId);
      playButton.classList.add('disabled');
      intervalId = null;
    } else {
      // 인터벌이 실행 중이 아닌 경우 시작하고 버튼 클래스를 토글
      startInterval();
      playButton.classList.remove('disabled');
    }
  });

  // 페이지 로드 시 인터벌 시작
  startInterval();
}

// //reset
// document.addEventListener("DOMContentLoaded", function() {
//   var myElement = document.getElementById("myElement0");
//   myElement.addEventListener("click", function() {
//     location.reload(); // 페이지 새로고침
//   });
// });

// document.addEventListener("DOMContentLoaded", function() {
//   var myElement = document.getElementById("myElement01");
//   myElement.addEventListener("click", function() {
//     location.reload(); // 페이지 새로고침
//   });
// });

//rainy effect
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

      document.body.classList.add('blur1');
     
    }
//snowy

let snowInterval;

  function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake"); // 클래스 추가
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s"; // Randomize animation duration
    snowflake.style.opacity = Math.random(); // Randomize opacity
    document.body.appendChild(snowflake);
    setTimeout(() => {
      snowflake.remove();
    }, 10000); // Remove snowflake after 10 seconds
  }

  function snowfall() {
    snowInterval = setInterval(createSnowflake, 100); // Create a snowflake every 100 milliseconds
    document.body.classList.add('blur');
    
  }

  function stopSnowfall() {
    clearInterval(snowInterval); // Stop snowfall
    document.body.classList.remove("blur");
    
  }

//cloudy effect

function createClouds(){
    document.body.classList.add('blur');
      
}



  // Night
function changeBackgroundColor() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "gray";

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
  // setTimeout(function() {
  //   document.body.style.backgroundColor = '';
  //   document.body.style.color =''; // 이전에 설정된 색상으로 돌아갑니다.
  // }, 5000); // 5초(5000 밀리초) 후에 실행됩니다.
}

document.addEventListener("DOMContentLoaded", function() {
  var myElement = document.getElementById("day");
  myElement.addEventListener("click", changeBackgroundColor3);
});


// sunny
document.addEventListener("DOMContentLoaded", function() {
  var myElement = document.getElementById("sunny");

  myElement.addEventListener("click", clickHandler);

  function clickHandler() {
    var element = document.getElementById("sunny");
    element.style.color = "rgb(3, 250, 56)";
    var rainContainer = document.getElementById("rain"); // 비 효과를 삭제하기
    if (rainContainer) {
      rainContainer.remove(); // 비 효과를 없애기
      document.body.classList.remove('blur1'); // blur1 클래스 제거
    }

    // 3초 후에 클릭 이벤트 제거
    setTimeout(function() {
      myElement.removeEventListener("click", clickHandler);
    }, 3000);
  }
});


//  Rainy
document.addEventListener("DOMContentLoaded", function() {
  var myElement = document.getElementById("rainy");

  myElement.addEventListener("click", function() {
    createRain();
    var element = document.getElementById("rainy");
    element.style.color = "rgb(3, 250, 56)";

    // 3초 후에 비 효과를 없애기
    setTimeout(function() {
      element.style.color = ''; // 색상을 원래대로 변경
      var rainContainer = document.getElementById("rain"); // 비 효과를 삭제하기
      rainContainer.remove(); // 비 효과를 없애기
      document.body.classList.remove('blur1'); // blur1 클래스 제거
    }, 3000);
  });
});


//  cloudy

document.addEventListener("DOMContentLoaded", function() {
  var myElement = document.getElementById("cloudy");

  myElement.addEventListener("click", function() {
    createClouds();
    var element = document.getElementById("cloudy");
    element.style.color = "rgb(3, 250, 56)";

    // 3초 후에 색상 변경 및 흐린 효과 제거
    setTimeout(function() {
      element.style.color = ''; // 색상을 원래대로 변경
      document.body.classList.remove('blur'); // blur 클래스 제거
    }, 3000);
  });
});

// Snowy
document.addEventListener("DOMContentLoaded", function() {
  var myElement = document.getElementById("snowy");

  myElement.addEventListener("click", function() {
      var element = document.getElementById("snowy");
      element.style.color = "rgb(3, 250, 56)";
      snowfall(); // 눈 내리도록 호출

      // 3초 후에 눈 내림 효과를 없애기
      setTimeout(function() {
          element.style.color = ''; // 텍스트 색상을 원래대로 변경
          var snowflakes = document.querySelectorAll(".snowflake"); // 모든 눈 효과 선택
          snowflakes.forEach(function(snowflake) {
              snowflake.remove(); // 모든 눈 효과 삭제
          });
          stopSnowfall(); // 눈효과 중지
      }, 3000);
  });
});

 


//day- clear
// function changeBackgroundColor3() {
//     document.body.style.backgroundColor = "White";
//   }
//   document.addEventListener("DOMContentLoaded", function() {
//     var myElement = document.getElementById("sunny");
//     myElement.addEventListener("click", changeBackgroundColor3);
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
  document.addEventListener("DOMContentLoaded", function() {
    var myElement = document.getElementById("cloudy");
    myElement.addEventListener("click", createClouds);
  });






// 시간대에 따른 배경색 변화


document.addEventListener("DOMContentLoaded", function() {
  // 첫 번째로 실행되는 배경색 변경 함수 호출
  changeBackgroundColor();

  // 5분마다 배경색 변경 함수를 호출하기 위한 setInterval 설정
  setInterval(changeBackgroundColor, 5000); // 5분(300초)마다 배경색이 변경되도록 설정

  function changeBackgroundColor() {
      var now = new Date();
      var hours = now.getHours();
      var minutes = now.getMinutes();
      //  var hours = 18;
      // var minutes = 1;

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
          document.body.style.backgroundColor = "WhiteSmoke";
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





