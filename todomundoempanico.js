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

enviarScript(`EXT DREW'S HOUSE � NIGHT

Modest home on the outskirts of town where no one can hear
you scream, HALLOWEEN NIGHT.

INT. DREW'S KITCHEN � NIGHT

CLOSE ON YOUNG HOLLYWOOD STARLET, A LITTLE ADORABLE SEXPOT
WE WOULD ALL LOVE TO SEE KILLED FOR THIS SCENE.

She grabs a tin skillet of "Jiffy Pop" and puts it on the
lit stove.

PHONE RINGS.

She answers.


DREW
Hello.

A raspy male voice with a southern accent familiar to most
Americans.

V.O. BILL
Hey baby, what are you wearing? 
I got a new box of cigars I want
you to�

DREW
Hi Bill.  Look, I can't talk right now.

V.O. BILL
Aw, come on.  It took two bottles of
Wild Turkey to get Hillary to sleep. Can't
you just talk for a minute?

DREW
I'm sorry.  I can't.  I got company coming
any second.

V.O. BILL
Alright, well give me a kiss.

She blows him a kiss.

V.O. BILL (CONT'D)
Remember baby, who's yo daddy!

A long tongue comes through the phone and licks her face.

She slams down the phone.

DREW
Pervert.

Phone rings again.

DREW
Look Bill, I told you�

SCARY VOICE
Who's Bill?  Is that your boyfriend?

DREW
Who is this?

SCARY VOICE
Tell me your name and I'll tell you mine.

DREW
I don't think so.

SCARY VOICE
What's that noise?

DREW
Oops, I farted, I didn't think you would hear me.

SCARY VOICE
No, that popping noise.

DREW
Oh, I'm making popcorn.  I'm getting ready to
watch a video.

SCARY VOICE
Really?  What's it called?

DREW
Big black jocks� it's my favorite.  There's this
guy in it, Jimmy dang a lang.  He's hung like�

SCARY VOICE
What about scary movies?  Do you have a favorite?

DREW
Oh.  Uhh� The one where the girl gets
harassed on the phone.
(she passes a "Scream" poster)

A beat.

SCARY VOICE
You have a nice voice, and you look
good in that tight blue sweater.

DREW
(frightened)
Oh my God!  You can see me?  I haven't even
finished putting on my make-up!

She hangs up, runs to a mirror, starts fixing her hair and
puts on lipstick.

Phone rings.  She doesn't answer.  It stops.  Suddenly her
pager goes off.  Page reads
"Killer 911".  Drew screams.  Then the computer voice says
"You have a threat."

Phone rings again.  Drew answers.


SCARY VOICE
Don't ever hang up on me again!

DREW
What do you want?

SCARY VOICE
To see you split up the middle.

DREW
Sorry, I don't do G-strings.

She hangs up.  The phone rings immediately.

DREW
Look you asshole.  My boyfriend's gonna
be here any second, and he plays football, and
he'll kick the shit out of you.

SCARY VOICE
Oh, really?  Turn on the porch lights.

Drew turns on the porch light.

We see a TEENAGE BOY strapped to a chair, his mouth covered
with duct tape.

DREW
That's not my boyfriend.  I fucked him a
couple of times.  But that's all.

The lights go out.

DREW
Look, I'm calling the cops.

SCARY VOICE
You might want to check the back door
first. You forgot to lock it.

She screams and drops the phone in horror.  She races to the
back door.

EXT. DREW'S BACK DOOR � NIGHT

We see a SHADOWY FIGURE also running to the back door.

INT. DREW'S BACK DOOR � NIGHT

She gets there one step ahead of the shadowy figure and
locks the door, then chains it,
then puts "The Club" over the doorknob.

Drew backs away from the door in terror.  The figure
disappears.  The suspense
mounts�

DING DONG!  The doorbell.  Drew is frozen in fear � who is
it?

She punches 9-1-1 on her cordless, then puts the receiver to
her ear.

SCARY VOICE
(from phone)
Aren't you going to answer the door?

DREW
Please�stop�

SCARY VOICE
What's the matter, Drew?  Not having fun
anymore?

DING DONG!

SCARY VOICE (CONT'D)
Answer it.

DREW
No�

SCARY VOICE
It could be your friends.  It's been ten minutes.

INT./EXT. DREW'S FRONT DOOR � NIGHT

She moves to the front door slowly, then grabs a baseball
bat out of the hall closet.

DREW
(gripping bat)
I'm not afraid of you�

SCARY VOICE
Then open the door.

She raises the bat, then closes her eyes and flings the door
open.

With eyes still closed, she flails away with the bat.


DREW
TAKE THAT YOU PSYCHO!!

BANG!  THUD! CRUNCH!  She connects with several swings.

She opens her eyes to find three LITTLE TRICK OR TREATERS,
now lying knocked
out on the front porch.


DREW  (CONT'D)
Oops�

She apologetically tosses the children candy, which only
lands uselessly next to their
broken arms.

The children GROAN in pain as she closes the door.

LITTLE BOY
I can't feel my legs�

INT. DREW'S FRONT DOOR � NIGHT

Drew locks the door.  As she turns, we see the KILLER �
right behind her.

The Killer has on Scream attire.

He raises a wicked looking knife and creeps up behind her.

KILLER
Hello Drew.

Drew freezes in her tracks � it's the same scary voice from
the phone..

She turns to see the Killer and SCREAMS!

Drew takes off running, the Killer in pursuit.  She goes out
the front door.

EXT. DREW'S FRONT YARD � NIGHT

Killer follows her at the casual horror movie pace.

Drew sees a sign.  It reads:  SAFETY (Left arrow),  DEATH
(Right arrow).  She runs to
the right.
Drew running.  She stumbles.

NEW ANGLE � REVEAL SHE"S LAYING IN A PERFECT CHALK OUTLINE
OF
HER BODY.

The killer is right behind, still walking at a casual pace.

Drew looks over her shoulder.  No matter how fast she runs,
the killer keeps getting
closer.

Reveal Drew is on a treadmill.  It stops.  She checks her
pulse, takes off running.

Killer catches up.

The Killer grabs her sweater.  She slips out of it exposing
her bouncy bra clad breasts.

The chase continues.  The Killer grabs her skirt.  She slips
out of it.

Drew, in full sprint, in only a bra and panties, her hair
short and wild.  The sprinklers
come on spraying her with water.

SLOW MOTION DREW RUNS THROUGH THE WATER.

Drew looks seductively at the camera as she shakes the water
from her hair, continuing to
seduce the lens as she caresses her breasts and runs her
fingers through her hair.

Back to normal, the Killer closes in.  He grabs her around
the neck, raises his knife,
plunges it into her chest.

A LOUD POPPING SOUND.

CLOSE ON KNIFE AS IT PULLS BACK.  ON THE END OF IT, A
LEAKING
BREAST IMPLANT.


Drew, wounded, continues to run with one deflated breast,
the other normal.

Drew sees headlights in the distance.  She runs towards the
car.

The killer wipes the implant off his knife and gives chase.

Drew standing on the road waving her arms at an oncoming
car.


DREW
Daddy, mommy, help!  Help me!

EXT. DREW'S HOUSE/ROAD � NIGHT  (CAR)

DAD is driving, obviously not paying attention to the road,
slams into Drew, sending her
flying.

MOM pops up from DAD'S lap.


MOM
Did you hear something?

DAD
Nah, I didn't hear nothing.


He pushes her head back down into his lap.

Drew, lying on the road semi-conscious, the Killer standing
over her.

The Killer kneels and straddles her.

CLOSE ON THE KNIFE.  IT STRIKES THE FATAL BLOW.

INT. CINDY'S ROOM � NIGHT

Cindy typing on her computer, a noise outside her window.

Cindy looks at her window.

Theme music from Dawson's Creek plays as a MALE CAST MEMBER
climbs through
the window.

Cast member realizing he's in the wrong place.


DAWSON CAST MEMBER
Sorry, wrong set.

He leaves through the adjacent window.

Enter Bobby.


CINDY
Bobby, what are you doing?  My dad's in
the other room.

BOBBY
It just occurred to me I never
climbed in your window before.

CINDY
Well, now that you got it out of
your system�

SUDDENLY

The bedroom door bursts open.  The doorknob catches on the
open closet door jamming
it, holding it in place.

Cindy's dad looks through the partially opened door.


DAD
What's going on in there?

CINDY
Can you knock?

DAD
I thought I heard screaming.

CINDY
No, you didn't.

DAD
Must have been those 'shrooms I
had earlier.  Look, I gotta leave
town.  A recent business venture went
bad, some money came up missing.  I
gotta lay low for a while.  If a
man named Tito calls, tell him to page
me.  If they raid the place�

CINDY
I never heard of you.

DAD
And don't forget�

CINDY
�to flush your stash.

DAD
If you need some money, I left a
little something in the coffee can. 
Be sure to cut it or somebody's gonna
O.D.

CINDY
Have a good trip.

DAD
Sleep tight sweetie.

Cindy closes the door.

CINDY
That was close.

BOBBY
I was home watching "The Exorcist", and
it got me thinking of you.

CINDY
If this is about the time I puked green
slime and masturbated with a  crucifix,
it was my first keg party.

BOBBY
No, the movie was edited for T.V.  All
the good stuff was cut out.

CINDY
So you thought you would just climb
through my window and we would play bump
bump?

As they talk, a YOUNG STREET HOOD climbs in the window and
starts loading things
into a sack, no one notices.

BOBBY
Well, I was hoping to get my
balls licked but I wouldn't
dream of breaking your underwear rule. 
I just thought we might do
some "on top of the clothes" stuff.


She snuggles up to him.

CINDY
Okay, just for a minute.

They kiss and lay back on the bed.  He lifts up her nighty,
slides his hand between her
legs.  She spreads her legs.

He feels a shock.

BOBBY STARTLED.

Instead of elastic, tiny barbed wire runs along the
perimeter.  There's also a zapping
electrified fence and a sign reading:  NO TRESPASSING.


BOBBY
I see.

Undeterred, he kisses her again.

STREET HOOD TAKES BOBBY'S WALLET, PUTS IT IN HIS SACK AND
CLIMBS
OUT THE WINDOW.

CINDY
(Breaking the kiss)
Okay stud, you have to go now.

They stand and walk to the window.

CINDY (CONT'D)
I appreciate the romantic gesture.

She takes his finger and puts it in her mouth sucking it
slowly.

He takes his finger out of her mouth � it's now three times
its' normal size and
THROBBING.

BOBBY
See what you do to me?

He starts to climb out the window.

CINDY
Hey, would you settle for PG-13?

She opens her top, exposing her chest.

We see eight tiny little titties.

The shock sends Bobby falling out of the window.

CINDY  (CONT'D)
Goodnight�

EXT. HIGH SCHOOL � PARKING LOT � DAY

Close on compact car.  Bumper sticker reads "Save the
Environment".  Pull back reveal
smoke billowing out of the exhaust.

Cindy arrives.  Brandy meets her curbside.

BRANDY
Come on, girl, move your tired white
ass.

Cindy gathering her books and purse from the car.


CINDY
I'm coming.

BRANDY
Move your pasty white, milk chalky,
bologna smelling, cracker devil, honky
bit�

CINDY
Hello?!

BRANDY
I'm sorry girl.  I rented "Amistad" last
night.  I got issues.  It's cool.  Come
on, we're gonna be late.


They start to walk to class, when Cindy sees Buffy arriving
via Daddy's new Mercedes.

CINDY
Wait, there's Buffy.

BRANDY
I don't know why you hang out with
her.   She's such a ho.

CINDY
Why do you say that?

BRANDY
Cause I've seen her.  My friend Sean had
a pool party this summer.

CINDY
Sean?

BRANDY
You know, Puff Daddy.

BRANDY (CONT'D)
Anyways, everybody was drinking Crystal
champagne.  Then it started to get wild,
people was getting freaky in the pool and
stuff.  I looked over and there was your
girl getting buck wild in the Jacuzzi.

CINDY
So?

BRANDY
With a backup dancer!  That's lower than
a security guard!  At least security can
get you backstage.

CINDY
I think Buffy is sweet.

BRANDY
She's as fake as press on nails.

They greet Buffy.

BRANDY  (CONT'D)
Hey girl, what's up?

Brandy and Buffy kiss as though they were best friends.

BRANDY (CONT'D)
Hey, lookin' good, love your hair!

BUFFY
Thanks, just got it done.

Cindy waves goodbye to Buffy's dad as he drives off.

CINDY
Bye Mr. Gilmore!

BUFFY
(not looking back)
Is he gone?

CINDY
Yes.

Buffy rips off her clothes, revealing a sexy outfit
underneath.  She lets her hair down and with a shake of her
head, a new do, worthy of a sex kitten.


EXT. HIGH SCHOOL � FRONT WALKWAY � DAY

The girls walk together towards campus.

Brandy passes her a makeup pack.  Buffy applies her makeup. 
Cindy passes her the
lipstick.  Two strokes and the transformation from Daddy's
baby to every high school
guy's wet dream is complete.

BUFFY
I love this color!

CINDY
Let me see that.

Cindy checks the label.

CINDY (CONT'D)
You guys shouldn't use this brand.

BRANDY
Why not?

CINDY
Because they test their make-up on
animals.

BRANDY
So?

CINDY
Have you seen what they do to those
poor animals?

Cindy shows them a flyer that reads "Stop Animal Testing". 
A picture of a monkey in full make-up.

BUFFY
(taking back the lipstick)
Well, I'm more of a people person.

BUFFY (CONT'D)
I'd rather help my fellow man than some
animal.

A homeless man approaches.

HOMELESS MAN
Spare a dollar?

BUFFY
Get away from me you bum!

CINDY
Buffy!?  Can't you see that he's just hungry?

Cindy gives the man a sandwich from her lunch bag.

CINDY
Here you go.  A nice sandwich.

The girls walk away.  Suddenly, Cindy is hit in the back of
the head by the sandwich.

HOMELESS MAN
(V.O.)
I said a dollar bitch!

The girls attention is distracted by a commotion on campus.

BUFFY
God, look at this place, it's a circus!

EXT. HIGH SCHOOL � FRONT � DAY

NEW ANGLE � HOARDS OF MEDIA

In the midst of the chaos, we pan around to see various
reporters attempting to report the
story.  Close on young attractive overly ambitious woman,
GAIL HAILSTORM,
syndicated talk show host and author.

Gail is giving an update on camera.  Behind her an obnoxious
KID is mugging for the
camera.

GAIL
Hello, I'm Gail Hailstorm, author of
the book "You're Dead, I'm Rich".  A
small college town is in shock after
the unthinkable has happened.

KID in background is hamming it up.

GAIL (CONT'D)
A brutal killing spree that left one
teen dead.

KID really performing for the camera.  Gail, annoyed, turns
and shoots the kid.

GAIL (CONT'D)
Correction, two teens dead.

Next reporter, straight laced WHITE MALE.

WHITE MALE REPORTER
Police are searching for clues.

EXT. HIGH SCHOOL � CURB SIDE � DAY

Then a BLACK MALE REPORTER, barely outside of his van,
hurriedly gives his report.

BLACK MALE REPORTER
Reporting live for Black TV.  White folks
are dead, and we are about to get the
hell out of here!  Let's roll, Jack.

His crew jumps in the van and they burn out.


EXT. HIGH SCHOOL � FRONT WALKWAY � DAY

BRANDY
Do you believe this?

CINDY
What happened?

BUFFY
Didn't you hear?  Drew Decker got killed
last night.

CINDY
(disturbed)
What?  Oh my God!  She sits next to me in
English class.

BRANDY
Was she a friend?

CINDY
No, I was gonna cheat off her test
today.  Now I'm like fucked!  Do
they know who did it?

BRANDY
Clueless.

BUFFY
They showed a picture of her body on
the news.  It was pretty scary.

CINDY
All the blood?

BUFFY
No, she was wearing a Gucci sweater
and Payless shoes!  That's such a
fashion disaster!  Do you think the
press is going to interview us?

BRANDY
No way.  The press only want to interview
the most ignorant person they can find.

EXT. HIGH SCHOOL � DAY

The media is surrounding a young black teen sporting a short
black afro with a pick
sticking out, a hemp emblemed t-shirt and a roach clip on a
chain around his neck.  He
smiles, revealing a gold cap on a rotting tooth.  His name
is SHORTY.

REPORTER
Can we have a word with you?

SHORTY
Oh shit, I'm on TV.  I wanna give a
shout out to Shane and dem!  Peace to my
peeps, much love to the east and west,
Tasha, wake up, the baby's daddy is a
staraah!!

REPORTER
What can you tell us about Drew Decker?

SHORTY
She got a fat ass, kid!  Ya know what I
mean?

EXT. HIGH SCHOOL � DAY

Shorty stands smoking a fat joint, looking up at two
billboard ads.  One reads, "Just Say
No."  The other, a Nike ad that reads, "Just Do It."  He
looks back and forth between the
two.  Heavily contemplating both messages.  Finally, he
looks down at his own tennis
shoes.  Then back up to the Nike ad.

SHORTY
Yo, son, I'm with you.  Just do that
shit.

He takes a long drag off his joint and exits.

EXT. HIGH SCHOOL � DAY

Shorty and his HOMIES kick it up on the school lawn. 
Getting high and tripping off
Drew's death.

SHORTY
Yo, son, that's fucked up that Drew
got killed.

HOMIE #1
Word.

SHORTY
I didn't even get to fuck her.

HOMIE #2
True dat.  True dat.

SHORTY
I'm just glad that it wasn't one of us.

HOMIE #1
Word?

SHORTY
Yo, son, don't you know?  A brotha'
never lasts long in these types of
situations.

HOMIE #2
True dat.  True dat.

SHORTY
Kid, in the most successful horror
flicks, most niggas don't even make
it to the credits, yo.

HOMIE #1
Word.

SHORTY
That's why we as a people have to
come together and show up to the
movies on time if we want to see
our black people die.  If you stop
to get a forty, you could miss the
whole thing.

HOMIE #2
True dat.  True dat.

SHORTY
'Cause you know they ain't gone
never let us play the homeopathic
killer.

HOMIE #1
Word.

SHORTY
Oh, sure there's that one cat,
Candyman, but they don't even let
that brotha wear a mask.  Why not? 
Jason, Michael Myers, even the Phantom
of the Grand Ole Opry covers half
his face.

HOMIE #2
True dat.  True dat.

SHORTY
But see, the thing is, they don't
fit a description.  On the other
hand, without a mask, they could
easily stick my man Candy in a
line up and frame him for some trumped
up bullshit.  You see what I'm saying?

HOMIE #1
Uh, word?

SHORTY
And tell me this, why he always got
to be on C.P. time?


SHORTY
You've got to call the brotha'
repetitiously before he even shows up. 
Candyman!  Candyman!  Candyman! 
Nigga' you hear me callin you. 
Bring your pimp lookin ass on. 
Off chasing white girls.  That's what
got your hands cut off in the first
place.  Which brings me to my point,
son.

The two stare at him in confused silence.

SHORTY (CONT'D)
(as if it were obvious)
Yo, it all started with a white girl. 
So you know what that means.

Continued silence.

SHORTY (CONT'D)
Drew's dead.  We black.  Candy. 
Man.  It's so obvious, kid.

Blank stares.

SHORTY (CONT'D)
I've got the munchies like a mutha'
fucka'.

Suddenly clarity registers with the homies.

HOMIE #1
Word.

HOMIE #2
True dat. True dat.


INT. HIGH SCHOOL HALLWAY � DAY

The girls enter.

V.O.
Hey ladies!

The girls turn to see SHORTY, young African American, cute,
in an awkward kind of
way.

CINDY
Hi Shorty.

BRANDY
Talk to the hand.

She puts her hand in his face.

SHORTY
Cindy?

CINDY
Can't Shorty.

SHORTY
Oh well, you force me to open it up
to hundreds of other girls who would
die for the opportunity, but just
because I like you guys, I'm gonna
wait till lunch before I go public. 
See ya at the fountain.

Shorty heads to class.

BUFFY
Whatever!  What a geek!

CINDY
I think Shorty is cute.  If I wasn't
dating Bobby, I would go out with him.

BRANDY
Shit girl, Bobby lives in a trailer. 
Dating Shorty would be a step up.

CINDY
If how much money a guy has is so
important, why are you dating Ray?

BRANDY
First of all, look at him.  He's
100% man.

P.O.V. GIRLS

Ray and Greg standing at lockers.

Ray takes off his shirt, exposing his muscular upper body. 
He slips on a ty-dyed tank top.

RAY
Yo, man, this shirt make me look gay.

GREG
Nah.

Ray ties the lower part of the tank top in a knot and rolls
it above his navel.


RAY
How about now?

Back to girls.

BRANDY
Besides, the boys got potential,
girl.  Ray runs a 4.4 40, has a
3.5 GPA and he's being scouted by
every major college in the country. 
If he stays healthy, we're talking
multi million dollar contract and
that's not including endorsements. 
Now Greg on the other hand, that's
somebody else's mess.

BUFFY
I'll admit, the pro's is a long shot
for Greg.  He's been injured twice
and he's not that bright.


P.O.V. BUFFY

Greg slamming his head into the lockers, obviously upset
about something.

BUFFY (CONT'D)
And the only way we'll see him in prime
time in on "Cops".  But for now, he's the
hottest guy in the school and even if
I don't want him, I'm not going to let
anyone else have him.

The girls meet up with Greg and Ray at the lockers.

BRANDY
Hey baby.

Brandy kisses Ray.

BUFFY
What's the matter, honey?

GREG
I got my report card.

He hands it to Buffy.

REPORT CARD READS:  D.U.M.B.A.S.S.

BUFFY
At least you got one "A".

GREG
Yeah, I did huh?

CINDY
Anybody seen Bobby?

RAY
Nah.  That kid is late every day. 
I don't get it.  He lives so close.

EXT. HIGH SCHOOL PARKING LOT � BOBBY'S TRAILER � DAY

Bobby exits, books in hand.  Pull back to reveal the trailer
is parked in the school parking
lot.

EXT. HIGH SCHOOL FOUNTAIN � DAY

Bobby joins the gang sitting at the fountain.

BOBBY
Hey guys.  Hey Cind.

Bobby kisses Cindy.

BOBBY (CONT'D)
You guys see all the reporters out
there?  They say that girl Drew
Decker got killed last night.

RAY
I think I knew her.  She had a brother
named Steve, pretty eyes, long hair,
perfect ass.

BOBBY
Yeah, that was her.

RAY
No, I was talking about Steve. 
Whatever happened to him?

BOBBY
I don't know.

CINDY
Hey, do you guys think it's strange
that she got killed exactly one year
after we, you know, killed that guy?

GREG
Hey, it was an accident.

CINDY
Was it?

EXT. PARKING LOT � NIGHT -  (FLASHBACK � ONE YEAR AGO)


GREG
Hey dude.  Nobody drives my car but
me!  Well, except for that big black
guy that car jacked me last month, he
drove it, but other than that, nobody
drives my car but me.  Okay, there
was that one time the dope man had
it for a week because I owed him
for a bag of weed, but other than
that�

CINDY
You know cars are only to make guys
feel more secure about the size
of their penises.

GREG
What's that supposed to mean?

Bobby takes the keys from Greg.

BOBBY
She's kidding, come on.


Greg approaches Buffy.

GREG
Why did you tell Cindy about it?

BUFFY
I didn't say anything.

GREG
Then why did she make that comment?

BUFFY
Greg, you know I would never tell
anyone our little secret.

She kisses him.  Cindy walks by.  She holds up her pinky. 
Buffy giggles.

They get in the car and drive off.

EXT. MOUNTAIN ROAD � NIGHT (GREG'S CAR)

Bobby and Cindy in the front, the other two couples in the
back.

The two couples are making out.

Greg opens a bottle of liquor.

Greg takes a sip, then another.  Slowly, he starts to feel
good.

GREG
Hey, let's put on some music.

Ray pulls a tape out of his pocket.

RAY
Here, put this on.

Bobby puts in the tape.

The song "It's Raining Men" blares out speakers.  Everyone
looks at Ray.

RAY (CONT'D)
Hey, it's a classic.

GREG
Let's put on the radio.

Greg ejects the tape and finds a station.  Loud rock music
fills the car.

GREG
Now that's more like it.  Yeah.

Greg nods to the music.

GREG (CONT'D)
(yelling)
AYOO!!!

Greg stands up, pokes his head through the sunroof, takes
another swig of liquor and
yells as he enjoys the wind against his face.


EXT. MOUNTAIN ROAD � NIGHT  (GREG'S CAR)

Ray and Brandy in the back are really going at it hot and
heavy.

BOBBY
(adjusting the rear view mirror)
Look at what they're doing.

CINDY
Bobby, keep your eyes on the road.

BOBBY
When are we gonna do stuff like that?

CINDY
One day.

Bobby unzips his pants.

CINDY
What are you doing?

BOBBY
I just want you to touch it.

EXT. MOUNTAIN ROAD � NIGHT � (GREG'S SUNROOF)

Greg yelling.  This time in tears as he realizes he is about
to be hit by a low hanging
branch.

Thud.  His head goes reeling.

EXT. MOUNTAIN ROAD � NIGHT � (GREG'S CAR)

Cindy gingerly touching Bobby's crotch.  He closes his eyes
momentarily.

BOBBY
Oh yeah.

Suddenly, Greg's liquor bottle comes falling through the
sunroof, crashing against
Cindy's head, sending her face down into Bobby's lap.

BOBBY (CONT'D)
(shocked)
Oh yeah!  That's what I'm talking about.

Bobby lays his seat back.

EXT. MOUNTAIN ROAD � NIGHT � (GREG'S SUNROOF)

Greg's head, passing through the tree branches, emerges with
a bee hive wrapped around
his face.  He desperately tries to remove it.

EXT. MOUNTAIN ROAD � NIGHT � (GREG'S CAR)

It looks like a wild orgy.

Bobby steering with his bare feet.

Cindy trying to raise her head but is being stepped on by
Greg.

EXT. MOUNTAIN ROAD � NIGHT � (GREG'S SUNROOF)

Greg finally removes the hive.  He sees something in the
road.

GREG
Look out!

EXT. WINDING ROAD � NIGHT � (GREG'S CAR)

Bobby hears Greg's scream.  He too sees something.  Bobby
swerves to avoid it.

BOBBY
Oh my God!

The car goes spinning out of control before it finally comes
to a stop.

BOBBY (CONT'D)
What was that?

CINDY
I think we hit something.

EXT. WINDING ROAD � NIGHT

Everyone gets out of the car.

Buffy finds a boot.

BUFFY
Oh my God!  We hit a boot!

They see a man lying unconscious in the road.

CINDY
Ahh!  It's a body!

RAY
Is he alive?

BOBBY
I don't know.

BUFFY
Let me check�


Buffy kneels next to the body.

BUFFY (CONT'D)
Hey mister, you want a blow job?

No answer.

BUFFY (CONT'D)
He's dead.  What are we gonna do?

She quickly backs up and joins the rest of the group.

The man slowly starts to gain consciousness.  The kids don't
see him, caught up in their own drama.

CINDY
We have to call the police.

RAY
No way, I ain't going to jail.

CINDY
We have to.

GREG
Do you know what happens to a young boy
in prison?  All those sex starved
convicts just waiting for a fresh
piece of meat.

RAY
You're right.  Maybe we should call
the police.

Behind them we see the man sit up.  He calls out to them.

MAN
That's not necessary.  I'm fine.

They can't hear him.  They're too busy yelling at each
other.

BOBBY
Think about it, Ray.  If you do that
you ruin the rest of this movie.  This
is your chance to crossover, Ray.

RAY
White girls?!

Bobby nods yes.

RAY (CONT'D)
What do we do first?

BOBBY
We'll hide the body.

CINDY
I won't have anything to do with this.

In the background, the man is now standing, brushes himself
off and calls out to the group again.

MAN
I guess I'll be going now.

Again he's ignored.  He shrugs his shoulders and starts to
walk away.

BUFFY
What about the alcohol?

GREG
We'll get rid of it.

Greg tosses the bottle over his shoulder.  It crashes the
man on the head, knocking him out.  He flops back
on to the road, just as the group turns to look at him.

GREG (CONT'D)
Now let's get him in the trunk.  Move the car closer.

As the three of them talk among themselves, one of them gets
in the car and backs it up.  The Man sits up
again, shaking his head clear.

He gets up just as the car backs up into him.  Knocked
unconscious again, he falls flat on the road.  Just
then, the kids turn around.

BOBBY
We'll throw him in the ocean.

They throw him in the trunk and look at each other as they
talk.

BOBBY (CONT'D)
We'll go down to Steveson and dump him in
there.  The sharks will take care of
the evidence.

The Man wakes up again in the trunk, but the kids aren't
looking at him.

Not looking at him, Brandy slams the trunk lid down on the
Man's head.

Greg tries slamming it down again and again.

EXT. PIER � NIGHT

They get him out of the trunk and carry him over to the edge
of the road, which is
overlooking the ocean.

CINDY
Wait.  Shouldn't we check his wallet?

BUFFY
For what?

BRANDY
Shit, he might have some money.  We
already committed murder.  Might as
well rob his ass.

BOBBY
Good idea.  I'll take credit cards.

BRANDY
I want the jewelry.

RAY
I'll take his underwear.

They finish stripping the man then toss his naked body over
the side.

GREG
We must never mention this again.

CINDY
Mention what?

GREG
The guy we just killed.

CINDY
Well, you just mentioned it.

GREG
Starting now.

EXT. HIGH SCHOOL FOUNTAIN � DAY (PRESENT)

BOBBY
That's all behind us now, Cindy, we
have to move on.

GREG
Yeah, it's just a coincidence.

BUFFY
Greg's right, Cindy.  I mean what do
you think we're in, a horror movie?

Cindy relaxes and smiles.

CINDY
Yeah, if it were, they'd probably cast
some ding-bat like Jennifer Love "Huge-Tits"
to play me.

They share a laugh as the bell rings and everyone heads to
class.

EXT. HIGH SCHOOL � CURBSIDE � DAY

Skate boarders cruise by, followed by guy with no legs on a
skate board.

Cindy walks toward building, she passes Gail's news van.

Kenny sees Cindy.  He knocks at the van.  Gail answers from
inside.

GAIL V.O.
I'm putting on my make up.

Kenny opens the van door.

Gail turns around.  We see a decrepit old woman.

GAIL
Close the goddamn door!

Kenny, horrified, slams the door.

EXT.  HIGH SCHOOL � FRONT � DAY

Gail trying to get information from the sheriff.

GAIL
Sheriff, can I get a statement?

SHERIFF
No comment.

Gail spots Doofy and approaches him.

GAIL		
Hi, Gail Hailstorm, field reporter, Hard
Story.

DOOFY
Special Officer Doofy.

GAIL
Is there a problem on campus?

DOOFY
Not while Doofy's on the job.

GAIL
Well, of course not, handsome.

He salutes her and a student walking by and smacks his hat
off his head.  He scrambles
for it, then resumes his composure.

DOOFY
(embarrassed)
You shouldn't be here.

GAIL
I know.  I should be on my knees
covering the next presidential
election.  But who knew?

She tickles Doofy.  He farts.

DOOFY
Excuse me.

GAIL
You look awfully young to be a
police officer.

DOOFY		
I'm twenty-five and a half years
old.  That's this many.

He spreads his fingers on his hands twice.  Then once on one
hand and gives her a bent
thumbs up.

GAIL
You know, I prove to be most popular
with males eleven to twenty-four.  And
most prison lesbians.  Of course, you
don't look a day over twelve.  Except
for that big head and glazed over look
in your eyes.  Ooh, look a little drool.

DOOFY
Yeah, sometimes I forget to swallow.

GAIL
Don't worry, I never do.

She tickles him again and he farts again.

GAIL (CONT'D)
Remind me not to do that again.

Suddenly they are interrupted by an announcement.

PRINCIPAL V.O.
Hello, due to the recent events, a curfew
has been placed effective immediately.

GAIL
Sounds like we've got a serial
killer on our hands.

DOOFY
That's official police business.

GAIL
Are there any suspects?

DOOFY
I can't say mama.

Gail notices Doofy's large penis.

GAIL
I say, that's a mighty big night
stick you got there.

DOOFY
My mom says I can't play with it
cause I might poke someone's eye
out.

GAIL
I can see how that could happen.  Say,
what do you say we go back to my van and
get to know each other a little better?

DOOFY
Ok.

INT. HIGH SCHOOL CLASSROOM � DAY

Cindy and Buffy enter.  Cindy notices something immediately.

A bird in a cage.

CINDY
You see?  This is the kind of
cruelty I'm talking about.  What's
an animal doing in here?

STUDENT
He's our mascot.  We adopted him.

CINDY
No way.  This animal is supposed to
be free and spread his wings.

Cindy opens the cage and removes the bird.  She walks over
to the window.

STUDENT
What are you doing?

CINDY
Setting him free.

She tosses the bird out the window.

CINDY (CONT'D)
Fly, little birdy, soar little fella.

STUDENT
You asshole, his wings were broken.  We
were nursing him back to health!

The bird falls to it's death.

CINDY
Oops!  My bad.

INT. HIGH SCHOOL CLASSROOM � DAY

A frumpy woman, MISS TATE, faces the class.  Tragic look on
her face.

MISS TATE
A terrible tragedy and an unbearable 
loss. It's days like today we need
prayer in school.

Pull back.  Reveal she is breast feeding a baby.  She
removes the baby from her breast,
hands it to a nerdy fifteen year old student.

MISS TATE (CONT'D)
Here, go to your daddy.

MISS TATE (CONT'D)
Okay class, we've been discussing the
constitution this week.  Who would like to
give their oral presentation first?

Young girl excitedly raises her hand.

MISS TATE
Okay, Heather.

Heather runs to the front of the class.

HEATHER
My presentation is on the First Amendment,
which protects freedom of speech.

NEW ANGLE CLASS

Cindy is distracted by something outside the window.  A man
wearing a mask and Scream attire looking at
her.  He ducks behind a tree when she looks.

Cindy turns her head quickly to the class then quickly back
to the window, catching the killer as he steps
from behind the tree.

Killer freezes.

Cindy and killer play peek-a-boo, finally he disappears.

Cindy notices a note on her desk.  She opens it.

Note reads: "I know what you did last Halloween".

EXT. PARK � DAY  (CINDY'S FLASHBACK)

Flashback to romantic picnic in the park.

INT. HIGH SCHOOL � CLASSROOM � DAY

Cindy smiles, finds a second note.

Note reads: "No, bitch, I'm talkin' about the guy you
killed".

Cindy's face struck with terror.

Back to Heather who's been talking the whole time.

HEATHER
That's whats so important about the
First Amendment.  It gives us the right
to say what we want without fear of
retaliation

Smack!  Heather goes flying.

MISS TATE
Aw, shut the fuck up and sit down.

A student enters the class and hands Miss Tate a note.

MISS TATE (CONT'D)
Cindy, you're next.  The sheriff's ready
to see you.

Cindy grabs her books and exits.

INT. HIGH SCHOOL � PRINCIPALS OFFICE � DAY

The LOCAL SHERIFF, a short pudgy balding man, late 40's, and
the SCHOOL
PRINCIPAL, Mr. Fonzy, mid 40's, average looking, nice guys,
waiting to interrogate the
next student.

SHERIFF
So, who's next?

PRINCIPAL
Cindy Campbell.  She's the daughter of,
you know�

He makes an obscene gesture with his hand and mouth.

SHERIFF
Oh, you mean Mrs�

Sheriff makes an obscene gesture poking his finger in and
out of a circle.

PRINCIPAL
That's right, old Mrs�

Another gesture, more graphic.


SHERIFF
The one and only.

Sheriff starts humping the air and climbs on the desk.  He
starts having simulated sex. 
He gets so into it he brings himself to climax just as Cindy
enters.

PRINCIPAL
Hello Cindy.

Sheriff recovers himself, lights a cigarette and greets
Cindy.  He has a big wet spot in the
front of his pants.

CINDY
Principal Fonzy.  Hello Sheriff.

Cindy takes a seat.  She greets ANOTHER MAN who has just
entered, his name is DOOFY, let's call him
"slow", late teens, early 20's.  He wears a make-shift
police uniform.

CINDY (CONT'D)
Hello Doofy.

DOOFY
That's Officer Doofy today, Cind.

PRINCIPAL
Cindy, we'd like to ask you some questions.

Sheriff annoyed by something.

SHERIFF
What's that God awful smell?

DOOFY
I go poopy.

SHERIFF
Get him outta here.

PRINCIPAL
Doofy, it's time to go back to special
ed.  Maybe the sheriff will let you
play later, ok.

DOOFY
Ok.

Doofy exits.
SHERIFF
So, how are you Cindy?

CINDY
Fine, Sheriff and yourself?

SHERIFF
Bloated, constipated, got a boil on my
ass the size of a walnut, you know, the
usual.  So we wanna ask you a few
questions about Drew Decker.

EXT. HIGH SCHOOL FOOTBALL FIELD � DAY

The football team is practicing on the field.

EXT. NEW ANGLE � INSIDE HUDDLE � DAY

Ray calls the play.

RAY
25 dive play on 2.  Break!

They clap hands, break huddle and set formation.

Ray at the quarterback position steps up behind the center
who is bent over ready to hike
the ball.

RAY (CONT'D)
24, 25, 15, 22, 55, 66, 11, 45,
96, 17, 12, 37�

CENTER
Hey, you gonna call hike or what?

RAY
Oh, my bad!  Hike!  Hike!

Center snaps the ball.  Ray steps back to pass, revealing
he's got a hard on.  He throws
the ball and makes the play.

Coach blows the whistle, ending practice.  The players rush
to the locker room.

INT. MEN'S LOCKER ROOM � DAY

Players enter after a tough work out.

Ray is first.  He starts to undress.  Several players pass
Ray and he congratulates each of
them with a pat on the ass.

RAY
Hey Murphy, nice catch.  Dugan, good
block.  Johnson, what a move.  Woodward,
nice ass.

Woodward looks at him strange, continues on.

Ray heads to the shower, towel wrapped around his waist.  He
notices Greg lingering.

RAY (CONT'D)
Hey Greg, you comin'?

GREG
In a minute, I'm gonna work out first.

RAY
Okay� Alright, guys, last one in is a
rotten egg.

Ray snatches off his towel, playfully swatting the other
players.

INT. MEN'S LOCKER ROOM � DAY

The last of the players exit.  Greg appears from behind the
locker wearing just a towel. 
He makes sure the place is empty.  Greg walks to the
showers, very careful to keep his
towel wrapped around him until he's safely inside one of the
stalls.  Even then, he
surreptitiously looks around to make sure no one's around
before removing the towel.

Greg approaches his locker and sees a Polaroid photograph
sticking out of it.  He pulls it
out and looks at it.  It's a photo of his tiny penis with
the words "I Know" written
underneath.  Greg freaks.

GREG
(yelling and searching the empty locker room)
Where are you?!  Who did this?!  This
isn't funny, all right? � a small dick's
like a disability, man!  Would you make
fun of somebody in a wheelchair?  Huh? 
Would you, you sick fuck?

In the locker room, you see a kid in a wheelchair pushed by
another student real fast into
the lockers, ala "Slingblade".

GREG (CONT'D)
Where are you, you  chicken shit?

As he continues his ranting and his search, we�

FADE OUT:

EXT. HIGH SCHOOL FRONT STEPS � DAY

Cindy exits.

Brandy joins Cindy.

BRANDY
Hey girl, you okay?

CINDY
Yeah, just that some strange things
have been going on today.

Suddenly, Brandy's cell phone rings.  She answers.  Terror
crosses her face.

BRANDY
Hello.  Who is this?  What do you want
from me?  No please stop!  I'm gonna
call the police if you don't stop
calling me!

She hangs up, visibly shaken.

BRANDY (CONT'D)
It was him again!  He keeps harassing
me, sending me notes, calling me on
the phone.  I'm so scared!

CINDY
The killer?

BRANDY
No, M.C. Hammer! 

Brandy spots girls approaching.

BRANDY (CONT'D)
Aw, shit, I hope that tramp ain't coming
over here.

CINDY
Who, Tanya?

BRANDY
I don't like her cause she's phoney.  I'm talking
faker than a swap meet hair weave.

Tanya arrives.  Again hugs and kisses from Brandy.

BRANDY (CONT'D)
What's happenin'?  Girl, I ain't seen
you in ages.

TANYA
Right, since the video.  Listen, I
just wanted to know if you guys were
coming to the pageant tonight.

BRANDY
Aw, I can't.  I gotta study.

TANYA
Cind?

(V.O.) BUFFY
She's going to cheer for me.

Buffy joins the girls.

TANYA
Oh, I see.  Well, whatever.  Good luck,
Buff.

Buffy gives a fake smile.  Tanya walks away.

BUFFY
(under her breath)
Slut.

TANYA
(under her breath)
Ho.

EXT. HIGH SCHOOL FOUNTAIN � DAY (LATER)

Bobby, Cindy, Ray, Brandy, Buffy, Shorty are sitting around
the fountain, discussing the
murder.

CINDY
The police asked me a whole lot of
questions.

BRANDY
Yeah, my brother Shorty is still in
there.

Shorty approaches.

SHORTY
Yo, yo , what's up?

RAY
How'd it go with the police?

SHORTY
They tried to intimidate a brother but
I told them I don't talk to pigs and I
ain't dropping dime on nobody.  I just
told them where they could shove it.

Shorty reveals he has a plunger sticking out of his ass.

BOBBY
They asked me if I knew how to hunt.

BUFFY
That's funny, they asked me if I like
it doggie style.

CINDY
It's a shame how she died.  She was
such a nice girl.

BUFFY
You know she used to babysit my brother
Doofy.  He had the biggest crush on her.

SHORTY
Hey, didn't Greg used to go out with her?

BUFFY
What are you saying?  Greg killed her?

SHORTY
No, but it makes him a suspect.

BUFFY
Oh, yeah, where were you last night?

SHORTY
I was chillin' at the crib watching an ill
kung fu flick called Tae Bo.  There was
this ugly ass brother and he looked like
a burnt up Keenen Ivory Wayans but the
ill shit is, he didn't fight nobody he just
warmed up the whole  time.

SHORTY (CONT'D)
What did you do last night?

BUFFY
I was in bed all night.

SHORTY
Can you prove it?

BUFFY
Sure I can, right guys?

Cut to the entire football team.  They all nod yes.

BUFFY (CONT'D)
Here comes Greg.  Now let's see what
he thinks of your suspect theory.

Greg approaches.  He's pissed.  He goes after Ray.

GREG
Ray, you're a dead man!

Greg rushes toward ray.  Bobby stops him.

BOBBY
Easy Greg.  What's the problem?

GREG
I'll tell you the problem!

Greg shows Bobby the picture of his penis.  The words
written "I Know" written on it.

BOBBY
Oh, wow!  This is you?  Oh fuck!

Bobby starts to laugh uncontrollably.

GREG
Hey, the shower was cold!

BRANDY
Let me see.

Bobby passes her the picture.

Brandy starts laughing, passes it to Buffy, who passes it to
Ray and Shorty who burst into
laughter.

BRANDY (CONT'D)
My God, how do you even give him head?

BUFFY
I don't.  I just use it to pick my
teeth.

GREG
My nuts are big, they just make my
dick look small.

They all laugh.  Greg realizes what he's started.

The photo keeps changing hands.  Everyone laughing.

TWO CHINESE GUYS are looking at the photo.

CHINESE GUY
Now that's a little dick.

GREG
It's a Polaroid!  There's no dimension!

A LITTLE PERSON gets a look, cracks up, tosses it, it lands
in a baby carriage.

LITTLE BABY laughing at photo tosses it.

TWO MICE look at photo, laughing.

Back to Greg.

GREG (CONT'D)
All of you can go to hell!

CINDY
Greg, you're not the only one
who got one.

GREG
Bobby's got a baby dick too?

CINDY
No, I was talking about the note. 
I got one too.

Everyone stops laughing.  Cindy shows them the note.

CINDY (CONT'D)
Somebody knows.

GREG
Bullshit.  Somebody's just trying
to fuck with us.

CINDY
I think we should go to the police.

Greg grabs Cindy around the throat.

GREG
You talk and I'll kill you myself.

BOBBY
Greg, chill, you're hurting her.

Greg lets go.

SHORTY
Somebody want to tell me what that
was all about?

CINDY
Forget it, Shorty.  You've already
heard too much.

Bell rings.  Everyone walks off, leaving Shorty standing
confused.

INT. AUDITORIUM STAGE � NIGHT

Sign reads "Miss Teen Beauty Pageant"

M.C. on stage introduces the contestants.

M.C.
And now for our finalists.  Aren't
they beautiful, except for that motley
looking one?  Hot damn, where's the
muzzle?

PAN ACROSS FIVE BEAUTY FACES AND ONE OLD HAG.

The old hag remains confident.  Two of the pretty girls run
off stage, thinking the M.C. is
talking about them.

M.C. (CONT'D)
This is the swimsuit portion of the
show, giving our judges one final
look at the contestants.

First contestant, TANYA, her banner reads "Miss
Congeniality".  She waves as she
parades across the stage.

Second contestant, black, with beaded braids, not only on
her head, but under her arms
and pubic hair as well.  The banner reads "Miss Thang".

Third contestant is Buffy, she struts her stuff, her banner
reads "Miss Fellatio".

INT. AUDITORIUM � BALCONY � NIGHT

Bobby, Cindy, and Greg watching Buffy on stage.

Greg cheers for Buffy.

GREG
Whoa!  That's my girl!

VOICE IN CROWD #1
Mine too!

VOICE IN CROWD #2
Yeah, I'm hittin' that too.

CINDY
Hey, I'm gonna go downstairs so I
can get a closer seat.  I'll see
you guys when it's over.

Cindy heads downstairs.

BOBBY
Hey man, I'm gonna run to the head
real quick.  Want me to bring you
back anything?

GREG
Nah, I'm cool.  Just hurry back. 
She's gonna perform first.

BOBBY
Don't worry, I'll be back.


INT. AUDITORIUM � STAGE � NIGHT

BACK TO THE PAGEANT

M.C.
And now for the question in the
spirit of Mother Theresa.  What will
be your contribution to society contestant
#1?

TANYA
I will heal the sick, feed the poor, and
never change my dress.

M.C. moves down the line.

MISS THANG
Like Martin Luther King once said,
"Can't we all just get along?"

BUFFY
I thought we discussed this last
night in your hotel room.  You
said if I�

M.C. cuts her off.

M.C.
Let's go to the talent portion of the
show.  Let's welcome contestant #3,
Buffy Gilmore.

Buffy crosses the stage.

M.C. (CONT'D)
Okay, Buffy, tell us what is your
talent this evening?

BUFFY
Acting.  I'll be doing a dramatic
reading.


INT. AUDITORIUM � BALCONY � NIGHT

GREG
Yeah, baby, yeah!

INT. AUDITORIUM � STAGE � NIGHT

M.C.
Miss Buffy Gilmore doing a dramatic
reading.

M.C. steps offstage.

Buffy gathers herself, about to start, the audience is
quiet.

Buffy glances up to the balcony for one last reassuring
smile from Greg.

Suddenly, through the glare of the lights, she sees the
killer sneaking up behind Greg.

BUFFY
Look out Greg!  Look behind you!  It's
him!  It's the killer!

INT. AUDITORIUM � BALCONY � NIGHT

Too late.  The killer grabs Greg and begins his brutal
attack.

BUFFY
Oh my God!  Somebody do something! 
He's killing him!

The audience and judges murmuring and nodding.  Their
impressed.  "She's good".  No
one realizes it's not a performance.

BUFFY (CONT'D)
You fucking bastards!  Why won't
anyone help?!  Someone call an
ambulance!  Greg hold on!

Buffy runs off stage.

The audience gives her a standing ovation.

M.C.
What a wonderful reading, ladies and
gentlemen!  I think we have a winner,
Ms. Buffy Gilmore!

INT. AUDITORIUM � BACKSTAGE � NIGHT

Buffy trying to get to Greg.  She is stopped by one of the
contestants.

TANYA
You have to go back on stage!

BUFFY
I have to get to Greg.

TANYA
But you won!  They're calling your
name.

BUFFY
I won?

approaches.

CINDY
Buffy, what happened?  What about Greg?

BUFFY
Fuck Greg!  I won!

TANYA
Congratulations.

BUFFY
Outta my way, loser.

Buffy pushes the contestant out of her way and rushes back
to the stage.

INT. AUDITORIUM � STAGE � NIGHT

The crowd applauds.  Buffy waves.  The former Miss Teen
approaches with a bouquet of
roses.

BUFFY
Give me my crown bitch!

Buffy snatches the crown off her head and places it on her
own.

All the contestants crowd around wishing Buffy congrats.

TANYA
I guess you won.

BUFFY
I guess you blew the wrong judge.

MISS THANG
I'm so happy for you.

BUFFY
No you're not.

The M.C. starts to sing.

M.C.
There she is, Miss Teen 99�

The audience applauds, tossing roses, and vases of roses.

Buffy walks down the runway.  Smash!  Crash!  Vases crash
against her head.

INT. AUDITORIUM � BALCONY � NIGHT - (LATER)

BOBBY
There's no sign of him anywhere.

CINDY
He could have taken the body.

BOBBY
Impossible.  There's no blood. 
Nothing.

Killer with bucket and mop, a plastic garbage bag with a
foot sticking out.

BUFFY
It's probably Greg pulling one of his
dumb jokes.  I'm sure he'll turn up. 
He's probably at my house waiting for
me!

BOBBY
Well, I'm gonna look around some more. 
Cind, you mind catching a ride with
Buffy?

CINDY
No problem.  Call me later. Be careful.

BOBBY
Don't worry.  I will.

INT. CINDY'S BATHROOM � NIGHT

Cindy sits at the edge of her bathtub, wearing only a towel. 
She adds bubble bath to the
running water.

She lights candles, incense, and a menorah.

She drops her towel and steps into the sudsy bath.  She
leans back and gives a deep sigh
of relaxation.

The phone rings, startling her.  She eyes the phone
anxiously.  RING.  She picks it up.

CINDY
Hello?

V.O.
Hello Cindy.

CINDY
(alarmed)
Who is this?

V.O.
It's me, Bobby.  You know,
your boyfriend?

She sighs, then grabs a razor a leans back to shave her
legs.

CINDY
Sorry, guess I'm just a little jumpy. 
Any sign of Greg?

V.O. BOBBY
No.  Do you want me to come by?

She shaves her armpits.

CINDY
No, I'm just going to take a bath,
then go to sleep.

She shaves her face.

V.O. BOBBY
O.K. Love you.

CINDY
Love you too.

She hangs up, then relaxes back into the tub, closing her
eyes in tranquility.

BLOOP!  BLOOP!  Two of Cindy's fart bubbles rise to the
surface of the water.  She
sighs.

She is in deep relaxation.  A beat.

Phone rings startling her again.

CINDY (CONT'D)
Bobby, I told you �

V.O. KILLER
I know what you did on Halloween.

Cindy stands straight up in terror at the recognition of the
scary voice � it's the same one
from the first scene.

The bubbles form a perfect two-piece bikini over her,
including straps and a bow.

Cindy slips on her nightgown and exits bathroom.

INT. CINDY'S UPSTAIRS HALLWAY � NIGHT

CINDY
Who is this?  What do you want?

V.O. KILLER
To see your insides all over the floor.

Cindy runs downstairs and locks front door.

INT. CINDY'S LIVING ROOM � NIGHT

V.O. KILLER
You're going to die tonight.

Blaring horn sound.  Cindy is crying, panicking.

CINDY
Leave me alone.

V.O. KILLER
I'm going to cut�

Suddenly, her call waiting goes off.

CINDY
Um, hold on, I have another call.

V.O. KILLER
What..?!

Cindy clicks over.


CINDY
Hello?

It's another teenager girl's voice on the other line.

V.O. JILL
Hey, Cindy, it's Jill. You remember that
hot blue miniskirt on sale at the mall? 
I bought it.

CINDY
(quickly recovering)
Get out� You are going to look so
gorgeous!  I bet Dave would ask you out
if you wore that to school.

V.O. JILL
No way.  He's such a major hotty.

Cindy's phone beeps.

CINDY
Oh my God, I totally forgot, I've got
someone on the other line.  I'll call you
back.

Cindy clicks over.

CINDY (CONT'D)
Sorry about that.

V.O. KILLER
Do you think this is a game?  I'm gonna
gut you like a fish!

Cindy's back to freaking out again, screaming, crying,
running through the house.

CINDY
I'm gonna call the police if you don't�

Her phone beeps again.

CINDY (CONT'D)
Hold on.

V.O. KILLER
No, don't answer.  My phone bill is
already too high.

CINDY
I'll just be a sec.

She clicks over.  Another teenage girl on the line.

CINDY (CONT'D)
Hello?

V.O. KAREN
Cindy, it's Karen, Did you get the
notes in chemistry today?

CINDY
(recovering, wiping the tears)
Yeah, I'll give them to you tomorrow.

Cindy's phone beeps.

CINDY (CONT'D)
I gotta run.

She clicks back over. 

CINDY (CONT'D)
Hello?

V.O. OPERATOR
Hi, this is the operator.  I have a
collect call from� Say your name,
sir.

V.O. KILLER
Homicidal Maniac.

V.O. OPERATOR
Will you accept?

CINDY
Yes.

V.O. OPERATOR
Go ahead, sir.

V.O. KILLER
(to Cindy)
Look you little bitch, you ever do
that again and I'll rip your throat
out.

CINDY
My friend needed the notes.

V.O. KILLER
I don't give a shit.  You made me
lose my train of thought.

CINDY
It was something about gutting me.

V.O. KILLER
Oh yeah, now I remember.  I'm in the
house.  Do you know where I am?

Cindy walks nervously through the house.  She sees
something.

CINDY		
Ah, you're behind the couch.

KILLER
(surprised)
What?  How'd you know?

CINDY
I see your feet.

Close on Killer as he looks up.

KILLER
Shit, wait a minute.

He runs out of the room.

V.O. KILLER
No peeking!

V.O. KILLER (CONT'D)
Ok, now where am I?  You don't know,
do you?  Heh, heh.

Cindy rushes for the door, opens it.  The Killer standing in
front of her.

KILLER
Hello, Cindy.

Killer swings his hook.  Cindy ducks and runs.

Killer gives chase.  Cindy puts a move on him.  He stumbles
over furniture.

Killer gets up.  He starts to run and stumbles again.

KILLER (CONT'D)
(to himself)
I gotta stop drinking.

Cindy runs upstairs.  Killer follows.

INT. CINDY'S STAIRWELL � NIGHT

Cindy tosses a vase.  It crashes against the killer's head. 
He keeps coming.

Cindy tosses a bicycle.  The killer brushes it to the side
and continues up the stairs.

KILLER P.O.V.  Cindy pushing a piano down the stairs.

Killer turns and runs.  Piano just misses.

INT. CINDY'S UPSTAIRS HALLWAY � NIGHT

Cindy enters the closet, revealing JAMIE LEE CURTIS already
hiding in the corner.

JAMIE LEE
Hey bitch!  I'm in here.

Jamie shoves Cindy back into the hallway.

NEW ANGLE � HALLWAY

Cindy and Jamie playing tug of war with the closet door.

CINDY
Let me in!

JAMIE LEE
Find your own!

Killer appears at the top of the stairs.

Cindy runs to her room and locks the door. 

Killer hacking away with his hook.

INT. CINDY'S BEDROOM � NIGHT

Cindy quickly types on her computer.

Screen: 911

Operator: What's your emergency?

Screen: White woman in trouble.

Immediately we hear police sirens closing in.

Cindy turns to the door.  The chopping has stopped.  She
hears a noise at the window. 
Bobby climbing in.

BOBBY
Cindy, you ok?  I heard screaming.

Cindy hugs Bobby.

CINDY		
He was here!

BOBBY
It's okay.

Cindy calms down for a moment then she notices something
falling from Bobby's jacket.

A cell phone drops to the floor.

BOBBY (CONT'D)
I can explain�

Then a knife and bloody gloves.

BOBBY (CONT'D)
Uh�that too.

Cindy takes off running.

BOBBY (CONT'D)			
Cindy!  Wait!  Cindy!

INT. CINDY'S FRONT DOOR � NIGHT

Cindy runs to the front door and opens it.  The mask of the
killer is covering someone's
face.

Cindy screams and attacks.

VOICE
Cindy, It's me.

Cindy sees it's Doofy.

EXT. CINDY'S HOUSE � NIGHT

Bobby repeatedly being body slammed against the hood of a
police car by Doofy.

BOBBY
Help!  Somebody get this moron off
me!

The sheriff arrives.

DOOFY
I got him sheriff!

SHERIFF
It's okay, Doofy, I'll take it from
here.

DOOFY	
I was the first to respond.

SHERIFF
Whoopie for you, numb nuts.  How's
the girl?

DOOFY
She's okay.

Sheriff walks over to Cindy.

SHERIFF
You okay to come down to the station?

Cindy nods.

DOOFY
I'll give you a ride.

Doofy escorts Cindy past a real police car to his kiddie,
pedal-operated police car.  They
climb in and ride off.  Doofy makes a siren noise with his
mouth.

As they ride off, they pass an arriving news van.

Van stops.  Gail Hailstorm rushes out, calling for the
camera man.

GAIL
Kenny!  Camera!  Now!

Gail tries to get a glimpse of Bobby as he is driven off.

GAIL (CONT'D)
Who is that?  Is he a suspect?  Is
anyone dead?  Sheriff, can I get a
statement?

Sheriff drives off.  Gail, alone at the scene, sees Kenny
approaching with a camera.

Gail goes off with Kenny.

GAIL (CONT'D)
Kenny, I know you're about 50 pounds
overweight, but when I say hurry, please
interpret that to mean move your lard
sweating', bacon burpin' jello shakin'
ass now!!

INT. POLICE STATION BULLPEN � NIGHT

Bobby being led away.

BOBBY		
Cindy!  Come on Cind!  You know me!

Cindy sits at a desk alone, visibly shaken.

NEW ANGLE

A policeman talking to the sheriff about Cindy.

SHERIFF
How's she doing?

POLICEMAN #1
She's a little shaken up but I
think she's okay.

SHERIFF
Okay, I'll take it from here.

Sheriff walks over to Cindy.

SHERIFF (CONT'D)
I know you've had a rough night Cindy, so
I'm not going to keep you.  I just want
you to look at some photo's and tell me
what you think.

Sheriff hands her a stack of photos.

Close in on photos.  They are pictures of the sheriff
wearing a pair of speedos, striking
several different poses.

Cindy shakes her head no.

SHERIFF (CONT'D)	
Okay, you're free to go.  Do you have
someone picking you up?

CINDY
Yes.

NEW ANGLE


Two young policemen talking.  We see Doofy in the
background.

POLICEMAN #2
Hey, guess what I just did to those
hookers we busted.

POLICEMAN #1
No way.

POLICEMAN #2
All the way.  Watch this.  Hey Doofy,
come here.

DOOFY
Yes.

POLICEMAN #2
Smell my finger.

DOOFY
What's that?

POLICEMAN #2
That's when you'll know you've
become a man.

They laugh at Doofy.

DOOFY
Hey, smell my finger.

POLICEMAN #2
What the hell is that?

DOOFY
My ass.

Buffy enters.

BUFFY
Doofy, mom said get home now.

DOOFY
Tell mom I'm on official police
business.

BUFFY
Hey, Cind, you okay?

DOOFY
Hey, no talking to the witness.

BUFFY
Go get in the car Doofy.  She's
coming with us.

DOOFY
Does mom know?

BUFFY
Yeah, Doofus.

DOOFY
Mom says when I wear this badge your
supposed to treat me like a man of
the law.

BUFFY
Yeah, well mom also said for you to
stop sticking your dick in the vacuum
cleaner.  Now let's go.

Everyone in the police station laughs at Doofy.  He looks
embarrassed.

Buffy and Cindy exit.  Doofy follows.

EXT. POLICE STATION � NIGHT

Gail Hailstorm arrives.  Kenny hustles behind her.

GAIL
Okay roll in 5, 4, 3�

Kenny fumbles with the camera.  Ho looks confused.

GAIL (CONT'D)		
What now?  Don't tell me you
can't count.  Let's see if I can
make it easy for you.  This little
piggy went to market, this little
piggy stayed home, this little
piggy had roast beef, this little
piggy had none,and if this little
piggy doesn't roll the goddamn camera
right now I'm gonna put my foot�

KENNY
We're live.

GAIL
Hi, Gail Hailstorm here in front of
the police station where I'm going to
try to get a glimpse of Cindy Campbell,
the young woman who was attacked earlier
this evening.

Gail and other reporters see Cindy exit the station.  They
rush her.

REPORTER #1
Cindy, can we get a statement?

REPORTER #2
Is it true the police have someone
in custody?

GAIL
Cindy, your ass looks fat.

Cindy turns and punches Gail in the face.

Doofy hustles Cindy into the car.  She gets behind the
wheel.  Doofy throws his jacket
across her head to shield her from the media rush.

Doofy gets in.  They drive off.

O.C.  We hear swerve, crash, crash.

INT.  BUFFY'S BEDROOM � NIGHT

Buffy and Cindy sit on the bed talking.

BUFFY	
Do you really think Bobby did it?

CINDY
I don't know but he was there.

BUFFY
I knew there had to be something.

Doofy enters holding an ice pack.

DOOFY
Here, a little something for your hand.

He tosses the ice pack to Cindy, not having good aim or
knowing his strength, the ice
pack smacks her in the head, knocking her off the bed.

DOOFY (CONT'D)
Sorry.  I better get something for
your head.

Cindy, dazed, climbs back on the bed.

CINDY
That's okay Doofy.

DOOFY
I'll be in the next room if you
need me.

CINDY
Thanks.  Good night Doofy.

Doofy exits.

Buffy opens a bag of doughnuts, starts snacking.  She hands
one to Cindy.

CINDY
Say, I didn't know you ate stuff
like that.

BUFFY
(excited)
Oh, I'm on this new diet.  I can eat
all the junk food I want and not
gain a pound!

CINDY
Really?!

Barf, Barf.  Buffy throws up the doughnuts.

BUFFY
Want some pizza?

Buffy's mom enters.

MRS. GILMORE
Cindy, telephone.

CINDY
Who is it?

MRS. GILMORE
I'm just guessing but I'd say a
psychotic killer.

Cindy exits to answer the phone.

INT. BUFFY'S HALLWAY � NIGHT (PHONE)

CINDY
Hello?

V.O. KILLER
Hello, Cindy.  Poor Bobby boy.  An
innocent guy doesn't stand a chance with
you.

CINDY
No!

Buffy and Mrs. Gilmore run to Cindy.

MRS. GILMORE
Doofy!  Doofy!

CINDY
Who are you?

V.O. KILLER
You'll find out soon enough.

Cindy drops the phone.

Doofy comes running, carrying the vacuum cleaner hose.

DOOFY
What?

The girls go into the bedroom.  Doofy picks up the phone.

DOOFY (CONT'D)
Hello?

INT. HIGH SCHOOL CAFETERIA � FOODLINE � DAY

Cindy enters, grabs a tray and gets in line.

Cindy looks at menu.  It reads "Same Old Shit".

PAN ACROSS FACES OF SEVERAL CAFETERIA LADIES SCOOPING IN
MUSH
ON TO THE PLATES.  EACH WORKER GETS PROGRESSIVELY UGLIER. 
THE
LAST IS A SEA CREATURE IN A UNIFORM AND HAIR NET.

Cindy joins Ray, Brandy & Shorty.

CINDY
Hey guys.

BRANDY
How you doin' girl?

CINDY
Ok.  He got Buffy.

SHORTY
What?!  She's dead too?

CINDY
No, she's fine, just a little
bent out of shape.

RAY
We gotta get this guy.

CINDY
I think we should all just stick  
together. After school, everyone grab
some stuff, meet at my house and invite
some friends too. There is safety in  
numbers. Anyone seen Bobby?

RAY
I heard he was let out this morning.

CINDY
If you see him, tell him I'm sorry. 
I'll see you guys tonight.

Kid dressed in killer's outfit runs through the cafeteria,
screaming and waving his arms
wildly.

CINDY (CONT'D)
(annoyed)
Why are they doing this?

She rushes from the table.

NEW ANGLE

Cindy bumps into someone.

CINDY (CONT'D)
Oh my�

It's Bobby.

BOBBY
It's okay.  It's just me.

Cindy pulls away.

BOBBY (CONT'D)
Whoa, whoa, wait.  You don't still
think it's me?!

Cindy pats him down for weapons.

CINDY
No, no, not at all.  It's just that
someone did try to kill me.

BOBBY
The police said I scared him away.

CINDY
I know.  He called last night.

BOBBY
See?  It couldn't have been me. 
I was in jail, remember?

Bobby shows Cindy a tattoo on his butt cheek.  It reads
"Hank's stuff".

CINDY
I'm sorry.  Please understand.

BOBBY
What?  My girl would rather call
me a killer then touch me?

CINDY
That's not true.

BOBBY
Then what is it?

CINDY
What is it?  Bobby, she's gone and
she's not coming back.

BOBBY
It's been a year Cindy.

CINDY
But Ginger was such an important part
of the Spice Girls.

BOBBY
You have to move on, Cind.

CINDY
I'm sorry if my complicated life is an
inconvenience to your perfect existence.

Cindy runs away.

BOBBY
Stupid.

EXT. HIGH SCHOOL � DAY

Sheriff makes an announcement.

SHERIFF
Let me just say the killings of these
teenagers have been tragic but with
every cloud there is a silver lining. 
Thanks to all the press, tourism is at
an all time high.  Any of you folks
visiting, I'll be selling souvenir
t-shirts right after the conference.

Sheriff holds up a t-shirt that reads: "I could be next
Woodsboro 99"

SHERIFF (CONT'D)
Only fifteen bucks each.  Get one
for the whole family.

Gail calls out to the sheriff.

GAIL
Sheriff..Hi, Gail Hailstorm, author of
101 Ways to Milk a Tragedy.  Sheriff,
let me ask you, do you think the killer
will strike again?

SHERIFF
We have no evidence of that.  This is
just a precaution.

GAIL
Have you located Cindy Campbell's father?

SHERIFF
No.

GAIL
Is he a suspect?

SHERIFF
That's classified.  Where are you
getting your information?

GAIL
My source is strictly confidential.

Doofy steps up to the mic.

DOOFY
Hey, anybody wanna smell my finger?

INT. GIRLS LOCKER ROOM � DAY

Several girls changing clothes, heading to the showers.

INT. GIRLS SHOWERS � DAY

Camera pans across the naked backs of Buffy and her friends
taking a shower.  They
gossip about the past nights events.

BUFFY
Can you believe it?  There's a killer
out there.

Several tattoos on Buffy's back.  All hearts with guys names
crossed out:  Dave, Tom,
Phil, Steve, last heart reads "Your Name Here."

GIRL #2
Yeah, I heard he's really cute!

Girl #2: Her tattoo reads: "One Billion Served".

GIRL #3
Is it true he almost got Cindy?

Girl #3 tatoo above her ass reads: "Exit Only".

BUFFY
I don't believe her.

Girls finish their shower, grab towels, and continue
conversation.

BUFFY (CONT'D)
I think she's just trying to get
attention.  Just a case of virginal
delusions.

A girl passes them, built like a playmate centerfold.  The
girls look at themselves
insecurely.

BUFFY (CONT'D)
That Tammy.  She's been left back
so many times it ain't funny.


INT. GIRL'S LOCKER ROOM � DAY

We pick up our girls at the lockers.  They see Cindy getting
dressed.

BUFFY
Watch this.

She takes a cell phone from her locker and pretends that she
a call.

BUFFY (CONT'D)
Hello, who is this?  What?  You
want to kill me?  Hold on� Cindy,
it's for you.

All the girls laugh.  Cindy tries to ignore them.

The laughter is interrupted by the Gym teacher.

MISS MANN, a tall muscular woman with a five o'clock shadow
and a bulge under her
skirt that she constantly adjusts.

MISS MANN
Alright, knock it off Buffy.  Now
as all have heard, there is a killer
in our town and the police have asked
us to give you all the following
safety tips.  Stay in well lit areas, do
not travel alone whenever possible and
don't accept rides from anyone you don't
know.  I understand this is a difficult
time for you young ladies, so if anyone
wants to come to my office to talk,
I'm here for you.

Miss Mann exits.

BUFFY
What a crock of shit.

CINDY
It's not!  He's out there!  I'm
telling you he's real!

BUFFY
Oh right, cause you saw him.  Sure. 
What are you gonna come up with next? 
Let me guess..The faculty are really
aliens?

They all laugh.

Cindy grabs her books and exits.

INT. MISS MANN'S OFFICE � DAY

Start on photos on the wall.

Includes Miss Mann with k.d.lang.

Pan down we see Miss Mann sniffing a pair of women's
panties.

CINDY
Miss Mann?

Miss Mann startled, hides the panties.

MISS MANN
Come right in, dear.  Have a seat.  Take
off your bra if you like.

Cindy sits.  She can see Miss Mann's bulge.  She tries to
avoid looking at it.

MISS MANN (CONT'D)
What can I do for you dear?

CINDY
I need to talk.

MISS MANN
Go ahead, my dear.

CINDY
Well, you see, I have this problem and
I don't know who to tell. This is
really hard.

Miss Mann touches her hand, gives her a reassuring smile.

MISS MANN
Not feeling so fresh?

CINDY
Huh?

MISS MANN
Feminine odor and itching got you down?

CINDY
No, not that.

MISS MANN
Oh.

CINDY
I have a terrible secret.

Miss Mann sits back.

MISS MANN
I see.  Well, Cindy, we all
have our little secrets.

Miss Mann spreads her legs.  We see a set of testicles fall
out from under her skirt.

Cindy tries not to react.

Miss Mann walks around the room.  As she speaks, her balls
swing as they dangle in the
air.

MISS MANN (CONT'D)
Sometimes we do things we're not proud
of.

MISS MANN (CONT'D)
Some for money, others to gain an
athletic edge against the competition.

Miss Mann walks over to Cindy, places her hand on one
shoulder and accidentally rests
her balls on Cindy's other shoulder.

MISS MANN (CONT'D)
Sometimes those little secrets come back
to haunt us in the most unpredictable 
ways. You know what I mean?

Cindy jumps up.

CINDY
Yes I do.  Thanks for your time. 
I gotta go to class.

MISS MANN
Anytime, dear.

Cindy hustles out of the office.

INT. GIRLS LOCKER ROOM � DAY

All the girls have left but Buffy, who grabs her books and
closes her locker.

She hears a noise.  She goes to investigate.  No one there.

Buffy turns.  She sees The Killer.

BUFFY
Very funny.  But you better get out
of here before Miss Mann sees you.

Buffy tries to walk away.  Killer blocks her path.

BUFFY (CONT'D)
(sarcastically)
Oh, so what movie is this from, "Die
Cheerleaders Die"?  So wanna play
psycho killer?

The Killer nods yes.

BUFFY (CONT'D)
Can I be the helpless cheerleader? 
Let's see�
(pretend pleading)
Please don't kill me, mister killer�

The Killer grabs her arm.

NOTE: Buffy's attitude is smart ass and condescending the
whole scene.

BUFFY (CONT'D)
Oh, is this the part where I beg
for my life?

Killer nods yes.

BUFFY (CONT'D)
Oh, please mister killer, don't kill me!

Killer slashes her with his knife.

BUFFY (CONT'D)
Oh is this where I'm supposed to bleed? 
Oh, look, I'm bleeding.  EEK! EEK!  Oh
yeah, I'm supposed to run, right?  Ha ha,
okay, if it makes you happy.

She runs half heartily, waving her arms in comical mock
fright.

BUFFY (CONT'D)
I'm running, I'm running.  Help!  Now
here is where I fall and break my leg,
leaving me helpless.

She sighs, like she's indulging him.  She trips and twists
her leg grotesquely.  We hear a
loud snap.

BUFFY (CONT'D)
There ya go, mister scary killer.  I'm
panicking now.  God, somebody please
help me!

Killer gets down and viciously attacks.  We hear flesh
tearing and ripping as blood sprays
everywhere.

BUFFY (CONT'D)
So, I suppose this is where my guts
get ripped open?  Whatever�

Killer raises a meat clever the final blow.  He lifts her
severed head.

She rolls her eyes.

BUFFY (CONT'D)
Oh, look at me.  I'm all dead.

BUFFY (CONT'D)		
I'm a gross scary severed head.  Come on,
Pul-leeze!

EXT. HIGH SCHOOL � DAY

The ledge outside one of the school windows on the third
floor.  Phil crawls out on the
ledge, looking disheveled.  Another faculty member pokes his
head out the window.

FACULTY MEMBER
Phil!  What are you doing?!  Come
back in here!

PHIL
No, I've had it!  I can't take
this job and these stupid kids
anymore!  I'm going to end it all!

FACULTY MEMBER
Be reasonable.

PHIL
There's nothing for me to live
for.  I'm jumping.

FACULTY MEMBER
Wait!  Just hold on, we're getting help.

BRANDY
The killer's just fucking with us.

RAY
I don't get it.  Why?

CINDY
What does he want with us?

Upset, Cindy steps away from the group, looking up (but not
in the direction of the
school) arms out, shouting:

CINDY (CONT'D)
What are you waiting for, huh?

Phil on the ledge, breathing hard, sweating.  He hears Cindy
yelling again, louder this
time.

CINDY (O.S.)(CONT'D)
What are you waiting for?!

PHIL
She's right.  What am I waiting for?

With a shout, he jumps to his death.

Phil lands near them�SPLAT.  They all surround him.  Shorty
stands over him.

SHORTY
Yo, kid.  You got that ill chronic.
I told you that shit would make
you fly.

INT. RAY'S BEDROOM � DAY

Ray and Brandy sitting on his bed, sharing fruit.  Ray is
wearing shorts and a tank top.
Music plays in the background.

Brandy is wearing Ray's football jersey.

BRANDY
Ray, I don't think this party is
a good idea.  What if Shorty is
right?

RAY
Promise.

He gives her a reassuring kiss.

The song "Same Ho" by Snoop Dog is playing on the radio.

SONG V.O.
Every where I go, I see the same ho,
in every video, I see the same hooo�

BRANDY
Hey, that's my song.  You know they
gave me a shout out on the album.

Brandy starts to dance for Ray.

RAY
You know, you look really sexy in
my jersey.

Brandy stands up and begins to model the jersey.

BRANDY
You think so?

RAY
Yeah, put these on with it.

He hands her the football pants.

RAY (CONT'D)
And these too.

He hands her a pair of cleats.

BRANDY
You sure?

RAY
Yeah, and this too.

He gives her his shoulder pads.

RAY (CONT'D)
Yeah, that's hot.  Wait.  One more
thing.

He puts a helmet on her head.

RAY (CONT'D)
That's what I'm talkin' about.  Come
here, you sexy thing you.

Ray grabs her and starts making passionate love to her.

EXT. MOVIE THEATRE � NIGHT

Ray and Brandy walk to the box office to get tickets.

BRANDY
I don't know why we got to go
see this movie.  They just insult
my intelligence.

RAY
What are you talking about?  You
just got your GED.

BRANDY
All I know is these movies is about
white people doing white things in
white places.  There ain't never
no black people in them.

RAY
That's cuz it's Shakespeare.

Reveal they are going to see "Shakespeare in Love".

BRANDY
Whatever.  Why can't we go see a
horror movie or something?

RAY
Look, why don't you just chill
and try to have a good time.

BRANDY
Alright.  I'm sorry.  I do appreciate
you takin' me out.

They enter the theatre.

INT. MOVIE THEATRE � CONCESSION AREA � NIGHT

RAY
Look, why don't you go get some
seats? I'm gonna get some refreshments.

Ray stands in line at the concession stand.  Brandy enters
the screening room.

INT. MOVIE THEATRE � NIGHT

Ray enters, looking for Brandy.

Brandy calls for Ray.

BRANDY
Ray!  Hey Ray-Ray!  Down here!

She waves wildly, screaming Ray's name.

Note: Ray and Brandy are the only black people in the
theatre.

Ray walks to Brandy, takes a seat.

RAY
You want some popcorn?

BRANDY
I brought my own food.

Brandy reaches into her purse, pulls out a full course meal. 
Fried chicken, potato salad,
greens, and a large bottle of hot sauce.

Screen:  The THX robot starts the film.

Brandy immediately starts yelling at the screen.

BRANDY (CONT'D)
Ooo, yeah, do that shit!

Screen: You are now listening to THX.

BRANDY (CONT'D)
This sound system is the bomb.  I need
one of these in my car.

White patrons, shaking their heads.  It's gonna be a long
night.

Ray is embarrassed by Brandy's behavior.  He excuses
himself.

RAY
Watch my seat.  I have to go to the
bathroom.

INT. MOVIE THEATRE � BATHROOM � NIGHT

A guy stands in front of a condom dispenser and chooses from
the selection: "Ultra
Sensitive", "For Her Pleasure", "Can't Feel Shit", and
"You're a Daddy".

Another guy washes his hands at the sink, then turns to pull
down the rotating towels and
it's a pair of pants that go in a circle.

Enter Ray.  He waits for a free urinal, but they're all
occupied by guys pissing at a target
in the bowl.  As they pee on the bulls-eye, toy horses race
across a track on the wall like a
carnival game.  The guys look straight ahead.

Ray tries to find a stall.

He checks under other doors.  He sees a pair of tennis
shoes, cleats, clogs, ballerina shoes
up on their toes, and the ugliest pair of men's feet with
freshly painted red toenails with
the toe separators still in them.

Finally, he looks under a door and doesn't see any feet. 
Ray opens the door.

Reveal a LITTLE PERSON sitting on the toilet.

LITTLE PERSON
Hey, I'm in here.

RAY
My bad.

The handicap stall opens.  A guy in a wheelchair rolls out. 
The guy in the wheelchair
looks around, stands up, folds up the chair, picks it up and
walks out.

Ray shakes his head in disbelief, then enters the handicap
stall.

Ray finishes, zips his pants, turns to exit.

Ray starts to leave when he hears voices coming from the
adjacent stall.

Ray presses his ear against the stall wall.

Traces the sound to a small hole in the stall wall.



Ray presses his ear against the hole.  A penis pokes through
tickling his ear.  Ray
chuckles and presses his head closer.

This time the penis thrusts through his ear.

Ray grabs his ear in pain.  Goo flows out of his mouth.  He
falls to the floor.

INT. MOVIE THEATRE � NIGHT

Brandy sits alone, eating and yelling at the screen.

BRANDY
Don't go in there!

Screen: Shakespeare climbing up the side of the tower.  He
reaches the top.  He and the
lady's nurse see each other.  They scream.  So does Brandy.

BRANDY
This is some scary shit!  Run,
Shakespeare, run!

Man next to her leans over.

MAN
Will you keep it down!?

BRANDY
Excuse me!  I paid my money like
everyone else.

Screen: Gwyneth Paltrow dressed as a man reciting the play.

BRANDY (CONT'D)
That ain't no man!

Brandy takes out a laser pointer.

BRANDY (CONT'D)
You can see her real hair under
that wig.  Look right there!

People around her are getting really annoyed.

WOMAN	
Do you mind?

Brandy starts video taping the movie.  The killer sits down
next to her.  She doesn't notice.

BRANDY
Hey Ray, you came back just in time. 
Yeah, this movie is good.

BRANDY (CONT'D)
She's about to get it on with Shake-a-spear;
he found out she's a girl.   This is just like
an episode of Jerry Springer.

Screen: A fight on screen.

BRANDY (CONT'D)
Aw, shit.  The fightin'!  Jerry! 
Jerry!  Jerry!

The audience is furious.

OLD LADY
Shut up!

MAN
For Christ's sake, shut your trap!

Brandy's cell phone rings.  She answers.

BRANDY
I don't know why y'all trippin'.  My
girlfriend saw the movie and she said
they don't even stay together in the end.

That's it.  The audience has had enough.

The Man sitting next to her suddenly reaches over and stabs
her in the stomach, then goes back to watching
the movie.  Brandy stands up, stunned and horrified.  She
screams.

Then the Woman sitting behind her reaches over and stabs her
in the back, then also goes
back to watching the movie.  Man #2 reaches over, guts her,
and then continues to watch
the movie.  The Old Woman reaches over and cuts Brandy's
throat.  Brandy tries to
escape, but all the people in the theatre start stabbing,
slicing and gutting her as she runs
by them � all normal looking people: an old couple, a
teenager, middle class couple, a
priest, etc.  The Killer never has to touch her.

Crying and bloody, Brandy stumbles toward the movie screen,
still getting stabbed by
everyone.  She stands up in front of the screen, looks out
at all the pissed off faces in the
audience and drops to the ground, dead.

The audience erupts in wild cheers and applause.


EXT. CINDY'S HOUSE � NIGHT

Party in progress.  Several cars arrive, music blasting from
inside.

INT. CINDY'S LIVING ROOM � NIGHT

Kids watch "Halloween H2O".

SHORTY
Here it comes..SPLAT!

JILL
How can you watch this over and
over?

SHORTY
It's great promotion for Miramax.


TEEN
When does LL get killed?

SHORTY
He doesn't.  LL Cool J is one of
the only black guys to survive a
horror movie.  Him and Duane Martin
from Scream 2.  That's because they
followed the rules.

JILL
What are you talking about?

SHORTY
There are certain rules a black
person must follow in order to
survive a horror movie.

JILL
Where's Brandy?

SHORTY
Probably dead.  The sassy black best
friend of a white virgin is always
sacrificed first.  It's like being the
black guy with the red shirt in the Star
Trek landing party when Kirk says
"Johnson, go check it out".  You know
he ain't coming back.

Kids boo and throw popcorn at Shorty.

JILL
I'm going to the kitchen.  Anybody
want anything?

TEEN
More popcorn.

Everyone laughs.  She exits.

INT. CINDY'S KITCHEN � NIGHT

Cindy is preparing chips and dip.  Jill enters.

JILL
Can I help with anything?

CINDY
Sure, can you get some more beers
out of the fridge in the garage?

JILL
Sure.

INT. CINDY'S GARAGE � NIGHT

Jill enters, turns on the lights, makes her way to the
fridge.

She is startled by a cat.

JILL
Oh, kitty, you scared me.

The cat runs out the doggie door that's cut into the garage
door.

Jill turns again.  She is startled.  This time by a horse.

JILL (CONT'D)
Oh horsey!  You scared me too!

Finally at the fridge, she grabs a few drinks.

INSERT OF FRIDGE

Beer bottle labels: Cult 45, Satan Malt Liquor, Killer
Genuine Draft.

NEW ANGLE � GARAGE

The door slowly closes.

Suddenly the lights go out.

JILL (CONT'D)
Who's there?   Hello?  Is anyone there?

Jill walking in the dark constantly talking.

JILL (CONT'D)
How tall are you?  What's your sign?  Do
you speak more than one language?

The lights back on.  The killer is standing at the top of
the steps.  Knife is drawn.

JILL (CONT'D)
Oh my God!  Please don't!  I'm just
a day player!

Killer swings with knife.  Misses.

Jill drops the bottles, starts to run.  Killer chases.  She
swings open the refrigerator door,
smashing him in the face.

Killer falls.  She runs for the door.

Killer cuts her off.  She picks up a bottle and throws it at
the killer, smashing him in the
face.  He stumbles back.

This is her chance.  She runs to the doggie door.

The killer watches in disbelief as Jill tries to stuff her
body through the doggie door.

EXT. CINDY'S GARAGE � DOGGIE DOOR � NIGHT

Jill tries pushing head through.  It takes up the whole
door.  Finally it pops through.

INT. CINDY'S GARAGE � DOGGIE DOOR � NIGHT

Jill's ass and feet struggling to get thru the small door. 
Won't fit.  Turns around and tries
to go feet first.

EXT. CINDY'S GARAGE � DOGGIE DOOR � NIGHT

Jill's head is stuck, squeezing past left side of her face. 
Her hand wiggles through, then a
foot.  An anatomical mess.

INT. CINDY'S GARAGE � NIGHT

Killer turns on the garage door opener.  The motors spark
and strain, unable to lift the
giant weight.  She keeps heaving, ramming and pushing
against the door until the entire
garage door start to shake and splinter.

Then, the entire garage starts trembling and crumbling
around her with the force of her
heaving.  Finally the whole garage just collapses on her,
killing her.

INT. CINDY'S KITCHEN � NIGHT

Several kids cheering.

TEENS
Go!   Go!   Go!   Go!  

Cindy drinking from funnel.

TEEN BOY
Whoa!

Ray enters.  Cindy lets out a loud burp.

Jump Scare Bobby steps into frame.

BOBBY
Somebody looking for me?

CINDY
Hi.  You had me worried there for a
minute.  I thought the killer got to
you before I could.

BOBBY
Could what?

Cindy kisses him in an obviously drunk and slutty way.

CINDY		
Why don't we go ahead upstairs and
whatever�

Bobby and Cindy walk hand and hand upstairs.

INT. CINDY'S BEDROOM � NIGHT

Cindy and Bobby sitting on the bed, talking.

CINDY
So�.

BOBBY
So, here we are again.

CINDY
Yeah.

BOBBY
And if your not ready still,
I'll understand.

CINDY
But I am ready.

BOBBY
You are?

CINDY
Yeah, I figured out that I have to
live my own life and I can't keep
fighting my urges.  I have to give
in and let them flow.

BOBBY
This is like a scene in a movie.

CINDY
Only this is real life, it's not a
movie.

BOBBY
Sure it is..There's the sound man and
the script supervisor..

WE SEE THE SOUND MAN AND SCRIPT SUPERVISOR WATCHING.

CINDY
What I mean is in real life you have
to enjoy each moment.

Cindy takes off her shirt.  Bobby does the same.  They kiss
passionately, licking each
others mouths, flicking their tongues.  The two tongues
start wildly slapping and lapping
together until they end up hopelessly tied and knotted
together.

Cindy and Bobby lay down on the bed.

Cindy starts to kiss his chest.  She works her way down to
his belly button then starts
back up.

Bobby gingerly pushes her head back down.  They play tug of
war.  Finally, Cindy
surrenders.  She unzips his pants.

Cindy looks up innocently.

CINDY (CONT'D)
You know, I've never really done
this before.

BOBBY
It's okay.  It's just like sucking
a tootsie pop.

Cindy lowers her head.  We hear the sounds.

Lick!  Lick!  Slurp!

BOBBY (CONT'D)
That's it, that's right.  Just
like that.

Slurp.  Suddenly CRUNCH!

Bobby screams with pain.

CINDY
I never could wait to get to the
chewy middle.

Bobby recovers.

BOBBY
Come here, let me.

Bobby slides off Cindy's pants.  He's startled by bat's
flying out.

They continue to make out. He tries to take off her panties,
but struggles.

CINDY
Here, let me.

His eyes gleam with heated anticipation as she lowers her
panties.

POOF!  Her enormous BUSH OF PUBIC HAIR fills the screen.

We hear the primitive sounds of the Call of the Wild
emanating from her untamed forest.

He whips out a machete and THWACK!  He slashes at the bush. 
He pulls back the blade
to find it's dented � he needs something stronger.

Cindy grabs him by the head and pushes it down.  She moans
with ecstasy.  We hear
Bobby struggling to breath.

CINDY (CONT'D)
To the left!  Faster!  Higher!  Wait!

She draws him a map ad gives it to him along with a compass.

Cindy finally lets Bobby up.  He coughs up a hairball.

CINDY (CONT'D)
I want sex.

BOBBY
Okay, let me just get my pants off.

Bobby stands up and takes off his pants.  From the back we
see his ass and two giant blue
balls hanging between his legs.

BOBBY (CONT'D)
Are you sure?

CINDY
I want it now!

She slams him down, tears the remainder of his clothes off
and begins to ride him like a
human sit and spin.

INT. CINDY'S LIVING ROOM � NIGHT

The party stops.  The house shakes.  Plaster falls from the
ceiling.  A loud howling noise
is echoed through out the house.

INT. CINDY'S ROOM � NIGHT

Bobby feels himself ready to climax.

BOBBY
Oh my God!  I can't hold it..OOOOO!!!

He cums, sending Cindy blasting off into the air as he
shoots a geyser of jizz.

Close on Bobby, his body caves in as fluids leave his body.

Cindy is stuck to the ceiling.

INT. CINDY'S BONG ROOM � NIGHT

Two teen boys smoking weed through a bong.  Room is filled
with smoke.

TEEN
Dude, where did you get this?  It's
fuckin' awesome

The door busts open.  The kids see the Killer.

INT. CINDY'S BONG ROOM � NIGHT

Killer hitting the bong.

KILLER
Good shit.

TEEN
Fuckin' a dude, I'm wasted.

Killer pretends to hear a noise.

KILLER
You hear that?

TEEN #2
What?

Killer does the Jason theme.

KILLER
Ching, ching, ching, ching, cha, cha,
cha, cha.  I'm just bullshitting.  Hey
you guys want to have some fun?

INT. CINDY'S BONG ROOM

Killer on the phone.

KILLER
What's your favorite scary movie?

Killer starts snickering.  We hear a terrified girl on the
phone.  He passes the phone to
one of the teens.

TEEN
Who was the killer in Friday the
Thirteenth?

They all start laughing.

INT. CINDY'S BEDROOM � NIGHT

CINDY
That was wonderful.  I really felt
something special happen between us. 
Like this bond that can only be between
two people who truly love one another,
you know?

PAN OVER TO BOBBY WHO IS ON THE PHONE.

Cindy slaps his arm.

BOBBY
Yeah, I got that ass.  Tore it up!

CINDY
Bobby!  Did you hear anything I said?

BOBBY
Yeah, sure, can you make me a
sandwich?  I'm a little hungry.

INT. CINDY'S LIVING ROOM � NIGHT

The phone rings.  Shorty answers it.

SHORTY
Hello?  What?  No way!

Shorty hangs up.  Turns to the kids.

SHORTY (CONT'D)
Hey everybody, they found Tanya
hanging from the goal post.

PARTY GOER #1
Hey lets go check it out before
they cut her down!

PARTY GOER #2
Yeah, maybe she's not wearing underwear! 
Last on gets sloppy seconds.

The party cheers.  All the guys exit the party, leaving
Shorty alone.

EXT. CINDY'S HOUSE � NIGHT

All the guys rush to their cars.

INT. CINDY'S BEDROOM � NIGHT

Bobby and Cindy are getting dressed.  Bobby sits closest to
the door.

CINDY
Bobby, where were you tonight?

BOBBY
Huh?

CINDY
I was just curious.  What took you
so long to get here?

BOBBY
Why so curious?

CINDY
Well, I just thought it would fit
the 90's horror clich� if you
turn out to be the killer.

BOBBY
You think I killed Buffy and Greg?

CINDY
Buffy and Greg are dead?

BOBBY
I thought you knew.

The door behind Bobby opens.  The killer appears.

CINDY
Bobby!  Look out!  He's behind you!

Bobby turns.  It's too late.  The killer stabs him
repeatedly.

Bobby turns to Cindy, his shirt bloodied, he's holding a
bottle of ketchup in his hand.

CINDY (CONT'D)
Oh my God!  Bobby no!!!

Bobby falls dead.

Killer wipes his knife.  Goes after Cindy.

Cindy takes off.  Runs downstairs.

INT. CINDY'S FOYER � NIGHT

Cindy runs to the door.  She looks behind her.  The killer
is gone.

Cindy turns to leave and runs into Ray.

CINDY
Ray!  I'm so glad you're okay!  The
killer is here!  He got Bobby!  We
gotta get away!

Ray says nothing.  He just looks straight ahead.  No
emotion.

Cindy hears someone calling her.  She turns to see Bobby
staggering down the steps.

BOBBY
Cindy!  Help!

CINDY
Bobby!!!

Cindy turns to his aide.  She helps him down the steps.

CINDY (CONT'D)
It's gonna be okay Bobby, but we
gotta hurry.


Ray locks the door.

CINDY (CONT'D)
Ray, what are you doing?

Bobby starts laughing.

CINDY (CONT'D)
What?!

BOBBY
We all go a little crazy sometimes. 
Billy Loomis, Scream part 1.

CINDY
No, it can't be!

Ray gives Bobby a knife.  Cindy backs into the kitchen.

INT. CINDY'S KITCHEN � NIGHT

BOBBY
Yes Cindy, it's true.

CINDY
But I thought you loved me.

BOBBY
Oh I did, but abstinence will make you
discover new things about yourself. 
That's right, Cindy, I'm gay and if you
haven't noticed, so is Ray.

Ray looks confused.

RAY
Huh?  Wait, whoa!  I'm not gay.

BOBBY
What do you mean?  You took me to
the club.

RAY
They play good music.

BOBBY
What about our trip to San Francisco?

RAY
I wanted to do some shopping!

BOBBY
But you made love to me!

RAY
Hey, you sucked my di..

BOBBY
Whatever!  The point is I'm a new man. 
I'm ready to leave all of this behind
and start a new life.

CINDY
So you kill all your friends.

BOBBY
No, just you.  See, that's the genius of
it all, the perfect crime, copycat
of a serial killer.

RAY
But there's more!  Hold on cause this
is a scream baby!

Ray exits.  He comes back with Cindy's dad, bound and
gagged.

CINDY
Dad!  Oh my God!  So what are you
gonna do, frame him?

RAY
No, we were just having a little
fun with him.

NEW ANGLE DAD.  We see his pants are down around his ankles.

BOBBY
No, the police will find you both dead
and me and Ray are the only survivors
of a maniac's revenge.  Okay Ray,
let's do it.

Bobby hands Ray the knife.

BOBBY (CONT'D)
Come on baby, get it!!!

Ray stabs Bobby repeatedly.

BOBBY (CONT'D)
Ok, ok, that's enough.

RAY
My bad.

BOBBY
Ok, my turn.

RAY
What?

BOBBY
Give me the knife! It's my turn to
stab you.

RAY
Shit, you must be crazy!  Ain't
nobody stabbing me!

Suddenly Ray goes silent.  A hook pierces his body as he is
lifted off the ground.

The killer, standing behind him, removes the hook.  Ray
falls dead.

One swift blow and Bobby is dead too.

Killer swings at Cindy.  His hook misses her and gets stuck.

Cindy punches the killer in the face.  He goes flying,
leaving his hook behind.

Cindy tries to run and the killer trips her.

INT. CINDY'S LIVING ROOM � NIGHT

They both rise to their feet and square off.

CINDY
I'm not running anymore, no more victim. 
Come on, show me what you got.

Killer back hands her.  Cindy fires back.

Killer grabs her and throws her against the wall.  She gets
back on her feet.

Cindy ala Keanu Reeves in Matrix jumps into mid-air karate
stance and freezes
momentarily.

Killer looks on in amazement.  She then proceeds to kick
major ass, running up walls and
throwing a barrage of Kung Fu kicks as if she was walking on
air.

Cindy stops for a moment to do a little mid-air Riverdance
then back to the ass
whupping.  The final kick sends the killer flying out the
window.

INT. CINDY'S KITCHEN � NIGHT

Cindy rushes to her dad to help untie him.

EXT. CINDY'S HOUSE � NIGHT

Cindy and her dad exit.  Police sirens closing in.

Cindy looks for the killer's body.  It's gone.

CINDY
No!

Police arrive and exit their vehicles.  Several officers run
into the house.

Sheriff approaches Cindy.

SHERIFF
What the hell is going on here?

Deputy runs out of the house.

DEPUTY
It's a blood bath in there, sir.

CINDY
He was right here, I swear!

SHERIFF
Who was?

CINDY
The killer.

SHERIFF
I'm gonna have to take you in.

INT. POLICE STATION � NIGHT

SHERIFF	
Let's go over this again.  You say
it was an accident?

CINDY
Yes, he was on the road.

SHERIFF
And you think he came back to get
revenge?

CINDY
Yes, it had to be him.

Doofy enters and gives Sheriff a folder.

DOOFY
They told me to give you this.

SHERIFF
Thanks, shit head.

Sheriff reads the folder.

DOOFY
You ok Cindy?

CINDY
Yes, thanks Doofy.

SHERIFF
That will be all Doofy.

Doofy exits.

SHERIFF (CONT'D)
Sorry, Cindy, it wasn't the guy you hit. 
His name was David Keegan.  Some
fisherman found his body a few weeks  
later. He's buried in Lakewood cemetery.

CINDY
That's impossible.

SHERIFF
Afraid not.

CINDY
Who could it be?

SHERIFF
Had to be someone who was connected to
all the victims.  Someone who knew about
the accident.  Someone who could move
around without being noticed.

CINDY
Oh my God!

EXT. HIGH SCHOOL FOUNTAIN � DAY � FLASHBACK

BUFFY
Doofy had the biggest crush on her.

EXT. CINDY'S HOUSE � NIGHT

Doofy at the front door.

INT. BUFFY'S BEDROOM � NIGHT

DOOFY
I'll be in the next room.

END OF FLASHBACK

INT. POLICE STATION � NIGHT

SLOW MOTION SHOT coffee cup crashing to the floor.

CINDY
Doofy!

Cindy and Sheriff run through the station looking for Doofy

SHERIFF
Anyone seen Doofy?

DEPUTY
He just left.

EXT. POLICE STATION � DAWN

Sheriff and Cindy rush out of station looking for Doofy ala
Usual Suspects.

EXT. MAIN STREET � DAW

CLOSE ON a pair of twisted feet walking.  The feet slowly
straighten out as the pace
increases.

Camera moves up to the bent hand tucked close to the body. 
It too straightens out.

Pan up to Doofy looking very normal with a devilish smile on
his face.

Doofy lights a cigarette.

A new Jaguar pulls up along side of him and he gets in.

We see Gail at the wheel.  They kiss.

GAIL
This is gonna make one helluva movie.

They drive off.`)
  .then((e) => console.log(`Código finalizado, ${e} mensagens enviadas`))
  .catch(console.error);
