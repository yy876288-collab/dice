gamePattern=[]

 var buttonColors=["red","blue","green","yellow"]
 function nextSequence(){
     random_number= Math.floor(Math.random()*4)
     return random_number
 }   


random_chosen_color= buttonColors[nextSequence()]
 gamePattern.push(random_chosen_color)

$("#" + random_chosen_color).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);





