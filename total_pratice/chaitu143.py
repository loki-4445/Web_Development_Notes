name=input("please enter your name")
play=input("do you want to play :  yes or no")
quesans={
    "who is the prime minsiter of India":"Narendhra modi",
    "what is the capital of India":"New Delhi",
    "who is the upcoming cm of ap":"pavan kalayan",
    "who is the topper if it calss":"sai krishna",
    "who is the ceo of hcl":"chaitu",
}
if play.lower()!= "no":
    print("welcome to srk play zone")
    for ques in quesans:
        print(ques)
        marks=0
        ans=input("please enter your answer")
        if quesans[ques].lower()== ans.lower():
            print("your answer is correcrt")
            marks+=1
        else:
                print("your answer is wrong")
    print("you gain no of marks=",marks)
    percentage=marks/len(quesans)*100
    print(percentage)
    if percentage>=70:
        print("your qualifed for next level")
    else:
        print("your not qualified")
else:
        print("better luck next time or visit once again")