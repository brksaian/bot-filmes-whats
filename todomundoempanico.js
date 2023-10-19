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

enviarScript(`/~
I I . /
-- ..
SCREAM IF YOU KNo·,,v WHAT I DID LAST HALLOWEEN
by
Jason Friedberg & Aaron Seltzer
I
SCREAM IF YOU KNOW WHAT I DID LAST HALLOWEEN
by
Jaso; Friedberg & Aaron Seltzer·
INT - MODEST HOME - NIGH~
A dark and spooky night.
The place is decorated for Halloween~ jack •o lanterns,
orange and black streamers,. human heads on sticks •••
CINDY, our heroine, .1 7 and pretty in a Neve Campbell, Jennifer Love Hewitt way, ah fuck it - just picture any
"Party of Five" type - talks on the cordless.phone while
watching "Halloween" on T.V.
CLICK.
· CINDY.
(into phone)
••• o.k., so pick me up in ten.
IN THE KITCHEN.
She opens the pantry, rummaging for a snack. we FEATURE
several frightening food products: ·count Cbocula and
Frankenberry.cereal, and devil's food cake.
She grabs a tin~skillet of "Jiffy Pop Popcorn," and puts
it on the lit stove.
The phone RINGS.
CINDY
Hello?
SCARY VOICE
(from phone) Hello Cindy. .
CINDY
Quentin?
SCARY VOICE
It • s not Quentin ••• 
DING DONG! The doorbell CHIMES.
She walks to the front door and opens it to reveal four
CHILDREN in Halloween costumes.
CHILDREN
Trick or treat!! ,
,i
CINDY
Hi, kids. Gee, don't you all look
scary •••
(into phone) Jake, is that you?
Distracted, she reaches for the bowl of candy, but instead
grabs the other items on the table - bottles of liquor, marijuana joints, and hypodermic needles.
SCARY VOICE
( from phone)
Wrong again.
She dumps the narcotics and booze in their candy bags.
CINDY
( to children) ·
Have a safe Halloween.
She closes the door on the surprised toddlers.
CINDY
(into phone) Who is this?
SCARY VOICE.
You have a sexy voice. It's too bad
your boyfriend left you all alone on
Halloween.
Through the window we FEATURE the Children, now gleefully·
swigging the booze, smoking the joint, and shooting the
smack. ·
CINDY
Ya• know, whoever this is - fuck·
off.
(hangs up)
Loser.
IN THE KITCHEN
The tin-skillet expands with th.e POPPING corn, finally
BURSTING OPEN. 
POP! PING! PANG! Kernels SHOOT through the kitchen,
SMASHING plates and SHATTERING glasses.
The phone RINGS again.
Cindy eyes the phone; getting a little freaked. RING.
RING.
CINDY
(picks up)
Hello?
SCARY VOICE
Don't ever do that to me again,
bitch.
CINDY
Who is this - what do you want?
SCARY VOICE
I just want to talk. You look good
in that tight blue sweater.
.., .
Cindy CLICKS OFF as she looks down in horror at her tight
blue sweater. Whoever's on the line .can see her!
SCARY MUSIC UP
We FOLLOW Cindy as she rushes through the house, shutting
the curtains and blinds. With every step, the tension
mounts ..•
CRASH!
A MAN jumps through the window it's FREDDY KRUEGER!
CINDY.
Ahhh!!1
Freddy raises his razor-clawed hand, then stops in midslice.
FREDDY KRUEGER
(noticing street sign)
Wait, this isn't Elm Street?
CINDY
No, it's Maple.
FREDDY KRUEGER
Christ, this always happens. It's
like forgetting where you parked at ·
the mall - it all looks the
same ••• Give me directions'? • 
CINDY
R;i<jht at Oak, left at Sycamore.
FREDDY KRUEGER
(leaving)
Sorry about the window. I'll have
my insurance adjuster come by in the
morning. '
He exits. The phone RINGS again. She eyes it with
-trepidation.
RING. RING.
RING - She picks up.
· CINDY
Hello?
PHONE OPERATOR
You have a collect call
from ••• HomicidaL Maniac ••• will you
accept the charges?
CINDY
No!
She SMASHES the phone to pieces. A beat.
RING. RING. Her cellular phone RINGS. She answers.
A beat.
SCARY VOICE
( from phone) Cindy?
CINDY
Leave me alone.
SCARY VOICE
Not until you answer some questions. Miss one and you die.
CINDY
(freaked) . Why are you doing.this to me?
SCARY VOICE
I'm asking the questions.
4 . 
SCARY VOICE
What is your favorite teen horror
movie?
She n~rvously bites her fingernails, then SPITS them out.
.A beat.
CINDY.
That one where the ·girl gets harassed on the phone •••
(she passes a "Scream" movie
poster)
••• you know, the one with the
chubby, alcoholic girl who was in
E.T.?
SCARY VOICE
Next question.
CINDY.
No •••
She now nervously bites her toenails, SPITTING them out.
SCARY VOICE
·I'm thinking of a number between 1
and 100. Whatis it?
She sinks to her knees in terror, trembling.
CINPY
(getting choked up)
Uh ••• 76?
A long beat.
SCARY VOICE
·tucky guess.
Behind her we see her neglected popcorn is now ON FIRE, and
BILLOWING smoke. .
SHRIEK 1 SHRIEK·! The smoke detector SOUNDS, adding to
Cindy~s confusion and terror.
SCARY VOICE
Last.question.
Tears well in her eyes, and a giant snot bubble GURGLES out
of her nostril. She is terrified. 
. '
SCARY VOICE
Do you wipe up or down?
CINDY
Please ••. no •••
SCARY VOICE
QQ. or down?. ,-
CINDY
Up?
SCARY VOICE
sorry Cindy, you 1 nse. The answer
was down.
CINDY
My boyfriend's gonna be here any second. He'll kick your ass.
SCARY VOICE
You mean him?
The lights go on in the backyard, revealing a bloqdied and
dead TEENAGE BOY, strapped to a chair a la "Scream." -- ·
The Scary Voice CACKLES.
Cindy squints at the boy through the sliding glass door.
CINDY
That's not my boyfriend, we went out
like twice.
The Scary Voice stops CACKLING.
SCARY VOICE
Oh.
The backyard lights turn off.
CINDY
I'm calling. the cops~
SCARY VOICE
You might want to check the back
door first. You forgot to lock it.
She SCREAMS and drops the phone in horror.· She races to
the back door~
From outside we see a SHADOWY FIGURE also running to the
back door.
·1
i 
t
I
~ \
I •
AT THE BACK DOOR
She gets there one step ahead of the shadowy figure and
LOCKS the door, then CHAINS it, then puts "The Club" over
the doorknob. ·
Cindy backs away from the door: in terror .. · The figure disappears. The suspense mourits ...
DING DONG!. The doorbell.· Cindy is frozen in fear who is
it?
She punches 9-1-1 on her cordless, then puts the receiver
to her ear.
DING DONG!
SCARY VOICE
( from phone)
Aren't you going to answer the door?
CINDY
Please ••• stop •••
SCARY VOICE
What's the matter, Cindy? Not . having fun anymore?
SCARY VOICE
Answer it.
CINDY
No ...
SCARY VOICE
It could be your friends. It's been
ten minutes.
She moves to the front door sl~wly, then grabs a·baseball
bat out of.the hall closet.
CINDY
· ( grippj,.ng bat)
;r 'm not afraid of you •••
SCARY VOICE.
Then open the door.
She raises the bat, then closes her eyes and flings the
door open.
With eyes still closed, she flails away with the bat. 
cS •
CINDY
TAKE THAT YOU PSYCHO!!
BANG! THUD! CRUNCH! She connects with severai swings.
She opens her eyes to find three LITTLE TRICK OR TREATERS
now lying bloody and beaten on_' the front porch. . '
CINDY
Oops •••
She apologetically tosses the children candy, which only lands uselessly next to their broken arms.
The children GROAN in pain as She closes the door.
LITTLE BOY
I can't feel my legs •.•
INSIDE
Cindy locks tne door. As she turns, we see the KILLER - right behind her.
The Killer has a black cloak and white mask on; a la . "Scream," except his mask is Casper the Friendly Ghost.
He raises a wicked look4.ng knife and creeps up behind her.
KILLER
Hello Cindy.
Cindy freezes in her tracks - it's the same scary voice
from the phone.
She turns to see the Killer and SCREAMS!
The Killer lunges at her and stabs twice at her chest.
POP! POP! Her breasts POP like balloons, then deflate.
KILLER
Implants •••
The Killer raises.the knife again - Cindy SHRIEKS IN.
TERROR.
S1.1ddenly, Cindy's 200 lb. St. Bernard, CUJO, comes
scampering up from behind •. ·
Before the Killer can strike, Cujo jumps up and knocks him
to the ground. 
CINDY
Good boy, Cujo!
Cujo proceeds to pin the Killer down-and vigorously HUMP
HIS LEG.
KILLER
AAhhhh •••• ~.
She uses the distraction to dash out the front door.
OUTSIDE
Cindy races down the steps, stepping on the BEATEN
C~ILDREN, who YELP in pain.
LITTLE GIRL
Someone g·et me some morphine .•.
9.
Cindy runs into the street, just as her FRIENDS pull up in
a red, '57 Cadillac convertible.
Her friends are SKEET, JAKE, BUFFY, and QUENTIN.
Cindy jumps in the passenger side.
SKEET
What's wrong?
CINDY
Go - just drive! Get out of here!
Skeet puts it in gear and PEELS OUT down the road.
As they drive off, we see the Cadi's personalized ·license
plate "'." CH_RIS':rINE.
CUT TO:
EXT~ DARK AND WINDY ROAD - NIGHT
The five teens drive down the highway. We now FEATURE our
ensemble cast:
SKEET ~ Cindy's boyfriend. Good-looking, cool, and
brooding in a Skeet Ulrich way.
JAKE - All American looks, muscular, gung-ho jock.
BUFFY - The "It" girl. Incredibly sexy, beautiful, and
popular. 
1.
QUENTIN - Freckled face, spiky haired video store geek.
Buffy i·s in the backseat between Quentin and Jake. Skeet
drives as Cindy tries to call the cops on her cellphone.
CINDY
••• still no signal.
QUENTIN
· It's the a ••• it's the canyons. The
satellite signals bounce off the
walls which •••
BUFFY
wonder much why you don't get laid?
Save the tech lingo for your video
clerk friends. Cindy needs Five-a
not the 411.
JAKE
Yeah, douchebag.
He PUNCHES Quentin in arm.
Ow.
QUENTIN
(rubs arm)
Skeet puts an arm around Cindy.
SKEET
Relax, the station's just down the
road. Everything'll be o.k.
Skeet takes his eye off the road as they pass a sign
reading: DEER X-ING.
SMACK! THUD! Unbeknownst to the teens, the Cadi. HITS
several DEER.
They travel on, riow with antlers stuck in the grill.
QUENTIN . (to Cinqy)
Excuse me for being the voice of
reason. But uh, won't your dad be
upset to find a knife wielding
maniac in your house?
CINDY
He"s out of town. 
,
f
They pass a sign reading: HANDICAP X-ING.
. . .·
A group of SENIOR CITIZEN'S try to cross the road in their
walkers and -wheelchairs. The Cadi' ZOOMS up, and the
senior's SCREAM and LEAP out of the way.
several of the Senior Citizens flip them the "finger."
The oblivious teens travel on, now with a wheelchair
dragging behind them.
BACK IN THE CAR
There is a long, awkward silence.
BUFFY
O.K., if nobody's gonna say it, I
will. Cindy, don't you find it kind
of like, ironic that exactly one
year ago tonight your mom was killed
and now someone tried to kill
you ••• ?
They pass a sign reading: MEN AT WORK.
The band MEN AT WORK stand on the shoulder, PLAYING MUSIC.
MEN AT WORK
(sing)
••• I come from a land down under •••
BACK IN THE CAR ·
CINDY
Are you saying that this had
something to do with my mom"s ·
murder? That guy's locked up in a
looney bin for life.
BUFFY
Well, you have to admit •••
SKEET
C'mon, Buffy, you know she doesn't
want to talk about it.
They go around a bend.
SKEET
Almost there •••
Suddenly, standing in the middle of the road - the Killer
appears. He raises his knife, glinting in the moonlight. 
•
t
,-~\
' I
1, ---~~/
i f I
I t
f
BUFFY
Oh my God ••.
CINDY
It's him. .
Skeet SLAMS ON THE BRAKES but }:here's no time~
12 .
SMACK!
air. They hit the Killer, catapulting him high into the
JAKE
Oh, shit.
ON THE KILLER
Soaring in mid-air from the collision.
He tucks his legs under him and does an acrobatic
somersault, then a twist like a gymnast.
BACK ON THE CAR
The teens hold up score cards - a.s, 9.0, a, 10, 9.5.
Finally, the Kille~ lands with a sickly THUD.
BAMl The skidding car hits him again, this time dragging him under the chassis.
KILLER
_OWW"-11 •••• !
They drive over different severe terrains - speedbumps, road flares, then hot asphalt.
KILLER
Ahhh •••• !
They finally come to a stop. Skeet throws it in reverse
and backs up over the killer, dislodging him from the axle.
The teen·s get slowly out of the car. Terror on all their
faces.
The car's headlights illuminate the Killer's listless body
in the middle of the road.
SKEET
He came out of nowhere. • • • 
BUFFY
Is he ••• dead?
The Killer squirms in pain.
IN THE CAR
CINDY
He's alive.
13.
The parking brake gives, causing the car to roll forward.
QUENTIN
Watch out!
They scatter as the car rolls over the Killer's body - CRUNCH!
The car rolls to a s~op against the shoulder. The teens
gather around the Killer's body in fear.
Jake pokes tentatively at the body with a stick. No
movement.
He discards the stick and KICKS the Killer in the balls.
Still no response.
JAKE
He's dead.
The teens look at each other in dread as this sinks in.
BUFFY
What•re we gonna do?
CINDY
.•· We've got to go to the police.
They'll understand - it was an
accident.
QUENTIN
Just a legal note here, Cindy. This
guy just tried to kill you, then you "accidentally run over him?" ·
Nobody's gonna buy that.
SKEET
There's alcohol all over the car •••
BUFFY
We"re all gonna fry. 
r
i
,/
JAKE
We've got to get rid of the body.
Jake grabs the body by the legs and drags it back toward
the car, BANGING the head off·bumps and potholes~
CINDY
Are you crazy?
BUFFY
Jake's right. Nobody saw anything - no witnesses. Cindy, like this guy tried to kill you.
QUENTIN
I don't know about this ••.
SKEET
You have a better idea?
A car is HEARD approaching.
JAKE
Someone's coming.
Everyone stares at Cindy.
JAKE
So what's it gonna be?
Cindy ponders as JEOPARDY THEME MUSIC UP. A beat.
CINDY
What is, to get rid of the body so
we don't go to jail?
As. oncoming headlights appear, the teens quickly stuff the
body in the trunk. The Killers legs still hang out, so
they SLAM the trunk repeatedly like an overstuffed suitcase - CRUNCH! .
The teens hop.in and drive off just before the oncoming car
reaches them. ·
CUT TO:·
EXT - BEACH - LATE NIGHT
The teens huddle around a bonfire on this deserted stretch
of sand.
Buffy roasts a mars·hmallow on a stick over the flames.
Next to. her, Jake roasts two whole·rotisserie chickens on a
skewer. 
I.
. '
,
I
r
I
I
Skeet keeps an arm around Cindy, trying to comfort her.
SKEET
Fire's going out.
JAKE
I got it.
l.:::, •
Jake gets up and grabs a piece of wood. Before he throws
it on the embers, he spots a BABY SEAL, beached at the
shoreline. ·
The cute baby seal tries to make it's way back into the
surf.
BABY SEAL
ARF! ARF!
THWACK!· Jake CLUBS the seal on the head with the piece of
: wood.
JAKE .
(as he clubs)
I'm not sure what we're doing is
right •••
THWACK!! He gives the seal two more whacks about the
cranium.
THWACK!
JAKE
(cont'd)
••• I consider myself a moralistic
person •••
BABY SEAL
ARF!
JAKE
·(cont'd.)
•• ~ I go to church •••
(THWACK!)
••• I even donate my time to the
Humane Society •••
BUFFY
Hurry up already, I'm getting cold.
THWACK! Jake finally delivers the fatal. club, then drags
the· dead seal over. and tos.ses it onto the fire •.. 
I
WHOOSH! The seal re-ignites the fire, and the teens all
warm their hands over the flames.
Quentin stands and paces excitedly.
QUENTIN
Hello? Doesn't anyone see what's
going on here? The attempt on
Cindy, the anniversary of her
mother• s death, and now this •••
BUFFY
Get to the point, Retardo Montalban.
Jake munches on a roasted seal paw.
JAKE
(mouth full)
Tastes like chicken ••.
QUENTIN
This has all the makings of a
classic teen horror movie. A low
budget scream-fest aimed at cashing in on the youth market. Filled with
all of your typical high school
archetypes and a loud, edgy soundtrack. ·
Skeet whips out a boombox, which blasts Nine Inch Nails.
ON JAKE
QUENTIN - (cont'd}
we got the jock - Jake. A· win-atall-costs, beer guzzling womanizer.
Yet·under his macho facade- lies a
penchant for tu-tu's and dreams of
the Jaffrey ballet.
Now·wearing a.pink·tu-tu and tights, as he pirouettes on
his ·tiptoes. _
JAKE
( to Quentin) . I guess that makes you the wisecracking, know-it-all dork. You
secretly lust for Cindy, causing you
to masturbate three times a day - four on the weekends, mixing in the
_occasional· auto e~otic asphyxiation
fetish.
l.o. 
,.
)
I
I
;
ON QUENTIN
Wearing a plastic bag over his head, trying to suffocate
himself.
ON BUFFY
SKEET
Then there's Buffy; the prom queen. Beautiful, seductive, her
measurements are 36-24-34 •••
Who stands in a negligee and poses for a PHOTOGRAPHER.
SKEET
(cont'd)
Shallow, utterly self-centered, her
turn en's include fresh water eels,
and the cold sting of an Icelandic
bidet.
Buffy ~ejoins the group.
ON CINDY
BUFFY
Cindy - the girl- next door.· Pretty,
smart, kind, and alas, a virgin. A
.· screwed up head case who hasn • t
gotten over her mom's brutal murder,
and.the· only one who will probably make it to the sequel.
Who lounges in a director's chair, reading a script entitled, "SCREAM IF YOU KNOW WHAT I DID LAS~ HALLOWEEN
- PART 2"
CINDY
Then finally, there's my boyfriend Skeet. ·
(cuddles up to him)
So perfect,, so cute, my little
sriookie-wookie, my little honey- bunny, my little snuggle-wuggle •.••
RETCH!! The other teens grab barf bags and VOMIT into th~m
from her sugary nicknames. · ·
SKEET
sun• s coming up. we better do this.
> --. CUT TO: , ____ / 
EXT._ FISHING DOCKS - PRE-DAWN
A sign reads: DAWSON' s RIVER. The five teens drag the
body to the edge of the docks, then set it down.
They stand over it in frightened awe, staring at the
ominous black cloak and Casper'mask • . •
BUFFY
We all have to swear to never tell
anyone what happened.
They look at each other apprehensively.
BUFFY
Swear - each of you. swear 1
A tense beat.
QUENTIN
Shit.
JAKE
Fuck.
SKEET
Cocksucker.
They all turn to Cindy, who hesitates.
'BUFFY
Cindy, you have to swear.
JAKE
Come on, Cindy - swear.
CINDY
Mutherfuckin' tittie suckin' twoball bitch.
They all nod solemnly, then start to push the body over the
edge.
QUENTIN
Wait - don't you want to see who it
is?
CINDY
No. Leave the mask on. The face of
my mother' s killer haunts me every
day.~. 
, ·
'
r
f
She whips out a framed picture of her mom's killer,
shudders, th~n puts it away.
CINDY
(cont'd)
.•• I can't take another.
They nod, then push the body over - SPLASH!
UNDERWATER
19.
We follow the body a~ it sinks to the bottom of the river.
It comes to rest next to a LEONARDO Dir~RIO look-alike,
who's clutching a blue pendant.
SUPERIMPOSED: ONE YEAR LATER
FADE UP
. INT - CINDY'S KITCHEN - MORNING
FADE OUT
Cindy sits at the breakfast .table as her father MR.
CAMPBELL, stands over the stove, cooking her breakfast.
He CRACKS a few eggs into a frying pan as the news drones
on the background T.V.
Several suitcases and an airline ticket are·by the door.
CINDY
How long will you be gone?
He opens a jar of pig's feet, and dumps them into the eggs.
MR. CAMPBELL
Just a couple of nights.
He unwraps butcher·paper, revealing a cow tongue. He dumps
that in also, folding the ingredients into an omelette.
He flips up the omelette.
MR. CAMPBELL
Another o·ne of these damn
conventions. We' re previewing the
spring line. ·
He goes over to his briefcase and puts away the last· of his
samples, which are· women's cosmetics: lipstick, eyeliner,·· 1 mascara, etc • . -~/ 
\
j)
34.
DANIELLE
Hit it!
VROOM!· A MONSTER TRUCK drives out from the wings-and rolls
over Danielle. · ·
She gets up, unhurt, and now sporting a tire track across
her face. She bows to STRONGER APPLAUSE.
BACK STAGE
PRINCIPAL FONZY
Thank you, Danielle.
Cindy approaches Buffy, who waits to go onstage.
CINDY
Buffy, we have to talk.
BUFFY
Duh, Cindy, can't you see I'm in the
middle of something really
important?
Cindy shows her the note, and Buffy GASPS in terror.
ON STAGE
BUFFY
Oh, shit.
CINDY
Meet me at the swim-gym afterschool.
PRINCIPAL FONZY
Buffy will have to do something
spectacular to top our first two
finalists •••
Buffy strides to center stage and whip·s out a. 24" oolish
sausage. A ORUMROLL SOUNDS as a spotlight hits her.
She takes the sausage and slowly "deep throats" it,
swallowing the entire ~hing.
She takes it slowly out of her mouth.
Every MALE in the audience rises and gives her a STANDING
OVATION. .
ON THE JUDGES 
I.
35.
They nod to each other, impressed. _.
CUT TO:
INT - SCHOOL AUTO SHOP - DAY
Skeet·and four other STUDENTS 'huddle tinder the hood of a
car, working on the engine. · ·
The SHOP TEACHER hobbles over, sporting an eye patch and a
prosthetic arm.
SHOP TEACHER
Skeet, you have a visitor.
Skeet looks up to see Cindy in the doorway.
SHOP TEACHER
(to class}
Everyone remember - safety first.
Skeet grabs his jacket, unknowingly yanking a lever which
drops an engine block from a_pulley.
CRUNCH! The engine block hits two students, KNOCKING them
senseless.
STUDENTS
Ow!
As Skeet makes his way to Cindy, he unknowingly steps on a
tire jack, depressing it.
BOOM! The car flattens the student lying underneath it.
His protruding legs convulse in pain.
Help •••. !
FLATTENED
STUDENT
Skeet passes the Shop Teacher, who stares into the eye of a.
power drill, trying to fix·it.
As Skeet continues, he spots the unplugged drill cord.
SKEET
Someone could trip over this •••
_ He plugs it into the wall~
WHIRRR! Behind him we see the Shop Teacher drill into his
own eye, which spurts blood. 
SHOP TEACHER
Ahhh - my good eye!!!
Skeet· reaches Cindy.
CINDY
Skeet, I •••
SKEET
I know •••
(takes a note from his
pocket)
•.. I got one too.
36.
CUT TO:-
INT - VIDEO STORE - DAY
Quentin is in the "Porno Section," holding up a tape and
giving his review of the latest release.
QUENTIN
I recommend "Robocock 4" - it's got
it all - girl on girl 69, two-headed
dildos, golden shower •••
We PAN DOWN to reveal he's talking to two LITTLE OLD
LADIES.
LITTLE OLD LADY
I felt it paled in comparison to the
first three. But I did like .. Forrest Pump. " The cock-sandwich
scene was particularly arousing, and
that Jenny really knows how to fuck.
OTHER OLD LADY
Yeah, nobody takes it in the ass
like her. ·
QUENTIN
Hey, that's why it's a classic.
Be looks up to see Cindy enter. She gives him a grave
look.
CUT TO:
INT_ - SCHOOL S_WIM-GYM - DAY
Cindy, Skeet, Buffy, Jake,.and Quentin huddle together in
the bleachers. Behind them we see the SWIM TEAM,
p~acticing their dives. · 
\
)
CINDY
Somebody knows.
JAKE
Bullshit. Someone's just trying to
fuck with us.
BUFFY
(to Quentin)
It's probably you •.•
(makes jack-off motion)
••. Mr. Busyfist. I knew you
couldn't keep your big mouth shut.
JAKE
Yeah, douchebag.
He PUNCHES Quentin in the arm.
QUENTIN
oww ... Hey, it wasn't me.
In the background, we see two MALE DIVERS walk by wearing thong bikini's.
SKEET.
Then who was it?
BUFFY
Maybe it's Cotton Blend ••.
Everyone-GASPS in horror.
QUENTIN
Could be, but he's the obvious
choice~ What if it·•s not him? I
mean, what if someone saw us that
_night?
SKEET
What are you trying·to say?
In the pool, we see a SWIMMER emit a cloud of purple dye from his suit - he urinated in the water.
QUENTIN
It could be anyone •. It could be
you •••
(points to Buffy)
••• could be me, could be her, could
be him.-~. it co.uld be that fat guy
over there on the trampoline~ ••
37. 
38.
we·PAN to the corner, where we see a FAT GUY wearing
boxers, BOUNCING on a trampoline. The Fat Guy waives as he . boun~es.
QUENTIN.
It could be •••
SLAP! Jake bitch slaps Quentin across the face, leaving a
red handprint on his cheek.
JAKE
I don't buy any of this, it's just a
· prank. And all of you better keep quiet about what happened last
Halloween.
Jake walks off.
BUFFY
What're we supposed to do now?
CINDY
We wait •••
·INT - CINDY'S BEDROOM - MIDNIGHT
CUT TO:
Cindy tosses and turns in her sleep, in the midst of an
obvious bad dream.
Suddenly, TWO HANDS grab her - startling her awake~
She SCREAMS in horror. She sits up and turns on her
nightstand light, revealing it's her father.
CINDY
Oad1
MR. CAMPBELL
It's o.k., honey, you were having another one of your nightmares. But
I'm here now.
CINDY
When did you get home?
MR. CAMPBELL
A few·hours ago. I didn't want to
wake you, you looked so peaceful
sleeping ••• but you could use some
blush. 
39.
He takes out qis Avon makeup kit and brushes rouge onto her
cheeks.
MR. CAMPBELL
Cindy, what's wrong?
CINDY
Nothing.
He continues making her over, putting false eyelashes on
her.
MR. CAMPBELL
Come on, you know you can tel1 your old man anything.
She wants to talk, but holds back~
CINDY
Just high school stuff, Dad.
MR. CAMPBELL
(smiles)
O.K., I understand·.
He now rolls her hair in curlers with fatherly tenderness.
MR. CAMPBELL
Say, did I ever tell you about the
day you were ·born?
She shakes her head "no," then puts her head on the pillow
to hear his bedtime story. ·
MR. CAMPBELL
I remember like it was yesterday.
You know, you almost didn't make it.
He applies a mudmask over her face.
MR. CAMPBELL
There we were at the abortion
clinic. The physician's assistant
vacuumed and scraped you out of · your
mother; the·n tossed you in the
garbage with the other fetuses •••
(plucks her eyebrows)
••• But the doctor noticed that your
heart was still beating, so we got shafted on that whole · .. 3rd
Trimester" thing~ · Then !'18- took you
home and named you Cindy after
your grandmother, Diane. 
40.
She closes her eyes and smiles peacefully as he waxes her
mustache.
CINDY
(drifting off) Thanks, Dad.
We now see she is heavily made up, looking like Tammy Faye Baker.
MR. CAMPBELL
Goodr-. ~.ght, pumpkin.
INT - SCHOOL GYM - NIGHT
_Jake pumps iron in the deserted weight room.
CUT TO:
He turns his walkman up, and we HEAR Hanson's "Mmm - Bop"
over his headphones. He bobs· his head to the music.
AT THE LOCKERS
A SHADOWY FIGURE enters, and opens Jake's locker.
CLOSE ON the ~igure' s black gloved hand,. which switches
Jake's steroid vial with a vial labeled: ESTROGEN.
The Shadowy figure exits. A moment later, Jake enters.
Jake takes a needle, fills it from the switched vial, then
plunges it into his arm.
BACK IN THE Gm
. Jake resumes his workout, curling ·dumbbells.
Suddenly; his chest swells •.
JAKE
What the ••• ?
His chest continues to swell, he's developing tits.·
He rushes to the mirror, whips off his shirt and GASPS.
Jake now has a pair of 38OO.WOMEN'S BREASTS!
· JAKE
Noooo ••••• !
CUT TO:· 
I
/
41.
INT - VIDEO STORE - NIGHT
Quentin lets out the last CUSTOMER, then locks the door and
hangs the CLOSED sign. He turns off the lights, and walks
to the back room.
IN THE BACK ROOM
Quentin enters and CLAPS ON the lights, which transforms
the room into a porno haven:
A disco ball and red ligh~ illuminate the room as a heart
shaped Murphy bed folds down from the wall.
The song, "I Touch Myself," by The Divinyls UP.
The shelves flip over, revealing zebra and leopard skin
walls.
Tacked on the doors are nudie centerfold pictures of
Quentin's favorites - CAPTAIN PICKARD, BILL GATES, and
MARTHA STEWART.
Quentin grabs a video and sticks it in the VCR. The cover
of the video reads: "Shaving Ryan's Privates."
we HEAR the sound of people MOANING, and jazzy porno music
from the T.V.
Quentin pulls his pants down and starts jacking-off to the . porno and centerfolds.
QUENTIN
Oh yeah, take that Martha Stewart •••
He uses a penis pump, then a dustbuster, then. grabs a
GERBIL and smiles lustfully.
GERBIL
(frightened)
Squeek - squeek ••• !
He reaches for a nearby·jar of Vaseline, scoops a big
dollup of goo, and spreads it on his dick.
SHLURP - SHLURP - SHLURP ! He jacks-off with the Vaseline.
A frown slowly creeps acrqss his face. He looks down at
his crotch in pain. 
42.
QUENTIN
OWl !
He grabs the jar of Vaseline and examines it to find it's
actually a jar of Ben Gay Deep Heating Rub. Somebody scratched off the label to sabotage him.
QUENTIN
AHHHHl !
As smoke emanates from his crotch, he hops around the room, fanning himself in pain.
CUT TO:
INT - BUFFY'S BEDROOM - NIGHT
Buffy sits at her vanity table, brushing her hair in the
mirror.
BUFFY
(counting brush strokes)
Ten-thousand one, ten-thousand
two •••
BUFFY'S MOM
(O.S.)
Buffy, time to go to bed, you"ve
been brushing your hair for hours.
BUFFY
(she stops) Allright, Mom. It's just that my
hair's so beautiful, I wouldn't want
anything to happen . to it •••
(she l9oks into camera)
••• especially in the next scene.
She gets into bed and turns off the light.
NEXT MORNING
TIME LAPSE:
Buffy YAWNS and stretches awake, then goes to the mirror. ·
Her POV: Her hair has been cut and styled into a "Friends"
style shag.
She.SCREAMS in terror. 
BUFFY
(horrified)
Noooo!!!! Not the Jennifer Aniston
shag - that's so out •••
43.
She looks down to see that she's wearing acid wash jeans.
BUFFY
Acid wash jeans ••• !
She tries desperately to unzip the jeans, but the zippers been rusted shut.
She sinks to her knees SOBBING over her outdated look.
CUT TO:
INT - CINDY'S BEDROOM - MORNING .. Cindy wakes slowly.
on her silk pajamas.
blood on them also.
She looks down in shock to see blood
She holds her· hands up - there's
· She pulls back the c.overs slowly - blood -everywhere.
Terrified, She sits up and flings the covers aside.
The severed head of her dog Cujo lies next to her in bed.
CINDY
(horrified)
Cujo!
She pulls the covers back further, revealing a severed
dolphin's head.
CINDY
-Flipper!!
She pulls _- the covers back further, revealing a severed
pig's head ..
CINDY
Babe!! 1
Her SCREAMS echo through the neighborhood.
CUT TO:
INT BIOLOGY CLASS - DAY
.- A banner reads: · ANNUAL. HALLOWEEN PARTY - 3 DAYS AWAY 1 
(~\
\ ; ·•· _.//
44.
PANNING down the rows of STUDENTS, we see one dissecting a
frog, another·dissecting a cat, and another dissecting a
human cadaver.
we FEATURE Cindy, Skeet, Jake, Buffy, and Quentin among the
students.
The BELL RINGS.
TEACHER
Read Chapter 13, entitled "Chapter Thirteen," for tomorrow.
The Teacher and Students exit, leaving our cast of teens
behind in the empty classroom.
All are suffering from the effects of last night's terror - Jake has cleavage, Buffy has a bad hair-do, and Quentin has
an ice pack shoved in his pants.
CINDY
Now do you all believe me?
QUENTIN
Someone definitely knows.
BUFFY
What happene.d to you, Skeet?
SKEET.
Uh ••• nothing.
JAKE
How come you're the only one who
wasn't terrorized last night? • • :•:..~•• • ~: •:••;•••." _•: .:•; _' ~- •, • .- 0 • • ,h- , : • • :, ••~~ .::._. • •
They all look·'"•at-"him :suspiciously. ·
·SKEET
What're you trying to say?
BUFFY
. ( including sign language)
It has to be you, Skeet!
Jake grabs him by the· throat. and CHOKES him.
SKEET
(gasping) . Cindy ••• tell them it.wasn't me •••
Cindy only·stares at him. 
Her POV: He has red horns, a pitchfork, and a pointed
goatee like Satan.
CINDY
Where were you last night, Skeet?
Jake finally .drops him, and he,.· GASPS for air.
SKEET
I told you. I was uh ••. helping my
sister with her homework.
CINDY
But you don't have a sister.
SKEET
Did I say "sister?" I
meant ••• hampster.
CINDY
(nods understandingly)
Oh.
QUENTIN
Good enough for me.
BUFFY
I buy it.
JAKE
It's air tight.
Cindy hugs Skeet.
CINDY
I 'm sorry I ever q.o~b~_ed . you.
SKEET
You know, it's probably that Cotton
Blend guy.
QUENTIN He couldn't have.
SKEET
How do you know?
QUENTIN .
He was 3,000 miles away taping the
"Courtney: Cocks Show."
(pulls out a video tape)
· Check this out •••
45. 
46.
Quentin goes to the nearby T.V. stand and sticks the video
i11 the VCR •
. ON THE T.V.
A "Jerry Springer,. style talk show, except with Courtney Cocks as the host.
The show"s theme music plays The Rembrandts, "I'll Be There
For You," from the T. V. show ''Friends."
Cotton Blend sits on stage in front of a live AUDIENCE.
COURTNEY
(into microphone) If you're just joining us, today's
guest is convicted killer Cotton
Blend.
The audience APPLAUDS.
ON CINDY
COURTNEY
Cotton, do you have anything to say
to the survivors of your victim?
COTTON
Yeah, uh ••• if you're watching out
there, I uh, just wanna say that I
didn't do it, I didn't kill that
lady.
Watching with utter contempt.
CINDY
Goddamn liar •••
BACK ON THE T.V.
COTTON
And I'm not a goddamn liar. I swear
I never slit her jugular with a 3"
.wusthof paring knife, draining her
blood meticulously into empty ·
Clausen kosher pickle jars, then
unraveling her intestine and
stringing it over the mantle like
Christmas lights. ( he breaks down SOBBING) - I woutd·never do anything like that ~ I'm a pacifist ••• 
l
I
•
He wipes his tears, exposing his forearms which are
tattooed with ~'KKK" and "Aryan Race."
ON COURTNEY COCKS
Also dabbing a tear from her eye.
COURTNEY
That is extremely touching ••.
She recovers, then looks cheerily into the camera.
COl.iRTNEY
Now to boost our. ratings - some
gratuitous violence!
47.
Behind her we see the audience ERUPT into an all-out, chair
throwing BRAWL.
KICK! PUNCH! SMASH!
PUMMELS each other.
It's utter chaos as everyone
· ON CINDY
She turns the T.V. off in_ disgust.
BUFFY
If it's not him, then who's doing
this to us?.
They ponder a beat.
QUENTIN
Maybe it has something to do with
the guy we ran over in the first
scene of the movie.·
JAKE
Maybe. someone saw us •••
SKEET
There was that other car •••
BUFFY
or maybe someone at the docks •••
CINDY
(interrupts} .. . His name was Tom Tingle •..
She pulls a newspaper clipping out of her pocket. 
,
t
--,._,
)
/
•
I
I
I
,
I '
l
i
__ j
SIZZLE!
C.l:NDY
Dad, you're always working.
MR. CAMPBELL
I know, honey, but being an Avon
Lady 'aint what it used to be.
Th~ omelette finally 'lands back in the skillet.
MR. CAMPBELL
It's ready.
.. .., .
He FLINGS tha omelette through the air at her, like a fish
· monger throws a fish.
She CATCHES it in mid air, then puts it on her plate.
CINDY
(taking a bite)
Mrnmm ••• mom's recipe.
They look at each other, and tears well in their eyes. He
goes and hugs her. ·· ·
CINDY
Oh, Dad, I just wish she was still
here.
MR. CAMPBELL
I miss her too. ' But we' 11 always have.her ••. bones.
we PAN to the corner, where Mrs. Campbell's skeleton hangs
on an anatomical stand.
Her skeleton wears an apron labeled, "Supermom"
MR. CAMPBELL
(grabbing luggage)
sure you're going to be o.k.?
CINDY
Don't worry abo.ut me, what could
possibly happen?
He gives her a peck on the cheek, then exits.
Cindy turns her- attention to the T .• V.
ON THE T.V.
A Courtney Cox type tabloid reporter, named COURTNEY COCKS,
does a remote broadcast in front of a mental hospital. 
I
I
)
I
COURTNEY
· (into microphone)
This is Courtney Cocks coming to you live from Bellview Mental Hospital, where, .due to budgetary cutbacks - all inmates are being released.
·crNDY
Oh, my lord •••
We PAN to the couch, where JESUS CHRIST sits smoking a
cigarette.
JESUS CHRIST
Yeah?
BACK ON THE T.V.
As Courtney reports, we see TED KACZYNSKI and HANNIBAL
LECTER walk past her.
Courtney eagerly approaches them for a statement.
COURTNEY
Unibomber and Hannibal the Cannibal - you"ve just been released from the
insane asylum, what're you going to
do next? ·
LECTER &
KACZYNSKI
We"re going to Disneyland!
Cindy watches the T.V •. in horror as her mother's killer,
COTTON BLEND, is also let free.
COURTNEY
And here comes Bellview's most
infamous patient - Cotton Blend,
convicted murderer of Joan Campbell. ·
· Cotton puts his hand over the camera, partially blocking
his face.
Cindy GASPS, then whips out the framed picture she keeps of
Cotto.n.
ON THE FRAMED PICTURE
Cotton also has his hand in front of the lens in the photo,
just like on T.V.
.. ; 
I
BACK ON T.V.
Courtney rushes to Cotton, and we finally get a glimpse of
him - late J0's, stubble faced ~irtbag.
COURTNEY
Cotton, you have your freedom. Will
you now try to seek closure by
killing your victim's daughter,
Cindy Campbell?
COTTON
No comment.
Cotton throws his jacket over his head to shield himself
from the glaring media crush.
He gets in his car, still with his jacket over his head,
and drives off.
O .S • we hear SWERVE! CRASH 1 CRUNCH!
CUT TO:
EXT - KEVIN WILLIAMSON HIGH SCHOOL - MORNING
Cindy parks her car in StUDENT PARKING, then exits. As
she strides through the parking lot, she passes FACULTY
PARKING, then finally, TABLOID REPORTER PARKING.
A swarm of REPORTERS and CAMERAMEN get out of news vans.
Among them is GERALDO RIVERA, JERRY SPRINGER, and
STUTTERING JOHN.
They spot Cindy and converge on her, shoving microphones
and cameras in her face.
REPORTER #1
Cindy - can you give us a
statement? 1
REPORTER #2 .
How's it feel knowing your mom's
killer is on the loose?
REPORTER #2
Talk to us Cindy!
CINDY
No comment •••
They continue to swarm her with questions. She squints . from the POPPING FLASHBULBS. . 
She tries to walk past them, but they block her way .
. CINDY
I said no comment .•.
23.
SMACK! Cindy karate chops a Reporter to the ground. POW!
She does a spinning back kick to another.
She whips out a pair of nlinchucks with a "Waah!" and
proceeds to WHACK! Reporters with them.
She does a backflip, then delivers a scissor kick to a
Photographer's neck - CRUNCH! She steps over the heap of
beaten and GROANING Reporters and Cameramen. . .
As she walks the front steps to school, tabloid reporter
COURTNEY COCKS and her CAMERAMAN step into her path.
Cindy instantly recognizes Courtney and smolders with
hatred ..
COURTNEY
Cindy, how about giving me a
statement? ·
She puts the microphone in Cindy's face. A small crowd of
STUDENTS gather around, including Skeet, who stands
protectively next to Cindy.
CINDY
Why should I talk to you?
. COURTNEY
Look, just ·because I sold a madefor-T.V. movie, two best sellers,
and an infomercial about your mom's
murder - it doesn't make me a
villain.
CAMERAMAN
· Actually, it does.
COURTNEY
· Do 'ya think?
He nods "yes". Courtney looks at the crowd of Students,
who also nod "yes."
CINDY
(seething)
I found the Broadway play
particularly offensive. 
..i,/
A beat.
SKEET
~eah, it was overbearing and
shoddily choreographed at best.
COURTNEY
(shrugs)
Anyhoo ••• Cindy, aren't you scared
Cotton will come back for you?
CINDY.
You want a story?
24.
She rears back and PUNCHES Courtney in the face. She then
wrenches the camera away from the Cameraman.
CINDY
I'll give you a story ..•
SMACK! CRUNCH! She BASHES Courtney about the head,
breaking the camera and knocking Courtney out •
. SHERIFF DUTY - A Roseanna, Patricia, I mean David Arquette
type, breaks up the fight.·.·
SHERIFF DUTY
Break it up - that's enough!
Skeet puts an arm around Cindy to calm her.
SHERIFF DUTY
I'm very disappointed •
. CINDY
sorry, Sheriff Duty.
. SHERIFF DUTY
Why don't you kids get to class?
Cindy and the rest. of the Students disperse to school •.
Behind sheriff Duty, Courtney rises to her wobbly feet,
•looking dazed.
.SHERIFF DUTY
(calling after the kids).
Violence never solves anything •••
He gestures with his police batpn_ to emphasize his point. 
I
SHERIFF DUTY
(cont'd}
We can talk things out ...
25.
WHACK! He unknowingly smacks Courtney over the kneecaps.
She doubles over, MOANING in pain.
SHERIFF DUTY
(cont'd)
••• without using our fists .•.
WHACK! He unknowingly smacks her in the face, knocking her
out again.
CUT TO:
INT - SCHOOL HALLWAY - DAY
STUDENTS crowd the hallway, talking and laughing with each
.other.
A banner on the wall reads:. ANNUAL HALLOWEEN PARTY -
ONE WEEK AWAY!
Another banner reads: . HEROIN SAFETY 'ASSEMBLY - HOW TO
HIDE YOUR TRACKS.
Skeet walks· Cindy to class.
SKEET
You o.k.?
CINDY
I'll be allright~
The bell RINGS.
PRINCIPAL FONZY comes down the hall, speaking into a
megaphone.
PRINCIPAL FONZY
(amplified)
EVERYONE BACK . . TO CLASS. COME ON
PEOPLE - NOW!
Skeet gives Cindy a quick kiss.
SKEET
Meet me at the quad after bio.
· He exits. Cindy ducks into the women's r~stroom. 
IN THE BATHROOM
Cindy stands at the mirror, and ·takes a hard look at
herself.
CINDY
(to her reflection)
You' ve got to be strong. You 've got
to be a survivor.
Two CHEERLEADERS, each sitting on the toilet in adjacent stalls, are unaware of Cindy"s presence.
'• '
CHEERLEADER #1.
Did you check out that Cindy Campbell. chick this morning? She so
creepy •••
Cindy OVERHEARS them, becoming visibly upset.
CHEERLEADER #2
I know.
FART!! FART!! The Cheerleaders let a few rip.
CHEERLEADER #1
Everytime I pass her in.the hall,
she fully weirds me out.
26.
SHIT! PLOP! SPLASH! The Cheerleaders move their bowels.
CHEERLEADER #2
Everyone thinks she's a loon.
SPRAY! SPLATERRRR11 One of the Cheerleaders HAS THE RUNS.
CHEERL:E;ADER #1
She's probably mental.
Tears well in Cindy's eyes from their harsh words, and
odors. She rushes ·out of. the bathroom.
IN THE HALLWAY
Principal Fonzy spots the tearful Cindy exiting the
bathroom.
CINDY
Principal Fonzy? 
t
I
t
'
I
•
t
' t
•
J
/'--'\
( '
\ ./ r---
,
I
PRINCIPAL FONZY
(still using megaphone)
WHAT'S WRONG, CINDY?.
CINDY
It's nothing, really~
I
PRINCIPAL FONZY
THAT'S O.K., CINDY, I THINK I KNOW
WHAT'S TROUBLING YOU.
CINDY
You do?
PRINCIPAL FONZY
YES. A WOMAN'S MENSTRUAL CYCLE IS A
.VERY PERSONAL AND. PRIVATE MATTER.
CINDY
Huh?
L I •
Cindy looks around to see a few. Student's now peeking their
heads out of classroom doors to gawk at her •
PRINCIPAL FONZY
THE DROPPING OF HER EGG AND
SUBSEQUENT BLOOD FLOW CAN LEAVE A
GIRL WITH MANY QUESTIONS ABOUT HER
BODY •••
Cindy slinks off down the hall, as Principal Fonzy wheels
around on the gawking students.
PRINCIPAL FONZY
'EVERYONE BACK TO CLASS - CINDY Is
PERIOD DOESN'T CONCERN YOU ••.
INT - CINDY'S BEDR90M - NIGHT
CUT TO:
Cindy, wearin9 a nightgown, sits on her bed studying.·
OUTSIDE
Skeet stands on the front lawn, looking up at her bedroom . window.
SKEET.
( whisper calls)
Cindy?_ Cindy? 
( \ No response. window.
He picks up a pebble and throws it at her
28.
TINK! The pebble bounces off the window, but there's still
no response.
SKEET
(louder) Cindy?
He picks up a rock and throws it at the window - THUD!
Still no response.·
SKEET
(yells)
CINDY!
Finally, he wheels over a medieval catapult, with. a boulder
loaded on it. He cuts the catapult release cord.
WHOOSH! The boulder hurtles through the air.
SMASH! The boulder CRASHES through the entire window
.frame.
IN CINDY'S BEDROOM
She is oblivious to the boulder which has CRASHED into her
room~
A moment later, Skeet climbs through' the window •
. CINDY
Skeet - you scared me.
(helps him inside) Don't worry, my dad's out of town.
SKEET
That's strange, your dad's always
out. of town.
·sKEET & CINDY
(in unison) . HIJlmnDil • • • • •
SKEET
Hey, what happened? Why didn't you
meet me at the quad?
She looks away. 
I.
CINDY
D~ you think I'm psycho?
He crosses his fingers behind his back.
SKEET
No, of course not.
(he rubs her shoulders)
You've got to relax. You trust me, don't you?
He kisses her gently.
CI~u1
I do •• • I ...
He sweeps her in and they kiss passionately. A beat.
, 29 .
He slowly lifts the sh9ulder strap of her nightgown, and
runs his fingers sensuously through her back hair.
He whispers softly in her ear.
SKEET
Your hair's so soft and silky smooth. What do you use?
CINDY·
(getting excited)'
Pantene Pro-V Formula. It's two in
one - a shampoo plus conditioner.
He lays her down on the bed as they continue kissing •. He
raises her nightgown and looks down.
, SKEET
That' s some camel toe.
CINDY
Thanks.
He reaches past her to the nightstand and holds up an
actual severed, stuffed camel's foot.
CINDY
My dad got it in Egypt.
He replaces the _foot, then strips down.to his boxers •. T~ey continue making out, and he rais·es her nightgown further to
rev~al her panties. · ·
CLOSE ON CINDY'S PANTIES 
I
/,--•··,\
! '
I-, ..,./
I
Inste~d of elastic, tiny barbed wire runs along the
perimeter. There's also a ZAPPING electrified fence and a
sign reading: NO TRESPASSING.
SKEET
I don't.know if I can take this
anymore. I mean, we've been going
out since we were freshman.
CINDY
I'm just not ready.
Frustrated, he gets out. of bed, wearing only his boxers.
He grabs a marker and goes to the mirror.
Like Matt Damon in "Good Will Hu_nting," he solves complex math equations on the mirror.
CINDY
Skeet, you always solve complex
mathematical equations when you get
upset - just talk to me.
Skeet erases the equation, then draws a picture of an eye~
They now play "Pictionary." - He draws furiously as she
tries to decipher his message.
CINDY
What is that, an eye? Oh, "I" .••
(he draws a magic wand)
•.• wand. I want ... (he draws a 2) ... I want to •••• . ( he draws a brake pedal)
.•• I want to break •••
(he draws an up arrow)
••• I - want - to - break - up.
His pictionary message sets in.
CINDY
You want to break up with me?
He doesn't answer. A beat·.
CINDY
I promise •••
(she moves closer) ... I'll come around. You just have
·to give me a little more time.
She takes his finger and puts it into her mouth, SUCKING
slowly on it.
'. , . - i'I
I ------------,
i
' I ------·
Jl.
He takes his finger out of her mouth - it's now three times
it's normal size and THROBBING.
CUT TO:
INT - HIGH SCHOOL - DAY
A banner reads: ANNUAL HALLOWEEN PARTY - 4 DAYS AWAY!
Cindy walks down the crowded hallway to her locker. She
opens it to reveal her locker is decorated with beefcake
teen heart-throb photos - LEONARDO DICAPFTO, BRAD PITT, AND
BILL CLINTON. .
She find a note inside.
The note reads: I KNOW WHAT YOU DID LAST HALLOWEEN.
She GASPS, ··completely freaked.
CINDY
I have to tell the others •••
CUT TO:
INT - BOY'S LOCKER ROOM - DAY
The FOOTBALL TEAM is gearing up for practice. As they strip down, we FOCUS on several naked butts.
First a muscular butt, then a sun-tanned bikini line butt,
then a ultra fat butt with crack hair and pimples.
ON JAKE'S LOCKER
He opens it to revea~ it looks like a medicine chest - bottles of every known prescription.
He looks around to make sure no one"s watching, then grabs
a syringe and fills it from a vial labeled ster<:>ids. ··
He plunges the needle into his arm, and immediately his
biceps. swells. to twice their size.
He then grabs Rogaine, and rubs it into his scalp. Finally, he grabs a bottle of Massengail Disposable douche,
and holds it up.
JAKE
(into camera)
For the days when I'm just not
feeling my freshest. 
:...,..
'
1.
I .
I J, \./ • I
32.
He lowers the douche between his legs as we •..
CUT TO:
EXT - FOOTBALL FIELD - DAY
As the PLAYERS come out of the locker for practice, Cindy looks for Jake.
He comes out, all suited up.
CINDY
Jake •••
JAKE
What do you want? I got practice.
She shows him the note.
CINDY
What do you make of this?
JAKE .
(examining note)
Hmmm ••• 8 1/2 x. 11. •. college ruled •.• three hole punch •.•
(looks up gravely) This is horrifying.
· CINDY
Now read it.
As he turns the note over and reads, his face goes white
with terror.
INT - SCHOOL AUDITORIUM - DAY
A banner reads: HOMECOMING . QUEEN PAGEANT. The seats
are ~illed with STUDENTS.
ON STAGE.
A dozen TEENAGE GIRLS, including Buffy, stand in front of
the audience.
Principal Fonzy addresses the crowd from the podium •
. PRINCIPAL FONZY
(into m.icr0phone) And that concludes the bathing suit
part of our competition. · 
. .(,,....-,
I ' \ ) '·~ ___ ,/.
JJ .
We FEATURE Cindy in the crowd, anxiously waiting to talk to
Buffy.
PRINCIPAL FONZY
Our judges have narrowed it down to
three finalists.
ON THE JUDGES TABLE
The judges are JUDGE JUDY, JUDGE WAPNER, and JUDGE
REINHOLD.· They hand a card to Principal Fonzy.
PRINCIPAL FONZY
(reading card) And our three finalists
are ••• Danielle; Heather ••• and Buffy 1
Buffy, Heather,. and Danielle hug each other excitedly as
the othe~ Contestants exit the stage to APPLAUSE.
PRINCIPAL FONZY
Now for the talent part of our
competition.
Buffy, Heather, and Danielle exit to change.
PRINCIPAL FONZY
First up is Heather, who will juggle
for us.
Heather strides out onstage, carrying juggling balls. She.
juggles the-balls, as· a STAGEHAND stands by.
The .stagehand tosses her an apple, which she.incorporates iQto·· her:•juggling, BITING. the apple as she juggles.
He then tosses her a chainsaw, a.blow torch; and finally, a
poodle.
POOI;>LE
Ruff!.
She incorporates all of them into her juggling.
She finishes to POLITE APPLAUSE.
PRINCIPAL FONZY
Thank you, Heather. Next up is
Danielle •••
Danielle strides onstage, dragging a bed of nails with her.
She lies down on the. bed of nails. 
)
.• . \ ,
CINDY
I checked the obituaries every day
after ••• that night. Some fishermen
found his body in their. nets eleven
days later. Half of him had been
consumed by a giant octopus.
48.
,She whips out another newspaper clipping -.this one with a
color photo of a giant octopus and two legs sticking out of
it.
CINDY
I think someone's getting revenge for what we did to him.
They're all freaked.
BUFFY
Shit ••• I knew we should've gone to
the cops.
QUENTIN
(to Buffy)
Are you for real?
JAKE
Yeah ••• you warited to cover it up
more than anyone.
BUFFY
Me?1
They all start to ARGUE violently,·pushing and shoving each
other. Finally. Cindy cuts through.
CINDY
I think I know who it is.
~hey all stop in mid""fight, posing in strangle, punching,
and kneeing poses.
CINDY
The paper said his only living relative was his twin brother, Tim
Tingle. I did some checking, he
works at the Marquee movie theater
downtown. I think we should go
there, check it out ·- see what he
.knows. Who's with me?·
. They all look down at their feet, WHISTLING, obviously not
wanting to .go. 
QUENTIN I •·11 go.
She looks disappointedly at Skeet.
CINDY
Thanks, Quentin.
49.
CUT TO:
EXT - MARQUEE MOVIE THEATER - NIGHT
The marquee reads: HORROR MOVIE FESTIVAL!
Dozens of TEENAGERS, wearing horror costumes, wait in line.
INSIDE
Cindy and Quentin stand in the lobby, looking around.
QUENTIN
Any idea.what he looks like?
CINDY
Receding hairline, beady eyes, buck
teeth •••
we PAN to-see she's looking at a picture over a plague which r_eads: "Tim 'l'ingle - Employee of the Month."
CINDY
Let• s separate.
QUENTIN
Good idea - there's safety in
numbers. _ ·. . . -- .. ; ,·
They separate • . Cindy approaches an USHER.
CINDY
Hi, do you know if Tim is working tonight? I'm his girlfriend and I
have something to tell him ••• _ (whispers conspiratorially)
••• gonorrhea.
The Usher takes a step back.
USHER
Upstairs_ - -in the_ proj·ection room. 
t
t
CINDY
Thanks.
She w~lks up the staircase.
UPSTAIRS
A long, dark hallway leads to 'the projection room.
Cindy, nerves on edge, walks slowly down the hall. Her
footsteps CREAK on the floorboards.
:~ow1 A CAT jumps out and startles her - "Ahl"
CINDY
(sighs in relief}
It's just a kitten •••
-She walks on slowly, completely spooked out.
so.
HOOT! HOOT! An OWL flies bY., startling her. She takes a
few more tentative steps.
SQUEEK! SQUEEK! SQUEEK! A nest of BATS fly around her
head, startling her.
CINDY
Ah!
She rushes down the hall and enters the projection room.
IN THE MOVIE THEATER
Quentin scans the rows of costumed audience members in the
dark theater • . . . ,.
He becomes distracted by the movie on screen, "Friday the
13th."
QUENTIN
Friday the 13th, my favorite •••
He takes a seat and watches the movie.
BACK IN THE PROJECTION ROOM
Cindy enters to find it's deserted. She looks around for
clues.
She looks at the books on the shelf - Killing on $2 a Day;
and Blowing Up the Bridges of Madison County. 
• I
I
I
~
I
I
! ,• '\
j)
,
I
t
-r
CINDY
Jesus Christ •••
We PAN to the corner, where JESUS CHRIST sits smoking a
cigarette •.
JESUS CHRIST
What?!
51.
Cindy snoops around, opening file cabinets, rifling through drawers, pulling down shelves.
Suddenly, ,=;he tu.ens to see a Xerox machine in the middle of
the room.
The Xerox machine is on, spitting out copies which all
read: I. KNOW WHAT YOU DID LAST HALLOWEEN.
Cindy grabs a flier, reads it, then drops it in horror.
She looks at a nearby table and GASPS •
On the table are every piece of concession merchandise.
available - T-shirts, baseball caps, coffee mugs, and
balloons - all with the same label: I KNOW WHAT YOU DID
LAST HALLOWEEN.
CINDY
I have. to warn Quentin •••
She rushes -out.
BACK ON QUENTIN
Still watching "Friday the 13th." On screen we see JASON,
wearing his trademark hockey mask,.· about ·to stab a victim.
Quentin n~dgEis~·the guy sitting next to him.
QUENTIN
This is the best part •• _.
The guy next to Quentin doesn't respond.
Quentin turns to see it's actually the KILLER, wearing the
CASPER MASK, sitting next to him •.
QUENTIN
AAHHH! ! 1
As Quentin SCREAMS in terror, so does the audience,
reacting to the movie. 
•
I
I
I
t
f
As JASON stabs an on-screen victim, the Killer STABS
Quentin.
Quentin runs bleeding down the aisle, the Killer in hot
pursuit.
QUENTIN
Help me!!!
52.
Quentin mounts the stairs and stands in front of the movie
screen, pleading to the audience.
QUENTIN
Help ••••
The Killer appears onstage, brandishing the knife. The
audience CHEERS them on, believing them to be pretending the parts that are on-screen.
Quentin backs away, terrified. He runs offstage, into the
adjacent theater, with the Killer in tow.
IN THE ADJACENT THEATER.
Quentin and the Killer rush onstage, in front of the movie
screen, which plays "Pulp Fiction."
on screen we see the famous scene where VING RHAMES gets butt-fucked by ZEKE.
QUENTIN
( looking at scene)
No •••• 1
He looks back at the Killer, who's UNBU~ONING HIS PANTS.~-
. IN ANOTHER THEATER.
Quentin hobbles out onstage, rubbing his now sore butt.
He and the killer are now in front of a screen which plays
"Titanic" - Leonardo's death scene. . .
Quentin and the Killer can't help themselves, they both
start WEEPING along with the audience.
Quentin hands the Killer a hankie, as they give each other
a: consol_ing hug. -
The• Killer blows his nose and dries his eyes; and the
pursuit ·continues.· 
IN ANOTHER THEATER
Quentin runs in front of the movie screen, which plays "Braveheart."
SJ.
He looks up at the screen in dread as Mel Gibson is about
to be disemboweled.
QUENTIN
Oh, shit ••••
The Killer appears onstage, brandishing his own meat hook.
AT THE BACK OF THE THEATER
Cindy rushes in and sees Quentin and the Killer onstage. She's the only one who realizes it's not an act.
CINDY
NO!!
She races to the front of the theater.
BACK ONSTAGE
Coinciding with the action on-screen, the Killer pulls out
Quentin's intestines, like a magician pulling an endless
rope out of a hat.
CINDY
Quentin!
Quentin collapses in a bloody heap as the Killer stands
over him.
ON TWO MOVIEGOERS
Watching the action.
MOVIEGOER #1
Whoa, they're really into it.
MOVIEGOER #2
Yeah, but the blood looks fake.
The Killer looks up to see Cindy rushing onstage.
CINDY
(to Killer) Oh my g~d - he killed Quentin! You
bastard! 
·,
j
/
The Killer fl~es offstage, and Cindy chases after him.
BEHIND THE SCREEN
54.
Cindy rushes offstage to find TIM TINGLE, standing there
with a knife in one hand, and a Casper mask in the other.
CINDY
Tim Tingle!
Tim quickly drops the knife and mask and escapes out the
emergence exit.
TIME LAPSE:
OUTSIDE THE MOVIE THEATER
The place is now a full crime scene - yellow police tape, flashing lights from the squad cars and ambulances.
Sheriff Duty directs the POLICE to dust for fingerprint_s, and SNAP crime scene photos.
A news van pulls up with Courtney Cocks and her Cameraman •.
Courtney surveys the scenee
COURTNEY
Let's go.
They grab their gear and exit the van.
ON A SQUAD CAR
Cindy sits in the back, wrapped in a blanket. She shivers,
obviously in deep shock. . r. ,·. a•.
Sheriff Duty stands by.
SHERIFF DUTY
Don't worry, we'll find him. I've
got all my men on it.
(beat) What were you kids doing here
anyway?
CINDY
we came •••
She looks at him, wanting to.tell him everything, but
knowing she can't. 
CINDY
(cont'd,)
••. to see the movie.•
He stares at her skeptically. A beat.
SHERIFF D~JTY
Right.
55.
The PARAMEDICS carry Quentin out on a stretcher, zipped up in a body bag.
Courtney Cocks swoops in to film the proceedings •.
SHERIFF DUTY
(to Courtney)
Get those camera's out of here •••
Behind him we see the Paramedics trying to load Quentin in
the back of the ambulance.
BAM! They miss the door, BASHING him against the fender.
Another COP hands Sheriff Duty a foamy cup of coffee, which·
he drinks.
COURTNEY
Aren't you a little young to be in
charge of a homicide investigation,
Sheriff?
He lowe~s the cup of coffee, revealing a milk mustache.
SHERIFF DUTY
I resent that.
EXT - KEVIN WILLIAMSON HIGH SCHOOL - MORNING
CUT TO:
A swarm of MEDIA has converged on the school. Dozens of
REPORTERS broadcast into camera.' s. Among them we FEATURE
Courtney Cocks.~
COURTNEY _ (mid-broadcast) This is Courtney cocks live from
Kevin Williamson High. Until his
young life was cut short, Quentin ·
Green wa$ a student here. He was
murdered last night by a man wearing
· this mask ••• 
She holds up a Casper mask.
COURTNEY
••• The suspect,· Tim Tingle, is still
at large. Tensions are high as
panic has set in at this once
peaceful high scho~l.
She grabs a passing STUDENT and interviews him.
COURTNEY
Are you worried that you could bethe next victim?
STUDENT -Not really. Police said they have _ the place pretty well protected and . uh... .
COURTNEY . And you bought that crap? He could
be anywhere, he could be stalking
you right now!
_The Student looks around, paranoid and scared.
STUDENT
You know, you're right.
He drops his books and runs off SCREAMING.
COURTNEY
(turns to camera)
As you can see, fear is rampant •••
56.
Skeet and Cindy pull into the parking lot in Skeet's car,
and the crush of media spots them.
They ru~h over ·to_the car with cries of "There she. isl"
Courtney grabs her Cameraman.·
COURTNEY
Let's go.
IN THE CAR
Skeet and Cindy watch as the media CLAMOR around the ca~,
BANGING on. the windows with cries of "Cindy! - Cindy1"
CINDY
Why can •·t they just leave me alo~e? 
. .
57.
SKEET
Hang on.
SCREECH! · Skeet floors it, and drives away from t-he media.
He looks in.the rearview mirror, and spots Courtney Cocks,
running behind the.car with h~r microphone.
As if she.were the Cyborg Cop in "Terminator 2," Courtney
runs with superhuman speed and catches up to the car.
She reaches out and STABS the trunk with her microphone, gaining a handhold, then uses it to pull herself onto the
speeding car.
She climbs over the roof and lays down on the hood, now
staring_through the windshield at Skeet and Cindy.
SKEET
Get off my car!
He makes SHARP TURNS, trying to get her off. She sticks
her microphone in Cindy's window.
COURTNEY
Cindy, give me an exclusive - I can
get you big bucks!
Skeet drives through the Driver's Ed.obstacle course,
trying frantically to shake her. He SCREECHES around the
orange cones, but still she hangs on.
COURTNEY
Come on, Cindy!
Cindy finally leans over and presses the wiper fluid
button.
·. Wiper· fluid shoots up . into Courtney's face •
COURTNEY
Ahh - my eyes!
She goes FLYING off the hood and lands with a THUD!
Skeet and Cindy drive to the back entrance of school - no
sign of reporters.
As they exit the car, Jake and Butfy approach.
INSIDE THE HIGH SCHOOL 
i ...
l
. ~ \
58 .
A banner reads: ANNUAL HALLOWEEN PARTY - 2 DAYS AWAY 1
The four teens huddle under a stairwell, out of ear shot.
CINDY
I can't lie anymore. I'm gonna tell
Sheriff Duty everything.
JAKE
You talk and I'll kill you myself.
SKEET
Hey!
· Skeet grabs Jake, who shrugs him off •.
JAKE
And that goes for all of you. I'll
take my chances with that psycho. If he wants a piece of me, he can
bring it on. But I 'aint going to
jail.
He stares them all down meaningfuliy.
JAKE
You got it?
They nod in silent intimidation.
JAKE
Now if you'll excuse me, I don't
want to be late for my Home Ee
class. Today we're making
loganberry scones.
The BELL. RINGS, and everyone goes their separate ways.
CU'I' TO:
INT - CLASSROOM - DAY
Cindy sit$ at her desk, looking pale and skittish - the
terror· and pressure are getting to her.
Her ENGLISH TEACHER is in mid-lecture.
ENGLISH TEACHER ..
Your choices for book reports include~ TO Kill A Mockingbird, The
Killing Fields, A Time to Kill,
Death of a Salesman ••• 
. I
I
I --~\
I I
\,,,,,./
\
I
59.
Cindy covers her ears - the room is spinning. She gets up ·and rushes out of the classroom.
ENGLISH TEACHER
Cindy? Cindy ••. ?!
IN THE HALLWAY
Cindy leans against a wall, hyperventilating. She catches
her breath and walks down the hall.
She turns a corner and •••
BOO! Not one but two CASPER KILLERS jump out at her.
Cindy SCREAMS in terror.
The two take their masks off to reveal they are STUDENTS,
playing a practical joke. _ They LAUGH at her.
CINDY
Real funny, assholes. You didn't
scare me.
We PAN down to reveal she is standing in a puddle of her
own urine.
PRINCIPAL FONZY
Hey - you two!_
Principal Fonzy comes up and grabs the masks out of the two
pranksters hands.
PRINCIPAL FONZY
(re: masks}
Is this your idea of a sick joke?
PRANKSTER #1
Well ••• yeah.
The .other pran'kster nods •
PRINCIPAL FONZY
Both of you are expelled - get out
of here.
The two pranksters_ jump up and give each other high-fives.
PRANKSTER #1
Allrigh~ - no school! ··
'I
I .
....---... \ I I
't .. ___ / PRANKSTER #2
Yeah, let's go get drunk and do some
vandalism •••
They walk off happily.
PRINCIPAL. FONZY
Cindy, I want to see you in my office.
INT - PRINCIPAL FONZY'S OFFICE - DAY
Principal Fonzy and Cindy enter.
PRINCIPAL FONZY
Cindy, I'm concerned. I know this
has been hard on you, but your
grades have been slipping, you've
been missing class ••. let's talk.
60.
CUT TO:
He leads her to a black leather therapists couch. She
reclines as he pulls up a chair behind her and takes out a
notepad.
PRINCIPAL F0NZY
What's bothering you?
CINDY
Well ••• I've had trouble sleeping at
night. I keep having the same
nightmare... · ·
. OISS0L-VE TO:
INT - A SLAUGHTERHOUSE - HER NIGHTMARE
In a parody of the Marilyn Manson video; "Sweet Dreams," we
see Cindy, dressed as Marilyn, and singing.
CINDY
(sings)
Sweet dreams are made of these •• • who
am I to disagree •.•
She wears Gothic makeup, jet black hair, and multi-colored
contact lenses. She rides a PIG with a saddle.
. CINDY (V .O.) ..
And just as I '.m singing and _riding
that pig ••• there ~omes Mom.
FADE TO.WHITE: 
I
-'
IN A DREAMLIKE SETTING
· we see different vignettes of Cindy and her mom, JOAN
CAMPBELL - mid JO'S, pretty, motherly.
ON A PLAYGROUND
61.
Joan pushes Cindy on a swing. They smile to each other as
Joan pushes her higher, and higher.
Joan pushes her too high, FLINGING her off the swing and
into oncoming traffic. o.s. we hear CRASH! as we fade
to •••
IN THE KITCHEN
Joan and Cindy bake together - pot brownies. We fade to •••
·INA ROCKING CHAIR
Joan.cradles Cindy, who breastfeeds·- at age 16. The dream
turns into a nightmare as we fade to •.•
THE KILLER
Standing over JOAN'S BLOODY CORPSE. Cindy SCREAMS, but no
sound comes out of her. mouth. Just as she tries to unmask
the Killer, her dead mother speaks:
DEAD JOAN
Cindy, don't take off the
mask ••• don't take off the mask •••
ON- ·CINDY
As she comes out of her dream.
CINDY
(cont'd)
•· •• don •t take off the mask ••• don •t
take off the mask •••
DISSOLVE OUT:
Behind her, Principal Fonzy is asleep - SNORING AWAY.
Suddenly, Sheriff Duty appears in the doorway.
CINDY
Sheriff. Duty? 
\
}
SHERIFF DUTY
Cindy, I'm going to have to ask you
to come with me.
62.
As they walk off, Principal Fonzy opens his eyes - he was
pretend sleeping. He puts on the confiscated Casper mask
and peers after them.
INT - POLICE STATION - DAY
Sheriff Duty leads Cindy into a lineup room.
SHERIFF DUTY . We picked Tim Tingle up just outside
of town. -we need you to make a
positive I.D.
IN THE LINEUP ROOM
CUT TO:
They stand behind a one-way mirror, looking through the
glass at a SUSPECT LINEUP.
Tim Tingle stands in the center, between five suspects.- A . FAT GUY, BLACK GUY' RED HEADED GUY' E_FFEMINATE GUY' and a
TALL GUY.
Sheriff Duty presses the intercom to talk to the suspects.
SHERIFF DUTY
(into intercom)
Step forward.
The suspects do. Cindy studies. them.
CINDY
I'm not sure, it happened so fast •••
SHERIFF DUTY
(into intercom)
Turn to the left.
The suspects turn in unison.
SHERIFF DUTY
(to Cindy) Take your time.
(into intercom)
Turn to the right.
The suspects turn in unison. A nearby COP turns up the
volume on his transistor radio. 
J..
63.
From the radio we HEAR Joe Cocker's IOYou Can Leave Your Hat
on."
JOE COCKER
(sings) Baby take off your clothes •••
The suspects begin to do a strip-tease, a la "The Full
Monty."
As.they dance and strip to the music, we reveal one guy wearing woman's underwear and garter belt, and another with
man-breas~s. ·
Finally, they're left standing in their underwear, gearing
up for the big finale.
As the song ends, they turn around in unison, and whip off
their underwear. They stand resplendent in the nude.
PANNING from behind the suspects, we see their bare butts.
CLOSE ON Tim Tingle's butt - the head of his penis pokes through as he has tucked his dick between his legs.
CINDY
That's him - number J. The one
pulling the "pagina."
SHERIFF DUTY
(to GUARDS) Take,him away.
GUARDS come from either side and escort Tim Tingle out. He
struggles against them, eerily staring right at Cindy
· through the glass. ·
TIM 'l'INGLE
I swear I didn •t do it! I was set.
up •••.
They lead him away. Cindy hugs Sheriff Duty gratefully.
CUT TO:
EXT - POLICE STATION - DAY
· Sheriff Duty ·stands on the front steps, talking to the.
·PRESS, who shove microphones and cameras in his face.
Courtney Cocks jost~es her way to the front. 
COURTNEY
Sheriff Duty, what can you tell us?
SHERIFF DUTY
Well I'm a Sagittarius, 26, born in
Rancho Cucamunga •••
COURTNEY
About the case?
SHERIFF DUTY
After a positive I.D., Tim Tingle has been arrested and charged with
murder. our community can now rest
easy - we've got our man. No more
questions •••
64.
He walks off, and Courtney puts down her mike and follows
him.
COURTNEY
(catching up)
I guess I was wrong about you .••
(flirtatiously) That's some police work.
SHERIFF DUTY
(shyly) Thanks.
COURTNEY
(seductively)
Maybe you and me could get together sometime and •••
SHERIFF DUTY
Go on a date?
COURTNEY
Well I was going to say "fuck,." but
I guess we could go out too.
They walk off together.
INT - CINDY'S BATHROOM - NIGHT
CUT TO:
Cindy sits at the edge of her bathtub, wearing only a
towel. She adds bubble bath to the running water.
She lights candles, incense, and a menorah.
. , I- I
I I
i I
j
She drops her towel and steps into the sudsy bath. She
leans back and gives a deep SIGH of relaxation •
. The. p~one RINGS, startling her. · She eyes the phone anxiously. RING. She picks up.
CINDY
Hello?
VOICE
Hello Cindy.
CINDY
(alarmed) Who is this?
VOICE
It's me, Skeet. You know, your
boyfriend?
65.
She SIGHS, then grabs a razor and leans back to shave her
legs.
CINDY
sorry. I guess I'm just a little
tired.
SKEET
Do you want me to come by? .
She shaves her armpits.
CINDY
No, I'm just going to take a bath
then go to sleep~
She shaves her face.
SKEET
O.K. Love you.
CINDY
Love you too.
She hangs up, then relaxes back into the tub, closing her
eyes in tranquility
BLOOP 1 BLOOP 1 Two of Cindy' s FART BUBBLES rise to the
surface o·f the water.
She is in deep relaxation. A beat. 
t
t
~ ~
The phone RINGS, startling her again. She picks it up warily.
CINDY
Skeet, I told you I;m just too
tired •••
, SCARY VOICE.
( from phone) Hello Cindy, miss me?
oo.
Cindy stands straight up in terror at the recognition of
the SCARY VOICE - it's the same one from the first scene.
The bubble's farm a perfect two-piece bikini over her,
including straps and a bow.
CINDY
But I thought •••
SCARY VOICE
That I was arrested? Wrong.
She listens in horror.
SCARY VOICE
I'm going to •••
CLICK! Her ."call waitingll SOUNDS.
A beat.
CINDY
That's my other line. can you hang
on a sec?
SCARY VOICE
O.K.
She CLICKS ov~r.
CINDY
Hello?
SCARY VOICE
Still me·.
CINDY.
Oh, sorry - hang on.
She CLICKS over. 
I I I
I.
I
CINDY
Hello?
SCARY VOICE
Me again.
CINDY
Hang on.
She CLICKS over.
CINDY
Hello?
SCARY VOICE
Yeah, uh ••• it's me. I'm still here.
CINDY
ununm ••••
SCARY VOICE
I could call.you back.
CINDY
·could you?
SCARY -VOICE
Yeah. But I'm still going to kill
you. Bye.
6 7 •
He hangs up. She l.ooks at _the phone in horror - it's not
over.
CUT TO:
EXT - HIGH SCHOOL FOOTBALL FIELD - DAY
It's the-big game - the MARCHING BAND plays to bleachers
packed with STUDENTS who watch the action on the field.
ON THE FIELD
A heated football game is underway, FEATURING Jake as the
home te~ quarterback.
He fades back and throws a pass over the middle. His
RECEIVER goes up for ·the ball~ ••. ·
CRUNCH! The Receiver is hit in mid-air and lands head
first on the turf •. He lies there· in pain as the HOME TEAM
CROWD holds it's breath in anticipation. A beat. 
68.
The Receiver finally gets up as the home crowd APPLAUDS.
As he trots off the field, waiving to the crowd, we see his
spine poking through his uniform.
ON TWO SPORTSCASTERS
Sitting behind a sideline booth, giving the play by play.
ANNOUNCER 1
What a game!
ANNOUNCER 2
You said it. It all comes down to
this play.
IN THE BLEACHERS
we FEATURE Cindy and Skeet, watching the game.
CINDY
(mid:...conversat-ion)
.•• I'm telling you I know that
voice.
SKEET
It's not him,-he's in jail. It was
probably just a crank call.
A VENDOR walks down the aisle with a concession tray around
his neck.
VENDOR
Peanuts! Hot dogs1 Candy apples!
A DRUG DEALER walks down another aisle, also with a
concession tray around his neck - only his contains
narcotics •.
DRUG DEALE'R
cocaine! Mushrooms! crack!
A STUDENT shouts out.
_STUDENT
I'll take a bag of crack!
The Drug Dealer tosses the Student a crack rock in a
plastic baqqie, as if he were tossing him a bag of peanuts.
BACK ON CINDY AND SKEET . 
69.
CINDY
You think I'm paranoid, don't you?
She nervously swigs a bottle of tequila and chain-smokes.
He exits.
SKEET
No, I don't ••• I'm going to get some
nachos, you want anything?
CINDY
No thanks.
BACK ON THE FIELD - IN THE HUDDLE
Jake pats a RECEIVER on the butt.
JAKE
Nice catch.
The Receiver turns and pats a LINEMAN on the butt.
RECEI~R
Nice block.
The Lineman turns and pats a RUNNI~G BACK on the butt.
LINEMAN
Nice ass.
IN THE BLEACHERS
Cindy looks around for Skeet, who's nowhere in sight.
BACK IN THE HUDDLE
JAKE
(giving play) weak side "I" formation on .. 3."
Ready - b:teak!
They CLAP hands and come to the line.
•. The BEEFY OFFENSIVE AND DEFENSIVE LINEMAN dig in against each other, SNORTING and GROWLJ;NG. We even HEAR the "Moo"
of a cow. ·
Jake lines up under the CENTER, and calls for the ball. 
I
I
t
70.
JAKE
Down! .•• Set! .••
Jake looks across at the defense.
To his horror, one DEFENSIVE LINEBACKER has the Casper mask
on - under his helmet1
The Killer has disguised himself as a football player,
right down to the number on his jersey - 666.
JAKE
(cont'd.)
••• Holy shit!
The Center shrugs, and hikes the ball anyway.
SMASH! The two lines COLLIDE, helmet to helmet. The
Killer rushes toward Jake but is BLOCKED by an OFFENSIVE
LINEMAN.
The Killer whips out his jagged knife, and the Offensive
Lineman immediately steps back.
OFFENSIVE
LINEMAN
(to Killer)
Hey, it's all you man.
The Killer now has a free path to Jake, and he runs
straight for him, brandishing the knife.
JAKE
Ahhh"!
ON THE SPORTSCASTERS ·
· ANNOUNCER 1
Number 666 is slicing his way
through those blockers.
ANNOUNCER 2
He really wants to kill the
quarterback.
IN THE STANDS
The home crowd· does the "Tomahawk Chop, " but instead of
styrofoam hatchets, they use styrofoam replicas of the
Killer's dagger.
ON THE MARCHING BAND 
t
Who now play the theme from "Halloween.·.,
BACK ON THE FIELD
71.
Jake looks over his shoulder to see the Killer now riding a
lawn mower, still in hot pursuit.
Jake runs into the opposing eridzone - scoring a touchback.
The Home Crowd "BOOS!" the touchback.
The Killer catches up to Jake.
JAKE
No ••• no ••• !
WHIRRRR!!! The Killer runs over Jake, sending his blood
and guts flying out the other side of the mower .
. ANNOUNCER 1
That' 11 make the highlight reel. ·
ANNOUNCER . 2
Let's see that again in slow motion!
JUMP CUT:
JAKE'S DEATH SCENE PLAYED AGAIN:
This time in slow motion.
In the background we see a: crew of GARDENERS with
leafblowers, cleaning up Jake"s remains.
BACK TO REAL TIME:
ON THE KILLER
Who celebrates the murder by doing an elaborate endzone
dance - a backflip, the splits, then a cartwheel.
TOOT! The Referee ·blows his whistle,- and _the Killer
escapes.
EXT - HIGH SCHOOL - NIGHT
CUT TO:
A candlelight vigil is being held - dozens of STUDENTS,
TEACHERS, and-PARENTS mourn.
we PAN across some STUDENTS holding candles, some flicking lighters, · then finally, some setting library books on fire. 
I.
.,
72.
Some hold signs which read: "WE'LL MISS YOU, QUENTIN,"
"REMEMBER JAKE," and finally' "LEGALIZE HEMP.".
Among the sorrowful crowd, we FEATURE Cindy and Skeet,
holding their own candles.
Courtney Cocks stands by with her Cameraman. She rubs an
onion in her eyes to manuf actu·re -tears.
CAMERAMAN
You're on.
COURTNEY
(into microphone) This is Courtney Cocks live from
Kevin Williamson High where a
candlelight vigil is underway for
students Quentin Green and Jake
Schroeder. Let's see if we can get
a word with one of the mourners •••
She interviews a nearby elderly man, MR. CURTIS.
COURTNEY
(to Curtis)
Excuse me sir, what's your name?
MR. CURTIS
Mr. Curtis, I teach math.
COURTNEY
What are your memories of Quentin?
MR. CURTIS
(heartfelt)
I had him in geome~ry. He used to
sit. in the back of class, pretending
to read his textbook, but I knew he
had a copy of "Jugs" between the
pages •••
· (sniffles a tear)
Forgive .me ••• I 'm gonna miss. that
horney little bastard ..•
He walks off in tears.
Courtney turns back into lens, and we now see a giant
herpes sore on her upper · lip •.. 
• J
I .
I
COURTNEY
(into lens)
Touching words from one of the many
grief stricken who've turned out
tonight. And yet underneath the
sadness, there still lurks a
widespread fear. The killing is not
over. ·
(spots Sheriff Duty) Sheriff Duty •••
She points .her camera and mike in his face •
COURTNEY
Are the killing"s related?
7 3.
Sheriff Duty turns to the camera, and we see he also has a
giant herpes sore on his upper lip, matching Courtney's.
SHERIFF DUTY
Yes. Charges were dropped against Tim Tingle, the suspect we arrested
yesterday. His alibi checked out.
Our investigation has led us to
believe· that whoever killed Quentin,
also killed Jake.
The cameraman turns the lens on Principal Fonzy, who
addresses the crowd of mourners.
PRINCIPAL FONZY
(solemn}
In honor of our departed students,
I'd like to share·a poem by a young
man who was also cut down in his
prime - the late rapper Tupac
Shaku-r.
He takes 9ut a cue card, and puts on his reading glasses.
PRINCIPAL FONZY
(reads through tears) "Told my mama if I die ••• Put a blunt
iil my casket, so my nigga's can get
high ... ".
ON CINDY AND SKEET
She;s so saddened that she loses it - she drops her candle
and rushes off. 
I
r
•
I
•
)
SKEET
~ey, hey - where are you going?
He catches up and grabs her.
CINDY
I can't live with this anymore. The
guilt, the pressure, the
diarrhea ••• rm going to confess.
She breaks his hold.
SKEET
Hang on!
She rushes off toward Sheriff Duty.
CINDY
Sheriff Duty, I need to talk to you.
It's about Time Tingle. Last
Halloween his brother •.•
SHERIFF DUTY
Tim Tingle' s dead •.
CINDY
What?!
SHERIFF DUTY
We executed him this morning. Lethal injection.
CINDI:
But he was innocent~·
SHERIFF DUTY
I'm not going to quibble over
technicalities •••
Skeet pulls Cipdy aside.
A beat.
SKEET
Listen, Tingle' s dead. He was the
only one who could've known about
it. The secret died with him. Just
let it go. We're the only one's who
know about it.
She looks up at him in dread.
74. 
f
t
I
t
,
CINDY
And Buffy.
They rush off, passing Principal Fonzy.
PRINCIPAL FONZY
(cont'd speech)
" ••• 'cause you'll always be my nigga
· fo • life ••• "
75.
CUT TO:
INT - SCHOOL AUDITORIUM - NIGHT
A banner reads: "!JOMECOMING. CEREMONY"
The audience is filled with STUDENTS.
ON STAGE
The three finalists - Buffy, Danielle,. and Heather wear
eveninggowns with ribbons ~raped across them.
Heather's ribbon reads: "Miss Universe" Danielle's
reads: "Miss Congeniality" Buffy's reads: "Miss
Fellatio" ·
The HOST - CHUCK WOOLERY, wearing a tuxedo, addresses the
crowd.
CHUCK WOOLERY
(into mic)
And this year's Kevin Williamson
High Homecoming Queen is •••
A DRUMROLL SOUNDS.
CHUCK WOOLERY
Buffy Michelle Geller!!
The audience APPLAUDS.
BUFFY
Oh my god - I won!
Heather and_Danielle hug Buffy in congratulations.
DANIELLE
Congratulations, Buffy~ · 
I
f
,
'
/-",
I\ ____ /)
HEATHER
Yeah, you deserve it.
BUFFY
I know you two are just being phoney bitches, but thanks.
76.
Chuck Woolery places a bouquet of roses in her hand, and a
tiara on her head.
He kisses her on both cheeks, then whispers in her ear:
CHUCK WOOLERY
Remember the deal. My place - one
hour.
He hands _her a· room key, then gives her ass a squeeze.
CHUCK WOOLERY
(sings)
Here she comes, Miss Kevin
Williamson High... .
She walks to center stage, blowing kisses and waiving-to the crowd.
The audience toss roses at her, then they toss rose vases.
SMASHl CRASHl She smiles and waives as the vases SHATTER
against her head.
BUFFY
Oh, thank you - thank you l
OUTSIDE
Cindy and Skeet run up and YANK on the auditorium doors - they're locked.
CINDY
It's locked.
SKEET
I'll go around the back, you wait
here.
He ·rushes off.
BACK INSIDE
As·.suffy stands in her moment of. glory, we PAN to the
wings. 
I
I.
,
I
t
r
I
•
•
IN THE WINGS
THE KILLER LURKS 1.. He holds a rope tied to a bucket
labeled: PIG'S BLOOD. The bucket is perched atop a
rafter directly over Buffy's head, a la "Carrie."
He pulls the rope, tipping the. bucket - SPLASH! ·
ON BUFFY
The pig's blood DOUSES her, as the audience GASPS. She
holds up her blood dripping hands and SCREAMS.
BUFFY
Aahhh! 1
She collapses in a chair. A beat.
7 7 •
SPLASH! SPLASH! SPLASH!' Three more buckets DOUSE her, like
Jennifer Beals in "Flashdance."
song "What a Feeling" UP as she jogs in place in a puddle of blood, trying to get it off her.
Terrified, she looks back to see the Killer in the wings, brandishing a knife.
BUFFY.
No ...
She crawls down the runway, swinging her head from side to
side - WHIPPING blood from her hair into the crowd.
The MALE members of the crowd throw $1 bills at her, as if
she was a stripper.
BUFFY
Someone please help me •••
OUTSIDE
Cin~y BANGS on the locked do~~-
CINDY
Open lip!
BACK INSIDE
Buffy crawls to the end of the stage, checking behind her
for :the Killer. She turns back around and SCREAMS!
She"s face.to face with the Killer-- he's in the stage
floor prompter pit. 
I.
78.
He grabs her arms and BAM! Bumps her head as he pulls her
under the stage.
BUFFY
(as she's dragged under) Nooe ••• !
The audience look around confused - where'd she go?
From under the floor, we HEAR the AGONIZING SCREAMS of
Bu_ffy getting slaughtered.
BUFFY
STOP ! HELP ! NO! AAHHlt' ••••
We HEAR the sounds of BONES CRUNCHING and FLESH TEARING.
The audience members, freaked out, head for the exits - but
the doors are all locked!
ON BUFFY_
As she staggers out of the pit. She's gushing blood from
her stab wounds like fire hoses.
The audience spots her and SCREECH in horror.
She opens her mouth and WHOOSH! - Blood shoots out like an
open dam. WHOOSH! WHOOSH! Blood spurts out of· her eyes,
nose, then ears.
Blood now shoots out of her in ridiculous torrents, making
her look like a HUMAN SPRINKLER.
The crow9_slips on her blood as they frantically POUND on
the locked. doors., The blood fills the auditorium, ankle
deep.
OUTSIDE
Cindy tries to pry the doors open with a crowbar, to no.
avail. She then puts on a welders mask and blowtorches,
and finally, a jackhammer.
suddenly, blood seeps through the door jam.
INSIDE
CINDY
'What the ••• ?
The place is now fiiled with blood, like a water tank.
Students-swim around, some even have scuba gear.
,
• I
I.
I
----- --------------- --------~
79.
BOOM! The doors finally BURST open, and blood floods out
in a big wave.
OUTSIDE
Blood.SPLASHES over Cindy as Students are washed out of the
auditorium. The auditorium drains, leaving Buffy to beach
on the front steps.
Cindy rushes to her.
CINDY
Buffy!
Buffy's a bloody mess - but STILL ALIVE.
BUFFY
(dying words) The Killer is •.•
Cindy leans in closer, and Buffy WHISPERS to her.
CINDY
Wait; I can't hear you ••.
Cindy takes off her walkman headphones.
CINDY
Buffy - who's the killer?
Buffy •.• Buffy •.• ?1
Just then, Skeet appears.
CINDY
Skeet, Buffy 's dead. Where have you .been?
SKEET
I was looking for the back entrance,
but ! ... couldn't find it.
She. looks past. him to see 3 FLASHING NEON "EXI'r" SIGNS.
She frowns suspiciously.
CUT TO:
EXT - CINDY'S HOUSE - NIGHT
Skeet and Cindy pull up. She looks at him a tense beat.
. ' 
I
I
t
d
I
t
•
CINDY
And then there were two.
·SKEET
Hey, it's gonna be o.k. I promise.
Just stay inside and lock your
doors. I'll pick you up in the . morning.
She exits. He drives off, his car radio BLARING Oingo Boingo's ltDead Man's Party."
80.
CUT TO:
INT - LIVING ROOM - NIGHT
Cindy's on the couch watching T.V., but all that's on is
late.night infomercials.
ON THE T.V.
PINHEAD, from "Hellraiser,". lies on a massage table as a
CHINESE DOCTOR performs acupuncture.on him.
PINHEAD·
Take it from ~e, Pinhead •••
He stands up, wearing just a.towel as hundreds of needles
stick out of his body.
PINHEAD
(cont'd.)
••• my muscles were tight and tense
until I found Shiatzu acupunctu~e; ••
Cindy changes the channel.
The phone RINGS, startling her.
apprehensively. ·
CINDY
Hello?
MR. CAMPBELL
( f ram phone)
She picks up
Hi, pumpkin. I heard about your
friends dying, thought you might
want to talk •
CINDY
Thanks., Dad.
.. -· _::,, ,•
• 1:,._. ••• -.. -...... -c 
,
'
,
t
)
•
)
,
I
r
I
~~\
\ ;
t ''--... .. ~~/
MR. CAMPBELL
You feeling allright?
CINDY
I'm not sure.
MR. CAMPBELL
How are you and Skeet doing?
CINDY
Fine ••• I guess.
She flips to another infomercial.
ON THE T.V.
LEATHERFACE, from "Texas Chainsaw Massacre," cuts through different human body parts with a chainsaw.
LEATHERFACE
The new bodycount buzzsaw from Black
and Decker does it all.· It cuts
through bone, cartilage, and
ligaments, and is; still" sharp enough
to slice a tomato. And if you act
now, I'll through in a salad
shooter •••
She changes the channel.
MR. CAMPBELL
You know •...
• ( struggling for words)
••.• your mother would 've been better
· about this but ••• I think it ' s time
we had that talk.
CINDY
oa-ad ...
MR. CAMPBELL
Now I know you"re modest ••• but . there ' s some things you should know.
You see the man's got a ... a ...
CINDY
Cock?
MR. CAMPBELL
( taken ab.ack)
Uh ••• that's right. And the woman's
got a ••• 
•
)
,
,
r
·-·..,.
;
ON THE T.V.
CINDY
Pussy1
MR. CAMPBELL
O.K ••• uh ••. yes, that's uh .•. correct.
So the man and woman •.• uh •.. uh •••
CINDY
(blurts out)
Bump uglies until the man busts a
nut?
MR. CAMPBELL
Boy, the things they teach you in
school.
Another infomercial plays. MICHAEL MEYERS, from
·"Halloween," models his hockey mask.
MICHAEL MEYERS
So that's why I use the hockey mask
by Remco. It's light, durable, and
comes in three fashionable colors.
White, fuchsia, and hunter.green •••
She turns it off.
MR. CAMPBELL
Well, whatever you decide to do with
Skeet, I trust your judgement.
Gosh, you"ve grown up so fast. I
guess you"re not daddy's little girl
anymore.
-'CINDY
Oh, Dad, I'll always be your little
girl. .
82.
CUT TO:
INT - CINDY'S BEDROOM - NIGHT
Cindy lies asleep in bed. Her door CREAKS open, waking
her. She rubs her eyes and squints to see who• s there •
CINDY
Dad, is that you?
A SHADOWY FIGURE approaches. 
I
•
r
I
Y\
(, ... , ____ ,,,.,)
CINDY
Dad ••• ?
She turns on the lights to reveal - IT'S THE KILLER!
CINDY
(screams)
AAHHHH!
83.
She jumps out of bed as· he lunges at her with a knife. She
grabs an endtable, and fends him off like a lion-tamer.
CRACK! She SNAPS a whip at him.
CINDY
Get back! Get back!
The Killer GROWLS at her as he STABS at the endtable, sending wood chips everywhere •
.
The sawdust clears to reveal the endtable's now carved into·
Rodans' "The Thinker."
She runs off into the kitchen, with the Killer in pursuit.
IN THE KITCHEN
She dumps out a drawer filled with kitchen utensils.
CINDY
Nooo ••• 1.
She picks up a knife and throws it at the Killer, who
ducks.
MEOW! The knife misses, but STABS her CAT, pinning it to
the wall.
CINDY
·Ohno, Fluffy!
She 'looks through the.remaining utensils-· no knives. so
instead she throws a spatula, turkey baster, and an~
beater at the Killer.
They miss, but stick into the wall behind as if they were
knives. She cowers as the Killer raises the knife over _ her.
CINDY
Don't •.••• 
I
' 84.
Just as he's about to stab her, she TOSSES a glass of water
at him - SPLASH! She throws a plugged in toaster at him, hitting his now wet clothes.
ZIP! ZAP! ZEE! Electrical JOLTS shoot through the Killer's
body, causing him to convulse and gyrate.
HIP-HOP MUSIC UP. The Killer's twitching body starts
break-dancing in time to the beat. ·
ZIP! ZAP! The JOLTS cause him to do elaborate hip-hop
moves: He does the WORM, POP-LOCKS, and even WINDMILLS ON
· HIS HEAD.
Finally, he collapses dead. Cindy approaches the body
slowly, then reaches down and.takes off th~ mask •••
THE KILLER IS ••• COTTON BLEND.
CINDY
{gasps) Cotton.Blend!
EXT - CINDY'S HOUSE - NIGHT
CUT TO:
The place is now a full crime scene - COPS, MEDIA, etc.
Sheriff Duty stands .with his arm around Cindy, addressing . the PRESS.
SHERIFF DUTY
Thanks to the heroics of Cindy here,
the serial murderer was killed. Our
community can now rest easy - we've
got our man.
Courtney Cocks jostles for position.
COURTNEY
· Didn "t you say that last time?
SHERIFF DUTY
Yeah, but ••• this time I really mean
it.
Courtney turns to her cameraman. 
,
I
I '
I
COURTNEY
(into lens)
And there you have it. In an ironic
twist, Cotton Blend, the man who
murdered Joan Campbell, was killed
by her daughter, Cindy Campbell.
This is Co~rtney C~cks, signing off.
Remember, .1.f it's murder, kiddieporn, or animal husbandry, I'll
bring you the story first.
85.
FADE OUT
. Superimposed: OCTOBER 31, 1998 - HALLOWEEN
FADE IN
EXT - SUBURBAN HOME - NIGHT
The house is decorated for Halloween - jack 'o lanterns~
orange and black streamers, etc.
Dozens of cars are parked haphazardly on the lawn as
TEENAGERS enter the house party.
Skeet and Cindy enter.
IN THE HOUSE
A raucous party is in full swing - loud music, dancing, drinking ••• ·
ON THREE DRUNKEN DUDES
one chugs a beer, then CRUNCHES it against his forehead •.
The next chugs a bottle, then SMASHES it over his own head·.-
The third finishes off a keg, then CLANGS! it into his own
head, KNOCKING HIMSELF OUT.
SKEET
What a party.
CINDY
Yeah.
(a beat) I'm feeling like I finally have
closure. That everything bad' s
behind me. And it• s amazing that
all the killing ended with still 20
minutes left.in the movie.
They pass one GUY, snorting a line of coke. Another GUY
dumps· ou-a a line ·of Comet Cleanser, and ·snorts it. · 
I
I
t
, .
I
I
t
'
' ..
~\
I ,\ _______ ./ .
,
I
.•.
CINDY
Skeet,·. I'm sorry I ever doubted you.
Throughout all of this, you've been
there for me.
SKEET
Hey, I love you.
CINDY
And I love you.
(whispers in his ear) And tonight r•m gonna prove it •
86.
She takes his hand and leads him upstairs • They pass a
GIRL, who's beer-bonging. Just as she drains the beer out
of the funnel, . a DRUNKEN DUDE, about to vomit, UPCHUCKS . into the funnel.
PARTYGOERS
CHUG! CHUG! CHUG!
She drinks down the now chunky beer.
UPSTAIRS - IN THE BEDROOM
Skeet and Cindy lie on the bed, making out. He gets her
bra off and looks at her breasts.
SKEET
Wow, a superfluous nipple - how
sexy. \ •
ON HER BREAST
With not one, but two nipples.
They continue to makeout. He tries to take off her
panties, but struggles.
CINDY
Here, let me •••
His eyes gleam with heated anticipation as she lowers·her
panties •••
POOF,! Her enormous BUSH OF PUBIC HAIR fills the screen.
We HEAR the primitive sounds of the CALL OF THE WILD
emanating from her untamed forest.
He whips out a machete an~ THWACK! He SLASHES at the bush~·
He pulls back the blade to find it•s dented - he needs
something stronger. 
r\
I.
87.
He puts on protective goggles and FIRES UP a weed wacker.
WHIRRRRRR! He trims her bush, as pubes fly everywhere.
He gets on top of her,· ·kissing his way down below the
border •••
Cindy arches her back and MOANS in delight. A beat. Skeet
comes back up, now wearing full scuba gear - tank, snorkel
mask, fins.
He takes his mask off, and liquid pours out.
CINDY
I love you.
SKEET
I promise ••• I'll try not to
prematurely ejaculate.'
He mounts her and thrusts in.
CINDY
(surprised) That's not it.
SKEET
sorry.
He thrusts in again.
CINDY
Still not it.
He finally gets it right, and they make beautiful. love.
CINDY
Oh, Skeet, you've unleashed the
woman in. me •••
She climbs on top of him, and rides him hard. His smile
turns to a frown as she rides him harder, and harder,
really getting into it.
DOWNSTAIRS
The PARTYGOERS look up as the ceiling THUMPS, CRACKS, and
CRUMBLES from the action in the bedroom. ·
BACK IN THE BEDROOM
Skeet hangs on for dear life as Cindy sits on him, spinning
around on him like a HUMAN SIT-'N"-SPIN. 
CINDY
Weee! Weee ..•. !
oo.
TIME LAPSE:
ON CINDY
Sleeping in bed. She wakes to· find Skeet's gone.
CINDY
Skeet?
She gets out of bed, and puts her clothes on.
CINDY
Skeet?
She ventures down the hall.
CINDY
Skeet •.• where are you?
DOWNSTAIRS
Cindy descends the stairs and SCREAMS ~t what she sees.
CINDY
AAHHH1
EVERYONE AT THE PARTY HAS BEEN KILLED!
One is- hanging by a noose, one is. fried in an electric
chair, another is guillotined, while another is stretched
on a medieval rack.
Cindy walks terrified through the bodies. She spots SKEET
- LYING DEAD IN A POOL OF BLOOD.
CINDY
Skeetl 1
She looks in horror to see her DAD - also lying there dead.
CINDY
No, not Dad!
She WEEPS in terror over the bodies. Among them we FEATURE
Principal Fonzy, who's also been killed.
RING! RING! The phone RINGS, startling her.
~he eyes the phone-with mounting dread. 
y--\
\ i •'--... --//
CINDY
(picks up) H-hello ••• ?
SCARY VOICE
(from phone)
Guess who Cindy?
She collapses in a SOBBING heap, clutching the phone.
SCARY VOICE
Tonight you' re going to die.
89.
CLICK. He hangs up. Sca~~d, she looks wildly around, but
the Killer's nowhere in sight.
Suddenly, above her we now reveal the Killer, lowering himself down silently behind her from a ceiling beam.
CRACK! The beam SNAPS and the Killer clumsily drops to the
ground with a THUD!
CINDY
AAHHH!
She dashes off down the hall,· with the Killer giving chase.
She runs and hides in a closet.
IN THE CLOSET
Like Jamie Lee Curtis in "Halloween," she cowers in the
corner of the closet.
THWACK! SPLINTER! The Killer HACKS at the closet door, as
Cindy SCREAMS~
·Thinking quic~ly, she grabs a moo-moo and throws it over
his head, blinding him.
She uses the distraction to dash past him, but before she
gets away, she stops in her tracks.
CINDY
No - that's it.
running, I'm not
victim anymore.
I'm tired of
going.to be the
She turns and f ac.es the Killer.
CINDY
come o~, whoever you are, let's go. 
90.
They square off like two boxers. She raises her dukes - BAM! She SOCKS him in the eye, and we now see a black eye
over his mask.
SLASH! The Killer SWIPES at he'r, cutting her arm.
CINDY
You sonofabitch!
BAM! She kicks him so hard in the ass, he actually COUGHS
UP her high heel shoe.
They squat like Sumo wrestlers, GRUNTING and CHALKING upa their hands. They BUMP bellies. '. . . . .
From behind, we see the Killer's cloak is cut out to reveal
his sumo-thonged butt.
SLASH! He cuts her again, in the other arm.
CINDY
I'm gonna beat the shit out of .. you.
PUNCH! KICK! SOCK! She throws a vicious combo at him.
Behind the Killer, fecal matter SPLATTERS against the wall.
She looks around for a weapon.
ON THE W"-LL
An ~ in a glass case, with a label reading: "IN CASE OF
FIRE -. BREAK GLASS"
Another case, also containing an axe, but this label
reading: "IH CASE OF HOMICIDAL MANIAC - BREAK GLASS"
SMASH! She breaks the glass, and grabs the axe.
The Killer raises his knife, but she's quicker with her
axe.
CINDY
This is for my mom •••
THWACK 1 She hacks off the Killer's right arm. Undaunted
by the spewing stump, he lunges again.
CINDY
This is for my ~ad •.•
THWACK! She hacks. off the Killer's left arm. Now armless,
· he charges her.
i
i
i I.,
.; 
91.
CINDY
This is for Skeet ..•
THWACK! She hacks· off the Killer's right leg.. Now HOPPING
on one. leg, the Killer lunges again.
CINDY
And this is for everyone else you·
killed, and for world peace •••
THWACK! She hacks off the Killer's last leg, leaving him
just a torso and head.
Unfazed by the loss of limbs, the Killer sccnTs at her.
Just as she"s about to off him, he TEETERS back, and
TUMBLES down the staircase.
DOWNSTAIRS
The Killer lands at the bottom of the stairs, lying
unconscious. Cindy follows, and again raises the axe to
finish him.
Suddenly, TWO ARMS grab her from behind - it's Sheriff
Duty.
- SHERIFF DUTY
Cindy, he's dead. - It's over.
He takes the axe out- of her hand. She's in shock.
SHERIFF DUTY
It's o.k., it's over.
EXT - HOUSE - NIGHT
TIME LAPSE:
The place is now a huge crime scene - COPS, MEDIA, etc.
Of course, Courtney Cocks is on the scene, broadcasting.
COURTNEY _ (into camera) This is Courtney Cocks, coming to
you live with this breaking,
shocking, exploitative,
sensationalized news •••
ON C~NDY AND SHERIFF DUTY
He consoles her as ·the CORONER wheels the Killer out in a
bodybag. 
SHERIFF DUTY
(to Coroner)
Hold it.
The Coroner stops.
SHERIFF DUTY
(to Cindy)
Don't you want to know who the
Killer is? ·
A long beat. Her MOM'S VOICE echoes in her head - "Cindy, don't take off the mask, don't take off the mask ••• "
No.
CINDY
SHERIFF DUTY
(to coroner)
Get him out of here.
Cindy watches distrustfully as the Coroner wheels the body
to the Coroner's van.
Suddenly, she lunges for Sheriff Duty's revolver, and yanks
it from his holster.
CINDY
(waiving gun)
Everyone get backl
All COPS draw their guns, then train them on Cindy.
SHERIFF DUTY
· Cindy, put the gun down! You don ' t
want to do this.
CINDY
I have to.
She grabs Courtney Cocks and puts the gun to her head;
holdin_g her hostage.
· COURTNEY
Please don't •••
( to cameraman)
••• keep rolling.
The Cops move in, Cindy COCKS the gun. 
I.
CINDY
Everyone get back or I'll kill her!
COURTNEY
Please, Cindy, don't hurt me •••
(to cameraman)
••• you getting all this?
I
SHERIFF DUTY
Just put the gun down.
CINDY
No.
SHERIFF DUTY
Then you leave me no choice.
(turns to Cops)
FIRE!
COURTNEY
Huh?!
BLAM! POW! BLAST! All Cops OPEN FIRE - mistakenly shooting Courtney with a hail of bullets.
SHERIFF DUTY
Hold your fire!
93.
They stop. Courtney drops to the ground, bullet ridden and
bloody. Cindy, unharmed, runs to the van where the Killer
lies in a bodybag in back.
VROOM! Cindy hijacks the van, PEELING OUT down the road.
ON COURTNEY COCKS
As she lies bloody and dying. · Sheriff Duty kneels by her,
cradling her head tenderly.
SHERIFF DUTY
aan:g in there, kid, you're going to
make it ... (looks her over) . ••• they missed all your vital
organs.
The cameraman puts down his camera and also kneels by her,
with ~ears in his eyes.
COURTNEY
( to cameraman) ·
Keep rolling, you bastard, this is
gold. 
She turns to Duty.
COURTNEY
Kiss me •.•
(she coughs up blood)
•.• kiss me one last time •••
He leans down and kisses her blood-filled mouth.
9-L
CUT TO:
EXT -DARK AND WINDY ROAD - NIGHT
Cindy speeds down the road in the van, with the bodybag in
the back. She winds along the steep cliffs passing a sign which reads: Dawson's River.
She looks in the rearview mirror, to see the bodybag·
SQUIRMING - The Killer's still alive!
Just then, the Killer UNZIPS the bodybag with his mouth.
He lunges over the seat, trying to bite her jugular.
CINDY
No· •••• 1
SCREECH! She SLAMS on the brakes, sending the Killer
SMASHING through the windshield.
He lands in the road, 10 feet in front of the van.
CINDY
Come on, get up ••• get up •••
The Killer rears up on his torso - Still alive!
She jams it into gear and FLOORS IT·- SMACK! . She RAMS him.
She throws it in reverse and CRUNCH! - rolls over him.
She repeats this until he lies motionless in the road.
Satisfied that he's dead, she collapses against the
steering wheel, exhausted.
THUD l . Cindy looks up to see that the Killer has jumped
onto the grill of the van, holding onto the hood ornament
with his mouth - Still alive!
CINDY
No,. no •••
She.jams it into gear and aims it for the edge of the
cliff. 
.  .. -~ ..... ---- ---------------
CINDY
Aahhhh •••. 11 !
95.
She drives off the edge, and th~ van goes CRASHING down the
side of the cliff with the Killer still on the hood.
ON THE ROCKS BELOW
KABOOM!!! The van lands in a fiery heap, EXPLODING on
impact.
Cindy is thrown from the van, landing on the rocky shore.
Cindy is battered, bruised and generally fucked up.· She
approaches the Killer, who's pinned under the smoldering
van.
The Killer lifts his head - HE'S STILL NOT DEAD!
. She stares at the masked Killer.
'CINDY
I have to know. I have to know who
you are.
She unmasks the Killer to:reveal that it's ••• MARTHA
STEWART!
CINDY
Martha Stewart?! But why?
MARTHA STEWART
I'm trying to change my image.
In a twist, Cindy realizes this .too is a mask. She pulls
off the Martha Stewart mask to rev~al the real- killer
is ••• JESUS CHRIST!
JESU.S CHRIST
Got a smoke?
Cindy realizes this. is also a mask. She pulls off the
Jesus· mask to reveal •••
CINDY
(gasps)
Mom?!
THE TRUE XILLER IS JOAN CAMPBELL - HER MOTHER!!
' .. 
CINDY
But I thought you were dead.
JOAN CAMPBELL
Only clinically. You all buried me
alive.
96.
Cindy takes a step back, reeling with the horrible truth.
- JOAN CAMPBELL
I came back to take my revenge.
CINDY
What about Tim Tingle, Cotton
Blend ••• ?
JOAN CAMPBELL
My lovers.
CINDY
_Slut!
JOAN CAMPBELL_
Watch your mouth, I'm still your mother. ·
CINDY
sorry, Mom.
JOAN CAMPBELL
My revenge was almost complete. You
were the _last. ••.
Tears well in Cindy's eyes.
CINDY
Oh, Mom~ ••
She picks up an~ and raises it over Joan's head.
CINDY
~· see -you in hell. •.. ..
THWACK! She lops off her mom's head.
Superimposed: ONE YEAR LATER
FADE- IN
- . INT- COLLEGE DORMITORY - DAY
FADE OUT 
...
97.
IN THE GIRLS BATHROOM
Cindy enters, wearing a towel, and turns on the hot water.
in the shower stall.
Steam envelopes the room.
She walks to a mirror, and takes a hard look at herself.
CINDY
(to her reflection)
You survived. You're a survivor •••
A beat.
She drops her towel, revealing a 12" PENIS dangling between
her legs, like Dirk Diggler in "Boogie Nights."
As the steam parts, she sees a message wr~tten on the
mirror:
. I STILL KNOW WHAT YOU DID LAST. HALLOWEEN • ••
Cindy SCREAMS in horror.
ROLL END CREDITS
FADE OUT
JI
j I
.' ' ) I
'
: I
: l `)
  .then((e) => console.log(`Código finalizado, ${e} mensagens enviadas`))
  .catch(console.error);
