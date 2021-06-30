let men = {
    name: 'Adam',
    lastName: 'Amkhadov',
    age: 24,
    height: 1.88,
    weight: 88,
    login: "amkhadov2014@mail.ru",
    password: 'adam777',
    accountMoney: 2000,
    getIMT: function(){
    return ( this.weight / this.height ** 2 )
   
    }  ,
  imtResult: function(getIMT){
    if(getIMT <= 18){
      return 'недостаточный вес'
    }if(getIMT > 18 && getIMT < 25){
      return 'Вес в норме'
    }if(getIMT > 25 && getIMT < 29){
      return 'Избыточный вес'
    }if(getIMT > 29){
      return 'Ожирение'
    }
  
  },
  }
  men.placeResidence = {
      city: 'Grozny',
      street: 'Borova 3',
      house: 'кв '+14,
    }
  
  console.log(men)
  
  let a = 'adam777'
  if(a == men.password){
    console.log(`Добро пожаловать, ${men.name}.  Ваш логин ${men.login}`)
  } else {
    console.log(`Указанный пароль ${a} не верен. Попробуйте еще раз"`)
  }
  
  let obj = {
    cash: 10000,
  giveMoney: function(number){
    if(number > this.cash / 2){
      return 'Делахь, сайгах дац са оццал ахч'
    }if(number < this.cash / 2){ 
      return `Хьаэца хьай ${number}. Соьгахь диснаг х1ар ду: ${this.cash-number}. Сих хьадалахь!`
    }
    }
  }
  obj.fullName = 55;
  let lottery = 55;
  if(obj.fullName == lottery){
    men.accountMoney = 1000000
  }
  
  console.log(men.getIMT())
  console.log(men.imtResult(men.getIMT()))
  console.log(obj.giveMoney(7500))
  console.log(obj.giveMoney(2500))
  
  