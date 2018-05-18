var instruct = document.getElementById("instruct");
var video = document.getElementById("myVideo");
var level = document.getElementById("level");
var object = document.getElementById("object");
var tostart = document.getElementById("tostart");
var credits = document.getElementById("credits");
var end = document.getElementById("end");
var instructChinese = document.getElementById("instructChinese");
var language = document.getElementById("language");
var skip = document.getElementById("skip");
var lan = 0;


setInterval(check,500);

//front page
function begin(){
   fade();
   setTimeout(introStart, 2000);
}

function changeLanguage(){
  if(lan === 0){
    lan = 1;
    instruct.style.animation = "disappear 1s 1 forwards";
    setTimeout(function(){instructChinese.style.display = "block";instructChinese.style.animation = "appear 1s 1 forwards";},1000);
  }else{
    lan = 0;
    instructChinese.style.animation = "disappear 1s 1 forwards";
    setTimeout(function(){instruct.style.animation = "appear 1s 1 forwards";},1000);    
  }
}

function instructIn(){
   video.currentTime = video.duration;
   LAYER = 100;
   skip.style.display = "none";
   language.style.display = "block";
   language.style.animation = "appear 2s 1 forwards";
   instruct.style.display = "block";
   instruct.style.animation = "appear 2s 1 forwards";
   setTimeout(function(){tostart.style.display = "block";tostart.style.animation = "appear 2s 1 forwards";},7000);
}

function fade(){
    document.getElementById("start").style.display = "none";
    document.getElementById("title").style.display = "none";
}

//transition
function levelShowUp(i){
    level.style.animation = "none";
    level.src = "assets/layer"+i+".png";
    level.style.display = "block";
    level.style.animation = "circle 5s 1 forwards";
    setTimeout(function(){level.style.display = "none";},6000);
}

var LAYER = 100;

//intro
function introStart(){
   video.style.display = "block";
   setTimeout(levelShowUp(7),1000);
   setTimeout(function(){video.play();skip.style.display = "block";skip.style.animation = "appear 2s 1 forwards";},7000);
   LAYER = 10;
}

function skipped(){
  instructIn();
}

function realstart(){
  LAYER = 2;
  tostart.style.display = "none";
  instruct.style.display = "none";
  language.style.display = "none";
  instructChinese.style.display = "none";
}

//layers
var good = false;

function check(){

   if(LAYER === 10 && video.currentTime === video.duration ){
       instructIn();
   }
   
   if(LAYER != 0 && LAYER != 100 && LAYER != 6 && LAYER!= 10 && video.currentTime === video.duration){
    
    if(good === false){
       LAYER = LAYER + 1;
    }else{
       LAYER = LAYER - 1;
       good = false;
   }

       objectFeature(LAYER);
       video.src = "assets/" + LAYER + ".mp4";
       setTimeout(levelShowUp(LAYER),1000);
       setTimeout(function(){video.play();},7000);
  }

  if((LAYER === 6 || LAYER === 0 )&& video.currentTime === video.duration){
    video.style.display = "none";
    setTimeout(function(){end.style.display = "block";end.style.animation = "circle 5s 1 forwards";},700)
    setTimeout(function(){credits.style.display = "block";credits.style.animation = "appear 2s 1 forwards";},6000);
    setTimeout(function(){replay.style.display = "block";replay.style.animation = "appear 2s 1 forwards";},9000);
  }

  checkTime(LAYER);
}

var widths = ["35%","20%","25%","30%","30%"];
var heights = ["45%","50%","40%","30%","40%"];
var tops = ["10%","20%","18%","20%","50%"];
var lefts = ["27%","50%","40%","35%","40%"];

var startTime = ["31","32","35","38","36"];
var endTime = ["38","36","41","43","42"];


function objectFeature(i){
    object.style.width = widths[i-1];
    object.style.height = heights[i-1];
    object.style.top = tops[i-1];
    object.style.left = lefts[i-1];
}

function checkTime(i){
    if(video.currentTime > startTime[i-1]&&video.currentTime <endTime[i-1]){
      object.style.display = "block";
    }else{ 
      object.style.display = "none";
  }
}

function clicked(){
   video.src = "assets/good" + LAYER + ".mp4";
   setTimeout(function(){video.play();},1000);
   good = true;
}

function restart(){
  document.getElementById("rebutton").href = "frontPage.html";
}



