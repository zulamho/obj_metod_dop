function generateSongText(number) {
    let a = 'бутылок'
  
  for(let i = number ; i > 0 ; i--){ 
   if(i <= 4 && i > 1){
     a = 'бутылки'
   }
  if(i == 1 ){
    a = 'бутылка'
  }
  
   console.log(`${i} ${a} пива на стене, ${i} ${a} пива!
  Возьми одну, пусти по кругу, ${i-1} ${a} пива на стене! `) 
  
  }
  }
  (generateSongText(99))
  