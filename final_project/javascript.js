photos = ["final_project/clairebakes/pumpkinmuffins.png", "final_project/clairebakes/lemoncake.png", "final_project/clairebakes/lemonbundt.png", "final_project/clairebakes/cupcakes.png", "final_project/clairebakes/bananachipmuffins.png"]

captions = ["@williamssonoma gf pumpkin muffins are the first things I baked when I realized I really enjoyed the process π theyβre one of my favorite easy bakes and make the kitchen smell happy π Id like to make more requested recipes and discuss requested topics in my captions! Iβll put a story up to ask for requests β can be related to recipe development, baking at altitude, gluten free questions, ED recovery related, or you can request a recipe! Please give me your feedback, I love connecting with family and friends here π All love Xx #clairebakes",

"The texture of this gluten free lemon cake is what my dreams are made ofπ¦π I had to include the video to show how satisfying the cut wasπ my summer baking is in full swing but my exciting project is not ready yet! Iβll announce it as soon as I perfect a couple recipes! In the meantime- go make this at home!",

"Sending my GF lemon Bundt cake with coconut milk glaze off with my parents to a patriots watch party tonightβ¦ I hope it tastes good π ππ₯₯ all love xx #clairebakes",

"IM TERRIBLE AT PIPING OKAY π but my last night at home called for gf df cupcakes!!! With pink frosting and fairy dust (see second picture) π¦π¬π§π§πΌββοΈ",

"My favorite thing to do is break muffins in half to see the insane amount of chocolate chips I put in them π I made cinnamon sugar infused coconut oil a while ago and it was perfect for these gf df banana chip muffins π I love youπ XX #clairebakes"]

function generate() {
  random= Math.floor(Math.random()*5)
  console.log(random)
  postphoto= document.getElementById("photo")
  postcaption= document.getElementById("caption")
  postphoto.src= photos[random]
  postcaption.innerHTML= captions[random]
}
