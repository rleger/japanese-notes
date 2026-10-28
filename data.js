/*
  Japanese study notes: all content lives here.
  Phrase entries: [japanese, note, romaji, english, soundsLike]
  To add a Pimsleur lesson, append an object to NOTES.lessons (newest last).
*/
window.NOTES = {
  updated: "2026-10-28",

  hiragana: [
    ["vowel", [["あ","a","ah"],["い","i","ee"],["う","u","oo"],["え","e","eh"],["お","o","oh"]]],
    ["k", [["か","ka"],["き","ki"],["く","ku"],["け","ke"],["こ","ko"]]],
    ["s", [["さ","sa"],["し","shi","she"],["す","su"],["せ","se"],["そ","so"]]],
    ["t", [["た","ta"],["ち","chi","chee"],["つ","tsu","cats + oo"],["て","te"],["と","to"]]],
    ["n", [["な","na"],["に","ni"],["ぬ","nu"],["ね","ne"],["の","no"]]],
    ["h", [["は","ha"],["ひ","hi"],["ふ","fu","soft f"],["へ","he"],["ほ","ho"]]],
    ["m", [["ま","ma"],["み","mi"],["む","mu"],["め","me"],["も","mo"]]],
    ["y", [["や","ya"],null,["ゆ","yu"],null,["よ","yo"]]],
    ["r", [["ら","ra","light tap"],["り","ri"],["る","ru"],["れ","re"],["ろ","ro"]]],
    ["w", [["わ","wa"],null,null,null,["を","wo","said “o”"]]],
    ["n", [["ん","n"],null,null,null,null]]
  ],

  dakuten: [
    ["g", [["が","ga","hard g"],["ぎ","gi"],["ぐ","gu"],["げ","ge"],["ご","go"]]],
    ["z", [["ざ","za"],["じ","ji","jee"],["ず","zu"],["ぜ","ze"],["ぞ","zo"]]],
    ["d", [["だ","da"],["ぢ","ji","rare"],["づ","zu","rare"],["で","de"],["ど","do"]]],
    ["b", [["ば","ba"],["び","bi"],["ぶ","bu"],["べ","be"],["ぼ","bo"]]],
    ["p", [["ぱ","pa"],["ぴ","pi"],["ぷ","pu"],["ぺ","pe"],["ぽ","po"]]]
  ],

  combos: {
    heads: [["き","ky"],["し","sh"],["ち","ch"],["に","ny"],["ひ","hy"],["み","my"],["り","ry"],["ぎ","gy"],["じ","j"],["び","by"],["ぴ","py"]],
    smalls: [["ゃ","a"],["ゅ","u"],["ょ","o"]],
    seen: ["じゃ","じょ"]
  },

  lookAlikes: [
    ["あ お", "お has an extra little flick on the right."],
    ["ぬ め", "ぬ ends in a small loop, め does not."],
    ["る ろ", "る curls into a loop, ろ stays open."],
    ["は ほ", "ほ has a second bar that closes the top."],
    ["さ ち", "Mirror twins: さ bulges left, ち bulges right."],
    ["き さ", "き has two crossbars, さ only one."],
    ["ね れ わ", "ね ends in a loop, れ kicks out, わ curls in."],
    ["い り", "い: the left stroke is longer. り: the right one is."]
  ],

  rules: [
    ["Small っ: pause, then double", "きって", "kitte · stamp", "A tiny stop before the next sound, which is doubled: kit·te."],
    ["Long vowels: hold the sound", "ありがとう", "arigatō", "う after o, and い after e, mostly stretch the vowel. Pimsleur just writes arigato."],
    ["Particles read differently", "こんにちは", "konnichiwa", "Used as a particle, は is read wa, を is read o and へ is read e."],
    ["Whispered u and i", "です · ます", "dess · mahss", "After s, k, sh or t, u and i almost vanish: すこし sounds like s’koshi."]
  ],

  soundKey: [
    ["ah ee oo eh oh", "short, pure"], ["u", "oo, lips relaxed"], ["ai", "as in “eye”"],
    ["r", "tt in “butter”"], ["fu", "soft f, lips apart"], ["tsu", "ts in “cats”"],
    ["g", "always hard, “go”"], ["j / ch", "“jam” / “church”"], ["s", "always “sun”"],
    ["oh / ee-ee", "held twice as long"], ["’", "vowel whispered"], ["stress", "none, keep it even"]
  ],

  phraseGroups: [
    { title: "My Pimsleur phrases", jp: "覚えた言葉", items: [
      ["ありがとうございます。", "", "arigatō gozaimasu", "Thank you (polite).", "ah-ree-gah-toh go-zye-mahss"],
      ["いいおてんきですね。", "Pimsleur shows: いいお天気ですね。", "ii otenki desu ne", "Nice weather, isn’t it?", "ee-ee oh-ten-kee dess neh"],
      ["じゃあ、また。", "", "jaa, mata", "See you.", "jah, mah-tah"],
      ["おはようございます。", "", "ohayō gozaimasu", "Good morning (formal).", "oh-hah-yoh go-zye-mahss"],
      ["じょうずです。", "Pimsleur shows: 上手です。", "jōzu desu", "You are skilled.", "joh-zoo dess"],
      ["じょうずじゃありません。", "Pimsleur shows: 上手じゃありません。", "jōzu ja arimasen", "I’m not very good.", "joh-zoo jah ah-ree-mah-sen"],
      ["わたしはじょうずじゃありません。", "Pimsleur shows: 私は上手じゃありません。", "watashi wa jōzu ja arimasen", "As for me, I’m not skilled.", "wah-tah-shee wah joh-zoo jah ah-ree-mah-sen"],
      ["にほんごがじょうずですね。", "Pimsleur shows: 日本語が上手ですね。", "nihongo ga jōzu desu ne", "You’re good at Japanese, aren’t you?", "nee-hon-go gah joh-zoo dess neh"],
      ["わたしはにほんごがすこしわかります。", "Pimsleur shows: 私は日本語が少しわかります。", "watashi wa nihongo ga sukoshi wakarimasu", "I understand a little Japanese.", "wah-tah-shee wah nee-hon-go gah s’koh-shee wah-kah-ree-mahss"],
      ["そうですね。", "", "sō desu ne", "That’s right, isn’t it? / Indeed.", "soh dess neh"]
    ]},
    { title: "Speak Easy dialogue", jp: "会話", items: [
      ["すみません。えいごがわかりますか。", "Pimsleur shows: すみません。英語がわかりますか。", "sumimasen. eigo ga wakarimasu ka?", "Excuse me. Do you understand English?", "s’mee-mah-sen. ay-go gah wah-kah-ree-mahss kah?"],
      ["いいえ、わかりません。にほんごがわかりますか。", "Pimsleur shows: いいえ、わかりません。日本語がわかりますか。", "iie, wakarimasen. nihongo ga wakarimasu ka?", "No, I don’t. Do you understand Japanese?", "ee-eh, wah-kah-ree-mah-sen. nee-hon-go gah wah-kah-ree-mahss kah?"],
      ["はい、すこしわかります。", "", "hai, sukoshi wakarimasu", "Yes, a little.", "hi, s’ko-shee wah-kah-ree-mahss"],
      ["アメリカのかたですか。", "アメリカ is katakana. の = of, かた = person (polite)", "amerika no kata desu ka?", "Are you American? (lit. a person of America?)", "ah-meh-ree-kah no kah-tah dess kah?"],
      ["はい、アメリカじんです。", "Pimsleur shows: はい、アメリカ人です。 じん (人) = nationality", "hai, amerikajin desu", "Yes, I’m American.", "hi, ah-meh-ree-kah-jeen dess"]
    ]},
    { title: "Where are you from?", jp: "出身", items: [
      ["どこからきましたか。", "Kanji form: どこから来ましたか。", "doko kara kimashita ka?", "Where are you from? (lit. where did you come from?)", "doh-koh kah-rah kee-mahsh-tah kah?"],
      ["フランスのかたですか。", "フランス is katakana", "furansu no kata desu ka?", "Are you French?", "foo-rahn-soo no kah-tah dess kah?"],
      ["フランスじん", "Kanji form: フランス人", "furansujin", "French person", "foo-rahn-soo-jeen"],
      ["いいえ、フランスじんです。", "Kanji form: いいえ、フランス人です。", "iie, furansujin desu", "No, I’m French. (answer to “Are you American?”)", "ee-eh, foo-rahn-soo-jeen dess"],
      ["フランスからきました。", "Kanji form: フランスから来ました。", "furansu kara kimashita", "I’m from France. (lit. I came from France)", "foo-rahn-soo kah-rah kee-mahsh-tah"]
    ]},
    { title: "Essentials: everyday", jp: "基本", items: [
      ["はい", "", "hai", "Yes.", "hi"],
      ["いいえ", "", "iie", "No.", "ee-eh"],
      ["すみません", "", "sumimasen", "Excuse me / Sorry.", "s’mee-mah-sen"],
      ["おねがいします", "", "onegai shimasu", "Please (asking for something).", "oh-neh-guy shee-mahss"],
      ["どうぞ", "", "dōzo", "Please, go ahead.", "doh-zoh"],
      ["だいじょうぶです", "", "daijōbu desu", "It’s OK / I’m fine.", "dye-joh-boo dess"],
      ["わかりません", "", "wakarimasen", "I don’t understand.", "wah-kah-ree-mah-sen"]
    ]},
    { title: "Essentials: greetings", jp: "挨拶", items: [
      ["こんにちは", "は here is read wa", "konnichiwa", "Hello (daytime).", "kon-nee-chee-wah"],
      ["こんばんは", "", "konbanwa", "Good evening.", "kom-bahn-wah"],
      ["おやすみなさい", "", "oyasumi nasai", "Good night.", "oh-yah-soo-mee nah-sye"],
      ["はじめまして", "", "hajimemashite", "Nice to meet you.", "hah-jee-meh-mahsh-teh"]
    ]},
    { title: "Essentials: food and out", jp: "食事", items: [
      ["いただきます", "", "itadakimasu", "Said before eating.", "ee-tah-dah-kee-mahss"],
      ["ごちそうさまでした", "", "gochisōsama deshita", "Said after the meal: thank you.", "go-chee-soh-sah-mah desh-tah"],
      ["おいしい", "", "oishii", "Delicious.", "oh-ee-shee"],
      ["かんぱい", "", "kanpai", "Cheers!", "kahm-pie"],
      ["いくらですか", "", "ikura desu ka", "How much is it?", "ee-koo-rah dess kah"],
      ["トイレはどこですか", "トイレ is katakana (toire)", "toire wa doko desu ka", "Where is the toilet?", "toy-reh wah doh-koh dess kah"]
    ]}
  ],

  lessons: [
    { number: 3, jp: "第3課",
      words: [
        ["まだまだです", "", "mada mada desu", "I still have a long way to go. (modest reply to a compliment)", "mah-dah mah-dah dess"],
        ["どうも", "Example: どうもありがとうございます。 Thank you very much.", "dōmo", "Very much, indeed. Alone: a quick “thanks”.", "doh-moh"],
        ["こんにちは", "は here is read wa", "konnichiwa", "Good afternoon / hello.", "kon-nee-chee-wah"],
        ["まだ", "", "mada", "Still / not yet.", "mah-dah"],
        ["いやな", "Example: いやなおてんきですね。 Nasty weather, isn’t it?", "iyana", "Unpleasant, nasty (e.g. weather).", "ee-yah-nah"],
        ["にほんのかた", "Pimsleur shows: 日本のかた", "nihon no kata", "A Japanese person (polite).", "nee-hon no kah-tah"],
        ["にほんじん", "Pimsleur shows: 日本人", "nihonjin", "Japanese (person).", "nee-hon-jeen"],
        ["でも", "", "demo", "But / however.", "deh-moh"],
        ["よく", "", "yoku", "Well (yoku wakarimasu = you understand well).", "yoh-koo"],
        ["にほん", "Pimsleur shows: 日本", "nihon", "Japan.", "nee-hon"],
        ["まだじょうずじゃありません。", "Pimsleur shows: まだ上手じゃありません。", "mada jōzu ja arimasen", "I’m not good yet.", "mah-dah joh-zoo jah ah-ree-mah-sen"],
        ["にほんじんじゃありません。", "Pimsleur shows: 日本人じゃありません。", "nihonjin ja arimasen", "I’m not Japanese.", "nee-hon-jeen jah ah-ree-mah-sen"],
        ["そうです", "Without ね: a plain “yes, that’s it” (そうですね = “indeed, isn’t it?”)", "sō desu", "That’s right / Yes, it is.", "soh dess"],
        ["ええ", "", "ee", "Yes (softer, more conversational than はい).", "eh-eh"],
        ["おじょうずです", "Pimsleur shows: お上手です. お = polite: said about someone else, never about yourself", "ojōzu desu", "You’re very skilled (polite).", "oh-joh-zoo dess"]
      ],
      dialogueTitle: "Speak Easy · Pimsleur dialogue",
      dialogueNote: "The real Pimsleur dialogue of this lesson.",
      dialogue: [
        ["A", "すみません。にほんのかたですか。", "sumimasen. nihon no kata desu ka?", "Excuse me. Are you Japanese?"],
        ["B", "はい、そうです。", "hai, sō desu", "Yes, I am."],
        ["A", "わたしはアメリカじんです。", "watashi wa amerikajin desu", "I’m American."],
        ["B", "でも、にほんごがよくわかりますね。", "demo, nihongo ga yoku wakarimasu ne", "But you understand Japanese well."],
        ["A", "ええ、すこし。でも、まだまだです。", "ee, sukoshi. demo, mada mada desu", "Yes, a little. But I still have a long way to go."],
        ["B", "いいえ、おじょうずです。", "iie, ojōzu desu", "No, you’re very good."],
        ["A", "ありがとうございます。", "arigatō gozaimasu", "Thank you."]
      ]
    },
    { number: 4, jp: "第4課",
      words: [
        ["どこ", "Example: えきはどこですか。 Where is the station?", "doko", "Where?", "doh-koh"],
        ["じょうずに", "Pimsleur shows: 上手に. Example: にほんごをじょうずにはなしますね。 You speak Japanese well. (を is read o)", "jōzu ni", "Well, skillfully (how you do something).", "joh-zoo nee"],
        ["ここ", "ここ here (near me) · あそこ over there (far from both of us)", "koko", "Here.", "koh-koh"],
        ["えき", "Pimsleur shows: 駅", "eki", "Station.", "eh-kee"],
        ["こうえん", "Pimsleur shows: 公園", "kōen", "Park.", "koh-en"],
        ["あそこ", "", "asoko", "Over there.", "ah-soh-koh"],
        ["なんですか", "Pimsleur shows: なんですか (何ですか)", "nan desu ka?", "What is it?", "nahn dess kah?"],
        ["うえのこうえん", "Pimsleur shows: 上野公園", "Ueno kōen", "Ueno Park (Tokyo).", "oo-eh-noh koh-en"],
        ["はなします", "Pimsleur shows: 話します", "hanashimasu", "I / you speak.", "hah-nah-shee-mahss"],
        ["うえのえきはどこですか。", "Pimsleur shows: 上野駅はどこですか？ (は is read wa)", "Ueno eki wa doko desu ka?", "Where is Ueno Station?", "oo-eh-noh eh-kee wah doh-koh dess kah?"]
      ],
      dialogue: [
        ["A", "すみません、あそこはなんですか。", "sumimasen, asoko wa nan desu ka?", "Excuse me, what is over there?"],
        ["B", "うえのこうえんです。", "Ueno kōen desu", "It’s Ueno Park."],
        ["A", "えきはどこですか。", "eki wa doko desu ka?", "Where is the station?"],
        ["B", "ここです。", "koko desu", "It’s right here."],
        ["B", "にほんごをじょうずにはなしますね。", "nihongo o jōzu ni hanashimasu ne", "You speak Japanese well."],
        ["A", "いいえ、まだまだです。", "iie, mada mada desu", "No, I still have a long way to go."]
      ]
    }
  ]
};
