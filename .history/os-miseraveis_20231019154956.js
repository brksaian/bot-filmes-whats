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

enviarScript(`"LES MISÉRABLES
A FULL-LENGTH DRAMA IN TWO ACTS
From the novel by Victor Hugo
Adapted by
Michael Druce
BROOKLYN PUBLISHERS, LLC
Publishers of Contest-Winning Drama
Copyright © 2009 by Dwayne Yancey
All rights reserved
CAUTION: Professionals & amateurs are hereby warned that Les Misérables is subject to a royalty. This play is fully protected under the
copyright laws of the United States of America, Canada, the British Commonwealth and all other countries of the Copyright Union.
RIGHTS RESERVED: All rights to this play are strictly reserved, including professional and amateur stage performance rights. Also reserved
are: motion pictures, recitation, lecturing, public reading, radio broadcasting, television, video and the rights of translation into non-English
languages.
PERFORMANCE RIGHTS & ROYALTY PAYMENTS: All amateur and stock performance rights to this play are controlled exclusively by
Brooklyn Publishers, LLC. No amateur or stock production groups or individuals may perform this play without securing license and royalty
arrangements in advance from Brooklyn Publishers, LLC. Questions concerning other rights should be addressed to Brooklyn Publishers, LLC.
If necessary, we will contact the author or the author’s agent. PLEASE NOTE that royalty fees for performing this play can be located online at
Brooklyn Publishers, LLC website (http://www.brookpub.com). Royalty fees are subject to change without notice. Professional and stock fees
will be set upon application in accordance with your producing circumstances. Any licensing requests and inquiries relating to amateur and
stock (professional) performance rights should be addressed to Brooklyn Publishers, LLC. You will find our contact information on the following
page.
Royalty of the required amount must be paid, whether the play is presented for charity or profit and whether or not admission is charged.
AUTHOR CREDIT: All groups or individuals receiving permission to produce this play must give the author(s) credit in any and all
advertisement and publicity relating to the production of this play. The author’s billing must appear directly below the title on a separate line
where no other written matter appears. The name of the author(s) must be at least 50% as large as the title of the play. No person or entity may
receive larger or more prominent credit than that which is given to the author(s).
PUBLISHER CREDIT: Whenever this play is produced, all programs, advertisements, flyers or other printed material must include the following
notice:
Produced by special arrangement with Brooklyn Publishers, LLC (http://www.brookpub.com)
TRADE MARKS, PUBLIC FIGURES, & MUSICAL WORKS: This play may include references to brand names or public figures. All references
are intended only as parody or other legal means of expression. This play may contain suggestions for the performance of a musical work
(either in part or in whole). Brooklyn Publishers, LLC have not obtained performing rights of these works. The direction of such works is only a
playwright’s suggestion, and the play producers should obtain such permissions on their own. The website for the U.S. copyright office is
http://www.copyright.gov.
COPYING from the book in any form (in whole or excerpt), whether photocopying, scanning recording, videotaping, storing in a retrieval
system, or by any other means, is strictly forbidden without consent of Brooklyn Publishers, LLC.
TO PERFORM THIS PLAY
1. Royalty fees must be paid to Brooklyn Publishers, LLC before permission is granted to use and perform the
playwright’s work.
2. Royalty of the required amount must be paid each time the play is performed, whether the play is presented for
charity or profit and whether or not admission is charged.
3. When performing one-acts or full-length plays, enough playbooks must be purchased for cast and crew.
4. Copying or duplication of any part of this script is strictly forbidden.
5. Any changes to the script are not allowed without direct authorization by Brooklyn Publishers, LLC.
6. Credit to the author and publisher is required on all promotional items associated with this play’s performance(s).
7. Do not break copyright laws with any of our plays. This is a very serious matter and the consequences can be quite
expensive. We must protect our playwrights, who earn their living through the legal payment of script and
performance royalties.
8. If you have questions concerning performance rules, contact us by the various ways listed below: Toll-free: 888-473-8521
Fax: 319-368-8011
Email: customerservice@brookpub.com

Copying, rather than purchasing cast copies, and/or failure to pay royalties is a federal offense. Cheating us and our
wonderful playwrights in this manner will be prosecuted to the full extent of the law. Please support theatre and follow
federal copyright laws.
CAST OF CHARACTERS
(For a flexible cast of 41 -- 20 Male – 18 female – 3 flexible + extras)
(In order of appearance)
INSPECTOR JAVERT: Police Inspector and former Toulon Prison guard.
JEAN VALJEAN: Ex-convict sentenced to prison for stealing bread.
POLICEMAN: Officer who patrols the streets of Digne.
MADAME DE R: A kind woman from Digne
MADAME MAGLOIRE: The bishop’s suspicious housekeeper.
MADEMOISELLE BAPTISTINE: The Bishop’s sister.
THE BISHOP: Kind-hearted priest who takes pity on the poor.
POLICEMAN #1: Assists with the arrest of Valjean.
POLICEMAN #2: Assists with the arrest of Valjean.
MADAME THENARDIER: Wife of Thenardier.
FANTINE: A young working girl with a child.
CHILD COSETTE: Fantine’s child.
THENARDIER: A wicked innkeeper.
CITIZEN #1: A citizen of Montreuil-Sur-Mer
CITIZEN #2: A citizen of Montreuil-Sur-Mer
CITIZEN #3: A citizen of Montreuil-Sur-Mer
MADAME FOREWOMAN: Manager of Madeleine’s factory.
MADAME VICTURNIEN: A local busybody.
BAMATABOIS: Dandy who picks on the unfortunate.
LEGARD: A friend of Bamatabois.
MARGUERITE: A friend of Fantine.
MADAME VERON: Assistant to a traveling dentist.
SISTER SIMPLICE: Kindly nurse.
PROSECUTOR: In charge of prosecuting Valjean.
CHAMPMATHIEU: Imprisoned for stealing apples.
JUDGE: Presides over the court proceedings against Valjean.
BREVET: A prisoner of the state.
GUARD: Prison guard.
ENJOLRAS: Revolutionary and friend of Marius.
MARIUS: A student revolutionary.
MARIE: Revolutionary friend of Marius.
EPONINE: Eldest daughter of the Thenardiers. 
COSETTE: Fantine’s daughter.
TOUSSAINT: Valjean’s housekeeper and Cosette’s nanny
AZELMA: Youngest daughter of the Thenardiers
DETECTIVE: Assistant to Inspector Javert.
BIGRENAILLE: A criminal hired by Thenardier.
HENCHMAN: Another criminal hired by Thenardier
MADAME GILLENORMAND: Marius’ aunt.
GAVROCHE: Street urchin.
JOLY: Revolutionary and friend of Marius
TIME: 1815 – 1833 
LES MISÉRABLES
From the novel by Victor Hugo
Adapted by
Michael Druce
ACT I
SCENE 1 – TOULON PRISON
AT RISE: The scene opens in darkness. Downstage center, a pool of light snaps up full at the sound of an ink
stamp striking hard on a small, wooden desk. The sound, amplified, echoes away. INSPECTOR JAVERT stands
on one side of the desk; JEAN VALJEAN stands on the other. He is in prisoner garb, dirty, hair a mess. He should
be practically unrecognizable from the man we shall see later.
JAVERT: You are free.
VALJEAN: Nineteen years for taking a loaf of bread.
JAVERT: Five years for stealing a loaf of bread, fourteen years for trying to escape.
VALJEAN: A loaf of bread to feed my starving sister and her children.
JAVERT: The law is the law.
VALJEAN: I have paid dearly to learn that.
JAVERT: Then learn this. Liberation is not deliverance. A convict may leave the galleys behind, but not his crime. You will
carry this yellow passport wherever you go. It marks you. Convict. Show your papers, whether you are asked for them
or not. Failure to show your papers is a breach of parole. Break your parole and you will end up here again. Next time
the sentence will be life.
VALJEAN: I will never return to this place.
JAVERT: That is what they all say. Remember, Valjean, I was born in a prison. I know your kind. Now go.
(VALJEAN exits as the pool of light fades on JAVERT. JAVERT exits as the lights come up on the next scene. EXTRAS
will move the desk. The desk might be used as part of the next scene, or it may be carried off. Whenever EXTRAS are
used to move set pieces, THEY should always appear as citizens or servants.)
SCENE 2 – A STREET IN DIGNE
SCENE: A STREET in the small town of Digne, evening. At first the scene is alive with townspeople going about
their routines, shopping, talking, or strolling. VALJEAN, carrying a knapsack, enters center and moves through
the crowd, stopping people to ask directions or asking for a handout. Everyone is too busy or too scared to care.
A POLICEMAN stops him.
POLICEMAN: You! You have papers? Show them to me.
(VALJEAN pulls his yellow papers from his pocket and hands them to the POLICEMAN, who gives them a quick look
over.)
POLICEMAN: Move along. Go someplace else. Our citizens do not feel safe with strangers in town.
VALJEAN: Where am I to go?
POLICEMAN: That is not my concern. Move on, otherwise you will be arrested.
VALJEAN: At least I would have a roof over my head.
POLICEMAN: We’re full. Now move along.
(As the POLICEMAN goes up the DC steps, exiting LC, the lights begin to fade to night. The VILLAGERS clear out and
VALJEAN moves left, seeking shelter in the small tunnel of the bridge between the two benches. HE uses his knapsack
as a pillow. MADAME de R, a kind-hearted woman enters from UC and crosses DL. SHE is startled by the sight of
VALJEAN.)
MADAME de R: What are you doing there, Monsieur?
VALJEAN: What does it look like? I am trying to sleep. 
MADAME de R: On the ground?
VALJEAN: For nineteen years I have slept on a wooden mattress, tonight I have one that is softer.
MADAME de R: You must have been a soldier.
VALJEAN: What? (HE lies.) Oh, yes, I was in a regiment.
MADAME de R: Why not go to an inn?
VALJEAN: I have no money.
MADAME de R: (Pulling a few coins from her purse.) Alas! I have only four sous in my purse.
VALJEAN: I’ll take whatever I can. (Takes the coins.)
MADAME de R: You cannot find lodging for so little at an inn, and you cannot spend the night this way. You must be cold
and hungry. It is disgraceful how soldiers are treated these days. You should be given lodging out of charity.
VALJEAN: I have knocked at every door. Everyone has turned me away.
MADAME de R: Have you knocked at that one there, across the square? (Pointing right.)
VALJEAN: No.
MADAME de R: Then do. Knock there. You’ll be treated with kindness. God’s mercy, Monsieur. (Exits DL.)
VALJEAN: Indeed. (Exits UC.)
SCENE 3 – THE BISHOP’S HOUSE
SCENE: THE BISHOP’S HOUSE. A simple table and three small chairs DR. On the table or nearby are two silver
candlesticks. MADAME MAGLOIRE, a grumpy and distrustful housekeeper enters DR. SHE is followed by
MADEMOISELLE BAPTISTINE, the Bishop’s sister. THEY are setting the table for dinner from a box containing
silverware.
MAGLOIRE: Some unpleasant adventures might happen to anyone who comes home late tonight.
BAPTISTINE: Do the police know? What are they doing?
MAGLOIRE: Nothing.
BAPTISTINE: Nothing? Why not? Are they not being paid to protect us?
MAGLOIRE: The prefect and the mayor do not like each other. Each is hoping to embarrass the other by ignoring
incidents and laying blame.
BAPTISTINE: No, you don’t say.
MAGLOIRE: I do. It is up to the people to be their own police. Everyone ought to be careful to bolt and bar their houses
properly. Your brother the bishop is much too lax. This house is not safe. I say we must have bolts.
BAPTISTINE: My brother has his own ways. His door is never locked. Whoever enters is immediately a guest. He is
afraid of nothing, not even at night.
(The BISHOP enters DR.)
MAGLOIRE: If the Monseigneur will permit me, I will go to the locksmith.
THE BISHOP: We have no need of a locksmith.
BAPTISTINE: Then you have heard.
THE BISHOP: I vaguely heard some of it.
BAPTISTINE: Tell him, Madame Magloire.
MAGLOIRE: There is a dangerous beggar, a suspicious vagabond about town, going from to door begging for lodging
and food. Word is that everyone ought to be careful and to bar their doors.
THE BISHOP: Are we in any great danger?
MAGLOIRE: He has a knapsack and a rope and a terrible looking face.
THE BISHOP: Really?
MAGLOIRE: Something will happen tonight, everyone says so. You must bolt your door. Don’t you agree, Mademoiselle?
BAPTISTINE: Me? I say nothing. Whatever my brother does is his business. (SHE sits at the table.)
(SOUND: There is a sharp knock at the door.)
MAGLOIRE: My heavens! Don’t answer. It might be--
THE BISHOP: Come in.
(VALJEAN enters UR, looking every bit as sinister as MADAME MAGLOIRE described.)
MAGLOIRE: It’s him.
VALJEAN: Good evening, I beg your pardon. The hour is late.
THE BISHOP: Come in, come in. You are welcome, my son. You look tired and hungry. 
VALJEAN: My name is Jean Valjean. Yes, I am very tired, very hungry.
THE BISHOP: Madame Magloire, put out another plate.
MAGLOIRE: But Monseigneur, this man is—
THE BISHOP: Our guest. Another setting, please.
(MADAME MAGLOIRE picks up an old tin plate.)
Silver, to match what is on the table.
(MADAME MAGLOIRE puts a silver plate on the table.)
Thank you. You may retire for the evening. (To VALJEAN.) Please, Monsieur, sit. Join my sister and me. It is not
much, just some bread and stew.
(MADAME MAGLOIRE, obviously disgruntled, exits DR.)
VALJEAN: (HE sits and begins devouring his meal.) It is a feast. I am a convict. I have spent nineteen years in prison.
Four days ago I was set free. I have been walking from Toulon. Today I walked thirty-five miles. When I reached this
town this evening I went to an inn, and they sent me away on account of my yellow passport, which I had shown at
the mayor’s office as the law demands. I went to another inn. They said, “Get out.” It was the same story at each inn.
Nobody would have me. I went to the jail, and the turnkey would not let me in. I crept into a dog-kennel. The dog bit
me and drove me away as if he had been the man. I went to the fields to sleep beneath the stars, but there were no
stars. It began to rain—but God did not stop the drops—so I came back to town to seek shelter in some doorway. A
good woman in the square told me to knock here. Is this an inn? I have money, money I saved in prison. I’ll pay.
THE BISHOP: Your money is of no use here.
VALJEAN: Do you understand? I am a convict. This is my yellow passport. That is enough to have me kicked out
wherever I go. Read it. I’ll read it to you. I can read. I learned in prison. There is a school there for those who wish to
learn. I am very tired, Monsieur. Do you have a stable? A place where I can sleep?
THE BISHOP: My sister will make up a bed for you in the alcove.
(Shaking her head, BAPTISTINE excuses herself and goes off toward the alcove RC.)
VALJEAN: Is it true? You won’t turn me away?
THE BISHOP: Finish your supper, and then you shall sleep.
VALJEAN: You are good people, Monsieur. I beg your pardon, Monsieur Innkeeper, I forgot to ask your name.
THE BISHOP: I am the priest who lives here.
VALJEAN: A priest? Of course, I should have known. You take me into your house. You feed me and offer me shelter.
You know where I come from and how miserable I am.
THE BISHOP: This is not my house, it is the house of Christ. Here the suffering, the hungry, and the thirsty are welcome.
VALJEAN: Forgive me, Monsieur Cure,’ how may I repay you?
THE BISHOP: We shall speak in the morning. For now, you are tired and hungry. When you are ready, Mademoiselle
Baptistine will show you to your room.
(Fade out.)
SCENE 4 – THE BISHOP’S COTTAGE
SCENE: The same, the following morning. Plates have been cleared. BAPTISTINE enters DR to set the table. SHE
opens the box containing the silver, but it is empty.
BAPTISTINE: Madame Magloire? Madame Magloire?
(MADADME MAGLOIRE enters from the alcove, appearing distraught.)
BAPTISTINE: What has become of our silverware?
MAGLOIRE: He’s gone.
BAPTISTINE: What?
MAGLOIRE: The man who came last night is gone. (Suddenly realizing what has happened.) Has he taken the silver?
BAPTISTINE: Oh, my. 
(THE BISHOP enters DR.)
BAPTISTINE: Brother, we’ve been robbed.
MAGLOIRE: That beggar who stayed here last night has stolen our silver.
THE BISHOP: Our silver? Did the silver belong to us?
MADAME MAGLOIRE: Well, who else?
THE BISHOP: I have wrongfully withheld this silver. It does not belong to us, it belongs to the poor.
BAPTISTINE: How will we eat? With what?
THE BISHOP: Do we not have tin plates?
MAGLOIRE: Tin? Tin smells.
THE BISHOP: Well then, iron.
MAGLOIRE: Iron leaves a taste.
THE BISHOP: Then we shall use wooden bowls.
BAPTISTINE: Oh, my.
THE BISHOP: One doesn’t need a fork or a spoon to dip a piece of bread in a bowl of milk.
MAGLOIRE: Was there ever such an idea? To take in a man like that, and give him a bed. It is a blessing he did nothing
but steal. It gives me chills to think what could have happened.
(SOUND: A KNOCK at the door.)
THE BISHOP: Come in.
(VALJEAN enters UR escorted by TWO POLICEMEN.)
POLICEMAN #1: Monseigneur, I regret this disturbance, but this man--
THE BISHOP: There you are, Jean. I am glad to see you.
POLICEMAN #2: You know this man?
THE BISHOP: He was my guest last night. He had an early start this morning. Did you forget? I gave you the
candlesticks as well. They match the rest of the silver and would easily bring two hundred francs. Why didn’t you take
them along with the rest?
POLICEMEN #2: Then what this man said was true? When we met him, he was acting like a man running away, and we
arrested him in order to see. He had this silver with him. (Reaching into VALJEAN’s bag, HE pulls out a silver utensil.)
THE BISHOP: And he told you that it had been given to him by an old priest in whose house he had spent the night. I see
it all, and you brought him back here. It is all a mistake.
POLICEMAN #1: We can let him go?
THE BISHOP: Yes, release him. Thank you, Messieurs, you are no longer needed.
(The POLICEMEN exit UR.)
VALJEAN: Is it true? I am free to go?
THE BISHOP: You must surely know God has sent you to this house. Before you go away, take these candlesticks. (HE
removes the two candlesticks from the table and stuffs them into VALJEAN’s bag.) Use this silver to become an
honest man. It is your soul I am buying for you.
VALJEAN: (Sinking to his knees, HE kisses THE BISHOP’s hand.) Forgive me, Monseigneur. I am humbled in your
presence.
THE BISHOP: I withdraw your soul from the darkness and give it to God. (HE pulls the cross from around his neck and
hangs it over VALJEAN’s head.) Now go.
(As VALJEAN exits UR, MADAME MAGLOIRE and BAPTISTINE exchange glances and shake their heads. THEY strike
whatever props and furniture will need to be moved as the next scene begins. The WOMEN and THE BISHOP exit DR.)
SCENE 5 – THENARDIER’S INN
SCENE: THENARDIER’S INN. A small sign reads Thenardier Inn Note: The inn sign will be removed between acts
and used as a prop in Act II, Scene 5. MADAME THENARDIER enters from the café doors and begins sweeping
outside of the inn. FANTINE and the child COSETTE enter from DL and cross right. FANTINE carries a small
travel bag. THEY have been walking many miles and are exhausted.
MADAME THENARDIER: May I help you? 
FANTINE: Forgive me, my little girl and I are on our way to Montreuil-sur-mer. We saw two little girls playing on the
swings beside the inn. We thought we might rest a moment. Perhaps my little girl could play as well. It has been a
long journey.
MADAME THENARDIER: Alright. She’ll be safe. Those are my girls, Eponine and Azelma.
FANTINE: It’s alright, Cosette. The nice lady said you could play. I’ll be right here.
(COSETTE exits DR.)
FANTINE: Your little girls seem so happy.
MADAME THENARDIER: Why shouldn’t they be? My name is Madame Thenardier. My husband and I run this inn.
FANTINE: My name is Fantine. I cannot get work in Paris, and so I thought to go to Montreuil-sur-mer to see if I might
find work there.
MADAME THENARDIER: Does your little girl have a father?
FANTINE: No, he— I am a widow. My husband died.
MADAME THENARDIER: I see. We see a lot of young widows these days.
FANTINE: (Looking off.) Look at them, how soon children get to know one another.
MADAME THENARDIER: One would swear they are sisters.
FANTINE: Madame, will you keep my child for me? You see I can’t take her into the country with me. Work forbids it.
With a child I couldn’t find a position there. It is God who has led me to your inn. The sight of your little ones, so pretty
and clean and happy overwhelmed me. I said, there is a good mother; they will be like three sisters, and then it will
not be long before I come back. Will you keep my child for me?
MADAME THENARDIER: These are difficult times, Mademoiselle. That is a lot ask. I must think it over.
FANTINE: I will give six francs a month.
(THENARDIER, who has been watching from the inn, enters from café doors.)
THENARDIER: Not less than seven francs, and six months paid in advance.
MADAME THENARDIER: My husband.
THENARDIER: Six times seven are forty-two.
FANTINE: I will pay it.
THENARDIER: And fifteen francs extra for the first expenses.
MADAME THENARDIER: That’s fifty-seven francs.
FANTINE: I have eighty francs. That should leave me enough if I walk the rest of the way. I will earn some money there,
and as soon as I have, I will come for my little one.
THENARDIER: Has the child a wardrobe?
FANTINE: Here, in this carpet-bag, and a fine wardrobe, too. An extravagant wardrobe, everything in the dozens, and silk
dresses like a lady.
THENARDIER: Silk, eh? Don’t worry, we’ll take care of everything.
MADAME THENARDIER: Go inside. It’s getting late. You can spend the night here and then get an early start.
FANTINE: Thank you, Madame and Monsieur.
(FANTINE goes inside the inn.)
THENARDIER: There’s luck for you. Fifty-seven francs practically pays our debt. Without this, I should have had a bill
collector showing up with a sheriff. You’ve built a good mousetrap with Eponine and Azelma.
MADAME THENARDIER: Without knowing it.
THENARDIER: As soon as she’s gone, we’ll pawn the clothes. They should fetch at least another sixty francs.
(THEY exit through the café doors.)
SCENE 6 – TOWN SQUARE IN MONTREUIL-SUR-MER
SCENE: The town of MONTREUIL-SUR-MER. A group of CITIZENS gather in the town square left of center.
CITIZEN 1: Have you heard the news about poor Fauchelevent?
CITIZEN 2: I heard he was almost killed today, caught between the wheels of his cart.
CITIZEN 3: His horse collapsed and the cart fell, its whole weight came to rest on the old man’s chest.
CITIZEN 1: The situation was impossible. Inspector Javert sent for a jack, but the nearest blacksmith was at least a
quarter of an hour away. 
CITIZEN 3: Then Monsieur Madeleine arrived and the whole crowd went silent. It was as if the mayor had cast a spell on
them. When told that the blacksmith would be at least a quarter of an hour, Monsieur Madeleine said, “We can’t wait
that long.” Then he offered five, ten, twenty louis d’or to anyone who could lift the cart with his back, but of course no
one could.
CITIZEN 1: Inspector Javert said it wasn’t willingness they lacked, it was strength. He said it would have taken a man of
uncommon power to raise a wagon like that on his back. He said he had known only one man capable of doing what
the mayor was asking. He was a convict from the galleys of Toulon, a man named Jean Valjean, a man who was
wanted for breaking his parole.
CITIZEN 2: Then how was Fauchelevent rescued?
CITIZEN 3: The mayor became pale and wiped his brow, and without saying a word he fell on his knees under the cart
and with a strength I have never witnessed, he raised the cart enough so that old Fauchelevent was pulled to safety.
CITIZEN 2: Remarkable. I remember when the mayor first came, and how public opinion was against him, how people
regarded him as ignorant and uneducated, mysterious.
CITIZEN 3: That’s all changed now. His methods have turned what was once a worthless factory into a gold mine and
given new life to our town. I have never seen a man transform a town or himself by such sheer force of will.
CITIZEN 1: Still, there is one who is not convinced.
CITIZEN 2: Javert, you mean?
CITIZEN 1: Indeed. By the way he looked at Monsieur Madeleine today you would think it was the mayor himself who
had been that prisoner Javert spoke of.
CITIZEN 3: He has made discreet inquiries about the mayor’s past.
CITIZEN 2: The peasants of Northern Spain believe that in every litter of wolves there is one wolf-pup that is killed by the
mother, for fear that when it grows up it will devour the others. Give that wolf a human face and you will have Javert.
CITIZEN 1: Once the wolf sniffs his prey, he never forgets the scent.
(The CITIZENS exit.)
SCENE 7 – THENARDIER’S INN
SCENE: The THENARDIER INN (R) and a bench in the park at MONTREUIL-SUR-MER. (L.) A spot comes up on
FANTINE seated on the bench, reading a letter from Madame Thenardier. Right, we see child COSETTE looking
pitiful and alone, sweeping the floor with a straw broom.
FANTINE: (Reading.) Mademoiselle, a few brief words to assure you Cosette is doing wonderfully well. She is happy and
carefree. We think of her as one of our own. We have even added a third swing for her. She speaks of you often, and
we assure her you will come to see her as soon as you are able. In the meantime, expenses continue to mount. She
plays hard and wears out her clothes, and so we must ask you for an additional five francs a month. You surely
realize she is a growing girl and requires more food. Times being what they are, you understand. Madame
Thenardier.
(FANTINE folds the letter and absentmindedly strokes her hair as SHE exits L, lost in thought about COSETTE, who exits
into the inn.)
SCENE 8 – A FACTORY IN MONTREUIL-SUR-MER
SCENE: The COURTYARD of the factory at Montreuil-sur-mer. MADAME VICTURNIEN, a local busybody, enters
UC, followed a moment later by MADAME FOREWOMAN, a stern woman who oversees the young women at the
factory.
FOREWOMAN: Madame Victurnien, I have sent for the girl.
VICTURNIEN: Good.
FOREWOMAN: How was your trip to Paris?
VICTURNIEN: Paris is a sewer, streets littered with riff raff. It’s a disgrace. Young women walking the streets, children
begging for food. I hardly know what the world has come to. 
FOREWOMAN: All the more reason to be thankful for our Mayor, Monsieur Madeleine, who tolerates no impropriety
among the young women he hires.
VICTURNIEN: Yes, the factory and the streets of Montreuil-sur-mer must be purged of those who would bring us shame.
FOREWOMAN: If what you say about the girl is true--
VICTURNIEN: I have seen the child myself. Cost me thirty-five francs. My niece alerted me to her. Letters back and forth,
putting on airs. Everyone knows of the child. Everyone in this factory knows what sort of a woman Mademoiselle
Fantine is.
(FANTINE enters L.)
FANTINE: You wish to see me, Madame Forewoman?
FOREWOMAN: This is for you. (Offers a small envelope.)
FANTINE: What is it?
FOREWOMAN: Fifty francs.
FANTINE: I don’t understand.
FOREWOMAN: On behalf of the Mayor, you are no longer wanted in this shop. I am letting you go.
FANTINE: But why? What have I done?
FOREWOMAN: Not only are you a mediocre worker, Mademoiselle, but you are a woman of loose character. It is well
known you have a child in Montfermeil.
VICTURNIEN: Don’t bother trying to deny it. I have seen her. I have just returned from Paris. I stopped at Montfermeil on
the way.
FANTINE: No, please. (Coughing.) I must have this job. How will I pay for my daughter’s keep?
FOREWOMAN: That is not my concern. You’re young and pretty, you can find some way to pay.
VICTURNIEN: But not here, Mademoiselle. Try the streets of Paris.
FANTINE: Please, give me one more chance. Let me speak with the mayor.
VICTURNIEN: The mayor has no interest in you.
FOREWOMAN: Please, Mademoiselle, leave these premises at once, or I shall be forced to send for Inspector Javert.
(The TWO WOMEN exit DL. Dazed, FANTINE hardly knows what to do. A pair of dandies and tormentors, BAMATABOIS
and LEGARD, enter LC.)
BAMATABOIS: (Wolf whistle.) Now what have we here?
LEGARD: It might be a lady
BAMATABOIS: It might be. But I think this one is a peasant.
LEGARD: In that case, let’s go peasant hunting.
(As THEY begin to tease FANTINE, SHE begins to cough violently.)
BAMATABOIS: Leave her be. She’s got the cough. We’ll set our sights on finer stuff.
(The pair exit C. Broken, FANTINE exits DL.)
SCENE 9 – THENARDIER’S INN
SCENE: Outside the THENARDIER INN. THENARDIER, holding a small skirt, storms on followed by MADAME
THENARDIER.
THENARDIER: She sent a skirt? No money? She sent a skirt?
MADAME THENARDIER: You did say Cosette needed a warm woolen skirt for winter. That it would cost ten francs?
THENARDIER: I wanted the money, you blockhead, not the skirt. Give it to Eponine. I’ll write to her again.
MADAME THENARDIER: What can you say this time that you haven’t said already?
THENARDIER: I’ll tell her the child has come down with military fever, that the necessary medicines are expensive. It is
ruining us, and we can no longer pay. Unless she sends us forty francs within a week, the child will die.
MADAME THENARDIER: She has no job. She takes in sewing. As it is, she sold her hair to buy the skirt. Where will she
get the money?
THENARDIER: I don’t care.
(BOTH exit into the inn.)
SCENE 10 – A STREET IN MONTREUIL-SUR-MER
SCENE: A STREET in Montreuil-sur-mer (L). FANTINE, her hair shorn, is seated on a bench, reading another
letter. MARGUERITE, a good friend, enters (L) and crosses to FANTINE.
MARGUERITE: Fantine.
FANTINE: Hello, Marguerite.
MARGUERITE: Another letter? Another demand for money? What is it this time?
FANTINE: Cosette is ill.
MARGUERITE: Again? I have never known a child to have so many complaints.
FANTINE: She needs medicine, Marguerite. What am I to do? The letter says she has military fever. Have you heard of
it? Is it a disease?
MARGUERITE: Yes, it is a disease.
FANTINE: Then it needs a good many medicines?
MARGUERITE: Yes, terrible medicines. They are not cheap.
FANTINE: How does it come upon you?
MARGUERITE: I don’t know. It just comes.
FANTINE: Does it attack children?
MARGUERITE: Children especially.
FANTINE: Do people die of it? (Coughs.)
MARGUERITE: (Ignoring the question.) Listen to me, Fantine, you must also take care of yourself. That cough is not
getting any better. I can hear you through the wall, working at your sewing through the night. You need rest, you need
food.
FANTINE: By sleeping but five hours and working the rest at my sewing, I shall always succeed in nearly earning bread.
When one is sad, one eats less. My sufferings mean nothing to me as long as Cosette is safe and happy.
MARGUERITE: Come, let’s get you home.
(As THEY move (R), DR comes to life as MADAME VERON, a colorfully dressed woman working as a barker, enters RC
and addresses a group of people who have suddenly gathered.)
MADAME VERON: You are amazed? Yes? He is a man of many talents. Not only does he juggle, swallow swords, and
eat fire, he is a traveling professor of dentistry as well, offering complete sets of teeth, opiates, powders, and elixirs.
Show him your teeth and he will show you gold. (To FANTINE.) You there, Mademoiselle, you have very pretty teeth.
MARGUERITE: Come, let’s be on our way.
MADAME VERON: Mademoiselle, if you will sell the dentist your two incisors, he will give you a gold Napoleon for each.
FANTINE: What’s that? What are my incisors?
MADAME VERON: The incisors are the front teeth, the two upper ones.
FANTINE: How horrible.
MADAME VERON: Consider, my beauty, two Napoleons, how much good they will do for you. If you have the courage
for it, come this evening to the Inn. The professor will be waiting.
MARGUERITE: That’s abominable. Why are such people allowed to prey on the troubles of others?
FANTINE: Two Napoleons. That is forty francs. But I should look horrible. Hair is one thing, but teeth?
MARGUERITE: Fantine, put it out of mind.
FANTINE: Marguerite, my child will not die with a dreadful sickness because I did not send aid.
MARGUERITE: My poor, poor girl.
(THEY exit UC. MADAME VERON and the CITIZENS exit.)
SCENE 11 - A STREET IN MONTREUIL-SUR-MER
SCENE: A STREET in Montreuil-sur-mer. FANTINE staggers on from UC, holding a cloth over her mouth. SHE has
had her teeth pulled. SHE rests on the bench left of center. BAMATABOIS enters from the steps UC, crosses the
bridge, and pauses to consider FANTINE. HE hops down beside the bench.
BAMATABOIS: Sold your teeth, did you? Ugh, how ugly you are.
FANTINE: Leave me alone.
BAMATABOIS: If I were you, I should hide that face.
FANTINE: Go on, you’re nothing but an idler. Leave me to my misery.
BAMATABOIS: Idler? A tramp like you calls a gentleman like me an idler? I’ll show you. I’ll beat you like the animal you
are. 
(BAMATABOIS pushes FANTINE violently to the ground. SHE reaches for a nearby stick and strikes the young dandy on
the shin. HE wails in pain and falls to the ground. FANTINE strikes him over and over with her doubled up fists.
BAMATABOIS’ cries attract onlookers and then JAVERT who enters hastily DL and then pulls the two apart.)
JAVERT: Stop this at once.
(BAMATABOIS flees UC.)
FANTINE: It wasn’t my fault. He pushed me. He—(SHE sees BAMATABOIS is gone.)
JAVERT: I have seen you on the streets, Mademoiselle. You’ll get six months for this.
FANTINE: Six months? Six months in prison? Monsieur Javert, I beg your pity. I assure you that I was not in the wrong. If
you had been here from the beginning, you would have seen. I wasn’t immodest with the young man, I didn’t speak to
him. I have a daughter who needs me.
JAVERT: Come, I have heard you out. You’ll have your six months. The eternal father in person can do nothing for you.
(VALJEAN enters LC and comes down the steps, crossing to FANTINE and JAVERT.)
VALJEAN: One moment, if you please.
JAVERT: Monsieur Mayor.
FANTINE: So, it is you I have to thank.
(FANTINE spits in VALJEAN’S face. Immediately, JAVERT jerks her back, but SHE pulls away and stares directly into
VALJEAN’s face.)
FANTINE: The wonderful mayor who took my job away at the factory because I have a daughter who I cannot support
and no husband. She is ill and needs medicine and clothes to keep her warm. But what do you care about the
miserable ones?
VALJEAN: Inspector Javert, give this woman her liberty.
JAVERT: Monsieur Mayor, that cannot be done. This wretched woman has insulted a citizen.
VALJEAN: I know all about it. I am witness to the incident. It is the citizen who was in the wrong; he was the one who
should have been arrested.
JAVERT: This wretch has also insulted you as well.
VALJEAN: That is my concern. The insult rests with me. I can do what I please about it.
JAVERT: I beg to differ, Monsieur Mayor. The insult rests with justice.
VALJEAN: Javert, the highest justice is conscience. I have heard this woman. I know what I am doing.
JAVERT: I am within the limits of my authority—
VALJEAN: I know the law, Javert. By the terms of articles nine, eleven, fifteen, and sixty-six, this is within my jurisdiction.
This will woman will be released.
JAVERT: Monsieur Mayor, permit—
VALJEAN: Not another word. You may go.
(JAVERT exits DL.)
VALJEAN: I knew nothing of what you said. I was away on business. I did not know that you had left my workshop. Why
did you not come to me?
FANTINE: The forewoman said you had no interest in people like me.
VALJEAN: Mademoiselle, I beg your forgiveness. The forewoman had no right to treat you that way. I will pay your debts.
I will have your child come to you. You may live here, Paris, wherever you choose.
FANTINE: Oh, Monsieur, how can I ever repay you? (Coughing.)
VALJEAN: Come, I will take you to the factory infirmary.
(THEY exit DL.)
SCENE 12 – VALJEAN’S STUDY
SCENE: VALJEAN’S STUDY. SISTER SIMPLICE enters DL with a letter for VALJEAN who is standing DC.
SISTER SIMPLICE: A letter, Monsieur. 
VALJEAN: From Montfermeil?
SISTER SIMPLICE: Yes, addressed to Mademoiselle Fantine.
VALJEAN: Thank you, sister. How is she today?
SISTER SIMPLICE: Not much change. She is asking for Cosette.
VALJEAN: (Opening the letter.) I had hoped they would bring her, but I see now they have no intention of letting the child
go, not as long as they are being paid. I must go there myself.
SISTER SIMPLICE: Will there be anything else?
VALJEAN: No, Sister, thank you.
(JAVERT enters DL.)
SISTER SIMPLICE: Inspector. (Exits DL.)
JAVERT: Good morning, Monsieur Mayor. I wonder if I might have a moment of your time.
VALJEAN: I have some important business to take care of, a personal matter.
JAVERT: Then I won’t keep you long. A criminal offense has been committed. A minor official in the government has
shown a lack of respect for a magistrate in the gravest manner.
VALJEAN: Javert, in all due respect, this sounds like a routine matter—
JAVERT: It is I who has committed the offense, and the magistrate is you. I have come to ask you to assign charges and
to procure my dismissal.
VALJEAN: You wished to be dismissed?
JAVERT: I am afraid I must insist.
VALJEAN: You’ll at least do me the courtesy of explaining why.
JAVERT: That evening after the scene with the girl Fantine, I was enraged. I denounced you to the prefect of police in
Paris as a former convict. It was an idea I had for a long time. A certain resemblance, your immense strength, the
incident with Fauchelevent, a somewhat inconclusive past. I don’t know what other stupidities, but at last I took you for
a man named Jean Valjean.
VALJEAN: What name?
JAVERT: Jean Valjean. He was a convict when I was a guard at Toulon prison. He was released on parole and then
broke it. According to an old woman who lives in Digne, Valjean stole silver from the old bishop who has since passed
away. For eight years his whereabouts have been unknown. In anger I imagined you were that man, and I denounced
you to the prefect.
VALJEAN: What answer did you get?
JAVERT: That I was crazy, because the real Jean Valjean has been found.
VALJEAN: Valjean has been found?
JAVERT: He stands trial tomorrow. Your duty requires you to dismiss me immediately.
VALJEAN: Javert, you are a man of honor. You exaggerate your fault. Like the incident with the girl, this offense
concerns only me. You are worthy of a promotion rather than disgrace. It is my desire you remain in your position.
JAVERT: I cannot agree to that. I have been nothing better than a spy. I deserve dismissal. I await your judgment.
VALJEAN: We will see.
JAVERT: Very well, I will continue to serve until I am relieved. (Exits DL.)
VALJEAN: (Conflicted.) I am Madeleine. I remain Madeleine. Too bad for him who is Jean Valjean. He and I are no
longer the same. If some other wretch is Jean Valjean now, let him take care of himself. That does not concern me. I
am quite another man now. How can I denounce myself? (Pulls the BISHOP’s cross from his pocket. HE knows what
HE must do.)
SCENE 13 – A COURTROOM
SCENE: COURTROOM. The courtroom is filled with jurors and spectators (L). The prisoner CHAMPMATHIEU is
set apart, on display as well as on trial. HE is shackled, standing on the bridge between the two step units. The
judge’s desk is right of DC.
The PROSECUTOR is DC.
PROSECUTOR: (To CHAMPMATHIEU) You are in a position which demands reflection. The gravest presumptions are
weighing against you, and may lead to fatal results. I question you a second time. First, did you or did you not climb
the wall of the Pierron enclosure, break off the branch, and steal apples? That is to say, you committed the crime of
theft and breaking into an enclosure. Secondly, are you or are you not the discharged convict Jean Valjean?
CHAMPMATHIEU: I am tired of this nonsense.
PROSECUTOR: You have replied to nothing that has been asked of you. Your agitation condemns you. It is evident your
name is not Champmathieu. We have a witness from the prison in which you served who swears you told him that
you are the convict Jean Valjean 
CHAMPMATHIEU: I am a poor man who don’t get something to eat everyday. I have been in prison three months, being
knocked around. More than that I can’t tell. You talk against me, and tell me ‘answer.’ I can’t explain myself, I never
had no school. But you are wrong, not to see I didn’t steal the apples. I found a broken branch with apples on it in the
mud after a rain shower. It was lying on the ground, outside of the enclosure. I picked up what was there, not knowing
what trouble it would give me. You talk about Jean Valjean. I don’t know any such man. You know more about me
than I know about myself. How can I defend myself?
PROSECUTOR: Summon the prisoner Brevet.
(BREVET, handcuffed, is brought to the bench by a GUARD from UC.)
JUDGE: Brevet, you have suffered punishment and cannot take the oath. Nevertheless, even in a man whom the law has
degraded, there may remain, if divine justice permits, a sentiment of honor and equity. To that sentiment I appeal in
this decisive hour, if it still exists in you. Reflect before you answer me; consider on the one hand this man, whom a
word from you may destroy; on the other hand, justice, which a word from you may enlighten. Collect your
remembrances, and say, on your soul and conscience, whether you still recognize this man as your former comrade
in the galleys, Jean Valjean.
BREVET: Yes, your honor, I was the first to recognize him, and still do so. This man is Jean Valjean, who came to Toulon
in 1796 and left in 1815. He looks like a brute now, but he must have grown stupid with age; in the galleys he was
sullen. I recognize him now, positively.
JUDGE: Prisoner, you have listened. What have you to say?
CHAMPMATHIEU: I say—wonderful.
(The SPECTATORS laugh.)
JUDGE: Order! I shall proceed to sum up the case.
(VALJEAN enters briskly from DL.)
VALJEAN: Brevet, look this way!
JUDGE: Monsieur Mayor.
(There is a stir among those present in the court.)
VALJEAN: Do you not recognize me? Members of the jury, release the accused. He is not the man whom you seek; it is
I. I am Jean Valjean. Monsieur Prosecuting Attorney, you were on the point of committing a great mistake. This is a
duty I must undertake. What I do at this moment, God sees from on high, and that is sufficient. I have disguised
myself under another name, I have become rich, I have become a mayor. I am all the things this court accuses this
poor man of being.
JUDGE: Monsieur Mayor, this is cannot be.
VALJEAN: Brevet, I know it is impossible for you to believe. You no longer recognize me, but I recognize you. In prison
you wore checkered suspenders. One of your cell mates had a horrible burn on his shoulder. The other prisoner had
the date March l, 1815 tattooed on his arm, to celebrate the emperor’s landing at Cannes.
JUDGE: Is this true?
BREVET: Only Jean Valjean could know these things. I am mistaken, your honor. This man is Jean Valjean.
(The court erupts.)
JUDGE: Order! I demand order.
VALJEAN: I will not disturb the proceeding further. Since I am not arrested, I have many things to do. The prosecuting
attorney will know where to find me. He can have me arrested when he chooses. I remain at your disposal. (Exits DL.)
JUDGE: Release the prisoner. This trial is concluded.
(The courtroom clears in a flurry of consternation and wonder.)
SCENE 14 – THE INFIRMARY AT THE FACTORY IN
MONTREUIL-SUR-MER
SCENE: THE INFIRMARY. FANTINE is lying on a cot left of center. SISTER SIMPLICE sits on the upstage side of
the cot. VALJEAN enters DL. 
VALJEAN: I have sent for the doctor.
SISTER SIMPLICE: (In a whisper.) I don’t think there is much he can do.
VALJEAN: Fantine.
FANTINE: Monsieur, Cosette. Is my Cosette here?
VALJEAN: Soon, I promise.
(JAVERT enters DL.)
FANTINE: (Alarmed at the sight of JAVERT.) Monsieur, save me.
VALJEAN: He has not come for you.
JAVERT: Collect whatever personal items you require.
VALJEAN: I have a request to make of you. Give me three days. Three days to go for the child of this unhappy woman. I
will pay whatever is necessary. You may accompany me if you like.
JAVERT: Are you laughing at me? You ask for three days to get away, and tell me that you are going for this girl’s child. I
didn’t think you were so stupid.
FANTINE: I want my child, Monsieur Madeleine.
JAVERT: Hold your tongue. Miserable country where galley slaves are magistrates, and tramps are nursed like
countesses.
FANTINE: Monsieur Madeleine, please.
JAVERT: There is no Monsieur Madeleine and no Monsieur Mayor. There is a thief, an impostor, a criminal named Jean
Valjean, and I have him. That is what there is.
FANTINE: Please, Monsieur—(Reaches out and dies.)
(SISTER SIMPLICE pulls the cover over FANTINE’s face and crosses herself.)
VALJEAN: (Kneeling beside the cot.) Fantine, Fantine. (To JAVERT.) I hold you responsible for this.
JAVERT: I am not here to listen to sermons; save all that. The guard is below. Cooperate, or I’ll humiliate you and take
you in handcuffs.
VALJEAN: I advise you not to disturb me now. I told you, I have a duty to fulfill.
JAVERT: Enough! Put these on.
(JAVERT pulls out a pair of handcuffs. Instead of putting on the cuffs, VALJEAN grabs JAVERT by the wrist. His superior
strength forces JAVERT to his knees. HE pushes JAVERT to the ground and flees UC.)
Stop! Stop!
(JAVERT pulls out a whistle and blows on it violently, giving chase.)
SCENE 15 – THENARDIER’S INN
SCENE: THENARDIER INN. The child COSETTE enters from the UR entrance to a waiting and angry MADAME
THENARDIER, who is obviously pregnant.
MADAME THENARDIER: Finally. You little beggar, what took you so long? Have you been playing, you little wench?
COSETTE: It was dark, Madame, and the bucket was heavy.
MADAME THENARDIER: Heavy will be the feel of my hand across your face. What about the bread? Did you get the
bread?
COSETTE: The baker was shut.
MADAME THENARDIER: You ought to have knocked.
COSETTE: I did knock, Madame.
MADAME THENARDIER: Well?
COSETTE: He didn’t open.
MADAME THENARDIER: I’ll find out tomorrow if that is true, and if you’re lying—
(VALJEAN enters UR, carrying a small valise and a doll.)
VALJEAN: Madame, what the child says is true. I walked with her from the bakery and carried that heavy bucket of water.
MADAME THENARDIER: Good evening, Monsieur. Welcome. (To COSETTE.) Go on you little wretch.
(COSETTE exits as THENARDIER enters.) 
THENARDIER: Welcome to our humble inn. My name is Thenardier. This is my wife.
MADAME THENARDIER: Monsieur. May we offer you some wine?
VALJEAN: No, thank you.
THENARDIER: We serve only the finest. Not like that swill you’ll find at lesser inns.
VALJEAN: Then you do a good business here in Montfermeil?
MADAME THENARDIER: Well, times are hard, Monsieur. It’s not often we see a gentleman such as you. It’s a very little
place, as you see. We have so many expenses, so many mouths to feed, and another on the way. I can barely feed
my own children, much less the child of a beggar who hasn’t sent a sou in months. That one eats us out of house and
home.
VALJEAN: Which one?
MADAME THENARDIER: The little one you walked with, Cosette.
VALJEAN: Cosette?
MADAME THENARDIER: She’s more trouble than she’s worth.
VALJEAN: Suppose you were relieved of the child.
MADAME THENARDIER: Her?
VALJEAN: Yes.
MADAME THENARDIER: Monsieur, take her, keep her, carry her away. Stuff her with food and drink, and be blessed by
the holy Virgin and all the saints in paradise.
VALJEAN: Agreed.
MADAME THENARDIER: Really, you will take her away?
VALJEAN: Immediately.
MADAME THENARDIER: Good, because we can’t afford her.
THENARDIER: (Seeing an angle for gain.) Monsieur, don’t be so hasty. I must say I adore this child.
VALJEAN: Your wife says she is a burden.
THENARDIER: How strangely we’ve become attached. Our little Cosette, and you wish to take her away.
VALJEAN: I knew her mother.
THENARDIER: I speak frankly, as true as you are an honorable man. I cannot consent to it.
VALJEAN: Mademoiselle Fantine entrusted her child over to my care.
THENARDIER: Excuse me, Monsieur, but one does not give a child to a stranger, just like that.
MADAME THENARDIER: We would miss her. She has been with us for so long.
THENARDIER: It is true she costs us money; it is true she has her faults; it is true we aren’t rich. But we must do
something for God.
VALJEAN: How much?
THENARDIER: Some things simply aren’t possible.
VALJEAN: How much?
THENARDIER: On the supposition that I should let her go and sacrifice my own feelings, I should want to know where
she is going. I would not want to lose sight of her. I should want to know who she was with, so that I might come and
see her now and then, so that she might know her good foster-father was still watching over her.
VALJEAN: If I take Cosette, I take her. That is all.
THENARDIER: But Monsieur, I don’t even know your name.
VALJEAN: You will not know my name, you will not know my address, and you will not know where she is going. My
intention is that Cosette will never see you again in her life. Do you agree to that?
THENARDIER: Monsieur, surely you understand—
VALJEAN: Yes or no?
THENARDIER: I must have fifteen hundred francs.
VALJEAN: (HE opens his wallet. HE gives several bills to THENARDIER and hands MADAME THENARDIER the valise
and the doll.) Take this doll and these clothes to Cosette. Dress her, and then bring her to me. I shall be waiting
outside. Good evening.
THENARDIER: Go on, make haste. Do as he says.
MADAME THENARDIER: I hope you know what you are doing. (Exits into the inn with valise and doll.)
THENARDIER: I have changed my mind. I take her back. I haven’t the right to give her to you. I am an honest man, you
see. Her mother confided her to me. I can only give her to her mother. No doubt you will say her mother is dead.
VALJEAN: Yes, Mademoiselle Fantine succumbed to a long illness.
THENARDIER: I can only give the child to a person who brings me a written order signed by the mother.
(VALJEAN produces a letter and hands it to THENARDIER to read.)
VALJEAN: You know the signature.
THENARDIER: There are debts to be settled. 
VALJEAN: You have been paid handsomely for the past several months. Everything you have demanded has been paid.
And yet the child looks no better for it. Our business is concluded.
(VALJEAN exits UR.)
THENARDIER: Perhaps we shall meet again, Monsieur No-Name. Should that day arrive, you won’t find me so
generous.
END OF ACT I
ACT II - PARIS
SCENE 1 – A SLUM TENEMENT IN THE LATIN QUARTER - SEVERAL YEARS LATER
SCENE: A SLUM TENEMENT in the Latin Quarter of Paris. MARIUS is on the upper platform reading. There is a
chair and small table with a mirror, books, writing materials, and a crust of bread. ENJOLRAS and MARIE enter
from UC. At first THEY don’t see MARIUS, and then wave to him. Note: The inn sign has been removed.
ENJOLRAS: Marius, good morning.
MARIUS: Enjolras, Marie! (HE comes down the steps to his friends.)
MARIE: Courfeyrac said we would find you here.
ENJOLRAS: So, this is how the other half lives.
MARIUS: Living? You may call it that if you wish. I would invite you inside, but the filth of the streets is more pleasant.
MARIE: Are you destitute?
MARIUS: Not quite, I get by. I translate here and there.
ENJOLRAS: Marius, there is something to be said for standing on principle, but to choose to live this way when one has
a rich aunt and grandfather.
MARIUS: No, I accept no money from them. We no longer see eye to eye. Their support for a corrupt government drove
my father away and now they have driven me away as well. My father was a humble and heroic man, who died
forgotten and abandoned. The day I left my aunt’s house, I left for good. I cannot support those who turn their backs
on the people.
ENJOLRAS: Then you will join the revolt when it comes.
MARIUS: If it comes.
ENJOLRAS: It will. Paris is ripe for revolution. The oppressed are smouldering. We must be ready. Plans are being made
for barricades. Soon, the people of France will be heard.
MARIUS: Is that why you came?
ENJOLRAS: We need you, Marius.
MARIUS: I am an unemployed lawyer, Enjolras, not a fighter. Besides, we are just a handful of malcontents against an
army.
ENJOLRAS: You hear that, Marie, he says we. Then you’ll come to the Café Musain tonight?
MARIUS: Not tonight, I have plans this afternoon that may well take me late into the evening. There is someone I am
looking for.
MARIE: The girl in the park?
MARIUS: You know of her? 
MARIE: Of course, the young lady who strolls daily through the Luxembourg Gardens with her father.
MARIUS: That’s her. Do you know her name?
MARIE: No. All I know is the old man is very generous. He takes pity on beggars while others turn them away.
MARIUS: Today I plan to follow them at a discreet distance, to learn where she lives, and to finally learn her name.
ENJOLRAS: Like the one who follows you and hides whenever you turn her direction?
MARIUS: I don’t know what you mean.
ENJOLRAS: Really, Marius, do you see anything going on around you?
MARIUS: Follows me?
ENJOLRAS: Like a shadow. She’s a street urchin, wears a torn blouse and red skirt, goes by the last name of Jondrette.
MARIUS: Eponine. She’s my neighbor. She lives with her wretched parents in the room next to mine. I give them money
from time to time. No one should have to live like that.
ENJOLRAS: All the more reason to attend our meetings.
MARIE: Tonight, at seven. Goodbye, Marius.
(THEY exit UC. As MARIUS returns to his room, EPONINE enters from RC and goes up the steps to MARIUS.)
EPONINE: Good morning, Monsieur Marius. I have something for you.
MARIUS: Another note, Eponine?
EPONINE: You know my name.
MARIUS: Of course.
EPONINE: I am sorry, Monsieur. You know my father. He is a harsh man. He makes my sister and me deliver notes.
MARIUS: (Reaching for a small packet of papers.) I found this packet on the boulevard yesterday. It must belong to you. I
recognize the handwriting.
EPONINE: Thank you. This one is very important. Azelma told father the old man turned her away. If she had lost it, he
would have beaten her. Now she can try again today.
MARIUS: How much this time? (Reads.) “My amiable young neighbor, your past kindness toward us deserves blessings
of divine thanks. My eldest daughter will tell you that we have been without a morsel of bread for two days. If I am not
deceived, I think I may hope that your generous heart will soften at this news. My daughter will await your orders.
Monsieur Jondrette.”
(As MARIUS reads, EPONINE looks around MARIUS’s apartment.)
EPONINE: You have a mirror. (SHE snatches up the mirror and dances with it, humming a joyful little tune. Seeing books
on the table, SHE puts the mirror down.) You have books and writing paper. Do you know I can read and write? We
have had an education, my sister and I.
MARIUS: This has been a lean month, Eponine, I’m not sure--.
EPONINE: We weren’t always what we are now. Sometimes I go away at night and don’t come back. Before coming
here, last winter, we lived under bridges. We hugged close together so as not to freeze. My little sister cried. Our
brother ran away. I would look at the water and think how sad we are. When I thought of drowning myself, I said, No,
it’s too cold. I go all alone when I want to. I sleep in ditches sometimes. I walk the boulevard at night. When you are
starving, the trees look like gallows.
MARIUS: (Taking pity, HE pulls some coins out of his pocket.) Five francs, that’s all I’m good for.
EPONINE: There’s some sunshine. This will get us by for two more days. You are too kind, Monsieur. (Indicating the
bread on the table.) A crust of bread. May I?
MARIUS: Take it. It’s hard as a rock.
EPONINE: If it breaks my teeth, so what. Goodbye, Monsieur Marius. (Exits RC.)
SCENE 2 - THE LUXEMBOURG GARDENS
SCENE: LUXEMBOURG GARDENS, a spring afternoon. The gardens are a beautiful restful place filled with
Parisians. VALJEAN and COSETTE stroll on from LC as TOUSSAINT, COSETTE’s nanny follows. THEY pause at
the bench left of center. MARIUS is seated on the far left bench.
COSETTE: Can anything be more wonderful than the Luxembourg Gardens in the spring?
TOUSSAINT: Yes, it is a beautiful day, Mademoiselle.
VALJEAN: Perhaps Cosette is speaking of that young man who comes to this spot at the same time almost every day.
TOUSSAINT: Young man, where?
VALJEAN: That one with a pedantic air about him. Come.
(As THEY rise to leave, COSETTE deliberately leaves her kerchief on the bench.) 
COSETTE: I think he is charming.
TOUSSAINT: He is certainly handsome. (Noticing the hankie.) Mercy me, Mademoiselle Cosette, I do believe you left
your kerchief on that bench.
COSETTE: No, I don’t think so.
(MARIUS is obviously disappointed.)
VALJEAN: Cosette, we must be careful.
COSETTE: Careful, why? He is just a young man who enjoys the park as much as we.
VALJEAN: He is too interested in us.
COSETTE: Is that reason to fear him?
VALJEAN: Trust me, Cosette. It is for your own good.
COSETTE: That is not an explanation.
VALJEAN: There are things you are better off not knowing.
COSETTE: There is so much I don’t know. Do I not have the right to know? You have told me so little of my mother, and
my memories of growing up in that old inn are beginning to fade. You ask me to call you father; then treat me as the
daughter you wish me to be. You are filled with secrets. Why must we live this way?
VALJEAN: I am only trying to protect you.
COSETTE: From what? From every stranger? From everyone who speaks to me?
VALJEAN: Paris is on the verge of revolution. Everyone and anyone is a suspect.
COSETTE: Then you do have something to hide, some secret. Tell me.
VALJEAN: One day, Cosette, not now.
(AZELMA enters from UC and approaches VALJEAN.)
AZELMA: Excuse me, Monsieur, I am sorry to intrude, but my father asked me to deliver this letter to you.
VALJEAN: A letter? (Opens the letters and reads aloud.) “Excuse me for sending my daughter and for not presenting
myself, but sad motives of dress do not permit me to go out. If you will agree to accompany my daughter, you will see
a miserable calamity. I await your presence or your offering. Your obedient servant, Monsieur Jondrette.” (Folds the
letter and puts it in his pocket.) This is the address?
(AZELMA nods.)
Alright, go ahead, I’ll be along shortly in my carriage.
(AZELMA exits UC.)
Toussaint, take Cosette home.
COSETTE: No, I wish to come.
VALJEAN: It may not be safe.
COSETTE: I am not afraid. There is something about that girl. She seems so sad.
TOUSSAINT: Paris is filled with sad, young girls, Mademoiselle.
VALJEAN: Toussaint, we’ll meet you in time for dinner.
(TOUSSAINT exits DL as VALJEAN and COSETTE exit UC.MARIUS, who has been watching from a distance, follows
VALJEAN and COSETTE at a discreet distance.)
SCENE 3 – THENARDIER’S APARTMENT
SCENE: JONDRETTE’S apartment. THENARDIER (now Jondrette) and MADAME THENARDIER and EPONINE
enter. AZELMA enters in a hurry. MARIUS, on the higher platform, watches and listens, as if eavesdropping
through a thin wall.
AZELMA: He’s here.
MADAME THENARDIER: The gentleman? The one from the gardens?
AZELMA: Yes, he is in a carriage.
THENARDIER: In a carriage? He must be a Rothschild. (There is a knock.) Is that him, so soon? Make ready. Wrap
yourself in a blanket, pretend you are ill. Eponine, mess up your hair. Both of you, take some charcoal from the
fireplace and blacken your faces. Never mind, we don’t have time. 
(VALJEAN and COSETTE enter UR. It is clear that THENARDIER recognizes VALJEAN.)
THENARDIER: Come in, Monsieur. Come in, my noble benefactor, as well as your charming young lady. Please, won’t
you sit?
VALJEAN: Thank you, but no. Our time is short.
THENARDIER: You overwhelm us. As you see, we have no bread, no fire. We have a broken window and my wife is
sick. We are in the clutches of desperation. Tomorrow the rent comes due. If we do not make good on our rent
tonight, we will be turned out.
VALJEAN: I have only these few francs with me, but I am going to take my daughter home. I will return this evening. Is it
not this evening that you have to pay?
THENARDIER: Yes, at eight o’clock I must be at my landlord’s.
VALJEAN: I will be here at six o’clock, and I will bring you sixty francs.
THENARDIER: My benefactor.
(VALJEAN and COSETTE exit UR.)
THENDARDIER: Well, well, what goes around comes around.
MADAME THENARDIER: What are you talking about?
THENARDIER: In a moment. Azelma, round up Bigrenaille and the others. Be back here by five o’clock, I’ll need
everyone. Eponine, follow that carriage. Find out where the old man lives, and then get back here as soon as
possible.
(AZELMA and EPONINE exit UR.)
Did you recognize him? The man who came to the inn ten years ago. It was him.
MADAME THENARDIER: You’re sure?
THENARDIER: No doubt. I recognized him immediately. The same height, the same face, hardly any older. The same
tone of voice. Now I’ve got him right where I want.
MADAME THENARDIER: What about the girl? Do you think it’s her?
THENARDIER: Cosette? Who else?
MARIUS: (In a whisper.) Cosette?
MADAME THENARDIER: Impossible! When I think that my daughters go barefoot and don’t have a dress to put on. It
cannot be! You must be mistaken.
THENARDIER: I tell you it is. Shall I tell you one more thing? My fortune is made. No more farces. I want food for my
hunger. I want drink for my thirst. I want to stuff myself, to sleep, to do nothing. I want my turn, I do. Before I burst, I
want to be a bit of a millionaire.
MADAME THENARDIER: What do you mean?
THENARDIER: Tonight we’ll bleed him for everything he’s got.
MADAME THENARDIER: Suppose he won’t cooperate?
THENARDIER: He’ll cooperate, all right, because we’ll have the girl.
MADAME THENARDIER: He surely won’t bring her again.
THENARDIER: Of course he won’t. Only an idiot would bring a girl like her back to a place like this. When Eponine gets
back, we’ll know where to find her, and then we’ll send our friends to bring her. It’ll be a lovely reunion.
(Horrified, MARIUS bolts away RC.)
SCENE 4 – THE POLICE STATION
SCENE: The OFFICE of the police (L.) JAVERT enters DL with a DETECTIVE.
JAVERT: I want these meetings infiltrated. I want someone inside. Do I make myself clear?
DETECTIVE: Yes, Inspector.
JAVERT: We are not speaking of the childish actions of schoolboys, we are speaking of treason. I want names, places,
times. On my desk within forty-eight hours.
DETECTIVE: Yes sir. (Exit DL.)
(MARIUS enters from UC.)
MARIUS: Pardon me, Monsieur, I am looking for the commissioner of police. 
JAVERT: He is absent. I answer for him. My name is Inspector Javert.
MARIUS: It is an urgent matter. My neighbor and some brigands are planning to ambush a well-respected citizen, a
generous man who treats the downtrodden with respect. I fear for his life.
JAVERT: How is it you have come into possession of this information?
MARIUS: The walls of my apartment are thin; there is a peephole in the wall.
JAVERT: You are a peeping Tom?
MARIUS: No, Monsieur, I assure you, no. There is a young lady I wish to meet. She comes to the park every day with her
father, the citizen for whom I fear. I was ready to follow her home, to find out where she lives, when one of the girls
from the apartment next door gave the old man a note, begging for charity. The gentleman and his daughter followed
the girl home and I followed them to the tenement building where I live. The gentleman had little money with him, so
he said he would return this evening at six.
JAVERT: Once the business was concluded, why didn’t you follow the old man and his daughter home?
MARIUS: By the time I got to the street, the gentleman and his daughter were gone.
JAVERT: It is just as well. You may have saved a life. What is your neighbor’s name?
MARIUS: He goes by many names, but I believe his real name is Jondrette.
JAVERT: I know the name and the building. I shall be there at six.
(MARIUS exits UC, JAVERT exits DL.)
SCENE 5 – THENARDIER’S APARTMENT
SCENE: JONDRETTE’S apartment. THENARDIER, MADAME THENARDIER, AZELMA, and HENCHMAN enter DR,
and await the arrival of VALJEAN.
THENARDIER: The trap is almost set. Tomorrow we will dine on duck and all the trimmings.
AZELMA: What if he doesn’t come?
THENARDIER: Oh, he’ll come alright.
(SOUND: Knock on the door.)
THENARDIER: As good as his word. Everyone, relax, we don’t want him to suspect. (To the door.) Come in.
(VALJEAN enters UR.)
THENARDIER: My benefactor.
VALJEAN: Good evening.
THENARDIER: We must have chairs.
VALJEAN: It is not necessary (Indicating the HENCHMAN.) You have a guest.
THENARDIER: A neighbor, pay no attention.
VALJEAN: (Reaching for the money.) Here’s for your rent and some additional notes for your pressing needs.
THENARDIER: God reward you, generous benefactor.
VALJEAN: Then I will bid you adieu.
(THENARDIER pulls out the old Inn sign.)
MADAME THENARDIER: As you see, we have so little left from better days, nothing but one single thing, a priceless
painting. Buy our painting, Monsieur.
VALJEAN: It is a tavern sign, worth about three francs.
THENARDIER: This is not just any painting. It is one you won’t be able to live without. I will be satisfied with a thousand
crowns.
VALJEAN: Monsieur, I have been more than generous.
THENARDIER: Do you know me? Do you recognize me?
VALJEAN: No.
THENARDIER: My name is not Jondrette. It is Thenardier. I was the inn keeper of Montfermeil. Now do you know me?
VALJEAN: No more than before.
THENARDIER: Well, I know you! I have found you again, Monsieur threadbare millionaire. Monsieur giver of dolls. Ten
years ago, on Christmas Eve, it was you who took Fantine’s child from my house. For fifteen hundred francs you got a
girl who had brought me in a good deal of money and from whom I should have gotten enough to live on all my life.
What was she to you? You made a fortune from your factory, now I want mine. You’re probably too crafty to keep it in
a bank. You’ve probably buried it in a hole somewhere. The evening is young yet.

(BIGRENAILLE enters UR dragging EPONINE with him.) 
THENARDIER: Just in time. Did you bring her? Where’s the girl?
BIGRENAILLE: Your brat sent us to the wrong address.
THENARDIER: What? (To EPONINE.)You’ll pay for this.
VALJEAN: You are pitiable, but my life is not worth so much trouble. As to your imagining that you could make me speak,
or that you could make me write what I do not wish to write, even if you were to press a hot iron against my flesh, you
would have no luck. I have no fear of you. Cosette is my life. There is nothing you can do that will cause me to betray
her.
MADAME THENARDIER: Now what?
THENARDIER: There is only one thing to do. Kill him!
EPONINE: No!
THENARDIER: Shut up, you.
(SOUND: A SUDDEN rapping on the door.)
JAVERT: Open up, it’s the police.
(Taking advantage of the distraction caused by the knock at the door, VALJEAN pushes the THENARDIERS into each
other and disappears through the DR door as JAVERT enters UR with a POLICEMAN.)
It is over, Jondrette. Stand down. Where is he? The man you planned to rob?
THENARDIER: Gone.
JAVERT: I see. A victim who avoids the police. What does that tell us? Take them, all of them.
(MARIUS enters UR.)
MARIUS: A moment, if you please, Inspector. May I have a word with the girl?
JAVERT: I suppose you think I owe you this. Three minutes. If she escapes, you’ll do the time she would have served.
THENARDIER: (As HE is being dragged away.) Five francs, Eponine. Whatever he wants. Not a centime less.
(ALL except MARIUS and EPONINE exit UR.)
MARIUS: Eponine, I need a favor.
EPONINE: Anything, Monsieur.
MARIUS: The gentleman who was here earlier, I want his address. I know you know it.
EPONINE: It is the young lady’s address you want. What will you do for me?
MARIUS: Anything you ask.
EPONINE: I wish that were true.
MARIUS: You just have to tell me.
EPONINE: Number seven, Rue Plumet. Don’t forget, you promised.
MARIUS: Thank you. (HE reaches for a coin.) Here. (Exits UR.)
EPONINE: I don’t want your money. (Exits UR.)
SCENE 6 – VALJEAN’S GARDEN
SCENE: Three months later. VALJEAN’S garden, night. MARIUS enters from UC and crosses to other DC bench.
COSETTE enters LC.
COSETTE: (Whispers.) Marius?
MARIUS: Cosette, here.
COSETTE: (Hurrying to the bench.) Marius.
MARIUS: You had me worried. I didn’t think you were coming. You know I can’t go a day without seeing you.
COSETTE: Tonight father changed his plans. He decided not to go out. He is not himself lately.
MARIUS: Does he suspect?
COSETTE: I can’t be sure. I had to make an excuse. I told Toussaint I left my bonnet here on the bench. She is waiting
for me. I can only stay a few moments.
MARIUS: A few moments? Cosette, how can I go on like this, spying on you in the park, unable to speak to you, and then
only being able to meet you for a few minuets each night in your garden?
COSETTE: Oh, Marius, these past weeks have been the happiest days of my life. That night I found your letter on the
bench in our garden, I never knew so much joy. And now-- 
MARIUS: Cosette, what is it?
COSETTE: I haven’t wanted to tell you. Several days ago father told me to hold myself in readiness, that perhaps we
should go away.
MARIUS: Go away? Why? What is the matter?
COSETTE: Ever since that incident with that horrible man—
MARIUS: Jondrette.
COSETTE: Yes. Father has been unsettled. He has always been cautious, but more so since that night. The other
morning I overheard Toussaint telling him that Jondrette is back on the streets. He has been released from prison on
parole. Last night after you left, someone tried to break in. We were saved by the screams of a young girl.
MARIUS: A girl, you say?
(COSETTE nods.)
COSETTE: This morning he told me to pack my things, to be ready within the week, that perhaps we should go to
England.
MARIUS: It is monstrous. When would you start?
COSETTE: He didn’t say when.
MARIUS: And when should you return?
COSETTE: He didn’t say.
MARIUS: Cosette, will you go?
COSETTE: What would you have me do? If my father goes, what choice have I?
MARIUS: How can I go on without you?
COSETTE: Then follow us. I will tell you where. Come and join me where I am.
MARIUS: It takes money, and I have none. Look at me. I have an old hat which isn’t worth three francs. My coat is
missing buttons, my shirt is torn. Cosette, I am a miserable wretch. You only see me at night, and you give me your
love; if you should see me by day, you would give me money. Go to England? I can’t even pay for a passport.
(COSETTE begins to sob.)
Don’t cry. Do you love me?
COSETTE: I adore you, Marius. Do you love me, too?
MARIUS: I have never given my word of honor to anybody, because I stand in awe of my word. But now, I give you my
word of honor that if you go away, I shall die.
COSETTE: Don’t talk like that.
MARIUS: Then marry me, Cosette.
COSETTE: But how?
MARIUS: Tomorrow evening I will go to my grandfather and throw myself upon his mercy. He will save us, Cosette. And
then we’ll be happy, as heaven meant us to be.
TOUSSAINT: (Offstage.) Mademoiselle?
COSETTE: A moment, Toussaint. I love you. When will I hear from you?
MARIUS: The day after tomorrow.
(THEY linger a moment, and then exit. COSETTE exits LC and MARIUS exits UC.)
SCENE 7 – THE HOME OF GILLENORMAND
SCENE: Home of GILLENORMAND (DR). MADEMOISELLE GILLENORMAND enters DR, followed by MARIUS
AUNT: Your grandfather is old and frail, and you come to ask his permission to marry. You have a business? Your
fortune made? How much do you earn in your lawyer’s trade?
MARIUS: I earn nothing.
AUNT: Then permission will be your only possession.
MARIUS: Yes.
AUNT: The girl is rich?
MARIUS: As I am.
AUNT: What? No dowry?
MARIUS: No.
AUNT: Some expectations?
MARIUS: I believe not.
AUNT: With nothing to her back? Then what is the father? 
MARIUS: I do not know. I beg you, in the name of heaven, Madame. I throw myself at your feet, beg grandfather to allow
me to marry her. If you only knew how much I love her.
AUNT: (Mimicking MARIUS.) Madame, I desire to marry. I desire to marry Mamselle no matter whom, daughter of
Monsieur no matter what. I have no shoes, she has no dress, all right; I desire to throw my career to the dogs, my
future, my youth, my life. I desire to make a plunge into misery with a wife tied to my neck. That is my idea, and you
must consent to it. No, Monsieur. Never!
MARIUS: Then Cosette is lost, and I have nothing to live for.
AUNT: If you can’t live without her, then make her your mistress.
MARIUS: No. I had come to you wanting nothing more than your blessing for my future happiness. I have one last
request and then I will ask nothing more of you, Madame.
AUNT: What is it?
MARIUS: May I use my father’s desk to write a letter?
AUNT: Of course.
MARIUS: Thank you. Then I will bid you adieu. I will be joining my friends at the barricade.
(MARIUS exits DR.)
AUNT: Marius, Marius. Be sensible. (Exits DR.)
SCENE 8 – OUTSIDE OF VALJEAN’S APARTMENT
SCENE: Outside of VALJEAN’S house (C). GAVROCHE enters from UC, looking for a house. VALJEAN
approaches from LC.
VALJEAN: May I help you?
GAVROCHE: Pardon me, Monsieur. I am looking for number seven, Rue Plumet.
VALJEAN: This is number seven.
GAVROCHE: Oh, in that case--
VALJEAN: Are you the one who’s bringing the letter I am waiting for?
GAVROCHE: You?
VALJEAN: Yes, I see you have a letter. I am expecting a letter.
GAVROCHE: It is for a lady, Monsieur.
VALJEAN: Mademoiselle Cosette, is it not?
GAVROCHE: The envelope just says number seven, Rue Plummet. But, yes, I think the name of the lady is Cosette.
VALJEAN: She asked me to meet you. You may give it to me.
GAVROCHE: I am just an errand boy, Monsieur. I have been sent from the barricade.
VALJEAN: I see. Thank you.
GAVROCHE: Au Revoir, Monsieur. (Exits UC.)
(VALJEAN takes the letter from the envelope and tucks the empty envelope in his pocket. Note: This piece of business
with the envelope is crucial for a later scene.)
COSETTE: (Enters from LC, sees VALJEAN and is startled.) Oh! Is everything alright, Papa. I thought I heard voices in
the garden.
VALJEAN: So, this is how you repay my trust.
COSETTE: I don’t know what you mean.
VALJEAN: Is this the reason for your nightly visits to the garden? (Reading the letter.) “Dearest Cosette. My heart breaks.
Our marriage is impossible. I asked my aunt, and she has refused. I have no funds. You know the promise I gave
you? I am keeping it. I will die. I love you. When you read this, my soul will be near you, and will smile upon you.”
COSETTE: (Heartbroken.) No. He’s gone to the barricade.
VALJEAN: Is this the boy from the park? Answer me.
END OF FREE PREVIEW "`)
  .then((e) => console.log(`Código finalizado, ${e} mensagens enviadas`))
  .catch(console.error);
