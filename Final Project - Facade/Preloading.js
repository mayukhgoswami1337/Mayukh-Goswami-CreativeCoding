var song, walk, amp, fft, spectrum, vlume=0; var billboardchoice = 0;
var r = [];
//STREETLAMP
var streetlamp = [];
var streetlighting =[];

//BILLBOARDS
var billboard=[];
var eyes = [];
var lips = [];
var buy;

//bg
var bg3;
var bg2
var background2 = [];
var bg1 = [];
var background1 = [];
var backgr1 = [];

//haus
var haus = [];



function preload()  {
  //song = loadSound("Whisper.mp3");
  song = loadSound("alumo_-_Dubstepology.mp3");
  walk = loadAnimation("Walk_01.png","Walk_22.png");
  streetlamp[0] = loadImage("street lamp_01.png");
  streetlamp[1] = loadImage("street lamp_02.png");
  streetlamp[2] = loadImage("street lamp_03.png");
  streetlamp[3] = loadImage("street lamp_04.png");
  streetlamp[4] = loadImage("street lamp_05.png");
  streetlamp[5] = loadImage("street lamp_06.png");
  streetlamp[6] = loadImage("street lamp_07.png");
  streetlamp[7] = loadImage("street lamp_08.png");
  streetlamp[8] = loadImage("street lamp_09.png");
  streetlamp[9] = loadImage("street lamp_10.png");
  streetlamp[10] = loadImage("street lamp_11.png");
  streetlamp[11] = loadImage("street lamp_12.png");
  streetlamp[12] = loadImage("street lamp_13.png");
  streetlamp[13] = loadImage("street lamp_14.png");
  streetlamp[14] = loadImage("street lamp_15.png");
  streetlamp[15] = loadImage("street lamp_16.png");
  
  eyes[0] = loadImage("eyes_01.png");
  eyes[1] = loadImage("eyes_02.png");
  eyes[2] = loadImage("eyes_03.png");
  eyes[3] = loadImage("eyes_04.png");
  eyes[4] = loadImage("eyes_05.png");
  eyes[5] = loadImage("eyes_06.png");
  eyes[6] = loadImage("eyes_07.png");
  eyes[7] = loadImage("eyes_08.png");
  eyes[8] = loadImage("eyes_09.png");
  eyes[9] = loadImage("eyes_10.png");
  eyes[10] = loadImage("eyes_11.png");
  
  lips[0] = loadImage("Lips_01.png");
  lips[1] = loadImage("Lips_02.png");
  lips[2] = loadImage("Lips_03.png");
  lips[3] = loadImage("Lips_04.png");
  lips[4] = loadImage("Lips_05.png");
  lips[5] = loadImage("Lips_06.png");
  lips[6] = loadImage("Lips_07.png");
  lips[7] = loadImage("Lips_08.png");
  lips[8] = loadImage("Lips_09.png");
  lips[9] = loadImage("Lips_10.png");
  lips[10] = loadImage("Lips_11.png");
  lips[11] = loadImage("Lips_12.png");
  lips[12] = loadImage("Lips_13.png");
  
  buy = loadImage("buy.png");
  
  bg3 = loadImage("bg3.png");
  
  bg2 = loadImage("bg2.png");

  bg1[0] = loadImage("bg1_01.png");
  bg1[1] = loadImage("bg1_02.png");
  bg1[2] = loadImage("bg1_03.png");
  
  haus[0] = loadImage("haus1.png");
  haus[1] = loadImage("haus2.png");
  haus[2] = loadImage("haus3.png");
  haus[3] = loadImage("haus4.png");
  haus[4] = loadImage("haus5.png");
  haus[5] = loadImage("haus6.png");
  haus[6] = loadImage("haus7.png");
  haus[7] = loadImage("haus8.png");
  haus[8] = loadImage("haus9.png");
  haus[9] = loadImage("haus10.png");
  
}