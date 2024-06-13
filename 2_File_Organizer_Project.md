## Today's Agenda :-
1. Project - File Organizer (Command Line Project)
   -> Better understanding of 'fs module'
   -> new module - 'path module'
2. Recursion (we will use recursion in this project)
   -> Qualify as DEV + DSA Project

WHat is File Organizer Project?
--------------
Introduction :
--------------
Hum isme 3 commands banaenge -
1. node main.js - 'help' command
   -> help humein list of commands dega ki humare CLI m kya kya commands hai
2. node main.js - 'organize' command 
   -> yha par ek folder ka path dnge aur uske andar jitne v files honge like .mp4, .mp3, .pdf, .doc, .xlsx files, ye uss directory m jaenge aur jitne v tarike ki files honge na ye uss directory pe folder banaenge -
   (a) Video Folder
   (b) Image Folder
   (c) Document Folder
   Aur uss folder k andar jitne v files honge to videos wale files Video Folder m chle jaenge, Image files Image Folder m chale jaenge, Music files Music Folder m chale jaenge, Documents Files Document Folder m chale jaenge.
   -> 'organize' command ek folder ki path legi aur iss folder k path m ek folder hoga i.e. Download. Ab download folder m tarah tarah ki chije hoti h, uss folder m videos v ho skti h jinki extension .mp4 ho skti hai, Images ho skti hai jinki extension .jpeg, .jpg, .png etc ho skti h. To Downloads wale folder m andar ye saare files mix rakhi hui hai, to mai jb bolunga ki node main.js organize aur mai apne downloads folder ka path dunga to ye command ye krega ki wo downloads folder m jaega aur uss Download folder k andar ye 4 folder bana denge -
   (a) Video Folder
   (b) Music Folder
   (c) Document Folder
   (d) Image Folder
   Aur jo file jis folder ko belong krta hai ye uske andar daal dega. Isse ye hoga ki mere downloads ka folder wo organize ho gya.
3. (We will see later)

main.js :
---------
-> AVi organize command kr rhe to usme hm pehle node main.js fir bolnge organize kr k lao. Fir hum ek <folder-path> denge. To humne jo process.argv.slice() kiya, usse ye hota hai ki mera ye poora input aata h -
    'node main.js organize <folder-path>'
-> Jb hum slice krte h to ye dono - 'node main.js' gayab ho jaate h to 'organize command' & '<folder-path>' bachta hai. To maine inputArr[0] kiye to ye kya dega? [0] - Command Name, [1] - Folder-path. 

inputArr[0] : Isme 3 commands ho skti hai -
(a) help
(b) organize
(c) tree

Mujhe pta kaise lgega ki humne kn si command daali hai?
-> Uske liye we use switch cases.

-> Ab hum switch statement use krnge  -
    Switch Case k andar humne (command) pass kr di -> ab iss (command) k andar kuch v ho skte h like - 'tree', 'organize', 'help'. To hum bole h in Case-1: agr "tree" ka h to kuch krna h, similarly agar case-2: "organize" ka h to kuch fix task krna hai aur "help" ka ho to kuch krna hai. To ye kind of aisa hua -
        if (command == tree){
            //then do this task
        }
        else if (command == organize) {
            //then do this task
        }
        else if (command == help) {
            //then do this task
        }
        else (command == )

-> So, in switch agar wo ek case m atkega to kisi aur case m nai jaega that's why we use 'break' -> 'break' lagane k baad ye else-if k tarah kaam krta hai. Agar hum break ni lagate to internally switch statement aisi hoti -
        if (command == tree){
            //then do this task
        }
        if (command == organize) {
            //then do this task
        }
        if (command == help) {
            //then do this task
        }
        if (command == )
-> Agar humne likha hai 'node main.js organize' to -> if (command == organize) wala command chalne k baad wo niche kahi par v check naa kre aur waha se break kr jae aur uss switch case se bahar aa jae, that's why hum waha break statement lga diye.
