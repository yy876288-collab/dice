import random

word_list=["apple","banana"."kiwi"]
chosen_word= random.choice(word_list)
word_length= len(chosen_word)

display=[]

for i in range(word_length):
    display+="_"
print(display)    

game_over=False
while not game_over:
    guessed_letter= input("guess the letter. ")
    for position in range(word_length):
        letter=chosen_word[position]
        if letter==guessed_letter:
            display[position]=guessed_letter
    print(display)  

    if guessed_letter not in chosen_word:
        lives -=1
        if lives==0:
            game_over=True
            print("you lose.")  
    if "_" not in display:
        game_over=True
        print("you win.")            


