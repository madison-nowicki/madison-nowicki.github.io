photos = ["/final_project/clairebakes/pumpkinmuffins.png", "/final_project/clairebakes/lemoncake.png", "/final_project/clairebakes/lemonbundt.png", "/final_project/clairebakes/cupcakes.png", "/final_project/clairebakes/bananachipmuffins.png"]

captions = ["@williamssonoma gf pumpkin muffins are the first things I baked when I realized I really enjoyed the process 🍁 they’re one of my favorite easy bakes and make the kitchen smell happy 💖 Id like to make more requested recipes and discuss requested topics in my captions! I’ll put a story up to ask for requests — can be related to recipe development, baking at altitude, gluten free questions, ED recovery related, or you can request a recipe! Please give me your feedback, I love connecting with family and friends here 😇 All love Xx #clairebakes",

"The texture of this gluten free lemon cake is what my dreams are made of🦋🍋 I had to include the video to show how satisfying the cut was😍 my summer baking is in full swing but my exciting project is not ready yet! I’ll announce it as soon as I perfect a couple recipes! In the meantime- go make this at home!",

"Sending my GF lemon Bundt cake with coconut milk glaze off with my parents to a patriots watch party tonight… I hope it tastes good 🙏 🍋🥥 all love xx #clairebakes",

"IM TERRIBLE AT PIPING OKAY 😖 but my last night at home called for gf df cupcakes!!! With pink frosting and fairy dust (see second picture) 🦄🍬🧁🧚🏼‍♀️",

"My favorite thing to do is break muffins in half to see the insane amount of chocolate chips I put in them 😈 I made cinnamon sugar infused coconut oil a while ago and it was perfect for these gf df banana chip muffins 🍌 I love you💖 XX #clairebakes"]

function generate() {
  random= Math.floor(Math.random()*5)
  console.log(random)
  postphoto= document.getElementById("photo")
  postcaption= document.getElementById("caption")
  postphoto.src= photos[random]
  postcaption.innerHTML= captions[random]
}
