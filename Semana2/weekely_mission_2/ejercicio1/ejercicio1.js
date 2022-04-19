const repo =  {
    twitter:{
        socialMedia: 'twitter',
        user: '@AnG_eLiN',
        hashtag: '#selfiesforchan'
    },
    facebook: {
        user: 'Angel Moreno',
        apodo:'দেবদূত',
        post: 200,
        friends: 323,
    },
    uber:{
        user1: 'Angel David',
        travels:{
            price: 69.90,
            price1: 49.91,
            price2: 59.98,
            price3: 42.01
        },
      //  getGeneralInfo: function(){
         //   return `facebook ${this.apodo} tiene estos post ${this.post}`
        //  }
    }
}
let  {user , apodo, friends} = repo.facebook;
let {price, price1,price2,price3}= repo.uber.travels;
   
   console.log("twitter "+ repo.twitter.user)
  
   console.log("facebook de "+ user+" su apodo es " + apodo + " tienes " + friends+ " amigos en total" )

 console.log("los precios de tus viajes son " +price+","+price1+","+price2+","+price3)

   
  