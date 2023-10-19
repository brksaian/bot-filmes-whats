async function enviarScript(scriptText) {
  const lines = scriptText
    .split(/[\n\t]+/)
    .map((line) => line.trim())
    .filter((line) => line);
  (main = document.querySelector("#main")),
    (textarea = main.querySelector(`div[contenteditable="true"]`));

  if (!textarea) throw new Error("Não há uma conversa aberta");

  for (const line of lines) {
    console.log(line);

    textarea.focus();
    document.execCommand("insertText", false, line);
    textarea.dispatchEvent(new Event("change", { bubbles: true }));

    setTimeout(() => {
      (
        main.querySelector(`[data-testid="send"]`) ||
        main.querySelector(`[data-icon="send"]`)
      ).click();
    }, 100);

    if (lines.indexOf(line) !== lines.length - 1)
      await new Promise((resolve) => setTimeout(resolve, 250));
  }

  return lines.length;
}

enviarScript(`LES MISERABLES




Written by

William Nicholson
Alain Boublil, Claude- Michel Sch�nberg
and Herbert Kretzmer


Adapted from the Stage Musical
"Les Mis�rables"


Based on the novel by
Victor Hugo


May 20, 2012





BLACK SCREEN                                                        

SUPERIMPOSE CAPTION:                                                

The year is 1815.                                         

The French revolution is a distant                        
memory. Napoleon has been defeated.                       
France is ruled by a King again.                          


A1   EXT. TOULON PORT - DAY                                     A1       

RISE UP out of the iron-grey surface of the ocean, seething         
in the wind, towards the shore. Winter rain slices the air.         
Ahead, the port of Toulon, home of the French navy. A forest        
of tall masted warships.                                            

The great ships heave at anchor, the wind whipping their            
rigging.                                                            

Through the sea spray we see the great ribs of warships             
under construction, and warships being refitted.                    

SUPERIMPOSE CAPTION:                                                

Toulon                                                    
Home port of the French navy                              


1    EXT. TOULON DOCK - DAY                                        1     

Storm-lashed sea and driving rain. A great wave rises up
and hammers down. As it recedes we see the figures of men
heaving on great ropes, the sea water streaming down over           
their faces. The harsh storm light catches glints of metal:
these men are CONVICTS, chained by manacles, heads shaved,          
wearing red shirts with prison numbers crudely stitched             
onto them.                                                          

Now we see that the ropes run up to a ship that is being            
hauled ashore - a storm-damaged man-of-war, its masts
broken, rising and falling on the surge.

As yet another great wave rolls over the convicts, we
follow the straining ropes down into the base of the                
slipway, and find the convict JEAN VALJEAN, up to his waist         
in water, chained by two sets of manacles, as the rain and          
spray and wind scream round him. A great brute of a man, he         
seems to feel nothing.                                              



2.


The convicts sing in time with the rhythmic pulls on the
rope -

CONVICTS
Ha - Ha -

CONVICT 3                                   
Ha - Ha -
Look down, look down
Don't look them in the eye                            

CONVICTS                                    
Look down, look down
You're here until you die.

CONVICT 4                                   
No God above
And Hell alone below

CONVICTS                                    
Look down, look down
There's twenty years to go.

The camera RISES UP to find JAVERT, the officer in charge       
of the convict workforce, looking on, his face rain-lashed      
and expressionless. He stands above the men on the top of
the dock, as lines of convicts labour beneath him on the
steep steps of the dock wall.

Behind Javert, through the storm rain we glimpse a forest of   
half-built ships, their ribbed frames like great skeletons in   
the mist.                                                       

FOREGROUND convicts are at work on another ship that is
almost completed, labouring in the crashing spray.

CONVICT 2                                   
I've done no wrong
Sweet Jesus, hear my prayer!

CONVICTS
Look down, look down
Sweet Jesus doesn't care.

CONVICT 5                                   
I know she'll wait
I know that she'll be true -

CONVICTS
Look down, look down
They've all forgotten you.                            

CONVICT 1                                   
When I get free
You won't see me
Here for dust!
3.


CONVICTS
Look down, look down
Don't look'em in the eye.

CONVICT 3                                     
How long, O Lord
Before you let me die?

CONVICTS                                      
Look down, look down
You'll always be a slave.
Look down, look down
You're standing in your grave.

With a last great heave the lines of convicts haul the            
damaged ship onto the slipway.                                    

CRACK! The stern flagpole of the ship snaps in a vicious gust     
of wind and crashes down into the shallow water near Valjean.     
Javert sees and points his stick at Valjean in silent             
command. Valjean stares back for a beat, defying him. Then he     
drops down into the seething water and re-emerges with the        
great mast in his hands, held over his head. His head breaks      
water with his bitter gaze still on Javert, as he throws the      
mast ashore in a deliberate display of strength.                  

Javert nods to the guards, and they begin to form the
chained men into lines to return to their prison. The storm
is passing now, blown by the driving wind.

Javert approaches Jean Valjean.                                   

JAVERT
Now Prisoner 24601.                                     
Your time is up
And your parole's begun.
You know what that means?                               

VALJEAN
Yes. It means I'm free.

JAVERT
No! It means you get                                    
Your yellow ticket-of-leave.

He hands Valjean a folded yellow paper.                           

JAVERT
This badge of shame
You'll show it everywhere.
It warns you're a dangerous man.                        

VALJEAN
I stole a loaf of bread
My sister's child was close to
death
And we were starving.
4.


JAVERT
You will starve again
Unless you learn the meaning of
the law.

VALJEAN
I know the meaning of those
nineteen years
A slave of the law!

JAVERT
Five years for what you did,
The rest because you tried to
run.
Yes, 24601!

VALJEAN
My name is Jean Valjean!

JAVERT
And I'm Javert!
Do not forget my name.
Do not forget me -
24601!

He strides away to command the lines of convicts as they're
marched away. Valjean walks away, hardly able to take in            
that he is free at last.

The convicts sing as he goes.                                       

CONVICTS
Look down, look down
You'll always be a slave.
Look down, look down
You're standing in your grave.


2   EXT. ROAD OUT OF TOULON - DAWN                                2

Valjean makes his way up a rising track, a worn knapsack on
his back. He comes to a stop at the top of the hill, and
there before him, lit by the rising sun, spreads a wide
vista of fields and towns and villages, stretching into the
distance, with the snow capped Alps beyond. Behind and
below him lies Toulon at the sea's edge. As we hear the
musical theme ('Freedom is Mine'), we see for the first
time the darkness in his face give way to a new hope.

VALJEAN                                         
Freedom at last -
How strange the taste!
Never forget the years - the waste,
Nor forgive them for what they've
done.
They are the guilty - Everyone!
The day begins
(more)
5.

VALJEAN (cont'd)
And now lets see
What this new world
Will do for me!

3    SCENE OMITTED                                                 3


4    EXT. COUNTRY ROAD - DAY                                       4

Valjean strides down the long rising road, pulling his thin
coat close round him against the cold winter wind.

He passes a long line of labourers working. He approaches           
the OVERSEER.                                                       

VALJEAN                                         
Monsieur can I help? A day's work?                        

The overseer notices shaved hair showing under his cap.             

OVERSEER                                        
Take your hat off.                                        

Valjean takes his hat off, revealing his shaved and scarred         
head.                                                               

OVERSEER                                      
Passport.                                                 

The overseer scans the yellow paper, and hands it back.             

OVERSEER                                        
No work here.                                             

5    SCENE OMITTED                                                 5


6    EXT. MOUNTAIN ROAD - END OF DAY                               6

Valjean slogs on up the rising track into the mountains.
Snow on the ground here, and darkness falling.

He looks up and sees ahead a village built on a rock cliff,
its lights twinkling, the snowy mountains rising behind.
The tower of its handsome church rises up like a promise of
refuge. This is Digne.


6A   EXT. DIGNE - DUSK                                           6A

Valjean enters Digne. As he drinks from the fountain, he sees   
a guard standing outside the Mairie.                            
6.


6B   INT. MAIRIE, DIGNE - DUSK                                    6B     

Valjean stands waiting. The officer fastidiously writes down        
the name of Valjean in his huge ledger and the name of the          
town in his passport. The officer signs and stamps the              
passport.                                                           

OFFICER                                        
Valjean.                                                  

The officer hands back the passport. Valjean leaves.                


6C   EXT. DIGNE - DUSK                                            6C

Valjean walks down the high street, spies the warm glow of an
inn and enters.


7    INT. COUNTRY INN, DIGNE - DUSK                                7

Valjean sits in the corner, his hat low over his head. He
eyes hungrily a group of cart drivers tucking into a roast
meal by a roaring fire place. The innkeeper serves him a
beer. As he reaches for it his coat sleeve rides up to
reveal his wrist, calloused and scarred by manacles. The
innkeeper eyes him warily. He discusses Valjean with two
other men, then asks for his paper. Sees the phrase
"Extremely Dangerous".                                              

VALJEAN'S POV - From the yellow paper in the innkeeper's
hands up to the innkeeper's face. A blank stare, a shrug of
refusal.

INNKEEPER
My inn is full.


7A   EXT. DIGNE - NIGHT                                           7A

Valjean moves off wearily through the village. As he passes
down the narrow street, faces peer at him from doorways,
but the doors close when he goes by. A shadowy figure
follows him. Word has spread that he's a dangerous man'.

Passing the uncurtained window of a cottage, he comes to a
stop. Through the window he sees a scene that breaks his
heart: a father at a table by lamplight, his young wife
before him, his children on either side. Nothing special,
and yet everything he's never had.


8    EXT. PRISON, DIGNE - NIGHT                                    8

He stops at the local jail. An iron chain attached to a bell
hangs from the prison door. He rings. A grate slides open.
7.


VALJEAN
Jailer. Would you let me stay here                        
for tonight?

JAILER                                          
This is a prison, not an inn. Get
yourself arrested. Then we will
open up for you.

The grate slides shut. As Jean Valjean walks away, some
children who have been following begin throwing stones at
him. He threatens them with his stick and they scatter.


8A   EXT. DIGNE - NIGHT                                           8A

He sees over a garden wall a low doorway in a stone turret.         
Valjean stoops through the doorway and lies down on some            
straw. He hears a ferocious growl and sees the head of an
enormous mastiff. It is a dog kennel.


8B   EXT. DIGNE - NIGHT                                           8B

Snow falling as Valjean makes his way down the road, hungry,
weary, moving slowly, his trousers ripped and bloody from
where the dog has bitten him.

At the end of a road, the snow-covered church; beside it, a
dark churchyard.                                                    


9    EXT. CHURCH YARD, DIGNE - NIGHT                               9

Snow-covered gravestones in moonlight. Exhausted, Valjean
collapses to the ground and huddles himself into the
shelter of a doorway.                                               

A lantern glows in the dark. The lantern approaches,
throwing shadows. Its little circle of light comes to rest
on the crumpled figure of Valjean.

He stirs and opens his eyes.

VALJEAN'S POV - The glow of the lantern in the darkness.
Beyond it, the half-seen features of a kind old man. The            
BISHOP.

BISHOP
Come in, sir, for you are weary
And the night is cold out here.
Though our lives are very humble
What we have we have to share.

Bewildered, fearful, suspicious, Valjean gets up and goes
with the Bishop into the house by the church.                       
8.


10   INT. BISHOP'S HOUSE - NIGHT                                10     

A simple table on which is laid out bread and wine, with          
silver cutlery. Two silver candlesticks light the room,           
illuminating walls painted with religious scenes. The Bishop      
ushers the bewildered Valjean into the room. The bishop's         
sister Madame Baptistine stands. Valjean hesitates.               

BISHOP
There is wine here to revive you.
There is bread to make you
strong.
There's a bed to rest till
morning -
Rest from pain, and rest from
wrong.                                                  

BISHOP                                        
Sit, my brother.

The Bishop gestures to the housekeeper Madame Magloire.

BISHOP
Madame, set one more place.
(to Valjean)
Please sit.

The Bishop gently takes his arm and draws him into a chair.

Valjean sits, and the Housekeeper lays food before him.
Famished, Valjean eats like an animal. The Bishop says a
short grace.

BISHOP
May the Lord bless the food we eat                      
today. Bless our dear sister and                        
our honoured guest.
(To Valjean)
Please, eat. Where are you
travelling to my brother?

VALJEAN
Pontarlier.

BISHOP
Is that where your family is?

VALJEAN
No. The destination is compulsory.
That is where the Law sends me. I
have no home.

BISHOP
Then let this be your home, for
as long as you need it.
9.


11   INT. BEDROOM, BISHOP'S HOUSE - NIGHT                          11

The Bishop leads Valjean to a bedroom where the walls are
also painted with religious imagery. Across the passage,
Valjean sees the open door to the Bishop's own bedroom.
There the Housekeeper is putting the table silver away in a
cupboard.

He turns to see a bed made up with clean white linen
waiting for him. He hasn't slept in such a bed ever in his
life. But the Bishop is smiling, offering it to him.

BISHOP
Sleep well. Tomorrow morning
before you leave you will have a
cup of milk from our cows, nice
and hot.

The Bishop turns away to go to sleep.

VALJEAN
You let me sleep here next to you?
How do you know I'm not a murderer?

Valjean laughs a strange laugh.

BISHOP
God will take care of that.

LATER THAT NIGHT -

Valjean lies on the bed, fully dressed, deeply asleep.

Outside a dog barks.

Valjean's eyes snap open. The first thing he sees by the
light of the moon is an image of God the Father gazing down
on him from the painted ceiling. In panic, fearing
judgement, he sits bolt upright. Then he looks round, and
remembers. He gets out of bed, and opens the door.

There, across the narrow passage, the door stands open to
the Bishop's bedroom. In the moonlight, he sees the Bishop
lying asleep. Above his bed, the cupboard where the silver
is kept.

Valjean moves silently into the Bishop's room, holding a             
metal miner's spike which he pulls from his bag. The floor           
boards creak. He looks down at the old man, holding his
breath, but the bishop is peacefully and innocently asleep.
He reaches up to the cupboard. It is unlocked. The cupboard          
door opens with a sharp cracking sound. The Bishop,                  
disturbed in his sleep, moves a little. At once Valjean is
over him, like a wild animal, spike raised to strike should          
he wake. The Bishop sleeps on. The moon comes out and
lights up his beautific, smiling face. Valjean is thrown.
He turns back and opens the cupboard door fully: there is
the silver.
10.


Carefully he picks it out, fearful of every clink. One last         
look at the sleeping old man, and he makes a run for the
door.


12   EXT. CHURCHYARD - NIGHT                                      12     

Valjean rushes out of the back door of the house. He                
crosses the graveyard, scrambles over a back wall, and he's         
gone.


13   INT. BISHOP'S HOUSE - DAY                                    13     

The Bishop is coming in from morning Mass in his vestments          
when the door bursts open and two policemen drag Valjean
before him. Valjean hangs his head, unable to meet the
Bishop's eyes.

CONSTABLE
Monsignor, we caught the thief
red-handed! He has the nerve to
say you gave him all this!

He upends Valjean's kitbag, and the silver tumbles out.

The Bishop looks from the silver to Valjean.

BISHOP
That is right.

Amazed, Valjean looks up.

BISHOP
But my friend, you left so early,
You forgot I gave these also.
Would you leave the best behind?

The old Bishop is holding out the two silver candlesticks.

BISHOP
(to policemen)
Messieurs, release him.
For this man has spoken true.
I commend you for your duty
Now God's blessing go with you.

Silenced by the Bishop's gentle tones, the policemen turn
and leave.

Valjean, utterly bewildered, takes the silver candlesticks.

BISHOP
But remember this, my brother -
See in this some higher plan.
You must use this precious silver
To become an honest man.
By the witness of the martyrs,
(more)
11.

BISHOP (cont'd)
By the passion and the blood,
God has raised you out of
darkness -
I have bought your soul for God.


14   INT. CHURCH, DIGNE - DAY                                   14

Valjean kneels in the church.                                     

He takes out his yellow passport and stares at it.                

He turns towards the altar, and the crucifix above it.

VALJEAN
What have I done?
Sweet Jesus, what have I done?
Become a thief in the night
Become a dog on the run!
And have I fallen so far
And is the hour so late
That nothing remains but the cry
of my hate?
The cries in the dark that nobody
hears
Here where I stand at the turning
of the years.

If there's another way to go
I missed it twenty long years
ago.
My life was a war that could
never be won.
They gave me a number and
murdered Valjean
When they chained me and left me
for dead
Just for stealing a mouthful of
bread!                                                  
Yet why did I allow this man
To touch my soul and teach me
love?
He treated me like any other
He gave me his trust
He called me brother.
My life he claims for God
above...
Can such things be?
For I had come to hate the world -
This world that always hated me!

Take an eye for an eye!
Turn your heart into stone!
This is all I have lived for!
This is all I have known!
One word from him and I'd be back
Beneath the lash, upon the rack.
Instead he offers me my freedom!
(more)
12.

VALJEAN (cont'd)
I feel my shame inside me like a
knife.
He told me that I have a soul...
How does he know?
What spirit comes to move my
life?
Is there another way to go?

Slowly, he examines the yellow passport and raises it high,         
as if to the altar.

VALJEAN
I am reaching, but I fall
And the night is closing in...
As I stare into the void -
To the whirlpool of my sin.                               

Valjean stands and turns, walking fast to the door of the           
church.                                                             

VALJEAN                                         
I'll escape now from that world -                         
From the world of Jean Valjean.                           
Jean Valjean is nothing now!                              


15   EXT. CHURCH, DIGNE - DAY                                     15

Valjean comes out of the church into the graveyard and              
reaches a bell set on the edge of a promontory. Below lies          
the steep drop down the mountainside to the dark valley             
below.

VALJEAN
Another story must begin!                                 

He rips the yellow paper into pieces and throws the pieces
out over the valley. The scraps flutter in the wind.

FOLLOW the scraps of yellow paper as they dance in the wind
then fall away into the void below. One scrap of paper              
dances upwards in the sunlight. We follow this and                  
accelerate upwards leaving Valjean and the town of Digne            
far below, towards the sun gloriously breaking through the          
heavens with the alps beyond. The camera then starts to             
tumble back down through mist and cloud below - through             
time and space - down to discover -


16   EXT. ROAD TO MONTREUIL - DAY                                 16

The camera hurtling towards three horses riding down a long         
muddy road on a flat plain towards the walled town of               
Montreuil-sur-Mer. Montreuil sits on an estuary leading out         
to the sea. We see ships sitting in low tide on the mud of          
the estuary along the dockside of the town, and red brick           
factory buildings.                                                  
13.


SUPERIMPOSE CAPTION:                                                

Eight years later                                         

Montreuil-sur-Mer, 1823.                                  

The camera closes in to ground level to reveal the                  
horseriders:                                                        

Javert, flanked by two policemen.                                   


16A   EXT. GATES TO MONTREUIL - DAY                               16A     

As the riders enter the walled town we see the poor clustered   
around the gates - destitute and sick people clammering to      
get in.                                                         

BEGGARS' CHORUS                                 
At the end of the day you're
another day older
And that's all you can say for
the life of the poor.
It's a struggle! It's a war!
And there's nothing that anyone's
giving.
One more day standing about -
What is it for?
One day less to be living.

Javert sees the destitution of the people. Expressionless           
as ever.

BEGGARS' CHORUS                                 
At the end of the day you're
another day colder
And the shirt on your back
doesn't keep out the chill.
And the righteous hurry past
They don't hear the little ones
crying
And the plague is coming on fast
Ready to kill -
One day nearer to dying!

TRACK PAST a plague victim, wrapped in a shroud, being thrown   
onto a cart.                                                    

The police enter the harbour.                                       


17    EXT. HARBOUR - MONTREUIL - DAY                              17      

The beggars are pushed back as the gates open and close for         
the police.                                                         
14.


BEGGARS' CHORUS                                 
At the end of the day there's
another day dawning
And the sun in the morning is
waiting to rise
Like the waves crash on the sand
Like a storm that'll break any
second
There's a hunger in the land
There's a reckoning still to be
reckoned
And there's gonna be hell to pay
At the end of the day!

Javert looks round at the factory buildings, the boats in           
the harbour, the poor clamouring behind him, and rides on.          

18      SCENE OMITTED                                                18     


19      EXT. FACTORY YARD, MONTREUIL - DAY                           19

Heavy carts wait to be loaded with wooden crates of goods.
Workmen carry the crates out of the factory as the FOREMAN
strides in through the doors, gesturing to a cart driver,           
FAUCHELEVENT, who's taking a quick rest on a crate.


19A     INT. FACTORY, MONTREUIL - MEN'S SECTION - DAY               19A     

The foreman passes men packing boxes on tables and loading          
boxes onto crates. He passes through a door under a first           
floor office.                                                       


20-22   INT. FACTORY, MONTREUIL - WOMEN'S SECTION - DAY        20-22        

The long work space is full of tables at which                      
conservatively dressed women are working, making jewelry            
out of shellac, a black resin which looks like jet. An              
impressive sight: obviously a very successful business. A
wooden staircase climbs one wall to a glass-windowed
business office. The figure of a man within.

FOREMAN
(flirtatiously, to women)                             
At the end of the day you get
nothing for nothing!
Sitting flat on your bum doesn't
buy any bread!

FACTORY WOMAN 4                                 
There are children back at home -

FACTORY WOMAN 2                                 
And the children have got to be
fed.
15.


FACTORY WOMAN 7                              
And you're lucky to be in a job -

The Foreman has stopped beside FANTINE, a pretty young woman.   
As he leans over to whisper in her ear Fantine, surprised,      
pricks her finger with her needle.                              

FOREMAN                                      
(quietly, to Fantine)                              
And in a bed!

FACTORY WOMAN 8                              
(to Fantine, as a warning)                         
And we're counting our blessings!                      

The Foreman continues his rounds, encouraging the women to       
speed up their work.                                             

FOREMAN                                      
At the end of the day just be glad                     
to be working
For a master who cares for the
lives of the poor.                                     

FACTORY WOMAN 7                              
He's a riddle..

FACTORY WOMAN 4                              
He's no fool..

FACTORY WOMAN 6                              
He's the answer to anyone's prayer

FACTORY WOMAN 8                              
And he paid for the brand new                          
school

FACTORY WOMAN 4                              
It's no wonder they made him the
mayor!

FACTORY WOMEN                                
Bless the man who leads the way!
At the end of the day!

They get on with their tasks, all glancing up at the boss in     
the office above.                                                

The Foreman returns to Fantine, trying to help her.              

MAIN FACTORY WOMAN                           
Have you seen how the foreman is
fuming today                                           
With his terrible breath and his
wandering hands?
16.


FACTORY WOMAN 3                              
It's because little Fantine won't
give him his way.

FACTORY WOMAN 5                              
Take a look at his trousers,
you'll see where he stands!

FACTORY WOMAN 2                              
And the boss, he never knows
That the foreman is always on                          
heat.

MAIN FACTORY WOMAN                           
If Fantine doesn't look out,
Watch how she goes,
She'll be out on the street!                           

The Foreman rings a bell, announcing the end of the work day.   

The women start to take off their overalls and pack up their     
tools for the day.                                               

FACTORY WOMEN/FOREMAN                       
At the end of the day its another
day over
With enough in your pocket to last
for a week                                             
Pay the landlord, pay the shop                         
Keep on working as long as you're                      
able                                                   
Keep on working till you drop                          
Or it's back to the crumbs off the
table                                                  
Well, you've got to pay your way                       
At the end of the day!                                 

The women queue up to be paid by the Foreman at the door.        

Fantine has taken out a letter. The main factory woman           
snatches the letter away from Fantine.                           

MAIN FACTORY WOMAN                           
And what have we here, little
innocent sister?

The letter is passed surreptitiously down the line of women      
workers.                                                         

MAIN FACTORY WOMAN                           
Come on, Fantine, let's have all
the news.
(reading)
Dear Fantine, you must send us
more money,
Your child needs a doctor,
There's no time to lose.'
17.


FANTINE
Give that letter to me
It is none of your business.
With a husband at home
And a bit on the side!
Is there anyone here
Who can swear before God
She has nothing to fear?
She has nothing to hide?

The main factory woman starts to take Fantine's letter over     
to the Foreman.                                                 

Fantine tries to get the letter back. The women scuffle.

The owner enters the factory floor. We see him only from        
behind: a well-dressed prosperous man.                          

VALJEAN
What is this fighting all about?
Will someone tear these two
apart?
This is a factory, not a circus.

As he sings, the CAMERA MOVES ROUND to discover him. Clean-
shaven, well-fed, transformed: it's Valjean.

VALJEAN
Now come on, ladies, settle down.
I run a business of repute.

Suddenly Valjean sees Javert appear on the first floor          
balcony of his office. His world drops away.                    

VALJEAN
(to the foreman)
Deal with this, Foreman.                              
Be as patient as you can.                             

He walks back to the stairs up to his office.                   

On the factory floor -

FOREMAN
Now someone say how this began!

The factory women all turn on Fantine.

FANTINE/FACTORY WOMAN 5                     
At the end of the day she's the
one who began it!

MAIN FACTORY WOMAN                          
There's a kid that she's hiding                       
in some little town.

FACTORY WOMAN 5                             
There's a man she has to pay                          
18.


MAIN FACTORY WOMAN                         
You can guess how she picks up
the extra -
You can bet she's earning her
keep
Sleeping around!
And the boss wouldn't like it.

FANTINE
Yes, it's true there's a child
And the child is my daughter
And her father abandoned us,
Leaving us flat.
Now she lives with an innkeeper
man and his wife
And I pay for the child.
What's the matter with that?

Fantine continues to defend herself to the Foreman, as the     
women sing -                                                   

FACTORY WOMEN
At the end of the day she'll be
nothing but trouble
And there's trouble for all when
there's trouble for one!
While we're earning our daily
bread
She's the one with her hands in
the butter -
You must send the slut away
Or we're all going to end in the
gutter
And it's us who'll have to pay
At the end of the day!

The Foreman pulls Fantine away.                                

FOREMAN
I might have known the bitch
could bite!
I might have known the cat had
claws!
I might have guessed your little
secret!
Ah yes, the virtuous Fantine
Who keeps herself so pure and
clean -
You'd be the cause, I had no
doubt
Of any trouble hereabout.
You play a virgin in the light
But need no urging in the night!

MAIN FACTORY WOMAN                         
She's been laughing at you
While she's having her men!
19.


FACTORY WOMEN                                   
She'll be nothing but trouble
again and again!

FACTORY WOMAN 5                                 
You must sack her today!

FACTORY WOMEN
Sack the girl today!

FOREMAN
Right, my girl! On your way!

Below, Fantine turns and calls to Valjean in his office
above with a pitiful cry.

FANTINE
M'sieur Mayor, help me! I have a
child!

Valjean hears the cry, but he has other concerns. He turns
round to face Javert.                                               

Javert stares at him.

On the factory floor below, the Foreman hustles Fantine
out, as she struggles against him.                                  


23   INT. FACTORY OFFICE - DAY                                    23

Javert bows.                                                        

JAVERT
I introduce myself,
Inspector of Police.
I've come to take the watch
I'm here to keep the peace.
Please know me as Javert.

I'm here at your command
With honour due to each.
With justice in our hands
No man's beyond our reach.
Let all beware.

VALJEAN
Welcome, sir
Come guard our laws
I'm sure we're here
In common cause.

Javert turns to look through the high window onto the men's         
factory floor below. The last men are leaving for the day.          

JAVERT
You've done the city proud,
You've raised their banner high.
(more)
20.

JAVERT (cont'd)
You manufacture gems
That anyone can buy
Your people thrive.

Valjean shows some demonstration samples of their work.

VALJEAN
The dignity of toil
To stay alive.

Javert is puzzled. He's sure he recognises Valjean, but
from where?

JAVERT
It seems to me
We may have met.

Valjean throws him a sharp glance.

VALJEAN
Your face is not a face
I would forget.

A CRASH from outside in the yard - shouts -


24   EXT. TRACK LEADING TO FACTORY, MONTREUIL - DAY               24

Valjean and Javert hurry out across the factory yard and
down the muddy track beyond to discover -

A heavily laden cart has toppled onto the cart driver -             
Fauchelevent, the worker seen before taking a rest on a
crate.

The   cart driver and the Foreman are trying to lift the cart
off   the crushed man, but it's too heavy, and the ground is
too   soft. Fauchelevent screams as the cart slowly sinks in
the   mud.

Valjean, Javert and Javert's assistant all hurry to help,
but they can't get a proper purchase in the spongy ground.
All the time the cart is sinking further, pushing
Fauchelevent deeper into the mud that will soon bury him.
Then Valjean sees a way. At one end the wheels of the cart
have stopped sinking - the ground is harder here. He throws
himself under the cart at this higher end, and braces
himself to lift it from beneath.

VALJEAN
Get back! It may fall!

FOREMAN
No, Monsieur le Mayor!

CROWD
It'll kill you as well!
21.


Javert stands back and looks on. As he looks, we see a
memory stirring in him.

JAVERT'S POV - Valjean's posture beneath the cart is
exactly the same as the convict beneath the fallen mast.
The same crouching power. The same almost-suicidal
determination.

Valjean sees Javert looking at him, and knows exactly what
he's thinking. For a moment he hesitates. Then he hears
Fauchelevent's choking scream as the mud gags his mouth.
Valjean strains every muscle, and slowly one end of the
cart begins to rise. As soon as it clears the crushed and
gasping man, the others pull him clear.

Valjean lets the cart down again, and climbs out. As he
brushes himself down he finds Javert staring at him.

JAVERT
Can this be true?
I don't believe what I see!
A man your age
To be as strong as you are!
A memory stirs...                                    
You make me think of a man                           
From years ago                                       
A man who broke his parole..                         
He disappeared.                                      

He shakes his head, realising how absurd his suspicions
are.

JAVERT
Forgive me, sir.
I would not dare -

VALJEAN
Say what you must.
Don't leave it there.

Valjean holds Javert's gaze, challenging him to say more.      
Javert is not yet confident enough to continue.                

Valjean goes to help Fauchelevent.                             

VALJEAN                                    
Let me help you up.                                  

Fauchelevent groans as he rises.                               

FAUCHELEVENT
Monsieur le Mayor, you come from
God!
You are a saint!

VALJEAN                                    
No more cart driving for you!                        
22.


Javert stares. He can't rid himself of his suspicion.

JAVERT
Monsieur le Mayor.

He draws himself up and gives a bow. As he walks away, he            
discusses something with his assistant.                              


25   EXT. HARBOUR, MONTREUIL - NIGHT                               25     

Fantine makes her way to the harbour wall. Beggars shelter in   
the tunnels under the red brick buildings.                      


26   EXT. RED LIGHT DISTRICT, MONTREUIL - NIGHT                    26

Fantine makes her way down   wet slimy steps. This leads to an       
alleyway that runs down to   the harbour and three ships lying       
on the mud at low tide. At   the far end, the largest is the         
rotting hulk of a vast old   warship. A single whore sits in a       
doorway.                                                             

FANTINE                                          
Excuse me, is this where the                               
Pawnbrokers is?                                            

WHORE 1                                          
(pointing)                                             
It's just there.                                           

FANTINE                                       
Thank you.                                                 

Drunken sailors spill out into the alleyway below. The               
first sailor is trying to find the whorehouse.                       

SAILOR 1
I smell women!
Smell'em in the air!
Think I'll drop my anchor
In that harbour over there!

They spot Fantine, mistaking her for a whore. Fantine presses   
on down the steps, trying to ignore the sailors.                

SAILOR 2
Lovely ladies!                                             
Love em till your broke!                                  
Seven months at sea can make you
Hungry for a poke!

The sailors then see whores start to appear from the shadows         
of warehouse doorways.                                               

SAILOR 3
Even stokers need a little stoke!
23.


A man with no legs, reacting to the sailors, cranks up an        
organ-grinder and from doorways and overhead windows             
harbour whores appear and tout for business.                     

A man selling dentures stands by his cart and we hear            
fragments of his sales pitch.                                    

WHORES                         TOOTH MAN
Lovely ladies                   Lovely dentures
Waiting for a bite!             Guaranteed to bite
Waiting for the customers       They clean up real easy
Who only come at night.         You can take them out at
Lovely ladies                   night
Ready for the call,             Sell your teeth here make a
Standing up or lying down       pretty sum
Or any way at all -             Best Tooth Man in the harbour

Bargain prices up against the   Guaranteed no painful gums
wall!                           Bargain prices up against the
wall!

During the above chorus, Fantine sells a locket containing a     
cutting of Cosette's hair to the pawnbroker.                     

PAWNBROKER                                   
Hello sweetheart, I'll give you                        
four francs.                                           

FANTINE                                      
It's worth at least ten.                               

The pawnbroker goes back in his shop and Fantine watches the     
whores.                                                          

FANTINE                                      
Alright, five.                                         

The pawnbroker takes the locket in exchange for the money.       

An old woman leers at Fantine from the shadows, beckoning.       
She approaches Fantine, reaching out to stroke her hair.

HAIR CRONE                                   
What pretty hair!
What pretty locks you've got                           
there!
What luck you got.
It's worth a centime, my dear!
I'll take the lot!

FANTINE
Don't touch me! Leave me alone!

HAIR CRONE                                   
Let's make a price.
I'll give you all of ten francs.
Just think of that!
24.


FANTINE
It pays a debt...

HAIR CRONE                                       
Just think of that.

FANTINE
What can I do? It pays a debt.
Ten francs may save my poor
Cosette.

The hair crone leads Fantine down to her shop at the base of         
the stairs.                                                          

Fantine is sat on a low stool. She bows her head before the          
hair crone, who at once whips out a razor blade and cuts             
off her hair at the roots.                                           


26A   EXT. RED LIGHT DISTRICT MONTREUIL - END OF DAY               26A     

Fantine walks down the steps with short hair, mocked by the          
voices of the whores on either side.                                 

A PIMP and the HEAD WHORE watch her progress as the organ-           
grinder grinds out the music.                                        

Whores sing from the warehouse doorways, from on top of the          
spars of the ships, writhing around figureheads and from the         
rotting ship.                                                        

The few men in the street choose their whores and disappear          
by the end of the chorus.                                            

WHORES                          TOOTH MAN
Lovely ladies                     Lovely dentures guaranteed to
Waiting in the dark.              bite
Ready for a thick one             They clean up real easy
Or a quick one in the park.       You can take them out at
night
HEAD WHORE                 Lovely teeth dear shining
Long time, short time             like the stars
Anytime my dear!                  I'll whip em out quite
Cost a little extra               quickly
If you want to take all year      And I won't leave any scars.

WHORES
Quick and cheap is underneath
the pier

Fantine reaches the hair crone.                                      

FANTINE                                          
Please, you wouldn't have any work                         
for me would you? Please, I sold                           
you my hair. I could do anything.                          

The hair crone points at the head whore and the tooth man.           
25.


HAIR CRONE                                       
Go and see them.                                           

Fantine looks towards the tooth man and the head whore.              

TOOTH MAN                        HEAD WHORE
Come over here,                   Come here my dear.
I'll pay well for your youth.   
I pay ten francs for a tooth.

Fantine heads to the tooth man.                                      

TOOTH MAN                                        
You have, my dear,
The clear advantage of youth.                              

HEAD WHORE                                       
(whispers)                                             
Just the back ones.                                        

TOOTH MAN                                        
The pain won't last,                                       
You'll still be able to bite.                              

She grabs Fantine's cheeks and forces open her mouth to
inspect her teeth.                                                   

TOOTH MAN
I do it fast,
I know my business all right.
It's worth a go.

The pimp pushes her down.                                            

FANTINE
You'll pay me first
What I am due.

TOOTH MAN
You'll get twice
If I take two!

She opens her mouth, and the pincers go in, as everyone              
gathers round to watch. Fantine screams as the first tooth           
is removed.                                                          


26B   EXT. RED LIGHT DISTRICT MONTREUIL - NIGHT                    26B     

The pimp is passing among the whores, checking that they're          
all fit for business.

WHORES                                           
God, we're weary,                                          
Sick enough to drop!

LOVELY LADY 1                                    
Belly burns like fire,
Will the bleeding ever stop!
26.


PIMP
Cheer up, deary!
Show a happy face!
Plenty more like you here
If you can't keep up the pace.                        

LOVELY LADY 1                               
Only joking!
Deary knows her place!

The pimp gestures at Fantine, now slumped in a doorway, her
cropped head in her hands.

A shy captain watches Fantine. The pimp notices.                

PIMP
Gimme the dirt -
Who's that bit over there?

WHORE 1                                     
A bit of skirt,
She's the one sold her hair.

HEAD WHORE                                  
She's got a kid,
Sends her all that she can.

PIMP
I might've known
There is always some man.

He moves in on Fantine.

PIMP
Lovely lady, come along and join
us!
Lovely lady!

Fantine looks up, a trickle of blood in one corner of her
mouth. The whores cluster round her, hands reaching out to
draw her in to their world. On the rotting warship, more        
whores appear out of the gaps of the hull to sing the           
chorus.                                                         

WHORE 1
Come on, dearie, why all the                          
fuss?                                                 

WHORES                                      
... why all the fuss.                                 

WHORE 2
You're no grander than the rest
of us.

WHORES                                      
... than the rest of us.                              
27.


WHORE 3
Life has dropped you at the
bottom of the heap.

WHORES                                      
...at the bottom of the heap.                         

Whore 3 bites her fingertip and applies her blood to rouge      
Fantine's cheeks.                                               

HEAD WHORE                                  
Join your sisters -

WHORE 1
Make money in your sleep!

WHORES                                      
... make money in your sleep.                         

WHORE 2
That's right, dearie,
Show him what you've got!

WHORES                                      
... show him what you've got.                         

WHORE 3
That's right, dearie,
Let him have the lot!

WHORES                                      
...let him have the lot.                              

The whores perform for the benefit of Fantine on the orders     
of the head whore, as the head whore leads her towards the      
hulk.                                                           

WHORES
Old men, young men, take'em as
they come!
Harbour rats and alley cats
And every kind of scum!
Poor men, rich men, leaders of
the land -
See them with their trousers off,
They're never quite as grand!
All it takes is money in your
hand!

The pimp leads the captain down the middle of the whores to     
Fantine who wears a filthy white dress. The pimp joins the      
captain and Fantine's hands as the head whore officiates -      
like a twisted wedding ceremony.                                

WHORES
Lovely ladies
Going for a song,
(more)
28.

WHORES (cont'd)
Got a lot of callers
But they never stay for long...

Fantine puts on a show of courage as she leads the captain          
into the ship's hulk, which is a brothel.                           

FANTINE                                         
Come on, Captain, you can wear your                       
shoes.                                                    
Don't it make a change to have a                          
girl who can't refuse?                                    


27   INT. ROTTING SHIP'S HULK, MONTREUIL - NIGHT                  27

Fantine, pale and frail, her bodice loosened, leads the             
captain down to the damp dregs of the ship.                         

We see the rotting straw mattress within as they enter,             
then Fantine lays down.

FANTINE
Easy money lying on a bed.
Just as well they never see
The hate that's in your head!
Don't they know they're making love
To one already dead?                                      


28   INT. ROTTING SHIP'S HULK, MONTREUIL - NIGHT                  28     

CLOSE ON a man's hand leaving money. We hear him exit. MOVE         
TO FIND Fantine lying alone on the mattress.

She pulls herself into a sitting position against the head
of the mattress. She draws her legs up and wraps her arms
round her knees, huddling against the misery of the world.

FANTINE
There was a time when men were
kind,
When their voices were soft
And their words inviting.
There was a time when love was
blind
And the world was a song
And the song was exciting.
There was a time...
Then it all went wrong.

I dreamed a dream in time gone
by,
When hope was high
And life worth living.
I dreamed that love would never
die.
I dreamed that God would be
forgiving.
(more)
29.

FANTINE (cont'd)

Then I was young and unafraid
And dreams were made and used and
wasted.
There was no ransom to be paid,
No song unsung, no wine untasted.

But the tigers come at night
With their voices soft as thunder
As they tear your hope apart
As they turn your dream to shame.

He slept a summer by my side,
He filled my days with endless
wonder.
He took my childhood in his
stride
But he was gone when autumn came.

And still I dream he'll come to
me!
That we will live the years
together...
But there are dreams that cannot
be
And there are storms we cannot
weather...

I had a dream my life would be
So different from this hell I'm
living -
So different now from what it
seemed!
Now life has killed the dream I
dreamed.

As she ends her song, her next customer is waiting. The head      
whore beyond.                                                     


29   EXT. RED LIGHT DISTRICT, MONTREUIL - NIGHT                 29

Fantine is out on the snow and ice-covered quayside,              
shivering, waiting for trade. She looks pale and sickly,
but still attempts an alluring smile.

She moves past the anchored ships, beneath the bowsprits,
trying pathetically to attract custom. Then she comes to a
stop, staring. She has seen and recognised Valjean, some
way off. He's out in the harbour district. He is talking to       
a beggar. Before he moves on, he hands over some money.           

As Fantine watches Valjean on his mission of mercy, a well-
dressed young man, BAMATABOIS, comes up to her. He arrives        
with two friends and a valet.                                     
30.


BAMATABOIS
Here's something new. I think
I'll give it a try.
Come closer, you! I like to see
what I buy.
The usual price
For just one slice of your pie.                       

FANTINE
I don't want you! No! No,
M'sieur! Let me go!

BAMATABOIS
Is this a trick? I won't pay
more!

FANTINE
No, not at all!                                       

BAMATABOIS
You've got some nerve, you little
slut!
You've got some gall!                                 
It's the same with a tart as it is                    
with a grocer                                         
The customer sees what he gets in                     
advance                                               
It's not for the whore to say "yes                    
sir" or "no sir"                                      
It's not for the harlot to pick and                   
to choose or to lead me a dance!                      

He pulls her clothing open and laughingly stuffs snow down      
her cleavage. Fantine reacts with fury. They fall over in the   
snow and Bamatabois laughs.                                     

FANTINE
I'll kill you, you bastard!
Try any of that!
Even a whore who has gone to the
bad
Won't be had by a rat!                                

Fantine scratches Bamatabois across the face. Bamatabois        
touches his face and sees the blood on his fingers. His         
friends drag Fantine against the harbour wall.                  

BAMATABOIS
(furious but aroused)                             
By Christ you'll pay for what
you've done!
This rat will make you bleed,
you'll see!
I guarantee I'll make you suffer!
For this disturbance of the peace
For this insult to life and
property!
31.


Bamatabois suddenly sees that police have arrived.            

FANTINE
I beg you, don't report me, sir.
I'll do whatever you may want.                      

BAMATABOIS
Make your excuse to the police!

Bamatabois' friend drags Fantine towards the police. It's     
Javert.

JAVERT
Tell me quickly what's the story.
Who saw what and why and where?
Let him give a full description,
Let him answer to Javert!
In this nest of whores and vipers
Let one speak who saw it all.
Who laid hands on this good man
here?
What's the substance of this
brawl?

BAMATABOIS
Javert, would you believe it?                       
I was walking, it was dark
When this prostitute attacked me
You can see she's left her mark!

He shows the blood. Javert turns to Fantine.

JAVERT
She will answer for her actions
When you make a full report.
You may rest assured, M'sieur,
That she will answer to the
court.

Fantine is almost fainting with fear, still racked with
occasional spasms of coughing. Unseen by her, Valjean is
approaching from behind. Javert's assistants pick Fantine     
up. Javert covers his mouth with a handkerchief as he         
approaches Fantine.                                           

FANTINE
There's a child who sorely needs
me,
Please, m'sieur, she's but that
high.
Holy God, is there no mercy?
If I go to jail she'll die.                         

JAVERT
I have heard such protestations
Every day for twenty years.
Let's have no more explanations,
(more)
32.

JAVERT (cont'd)
Save your breath and save your
tears.

Javert indicates to the two policemen to drag Fantine away.     

Valjean steps out of the shadows.

VALJEAN
A moment of your time, Javert.
I do believe this woman's tale.

JAVERT
Monsieur le Mayor!                                    

VALJEAN
You've done your duty. Let her
be.
She needs a doctor, not a jail.

JAVERT
Monsieur le Mayor!                                    

Javert looks on, containing his anger, as Valjean reaches
out a hand to Fantine. To Fantine, it's as if he's come to
her in a dream -

FANTINE
Can this be?

VALJEAN
Where will she end -
This child without a friend?

He holds Fantine's hands, looking into her face.

VALJEAN
I've seen your face before.
Show me some way to help you.
How have you come to grief
In such a place as this?

FANTINE
M'sieur, don't mock me now, I
pray
It's hard enough I've lost my
pride.
You let your foreman send me
away.
Yes, you were there
And turned aside.
I never did no wrong.

VALJEAN
Is it true what I've done -

FANTINE
My daughter's close to dying.
33.


VALJEAN
- to an innocent soul?

FANTINE
If there's a God above -

VALJEAN
Had I only known then!

FANTINE
He'd let me die instead.

VALJEAN
In His name my task has just begun.
I will her to the hospital.                             

Valjean picks Fantine up in his arms.                             

Javert is quietly coldly furious.

JAVERT
Monsieur le Mayor!                                      

FANTINE
Bring Cosette back to me.

VALJEAN
Where is she?

FANTINE
At an inn in Montfermeil...

JAVERT
Monsieur le Mayor!                                      

VALJEAN
I will see it done! I will send                         
for her immediately!                                    

As Valjean and Fantine move away, Javert stares after them,       
then turns and quietly instructs his assistant to follow          
after them.                                                       


30   EXT. POLICE STATION, MONTREUIL - DAY                       30     

As Javert walks up the steps to his police station his            
assistant stops him with an urgent letter.                        

JAVERT'S ASSISTANT
From Paris, Monsieur.

Javert seizes it, opens it, and reads. As he reads, his
expression changes. Appalled, he realizes he's made a
terrible mistake.
34.


31   INT. FACTORY, MONTREUIL - NIGHT                              31

Valjean is at his desk in his office, going through his
papers once everyone else has gone, when Javert enters and          
stands before him. He looks up.

JAVERT
Monsieur le Mayor
I have a crime to declare!
I have disgraced
The uniform that I wear.
I've done you wrong,
Let no forgiveness be shown.
I've been as hard
On every rogue I have known.
I'll bear the blame,
I must be treated
Just the same.

VALJEAN
I don't understand.
What is this crime, Javert?

JAVERT
I mistook you for a convict,
I have made a false report.
Now I learn they've caught the
culprit -
He's about to face the court.

Valjean conceals his shock.

JAVERT
And of course the thief denies
it,
You'd expect that from a con.
But he couldn't run for ever,
No, not even Jean Valjean.

VALJEAN
You say this man denies it all,
And gives no sign of
understanding or repentance?
You say this man is going to
trial,
And that he's sure to be returned
to serve his sentence?

JAVERT
He will pay, and so must I.
Press charges against me, sir!

VALJEAN
You have only done your duty
It's a minor sin at most.
All of us have been mistaken                              
You'll return, sir, to your post.
35.


JAVERT
Must I do as you say?

VALJEAN
It's your duty to obey!

Javert is about to protest again, but Valjean raises one
commanding hand, to indicate his decision is made. Javert
gives an abrupt bow, and departs.

Left alone, Valjean paces his office, deeply disturbed.

VALJEAN
They think that man is me -
Without a second glance.
This stranger they have found -
This man could be my chance!

Why should I save his hide?
Why should I right this wrong?
When I have come so far
And struggled for so long?

If I speak I am condemned.
If I stay silent, I am damned!

He goes out onto the balcony that looks down on the empty           
factory.

VALJEAN
I am the master of hundreds of
workers -
They all look to me.
Can I abandon them?
How would they live
If I am not free?

If I speak they are condemned.
If I stay silent, I am damned!


31A   INT. VALJEAN'S HOUSE, MONTREUIL - NIGHT                     31A     

Valjean is sitting staring at the Bishop's candlesticks.            

Who am I?
Can I condemn this man to
slavery?
Pretend I do not feel his agony?
This innocent who bears my face,
Who goes to judgement in my
place...
Who am I?


31B   INT. VALJEAN'S HOUSE, MONTREUIL - NIGHT                     31B     

Valjean is furiously packing stuff up.                              
36.


VALJEAN                                          
Can I conceal myself for ever
more?
Pretend I'm not the man I was
before?
And must my name until I die
Be no more than an alibi?


31C   EXT. COUNTRY ROAD - NIGHT.                                   31C     

Close on two horses panting. A stopped carriage in a wide            
night landscape. The driver is Valjean, hesitating.                  


Must I lie?
How can I ever face my fellow
men?
How can I ever face myself again?                          


31D   INT/EXT. COURTROOM - NIGHT                                   31D     

Valjean hesitates outside the courtroom and in the lobby of          
the courtroom, pacing back and forth.                                

VALJEAN
My soul belongs to God, I know,
I made that bargain long ago.
He gave me hope when hope was
gone!
He gave me strength to journey
on!
Who am I?
Who am I?
I'm Jean Valjean!

Valjean pushes through the crowds at the back of the                 
courtroom.                                                           


32    INT. COURTROOM - NIGHT                                       32      

The man accused of being Jean Valjean, a wretched down-and-
out, stands before the JUDGE. He looks uncannily like the            
real Valjean. Before the judge has a chance to speak, the            
doors open and Valjean bursts in. Sensation in the court.

VALJEAN
And so, your honour, you see it's
true
That man bears no more guilt than
you!
Who am I?
24601!
37.


The judge is too stunned to respond. The others in the              
court can't believe what they've just heard. The Mayor of
Montreuil-sur-Mer, a convict!

VALJEAN
If you don't believe me ask
Inspector Javert. He knows where to
find me.

The judge goes over to Valjean and gently leads him out.            

JUDGE                                           
Monsieur le Mayor, you are not                            
well, you must come with me, do you                       
have a carriage outside? Monsieur                         
le Mayor, we must get you home to                         
bed immediately!!                                         



33   INT. HOSPITAL, MONTREUIL - NIGHT                             33     

The hospital is in the long attic of Valjean's factory.             

Valjean hurries into the hospital, breathless. He sees a
nursing sister outside Fantine's room.

VALJEAN
Is her daughter with her?

NURSE
No, monsieur. Her guardian sent
this.

She gives Valjean a note. He reads it with mounting anger.

VALJEAN
Money not enough. Send more.
Thenardier.' What sort of man is
this?


34   INT. HOSPITAL, MONTREUIL - NIGHT                             34     

Fantine lies in bed, delirious. She is dressed in pure              
white. Her eyes are closed.                                         

FANTINE
Cosette, it's turned so cold!
Cosette, it's past your bedtime!
You've played the day away
And soon it will be night.

Fantine's eyes open and she sees Cosette, playing in the            
room. She looks healthy and is dressed prettily.                    

Come to me, Cosette, the light is
fading.
(more)
38.

FANTINE (cont'd)
Don't you see, the evening star                      
appearing?                                           
Come to me, and rest against my                      
shoulder,                                            
How fast the minutes fly away and                    
every minute colder?                                 

Valjean enters, and sees at once that Fantine is close to      
the end. He drops to his knees by her bed.

VALJEAN
Dear Fantine, Cosette will be                        
here soon!                                           
Dear Fantine, she will be by your                    
side                                                 

FANTINE
(trying to get out of bed)                       
Come Cosette, the night has grown                    
so cold!                                             

VALJEAN
(putting her back in bed)                        
Be at peace! Be at peace ever
more.

FANTINE
My Cosette -

VALJEAN
- shall live in my protection.

FANTINE
Take her now!

She pushes into his hand a scrap of paper on which she's
written her wishes.

VALJEAN
Your child will want for nothing.

FANTINE
Good m'sieur, you come from God
in heaven.

VALJEAN
And none shall ever harm Cosette
as long as I am living.

Fantine has stopped looking towards the window. All her
fading strength is now directed towards Valjean. She tries
to reach up to him.

FANTINE
Take my hand...
The night grows ever colder.
39.


VALJEAN
Then I will keep you warm.

He wraps her in his arms.

FANTINE
Take my child
I give her to your keeping.

VALJEAN
Take shelter from the storm.

FANTINE
For God's sake, please stay till
I am sleeping...
And tell Cosette I love her
And I'll see her when I wake...

Fantine starts to spasm. She sees something over Valjean's      
shoulder. Valjean doesn't realise. Her eyes go glassy as        
she passes away. Valjean then hears the unforgettable voice     
of Javert behind him.                                           

JAVERT
Valjean, at last
We see each other plain!
M'sieur le Mayor'
You'll wear a different chain!

Valjean stands to face Javert.                                  

VALJEAN
Before you say another word,
Javert,
Before you chain me up like a
slave again,
Listen to me! There is something
I must do.
This woman leaves behind a
suffering child.
There is none but me who can
intercede -
In mercy's name, three days are
all I need,
Then I'll return, I pledge my
word!
Then I'll return...

Javert draws his sword and aims it at Valjean.                  

JAVERT                                      
You must think me mad!
I've hunted you across the years.
Men like you can never change -
A man such as you!

Valjean breaks a section of timber beam from the roof.          
40.


The men start to circle each other.                              

They sing at the same time, duelling in song.

VALJEAN
Believe of me what you will
There is a duty that I'm sworn to
do.
You know nothing of my life -
All I did was steal some bread.
You know nothing of the world -
You would sooner see me dead.
But not before I see this justice
done!

JAVERT
Men like me can never change.
Men like you can never change.
No, 24601!
My duty is to the law.
You have no rights.
Come with me, 24601!

The two men fight.                                               

VALJEAN
I am warning you, Javert,
I'm a stronger man by far!
There is power in me yet!
My race is not yet run!

JAVERT                                       
Now the wheel has turned around -
Jean Valjean is nothing now.
Dare you talk to me of crime
And the price you had to pay.
Every man is born in sin
Every man must choose his way.

Javert disarms Valjean and drives him backwards towards an       
attic door.                                                      

You know nothing of Javert!
I was born inside a jail.
I was born with scum like you.
I am from the gutter too.

Valjean is pushed through the doors out onto a wooden            
loading platform beneath a hoist. Below, the walls of the        
factory lead straight down to the black sea at high tide.        
Javert is triumphant.                                            

Valjean glances down and pushes back, dropping into the          
darkness of the ocean.                                           

Javert goes to jump after him and cannot bring himself to do     
it.                                                              
41.


Javert stares into the black sea - there is no sign of                
Valjean.                                                              


34A   EXT. HARBOUR, MONTREUIL - NIGHT                               34A     

Javert and various police search the harbourside with                 
lanterns.                                                             

Valjean, dripping wet, watches from a tunnel under a factory,   
as Fantine's body wrapped in a shroud is dumped on a cart.      

They sing to themselves, continuing their duet without                
knowing.                                                              

VALJEAN                                           
And this I swear to you tonight -

JAVERT
There is no place for you to
hide.

VALJEAN
Your child will live within my
care -

JAVERT
Wherever you may hide away -

VALJEAN
And I will raise her to the
light.

JAVERT/VALJEAN
I swear to you, I will be there!                            


35    EXT. MONTFERMEIL - DUSK                                       35      

The village street is bright with booths set up for a Frost
Fair. Families and visitors are out buying baubles, or                
laughing at the antics of travelling players. Small girls             
cluster round a stall that displays prettily-dressed dolls.           
Amongst them is a prettily-dressed girl of 8 or 9 years:              
EPONINE.                                                              

Across the road from this stall stands a shabby inn. A                
sign lashed to an old cart swinging in the wind reveals the           
inn to be The Sergeant of Waterloo'. The inn is still                
closed despite the small crowd at the fair.                           

MOVE IN on the frosted window of the inn, through which we            
see a little girl, COSETTE, gazing out at the display of
dolls.
42.


36   INT. INN, MONTFERMEIL - END OF DAY                           36

Cosette is in the process of sweeping the floor. She's come
to a stop, gazing out of the window, mesmerized by the              
sight of the most beautiful doll in the display, and                
jealous that Eponine can see it and touch it up close.              

COSETTE
There is a castle on a cloud
I like to go there in my sleep.
Aren't any floors for me to
sweep,
Not in my castle on a cloud.

Cosette gets out from a hiding place in the wall a knotted          
grimy rag - this is her "doll", the knot is the doll's head.        

There is a lady all in white
Holds me and sings a lullaby.
She's nice to see and she's soft to
touch                                                     
(holding doll to her ear                              
and whispering)                                     
She says, Cosette, I love you
very much.

I know   a place where no one's
lost
I know   a place where no one
cries.
Crying   at all is not allowed,
Not in   my castle on a cloud.                            

Madame Thenardier comes bustling down the stairs in a bad           
mood. She glowers at little Cosette and changes the closed          
sign from "closed" to "open".                                       

MADAME THENARDIER
Now look who's here!
The little madam herself,
Pretending once again
She's been so awfully good!
Better not let me catch you
slacking!
Better not catch my eye!
Ten rotten francs your mother
sends me -
What is that going to buy?
Now take that pail,
My little Mademoiselle,
And go and draw some water from
the well.
We should never have taken you in
In the first place -
How stupid the things that we do!
Like mother, like daughter, the
scum of the street.
43.


Cosette goes to put the broom away.                               

Eponine comes in from outside.                                    

MADAME THENARDIER                             
Eponine, come my dear.
Eponine, let me see you.
You look very well in that little
blue hat!
There's some little girls who
know how to behave
And they know what to wear
And I'm saying thank heaven for
that!

Madame Thenardier sees that Cosette far from going is             
hiding behind the far wall. We see Cosette's frightened           
eyes peering out from a tiny gap in this wall.                    

MADAME THENARDIER                             
Still there, Cosette?
Your tears will do you no good!
I told you to fetch some water
from the well in the wood.

COSETTE
(singing through the gap)                           
Please do not send me out alone.
Not in the darkness on my own.

Madame Thenardier imitates Cosette as she sings.                  

MADAME THENARDIER
(singing through the gap)                           
Enough of that, or I'll forget to
be nice!
You heard me ask for something,
And I never ask twice!                                  

The innkeeper's gang posing as customers who have been            
loitering outside come in, explaining to a fifth man who is a     
newer recruit a story from Monsieur Thenardier's past. Madame     
Thenardier goes outside to open up the rather pathetic frost      
fair stall on the porch of the inn.                               

CUSTOMER 1                                    
Mine host Thenardier
He was there, so they say,
At the field of Waterloo.

CUSTOMER 2                                    
Got there, it's true,
When the fight was all through
But he knew just what to do.

CUSTOMER 3                                    
Crawling through the mud,
So I've heard it said,
(more)
44.

CUSTOMER 3 (cont'd)
Picking through the pockets of
the English dead.

CUSTOMER 4                                      
He made a tidy score from the
spoils of war.

We suddenly hear the voice of the landlord, Thenardier. He          
has been there all the time, asleep on a bench. He wakes            
from his drunken slumbers and roars out:                            

THENARDIER
My band of soaks,
My den of dissolutes,
My dirty jokes, my always pissed
as newts,
My sons of whores,
Spend their lives in my inn!
Homing pigeons homing in -
They fly through my doors,
And their money's as good as
yours!


36A   EXT. INN, MONTFERMEIL - DUSK                                36A     

Madame Thenardier is trying to sell something unappealing           
from her stall to a portly looking man when slushy snow             
from the stall's roof falls on the man's head. Madame               
Thenardier ushers him inside.                                       


37    INT. INN, MONTFERMEIL - DUSK                                37      

THENARDIER
Welcome, m'sieur!
Sit yourself down
And meet the best
Innkeeper in town!

Madame Thenardier pretends to accidentally drop a comb from         
her hair and the customer helpfully picks it up, allowing           
Madame Thenardier to pick his wallet from a back pocket as          
he stands up. Monsieur Thenardier takes his coat which              
allows the couple to see the customer transfer a pocket             
watch from coat to jacket pocket.                                   

THENARDIER
As for the rest -
All of them crooks
Rooking the guests
And cooking the books.
Seldom do you see
Honest men like me
A gent of good intent
Who's content to be -

He pours a strong drink for the new customer -
45.


THENARDIER
Master of the house!
Doling out the charm
Ready with a handshake
And an open palm

Thenardier has thieved the pocket watch using his handshake        
as a distraction. He passes this off to Madame Thenardier.         

THENARDIER
Tells a saucy tale
Makes a little stir
Customers appreciate a bon-viveur
Glad to do a friend a favour
Doesn't cost me to be nice
But nothing gets you nothing
Everything has got a little
price!

THENARDIER
Master of the house!
Keeper of the zoo!
Ready to relieve'em
Of a sou or two -
(serving wine)                                       
Watering the wine


37A   INT. KITCHEN, INN, MONTFERMEIL - FLASHBACK - DAY           37A     

Thenardier is pissing into the very wine bottle he's using to   
serve the customer.                                             


37B   INT. INN, MONTFERMEIL - DUSK                               37B     

THENARDIER                                     
Making up the weight
Picking up their knick-knacks
When they can't see straight
Everybody loves a landlord
Everybody's bosom friend!
I do whatever pleases -
Jesus! Won't I bleed'em in the
end!


37C   EXT. INN, MONTFERMEIL - DUSK                               37C     

At Madame Thenardier's stall, a frost fair customer is             
covered by snow, only this time we realise Madame Thenardier       
is responsible for pushing the snow off the awning with a          
stick.                                                             

THENARDIER/CUSTOMERS                           
Master of the house!
Quick to catch your eye
(more)
46.

THENARDIER/CUSTOMERS (cont'd)
Never wants a passer-by
To pass him by!

Madame Thenardier ushers the customer inside.                         


37D   INT. INN, MONTFERMEIL - DUSK                                  37D     

Again Madame Thenardier drops her comb in front of the new            
customer but this time the thieving is foiled by little               
Cosette who helpfully picks it up. Over the chorus she shouts         
at little Cosette to get out.                                         

THENARDIER/CUSTOMERS                              
Servant to the poor
Butler to the great
Comforter, philosopher and
lifelong mate
Everybody's boon companion
Everybody's chaperone -

THENARDIER
But lock up your valises -
Jesus! Won't I skin you to the
bone!

A FAMILY enters the inn. Thenardier fusses over them.                 

THENARDIER
Enter, messieurs!                                           
Lay down yer load
Unlace yer boots
And rest from the road.
This weighs a ton
Travel's a curse
But here we strive
To lighten your purse.

He's got the father's purse out, and is removing notes.               

THENARDIER
Here the goose is cooked
Here the fat is fried
And nothing's overlooked
Till I'm satisfied -
Food beyond compare                                         
Food beyond belief                                          


38    INT. KITCHEN, INN, MONTFERMEIL - FLASHBACK - DAY              38      

Thenardier shows off the secrets of the squalid kitchen -
every possible animal being used to make mince meat.                  

THENARDIER V/O                                    
Mix it in a mincer                                          
And pretend it's beef
Kidney of a horse
(more)
47.

THENARDIER V/O (cont'd)
Liver of a cat                                            
Filling up the sausages
With this and that!


38A   INT. INN, MONTFERMEIL - DUSK                                38A     

Thenardier serves the disgusting food that we've seen him           
create in the flashback to the family.                              

THENARDIER
Residents are more than welcome
Bridal suite is occupied                                  


38B   INT. BRIDAL SUITE - FLASHBACK - NIGHT                       38B     

A groom and bride consummate their union.                           

Thenardier is going through the groom's trousers.                   

THENARDIER V/O                                  
Reasonable charges                                        
Plus some little extras on the                            
side.                                                     


38C   INT. INN, MONTFERMEIL - NIGHT                               38C     

THENARDIER                                      
Charge'em for the lice
Extra for the mice
Two percent for looking in the
mirror twice.
Here a little slice
There a little cut
Three percent for sleeping with
the window shut.
When it comes to fixing prices
There are lots of tricks he knows
How it all increases
All those bits and pieces -
Jesus! It's amazing how it grows.


39    EXT. INN, MONTFERMEIL - NIGHT                               39

Thenardier comes out of the inn, backed by a posse of his
gang of loyal customers, and takes control of a brass band to   
sing to the Frost Fair.                                         

THENARDIER/CUSTOMERS
Master of the house!
Quick to catch your eye
Never wants a passer-by
To pass him by!
48.


Further down the street, carrying her empty buckets, Cosette
turns to look sadly back at the cheery sight.

THENARDIER
Servant to the poor
Butler to the great
Comforter, philosopher and
lifelong mate
Everybody's boon companion
Gives'em everything he's got -                           

The Portly Customer has discovered he's been robbed. He            
comes out to protest, holding out his emptied wallet. At
once two of Thenardier's thugs grab him and hustle him off.

THENARDIER
Dirty bunch of geezers
Jesus! What a sorry little lot!


39A   INT. INN, MONTFERMEIL - NIGHT                              39A     

Madame Thenardier approaches a handsome soldier who is             
drinking at a table by the fire in the inn. She sits on his        
lap and gets him to look back at Thenardier, so allowing her       
to see inside his coat and spot his wallet.                        

MADAME THENARDIER
I used to dream
That I would meet a prince
But God almighty
Have you seen what's happened
since?
Master of the house'
Isn't worth my spit!
Comforter, philosopher
And lifelong shit!
Cunning little brain
Regular Voltaire
Thinks he's quite a lover
But there's not much there.

As Madame Thenardier reaches for the man's groin, she lifts        
his wallet skillfully and hands it off to Monsieur                 
Thenardier.                                                        

THENARDIER                                     
What a cruel trick of nature
Landed me with such a louse.
God knows how I've lasted
Living with this bastard in the
house!

She pulls the young man into a dance, enabling her to steal        
everything else of value he has. Father Christmas has also         
been lured from the frost fair and the Thenardiers slit his        
presents sack and exchange it for a sack containing snow.          
49.


THENARDIER/CUSTOMERS
Master of the house!

MADAME THENARDIER
Master and a half!

THENARDIER/CUSTOMERS
Comforter, philosopher -

MADAME THENARDIER
Don't make me laugh!

THENARDIER/CUSTOMERS
Servant to the poor
Butler to the great -

MADAME THENARDIER
Hypocrite and toady
And inebriate!

THENARDIER/CUSTOMERS
Everybody bless the landlord!
Everybody bless his spouse!

THENARDIER
Everybody raise a glass!

MADAME THENARDIER
Raise it up the master's arse!

THENARDIER/CUSTOMERS
Everybody raise a glass to the
master of the house!



40/41   SCENES OMITTED                                           40/41


42      EXT. WOOD BY THE INN - NIGHT                                 42

Cosette has filled her buckets at the well in the wood, and
is now heading back. Through the dark trees ahead we glimpse
the cheerful lights of the Frost Fair and the distant inn.
She goes slowly, because the buckets are heavy. She hums to
herself to keep her spirits up, a wordless verse of Castle
on a Cloud'.

After a few steps she pauses to rest the weight of the
buckets.

Strong arms reach for the buckets and lift them out of her
hands. She looks up, amazed. There's Valjean.

VALJEAN
Hush now, do not be afraid of me.
Don't cry. Show me where you live.
(more)
50.

VALJEAN (cont'd)
Tell me, my child, what is your
name?

COSETTE
I'm called Cosette.

VALJEAN
Cosette?

She gazes up at him. Hardly knowing why, the little girl
trusts this stranger. Valjean picks up the heavy buckets, and
they head back towards the inn. As they go, they hum Castle
on a Cloud' together.


43   INT. INN, MONTFERMEIL - NIGHT                               43

Valjean enters with Cosette. Madame Thenardier hurries             
over. Madame and Monsieur Thenardier try to thieve from            
Valjean using the same tricks established earlier, but he          
evades every attempt. Eponine watches silently from a              
corner.

VALJEAN
I found her wandering in the wood
This little child, I found her
trembling in the shadows.
And I am here to help Cosette,
And I will settle any debt you
may think proper.
I will pay what I must pay
To take Cosette away.

This is a duty I must heed.
There is a promise I have made.
For I was blind to one in need,
I did not see what stood before
me.
Now your mother is with God.
Her suffering is over,
And I speak here with her voice,
And I stand here in her place,
and from this day, and ever more -

MADAME THENARDIER
Let me take your coat, m'sieur!

VALJEAN
Cosette shall live in my
protection.                                              

THENARDIER
You are very welcome here!

VALJEAN
I will not forget my vow.
51.


THENARDIER
Take a glass!

MADAME THENARDIER
Take a chair!

VALJEAN
Cosette shall have a father now.

Thenardier turns to his wife.

THENARDIER
What to do? What to say
Shall you carry our treasure
away?
What a gem! What a pearl!
Beyond rubies is our little girl!
How can we speak of debt?
Let's not haggle for darling
Colette!

MADAME THENARDIER
Cosette!

THENARDIER
Cosette -
Dear Fantine - gone to rest -
Have we done for her child what
is best?
Shared our bread - shared each
bone -
Treated her like she's one of our
own!
Like our own, m'sieur!

VALJEAN
Your feelings do you credit, sir.
And I will ease the parting blow.
Let us not talk of bargains and
bones and greed.

He gives Thenardier money.

VALJEAN
Now may I say we are agreed?

MADAME THENARDIER
That would quite fit the bill
If she hadn't so often been ill.
Little dear, cost us dear!
Medicines are expensive, m'sieur.
Not that we begrudged a sou -
It's no more than we Christians
must do.

Valjean gives more money.
52.


THENARDIERS
One thing more! One small doubt!
There are treacherous people
about!
No offence! Please reflect!
Your intentions may not be
correct!

Valjean hands over more money.

VALJEAN
No more! Here's your price!
Fifteen hundred for your
sacrifice.
Come, Cosette, say goodbye.
Let's seek out some friendlier
sky.
Thank you both for Cosette -
It won't take you too long to
forget.

He leads Cosette to the door.


44   EXT. INN, MONTFERMEIL - NIGHT                               44

Valjean lifts Cosette into the waiting cab.

VALJEAN
Where I go, you will be.

COSETTE
Will you be like a Papa to me?

VALJEAN
Yes, Cosette!
This is true!
I'll be father and mother to you!

The cab sets off down the road.


45   INT. INN, MONTFERMEIL - NIGHT                               45

Madame Thenardier takes the bunch of notes from her
husband's hand and inspects them.

THENARDIER
Not bad!

MADAME THENARDIER
Not enough!

Through the open door Thenardier sees a man on horseback           
rattling up to the inn.
53.


MADAME THENARDIER
There's a copper at the door!
What the devil have you done?

Javert strides into the inn.

JAVERT
Where's the child Cosette?

MADAME THENARDIER
She's gone with a gent,
Didn't tell us where they went,
Didn't leave his home address.

JAVERT
Did you catch the fellow's name?

Both Thenardiers shake their heads.

Javert stares once, contemptuously, round the seedy inn,
and departs without a further word. Thenardier goes to the
doorway to watch him leave.

MADAME THENARDIER
You're a bloody fool
Look at what we got.

THENARDIER
Should have struck the iron,
Struck it while it's hot.

THENARDIER/MADAME THENARDIER
Next time round we'll be here
And we're gonna get the lot.


46   EXT. OUTSKIRTS OF PARIS - NIGHT                              46

Valjean's cab, moving fast, passes down the road into the
city.

IN CAB - Valjean has one arm round Cosette to protect her
from the jolting of the cab. He gazes at her as she slips
into a fitful sleep.

VALJEAN
Suddenly I see
Suddenly it starts
When two anxious hearts
Beat as one.
Yesterday I was alone
Today you walk beside me
Something still unclear
Something not yet here
Has begun.
Suddenly the world
Seems a different place
Somehow full of grace
(more)
54.

VALJEAN (cont'd)
And delight.

How was I to know
That so much love
Was held inside me?
Something fresh and young
Something still unsung
Fills the night.

How was I to know at last
That happiness can come so fast?
Trusting me the way you do
I'm so afraid of failing you
Just a child who cannot know
That danger follows where I go
There are shadows everywhere
And memories I cannot share

Nevermore alone
Nevermore apart
You have warmed my heart
Like the sun.
You have brought the gift of life
And love so long denied me.

Suddenly I see
What I could not see
Something suddenly
Has begun.

He brushes the hair from her face, and satisfies himself
that she's comfortable. Then he puts his head out of the
window. At the gate into Paris, soldiers are checking              
documents of occupants of carriages.                               

Valjean slips out of the carriage with Cosette and makes           
his way along the wall, away from the gate.                        


46A   EXT. PARIS BROKEN WALL - NIGHT                             46A     

Valjean finds a section of tumble down wall and climbs over.       


46B   EXT. PARIS SLUM STREET - NIGHT                             46B     

Valjean and Cosette make their way down a darkened street.         


46C   EXT. PARIS - RIVER SEINE - NIGHT                           46C     

Valjean and Cosette turn down a narrow street, no longer           
hurrying.                                                          

The narrow street turns, and opens out onto the river.             
Valjean stops. There, on the other side of the river, in the       
light of a lamp, stands Javert.                                    
55.


47   SCENE OMITTED                                              47     


48   EXT. MAZE OF OLD STREETS - NIGHT                           48     

Now Valjean and Cosette are running - down narrow alleys,
into small dark courtyards, not knowing which way to turn.
Whenever Valjean thinks they've thrown their pursuer, there
he is, not far behind. And he's no longer alone. With him
are a detachment of soldiers.                                     

Javert and his team never seem to run. But he's always            
there.


49   EXT. DEAD END - NIGHT                                      49

Valjean and Cosette turn into a street that is walled in by
high windowless houses. They follow it round a corner to
find - a dead end. A high wall before them. They're
trapped.

Valjean looks round. No way out. Then he sees a nearby lamp
bracket. Hanging from it is the rope that is used to lower
the oil lamp for lighting. He tears off the rope and ties
one end round Cosette, beneath her armpits. Then holding
the other end, he scales the wall, using the corner to
brace himself as he rises. Once on the top, he hauls
Cosette up by the rope. Only then does he turn to look down
onto the other side.

A cloister. A building in the middle, windows glowing.
Grave stones black against the white snow. The sound of
women's voices, singing a psalm.

NUNS
Te lucis ante terminum
Rerum Creator poscimus
Ut pro tua clementia
Sis praesul et custodia...

Valjean lowers Cosette down into the garden, and drops down
after her.

Javert and his men enter the dead end to find them gone.


50   INT. CONVENT CLOISTER - NIGHT                              50

Valjean crouched low, with Cosette in his arms, holding her
still and quiet until Javert is gone.

Then he straightens up and looks round. He takes in the
sound of singing.

NUNS
Procul recedant somnia
Et noctium phantasmata
(more)
56.

NUNS (cont'd)
Hostemque nostrum comprime
Ne polluantur corpora...

He goes closer to the windows of the building. Through the
blurry glass he can make out a chapel, and a line of nuns
singing.

Valjean continues and sees a man filling in a new grave.
The man starts as he sees Valjean.

FAUCHELEVENT
Who's that?

Valjean jumps, takes Cosette protectively into his arms.
Turns to answer.

FAUCHELEVENT
Why, it's Monsieur Mayor!

It's Fauchelevent, now a gardener, still limping from his
injury.

VALJEAN
Who are you?

FAUCHELEVENT
Don't you remember? The cart fell
on me!                                               

VALJEAN                                    
Monsieur Fauchelevent!                               

FAUCHELEVENT                               
You saved my life! You got me
this job as a gardener!

Valjean gazes at him, and remembers.

VALJEAN
Now you can do the same for me.
We need a place of sanctuary.
This child and I, we need to
disappear.

FAUCHELEVENT
In this place of Holy Orders
You are brought to God's domain
May the sisters grant you shelter
May their prayers ease your pain.

Valjean and Cosette follow him to the convent.

VALJEAN
We'll give thanks for what is
granted
What the sisters may ordain
Here we pray for new beginnings -
Here our lives can start again.
57.


Valjean looks to the heavens. The camera soars into the air
and heads east as dawn breaks over Paris. We rush low over
Paris as the sun comes up, towards the Place de la Bastille.


51   EXT. PLACE DE LA BASTILLE, PARIS - DAY                       51

SUPERIMPOSE CAPTION:

Nine years later

The dawn light glows on a massive ELEPHANT. The monument,
made of wood and plaster, now ruined and crumbling, stands
on a plinth on one side of the wide open square. On the far
side, the remains of the great fortress that was the
Bastille. In the middle, scaffolding surrounds a half-built
triumphal column, which is being erected to celebrate the
new regime.

SUPERIMPOSE CAPTION:

Paris, 1832.

The streets that run from the square lead in one direction
to the Paris of power and wealth; in the other direction
into the slums.

The camera sweeps in and down to meet the elephant.

A head pops out of one of the elephant's many holes -
GAVROCHE, a street urchin. He gives a shrill whistle. At
once a dozen more street urchins show themselves, from
every crack in the monument's skin. Agile as a monkey,
Gavroche drops to the ground, followed by his band.


52   EXT. PARIS BOULEVARD - DAY                                   52

FOLLOW GAVROCHE in as he races down a grand boulevard,              
dodging the crowds of strolling bourgeoisie and beggars,
weaving in and out of the lines of carriages attempting to
make their way in either direction. These are the
conveyances of the rich, fine gilded coaches with matched
horses and footmen on the back. Virtually at a standstill,
they lend Gavroche a platform as he leaps from coach to
coach, a street urchin dancing on the heads of the elite.

As he goes, the poor on the pavements sing to the stony-
faced rich in their golden high-sprung glory -

BEGGARS CHORUS
Look down and see the beggars at
your feet!
Look down and show some mercy if
you can!
Look down and see the sweepings
of the street!
(more)
58.

BEGGARS CHORUS (cont'd)
Look down, look down,
Upon your fellow man!

The fine ladies and grand gentlemen in the carriages avert
their eyes, or raise the blinds of their carriage windows
to shut out the sight of the losers of their world.

Gavroche, bounding over their heads, evading the swipes of
liveried footmen, lands on the running board of one            
particularly grand carriage and begs/taunts the RICH           
OCCUPANT.                                                      

GAVROCHE
Ow do you do? My name's
Gavroche!
These are my people, here's my
patch.
Not much to look at - nothing
posh!
Nothing that you'd call up to
scratch.
This is my school, my high
society!
Here in the slums of St Michel.
We live on crumbs of humble piety
Tough on the teeth - but what the
hell!
Think you're poor? Think you're
free?
Follow me! Follow me!

BEGGARS CHORUS
Look down and show some mercy if
you can!
Look down, look down, upon your
fellow man!

STILL RUNNING WITH Gavroche as he hops onto the back of
another very grand carriage, the traffic now moving at         
last, hitching a ride on the back - one or two of his gang     
hop on back of carriage with him, the others run panting       
after to hear his political lecture.                           

GAVROCHE
There was a time we killed the
King
We tried to change the world too
fast.
Now we have got another King,
He is no better than the last.
This is the land that fought for
liberty -
Now when we fight we fight for
bread!
Here is the thing about equality -
Everyone's equal when they're
dead.
Take your place!
(more)
59.

GAVROCHE (cont'd)
Take your chance!
Vive la France! Vive la France!


53   EXT. LAMARQUE'S HOUSE, PARIS - DAY                         53     

The carriage has reached an arch into a courtyard where a         
crowd of a couple of hundred is gathered outside a house of       
sickness. The carriage stops as its occupant wants to watch       
what is going on. The street is padded with straw. Many eyes      
gaze up at the draped windows. People cross themselves. A         
priest is seen hurrying into the house, accompanied by two        
altar boys.                                                       

Gavroche jumps off as the carriage stops and joins the crowd.     
The crowd is made up of citizens of Paris, student                
revolutionaries, the poor and beggars. The students hand out      
printed leaflets and try to excite the crowd.                     

STUDENTS/BEGGARS CHORUS                       
Look down and show some mercy if                        
you can!                                                
Look down, look down, upon your                         
fellow man!                                             

COURFEYRAC                                    
When's it gonna end?

BEGGAR 1                                      
When we gonna live?

JOLY                                          
Something's gotta happen now!

BEGGAR 2                                      
Something's gotta give!

STUDENTS AND BEGGARS                          
It'll come, it'll come, it'll
come...
It'll come, it'll come, it'll
come...

A student, ENJOLRAS, stands on a raised step, making an           
impassioned speech with fellow student MARIUS. The occupant       
of the stopped carriage is MONSIEUR GILLENORMAND, Marius'         
Grandfather. He is clearly deeply unhappy to see his grandson     
engaged in such an activity.                                      

In the crowd a young street girl, EPONINE, has her eyes fixed   
longingly on the handsome Marius.                               

ENJOLRAS
Where are the leaders of the
land?
Where are the swells who run this
show?
60.


MARIUS
Only one man, General Lamarque                        
Speaks for the people here below!

Marius looks towards Lamarque's house behind him.

ENJOLRAS
Lamarque is ill and fading fast -
Won't last a week out, so they
say.

MARIUS
With all the anger in the land,
How long before the Judgement
Day?

ENJOLRAS
Before we cut the fat ones down
to size?

STUDENTS                                    
Before the barricades arise?

Mounted Police ride in to break up the crowd.                   

POLICE                                      
Look down, look down, don't look us                   
in the eye!                                           
Look down, look down, stay here and                   
you die!                                              

The crowd breaks up. The students shout to the crowd:           

ENJOLRAS                                    
Tomorrow we will return!                              

MARIUS                                      
Tell everyone you know                                

COURFEYRAC                                  
We will show them!                                    

COMBEFERRE                                  
Lamarque is the only leader on our                    
side!                                                 

COURFEYRAC                                  
We have a right to pray for                           
Lamarque!                                             

JOLY                                        
We need more people, then the                         
police will not dare ride against                     
us!                                                   

MARIUS                                      
Vive le General Lamarque!                             
61.


Marius turns to see his Grandfather staring him down,                
furious.                                                             

GILLENORMAND                                     
Do you have any idea of the shame                          
you bring on your family! You're                           
behaving like a child.                                     

Gillenormand spies a gun poking out of his jacket.                   

Gillenormand turns to get back in his carriage.                      


54   INT. GORBEAU TENEMENT                                         54     

Through a crack in a door, we see Marius sitting on a tatty          
mattress in a tiny hovel of a room. He is taking out a               
hunting rifle from under the mattress, wrapped in a rag. His         
eye is caught by the ring on his finger.                             

CLOSE ON a signet ring, a family crest.                              

Marius stares at the ring then takes it off his finger.              

We reveal EPONINE staring at him through the door.                   

EPONINE                                          
Hey there Monsieur what's new                              
with you?                                                  
Haven't seen much of you of late.                          
Planning no doubt to change the                            
world?                                                     
Plotting to overthrow the state?                           
Still living here in this old sewer                        
Might as well doss down in a ditch                         
You still pretending to be poor                            
Everyone knows your Grandpa's rich                         

Marius rushes down the stairs of the slum, Eponine following.   
We see glimpses of misery off the stairwell.                    

MARIUS                                           
How did you...?                                            

EPONINE                                          
There's lots of things I know                              

MARIUS                                           
Won't take a franc that I've not                           
earned                                                     
All of those bridges have been                             
burned.                                                    

EPONINE                                          
I like the way you talk Monsieur!                          

MARIUS                                           
I like the way you always tease.                           
62.


Eponine comes to a stop, looking wistfully after Marius.

EPONINE
Little he knows -
Little he sees.


55   EXT. RUE DE LA CHANVRERIE - END OF DAY                       55     

Marius is stopped as he exits the front door of the Gorbeau         
Tenement by a passing carriage. Once it passes Marius sees          
two people in the street outside. One is an old gentleman,          
Valjean. The other is a beautiful young girl, Cosette. The          
two are giving alms to beggars as they walk back from               
evening church service.                                             

Marius can't take his eyes off Cosette. He's never seen
anyone so lovely in his life. We hear the instrumental
foreshadowing of A Heart Full of Love'.

As if drawn by Marius's gaze, Cosette looks up and meets
his eyes. She too is amazed: he's looking at her as if he
already knows her. A second carriage breaks their held              
gaze.                                                               

Marius continues on down the street and when he looks back,         
at that precise moment Cosette looks at him again.                  

Valjean instinctively puts his arm round her, guarding her
jealously from this distant boy's gaze.                             

We cut further down the street to an alleyway where the             
Thenardiers, heavily disguised, are waiting for Valjean's           
approach with their gang of crooks, Babet, Brujon,                  
Clacquesous, Montparnasse.                                          

THENARDIER
Everyone here, you know your
place -
Brujon, Babet, Clacquesous -
You, Montparnasse, watch for the
law -                                                     
With Eponine - take care.
(Montparnasse hurries over                            
to the doorway where                                
Eponine was watching                                
Marius)                                             
You turn on the tears!                                    
(to Madame Thenardier who                             
is holding a baby)                                  
No mistakes, my dears!

Thenardier approaches Valjean and lures him into the mouth          
of the alleyway where Madame Thenardier is sat on the               
ground holding the crying infant. Cosette is a few steps            
behind, still entranced by the sight of Marius.                     
63.


THENARDIER
Please, M'sieur, come this way.
Here's a child that ain't eaten
today.
Save a life, spare a sou!
God rewards all the good that you
do.

As Valjean bends down to look at Madame Thenardier she          
recognizes him.                                                 

MADAME THENARDIER                           
Wait a bit! Know that face!
(to Monsieur Thenardier)                          
Ain't the world a remarkable
place!

THENARDIER                                  
Men like me don't forget -
You're the bastard who borrowed
Cosette!

VALJEAN
What is this? Are you mad?
No, Monsieur, you don't know what
you say!

Thenardier pulls off his disguise. Valjean recognises him.      

THENARDIER
You know me! I know you!
And you'll pay what I'm due.

He signals to his gang. A door opens in the alleyway            
revealing the huge Brujon. The gang move in on Valjean          
menacingly.                                                     

EPONINE                                     
(shouts from up the                               
street)                                          
It's the police! Disappear!                           
Run for it! It's Javert!                              

The gang spill out into the street to find themselves           
confronted by Javert now with his men. Marius watches, as       
does Gavroche, drawn by the rumpus.

JAVERT
Another brawl in the square!
Another stink in the air!
Was there a witness to this?
Well, let him speak to Javert!

He sees man with his arm protectively round a girl but does     
not recognize Valjean as Valjean has averted his face.          
64.


JAVERT
Monsieur, these streets are not
safe.
But let these vermin beware,
We'll see that justice is done!

He turns back on the Thenardier gang in the passage.

JAVERT
Look upon this fine collection
Crawled from underneath a stone.
This swarm of worms and maggots
Could have picked you to the
bone!
I know this man over here,
I know his name and his trade.
And on your witness, m'sieur,
I'll see him suitably paid.

He turns back to find Valjean and Cosette gone.                

JAVERT
But where's the gentlemen gone?
And why on earth did he run?

THENARDIER
You will have a job to find him!
He's not all he seems to be -
And that girl he trails behind
him
She's the child he stole from me!

Marius, equally baffled, goes off in search of them.

JAVERT
Could it be he's that old
jailbird
That the tide now washes in?
Heard my name and started
running...
All the omens point to him.

Thenardier, listening, hears this all with great interest.
So Valjean is a crook like him.

JAVERT
And the girl who stood beside
him,
When I turned they both had gone.
Could he be the man I've hunted?
Could it be he's Jean Valjean?

THENARDIER
In the absence of a victim,
Dear Inspector, may I go?
And remember when you've nicked
him
It was me what told you so.
65.


JAVERT
(to himself)
Let the old man keep on running
I will run him off his feet!
(to the crowd)
Everyone about your business!

(to Gavroche)                                      
Clear this garbage off the
street!

Gavroche is sitting on a horse trough and falls back into it     
when Javert surprises him.                                       

He is furious. He sings to Javert's departing back, and to       
Marius who is close by.                                          

GAVROCHE
That inspector thinks he's
something
But it's me who runs this town!
And my theatre never closes
And the curtain's never down!
Trust Gavroche! Have no fear!
You can always find me here!                           

EPONINE
Cosette! Now I remember...
Cosette! How can it be?
We were children together.
Look what's become of me.

She turns back to find Marius gazing down the street.

MARIUS
Eponine! Who was that girl?

EPONINE
That bourgeois two-a-penny thing!

MARIUS
Eponine, find her for me!

EPONINE
What will you give me?

MARIUS
Anything!

EPONINE
Got you all excited now,
But God knows what you see in
her.
Aren't you all delighted now?                          
No, I don't want your money, sir.
66.


MARIUS                                          
Eponine, do this for me,
Discover where she lives.
But careful how you go -
Don't let your father know.
Eponine! I'm lost until she's
found.

EPONINE
You see? I told you so!
There's lots of things I know!
Eponine, she knows her way
around.

56-61   SCENES OMITTED                                         56-61        


62      EXT. PARIS POLICE HQ - NIGHT                                 62

WIDE of the Police Headquarters on the Isle de la Cite: a           
huge bureaucracy. The camera finds Javert standing inside           
looking out of a door leading onto the roof. As he sings            
he walks out onto the roof and stands by the symbol of the          
HQ, a monumental stone eagle. He looks down at the lights
reflected in the river below. Then up at the great city.
Javert too has a God, and this is his prayer.

JAVERT
There, out in the darkness
A fugitive running
Running from God
Fallen from grace -
God be my witness
I never shall yield
Till we come face to face -
Till we come face to face...

He knows his way in the dark
Mine is the way of the Lord
Those who follow the path of the
righteous
Shall have their reward
And if they fall
As Lucifer fell -
The flame!

The sword!
Stars in your multitudes!
Scarce to be counted
Filling the darkness
With order and light -
You are the sentinels
Silent and sure
Keeping watch in the night -
Keeping watch in the night...

You know your place in the sky
You hold your course
(more)
67.

JAVERT (cont'd)
And your aim
And each in your season
Returns and returns
And is always the same
And if you fall
As Lucifer fell
You fall
In flame!

And so it must be, and so it is
written
On the doorway to paradise
That those who falter
And those who fall
Must pay the price!

Lord, let me find him
That I may see him
Safe behind bars!
I will never rest till then!
This I swear
This I swear by the stars!

Javert stands silhouetted against the stars, his arms
raised up to the night sky.


63   EXT. RUE DE LA CHANVRERIE - NIGHT                             63     

Marius comes down the street, his mind full of thoughts of           
Cosette.


64   INT. CAF� MUSAIN - NIGHT                                      64     

Marius arrives at the first floor front room. Here a group           
of students are cleaning rifles and sharing their
excitement at the coming revolution: ENJOLRAS, COMBEFERRE,
COURFEYRAC, JOLY, GRANTAIRE, FEUILLY, PROUVAIRE and others.

ENJOLRAS                                         
Well, Courfeyrac! Do we have all                           
the guns?                                                  
Joly, Prouvaire! Our time is                               
running short!                                             

COURFEYRAC                                       
Students, workers, everyone!                               
There's a river on the run!                                
Like the flowing of the tide,                              
Paris is coming to our side!                               

COMBEFERRE                                       
Enjolras! At Notre Dame
The sections are prepared!
68.


FEUILLY
At Rue du Bac
They're straining at the leash!

ENJOLRAS                                 
Grantaire, put the bottle down!                    
Did we get the guns we need?                       

GRANTAIRE                                
Give me brandy on my breath                        
And I'll breathe them all to death!                

ENJOLRAS                                 
The time is near...
So near it's stirring the blood
in their veins.
And yet beware!                                    
Don't let the wine go to your
brains.
For the army we fight is a
dangerous foe
With the men and the arms that we
never can match.
It is easy to sit here and swat
them like flies
But the National Guard will be
harder to catch.
We need a sign
To rally the people
To call them to arms
To bring them in line!

Joly turns goes over to Marius at the back, a faraway look     
on his face.

JOLY
Marius, wake up!
What's wrong today?
You look as if you've seen a
ghost.

GRANTAIRE
Some wine, and say what's going
on!

They sit.                                                      

MARIUS
A ghost, you say? A ghost maybe!
She was like a ghost to me -
One minute there - then she was
gone!

GRANTAIRE
I am agog! I am aghast!
Is Marius in love at last?
I've never heard him Ooh and Aah.
You talk of battles to be won
(more)
69.

GRANTAIRE (cont'd)
And here he comes like Don Juan!
It is better than an opera!

They burst into laughter. But Enjolras isn't smiling.

ENJOLRAS
It is time for us all
To decide who we are.
Do we fight for the right
To a night at the opera now?
Have you asked yourselves
What's the price you might pay?
Is this simply a game
For rich young boys to play?
The colours of the world
Are changing day by day -

Red -    the blood of angry men!
Black    - the dark of ages past!
Red -    a world about to dawn!
Black    - the night that ends at
last!

MARIUS
Had you seen her today
You might know how it feels
To be struck to the bone
By a moment of breathless delight!

Had you been there today
You might also have known
How the world may be changed
In just one burst of light
And what was right seems wrong
And what was wrong seems right!

GRANTAIRE
Red!

MARIUS
I feel my soul on fire!

GRANTAIRE
Black!

MARIUS
My world if she's not there!

STUDENTS
Red!

MARIUS
The colour of desire!

STUDENTS
Black!
70.


MARIUS
The colour of despair!

ENJOLRAS
Marius, you're no longer a child -
I do not doubt you mean it well
But now there is a higher call!
Who cares about your lonely soul?
We strive towards a larger goal -
Our little lives don't count at
all!

ENJOLRAS                                   
Red!                                                 

STUDENTS                                   
The blood of angry men!                              

ENJOLRAS                                   
Black!                                               

STUDENTS                                   
The dark of ages past!                               
Red - a world about to dawn!
Black - the night that ends at
last!                                                

A scuffle at the door - Gavroche struggling with the
barman. Courfeyrac lets him through.                           

GAVROCHE
Listen! Listen to me!

COURFEYRAC                                 
Listen, everybody!

GAVROCHE                                   
General Lamarque is dead!

Enjolras turns to his companions.

ENJOLRAS
Lamarque is dead...
Lamarque... His death is the hour
of fate.
The people's man...
His death is the sign we await!
On his funeral day they will
honour his name
With the light of rebellion
ablaze in their eyes.
From their candles of grief we
will kindle our flame.
On the tomb of Lamarque shall our
barricades rise!

The time is here!
(more)
71.

ENJOLRAS (cont'd)
Let us welcome it gladly with
courage and cheer!

STUDENT                                         
Let us take to the street with no
doubt in our hearts

COURFEYRAC                                      
But a jubilant shout!

LESGLES                                         
They will come one and all!

STUDENTS                                        
They will come when we call!

As the students sing, Eponine enters wanting to talk to             
Marius. Marius sees her.                                            


65   INT. VALJEAN'S HOUSE, RUE PLUMET - NIGHT                     65     

Cosette is pacing in her bedroom. It's a pretty room, the           
best room in this small summer house. Her shutters are              
open, giving a view of a wild unkempt garden. She looks at          
herself in a mirror, aware of her looks perhaps for the             
first time.                                                         

COSETTE                                         
How strange -
This feeling that my life's begun
at last!
This change -
Can people really fall in love so
fast?
What's the matter with you,
Cosette?
Have you been too much on your
own?
So many things unclear -
So many things unknown...

In my life
There are so many questions and
answers
That somehow seem wrong.
In my life
There are times when I catch in
the silence
The sigh of a faraway song
And it sings
Of a world that I long to see -
Out of reach
Just a whisper away
Waiting for me!

Does he know I'm alive?
Do I know if he's real?
(more)
72.

COSETTE (cont'd)
Does he see what I see?
Does he feel what I feel?

In my life
I'm no longer alone -
Now the love in my life
Is so near...
Find me now! Find me here!

Valjean knocks and opens her door. He closes her shutters.     

VALJEAN
Dear Cosette,
You're such a lonely child.
How pensive, how sad you seem to
me.
Believe me, were it within my
power
I'd fill each passing hour.
How quiet it must be, I can see,
With only me for company.

COSETTE
There's so little I know
That I'm longing to know
Of the man that you were
In a time long ago...
There's so little you say
Of the life you have known,
Why you keep to yourself,
Why we're always alone.
So dark! So dark and deep,
The secrets that you keep!
In my life
Please forgive what I say
You are loving and gentle and
good.
But papa, dear papa,
In your eyes I am still like that
child
Who was lost in a wood.

VALJEAN
No more words -
No more words.
It's a time that is dead.
There are words
That are better unheard,
Better unsaid.

COSETTE
In my life
I'm no longer a child and I yearn
For the truth that you know
Of the years... Years ago!
73.


Valjean leaves and goes into his own bedroom. A simple wooden        
shack at the back of the summerhouse, Valjean himself lives          
with spartan simplicity - he has given the best room to              
Cosette.                                                             

Cosette follows. Valjean sits on his bed, his back to                
Cosette.                                                             

VALJEAN
You will learn.
Truth is given by God
To us all in our time,
In our turn.                                               


66   EXT. RUE PLUMET - NIGHT                                       66     

Marius rushes down the street, Eponine following. At the             
far end is the walled garden behind which lies Valjean's             
house.                                                               

MARIUS
In my life
She has burst like the music of
angels
The light of the sun!
And my life seems to stop
As if something is over
And something has scarcely begun!
Eponine, you're the friend
Who has brought me here.
Thanks to you I am one with the
Gods
And heaven is near!
And I soar through a world that
is new,
That is free!                                              

EPONINE
Every word that he says
Is a dagger in me!
In my life
There's been no one like him
anywhere,
Anywhere, where he is
If he asked... I'd be his!

MARIUS/EPONINE
In my life
There is someone who touches my
life -

MARIUS
(sees Cosette in the                                   
garden)                                               
Waiting near!
74.


EPONINE
Waiting here!                                         

MARIUS
A heart full of love!

Cosette sees Marius. She comes up the garden path towards       
him. She sees Eponine by Marius's side.                         

MARIUS                                      
A heart full of song!
I'm doing everything all wrong -
Oh God, for shame -
I do not even know your name.
Dear Mad'moiselle,
Won't you say?
Will you tell?

Cosette holds the wrought-ironwork of the gate with both        
hands, eyes on Marius. Eponine looks on and suffers. Marius     
wraps his hands round Cosette's.                                

COSETTE
A heart full of love!
No fear, no regret!

MARIUS
My name is Marius Pontmercy.

COSETTE
And mine's Cosette.

MARIUS
Cosette... I don't know what to
say -

COSETTE
Then make no sound.

MARIUS
I am lost -

COSETTE
I am found!

MARIUS
A heart full of light -

COSETTE/MARIUS
A night bright as day -

MARIUS
And you must never go away,
Cosette - Cosette!

COSETTE
This is a chain we'll never
break.
75.


MARIUS
Do I dream?

COSETTE
I'm awake.

MARIUS
A heart full of love -

EPONINE
He was never mine to lose
Why regret
What could not be?

COSETTE
A heart full of you -

EPONINE
These are words he'll never say
Not to me, not to me
Not for me!

MARIUS
A single look and then I knew!

COSETTE
I knew it too!

EPONINE
His heart full of love...

MARIUS
From today -

EPONINE
He will never feel this way.

COSETTE
Every day...

MARIUS/COSETTE
For it isn't a dream -
Not a dream
After all!

Valjean comes to the door.

VALJEAN
Cosette! Cosette!                                   

Cosette turns and runs in to the house.

Valjean walks down the overgrown garden path to the gate.     

Marius moves quickly away, instinctively nervous of
discovery, and hides behind the wall.                         
76.


Valjean peers into the shadows. He senses that perhaps
Cosette has been talking to someone. He looks pensive.

Valjean returns inside.                                         

Cosette has dropped a keepsake through the gate. Marius picks   
it up.                                                          

Marius makes his way back down the street, filled with          
thoughts of his love. Completely forgetting Eponine is there.   

Shadows move up the street from the other direction. It's       
Thenardier and his gang. They gather at the wrought-iron
gate.

MONTPARNASSE
This is his lair!
I've seen the old fox around.

BABET
He keeps himself to himself
He's staying close to the ground.

THENARDIER
I smell profit here!
Ten years ago
He came and paid for Cosette.
I let her go for a song.
It's time we settled the debt.
This'll cost him dear.

BRUJON
What do I care
Who you should rob?
Gimme my share!
Finish the job!

THENARDIER
You shut your mouth!
You'll get what's yours!

Brujon starts working on the gate lock. He finds Eponine
lurking in the shadows.

BRUJON
What have we here?

THENARDIER
Who is this hussy?

BABET
It's your brat Eponine!
Don't you know your own kid?
Why's she hanging about here?
77.


THENARDIER
Eponine, get on home!
You're not needed in this.
We're enough here without you.

EPONINE
I know this house, I tell you!
There's nothing here for you!
Just the old man and the girl.
They live ordinary lives.

THENARDIER
Don't interfere!
You've got some gall!
Take care, young miss,
You've got a lot to say!

BRUJON
She's going soft!

CLACQUESOUS
Happens to all!

MONTPARNASSE
Go home, Eponine!
Go home, you're in the way!

They huddle round the garden gate, which is now broken
open.

EPONINE
I'm gonna scream! I'm gonna warn
them here!

THENARDIER
One little scream and you'll
regret it for a year!

He goes to the gate and opens it.

Eponine screams.                                                   



67   SCENE OMITTED                                               67     


68   INT. RUE PLUMET, PARIS - NIGHT                              68

Valjean, now in his own bedroom, hears the scream and turns
to the window.


69   EXT. RUE PLUMET - NIGHT                                     69

Thenardier and his gang shrink into the shadows, as
Eponine's scream ends at last.
78.


THENARDIER
Make for the sewers!
Get underground!
Leave her to me,
Don't wait around!

He turns on Eponine and slaps her hard across the face.            

THENARDIER
You wait, my girl!
You'll rue this night!                                   
I'll make you scream!
You'll scream all right!

His men have levered up a grating, and now Thenardier and
the gang disappear down into the sewers.


70   INT. VALJEAN'S HOUSE - RUE PLUMET, PARIS - NIGHT            70     

Valjean comes running into Cosette's room. Valjean takes           
her in his arms.

VALJEAN
My God, Cosette!
I heard a cry in the dark.
I heard the shout of angry voices
in the street.

COSETTE
Three men I saw beyond the
wall...
Three men in shadow moving fast!

VALJEAN
This is a warning to us all!
These are the shadows of the
past!

He moves away to his own bedroom.                                  

VALJEAN
Must be Javert.
He's found my cover at last.
I've got to get Cosette away
Before he returns.

He comes back to Cosette.                                          

VALJEAN
We must get away from shadows
That will never let us be.
Tonight we leave Cosette!                                

COSETTE                                      
To where?                                                
79.


VALJEAN                                         
Rue de L'Homme Armee.                                     

COSETTE                                         
No! No!                                                   

VALJEAN                                         
And then a ship across the sea.                           

VALJEAN
Hurry, Cosette! Prepare to leave,
And say no more.
Tonight we'll away!                                       

COSETTE                                         
(overlapping)                                         
No! Please no! We can't go!                               

VALJEAN                                         
Hurry, Cosette!
It's time to close another door
And live another day!

Valjean leaves to start packing.                                    

Feverishly, Cosette scribbles a letter.                             



71   SCENE OMITTED                                                71     


72   EXT. GARDEN, RUE PLUMET - NIGHT                              72

Cosette hurries down the   garden to the gate, and goes to          
put the folded letter in   the grill where her and Marius'          
hands entwined. Then she   sees Eponine. Eponine steps              
forward. She thrusts her   letter into her hand.                    

COSETTE
Please give this to Marius! He
must know where to find me.

She runs back inside.


73   EXT. RUE PLUMET/BRIDGE/RUE DE LA CHANVRERIE - NIGHT          73     

Eponine crumples up the letter.                                     

She walks sadly away down the street.

Rain is just starting to fall.

EPONINE
And now I'm all alone again -
Nowhere to turn, no one to go to.
Without a home, without a friend,
(more)
80.

EPONINE (cont'd)
Without a face to say hello to.
The city goes to bed
And I can live inside my head.

On my own
Pretending he's beside me
All alone
I walk with him till morning
Without him
I feel his arms around me
And when I lose my way I close my
eyes
And he has found me.

She crosses a bridge over the river.

EPONINE
In the rain
The pavement shines like silver
All the lights
Are misty in the river
In the darkness the trees are
full of starlight
And all I see is him and me
forever and forever!

And I know it's only in my mind -
That I'm talking to myself and
not to him.
And although I know that he is
blind,
Still I say there's a way for us.

I love him
But when the night is over
He is gone - the river's just a
river.
Without him the world around me
changes -
The trees are bare and everywhere
The streets are full of
strangers.

I love him
But every day I'm learning
All my life I've only been
pretending.
Without me, his world will go on
turning
A world that's full of happiness
That I have never know.

I love him
I love him
I love him
But only on my own.
81.


Her solitary journey has brought her to the Gorbeau slum.             
She goes inside.                                                      


73A   INT. GORBEAU TENEMENT - NIGHT                                 73A     

Eponine stands outside Marius' door. She opens the letter,            
reads it, then hides it in her pocket. She pushes open                
Marius' door. Marius looks up.                                        

EPONINE                                           
I came to tell you she's gone.

MARIUS
Gone? What do you mean?                                     

EPONINE                                           
She's gone to England.                                      

Marius sets off at a run towards the Rue Plumet.                      


74    EXT. RUE PLUMET - NIGHT                                       74

Marius finds the gate broken open, sees the house beyond
dark and deserted. He pushes in to the garden, up to the
house windows, sees the rooms empty within. He stands
staring, in shock.

Eponine has followed him, and watches him in silence.



75    SCENE OMITTED                                                 75      


76    INT. CARRIAGE - NIGHT.                                        76      

Valjean and Cosette sit on either side of the carriage,               
apart, staring out of their respective windows. A stark               
contrast to the carriage scene when Valjean sang to Cosette           
as a little girl.                                                     

VALJEAN
One day more!
Another day, another destiny.
This never-ending road to
Calvary.
These men who seem to know my
crime
Will surely come a second time -
One day more!


77    EXT. RUE PLUMET - NIGHT                                       77

Marius by the empty house.
82.


MARIUS
I did not live until today -                              
How can I live when we are parted?                        


78   INT. CARRIAGE - NIGHT                                        78     

VALJEAN
One day more!                                             

COSETTE
Tomorrow you'll be worlds away
And yet with you my world has
started!


79   EXT/INT. RUE PLUMET/CARRIAGE - NIGHT                         79     

INTERCUT between Eponine at the gate, Cosette and Valjean
in the carriage, and Marius in the dark garden.                     

EPONINE
One more day all on my own...

MARIUS/COSETTE
Will we ever meet again?

EPONINE
One more day with him not
caring...

MARIUS/COSETTE
I was born to be with you!

EPONINE
What a life I might have known...

MARIUS/COSETTE
And I swear I will be true!

EPONINE
But he never saw me there.


80   INT. CAF� MUSAIN GROUND & 1ST FLOOR/EXT. RUE DE LA           80     
CHANVRERIE - NIGHT                                                  

Enjolras and the students have a production line under way
for making bullets. The rifles are now stacked and ready
for the uprising. Grantaire is downstairs flirting with a           
BARMAID. MADAME HUCHELOUP the proprietress of the Cafe              
Musain is sewing a red revolutionary flag to help the               
students.                                                           

ENJOLRAS
One more day before the storm!
83.


INTERCUT WITH Marius walking back sadly through the Rue de          
la Chanvrerie. Eponine follows him at a distance.                   

MARIUS
Do I follow where she goes?

ENJOLRAS
At the barricades of freedom!

MARIUS
Shall I join my brothers there?

ENJOLRAS
When our ranks begin to form -

MARIUS
Do I stay and do I dare?

ENJOLRAS
(from top of stairs, for                              
Grantaire's benefit)                                 
Will you take your place with me?                         

Grantaire rather reluctantly goes upstairs.                         

ALL
The time is now!
The day is here!
One day more!


81   INT. PARIS POLICE HQ - NIGHT                                 81

Javert is briefing a hundred uniformed police about the
coming day in a grand ornate old room at Police
Headquarters.

JAVERT
One day more to revolution.
We will nip it in the bud.
We'll be ready for these
schoolboys.
They will wet themselves with
blood!


82   INT. CARRIAGE - NIGHT                                        82     

VALJEAN
One day more!


83   INT. CAF� MUSAIN - GROUND & 1ST FLOOR - NIGHT                83     

Monsieur and Madame Thenardier are in the ground-floor bar,         
slyly watching a student smuggling some rifles up the               
stairs disguised in a piece of cloth.                               
84.


Joly takes a tray and collects empty tankards. As he               
ascends the stairs, Madame Hucheloup tries to get him to           
give the tankards back.                                            

THENARDIERS
Watch'em run amuck!
Catch'em as they fall!
Never know your luck
When there's a free-for-all.
Here a little dip,
There a little touch -
Most of them are goners
So they won't miss much!

The drinkers in the bar raise their glasses to the students
with their rifles. The students appeal to them. Grantaire
is drunk already. Joly starts to melt the tankards in a pot        
to make more bullets. Marius enters the ground floor and           
takes the red flag from Madame Hucheloup that she has just         
finished. The citizens on the ground floor join the                
students.                                                          

STUDENTS/CROWD                                 
One day to a new beginning!
Raise the flag of freedom high!
Every man will be a king!
Every man will be a king!
There's a new world for the
winning!
There's a new world to be won!
Do you hear the people sing?

Marius enters the first floor to join them at last.                

MARIUS
My place is here!
I fight with you!


84   INT/EXT. RUE DE L'HOMME ARMEE/RUE DE LA CHANVRERIE/CAF�     84     
MUSAIN GROUND & 1ST FLOOR/POLICE STATION - NIGHT                   

Valjean and Cosette arrive at their new hideout -                  

Marius ties the red flag onto a flagpole -                         

VALJEAN
One day more!

COSETTE/MARIUS
I did not live until today
How can I live when we are
parted?

Eponine outside the caf�, gazing longingly towards Marius -

EPONINE
One more day on my own...
85.


Javert in the police station to his men -

JAVERT
I will join these people's heroes
I will follow where they go.
I will learn their little
secrets,
I will know the things they know.

VALJEAN/JAVERT
One day more!

MARIUS/COSETTE
Tomorrow you'll be worlds away
And yet with you my world has
started.

JAVERT
One more day to revolution
We will nip it in the bud
We'll be ready for these
schoolboys -

THENARDIERS
Watch'em run amuck
Catch'em as they fall
Never know your luck
When there's a free-for-all!

VALJEAN
Tomorrow we'll be far away.

VALJEAN/JAVERT
Tomorrow is the judgement day.

ALL
Tomorrow we'll discover
What our God in heaven has in
store -
One more dawn!
One more day!
One day more!

We pull back from Enjolras and Marius holding their flag at         
the first floor window with the students beyond them to see         
that citizens have spilled out of the Cafe Musain into the          
street and have all joined in the final chorus.                     


85   EXT. PARIS STREETS - DAY                                     85

All is still. Then comes the soft beating of draped drums.
The tramp of feet.

All down the streets, waiting, the silent faces of the
poor. Among them we see Enjolras, Marius, and the radical
students.
86.


Police and national guardsmen control the growing crowds.        

Now into view come the leaders of a great FUNERAL
PROCESSION. An entire battalion of infantry, marching with
weapons reversed. A column of black-suited dignitaries
carrying branches of laurel. A division of Cavalry rides in      
front, behind a section of military drummers who drum a          
military tatoo.                                                  

INTO FRAME comes a team of black horses stepping slowly,         
black plumes nodding, drawing behind them a gun carriage         
draped in the tricolour flag. On the carriage stands a           
COFFIN.                                                          

Softly, in time with the drums, the watching people begin        
to sing.

CROWD
Do you hear the people sing
Singing the song of angry men?
It is the music of a people
Who will not be slaves again!

The police and guardsmen look round to see who is singing
so subversively, but they can't be sure where it's coming
from. The singing grows stronger.

CROWD
When the beating of your heart
Echoes the beating of the drums
There is a life about to start
When tomorrow comes!

The dignitaries become aware of the singing, and glance
uneasily from side to side.                                      

CROWD                                        
Will you join in our crusade?
Who will be strong and stand with
me?                                                    
Beyond the barricade
Is there a world you long to see?

As the coffin on its carriage draws level with the students,     
Enjolras suddenly steps out in front of the horses drawing       
the carriage and waves the red flag, stopping the horses and     
the procession.                                                  

ENJOLRAS                                     
Then join in the fight
That will give you the right
To be free!

The students break the ranks of the crowd and surround the       
coffin carriage.                                                 
87.


STUDENTS/CROWD
Do you hear the people sing
Singing the song of angry men?
It is the music of a people
Who will not be slaves again!
When the beating of your heart
Echoes the beating of the drums
There is a life about to start
When tomorrow comes!

Enjolras, Marius and Courfeyrac and other students climb       
onto the top of the carriage as the horses and led by          
Combeferre.                                                    

ENJOLRAS
Will you give all you can give
So that our banner may advance?

COURFEYRAC                                 
Some will fall and some will live
Will you stand up and take your
chance?

ENJOLRAS/MARIUS/COURFEYRAC                 
The blood of the martyrs
Will water the meadows of France!

The crowd supports them and surround the coffin carriage,      
blocking the attempts of the police to intervene, singing
with passion.

STUDENTS/CROWD
Do you hear the people sing
Singing the song of angry men?
It is the music of a people
Who will not be slaves again!

When the beating of your heart
Echoes the beating of the drums
There is a life about to start
When tomorrow comes!

Enjolras, the students, and the impassioned crowd have now
become the procession. They turn off the main street away      
from the expected course of the funeral procession.            
Gavroche's elephant looms over this side street. Gavroche      
and his gang jump down from the elephant to join in.           

As the procession turns off, the calvary division gallop       
ahead and disappear round a corner.                            

STUDENTS/CROWD
Will you join in our crusade?
Who will be strong and stand with
me?
Somewhere beyond the barricade
Is there a world you long to see?
Do you hear the people sing?
(more)
88.

STUDENTS/CROWD (cont'd)
Say, do you hear the distant
drums?
It is the future that we bring
When tomorrow comes!

The students and crowd come face to face with the calvary. On   
one side, muskets of the infantry poke through the broken       
down fence surrounding the elephant. Other infantry have        
taken up position in a cafe opposite, upending tables to        
provide cover.                                                  

There is a tense, prolonged silence. Then suddenly one              
nervous SOLDIER lets off a round. It hits a middle aged             
kindly looking WOMAN CITIZEN in the crowd around the coffin         
carriage. The crowd is furious. Students charge the soldier,        
grab his musket and knock him down with the hilt of the gun.        

More shots ring out. The cavalry charges. The funeral               
explodes into a riot. The people of Paris turn on the
dragoons, the National Guards, the police. More squadrons
of dragoons charge into the crowd, sabres unsheathed. Women
run screaming in terror.                                            

ENJOLRAS
To the barricades!

STUDENTS/CROWD
To the barricades! To arms! To
arms!

Some students fire weapons into the air, some into the              
cavalry and at the infantry. Enjolras knocks a calvary              
officer off his horse and Marius jumps on the horse.                

The students break away and race off through the cafe into          
a side street where citizens begin to erect a barricade. A          
cavalry rider gives chase and is shot by one of the                 
students and falls through the window of an upended                 
carriage. The students, with Marius on horseback, race to           
the slums.                                                          


86   EXT. RUE DE LA CHANVRERIE/INT. CAFE MUSAIN - DAY             86     

FOLLOW the students as they burst into their home street.           
They have been joined by a motley collection of citizens            
including burghers and an old eccentric man FATHER MABEUF           
who works as hard as anyone. They raid a fencing shop and a         
gun shop for weapons, they force wives to give up their             
husbands' muskets and chalk up the debt to the revolution           
on their front doors, they encourage homeowners to                  
contribute furniture sometimes appearing at high windows to         
help overcome any reluctance. Soon the street is raining            
tables, chairs, mattresses, sofas. They smash streetlamps.          
They set to work to build their barricade. Students                 
commandeer an omnibus which is overturned to form the               
barricade's heart. Three students arrive in the street              
hauling an uprooted tree.                                           
89.


They pull up paving stones, rip boards, timbers and front       
doors from house and shop-fronts, pull down buttresses, and     
raid the Cafe Musain, systematically stripping it of every      
item of furniture despite the lamentations and                  
protestations of Madame Hucheloup and her barmaid.              

As the barricade rises they bring down from the first floor     
of the cafe the rifles and ammunition they've gathered, to      
prepare to defend their chosen ground. A student stands on      
a stone post distributing weapons. They line the first and      
second floor front rooms with paving stones to create           
protected shooting positions. The inside of the barricade       
is built neatly with steps up made from paving stones. The      
outside is a crazy knarled mess.                                

ENJOLRAS
Here upon these stones
We will build our barricade.
In the heart of the city
We claim as our own
Each man to his duty
And don't be afraid.

A man in worker's clothing is helping build the growing         
barricade,. He wears the insignia of the rebels, and keeps      
his head down.

ENJOLRAS
Wait!
I will need a report
On the strength of the foe.

The man who's just arrived looks up. It's Javert.

JAVERT
I can find out the truth!
I know their ways,
Fought their wars,
Served my time
In the days
Of my youth.

He slips away through the barricade, which is still rising.

PROUVAIRE
See! The people unite!

GRANTAIRE
Pray your right

COMBEFERRE
Dogs will bark!

GAVROCHE
Fleas will bite!

LESGLES
They will do what is right.
90.


87    EXT. BARRICADE - DUSK                                      87

The barricade is now complete: an impressive wall up to            
twelve feet high, with one heavily guarded section that can        
be wheeled open to allow access. Two smaller barricades            
protect the left and right side of the cafe. Enjolras              
climbs halfway up the main barricade and turns to his              
little army. Grantaire prises the final piece of Madame            
Hucheloup's furniture from her arms - her favourite sewing         
armchair - and adds it to the barricade. As the men sing           
she steals it back defiantly.                                      

ENJOLRAS
Red, the blood of angry men!

ALL
Black, the dark of ages past!
Red, a world about to dawn!
Black, the night that ends at
last!


87A   EXT. BARRICADE - NIGHT                                     87A

It is night. The students have been waiting for hours.

A single flaming torch atop the barricade caged in by cobbles
underlights a fluttering red flag.

There is no sign yet of any opposition.

A boy climbs down from sentry duty on the barricade. Marius        
realizes its Eponine. She sits down with her back to him.          

MARIUS
Hey, little boy, what's this I see?                      
God Eponine the things you do!                           

EPONINE                                        
I know this is no place for me,                          
Still I would rather be with you!                        

MARIUS
Get out before the trouble                               
starts!                                                  
Get out, Ponine, you might get                          
shot!                                                    

EPONINE
I've got you worried now, I have!                        
That shows you like me quite a                           
lot...                                                   

MARIUS                                        
Get Out!                                                 

Joly, sentry on the main barricade, sees a figure approach.        
91.


JOLY
He's back!

Javert, still in his disguise as a rebel, is let back
through the guarded gate' into the barricaded street.

JAVERT
Listen, my friends,
I have done as I said.
I have been to their lines,
I have counted each man.
I will tell what I can.
Better be warned
They have armies to spare
And our danger is real -
We will need all our cunning
To bring them to heel.

ENJOLRAS
Have faith!
If you know what their movements
are
We'll spoil their game.
There are ways that a people can
fight -
We shall overcome their power!

JAVERT
I have overheard their plans.
There will be no attack tonight.
They intend to starve you out
Before they start a proper fight -
Concentrate their force,
Hit us when it's light -

GAVROCHE
Liar!

They all look up. There's Gavroche, on the top of the
barricade.

GAVROCHE
Good evening, dear Inspector.
Lovely evening, my dear!
I know this man, my friends.
His name's Inspector Javert!
So don't believe a word he says
Cause none of it's true.
This only goes to show
What little people can do.                            

Guns swing round to aim at Javert. He stares back in
defiance.

Gavroche comes dancing down the barricade to Courfeyrac's       
delighted embrace.
92.


COURFEYRAC
Bravo, little Gavroche!
You're the top of the class!

Gavroche grabs Grantaire's red cap and puts it on his own
head, mimicking the students.

PROUVAIRE
So what are we going to do
With this snake in the grass?


Enjolras faces Javert.

ENJOLRAS
Tie this man and take him
To the tavern in there!
The people will decide your fate,
Inspector Javert!

JAVERT
Shoot me now or shoot me later -
Every schoolboy to his sport!
Death to each and every traitor!
I renounce your people's court!

ENJOLRAS
Take this man. Bring him through.
There is work we have to do.

Javert is led into the cafe. As they pass through the front       
door only one student is holding Javert. Seizing his              
opportunity, Javert breaks free and the students have to          
subdue him by force. Javert is on his knees and is being tied     
to the staircase.                                                 

ENJOLRAS                                     
When are they coming!?                                 

Silence.                                                          

Suddenly, out of the darkness, the students and citizens at
the barricade here an ominous distant sound. The sound of
marching feet, hundreds of men, marching in unison. First
soft, then building louder and louder, closer and closer.
Boots on cobbles. The sound comes right into the end of the
street.

Enjolras and all the students man the main barricade.             

Silence.

They peer over the barricade. In the pitch blackness, all
they can make out is hundreds of gossamer thin slivers. These
are bayonets and musket barrels dimly lit by the reflection
from the torch.

A voice shouts out from the darkness.
93.


ARMY OFFICER
Who's there?

At the same time we hear the clatter of guns being levelled.

ENJOLRAS
French Revolution.

ARMY OFFICER
Fire!

A flash turns all the facades of the street bright crimson as
though the door of a furnace has suddenly open and shut.

A dreadful explosion bursts over the barricade. The red flag
falls, the pole sliced through. Bullets richochet off the
cornices of the houses, bore into the barricade and wound
several men.

ENJOLRAS
(as students return fire)                           
Comrades, do not fire back! Do not                      
waste powder!                                           

In the darkness, the clang of ramrods in muskets - the troop      
reloading weapons.                                                

Enjolras picks up the fallen flag and is about to take it up      
when the old man Father Mabeuf who has seen many                  
insurrections before this takes the flag and runs up onto the     
top of the barricade.                                             

ARMY OFFICER
Who's there? Get down!

MABEUF                                        
Vive la France!

ARMY OFFICER
Fire!

A second volley.

Father Mabeuf falls down dead. While everyone is reacting to   
the dead old man and the wounded, the men are distracted from   
noticing that some French soldiers have used the cover of
darkness to creep down the street.

All at once the FIRST FULL ATTACK begins. Shouts and the
rattle of gunfire as SOLDIERS throw themselves up and over
the barricade. The students run for their guns and return
fire. They are taken by surprise. All could be lost in the
first instant. Some soldiers make it up to the top of the
barricade, where they're driven back by the fierce
resistance of the defenders. Eponine sees one soldier
aiming his rifle at Marius - she throws herself in front of
Marius just as the rifle fires - and Marius is safe.
94.


They are being   overrun. Panic ensues. The gun battle is
fierce. Marius   in a flash of inspiration realises all is lost   
unless they do   something. He drags a barrel of gunpowder to
the top of the   barricade, grabs the torch and with a face of
deadly resolve   he tips the torch towards the barrel.

MARIUS
Clear out or I'll blow up the
barricade!

Everyone freezes.

ARMY OFFICER
Blow it up then and take yourself
with it!

MARIUS
And myself with it!

Marius brings the torch closer to the powder keg.

But already the soldiers have cleared out.

Marius comes down from the barricade.                             

FEUILLY                                      
(to Marius)                                         
Thank you!                                              

LESGLES                                       
What were you thinking!                                 

As everyone surrounds Marius in amazement he spots Eponine
lying propped against the barricade.

MARIUS
Eponine! What have you done?

He kneels by her side. Eponine is dying.

EPONINE
Here... It's from Cosette...
I kept it from you...

With a struggle she pulls the letter out of her pocket, and
pushes it into his hand.

EPONINE
Don't be too hard on me...

Marius is shocked to find blood pouring from her wound.

MARIUS
Eponine, you're hurt!
You need some help!

Rain begins to fall.
95.


EPONINE
Don't you fret, M'sieur Marius -
I don't feel any pain.
A little fall of rain
Can hardly hurt me now.
You're here - that's all I need
to know
And you will keep me safe
And you will keep me close
And rain will make the flowers
grow...

MARIUS
But you will live, Eponine - Dear
God above!
If I could close your wounds with
words of love -

EPONINE
Just hold me now, and let it be.
Shelter me... Comfort me...

MARIUS
You will live a hundred years
If I could show you how...
I won't desert you now...

EPONINE
The rain can't hurt me now...
This rain will wash away what's
past
And you will keep me safe
And you will keep me close
I'll sleep in your embrace at
last.

Marius tries to comfort Eponine in his arms.           

MARIUS
Hush-a-bye, dear Eponine
You won't feel any pain
A little fall of rain
Can hardly hurt you now
I'm here.

EPONINE
So don't you fret, M'sieur Marius
I don't feel any pain
A little fall of rain
Can hardly hurt me now...

MARIUS
I will stay with you
Till you are sleeping.

EPONINE
That's all I need to know
And you will keep me safe
(more)
96.

EPONINE (cont'd)
And you will keep me close
And rain..
Will make the flowers...
Grow...

Eponine dies in Marius's arms.

Marius looks up at the others, his eyes full of tears.

ENJOLRAS
They were the first to fall.                              
The first to fall upon this                               
barricade.

MARIUS
Her name was Eponine!
Her life was cold and dark, yet
she was unafraid!

COMBEFERRE
We fight here in her name...

PROUVAIRE
She will not die in vain...

LESGLES
She will not be betrayed...

They pick up Eponine's body and carry her into the tavern.

COURFEYRAC                                      
(to Gavroche)                                         
Are you alright?                                          

GAVROCHE                                        
That was my sister.                                       


88   EXT. BARRICADE - NIGHT                                       88

Marius reads the letter Eponine has given him. He takes out
pencil and paper and writes a note. Looking round, he sees
Gavroche.

MARIUS
Gavroche! Do you know the Rue de
l'Homme Arm�?

GAVROCHE
Course I do!

MARIUS
Will you take this for me?

He holds out his note.
97.


89   INT. INN, RUE DE L'HOMME ARMEE, PARIS - NIGHT               89     

The LANDLADY climbs the stairs, followed by Gavroche. The          
landlady indicates the door, and Gavroche knocks boldly.
The door opens a crack to reveal a cautious Valjean.

GAVROCHE
Letter for Cosette.

VALJEAN
I'll take it.

Gavroche holds out the letter with one hand, not quite
giving it, the other hand open for a tip.

Valjean gives him a coin, which he pockets as he hands over
the letter.

GAVROCHE
Something for you, something for
me. Who needs charity?


90   INT. VALJEAN'S ROOM, LODGING HOUSE - NIGHT                  90     

ON VALJEAN - As he reads the note.

VALJEAN
Dearest Cosette, you have
entered my soul
And soon you will be gone.
Can it be only a day since we met
And the world was reborn?
If I should fall in the battle to
come
Let this be my goodbye.
Now that I know you love me as
well
It is harder to die.
I pray that God will bring me
home
To be with you.
Pray for your Marius.
He prays for you.'

He looks up, deeply distressed. He can't bear the thought
of losing Cosette.

VALJEAN
They haven't got a chance, these
boys
They almost certainly will die
She'll be alone
And she will need me all the more
And we will go on as before                              
When he is gone
I dare not think like this
I must find this boy
98.


91   EXT. PARIS STREETS - NIGHT                                   91

Valjean walks the streets, not caring where he goes,
struggling with his tormented thoughts. He sees a barricade
being dismantled. And bodies.

Suddenly he knows what he's going to do. He sees a dead
soldier. He takes his jacket and swiftly pulls it on.

He continues on his way in the dark.

Looking up he sees that he's been walking all the time
towards the very barricade where Marius waits.

Now looking like a soldier, he passes unchallenged through
their lines, and into the shadows.

As he passes, he notices two soldiers climbing up onto the          
rooftops.


92   EXT. BARRICADE - NIGHT                                       92

Glimpses through the barricade of a lone figure approaching
from the far end of the narrow street.

The figure comes into lamp light. It's Valjean, in the
soldier's jacket. The student sentries level their guns.
Gavroche jumps up.

VALJEAN                                         
Don't shoot!                                              

JOLY
Here comes a man in uniform!
What brings you to this place?

VALJEAN
I come here as a volunteer.

JOLY
Approach and show your face!

PROUVAIRE
You wear an army uniform.

VALJEAN
That's why they let me through.

The student sentries open the slot in the barricade to let
Valjean enter.

JOLY
You've got some years behind you,
sir.

VALJEAN
There's much that I can do.
99.


JOLY
You see that prisoner over there?

He points to Javert, in a dark corner, his hands tied.

GRANTAIRE
A volunteer like you!

COMBEFERRE
A spy who calls himself Javert!

GRANTAIRE
He's going to get it too!                              

Javert looks up and meets Valjean's eyes. A steady shared
look.

GAVROCHE                                     
Don't shoot! I know him! He's no                       
soldier!                                               

Suddenly Valjean spots a couple of snipers creeping over the     
roofs to gain an angle of attack on them. They are aiming at
Enjolras. Swiftly Valjean grabs a gun and shoots up at them      
sending them scattering. Quickly other students join in and
the snipers are driven back.

There is a burst of gunfire from both ends of the street as a   
brief fire fight ensues.                                        

The snipers have disappeared.                                    

Enjolras turns to Valjean.                                       

ENJOLRAS
For your presence of mind,
For the deed you have done,
I will thank you, M'sieur,
When our battle is won.

MARIUS
Thank you, M'sieur.

VALJEAN
Give me no thanks, M'sieur.
There's something you can do.

ENJOLRAS
If it is in my power.

VALJEAN
Give me the spy Javert!
Let me take care of him.

Javert hears this with grim satisfaction.
100.


JAVERT
The law is inside out.
The world is upside down.

ENJOLRAS
Do what you have to do -
The man belongs to you.

He turns to his little army.

ENJOLRAS
The enemy may be regrouping!
Hold yourselves in readiness!
Come, my friends, back to your
positions!
The dawn is breaking fast.

Valjean takes Javert out the back of the Cafe Musain. He     
carries a knife.                                             

VALJEAN
We meet again...

JAVERT
You've hungered for this all your
life.
Take your revenge.
How right you should kill with a
knife.

Valjean uses the knife to cut Javert free.

VALJEAN
You talk too much.
Your life is safe in my hands.

JAVERT
Don't understand...

VALJEAN
Get out of here.

JAVERT
Valjean, take care!
I'm warning you.

VALJEAN
Clear out of here!

JAVERT
Once a thief, forever a thief.
What you want, you always steal.
You would trade your life for
mine.
Yes, Valjean, you want a deal!
Shoot me now for all I care -
If you let me go, beware!
You'll still answer to Javert!
101.


VALJEAN
You are wrong, and always have
been wrong.
I'm a man no worse than any man.
You are free, and there are no
conditions -
No bargains or petitions.
There's nothing that I blame you
for.
You've done your duty, nothing
more.
No doubt our paths will cross
again.

He raises his gun and points it at Javert.

VALJEAN
Go!

As Javert goes, he raises the gun barrel and fires a single
shot into the air.                                              

ENJOLRAS
Courfeyrac, you take the watch -
They may attack before it's
light.
Everybody keep the faith,
For certain as our banner flies,
We are not alone -
The people too must rise!

Marius is manically working to raise the height of one of the   
smaller barricades.                                             

ENJOLRAS                                    
Marius, rest.

Grantaire drunkenly starts singing a drinking song and it is   
taken up more seriously by Feuilly. Bottles are passed round.   

GRANTAIRE                                   
Drink with me to days gone by!                        

FEUILLY                                     
Sing with me the songs we knew!

PROUVAIRE
Here's to pretty girls
Who went to our heads!

JOLY
Here's to witty girls
Who went to our beds!
102.


STUDENTS
Here's to them -
(Marius sings to
Valjean)
And here's to you!

GRANTAIRE
Drink with me to days gone by!
Can it be you fear to die?
Will the world remember you when
you fall?
Can it be your death
Means nothing at all?
Is your life just one more lie?

Grantaire glares at Enjolras and enters the cafe.                    

ALL
Drink with me
To days gone by!
To the life
That used to be!
At the shrine of friendship
Never say die...
Let the wine of friendship
Never run dry!
Here's to you
And here's to me!

Valjean is moving through the cafe when he hears Marius         
through a window. He moves to the window. Marius sits beneath   
it.                                                             

MARIUS
Do I care if I should die
Now she goes across the sea?
Life without Cosette
Means nothing at all..
Please don't weep, Cosette,
Should Marius fall.
Will you weep, Cosette,
For me?

Valjean listens to Marius's song, and he's moved.                    


93   EXT. BARRICADE/ INT. CAFE MUSAIN - NIGHT                      93     

Look-outs keep watch at either end of the barricaded
street. Many of the rest of the rebels are sleeping.                 

Valjean paces, unable to sleep, inside the cafe. Dead                
bodies are lined up on the ground floor. He comes to a               
stop, and gazes on Marius as he sleeps through the window.           

VALJEAN
God on high
Hear my prayer
(more)
103.

VALJEAN (cont'd)
In my need
You have always been there.
He is young
He's afraid
Let him rest
Heaven blessed.
Bring him home
Bring him home
Bring him home!
He's like the son I might have
known
If God had granted me a son.
The summers die
One by one
How soon they fly
On and on
And I am old
And will be gone.
Bring him peace
Bring him joy
He is young
He is only a boy.
You can take
You can give
Let him be
Let him live,                                              
If I die, let me die
Let him live
Bring him home
Bring him home
Bring him home!

Valjean is now kneeling next to the sleeping Marius.                 

CRANE UP AND UP - Seeing the little world of the barricaded
street now surrounded by waiting soldiers - and the streets
round them packed with soldiers in their thousands, so many
that we know the little band can never win.

CRANE UP AND UP until the barricade and the army that
entraps it has become a small pool of darkness in the
centre of the bright lights of Paris.


94   EXT. PARIS - DAWN                                             94

The sun still below the rooftops. Every house is tightly
shuttered.


95   INT. CAFE MUSAIN - DAWN                                       95     

Grantaire is fast asleep in the upstairs room, dead drunk.
104.


96   EXT. BARRICADE - DAWN                                      96

Enjolras re-enters the barricade through the secret gate.
He has been on a reconnaissance. He looks at the street. No       
one is stirring, but for a single shutter which opens a
crack - a face peeps - and it closes again. Below him the
students are up and getting ready.

ENJOLRAS
The people have not stirred.

COURFEYRAC                                    
Yet we will not abandon those                           
Who still live in fear.

ENJOLRAS                                      
The people have not heard,
Yet we will not abandon those who
cannot hear.
Let us not waste lives!
Let all who wish to                                     
Go from here!

There is silence. Uncertainty. Yet no one moves to go.            

GAVROCHE                                      
(from top of barricade)                             
Do you hear the people sing                             

GAVROCHE/COURFEYRAC                           
Singing the song of angry men                           

STUDENTS/CITIZENS                             
(joining)                                           
It is the music of the people                           
Who will not be slaves again                            
When the beating of your heart                          
Echoes the beating of the drums                         
There is a life about to start                          
When tomorrow comes!                                    

Under this:                                                       


FEUILLY
Enjolras! Ammunition's short.                           

MARIUS
I will go into the streets.
There are bodies all around.
Ammunition to be had.
Lots of bullets to be found.

ENJOLRAS
I can't let you go.                                     
105.


VALJEAN
Let me go!
He's no more than a boy.
I am old.
I have nothing to fear.

Gavroche is already climbing the barricade under cover of
the smoke.

GAVROCHE
I volunteer!

COURFEYRAC
Come back, Gavroche! Don't you
dare!

JOLY
Someone pull him down right now!

GAVROCHE
Look at me, I'm almost there!

GAVROCHE
Little people know
When little people fight
We may look easy pickings
But we've got some bite!
So never kick a dog
When he's just a pup -
We'll fight like twenty armies
And we won't give up!

The rays of the rising sun break through, lighting up
Gavroche.

GAVROCHE
So you'd better run for cover
When the pup grows -

Crack! A musket shot. Gavroche falls face down onto the
barricade.

COURFEYRAC
No-o!

He runs up the barricade, seizes Gavroche's body in his
arms, convulsed with grief, and brings it back through the
gate in the barricade.

At the other end of the street Javert has appeared. He sees
this gate. And talks to the Army Officer.

As the smoke from the muskets clears horses are revealed
drawing field artillery into position. The Army Officer is
lining up the big guns carefully.
106.


ARMY OFFICER
You at the barricades listen to
this!
The people of Paris sleep in
their beds!
You have no chance,
No chance at all!
Why throw your lives away?

Enjolras gazes on his pitifully small group.

ENJOLRAS
Let us die facing our foes!
Make them bleed while we can!

COMBEFERRE
Make'em pay through the nose!

COURFEYRAC
Make'em pay for every man!

ENJOLRAS
Let others rise to take our place
Until the earth is free!

The sun now appears above the rooftops of the city.

And the big guns fire - BOOM! BOOM! BOOM!

The bombardment hits the barricade, rocking it. In its wake     
a massive barrage of musket fire.

The big gun has been lined up with the gate and has burst
right through in the first hit.

Bullets fly, and every few moments another cannon ball
smashes into the piled debris. Javert is glimpsed among the
attackers.

Enjolras and the students throw themselves onto the
barricades, firing at the attackers, handing their rifles
down to others to be re-loaded, firing again.

Valjean moves among them, tending to the wounded, lifting
down the dead, regardless of his own safety.

Marius takes a bullet, and crumples and falls. Valjean runs
towards him -

CRASH! The latest cannonade bursts a hole in the barricade
and now the soldiers are storming through. The hard core of
student fighters retreat, firing as they go, into the Caf�
Musain.
107.


97    INT. CAF� MUSAIN - DAY                                       97

Students and soldiers fight in the caf�, on the stairs, up
the stairs to the upper room. Students driving back the
pursuing soldiers hack away at the staircase, smashing it
to fragments - the soldiers below fire up at them -
students fall, their bodies caught on the jagged remnants
of the stairs. Grantaire is still unconscious from drink.


98    EXT. BARRICADE - DAY                                         98

Valjean has Marius in his arms and is hiding him from the
onrush of the soldiers -


99    INT. CAF� MUSAIN - DAY                                       99

The students' ammunition has run out, they're hurling
sticks and bottles - but the soldiers have found a way to
clamber up, shooting as they come, and one by one the
students are falling.


100   EXT. STREET OUTSIDE CAF� MUSAIN - DAY                       100

Valjean carries Marius away from the carnage. A soldier
challenges him. One violent blow from Valjean sends the
soldier flying -


101   INT. CAF� MUSAIN - DAY                                      101

The soldiers break through at last to the upper room, to find
there's only Enjolras still alive. He stands by the window,
knowing he will die now, proud and unafraid. Seeing him the
soldiers hesitate. The sudden silence wakes Grantaire from
his drunken slumber.

GRANTAIRE
Long live the republic!

He sees Enjolras with the muskets raised against him.
Grantaire goes and joins him. Enjolras smiles, and raises his
now-ragged red flag.

The rifles blaze. Grantaire drops back to the ground.
Enjolras falls back -


102   EXT. BARRICADE - DAY                                        102

Enjolras falling backwards out of the window, until he
hangs upside down, the red flag still in his hands,
streaming like blood down the wall.
108.


PULL BACK to see the street littered with corpses, and the
remains of the barricade, and soldiers scouring the rubble
for any last pockets of resistance.

BACK AND BACK to come to a stop looking at the wide scene.
INTO FRAME walks Javert, grimly surveying the victory of
law over rebellion.


103   EXT. BACK ALLEY - DAY                                       103

Valjean carries Marius down a long narrow alley that runs
between the backs of tall houses. The alley turns a corner -
and there ahead is a dead end. Behind him, the stamp of
soldiers' boots. Ahead, no way out.

Then his searching gaze falls on an iron grating in the
ground. A storm drain.

ON THE SOLDIERS - As they come round the corner into the
end of the alley. They look round. It's empty.

SOLDIER
Nothing here!

The soldiers depart. A moment of silence.

Then into the alley's end steps Javert. Not so easily
fooled. He walks all the way to the end, and looks round.
He sees the drain at his feet. He sees the signs that the
grating has been lifted.

He stoops, and tries to lift it. It's far too heavy for
him.

He straightens up and looks round, calculating. Where does
the drain lead?


104   INT. PARIS SEWERS - DAY                                     104

Valjean is pulling Marius after him down a tight sloping
pipe, where dark water races. Suddenly they start to slide,
then drop through a vent into a wide sewage tunnel. Faint
light reflecting off the slime of curving tunnel walls. The
skitter of rats. Sodden forms floating by: dead bodies.

Valjean carries Marius down the tunnel, moving as fast as
he can, losing strength all the time. He reaches an
intersection where four sewers meet. Light falls through
distant gratings. One of the four sewers is dry. Here he
lets his burden down, and himself sinks to the slimy ground
to rest. He lets his eyes close.

A voice echoes in the shadows.
109.


THENARDIER
Here's a hint of gold
Stuck into a tooth -
Pardon me, m'sieur,
You won't be needing it no more.
Shouldn't be too hard to sell.

A figure coming closer. A sewer thief, robbing corpses. No
sign of life in either Valjean or Marius.

THENARDIER
Well, someone's got to clean'em
up, my friends,
Before the little harvest
Disappears into the mud.
Someone's got to collect their
odds and ends
When the gutters run with blood.

Now we see the thief is Thenardier. He finds a ring on
Marius's finger and pulls it off.

THENARDIER
Here's a tasty ring
Pretty little thing
Heart's no longer going
And he's lived his little time,
But his watch is ticking yet.

It's a world where the dog eats
the dog.
Where they kill for the bones in
the street.
And God in his heaven,
He don't interfere
Cos he's dead as the stiff at my
feet!
I raise my eyes to see the
heavens
And only the moon looks down.
The harvest moon shines down!

Valjean wakes, rears up, seizes Thenardier by the arm,
slams him against the sewer wall.

VALJEAN
How do I get out of here?

THENARDIER
There! That way!

Valjean drops him, picks Marius up once more, and sets off.

Thenardier stares after them, grinning. He's sent then the
wrong way.

LATER - Valjean in the sewers, Marius on his back, and
they're sinking ever deeper into the slimy water.
110.


As he feels himself sink, Valjean holds Marius up in his
arms and forges on, chest deep, lifting the younger man
above his head. Still he sinks, until his face is half-
submerged and he's gagging in the filth. He stumbles, and
suddenly he's sunk beneath the surface, and Marius is
dropping -

Then up he bursts again, face black with slime, eyes
burning with his refusal to be beaten.

LATER - Valjean staggers down the endless sewers, Marius on
his back. But all the time he can hear, closer now, the
rushing sound of the river.

Round a bend and at last - moonlight ahead.                           

He drags himself on through the shallow running water
towards the moonlight.                                                

He reaches the exit at last. Before him the river.


105   EXT. RIVER EMBANKMENT, PARIS - NIGHT                          105     

Valjean, crusted with slime, heaves Marius out of the sewer
onto the embankment that runs beside the river.

He looks up. There, staring at him, is Javert.

Valjean rises slowly. Heaves Marius up onto his back once
more. The strain of the night is showing. He's a man near
the end of his strength.

VALJEAN
It's you, Javert!
I knew you wouldn't wait too
long.
The faithful servant at his post
once more.
This man's done no wrong.
And he needs his family's care.

JAVERT
I warned you I would not give in!
I won't be swayed!

VALJEAN
Another hour yet
And then I'm yours
And all our debts are paid.

JAVERT
The man of mercy comes again
And talks of justice!
111.


VALJEAN
Come, time is running short -
Look down, Javert!
He's standing in his grave!

He starts to move past Javert.

Javert draws his pistol and holds it to Valjean's head.

JAVERT
One more step and you die.

Valjean meets his eyes. That old battle of will against
will.

VALJEAN
Then I die.

He starts walking past Javert. Javert's hand trembles as it
holds the pistol.

Valjean keeps walking. Javert wills himself to shoot, but
he just can't do it. Frustrated, enraged with himself, he
lowers the gun.

JAVERT
Take him, Valjean,
Before I change my mind!
I will be waiting...
24601!

He turns away, trembling now all up and down his body. He
stares into the river. Valjean is gone now. He's alone.

JAVERT
Who is this man?
What sort of devil is he?
To have caught me in a trap
And choose to let me go free?
It was his hour at last
To put a seal on my fate
Wipe out the past
And wash me clean off the slate!
All it would take
Was a flick of his knife
Vengeance was his
And he gave me back my life!

He begins to move away along the embankment, up steps,
towards a bridge. He's unaware of everything except the
turmoil in his brain.

JAVERT
Damned if I live in the debt of a
thief!
Damned if I yield at the end of
the chase!
(more)
112.

JAVERT (cont'd)
I am the law and the law is not
mocked!
I'll spit his pity right back in
his face!
There is nothing on earth that we
share!
It is either Valjean or Javert!
How can I allow this man
To hold dominion over me?
This desperate man that I have
hunted...
He gave me my life! He gave me
freedom!

I should have perished by his
hand
It was his right...
It was my right to die as well...
Instead I live... But live in
hell!

He moves up from the embankment onto the bridge. Here he
stands, looking down at the dark water of the night river.
The Seine forms a whirlpool here, where violent currents
swirl round the piles of the bridge.

JAVERT
And my thoughts fly apart
Can this man be believed?
Shall his sins be forgiven?
Shall his crimes be reprieved?

And must I now begin to doubt
Who never doubted all those
years?
My heart is stone and still it
trembles...
The world I have known is lost in
shadow
Is he from heaven or from hell?
And does he know
That granting me my life today
This man has killed me even so?

He climbs up onto the parapet, reaching his arms up to the
night sky.

JAVERT
I am reaching but I fall
And the stars are black and cold
As I stare into the void
Of a world that cannot hold...

I'll escape now from that world
From the world of Jean Valjean
This is nowhere I can turn...
There is no way to go on...
113.


He reaches higher, turning his body, twisting, as if he
wants some angel from on high to save him - and so,
turning, he falls into the river. The swirling eddies close
over him. And he's lost.


106   EXT. STREET OUTSIDE CAF� MUSAIN - DAY                         106

Soldiers are dismantling the last of the barricade. Women
move about the street, seeking their dead loved ones among
the bodies that still litter the barricade. These are both
the middle-class mothers of the students - Enjolras's
mother, Grantaire's sister - and the working women of the
slums for whom they died, united now in their grief.

WOMAN 1
Did you see them
Going off to fight?

WOMAN 2
Children of the barricade
Who didn't last the night.

WOMAN 3
Did you see them
Lying where they died?
Someone used to cradle them
And kiss them when they cried.

WOMAN 4
Did you see them lying side by
side?

WOMAN 5
Who will wake them?

WOMAN 6
No one ever will.

WOMAN 2
No one ever told them that
A summer day can kill.

WOMAN 7
They were schoolboys
Never held a gun
Fighting for a new world that
Would rise up like the sun.

WOMAN 3
Where's that new world
Now the fighting's done?

The women move off to go about their day's business.
114.


107   INT. MARIUS'S FAMILY HOUSE, PARIS - DAY                       107

CLOSE ON MARIUS - He's waking from the nightmare, finding
himself in a fine bed, with clean linen. He looks round: a
handsome room.

GILLENORMAND
Marius! You've come back to us!

Marius recognises the old man anxiously watching him: his
grandfather, Monsieur GILLENORMAND.

MARIUS
Grandfather...

He struggles to rise, but he lacks the strength. His
grandfather's face shows only love and concern.

GILLENORMAND
Rest, Marius. No more harsh words
between us. I just thank God
you're alive.

Timidly the old man comes closer to the bed. Tears form in
Marius's eyes. Encouraged, the old man takes Marius's hand
in his.

GILLENORMAND
You've come home. To all of us.

The distant voices of the mourning women -

WOMEN (O.S.)
Round and round
And back where you began...


108   INT. CAF� MUSAIN - DAY                                        108

Marius makes his way slowly up the stairs to the upper
room. He's still weak from his wounds. He enters the room
where his friends died, and looks round. He sinks into a
chair.

MARIUS
There's a grief that can't be
spoken
There's a pain goes on and on
Empty chairs at empty tables
Now my friends are dead and gone.

He sees the bloodstain on the wall beneath the window sill.
The blood of Enjolras.

MARIUS
Here they talked of revolution
Here it was they lit the flame
Here they sang about tomorrow
(more)
115.

MARIUS (cont'd)
And tomorrow never came...

From the table in the corner
They could see a world reborn
And they rose with voices ringing
And I can hear them now!
The very words that they had sung
Became their last communion
On the lonely barricade at dawn.

He looks out of the window at what's left of the barricade.
He seems to see again the brave doomed defence, the smoke
and the gunfire, the young men falling.

MARIUS
Oh my friends, my friends,
forgive me
That I live and you are gone
There's a grief that can't be
spoken
There's a pain goes on and on...

Phantom faces at the window
Phantom shadows on the floor
Empty chairs at empty tables
Where my friends will meet no
more.

Oh my friends, my friends, don't
ask me
What your sacrifice was for
Empty chairs at empty tables
Where my friends will sing no
more.

Slowly he rises from the chair and turns to the doorway.
There stands Cosette, waiting for him.


109   INT. MARIUS'S FAMILY HOUSE, PARIS - DAY                    109

Cosette holds Marius, supporting him, as he enters the
house.

COSETTE
Every day
You walk with stronger step,
You walk with longer step.
The worst is over.

MARIUS
Every day
I wonder every day
Who it was brought me here
From the barricade.

Cosette leads him into the room where Valjean and
Gillenormand wait.
116.


COSETTE
Don't think about it, Marius!
With all the years ahead of us!
I will never go away
And we will be together
Every day.
Every day
We'll remember that night
And the vow that we made.

As Valjean and Gillenormand look on, Marius and Cosette
sing their love to each other.

COSETTE
A heart full of love
A night full of you
The words are old
But always true.

VALJEAN
She was never mine to keep
She is youthful, she is free...

MARIUS
Cosette, Cosette!

COSETTE
I saw you waiting and I knew -

GILLENORMAND
Thank God, thank God you are here!
Thank God, thank God you are home!

MARIUS
Waiting for you!
At your feet!

COSETTE
At your call!

VALJEAN/GILLENORMAND
Love is the garden of the young
Let it be
Let it be!
A heart full of love
This I give you this day.

MARIUS/COSETTE
And it wasn't a dream
Not a dream after all.


110   INT. PARLOUR, MARIUS'S FAMILY HOUSE - DAY                  110

Marius stands before Valjean, alone in this more private
room.
117.


MARIUS
M'sieur, this is a day
I never can forget.
Is gratitude enough
For giving me Cosette?
Your home shall be with us
And not a day shall pass
But we will prove our love
To you, whom we shall call
A father to us both,
A father to us all.

VALJEAN
Not another word, my son.
There's something now that must
be done...

He's prepared himself to make this confession, but it's
still hard.

VALJEAN
There lived a man whose name was
Jean Valjean.
He stole some bread to save his
sister's son
For nineteen winters served his
time
In sweat he washed away his
crime.

Marius hears this with shock.

VALJEAN
Years ago,
He broke parole and lived a life
apart...
How could he tell Cosette and
break her heart?
It's for Cosette this must be
faced:
If he is caught, she is
disgraced...
The time has come to journey on,
And from this day he must be
gone!
Who am I?
Who am I?

MARIUS
You're Jean Valjean!

Marius can't conceal that he's disturbed by this
revelation.
118.


MARIUS
Monsieur, you cannot leave!
Whatever I tell my beloved
Cosette
She will never believe me.

VALJEAN
Make her believe
I have gone on a journey
A long way away.
Tell her my heart was too full
for farewells -
It is better this way.
Promise me, Monsieur, Cosette
will never know...

MARIUS
I give my word.

VALJEAN
...What I have spoken, why I must
go.

MARIUS
For the sake of Cosette, it must
be so.


111   EXT. MARIUS'S FAMILY HOUSE, PARIS - DAY                       111     

A waiting cab. Valjean comes out of the modest lodging
house and gets in. The cab rattles away down the street.

IN THE CAB - Valjean sits gazing far away at nothing. Then
his weary eyes close.


112   INT. MARIUS'S FAMILY HOUSE, PARIS - DAY                       112

Cosette gazes at Marius, bewildered by what she has just
learned.

COSETTE
Where's he gone without a word
That wouldn't be his way to go

MARIUS
All he asked for me to   say
He's on a journey, far   away.
Dear Cosette, he loves   you so
Perhaps he will return   some day.

Cosette comes into Marius's arms, tears in her eyes.

COSETTE
He can't leave us now
What's our wedding day
Without him giving me away?
"LES MISERABLES" BLUE REVISIONS 20.5.2012          119.


112A     EXT. MARIUS'S FAMILY HOUSE, PARIS - DAY                 112A

Marius and Cosette, newly married, are walking towards
Marius' house through an aisle created by wedding guests.
Carriages line the street.

WEDDING GUESTS
Ring out the bells
Upon this day of days!
May all the angels
Of the Lord above
In jubilation
Sing their songs of praise!
And crown this blessed time
With peace and love!



113      SCENE OMITTED                                               113


114      INT. MARIUS'S FAMILY HOUSE, PARIS - DAY                     114

Waltz music plays as Marius and Cosette lead the dancing at
the wedding reception.

As the dance proceeds, two extraordinary figures enter, and
start helping themselves to the drink and the food. They
are Thenardier and his wife, dressed up for high society.           

MAJORDOMO
The Baron and Baroness du Thenard

They look round as the dance continues, highly satisfied with   
themselves and see Marius.                                      

Thenardier makes a mock-formal bow.                                 

THENARDIER                                      
I forget where we met...                                  
Was it not at the Chateau Lafarge                         
Where the Duke did that Puke                              
Down the Duchess's decolletage?                           

MARIUS                                          
No, Baron du Thenard',                                   
The circles I move in are humbler                         
by far...                                                 
Go away, Thenardier!                                      
Do you think I don't know who you                         
are?                                                      

MADAME THENARDIER                               
He's not fooled!                                          
Told you so!                                              
Show M'Sieur what you've come here                        
to show.                                                  
Tell the boy what you know!                               
"LES MISERABLES" BLUE REVISIONS 20.5.2012          119A.


THENARDIER
Pity to disturb you at a feast
like this
But 500 francs surely wouldn't
come amiss.

MARIUS
In God's name say what you have
to say.

MADAME THENARDIER
(to Thenardier)
He speaks.                                             
(to Marius)
You pay!

THENARDIER                                   
What I saw, clear as light,                            
Jean Valjean in the sewers that                        
night,                                                 
Had this corpse on his back                            
Some boy he'd killed in a viscious                     
attack.                                                
I was there, never fear!                               
Even found me this fine souvenir!                      

He shows off his ring. Marius stares in astonishment.            

MARIUS                                       
I know this! This was mine!                            
This is surely some heavenly sign!                     

Thenardier steals the ring back.                                 

THENARDIER                                   
And there's more! Mark this well -                     
It was the night that the                              
barricades fell.                                       

MARIUS                                       
Then it's true! Then I'm right!                        
Jean Valjean was my saviour that                       
night!                                                 

Thenardier looks past Marius to where Cosette stands among       
their friends. He lowers his voice.                              

THENARDIER                                   
Jean Valjean - the old con.                            
You pay up and I'll say where he's                     
gone.                                                  

He takes out money and reluctantly presses it into               
Thenardier's hands. Madame Thenardier takes the money before     
Thenardier has safely pocketed it.                               
"LES MISERABLES" BLUE REVISIONS 20.5.2012          120.


MARIUS                                      
Not so loud! Here's for you.
God forgive us the things that we
do.

MADAME THENARDIER
How's about some extra
On a day so glad
Our little orphan girl
She hasn't done so bad.                               
Raised in a convent
Cash to spare -                                       
We want our share.

Marius hands over yet more money to Madame Thenardier.          

THENARDIER                                  
Quite the little nun, ain't she!                      

CRACK! Thenardier sinks to the ground, felled by a powerful     
blow from an angered Marius. The band stops playing.            

MARIUS                                      
Where is he?                                          

THENARDIER                                  
(cowardly voice)                                      
The convent.                                          

Marius rushes to Cosette and we see him telling her where       
Valjean is. They hurry away.                                    

Thenardier clambers to his feet, helped by his wife. He         
gestures to the band to continue. They stand by the tiered      
wedding cake. As Thenardier recovers his composure, Madame      
Thenardier steals one then two pillars from the cake so it      
collapses on the floor. She then pushes it under the table      
with her foot.                                                  
"LES MISERABLES" BLUE REVISIONS 20.5.2012            121.




THENARDIER
Ain't it a laugh?
Ain't it a treat?
Hob-nobbin' here
Among the elite?
Here comes a prince
There goes a Jew
This one's a queer
But what can you do?                                   
(pulling Madame Thenardier                         
onto the dance floor)                             
Paris at my feet!
Paris in the dust!
And here's me breaking bread
With the upper crust -

As he pivots Madame Thenardier, stolen silver drops out from     
Madame Thenardier's dress. The music stops dead in the           
clatter. The Thenardiers look up, as if implying that the        
silver dropped from the ceiling. The dance continues.            
Monsieur Gillenormand motions to the Majordomo to remove         
these unwanted guests.                                           

THENARDIER                                   
Beggar at the feast!                                   
Master of the dance!
Life is easy pickings
If you grab your chance!

MADAME THENARDIER                            
Everywhere you go                                      
Law-abiding folk
Doing what is decent

THENARDIER                                   
But they're mostly broke!                              

MADAME THENARDIER                            
Singing to the Lord on Sundays

THENARDIER                                   
Praying for the gifts he'll send -                     

THENARDIER/MADAME THENARDIER
But we're the ones who take it -
We're the ones who make it in the
end!

The Thenardiers are carried off, singing as they go.             

THENARDIER                                   
Watch the buggers dance                                


MADAME THENARDIER                            
Watch'em till they drop!
"LES MISERABLES" BLUE REVISIONS 20.5.2012            121A.


THENARDIER/MADAME THENARDIER                
Keep your wits about you
And you stand on top!

THENARDIER                                  
Masters of the land                                   

MADAME THENARDIER                           
Always get our share                                  

THENARDIER/MADAME THENARDIER                
Clear away the barricades                             
And we're still there!                                
We know where the wind is blowing                     
Money is the stuff we smell -                         
And when we're rich as Croesus,                       
Jesus! Won't we see you all in                        
hell!                                                 

As they are thrown out, the Thenardiers steal a tiara and a     
candlestick.                                                    
"LES MISERABLES" BLUE REVISIONS 20.5.2012          122.





115     EXT. CONVENT, PARIS - NIGHT                              115

IN ON A WINDOW - Where two candle burn.


116     INT. CONVENT CHAPEL, PARIS - NIGHT                       116

Valjean prays in the chapel, on his knees. He's very weak.

Next to the crucifix on the altar are Valjean's two silver
candlesticks, in which two candles burn.

VALJEAN
Alone I wait in the shadows
I count the hours till I can
sleep.
I dreamed a dream Cosette stood
by
It made her weep
To know I die...
Alone at the end of the day
Upon this wedding night I pray
Take these children, my Lord, to
thy embrace
And show them grace...
God on high
Hear my prayer
Take me now
To thy care
Where you are
Let me be
Take me now
Take me there
Bring me home
Bring me home!

VALJEAN is joined by the ghost of Fantine. She takes his hand
as he prays.

FANTINE
M'sieur I bless your name...

VALJEAN
I am ready, Fantine...

FANTINE
M'sieur lay down your burden...
123.


VALJEAN                                         
At the end of my days...                                  

FANTINE                                         
You raised my child in love,                              

VALJEAN                                         
She's the best of my life...                              

FANTINE                                         
And you will be with God.                                 


116A   EXT. CONVENT CLOISTERS - NIGHT                             116A

Cosette and Marius rush round the cloisters and enter the
chapel in the middle of the cloisters.


116B   INT. CONVENT CHAPEL - NIGHT                                116B

The sound of the door opening. Valjean looks round. It's
Cosette entering, followed by Marius.

VALJEAN
Cosette?

Tears form in his eyes. Cosette goes to him, kneels before
him, takes him in her arms.

COSETTE
Papa, papa, I do not understand -
Are you all right? Why did you go
away?

VALJEAN
Cosette, my child! Am I forgiven
now?
Thank God, thank God, I've lived
to see this day!

Marius comes to him.

MARIUS
It's you who must forgive a
thoughtless fool!
It's you who must forgive a
thankless man!
It's thanks to you that I am
living,
And again I lay down my life at
your feet.
Cosette, your father is a saint!
When they wounded me
He took me from the barricade,
Carried like a babe,
And brought me home to you!
124.


VALJEAN
Now you are here
Again beside me
Now I can die in peace
For now my life is blessed...

COSETTE
You will live, papa
You're going to live
It's too soon
Too soon to say goodbye.

VALJEAN
Yes, Cosette, forbid me now to
die!
I'll obey
I will try...

He holds out a letter for her.

VALJEAN
On this page
I write my last confession.
Read it well
When I at last am sleeping.
It's the story
Of one who turned from hating
A man who only learned to love
When you were in his keeping.

Cosette takes the letter and kisses it.

COSETTE
I know it, papa.

Valjean turns back, face shining, towards the table where
the candles burn in the silver candlesticks. There he sees
three ghosts waiting for him. The ghost of the Bishop. The
ghost of Fantine. And beyond her, watching Marius with
love, the ghost of Eponine.

Fantine comes towards him, reaching out her hands.

VALJEAN
I'm ready now, Fantine.

FANTINE
Come with me
Where chains will never bind you
All your grief
At last, at last behind you
Lord in heaven
Look down on him in mercy -

VALJEAN
Forgive me all my trespasses
And take me to your glory!
125.


Cosette embraces Valjean, weeping.

Valjean reaches up his hands, and lets the ghost of Fantine
take them.

FANTINE/EPONINE
Take my hand
I'll lead you to salvation
Take my love
For love is everlasting...

VALJEAN/FANTINE/EPONINE/BISHOP
And remember
The truth that once was spoken:
To love another person
Is to see the face of God...

Led by Fantine, Valjean walks out of the Chapel towards the
cloister.

What remains is Cosette, her head cradled in the lap of the
man who has just died.

The walls of the cloisters are covered in votive candles.
The Bishop of Digne waits in front of the candles. Now
Valjean's strong and young again. Before they reach the
wall of candles, all three are gone.

As they disappear we CRANE UP, high over the cloister, high
over the walls of the Convent and we see the Paris streets
outside. Fires are burning and debris is scattered in the
streets. Dawn is breaking.

From far away, the sound of an approaching crowd -


117   EXT. PLACE DE LA BASTILLE - DAY                             117

THE CAMERA MOVES over the cobbles as the light of the
rising sun reveals the devastation left by a bitter street
battle. Past the remains of a barricade.

The distant sound of an approaching march.

SUPERIMPOSE CAPTION:

Sixteen years later
Paris, 1848.

From far off, the swelling sounds of the approaching march
become the words of a song.

MARCHERS
Do you hear the people sing
Lost in the valley of the night?
It is the music of a people
Who are climbing to the light
For the wretched of the earth
(more)
126.

MARCHERS (cont'd)
There is a flame that never dies
Even the darkest night will end
And the sun will rise.

As THE CAMERA RISES we see we're in the Place de la
Bastille. The triumphal column has long been completed, but
the great elephant is sadly dilapidated and has become
incorporated into an immense barricade - three stories
high, seven hundred feet long. Down all the streets that
converge on the square we now see the multiple victory
marches approaching. They cheer and beat drums as they
climb up to the top of the barricade.

SUPERIMPOSE CAPTIONS:

The people of Paris have risen in
their tens of thousands.

The King has fled. A new Republic
is born.

There in the forefront of one column march Marius and
Cosette.

MARCHERS
They will live again in freedom
In the garden of the Lord
They will walk behind the plough-
share
They will put away the sword
The chain will be broken
And all men will have their
reward!

As the marchers come nearer we begin to realise how many
there are: thousand upon thousand. And there marching among
them we see ghosts from the past - Enjolras and the
students who died - and Fantine - and Eponine -

And out of the crumbling elephant peers another ghost: the
grinning face of Gavroche. He climbs out to dance on the
elephant, as the crowd fill the square.

MARCHERS
Will you join in our crusade?
Who will be strong and stand with
me?
Somewhere beyond the barricade
Is there a world you long to see?

As the marchers converge, there watching them are
Thenardier and his wife. Thenardier gives the marchers a
wave of greeting. Survivors to the last.

MARCHERS
Do you hear the people sing?
Say, do you hear the distant
drums?
(more)
127.

MARCHERS (cont'd)
It is the future that they bring
When tomorrow comes!

Now among the marchers we see the ghost of Valjean, singing
with the rest atop the barricade, amongst the waving red
flags.

MARCHERS
Will you join in our crusade?
Who will be strong and stand with
me?
Somewhere beyond the barricade
Is there a world you long to see?
Do you hear the people sing?
Say, do you hear the distant
drums?
It is the future that they bring
When tomorrow comes...
Tomorrow comes!




END CREDITS`)
  .then((e) => console.log(`Código finalizado, ${e} mensagens enviadas`))
  .catch(console.error);
