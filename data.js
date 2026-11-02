/*
  Japanese study notes: all content lives here.
  Phrase entries: [japanese, note, romaji, english, soundsLike]
  To add a Pimsleur lesson, append an object to NOTES.lessons (newest last).
*/
window.NOTES = {
  updated: "2026-11-02",

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
      ["いいです。", "いい = good. Depending on the tone: “that’s fine” or a polite “no thanks”", "ii desu", "It’s fine.", "ee-ee dess"],
      ["いいですか。", "Also “May I?” (e.g. pointing at a seat or a photo). Answer: はい、どうぞ。", "ii desu ka?", "Is it all right?", "ee-ee dess kah?"],
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
    ]},
    { title: "Getting around", jp: "旅の言葉", items: [
      ["○○はどこですか。", "Pattern from Lesson 4. Example: トイレはどこですか。 Where is the toilet?", "○○ wa doko desu ka?", "Where is ○○?", "… wah doh-koh dess kah?"],
      ["○○にいきたいです。", "Kanji form: ○○に行きたいです。 に = to (a place) · いきたい = want to go. Example: うえのえきにいきたいです。 I want to go to Ueno Station.", "○○ ni ikitai desu", "I want to go to ○○.", "… nee ee-kee-tye dess"],
      ["にほんごがわかりません。", "Kanji form: 日本語がわかりません。 ～ます → ～ません = negative (Lesson 5)", "nihongo ga wakarimasen", "I don’t understand Japanese.", "nee-hon-go gah wah-kah-ree-mah-sen"],
      ["えいごではなしてくれませんか。", "Kanji form: 英語で話してくれませんか。 で = in (a language) · はなして くれませんか = could you (speak) for me? (はなします, Lesson 4)", "eigo de hanashite kuremasen ka?", "Could you speak in English?", "ay-go deh hah-nahsh-teh koo-reh-mah-sen kah?"]
    ]},
    { title: "Survival: restaurant", short: "Restaurant", jp: "レストラン", src: "survival", items: [
      ["なんめいさまですか。", "Kanji form: 何名様ですか。 What the staff asks at the door", "nanmei-sama desu ka?", "How many people? (staff)", "nahn-may-sah-mah dess kah?"],
      ["ふたりです。", "Kanji form: 二人です。 ひとり = one person", "futari desu", "Two people.", "foo-tah-ree dess"],
      ["メニューをおねがいします。", "メニュー is katakana", "menyū o onegai shimasu", "The menu, please.", "meh-nyoo oh oh-neh-guy shee-mahss"],
      ["これをください。", "Point at the menu. ください = please give me", "kore o kudasai", "This one, please.", "koh-reh oh koo-dah-sye"],
      ["おすすめはなんですか。", "Kanji form: おすすめは何ですか。", "osusume wa nan desu ka?", "What do you recommend?", "oh-soo-soo-meh wah nahn dess kah?"],
      ["おみずをください。", "Kanji form: お水をください。", "omizu o kudasai", "Water, please.", "oh-mee-zoo oh koo-dah-sye"],
      ["〜はたべられません。", "Kanji form: 〜は食べられません。 Example: にくはたべられません。 I can’t eat meat.", "~ wa taberaremasen", "I can’t eat ~.", "… wah tah-beh-rah-reh-mah-sen"],
      ["おかいけいをおねがいします。", "Kanji form: お会計をお願いします。", "okaikei o onegai shimasu", "The bill, please.", "oh-kye-kay oh oh-neh-guy shee-mahss"],
      ["カードでいいですか。", "カード is katakana", "kādo de ii desu ka?", "Can I pay by card?", "kah-doh deh ee-ee dess kah?"]
    ]},
    { title: "Survival: train and station", short: "Train", jp: "駅", src: "survival", items: [
      ["〜まで、いちまいください。", "Kanji form: 〜まで、一枚ください。 Example: きょうとまで、にまいください。 Two tickets to Kyoto.", "~ made, ichimai kudasai", "One ticket to ~, please.", "… mah-deh, ee-chee-my koo-dah-sye"],
      ["このでんしゃは〜にいきますか。", "Kanji form: この電車は〜に行きますか。", "kono densha wa ~ ni ikimasu ka?", "Does this train go to ~?", "koh-noh den-shah wah … nee ee-kee-mahss kah?"],
      ["なんばんせんですか。", "Kanji form: 何番線ですか。", "nanbansen desu ka?", "Which platform?", "nahn-bahn-sen dess kah?"],
      ["のりかえはどこですか。", "Kanji form: 乗り換えはどこですか。", "norikae wa doko desu ka?", "Where do I change trains?", "noh-ree-kah-eh wah doh-koh dess kah?"],
      ["つぎのでんしゃはなんじですか。", "Kanji form: 次の電車は何時ですか。", "tsugi no densha wa nanji desu ka?", "What time is the next train?", "tsoo-gee noh den-shah wah nahn-jee dess kah?"],
      ["していせき", "Kanji form: 指定席", "shiteiseki", "Reserved seat.", "shee-tay-seh-kee"],
      ["じゆうせき", "Kanji form: 自由席", "jiyūseki", "Unreserved seat.", "jee-yoo-seh-kee"]
    ]},
    { title: "Survival: hotel", short: "Hotel", jp: "ホテル", src: "survival", items: [
      ["よやくしています。", "Kanji form: 予約しています。", "yoyaku shite imasu", "I have a reservation.", "yoh-yah-koo shteh ee-mahss"],
      ["チェックインをおねがいします。", "チェックイン is katakana", "chekkuin o onegai shimasu", "Check-in, please.", "check-een oh oh-neh-guy shee-mahss"],
      ["にもつをあずかってもらえますか。", "Kanji form: 荷物を預かってもらえますか。", "nimotsu o azukatte moraemasu ka?", "Could you keep our luggage?", "nee-moh-tsoo oh ah-zoo-kaht-teh moh-rah-eh-mahss kah?"],
      ["Wi-Fiのパスワードはなんですか。", "パスワード is katakana", "waifai no pasuwādo wa nan desu ka?", "What is the Wi-Fi password?", "wye-fye noh pah-soo-wah-doh wah nahn dess kah?"],
      ["ちょうしょくはなんじからですか。", "Kanji form: 朝食は何時からですか。", "chōshoku wa nanji kara desu ka?", "From what time is breakfast?", "choh-shoh-koo wah nahn-jee kah-rah dess kah?"]
    ]},
    { title: "Survival: shopping", short: "Shopping", jp: "買い物", src: "survival", items: [
      ["これはいくらですか。", "", "kore wa ikura desu ka?", "How much is this?", "koh-reh wah ee-koo-rah dess kah?"],
      ["みているだけです。", "Kanji form: 見ているだけです。", "mite iru dake desu", "I’m just looking.", "mee-teh ee-roo dah-keh dess"],
      ["カードはつかえますか。", "Kanji form: カードは使えますか。", "kādo wa tsukaemasu ka?", "Do you take cards?", "kah-doh wah tsoo-kah-eh-mahss kah?"],
      ["ふくろはいりません。", "Kanji form: 袋はいりません。", "fukuro wa irimasen", "I don’t need a bag.", "foo-koo-roh wah ee-ree-mah-sen"],
      ["めんぜいできますか。", "Kanji form: 免税できますか。 Bring your passport", "menzei dekimasu ka?", "Can I buy tax-free?", "men-zay deh-kee-mahss kah?"]
    ]},
    { title: "Survival: when you need help", short: "Help", jp: "困ったとき", src: "survival", items: [
      ["もういちどおねがいします。", "Kanji form: もう一度お願いします。", "mō ichido onegai shimasu", "Once more, please.", "moh ee-chee-doh oh-neh-guy shee-mahss"],
      ["ゆっくりおねがいします。", "", "yukkuri onegai shimasu", "More slowly, please.", "yook-koo-ree oh-neh-guy shee-mahss"],
      ["みちにまよいました。", "Kanji form: 道に迷いました。", "michi ni mayoimashita", "I’m lost.", "mee-chee nee mah-yoh-ee-mahsh-tah"],
      ["びょういんはどこですか。", "Kanji form: 病院はどこですか。", "byōin wa doko desu ka?", "Where is a hospital?", "byoh-een wah doh-koh dess kah?"],
      ["けいさつをよんでください。", "Kanji form: 警察を呼んでください。", "keisatsu o yonde kudasai", "Please call the police.", "kay-sah-tsoo oh yohn-deh koo-dah-sye"],
      ["たすけて！", "Kanji form: 助けて！", "tasukete!", "Help!", "tah-soo-keh-teh!"]
    ]},
    { title: "Signs to recognize", short: "Signs", jp: "看板", src: "survival", items: [
      ["入口", "Read: いりぐち", "iriguchi", "Entrance.", "ee-ree-goo-chee"],
      ["出口", "Read: でぐち. Stations also have 東口 east, 西口 west, 南口 south, 北口 north exits", "deguchi", "Exit.", "deh-goo-chee"],
      ["改札", "Read: かいさつ", "kaisatsu", "Ticket gates.", "kye-sah-tsoo"],
      ["お手洗い", "Read: おてあらい. Also written トイレ", "otearai", "Toilets.", "oh-teh-ah-rye"],
      ["男 / 女", "Read: おとこ / おんな", "otoko / onna", "Men / Women.", "oh-toh-koh / ohn-nah"],
      ["営業中", "Read: えいぎょうちゅう", "eigyōchū", "Open (for business).", "ay-gyoh-choo"],
      ["準備中", "Read: じゅんびちゅう", "junbichū", "Closed (preparing).", "joon-bee-choo"],
      ["禁煙", "Read: きんえん", "kin’en", "No smoking.", "keen-en"],
      ["押 / 引", "Read: おす / ひく. On doors", "osu / hiku", "Push / Pull.", "oh-soo / hee-koo"]
    ]},
    { title: "Numbers", short: "Numbers", jp: "数字", src: "numbers", items: [
      ["いち", "Kanji: 一", "ichi", "1", "ee-chee"],
      ["に", "Kanji: 二", "ni", "2", "nee"],
      ["さん", "Kanji: 三", "san", "3", "sahn"],
      ["よん", "Kanji: 四. Also し (shi), avoided because it sounds like “death”", "yon", "4", "yohn"],
      ["ご", "Kanji: 五", "go", "5", "goh"],
      ["ろく", "Kanji: 六", "roku", "6", "roh-koo"],
      ["なな", "Kanji: 七. Also しち (shichi)", "nana", "7", "nah-nah"],
      ["はち", "Kanji: 八", "hachi", "8", "hah-chee"],
      ["きゅう", "Kanji: 九", "kyū", "9", "kyoo"],
      ["じゅう", "Kanji: 十", "jū", "10", "joo"],
      ["じゅういち", "Kanji: 十一. 10 + 1", "jū ichi", "11", "joo ee-chee"],
      ["にじゅう", "Kanji: 二十. 2 × 10", "ni jū", "20", "nee joo"],
      ["ひゃく", "Kanji: 百", "hyaku", "100", "hyah-koo"],
      ["さんびゃく", "Irregular: h → b", "sanbyaku", "300", "sahn-byah-koo"],
      ["ろっぴゃく", "Irregular: h → pp", "roppyaku", "600", "rohp-pyah-koo"],
      ["はっぴゃく", "Irregular: h → pp", "happyaku", "800", "hahp-pyah-koo"],
      ["せん", "Kanji: 千", "sen", "1,000", "sen"],
      ["さんぜん", "Irregular: s → z", "sanzen", "3,000", "sahn-zen"],
      ["はっせん", "Irregular", "hassen", "8,000", "hahs-sen"],
      ["いちまん", "Kanji: 一万. Japanese counts in blocks of 10,000 (man), not 1,000", "ichi man", "10,000", "ee-chee mahn"],
      ["えん", "Kanji: 円. Written ¥", "en", "Yen.", "en"]
    ]}
  ],

  lessons: [
    { number: 1, jp: "第1課",
      words: [
        ["アメリカじん", "Pimsleur shows: アメリカ人. アメリカ is katakana, じん (人) = person", "amerikajin", "American (person).", "ah-meh-ree-kah-jeen"],
        ["いいえ", "", "iie", "No.", "ee-eh"],
        ["えいご", "Pimsleur shows: 英語", "eigo", "English (language).", "ay-go"],
        ["です", "Ends a polite sentence, like “is / am / are”. The final u is almost silent", "desu", "Is / am / are.", "dess"],
        ["わかりません", "", "wakarimasen", "I don’t understand.", "wah-kah-ree-mah-sen"],
        ["わかりますか。", "か at the end turns it into a question", "wakarimasu ka?", "Do you understand?", "wah-kah-ree-mahss kah?"],
        ["アメリカのかた", "Pimsleur shows: アメリカの方. かた = polite word for “person”", "amerika no kata", "An American (polite).", "ah-meh-ree-kah noh kah-tah"],
        ["にほんご", "Pimsleur shows: 日本語", "nihongo", "Japanese (language).", "nee-hon-go"],
        ["はい", "", "hai", "Yes.", "hi"],
        ["すこし", "Pimsleur shows: 少し", "sukoshi", "A little.", "s’koh-shee"],
        ["わかります", "", "wakarimasu", "I understand.", "wah-kah-ree-mahss"]
      ]
    },
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
      dialogues: [
        { title: "Speak Easy 1 · the compliment", note: "Pimsleur dialogue, lesson 3.", lines: [
          ["A", "すみません。にほんのかたですか。", "sumimasen. nihon no kata desu ka?", "Excuse me. Are you Japanese?"],
          ["B", "はい、そうです。", "hai, sō desu", "Yes, I am."],
          ["A", "わたしはアメリカじんです。", "watashi wa amerikajin desu", "I’m American."],
          ["B", "でも、にほんごがよくわかりますね。", "demo, nihongo ga yoku wakarimasu ne", "But you understand Japanese well."],
          ["A", "ええ、すこし。でも、まだまだです。", "ee, sukoshi. demo, mada mada desu", "Yes, a little. But I still have a long way to go."],
          ["B", "いいえ、おじょうずです。", "iie, ojōzu desu", "No, you’re very good."],
          ["A", "ありがとうございます。", "arigatō gozaimasu", "Thank you."]
        ]},
        { title: "Speak Easy 2 · good morning", note: "Pimsleur dialogue, lesson 3.", lines: [
          ["A", "おはようございます。", "ohayō gozaimasu", "Good morning."],
          ["B", "おはようございます。", "ohayō gozaimasu", "Good morning."],
          ["A", "いいおてんきですね。", "ii otenki desu ne", "Nice weather, isn’t it?"],
          ["B", "あ、にほんごがわかりますか。", "a, nihongo ga wakarimasu ka?", "Oh, you understand Japanese?"],
          ["A", "はい、すこし。でも、まだじょうずじゃありません。", "hai, sukoshi. demo, mada jōzu ja arimasen", "Yes, a little. But I’m not good yet."],
          ["B", "アメリカのかたですか。", "amerika no kata desu ka?", "Are you American?"],
          ["A", "はい。", "hai", "Yes."],
          ["B", "でも、にほんごがよくわかりますね。", "demo, nihongo ga yoku wakarimasu ne", "But you understand Japanese well."]
        ]}
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
      dialogues: [
        { title: "Speak Easy · Ueno Park", note: "Pimsleur dialogue, lesson 4.", lines: [
          ["A", "あのう、すみません。", "anō, sumimasen", "Um, excuse me. (あのう = polite hesitation)"],
          ["B", "はい、なんですか。", "hai, nan desu ka?", "Yes, what is it?"],
          ["A", "うえのこうえんはどこですか。", "Ueno kōen wa doko desu ka?", "Where is Ueno Park?"],
          ["B", "あそこです。", "asoko desu", "It’s over there."],
          ["A", "うえのえきは？", "Ueno eki wa?", "And Ueno Station?"],
          ["B", "ここですよ。", "koko desu yo", "It’s right here. (よ = “I tell you”)"],
          ["A", "どうもありがとうございます。", "dōmo arigatō gozaimasu", "Thank you very much."]
        ]}
      ]
    },
    { number: 5, jp: "第5課",
      words: [
        ["たべます", "Pimsleur shows: 食べます", "tabemasu", "I / you eat.", "tah-beh-mahss"],
        ["たべませんか", "Pimsleur shows: 食べませんか. ～ませんか = “won’t you…?”, a polite invitation", "tabemasen ka?", "Would you like to eat?", "tah-beh-mah-sen kah?"],
        ["なにか", "Pimsleur shows: 何か. Example: なにかたべませんか。 Would you like to eat something?", "nanika", "Something.", "nah-nee-kah"],
        ["そうですね", "Here: thinking before you answer. Also “that’s right, isn’t it?” (Phrases)", "sō desu ne", "Well… let me see.", "soh dess neh"],
        ["いえ", "A shorter, softer いいえ", "ie", "No (as in “No, thank you”).", "ee-eh (short)"],
        ["たべません", "Pimsleur shows: 食べません. ～ます = do · ～ません = don’t", "tabemasen", "I / you don’t eat.", "tah-beh-mah-sen"],
        ["のみます", "Pimsleur shows: 飲みます", "nomimasu", "I / you drink.", "noh-mee-mahss"],
        ["いえ、けっこうです", "Pimsleur shows: いえ、結構です. Small っ = short pause: kek·kō", "ie, kekkō desu", "No, thank you. (polite refusal)", "ee-eh, keck-koh dess"],
        ["のみませんか", "Pimsleur shows: 飲みませんか", "nomimasen ka?", "Would you like to drink (something)?", "noh-mee-mah-sen kah?"]
      ],
      dialogue: [
        ["A", "なにかたべませんか。", "nanika tabemasen ka?", "Would you like to eat something?"],
        ["B", "いえ、けっこうです。", "ie, kekkō desu", "No, thank you."],
        ["A", "なにかのみませんか。", "nanika nomimasen ka?", "Would you like something to drink?"],
        ["B", "そうですね…ええ、ありがとうございます。", "sō desu ne… ee, arigatō gozaimasu", "Let me see… yes, thank you."]
      ]
    },
    { number: 6, jp: "第6課",
      words: [
        ["どこで", "Where an action happens. Example: どこでたべますか。 Where shall we eat?", "doko de", "Where (at which place)?", "doh-koh deh"],
        ["わたしの", "Pimsleur shows: 私の. の = ’s / of. Example: わたしのおきにいりのレストラン my favorite restaurant", "watashi no", "My.", "wah-tah-shee noh"],
        ["はなしません", "Pimsleur shows: 話しません. ～ます → ～ません (Lesson 5)", "hanashimasen", "I / you don’t speak.", "hah-nah-shee-mah-sen"],
        ["いつ", "Example: いつたべますか。 When shall we eat?", "itsu", "When?", "ee-tsoo"],
        ["レストラン", "Katakana (from English “restaurant”)", "resutoran", "Restaurant.", "reh-soo-toh-rahn"],
        ["あとで", "Pimsleur shows: 後で. Example: あとでたべます。 I’ll eat later.", "atode", "Later.", "ah-toh-deh"],
        ["おきにいりの", "Pimsleur shows: お気に入りの", "okiniiri no", "Favorite.", "oh-kee-nee-ee-ree noh"],
        ["わたしも", "Pimsleur shows: 私も. も = too, also", "watashi mo", "Me too / I also.", "wah-tah-shee moh"],
        ["いま", "Pimsleur shows: 今. Example: いまのみます。 I’ll drink now.", "ima", "Now.", "ee-mah"],
        ["カフェ", "Katakana (from French “café”)", "kafe", "Café.", "kah-feh"]
      ],
      sentences: [
        ["いまたべません。", "Pimsleur shows: 今食べません。", "ima tabemasen", "I’m not going to eat now.", "ee-mah tah-beh-mah-sen"],
        ["どこでたべますか。", "Pimsleur shows: どこで食べますか。", "doko de tabemasu ka?", "Where are you going to eat?", "doh-koh deh tah-beh-mahss kah?"],
        ["わたしもはなしません。", "Pimsleur shows: 私も話しません。", "watashi mo hanashimasen", "I don’t speak (it) either.", "wah-tah-shee moh hah-nah-shee-mah-sen"],
        ["いい、でもあとで。", "Pimsleur shows: いい、でも後で。 いい = good, fine (here: yes) · でも = but · あとで = later", "ii, demo atode", "Yes, but later.", "ee-ee, deh-moh ah-toh-deh"],
        ["カフェでなにかのみませんか。", "Pimsleur shows: カフェで何か飲みませんか。 で = at (where you do it)", "kafe de nanika nomimasen ka?", "Won’t you drink something at the café?", "kah-feh deh nah-nee-kah noh-mee-mah-sen kah?"]
      ],
      dialogues: [
        { title: "Speak Easy · coffee", note: "Pimsleur dialogue, lesson 6.", lines: [
          ["A", "こんにちは。", "konnichiwa", "Hello."],
          ["B", "こんにちは。いいおてんきですね。", "konnichiwa. ii otenki desu ne", "Hello. Nice weather, isn’t it?"],
          ["A", "そうですね。", "sō desu ne", "It is."],
          ["B", "なにかたべませんか。", "nanika tabemasen ka?", "Would you like to eat something?"],
          ["A", "いえ、けっこうです。でも、なにかのみます。", "ie, kekkō desu. demo, nanika nomimasu", "No, thank you. But I’ll drink something."],
          ["B", "なにをのみますか。", "nani o nomimasu ka?", "What will you drink? (なに = what · を, read o, marks the object)"],
          ["A", "コーヒーをのみます。", "kōhī o nomimasu", "I’ll have coffee. (コーヒー is katakana)"],
          ["B", "わたしもコーヒーをのみます。", "watashi mo kōhī o nomimasu", "I’ll have coffee too."]
        ]}
      ]
    },
    { number: 7, jp: "第7課",
      words: [
        ["ほしいです", "Pimsleur shows: 欲しいです. Example: コーヒーがほしいです。 I want a coffee.", "hoshii desu", "I want (a thing).", "hoh-shee dess"],
        ["ほしくありません", "Pimsleur shows: 欲しくありません. Negative of ほしいです", "hoshiku arimasen", "I don’t want (it).", "hoh-shee-koo ah-ree-mah-sen"],
        ["コーヒー", "Katakana (from “coffee”)", "kōhī", "Coffee.", "koh-hee"],
        ["ラテ", "Katakana (from “latte”)", "rate", "Latte.", "rah-teh"],
        ["こうちゃ", "Pimsleur shows: 紅茶 (literally “red tea”)", "kōcha", "Black tea.", "koh-chah"],
        ["ひるごはん", "Pimsleur shows: 昼ご飯. ひる = noon · ごはん = meal (also “rice”)", "hirugohan", "Lunch.", "hee-roo-go-hahn"],
        ["いいです", "Here: agreeing, “OK”. (Also “no thanks” depending on the tone)", "ii desu", "OK.", "ee-ee dess"],
        ["ここで", "Where an action happens (like どこで). Example: ここでたべます。 I’ll eat here.", "koko de", "Here (at this place).", "koh-koh deh"],
        ["わかりませんか", "Pimsleur shows: わかりませんか", "wakarimasen ka?", "You don’t know? / Don’t you understand?", "wah-kah-ree-mah-sen kah?"],
        ["なにを", "Pimsleur shows: 何を. を (read “o”) marks what you eat, drink, want to do. Example: なにをたべますか。 What will you eat?", "nani o", "What (as the object).", "nah-nee oh"]
      ],
      sentences: [
        ["なにをたべますか。", "Pimsleur shows: 何を食べますか。", "nani o tabemasu ka?", "What will you eat?", "nah-nee oh tah-beh-mahss kah?"],
        ["ひるごはんをたべます。", "Pimsleur shows: 昼ご飯を食べます。", "hirugohan o tabemasu", "I’ll eat lunch.", "hee-roo-go-hahn oh tah-beh-mahss"],
        ["コーヒーがほしいです。", "Pimsleur shows: コーヒーが欲しいです。 With ほしい the thing you want takes が, not を", "kōhī ga hoshii desu", "I want a coffee.", "koh-hee gah hoh-shee dess"]
      ],
      dialogues: [
        { title: "Speak Easy · my favorite café", note: "Pimsleur dialogue, lesson 7.", lines: [
          ["A", "いまなにかたべますか。", "ima nanika tabemasu ka?", "Are you going to eat something now?"],
          ["B", "あとでたべます。でも、なにかのみたいです。", "atode tabemasu. demo, nanika nomitai desu", "I’ll eat later. But I’d like to drink something. (〜たい = want to)"],
          ["A", "どこで？", "doko de?", "Where?"],
          ["B", "そうですね…わたしのおきにいりのカフェで。", "sō desu ne… watashi no okiniiri no kafe de", "Let me see… at my favorite café."],
          ["A", "いいですね。どこですか。", "ii desu ne. doko desu ka?", "Sounds good. Where is it?"],
          ["B", "あそこです。いきましょう。", "asoko desu. ikimashō", "It’s over there. Let’s go. (〜ましょう = let’s)"]
        ]}
      ]
    }
  ]
};
