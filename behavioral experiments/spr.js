//// author: Yan Cong

var showProgressBar = true;            /// I turn off the progress bar by default

var shuffleSequence = seq("setcounter",
  "introduction",
  sepWith("sep", rshuffle(startsWith("must"), startsWith("F"))));

var defaults = [
    "Separator", {
        transfer: 1000,                                      // How long between sentences? (ms)
        normalMessage: "Please wait for the next sentence."  // What is message presented between stims? Can be blank.
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "Question", {
        as: ["Yes", "No"]},
];

var items = [

    ["sep", "Separator", { }],
    ["setcounter", "__SetCounter__", { }],

    ["introduction", Message, {consentRequired: false,
                    html: ["div",
                          ["p", "Welcome! In this experiment, you will read English sentences. You will be asked to answer a comprehension question about the sentence you just read. Respond using the number keys. Press the space bar to continue."]
                          ]}],


    //// Item sets are grouped together
    //// Latin squaring is done automatically




    [["must.no.comma",1], "DashedSentence", {s: "Although Emily patiently dressed, the baby wasn't amusing for her."},
                          "Question",       {q: "Did Emily patiently dress the baby?", hasCorrect: "No"}],

    [["must.no.nocomma",1], "DashedSentence", {s: "Although Emily patiently dressed the baby wasn't amusing for her."},
                            "Question",       {q: "Did the speaker think that the baby was amusing for Emily?", hasCorrect: "No"}],

    [["must.sc.comma",1], "DashedSentence", {s: "Although Emily patiently dressed, the baby must have not been amusing for her."},
                          "Question",       {q: "Did Emily dress the baby?", hasCorrect: "No"}],

    [["must.sc.nocomma",1], "DashedSentence", {s: "Although Emily patiently dressed the baby must have not been amusing for her."},
                            "Question",       {q: "Did the speaker think that the baby was amusing for Emily?", hasCorrect: "No"}],




    [["must.no.comma",2], "DashedSentence", {s: "Although Carrie skillfully cooked, the omelet wasn't easy for her."},
                          "Question",       {q: "Did the speaker think that the omelet was easy for Carrie?", hasCorrect: "No"}],

    [["must.no.nocomma",2], "DashedSentence", {s: "Although Carrie skillfully cooked the omelet wasn't easy for her."},
                            "Question",       {q: "Did Carrie skillfully cook the omelet?", hasCorrect: "No"}],

    [["must.sc.comma",2], "DashedSentence", {s: "Although Carrie skillfully cooked, the omelet must have not been easy for her."},
                          "Question",       {q: "Did the speaker think that the omelet was easy for Carrie?", hasCorrect: "No"}],

    [["must.sc.nocomma",2], "DashedSentence", {s: "Although Carrie skillfully cooked the omelet must have not been easy for her."},
                         "Question",       {q: "Did Carrie skillfully cook the omelet?", hasCorrect: "No"}],

 

    [["must.no.comma",3], "DashedSentence", {s: "Although Dean Wong anxiously telephoned, the secretary wasn't responsive to him."},
                          "Question",       {q: "Did Dean Wong anxiously telephone the secretary?", hasCorrect: "No"}],

    [["must.no.nocomma",3], "DashedSentence", {s: "Although Dean Wong anxiously telephoned the secretary wasn't responsive to him."},
                            "Question",       {q: "Did the speaker think that the secretary was responsive to Dean Wong?", hasCorrect: "No"}],

    [["must.sc.comma",3], "DashedSentence", {s: "Although Dean Wong anxiously telephoned, the secretary must have not been responsive to him."},
                          "Question",       {q: "Did Dean Wong anxiously telephone the secretary?", hasCorrect: "No"}],

    [["must.sc.nocomma",3], "DashedSentence", {s: "Although Dean Wong anxiously telephoned the secretary must have not been responsive to him."},
                            "Question",       {q: "Did the speaker think that the secretary was responsive to Dean Wong?", hasCorrect: "No"}],

 


    [["must.no.comma",4], "DashedSentence", {s: "Although Ivan gladly played, the cello wasn't fun for him."},
                          "Question",       {q: "Did the speaker think that the cello was fun for Ivan?", hasCorrect: "No"}],

    [["must.no.nocomma",4], "DashedSentence", {s: "Although Ivan gladly played the cello wasn't fun for him."},
                            "Question",       {q: "Did Ivan gladly play the cello?", hasCorrect: "No"}],

    [["must.sc.comma",4], "DashedSentence", {s: "Although Ivan gladly played, the cello must have not been fun for him."},
                          "Question",       {q: "Did the speaker think that the cello was fun for Ivan?", hasCorrect: "No"}],

    [["must.sc.nocomma",4], "DashedSentence", {s: "Although Ivan gladly played the cello must have not been fun for him."},
                            "Question",       {q: "Did Ivan gladly play the cello?", hasCorrect: "No"}],

    // [["must.fc.comma",6], "DashedSentence", {s: "Although I don’t know whether Ivan and Jean play, the game must be fun for them."},
    //                       "Question",       {q: "Is it possible that the game is fun for Ivan and Jean?", hasCorrect: "Yes"}],
    //
    // [["must.fc.nocomma",6], "DashedSentence", {s: "Although I don’t know whether Ivan and Jean play the game must be fun for them."},
    //                         "Question",       {q: "Do I have any knowledge about whether Ivan and Jean have played the game?", hasCorrect: "No"}],
    //


    [["must.no.comma",5], "DashedSentence", {s: "Although Owen clumsily hunted, the deer wasn't cautious for him."},
                          "Question",       {q: "Did Owen clumsily hunt the deer?", hasCorrect: "No"}],

    [["must.no.nocomma",5], "DashedSentence", {s: "Although Owen clumsily hunted the deer wasn't cautious for him."},
                            "Question",       {q: "Did the speaker think that the deer was cautious for Owen?", hasCorrect: "No"}],

    [["must.sc.comma",5], "DashedSentence", {s: "Although Owen clumsily hunted, the deer must have not been cautious for him."},
                          "Question",       {q: "Did Owen clumsily hunt the deer?", hasCorrect: "No"}],

    [["must.sc.nocomma",5], "DashedSentence", {s: "Although Owen clumsily hunted the deer must have not been cautious for him."},
                            "Question",       {q: "Did the speaker think that the deer was cautious for Owen?", hasCorrect: "No"}],

    // [["must.fc.comma",7], "DashedSentence", {s: "Although I don't know whether Owen hunts, the deer must be languid for him."},
    //                       "Question",       {q: "Is it possible that the deer is languid for Owen?", hasCorrect: "Yes"}],
    //
    // [["must.fc.nocomma",7], "DashedSentence", {s: "Although I don't know whether Owen hunts the deer must be languid for him."},
    //                         "Question",       {q: "Do I have any knowledge about whether Owen has hunted the deer?", hasCorrect: "No"}],



    [["must.no.comma",6], "DashedSentence", {s: "Although Mark friendly photographed, the astronaut wasn't easygoing for him."},
                            "Question",       {q: "Did the speaker think that the astronaut was easygoing for Mark?", hasCorrect: "No"}],

    [["must.no.nocomma",6], "DashedSentence", {s: "Although Mark friendly photographed the astronaut wasn't easygoing for him."},
                          "Question",       {q: "Did Mark friendly photograph the astronaut?", hasCorrect: "No"}],

    [["must.sc.comma",6], "DashedSentence", {s: "Although Mark friendly photographed, the astronaut must have not been easygoing for him."},
                            "Question",       {q: "Did the speaker think that the astronaut was easygoing for Mark?", hasCorrect: "No"}],

    [["must.sc.nocomma",6], "DashedSentence", {s: "Although Mark friendly photographed the astronaut must have not been easygoing for him."},
                          "Question",       {q: "Did Mark friendly photograph the astronaut?", hasCorrect: "No"}],

    // [["must.fc.comma",8], "DashedSentence", {s: "Although I don't know whether Floyd and Clyde meet, the man from Florida must be easygoing for them."},
    //                         "Question",       {q: "Do I have any knowledge about whether Floyd and Clyde have met the man from Florida?", hasCorrect: "No"}],
    //
    // [["must.fc.nocomma",8], "DashedSentence", {s: "Although I don't know whether Floyd and Clyde meet the man from Florida must be easygoing for them."},
    //                         "Question",       {q: "Is it possible that the man from Florida is easygoing for Floyd and Clyde?", hasCorrect: "Yes"}],



    [["must.no.comma",7], "DashedSentence", {s: "Although the professor enthusiastically lectured, these students weren't hardworking to her."},
                            "Question",       {q: "Did the professor enthusiastically lecture these students?", hasCorrect: "No"}],

    [["must.no.nocomma",7], "DashedSentence", {s: "Although the professor enthusiastically lectured these students weren't hardworking to her."},
                          "Question",       {q: "Did the speaker think that these students were hardworking to the professor?", hasCorrect: "No"}],

    [["must.sc.comma",7], "DashedSentence", {s: "Although the professor enthusiastically lectured, these students must have not been hardworking to her."},
                            "Question",       {q: "Did the professor enthusiastically lecture these students?", hasCorrect: "No"}],

    [["must.sc.nocomma",7], "DashedSentence", {s: "Although the professor enthusiastically lectured these students must have not been hardworking to her."},
                          "Question",       {q: "Did the speaker think that these students were hardworking to the professor?", hasCorrect: "No"}],

    // [["must.fc.comma",9], "DashedSentence", {s: "Although I don't know whether the professor teaches, these students must be hardworking to her."},
    //                         "Question",       {q: "Do I have any knowledge about whether the professor has taught these students?", hasCorrect: "No"}],
    //
    // [["must.fc.nocomma",9], "DashedSentence", {s: "Although I don't know whether the professor teaches these students must be hardworking to her."},
    //                         "Question",       {q: "Is it possible that these students are hardworking to the professor?", hasCorrect: "Yes"}],
    //


    [["must.no.comma",8], "DashedSentence", {s: "Although Jared repeatedly called, his girlfriend wasn't obedient to him."},
                            "Question",       {q: "Did the speaker think that Jared's girlfriend was obedient to Jared?", hasCorrect: "No"}],

    [["must.no.nocomma",8], "DashedSentence", {s: "Although Jared repeatedly called his girlfriend wasn't obedient to him."},
                          "Question",       {q: "Did Jared repeatedly call his girlfriend?", hasCorrect: "No"}],

    [["must.sc.comma",8], "DashedSentence", {s: "Although Jared repeatedly called, his girlfriend must have not been obedient to him."},
                            "Question",       {q: "Did the speaker think that Jared's girlfriend was obedient to Jared?", hasCorrect: "No"}],

    [["must.sc.nocomma",8], "DashedSentence", {s: "Although Jared repeatedly called his girlfriend must have not been obedient to him."},
                          "Question",       {q: "Did Jared repeatedly call his girlfriend?", hasCorrect: "No"}],

    // [["must.fc.comma",10], "DashedSentence", {s: "Although I don't know whether Jared calls, his girlfriend must be obedient to him."},
    //                         "Question",       {q: "Is it possible that Jared's girlfriend is obedient to Jared?", hasCorrect: "Yes"}],
    //
    // [["must.fc.nocomma",10], "DashedSentence", {s: "Although I don't know whether Jared calls his girlfriend must be obedient to him."},
    //                         "Question",       {q: "Do I have any knowledge about whether Jared has called his girlfriend?", hasCorrect: "No"}],



    [["must.no.comma",9], "DashedSentence", {s: "Although the police carefully investigated, the shooter wasn't detectable for them."},
                             "Question",       {q: "Did the police carefully investigate the shooter?", hasCorrect: "No"}],

    [["must.no.nocomma",9], "DashedSentence", {s: "Although the police carefully investigated the shooter wasn't detectable for them."},
                           "Question",       {q: "Did the speaker think that the shooter was detectable for the police?", hasCorrect: "No"}],

    [["must.sc.comma",9], "DashedSentence", {s: "Although the police carefully investigated, the shooter must have not been detectable for them."},
                             "Question",       {q: "Did the police carefully investigate the shooter?", hasCorrect: "No"}],

    [["must.sc.nocomma",9], "DashedSentence", {s: "Although the police carefully investigated the shooter must have not been detectable for them."},
                           "Question",       {q: "Did the speaker think that the shooter was detectable for the police?", hasCorrect: "No"}],

    // [["must.fc.comma",11], "DashedSentence", {s: "Although I don't know whether the police stop, the killer must be detectable for them."},
    //                          "Question",       {q: "Is it possible that the killer is detectable for the police?", hasCorrect: "Yes"}],
    //
    // [["must.fc.nocomma",11], "DashedSentence", {s: "Although I don't know whether the police stop the killer must be detectable for them."},
    //                          "Question",       {q: "Do I have any knowledge about whether the police have stopped the killer?", hasCorrect: "No"}],



    [["must.no.comma",10], "DashedSentence", {s: "Although Luigi meticulously studied, this psychology paper wasn't interesting to him."},
                          "Question",       {q: "Did the speaker think that the psychology paper was interesting to Luigi?", hasCorrect: "No"}],

    [["must.no.nocomma",10], "DashedSentence", {s: "Although Luigi meticulously studied this psychology paper wasn't interesting to him."},
                            "Question",       {q: "Did Luigi meticulously study the psychology paper?", hasCorrect: "No"}],

    [["must.sc.comma",10], "DashedSentence", {s: "Although Luigi meticulously studied, this psychology paper must have not been interesting to him."},
                          "Question",       {q: "Did the speaker think that the psychology paper was interesting to Luigi?", hasCorrect: "No"}],

    [["must.sc.nocomma",10], "DashedSentence", {s: "Although Luigi meticulously studied this psychology paper must have not been interesting to him."},
                            "Question",       {q: "Did Luigi meticulously study the psychology paper?", hasCorrect: "No"}],

    // [["must.fc.comma",12], "DashedSentence", {s: "Although I don't know whether Luigi reads, this psychology paper must be interesting to him."},
    //                       "Question",       {q: "Is it possible that the psychology paper is interesting to Luigi?", hasCorrect: "Yes"}],
    //
    // [["must.fc.nocomma",12], "DashedSentence", {s: "Although I don't know whether Luigi reads this psychology paper must be interesting to him."},
    //                         "Question",       {q: "Do I have any knowledge about whether Luigi has read the psychology paper?", hasCorrect: "No"}],
    //
    //                         "Question",       {q: "Do I have any knowledge about whether the police have stopped the killer?", hasCorrect: "No"}],
    //


   [["must.no.comma",11], "DashedSentence", {s: "Although Jane laboriously entertained, the guests weren't manageable for her."},
                         "Question",       {q: "Did Jane laboriously entertain the guests?", hasCorrect: "No"}],

   [["must.no.nocomma",11], "DashedSentence", {s: "Although Jane laboriously entertained the guests weren't manageable for her."},
                           "Question",       {q: "Did the speaker think that the guests were manageable for Jane?", hasCorrect: "No"}],

   [["must.sc.comma",11], "DashedSentence", {s: "Although Jane laboriously entertained, the guests must have not been manageable for her."},
                         "Question",       {q: "Did Jane laboriously entertain the guests?", hasCorrect: "No"}],

   [["must.sc.nocomma",11], "DashedSentence", {s: "Although Jane laboriously entertained the guests must have not been manageable for her."},
                           "Question",       {q: "Did the speaker think that the guests were manageable for Jane?", hasCorrect: "No"}],

   // [["must.fc.comma",13], "DashedSentence", {s: "Although I don't know whether Jane entertains, the guests must be manageable for her."},
   //                       "Question",       {q: "Is it possible that the guests are manageable for Jane?", hasCorrect: "Yes"}],
   //
   // [["must.fc.nocomma",13], "DashedSentence", {s: "Although I don't know whether Jane entertains the guests must be manageable for her."},
   //                         "Question",       {q: "Do I have any knowledge about whether Jane has entertained the guests?", hasCorrect: "No"}],




  [["must.no.comma",12], "DashedSentence", {s: "Although Bruce often smoked, those cigarettes weren't enticing to him."},
                        "Question",       {q: "Did the speaker think that those cigarettes were enticing to Bruce?", hasCorrect: "No"}],

  [["must.no.nocomma",12], "DashedSentence", {s: "Although Bruce often smoked those cigarettes weren't enticing to him."},
                          "Question",       {q: "Did Bruce often smoke those cigarettes?", hasCorrect: "No"}],

  [["must.sc.comma",12], "DashedSentence", {s: "Although Bruce often smoked, those cigarettes must have not been enticing to him."},
                        "Question",       {q: "Did the speaker think that those cigarettes were enticing to Bruce?", hasCorrect: "No"}],

  [["must.sc.nocomma",12], "DashedSentence", {s: "Although Bruce often smoked those cigarettes must have not been enticing to him."},
                          "Question",       {q: "Did Bruce often smoke those cigarettes?", hasCorrect: "No"}],

  // [["must.fc.comma",14], "DashedSentence", {s: "Although I don't know whether Bruce smokes, those cigarettes must be enticing to him."},
  //                       "Question",       {q: "Is it possible that those cigarettes are enticing to Bruce?", hasCorrect: "Yes"}],
  //
  // [["must.fc.nocomma",14], "DashedSentence", {s: "Although I don't know whether Bruce smokes those cigarettes must be enticing to him."},
  //                         "Question",       {q: "Do I have any knowledge about whether Bruce has smoked those cigarettes?", hasCorrect: "No"}],
  //



 [["must.no.comma",13], "DashedSentence", {s: "Although Evelyn repetitively cleaned, the kitchen wasn't livable for her."},
                       "Question",       {q: "Did Evelyn repetitively clean the kitchen?", hasCorrect: "No"}],

 [["must.no.nocomma",13], "DashedSentence", {s: "Although Evelyn repetitively cleaned the kitchen wasn't livable to her."},
                         "Question",       {q: "Did the speaker think that the kitchen was livable for Evelyn?", hasCorrect: "No"}],

 [["must.sc.comma",13], "DashedSentence", {s: "Although Evelyn repetitively cleaned, the kitchen must have not been livable for her."},
                       "Question",       {q: "Did Evelyn repetitively clean the kitchen?", hasCorrect: "No"}],

 [["must.sc.nocomma",13], "DashedSentence", {s: "Although Evelyn repetitively cleaned the kitchen must have not been livable for her."},
                         "Question",       {q: "Did the speaker think that the kitchen was livable for Evelyn?", hasCorrect: "No"}],

 // [["must.fc.comma",15], "DashedSentence", {s: "Although I don't know whether Evelyn cleans, the kitchen must be livable to her."},
 //                       "Question",       {q: "Is it possible that the kitchen is livable to Evelyn?", hasCorrect: "Yes"}],
 //
 // [["must.fc.nocomma",15], "DashedSentence", {s: "Although I don't know whether Evelyn cleans the kitchen must be livable to her."},
 //                         "Question",       {q: "Do I have any knowledge about whether Evelyn has cleaned the kitchen?", hasCorrect: "No"}],



[["must.no.comma",14], "DashedSentence", {s: "Although Albert continuously practiced, the tuba wasn't straightforward to him."},
                      "Question",       {q: "Did the speaker think that the tuba was straightforward to Albert?", hasCorrect: "No"}],

[["must.no.nocomma",14], "DashedSentence", {s: "Although Albert continuously practiced the tuba wasn't straightforward to him."},
                        "Question",       {q: "Did Albert continuously practice the tuba?", hasCorrect: "No"}],

[["must.sc.comma",14], "DashedSentence", {s: "Although Albert continuously practiced, the tuba must have not been straightforward to him."},
                      "Question",       {q: "Did the speaker think that the tuba was straightforward to Albert?", hasCorrect: "No"}],

[["must.sc.nocomma",14], "DashedSentence", {s: "Although Albert continuously practiced the tuba must have not been straightforward to him."},
                        "Question",       {q: "Did Albert continuously practice the tuba?", hasCorrect: "No"}],

// [["must.fc.comma",16], "DashedSentence", {s: "Although I don't know whether Albert practices, the tuba must be straightforward to him."},
//                       "Question",       {q: "Is it possible that the the tuba is straightforward to Albert?", hasCorrect: "Yes"}],
//
// [["must.fc.nocomma",16], "DashedSentence", {s: "Although I don't know whether Albert practices the tuba must be straightforward to him."},
//                         "Question",       {q: "Do I have any knowledge about whether Albert has practiced the tuba?", hasCorrect: "No"}],




[["must.no.comma",15], "DashedSentence", {s: "Although Suzy engagingly wrote, the lyrics wasn't beautiful to her"},
                     "Question",       {q: "Did Suzy engagingly write the lyrics?", hasCorrect: "No"}],

[["must.no.nocomma",15], "DashedSentence", {s: "Although Suzy engagingly wrote the lyrics wasn't beautiful to her"},
                       "Question",       {q: "Did the speaker think that the lyrics was beautiful to Suzy?", hasCorrect: "No"}],

[["must.sc.comma",15], "DashedSentence", {s: "Although Suzy engagingly wrote, the lyrics must have not been beautiful to her."},
                     "Question",       {q: "Did Suzy engagingly write the lyrics?", hasCorrect: "No"}],

[["must.sc.nocomma",15], "DashedSentence", {s: "Although Suzy engagingly wrote the lyrics must have not been beautiful to her."},
                       "Question",       {q: "Did the speaker think that the lyrics was beautiful to Suzy?", hasCorrect: "No"}],

// [["must.fc.comma",17], "DashedSentence", {s: "Although I don't know whether Suzy writes, the lyrics must be beautiful to her."},
//                      "Question",       {q: "Is it possible that the lyrics is beautiful to Suzy?", hasCorrect: "Yes"}],
//
// [["must.fc.nocomma",17], "DashedSentence", {s: "Although I don't know whether Suzy writes the lyrics must be beautiful to her."},
//                        "Question",       {q: "Do I have any knowledge about whether Suzy has written the lyrics?", hasCorrect: "No"}],




[["must.no.comma",16], "DashedSentence", {s: "Although Franklin confidently answered, the question wasn't obvious to him."},
                    "Question",       {q: "Did the speaker think that the question was obvious to Franklin?", hasCorrect: "No"}],

[["must.no.nocomma",16], "DashedSentence", {s: "Although Franklin confidently answered the question wasn't obvious to him."},
                      "Question",       {q: "Did Franklin confidently answer the question?", hasCorrect: "No"}],

[["must.sc.comma",16], "DashedSentence", {s: "Although Franklin confidently answered, the question must have not been obvious to him."},
                    "Question",       {q: "Did the speaker think that the question was obvious to Franklin?", hasCorrect: "No"}],

[["must.sc.nocomma",16], "DashedSentence", {s: "Although Franklin confidently answered the question must have not been obvious to him."},
                      "Question",       {q: "Did Franklin confidently answer the question?", hasCorrect: "No"}],

// [["must.fc.comma",18], "DashedSentence", {s: "Although I don't know whether Franklin answers, the question must be obvious to him."},
//                     "Question",       {q: "Is it possible that the question is obvious to Franklin?", hasCorrect: "Yes"}],
//
// [["must.fc.nocomma",18], "DashedSentence", {s: "Although I don't know whether Franklin answers the question must be obvious to him."},
//                       "Question",       {q: "Do I have any knowledge about whether Franklin has answered the question?", hasCorrect: "No"}],
//



    //// Fillers below here. Naming convention changed slightly from Excel spreadsheet ('F-' added to begining). all of them will show. but for exp: only 16 in total show

    ["F-1F.01", "DashedSentence", {s: "My friend Thomas, who was stocky but not fat, liked to read history books."},
     "Question",       {q: "Did Mike hate history books?", hasCorrect: "No"}],

    ["F-1F.02", "DashedSentence", {s: "The mechanic happily acquired all the tools she needed."},
      "Question",       {q: "Did the mechanic happily acquire the tools she needed?", hasCorrect: "Yes"}],

    ["F-2F.01", "DashedSentence", {s: "I've heard that Matilda wanted a new bike, but she was given a camera for her birthday."},
    "Question",       {q: "Was Matilda given a bike for her birthday?", hasCorrect: "No"}],

    ["F-2F.02", "DashedSentence", {s: "I know that Leandra was not a fan of intellectual conversation."},
    "Question",       {q: "Does the speaker know whether Leandra liked intellectual conversation?", hasCorrect: "Yes"}],

    // ["F-2F.02", "DashedSentence", {s: "Val had seen Susan lose her temper only once."},
    // "Question",       {q: "Had Val ever seen Susan lose her temper?", hasCorrect: "Yes"}],

    ["F-3F.01", "DashedSentence", {s: "The group of tourists hiked up the scenic trail themselves, without any guidance."},
    "Question",       {q: "Did the group of tourists get any guidance?", hasCorrect: "No"}],

    ["F-3F.02", "DashedSentence", {s: "Gloria never enjoyed fixing a flat tire, even though her neighbors helped her."},
    "Question",       {q: "Did the sentence explicitly say that Gloria never enjoyed fixing a flat tire?", hasCorrect: "Yes"}],

    ["F-4F.01", "DashedSentence", {s: "Paula sent Wyatt a kind message, but Wyatt didn't get it."},
    "Question",       {q: "Did Wyatt get Paula's message?", hasCorrect: "No"}],

    ["F-4F.02", "DashedSentence", {s: "He quit smoking when his uncle asked him to."},
    "Question",       {q: "Did he quit smoking?", hasCorrect: "Yes"}],

    ["F-5F.01", "DashedSentence", {s: "Feeling so confused and lost, Pasquale wondered what the correct time was."},
    "Question",       {q: "Did Pasquale wonder what the correct time was?", hasCorrect: "Yes"}],

    ["F-5F.02", "DashedSentence", {s: "I think Clyde started her third book while he was on vacation."},
    "Question",       {q: "Did the speaker think that Clyde had finished her third book?", hasCorrect: "No"}],

    ["F-6F.01", "DashedSentence", {s: "Salvatore threw another log onto the fire because it was freezing outside."},
    "Question",       {q: "Was it freezing outside?", hasCorrect: "Yes"}],

    ["F-6F.02", "DashedSentence", {s: "As Anna dressing, Shannon and her friend baked the bread for dinner."},
    "Question",       {q: "Did Anna dress Shannon?", hasCorrect: "No"}],

    ["F-7F.01", "DashedSentence", {s: "She thought it was really the golden age of television, and I felt the same."},
    "Question",       {q: "Did the speaker think it was the golden age of television?", hasCorrect: "Yes"}],

    ["F-7F.02", "DashedSentence", {s: "While Scarlet bathed herself the baby cried."},
    "Question",       {q: "Did Scarlet bathe the baby?", hasCorrect: "No"}],

    // ["F-7F.02", "DashedSentence", {s: "What Bill but not me expected was for the nurse to shave the patient."},
    // "Question",       {q: "Did the speaker have an expectation for the nurse?", hasCorrect: "No"}],

    ["F-8F.01", "DashedSentence", {s: "They realized that the mountain path was too steep to hike, although they were reluctant to give up."},
    "Question",       {q: "Were they reluctant to give up?", hasCorrect: "Yes"}],

    ["F-8F.02", "DashedSentence", {s: "The actor said he heard French when the director actually spoke Greek."},
    "Question",       {q: "Did the actor hear the director speaking Greek?", hasCorrect: "No"}],

    ["F-9F.01", "DashedSentence", {s: "For at least a month Jenkins stayed at the oldest hotel in town, and she enjoyed it a lot."},
    "Question",       {q: "Was Jenkins bored during her stay at the oldest hotel in town?", hasCorrect: "No"}],

    ["F-9F.02", "DashedSentence", {s: "Even though I had a backup, losing a cell phone can be so annoying."},
    "Question",       {q: "Did I have a backup?", hasCorrect: "Yes"}],

    // ["F-9F.02", "DashedSentence", {s: "Since Brad was broke, he spent a few bucks each day."},
    // "Question",       {q: "Was Brad broke?", hasCorrect: "Yes"}],

    ["F-10F.01", "DashedSentence", {s: "Although the doctor sent Jimmy a reminder of his appointment, he forgot to show up."},
    "Question",       {q: "Did Jimmy show up in his appointment?", hasCorrect: "No"}],

    ["F-10F.02", "DashedSentence", {s: "The serious woman laughed when she killed the big scorpion."},
    "Question",       {q: "Did the woman laugh when she killed the scorpion?", hasCorrect: "Yes"}],

    ["F-11F.01", "DashedSentence", {s: "Needless to say, it is important to recycle paper."},
    "Question",       {q: "Is it pointless to recycle paper?", hasCorrect: "No"}],

    ["F-11F.02", "DashedSentence", {s: "The sculptor gazed at the rock for hours."},
    "Question",       {q: "Did the sculptor gaze at the rock?", hasCorrect: "Yes"}],

    ["F-12F.01", "DashedSentence", {s: "I find travel very fun, despite the fact that it can be expensive."},
    "Question",       {q: "Does the speaker think that traveling is always be affordable?", hasCorrect: "No"}],

    ["F-12F.02", "DashedSentence", {s: "Cornelia often swims in the sports center that's far from her house."},
    "Question",       {q: "Dose Cornelia swim a lot?", hasCorrect: "Yes"}],

    ["F-13F.01", "DashedSentence", {s: "People who like spiders are quite rare."},
    "Question",       {q: "Are people who like spiders very rare?", hasCorrect: "Yes"}],

    ["F-13F.02", "DashedSentence", {s: "Hector arrived at the airport wearing crocodile shoes."},
    "Question",       {q: "Was Hector wearing crocodile shose when he was in the train station?", hasCorrect: "No"}],

    ["F-14F.01", "DashedSentence", {s: "Borini's expensive hat was stolen last night."},
    "Question",       {q: "Was it last night that Borini's hat got stolen?", hasCorrect: "Yes"}],

    ["F-14F.02", "DashedSentence", {s: "The crime drama won an award for its screenplay, while the comedy didn't."},
    "Question",       {q: "Did the comedy win an award for its screenplay ?", hasCorrect: "No"}],

    ["F-15F.01", "DashedSentence", {s: "I think Lewis could follow a rational argument quite easily."},
    "Question",       {q: "Does the speaker consider Lewis to be good at arguing?", hasCorrect: "Yes"}],

    ["F-15F.02", "DashedSentence", {s: "Although professionally trained, Peter's dog had never graduated from obedience school."},
    "Question",       {q: "Was Peter's dog poorly trained?", hasCorrect: "No"}],

    ["F-16F.01", "DashedSentence", {s: "Auberon's interview technique was simply to smile at all questions."},
    "Question",       {q: "Was smiling at all questions Auberon's interview technique?", hasCorrect: "Yes"}],

    ["F-16F.02", "DashedSentence", {s: "I don't think Lional was very good at spreading confusion."},
    "Question",       {q: "Does the speaker think that Lional was good at spreading confusion?", hasCorrect: "No"}],

    ["F-17F.01", "DashedSentence", {s: "Adele bought a mansion with twenty bedrooms and only one bathroom."},
    "Question",       {q: "Was there more than one bathroom in the mansion Adele bought?", hasCorrect: "No"}],

    ["F-17F.02", "DashedSentence", {s: "While Rick drove the truck the car veered into a ditch."},
    "Question",       {q: "Did Rick drive the truck?", hasCorrect: "Yes"}],

    ["F-18F.01", "DashedSentence", {s: "Violet enjoyed the view from the hilltop while Marie was so scared."},
    "Question",       {q: "Did Marie enjoy the hilltop view?", hasCorrect: "No"}],

    ["F-18F.02", "DashedSentence", {s: "Harry had been reading biographies for many years."},
    "Question",       {q: "Had Harry been reading biographies?", hasCorrect: "Yes"}],

    ["F-19F.01", "DashedSentence", {s: "The clothing store was burned to the ground."},
    "Question",       {q: "Was the clothing store still there after the fire?", hasCorrect: "No"}],

    ["F-19F.02", "DashedSentence", {s: "The cheap restaurant was very popular in the town."},
    "Question",       {q: "Was the restaurant that's popular in the town cheap?", hasCorrect: "Yes"}],

    ["F-20F.01", "DashedSentence", {s: "The stone wall had been constructed with care."},
    "Question",       {q: "Had the stone wall been constructed carelessly?", hasCorrect: "No"}],

    ["F-20F.02", "DashedSentence", {s: "The aging baritone could still sing beautifully."},
    "Question",       {q: "Was the baritone becoming old?", hasCorrect: "Yes"}],

    ["F-21F.01", "DashedSentence", {s: "Jenna's gardening skills were obvious to her neighbors."},
    "Question",       {q: "Were Jenna's gardening skills obvious to her neighbors?", hasCorrect: "Yes"}],

    ["F-21F.02", "DashedSentence", {s: "Without his magic tricks Tommy would have been dull."},
    "Question",       {q: "Were the magic tricks trivial?", hasCorrect: "No"}],

    ["F-22F.01", "DashedSentence", {s: "The theme song was a major success."},
    "Question",       {q: "Was the theme song a success?", hasCorrect: "Yes"}],

    ["F-22F.02", "DashedSentence", {s: "Gwen's flu meant she couldn't work and had to stay home for a while."},
    "Question",       {q: "Was Gwen back able to work?", hasCorrect: "No"}],

    ["F-23F.01", "DashedSentence", {s: "Bill's accountant sent him some good news about his finances."},
    "Question",       {q: "Were the good news about Bill's finances?", hasCorrect: "Yes"}],

    ["F-23F.02", "DashedSentence", {s: "Leslie became famous as a TV news anchor although he was quiet off the stage."},
    "Question",       {q: "Was Leslie quiet on the stage?", hasCorrect: "No"}],

    ["F-24F.01", "DashedSentence", {s: "Herbert's fame was due to his colorful personality."},
    "Question",       {q: "Did Herbert have a colorful personality?", hasCorrect: "Yes"}],

    ["F-24F.02", "DashedSentence", {s: "It took Walter many years to learn Greek adequately."},
    "Question",       {q: "Did Walter pick up Greek in a few days?", hasCorrect: "No"}]

 


  ];

