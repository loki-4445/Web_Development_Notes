name=input("please enter your name")
play=input("do you want to play :  yes or no")
quesans={
    1:{
    "who is the prime minsiter of India":"Narendhra modi",
    "what is the capital of India":"New Delhi",
    "who is the upcoming cm of ap":"pavan kalayan",
    "who is the topper if it calss":"sai krishna",
    "who is the ceo of hcl":"chaitu",
    },
    2:{
        "who is the founder of infoysis":"narayana murthy",
        "who is the ceo of mucro soft ":"satya nadala",
        "who is the founder of janasena party":"pavan kalayan",
        "who is the best actor in telugu":"chrienjavi the boss ",
        "who is the president if India":"durapati muramu",
    },
    3:{
        "best touriest place in India":"goa",
        "best touriest place in chennai":"pondicheery",
        "who is the father of our nation":"mahatma gandhi",
        "who is the frist prsident of india":"rajendra prasad",
    },
    4:{
        "when did world war start":"1914 28th july",
        "how many people died in world war 1":"8.5 million people",
        "when did world war ended":"1918 11 november",
        "who is the don of the germany in 2nd world war":"Hittler",
        "when was 2nd world war start":"1st sept 1939",
    },
    5:{
        "who is the hod of it depertament":"gd kishore",
        "who is the founder of tdp party":"sr ntr",
        "when was world war 2 ended":"2nd sept 1945",
        "how long did world war 2 last ":"6 years",
    },
}
if play.lower()!= "no":
    print("welcome to srk play zone")
    for ques in quesans:
        print(ques)
        marks=0
        for quest in quesans[ques]:
            print(quest)
        ans=input("please enter your answer")
        if quesans[ques][quest].lower()== ans.lower():
            print("your answer is correcrt")
            marks+=1
        else:
                print("your answer is wrong")
      print("you gain no of marks=",marks)
      percentage=marks/len(quesans[quest])*100
      print(percentage)
    if percentage>=70:
        print("your qualifed for next level")
    else:
        print("your not qualified")
else:
        print("better luck next time or visit once again")
