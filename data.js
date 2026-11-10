/*
  Japanese study notes: all content lives here.
  Phrase entries: [japanese, note, romaji, english, soundsLike]
  To add a Pimsleur lesson, append an object to NOTES.lessons (newest last).
*/
window.NOTES = {
  updated: "2026-11-10",

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
    ["あ お", "お (o) has an extra little flick on the right; あ is a."],
    ["ぬ め", "ぬ (nu) ends in a small loop, め (me) does not."],
    ["る ろ", "る (ru) curls into a loop, ろ (ro) stays open."],
    ["は ほ", "ほ (ho) has a second bar that closes the top; は is ha."],
    ["さ ち", "Mirror twins: さ (sa) bulges left, ち (chi) bulges right."],
    ["き さ", "き (ki) has two crossbars, さ (sa) only one."],
    ["ね れ わ", "ね (ne) ends in a loop, れ (re) kicks out, わ (wa) curls in."],
    ["い り", "い (i): the left stroke is longer. り (ri): the right one is."]
  ],

  rules: [
    ["Small っ: pause, then double", "きって", "kitte · stamp", "A tiny stop before the next sound, which is doubled: kit·te."],
    ["Long vowels: hold the sound", "ありがとう", "arigatō", "う after o, and い after e, mostly stretch the vowel. Pimsleur just writes arigato."],
    ["Particles read differently", "こんにちは", "konnichiwa", "Used as a particle, は (ha) is read wa, を (wo) is read o and へ (he) is read e."],
    ["Whispered u and i", "です · ます", "dess · mahss", "After s, k, sh or t, u and i almost vanish: すこし (sukoshi) sounds like s’koshi."]
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
      ["アメリカのかたですか。", "アメリカ (amerika) is katakana. の (no) = of, かた (kata) = person (polite)", "amerika no kata desu ka?", "Are you American? (lit. a person of America?)", "ah-meh-ree-kah no kah-tah dess kah?"],
      ["はい、アメリカじんです。", "Pimsleur shows: はい、アメリカ人です。 じん (jin, 人) = nationality", "hai, amerikajin desu", "Yes, I’m American.", "hi, ah-meh-ree-kah-jeen dess"]
    ]},
    { title: "Where are you from?", jp: "出身", items: [
      ["どこからきましたか。", "Kanji form: どこから来ましたか。", "doko kara kimashita ka?", "Where are you from? (lit. where did you come from?)", "doh-koh kah-rah kee-mahsh-tah kah?"],
      ["フランスのかたですか。", "フランス (furansu) is katakana", "furansu no kata desu ka?", "Are you French?", "foo-rahn-soo no kah-tah dess kah?"],
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
      ["いいです。", "いい (ii) = good. Depending on the tone: “that’s fine” or a polite “no thanks”", "ii desu", "It’s fine.", "ee-ee dess"],
      ["いいですか。", "Also “May I?” (e.g. pointing at a seat or a photo). Answer: はい、どうぞ (hai, dōzo).", "ii desu ka?", "Is it all right?", "ee-ee dess kah?"],
      ["わかりません", "", "wakarimasen", "I don’t understand.", "wah-kah-ree-mah-sen"]
    ]},
    { title: "Essentials: greetings", jp: "挨拶", items: [
      ["こんにちは", "は here is read wa", "konnichiwa", "Hello (daytime).", "kon-nee-chee-wah"],
      ["こんばんは", "", "konbanwa", "Good evening.", "kom-bahn-wah"],
      ["おやすみなさい", "", "oyasumi nasai", "Good night.", "oh-yah-soo-mee nah-sye"],
      ["はじめまして", "", "hajimemashite", "Nice to meet you.", "hah-jee-meh-mahsh-teh"]
    ]},
    { title: "Essentials: how are you?", short: "How are you?", jp: "お元気ですか", items: [
      ["おげんきですか。", "Kanji: お元気ですか。 Polite. Not a daily “hi, how are you”: you ask it to someone you haven’t seen for a while", "o genki desu ka?", "How are you? (polite)", "oh-ghen-kee dess kah?"],
      ["げんき？", "Kanji: 元気？ Casual, with friends. Say it with a rising tone", "genki?", "How are you? (casual)", "ghen-kee?"],
      ["さいきんどう？", "Kanji: 最近どう？ さいきん (saikin) = lately · どう (dō) = how. Casual, with friends", "saikin dō?", "What’s up? / How’s it going lately?", "sye-keen doh?"],
      ["げんきです。", "Kanji: 元気です。 With friends just げんき (genki) or げんきだよ (genki da yo)", "genki desu", "I’m fine.", "ghen-kee dess"],
      ["はい、おかげさまで。", "Kanji: お陰様で. Literally “thanks to you”. The classic polite answer to おげんきですか (o genki desu ka)", "hai, okagesama de", "Yes, I’m well, thank you.", "hye, oh-kah-geh-sah-mah deh"],
      ["まあまあです。", "With friends just まあまあ (māmā)", "māmā desu", "So-so.", "mah-mah dess"],
      ["○○さんは？", "Turn the question back. Example: たなかさんは？ (Tanaka san wa?) は is read wa", "○○ san wa?", "And you?", "… sahn wah?"]
    ]},
    { title: "Essentials: food and out", jp: "食事", items: [
      ["いただきます", "", "itadakimasu", "Said before eating.", "ee-tah-dah-kee-mahss"],
      ["ごちそうさまでした", "", "gochisōsama deshita", "Said after the meal: thank you.", "go-chee-soh-sah-mah desh-tah"],
      ["おいしい", "", "oishii", "Delicious.", "oh-ee-shee"],
      ["かんぱい", "", "kanpai", "Cheers!", "kahm-pie"],
      ["いくらですか", "", "ikura desu ka", "How much is it?", "ee-koo-rah dess kah"],
      ["トイレはどこですか", "トイレ (toire) is katakana", "toire wa doko desu ka", "Where is the toilet?", "toy-reh wah doh-koh dess kah"]
    ]},
    { title: "Small words: questions", short: "Question words", jp: "疑問詞", src: "smallwords", items: [
      ["なに / なん", "Pimsleur shows: 何. なん (nan) before です (desu): なんですか (nan desu ka). なに (nani) elsewhere: なにをたべますか (nani o tabemasu ka)", "nani / nan", "What?", "nah-nee / nahn"],
      ["どこ", "えきはどこですか (eki wa doko desu ka) = where is the station?", "doko", "Where?", "doh-koh"],
      ["だれ", "Pimsleur shows: 誰. だれですか (dare desu ka) = who is it?", "dare", "Who?", "dah-reh"],
      ["いつ", "いつたべますか (itsu tabemasu ka) = when shall we eat?", "itsu", "When?", "ee-tsoo"],
      ["どうして", "Not in your lessons yet. Casual: なんで (nande). どうしてですか (dōshite desu ka) = why is that?", "dōshite", "Why?", "doh-sh’teh"],
      ["いくら", "Not in your lessons yet. いくらですか (ikura desu ka) = how much is it?", "ikura", "How much (money)?", "ee-koo-rah"],
      ["どれ", "Not in your lessons yet. どれですか (dore desu ka) = which one?", "dore", "Which one?", "doh-reh"]
    ]},
    { title: "Small words: linking", short: "Linking words", jp: "つなぐ言葉", src: "smallwords", items: [
      ["と", "A と B: you take both. コーヒーとこうちゃ (kōhī to kōcha) = coffee and tea", "to", "And (A and B).", "toh"],
      ["か", "A か B: you take one. コーヒーかこうちゃ (kōhī ka kōcha) = coffee or tea", "ka", "Or (A or B).", "kah"],
      ["でも", "Starts the sentence: でも、まだまだです (demo, mada mada desu) = but I still have a long way to go", "demo", "But.", "deh-moh"],
      ["も", "Replaces は (wa) or が (ga): わたしも (watashi mo) = me too", "mo", "Too, also.", "moh"],
      ["の", "A の B = A’s B: ホテルのレストラン (hoteru no resutoran) = the hotel’s restaurant", "no", "’s, of.", "noh"],
      ["から", "After the word: いまから (ima kara) = from now, ホテルから (hoteru kara) = from the hotel", "kara", "From.", "kah-rah"],
      ["まで", "After the word: きょうとまで (Kyōto made) = to Kyoto (tickets). いまから…まで (ima kara … made) = from now until…", "made", "Until, as far as.", "mah-deh"]
    ]},
    { title: "Small words: here and there", short: "Here & there", jp: "こそあど", src: "smallwords", items: [
      ["ここ", "Near me. ここでたべます (koko de tabemasu) = I’ll eat here", "koko", "Here.", "koh-koh"],
      ["そこ", "Near you. Not in your lessons yet", "soko", "There (near you).", "soh-koh"],
      ["あそこ", "Far from both of us. あそこです (asoko desu) = it’s over there", "asoko", "Over there.", "ah-soh-koh"],
      ["これ", "This thing (near me). これをください (kore o kudasai) = this one, please", "kore", "This (one).", "koh-reh"],
      ["それ", "That thing (near you). Not in your lessons yet", "sore", "That (one).", "soh-reh"],
      ["あれ", "That thing over there. Not in your lessons yet", "are", "That (one) over there.", "ah-reh"]
    ]},
    { title: "Small words: time", short: "Time words", jp: "時の言葉", src: "smallwords", items: [
      ["いま", "Pimsleur shows: 今. いまのみます (ima nomimasu) = I’ll drink now", "ima", "Now.", "ee-mah"],
      ["あとで", "Pimsleur shows: 後で. あとでたべます (atode tabemasu) = I’ll eat later", "atode", "Later.", "ah-toh-deh"],
      ["いまから", "Pimsleur shows: 今から. いまからなにをしますか (ima kara nani o shimasu ka) = what are you doing now?", "ima kara", "From now on.", "ee-mah kah-rah"],
      ["まだ", "まだまだです (mada mada desu) = I still have a long way to go", "mada", "Still, not yet.", "mah-dah"]
    ]},
    { title: "Getting around", jp: "旅の言葉", items: [
      ["○○はどこですか。", "Pattern from Lesson 4. Example: トイレはどこですか (toire wa doko desu ka). Where is the toilet?", "○○ wa doko desu ka?", "Where is ○○?", "… wah doh-koh dess kah?"],
      ["○○にいきたいです。", "Kanji form: ○○に行きたいです。 に (ni) = to (a place) · いきたい (ikitai) = want to go. Example: うえのえきにいきたいです (Ueno eki ni ikitai desu). I want to go to Ueno Station.", "○○ ni ikitai desu", "I want to go to ○○.", "… nee ee-kee-tye dess"],
      ["にほんごがわかりません。", "Kanji form: 日本語がわかりません。 ～ます (-masu) → ～ません (-masen) = negative (Lesson 5)", "nihongo ga wakarimasen", "I don’t understand Japanese.", "nee-hon-go gah wah-kah-ree-mah-sen"],
      ["えいごではなしてくれませんか。", "Kanji form: 英語で話してくれませんか。 で (de) = in (a language) · はなしてくれませんか (hanashite kuremasen ka) = could you (speak) for me? (はなします, hanashimasu, Lesson 4)", "eigo de hanashite kuremasen ka?", "Could you speak in English?", "ay-go deh hah-nahsh-teh koo-reh-mah-sen kah?"]
    ]},
    { title: "Survival: restaurant", short: "Restaurant", jp: "レストラン", src: "survival", items: [
      ["なんめいさまですか。", "Kanji form: 何名様ですか。 What the staff asks at the door", "nanmei-sama desu ka?", "How many people? (staff)", "nahn-may-sah-mah dess kah?"],
      ["ふたりです。", "Kanji form: 二人です。 ひとり (hitori) = one person", "futari desu", "Two people.", "foo-tah-ree dess"],
      ["メニューをおねがいします。", "メニュー (menyū) is katakana", "menyū o onegai shimasu", "The menu, please.", "meh-nyoo oh oh-neh-guy shee-mahss"],
      ["これをください。", "Point at the menu. ください (kudasai) = please give me", "kore o kudasai", "This one, please.", "koh-reh oh koo-dah-sye"],
      ["おすすめはなんですか。", "Kanji form: おすすめは何ですか。", "osusume wa nan desu ka?", "What do you recommend?", "oh-soo-soo-meh wah nahn dess kah?"],
      ["おみずをください。", "Kanji form: お水をください。", "omizu o kudasai", "Water, please.", "oh-mee-zoo oh koo-dah-sye"],
      ["〜はたべられません。", "Kanji form: 〜は食べられません。 Example: にくはたべられません (niku wa taberaremasen). I can’t eat meat.", "~ wa taberaremasen", "I can’t eat ~.", "… wah tah-beh-rah-reh-mah-sen"],
      ["おかいけいをおねがいします。", "Kanji form: お会計をお願いします。", "okaikei o onegai shimasu", "The bill, please.", "oh-kye-kay oh oh-neh-guy shee-mahss"],
      ["カードでいいですか。", "カード (kādo) is katakana", "kādo de ii desu ka?", "Can I pay by card?", "kah-doh deh ee-ee dess kah?"]
    ]},
    { title: "Survival: train and station", short: "Train", jp: "駅", src: "survival", items: [
      ["〜まで、いちまいください。", "Kanji form: 〜まで、一枚ください。 Example: きょうとまで、にまいください (Kyōto made, nimai kudasai). Two tickets to Kyoto.", "~ made, ichimai kudasai", "One ticket to ~, please.", "… mah-deh, ee-chee-my koo-dah-sye"],
      ["このでんしゃは〜にいきますか。", "Kanji form: この電車は〜に行きますか。", "kono densha wa ~ ni ikimasu ka?", "Does this train go to ~?", "koh-noh den-shah wah … nee ee-kee-mahss kah?"],
      ["なんばんせんですか。", "Kanji form: 何番線ですか。", "nanbansen desu ka?", "Which platform?", "nahn-bahn-sen dess kah?"],
      ["のりかえはどこですか。", "Kanji form: 乗り換えはどこですか。", "norikae wa doko desu ka?", "Where do I change trains?", "noh-ree-kah-eh wah doh-koh dess kah?"],
      ["つぎのでんしゃはなんじですか。", "Kanji form: 次の電車は何時ですか。", "tsugi no densha wa nanji desu ka?", "What time is the next train?", "tsoo-gee noh den-shah wah nahn-jee dess kah?"],
      ["していせき", "Kanji form: 指定席", "shiteiseki", "Reserved seat.", "shee-tay-seh-kee"],
      ["じゆうせき", "Kanji form: 自由席", "jiyūseki", "Unreserved seat.", "jee-yoo-seh-kee"]
    ]},
    { title: "Survival: hotel", short: "Hotel", jp: "ホテル", src: "survival", items: [
      ["よやくしています。", "Kanji form: 予約しています。", "yoyaku shite imasu", "I have a reservation.", "yoh-yah-koo shteh ee-mahss"],
      ["チェックインをおねがいします。", "チェックイン (chekkuin) is katakana", "chekkuin o onegai shimasu", "Check-in, please.", "check-een oh oh-neh-guy shee-mahss"],
      ["にもつをあずかってもらえますか。", "Kanji form: 荷物を預かってもらえますか。", "nimotsu o azukatte moraemasu ka?", "Could you keep our luggage?", "nee-moh-tsoo oh ah-zoo-kaht-teh moh-rah-eh-mahss kah?"],
      ["Wi-Fiのパスワードはなんですか。", "パスワード (pasuwādo) is katakana", "waifai no pasuwādo wa nan desu ka?", "What is the Wi-Fi password?", "wye-fye noh pah-soo-wah-doh wah nahn dess kah?"],
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
      ["入口", "Read: いりぐち (iriguchi)", "iriguchi", "Entrance.", "ee-ree-goo-chee"],
      ["出口", "Read: でぐち (deguchi). Stations also have 東口 (higashiguchi) east, 西口 (nishiguchi) west, 南口 (minamiguchi) south, 北口 (kitaguchi) north exits", "deguchi", "Exit.", "deh-goo-chee"],
      ["改札", "Read: かいさつ (kaisatsu)", "kaisatsu", "Ticket gates.", "kye-sah-tsoo"],
      ["お手洗い", "Read: おてあらい (otearai). Also written トイレ (toire)", "otearai", "Toilets.", "oh-teh-ah-rye"],
      ["男 / 女", "Read: おとこ (otoko) / おんな (onna)", "otoko / onna", "Men / Women.", "oh-toh-koh / ohn-nah"],
      ["営業中", "Read: えいぎょうちゅう (eigyōchū)", "eigyōchū", "Open (for business).", "ay-gyoh-choo"],
      ["準備中", "Read: じゅんびちゅう (junbichū)", "junbichū", "Closed (preparing).", "joon-bee-choo"],
      ["禁煙", "Read: きんえん (kin’en)", "kin’en", "No smoking.", "keen-en"],
      ["押 / 引", "Read: おす (osu) / ひく (hiku). On doors", "osu / hiku", "Push / Pull.", "oh-soo / hee-koo"]
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
      ["きゅう", "Kanji: 九. Also く (ku), used for 9 o’clock: くじ (ku ji)", "kyū", "9", "kyoo"],
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
        ["アメリカじん", "Pimsleur shows: アメリカ人. アメリカ (amerika) is katakana, じん (jin, 人) = person", "amerikajin", "American (person).", "ah-meh-ree-kah-jeen"],
        ["いいえ", "", "iie", "No.", "ee-eh"],
        ["えいご", "Pimsleur shows: 英語", "eigo", "English (language).", "ay-go"],
        ["です", "Ends a polite sentence, like “is / am / are”. The final u is almost silent", "desu", "Is / am / are.", "dess"],
        ["わかりません", "", "wakarimasen", "I don’t understand.", "wah-kah-ree-mah-sen"],
        ["わかりますか。", "か (ka) at the end turns it into a question", "wakarimasu ka?", "Do you understand?", "wah-kah-ree-mahss kah?"],
        ["アメリカのかた", "Pimsleur shows: アメリカの方. かた (kata) = polite word for “person”", "amerika no kata", "An American (polite).", "ah-meh-ree-kah noh kah-tah"],
        ["にほんご", "Pimsleur shows: 日本語", "nihongo", "Japanese (language).", "nee-hon-go"],
        ["はい", "", "hai", "Yes.", "hi"],
        ["すこし", "Pimsleur shows: 少し", "sukoshi", "A little.", "s’koh-shee"],
        ["わかります", "", "wakarimasu", "I understand.", "wah-kah-ree-mahss"]
      ]
    },
    { number: 2, jp: "第2課",
      words: [
        ["じょうず", "Pimsleur shows: 上手", "jōzu", "Skilled, good at (something).", "joh-zoo"],
        ["ありがとう", "Casual. Add ございます (gozaimasu) to be polite", "arigatō", "Thanks.", "ah-ree-gah-toh"],
        ["じゃあ、また", "Pimsleur shows: じゃあ、また", "jaa, mata", "See you, then.", "jah, mah-tah"],
        ["ありがとうございます", "", "arigatō gozaimasu", "Thank you (polite).", "ah-ree-gah-toh go-zye-mahss"],
        ["いい", "", "ii", "Good, nice.", "ee-ee"],
        ["そう", "", "sō", "So, like that.", "soh"],
        ["おてんき", "Pimsleur shows: お天気. お (o) makes it polite", "otenki", "Weather.", "oh-ten-kee"],
        ["じょうずじゃありません", "Pimsleur shows: 上手じゃありません", "jōzu ja arimasen", "I’m not good (at it).", "joh-zoo jah ah-ree-mah-sen"],
        ["そうですね", "", "sō desu ne", "That’s right. / Let me see…", "soh dess neh"],
        ["おはよう", "Casual. おはようございます (ohayō gozaimasu) is the polite form", "ohayō", "Good morning (casual).", "oh-hah-yoh"]
      ],
      dialogues: [
        { title: "Speak Easy · do you understand Japanese?", note: "Pimsleur Speak Easy dialogue.", lines: [
          ["A", "すみません。にほんごがわかりますか。", "sumimasen. nihongo ga wakarimasu ka?", "Excuse me. Do you understand Japanese?"],
          ["B", "はい、すこし。", "hai, sukoshi", "Yes, a little."],
          ["A", "アメリカのかたですか。", "amerika no kata desu ka?", "Are you American?"],
          ["B", "はい。アメリカじんです。えいごがわかりますか。", "hai. amerikajin desu. eigo ga wakarimasu ka?", "Yes, I’m American. Do you understand English?"],
          ["A", "いいえ、わかりません。", "iie, wakarimasen", "No, I don’t."]
        ]}
      ]
    },
    { number: 3, jp: "第3課",
      words: [
        ["まだまだです", "", "mada mada desu", "I still have a long way to go. (modest reply to a compliment)", "mah-dah mah-dah dess"],
        ["どうも", "Example: どうもありがとうございます (dōmo arigatō gozaimasu). Thank you very much.", "dōmo", "Very much, indeed. Alone: a quick “thanks”.", "doh-moh"],
        ["こんにちは", "は here is read wa", "konnichiwa", "Good afternoon / hello.", "kon-nee-chee-wah"],
        ["まだ", "", "mada", "Still / not yet.", "mah-dah"],
        ["いやな", "Example: いやなおてんきですね (iya na otenki desu ne). Nasty weather, isn’t it?", "iyana", "Unpleasant, nasty (e.g. weather).", "ee-yah-nah"],
        ["にほんのかた", "Pimsleur shows: 日本のかた", "nihon no kata", "A Japanese person (polite).", "nee-hon no kah-tah"],
        ["にほんじん", "Pimsleur shows: 日本人", "nihonjin", "Japanese (person).", "nee-hon-jeen"],
        ["でも", "", "demo", "But / however.", "deh-moh"],
        ["よく", "Example: にほんごがよくわかりますね (nihongo ga yoku wakarimasu ne) = you understand Japanese well", "yoku", "Well (as in “you understand well”).", "yoh-koo"],
        ["にほん", "Pimsleur shows: 日本", "nihon", "Japan.", "nee-hon"],
        ["まだじょうずじゃありません。", "Pimsleur shows: まだ上手じゃありません。", "mada jōzu ja arimasen", "I’m not good yet.", "mah-dah joh-zoo jah ah-ree-mah-sen"],
        ["にほんじんじゃありません。", "Pimsleur shows: 日本人じゃありません。", "nihonjin ja arimasen", "I’m not Japanese.", "nee-hon-jeen jah ah-ree-mah-sen"],
        ["そうです", "Without ね (ne): a plain “yes, that’s it” (そうですね, sō desu ne = “indeed, isn’t it?”)", "sō desu", "That’s right / Yes, it is.", "soh dess"],
        ["ええ", "", "ee", "Yes (softer, more conversational than はい).", "eh-eh"],
        ["おじょうずです", "Pimsleur shows: お上手です. お (o) = polite: said about someone else, never about yourself", "ojōzu desu", "You’re very skilled (polite).", "oh-joh-zoo dess"]
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
        ["どこ", "Example: えきはどこですか (eki wa doko desu ka). Where is the station?", "doko", "Where?", "doh-koh"],
        ["じょうずに", "Pimsleur shows: 上手に. Example: にほんごをじょうずにはなしますね (nihongo o jōzu ni hanashimasu ne). You speak Japanese well.", "jōzu ni", "Well, skillfully (how you do something).", "joh-zoo nee"],
        ["ここ", "ここ (koko) here, near me · あそこ (asoko) over there, far from both of us", "koko", "Here.", "koh-koh"],
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
          ["A", "あのう、すみません。", "anō, sumimasen", "Um, excuse me. (あのう, anō = polite hesitation)"],
          ["B", "はい、なんですか。", "hai, nan desu ka?", "Yes, what is it?"],
          ["A", "うえのこうえんはどこですか。", "Ueno kōen wa doko desu ka?", "Where is Ueno Park?"],
          ["B", "あそこです。", "asoko desu", "It’s over there."],
          ["A", "うえのえきは？", "Ueno eki wa?", "And Ueno Station?"],
          ["B", "ここですよ。", "koko desu yo", "It’s right here. (よ, yo = “I tell you”)"],
          ["A", "どうもありがとうございます。", "dōmo arigatō gozaimasu", "Thank you very much."]
        ]}
      ]
    },
    { number: 5, jp: "第5課",
      words: [
        ["たべます", "Pimsleur shows: 食べます", "tabemasu", "I / you eat.", "tah-beh-mahss"],
        ["たべませんか", "Pimsleur shows: 食べませんか. ～ませんか (-masen ka) = “won’t you…?”, a polite invitation", "tabemasen ka?", "Would you like to eat?", "tah-beh-mah-sen kah?"],
        ["なにか", "Pimsleur shows: 何か. Example: なにかたべませんか (nanika tabemasen ka). Would you like to eat something?", "nanika", "Something.", "nah-nee-kah"],
        ["そうですね", "Here: thinking before you answer. Also “that’s right, isn’t it?” (Phrases)", "sō desu ne", "Well… let me see.", "soh dess neh"],
        ["いえ", "A shorter, softer いいえ (iie)", "ie", "No (as in “No, thank you”).", "ee-eh (short)"],
        ["たべません", "Pimsleur shows: 食べません. ～ます (-masu) = do · ～ません (-masen) = don’t", "tabemasen", "I / you don’t eat.", "tah-beh-mah-sen"],
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
        ["どこで", "Where an action happens. Example: どこでたべますか (doko de tabemasu ka). Where shall we eat?", "doko de", "Where (at which place)?", "doh-koh deh"],
        ["わたしの", "Pimsleur shows: 私の. の (no) = ’s / of. Example: わたしのおきにいりのレストラン (watashi no okiniiri no resutoran), my favorite restaurant", "watashi no", "My.", "wah-tah-shee noh"],
        ["はなしません", "Pimsleur shows: 話しません. ～ます (-masu) → ～ません (-masen), Lesson 5", "hanashimasen", "I / you don’t speak.", "hah-nah-shee-mah-sen"],
        ["いつ", "Example: いつたべますか (itsu tabemasu ka). When shall we eat?", "itsu", "When?", "ee-tsoo"],
        ["レストラン", "Katakana (from English “restaurant”)", "resutoran", "Restaurant.", "reh-soo-toh-rahn"],
        ["あとで", "Pimsleur shows: 後で. Example: あとでたべます (atode tabemasu). I’ll eat later.", "atode", "Later.", "ah-toh-deh"],
        ["おきにいりの", "Pimsleur shows: お気に入りの", "okiniiri no", "Favorite.", "oh-kee-nee-ee-ree noh"],
        ["わたしも", "Pimsleur shows: 私も. も (mo) = too, also", "watashi mo", "Me too / I also.", "wah-tah-shee moh"],
        ["いま", "Pimsleur shows: 今. Example: いまのみます (ima nomimasu). I’ll drink now.", "ima", "Now.", "ee-mah"],
        ["カフェ", "Katakana (from French “café”)", "kafe", "Café.", "kah-feh"]
      ],
      sentences: [
        ["いまたべません。", "Pimsleur shows: 今食べません。", "ima tabemasen", "I’m not going to eat now.", "ee-mah tah-beh-mah-sen"],
        ["どこでたべますか。", "Pimsleur shows: どこで食べますか。", "doko de tabemasu ka?", "Where are you going to eat?", "doh-koh deh tah-beh-mahss kah?"],
        ["わたしもはなしません。", "Pimsleur shows: 私も話しません。", "watashi mo hanashimasen", "I don’t speak (it) either.", "wah-tah-shee moh hah-nah-shee-mah-sen"],
        ["いい、でもあとで。", "Pimsleur shows: いい、でも後で。 いい (ii) = good, fine (here: yes) · でも (demo) = but · あとで (atode) = later", "ii, demo atode", "Yes, but later.", "ee-ee, deh-moh ah-toh-deh"],
        ["カフェでなにかのみませんか。", "Pimsleur shows: カフェで何か飲みませんか。 で (de) = at (where you do it)", "kafe de nanika nomimasen ka?", "Won’t you drink something at the café?", "kah-feh deh nah-nee-kah noh-mee-mah-sen kah?"]
      ],
      dialogues: [
        { title: "Speak Easy · coffee", note: "Pimsleur dialogue, lesson 6.", lines: [
          ["A", "こんにちは。", "konnichiwa", "Hello."],
          ["B", "こんにちは。いいおてんきですね。", "konnichiwa. ii otenki desu ne", "Hello. Nice weather, isn’t it?"],
          ["A", "そうですね。", "sō desu ne", "It is."],
          ["B", "なにかたべませんか。", "nanika tabemasen ka?", "Would you like to eat something?"],
          ["A", "いえ、けっこうです。でも、なにかのみます。", "ie, kekkō desu. demo, nanika nomimasu", "No, thank you. But I’ll drink something."],
          ["B", "なにをのみますか。", "nani o nomimasu ka?", "What will you drink? (なに, nani = what · を, read o, marks the object)"],
          ["A", "コーヒーをのみます。", "kōhī o nomimasu", "I’ll have coffee. (コーヒー, kōhī, is katakana)"],
          ["B", "わたしもコーヒーをのみます。", "watashi mo kōhī o nomimasu", "I’ll have coffee too."]
        ]}
      ]
    },
    { number: 7, jp: "第7課",
      words: [
        ["ほしいです", "Pimsleur shows: 欲しいです. Example: コーヒーがほしいです (kōhī ga hoshii desu). I want a coffee.", "hoshii desu", "I want (a thing).", "hoh-shee dess"],
        ["ほしくありません", "Pimsleur shows: 欲しくありません. Negative of ほしいです (hoshii desu)", "hoshiku arimasen", "I don’t want (it).", "hoh-shee-koo ah-ree-mah-sen"],
        ["コーヒー", "Katakana (from “coffee”)", "kōhī", "Coffee.", "koh-hee"],
        ["ラテ", "Katakana (from “latte”)", "rate", "Latte.", "rah-teh"],
        ["こうちゃ", "Pimsleur shows: 紅茶 (literally “red tea”)", "kōcha", "Black tea.", "koh-chah"],
        ["ひるごはん", "Pimsleur shows: 昼ご飯. ひる (hiru) = noon · ごはん (gohan) = meal (also “rice”)", "hirugohan", "Lunch.", "hee-roo-go-hahn"],
        ["いいです", "Here: agreeing, “OK”. (Also “no thanks” depending on the tone)", "ii desu", "OK.", "ee-ee dess"],
        ["ここで", "Where an action happens (like どこで, doko de). Example: ここでたべます (koko de tabemasu). I’ll eat here.", "koko de", "Here (at this place).", "koh-koh deh"],
        ["わかりませんか", "Pimsleur shows: わかりませんか", "wakarimasen ka?", "You don’t know? / Don’t you understand?", "wah-kah-ree-mah-sen kah?"],
        ["いいですか。", "Asking for permission or agreement. Same いい (ii) as “good”, said with a rising tone", "ii desu ka?", "Is it OK? / Is that all right?", "ee-ee dess kah?"],
        ["いきましょう", "Pimsleur shows: 行きましょう. いきます (ikimasu, go) → 〜ましょう (-mashō) = “let’s…”", "ikimashō", "Let’s go.", "ee-kee-mah-shoh"],
        ["なにを", "Pimsleur shows: 何を. を (read “o”) marks what you eat, drink, want to do. Example: なにをたべますか (nani o tabemasu ka). What will you eat?", "nani o", "What (as the object).", "nah-nee oh"]
      ],
      sentences: [
        ["なにをたべますか。", "Pimsleur shows: 何を食べますか。", "nani o tabemasu ka?", "What will you eat?", "nah-nee oh tah-beh-mahss kah?"],
        ["ひるごはんをたべます。", "Pimsleur shows: 昼ご飯を食べます。", "hirugohan o tabemasu", "I’ll eat lunch.", "hee-roo-go-hahn oh tah-beh-mahss"],
        ["コーヒーをのみます。", "Pimsleur shows: コーヒーを飲みます。 を (read “o”) marks what you drink", "kōhī o nomimasu", "I’ll drink coffee. / I’ll have a coffee.", "koh-hee oh noh-mee-mahss"],
        ["コーヒーがほしいです。", "Pimsleur shows: コーヒーが欲しいです。 With ほしい (hoshii) the thing you want takes が (ga), not を (o)", "kōhī ga hoshii desu", "I want a coffee.", "koh-hee gah hoh-shee dess"]
      ],
      tips: [
        { title: "を (o) or が (ga)?", jp: "を・が", keys: "particle o wo ga object subject want understand drink eat",
          lead: "The word after decides, not the thing itself.",
          cols: [
            { mark: "を", ro: "o", label: "an action", ex: [["コーヒー", "を", "のみます", "kōhī o nomimasu", "I drink coffee"], ["なに", "を", "たべますか", "nani o tabemasu ka", "What will you eat?"]] },
            { mark: "が", ro: "ga", label: "a state", ex: [["コーヒー", "が", "ほしいです", "kōhī ga hoshii desu", "I want coffee"], ["にほんご", "が", "わかります", "nihongo ga wakarimasu", "I understand Japanese"]] }
          ],
          foot: "が (ga) also with じょうず (jōzu) and すき (suki). But 〜たい (-tai, want to do) keeps を (o): コーヒーをのみたいです (kōhī o nomitai desu)." },
        { title: "〜ます, 〜たい or 〜ましょう? (-masu, -tai, -mashō)", jp: "ます・たい・ましょう", keys: "verb ending masu tai mashou mashō want let's do drink eat go nomitai tabetai ikimashou",
          lead: "Same verb, new ending: keep the start のみ (nomi), change the end.",
          cols: [
            { mark: "〜ます", ro: "-masu", label: "I do it", ex: [["のみ", "ます", "", "nomimasu", "I drink / I’ll drink"], ["たべ", "ます", "", "tabemasu", "I eat / I’ll eat"]] },
            { mark: "〜たい", ro: "-tai desu", label: "I want to", ex: [["のみ", "たい", "です", "nomitai desu", "I want to drink"], ["たべ", "たい", "です", "tabetai desu", "I want to eat"]] },
            { mark: "〜ましょう", ro: "-mashō", label: "let’s do it", ex: [["のみ", "ましょう", "", "nomimashō", "Let’s drink"], ["いき", "ましょう", "", "ikimashō", "Let’s go"]] }
          ],
          foot: "Works with every verb: いきます (ikimasu, I go) → いきたいです (ikitai desu, I want to go) → いきましょう (ikimashō, let’s go)." }
      ],
      dialogues: [
        { title: "Speak Easy · my favorite café", note: "Pimsleur dialogue, lesson 7.", lines: [
          ["A", "いまなにかたべますか。", "ima nanika tabemasu ka?", "Are you going to eat something now?"],
          ["B", "あとでたべます。でも、なにかのみたいです。", "atode tabemasu. demo, nanika nomitai desu", "I’ll eat later. But I’d like to drink something. (〜たい, -tai = want to)"],
          ["A", "どこで？", "doko de?", "Where?"],
          ["B", "そうですね…わたしのおきにいりのカフェで。", "sō desu ne… watashi no okiniiri no kafe de", "Let me see… at my favorite café."],
          ["A", "いいですね。どこですか。", "ii desu ne. doko desu ka?", "Sounds good. Where is it?"],
          ["B", "あそこです。いきましょう。", "asoko desu. ikimashō", "It’s over there. Let’s go. (〜ましょう, -mashō = let’s)"]
        ]}
      ]
    },
    { number: 8, jp: "第8課",
      words: [
        ["かいます", "Pimsleur shows: 買います", "kaimasu", "I buy / I’ll buy.", "kye-mahss"],
        ["かいますか。", "Pimsleur shows: 買いますか。", "kaimasu ka?", "Will you buy (it)?", "kye-mahss kah?"],
        ["ごとうちグッズ", "Pimsleur shows: ご当地グッズ. Souvenirs you only find in that town or region (local snacks, keychains, mascots). グッズ (guzzu) is katakana, from “goods”", "gotōchi guzzu", "Local souvenirs.", "go-toh-chee goo-zzoo"],
        ["と", "Joins nouns: コーヒーとこうちゃ (kōhī to kōcha) = coffee and black tea", "to", "And (A と B = A and B).", "toh"],
        ["します", "Very common verb. Same endings as のみます (nomimasu): しません (shimasen) = don’t do · したいです (shitai desu) = want to do · しましょう (shimashō) = let’s do. Example: なにをしますか (nani o shimasu ka) = what will you do?", "shimasu", "I do / I’ll do.", "shee-mahss"],
        ["か", "Between two things it means “or”: コーヒーかこうちゃ (kōhī ka kōcha) = coffee or black tea. At the end of a sentence it makes a question (…ですか, desu ka)", "ka", "Or (A か B = A or B).", "kah"],
        ["だれ", "Pimsleur shows: 誰", "dare", "Who?", "dah-reh"],
        ["いまから", "Pimsleur shows: 今から. いま (ima) now + から (kara) from", "ima kara", "From now on / starting now.", "ee-mah kah-rah"],
        ["ホテル", "Katakana (from “hotel”)", "hoteru", "Hotel.", "hoh-teh-roo"],
        ["から", "Comes after the word: いまから (ima kara) = from now, ホテルから (hoteru kara) = from the hotel", "kara", "From.", "kah-rah"],
        ["おねがいします", "Pimsleur shows: お願いします. Put the thing you ask for in front: コーヒーをおねがいします (kōhī o onegai shimasu). Among friends: おねがい (onegai)", "onegai shimasu", "Please (asking for something).", "oh-neh-guy shee-mahss"],
        ["ホテルのレストラン", "の (no) links two nouns, like “’s”: the hotel’s restaurant", "hoteru no resutoran", "The hotel restaurant.", "hoh-teh-roo noh reh-s’toh-rahn"]
      ],
      sentences: [
        ["コーヒーをおねがいします。", "Pimsleur shows: コーヒーをお願いします。 In quick speech the を (o) is often dropped: コーヒー、おねがいします (kōhī, onegai shimasu)", "kōhī o onegai shimasu", "A coffee, please.", "koh-hee oh oh-neh-guy shee-mahss"],
        ["いまからなにをしますか。", "Pimsleur shows: 今から何をしますか。 いまから (ima kara) = from now · なにを (nani o) = what · します (shimasu) = to do", "ima kara nani o shimasu ka?", "What are you going to do now?", "ee-mah kah-rah nah-nee oh shee-mahss kah?"],
        ["レストランはどこですか。", "は is read “wa” here. Same pattern as うえのえきはどこですか (Ueno eki wa doko desu ka, Lesson 4): [place] は どこですか (wa doko desu ka)", "resutoran wa doko desu ka?", "Where is the restaurant?", "reh-s’toh-rahn wah doh-koh dess kah?"]
      ],
      dialogues: [
        { title: "Speak Easy · two coffees", note: "Pimsleur dialogue, lesson 8. Notice を (o) with のみます (nomimasu) but が (ga) with ほしい (hoshii).", lines: [
          ["A", "たなかさん、なにかたべますか。", "Tanaka san, nanika tabemasu ka?", "Mr. / Ms. Tanaka, will you eat something?"],
          ["B", "いいえ、でもなにかのみたいです。", "iie, demo nanika nomitai desu", "No, but I’d like to drink something."],
          ["A", "なにをのみますか。", "nani o nomimasu ka?", "What will you drink?"],
          ["B", "そうですね…こうちゃ、いいえ、コーヒーをのみます。", "sō desu ne… kōcha, iie, kōhī o nomimasu", "Let me see… black tea, no, I’ll have coffee."],
          ["A", "わたしもコーヒーがほしいです。…すみません！コーヒーをふたつおねがいします。", "watashi mo kōhī ga hoshii desu… sumimasen! kōhī o futatsu onegai shimasu", "I want coffee too… Excuse me! Two coffees, please. (ふたつ futatsu = two things)"]
        ]}
      ]
    },
    { number: 9, jp: "第9課",
      words: [
        ["じ", "Pimsleur shows: 時. Goes after the number: いちじ (ichi ji) = 1 o’clock, はちじ (hachi ji) = 8 o’clock", "ji", "O’clock.", "jee"],
        ["いちじ", "Pimsleur shows: 一時. いち (ichi) one + じ (ji)", "ichi ji", "1 o’clock.", "ee-chee jee"],
        ["に", "Pimsleur shows: 二. So にじ (ni ji) = 2 o’clock", "ni", "2", "nee"],
        ["はち", "Pimsleur shows: 八", "hachi", "8", "hah-chee"],
        ["はちじ", "Pimsleur shows: 八時", "hachi ji", "8 o’clock.", "hah-chee jee"],
        ["くじ", "Pimsleur shows: 九時. 9 is usually きゅう (kyū), but for the hour it is く (ku): くじ (ku ji), never きゅうじ", "ku ji", "9 o’clock.", "koo jee"],
        ["いっしょに", "Pimsleur shows: 一緒に. Example: いっしょにたべませんか (issho ni tabemasen ka) = shall we eat together?", "issho ni", "Together.", "ees-shoh nee"],
        ["といっしょに", "Pimsleur shows: と一緒に. The person comes first: パーカーさんといっしょに (Pākā san to issho ni) = together with Mr. Parker", "to issho ni", "(Together) with someone.", "toh ees-shoh nee"],
        ["なんじに", "Pimsleur shows: 何時に. なん (nan) what + じ (ji) hour + に (ni) at. Example: なんじにたべますか (nan ji ni tabemasu ka) = what time shall we eat? Answer with the hour + に: はちじに (hachi ji ni) = at 8", "nan ji ni", "At what time?", "nahn jee nee"],
        ["ぜひ", "Kanji: 是非 (rarely used). The warm way to accept an invitation: ええ、ぜひ (ee, zehi) = yes, I’d love to. Answer to たべませんか (tabemasen ka, won’t you eat?)", "zehi", "By all means / I’d love to.", "zeh-hee"],
        ["わかりました", "Pimsleur shows: わかりました. Past of わかります (wakarimasu). What you say when someone tells you a time or a plan", "wakarimashita", "Got it / Understood / OK.", "wah-kah-ree-mahsh-tah"]
      ],
      sentences: [
        ["パーカーさんもたべませんか。", "Pimsleur shows: パーカーさんも食べませんか。 も (mo) = too · 〜ませんか (-masen ka) = won’t you…? (a friendly invitation, Lesson 5)", "Pākā san mo tabemasen ka?", "Won’t you eat too, Mr. Parker?", "pah-kah sahn moh tah-beh-mah-sen kah?"],
        ["ホテルのレストランで？", "で (de) = at (where it happens), like どこで (doko de)", "hoteru no resutoran de?", "At the hotel restaurant?", "hoh-teh-roo noh reh-s’toh-rahn deh?"]
      ],
      tips: [
        { title: "Telling the hour: number + じ (ji)", jp: "〜じ", keys: "time hour o'clock oclock ji nanji what time ichiji hachiji kuji yoji shichiji number",
          lead: "Say the number, add じ (ji). Three hours change their number.",
          cols: [
            { mark: "じ", ro: "ji", label: "as usual", ex: [["いち", "じ", "", "ichi ji", "1 o’clock"], ["に", "じ", "", "ni ji", "2 o’clock"], ["はち", "じ", "", "hachi ji", "8 o’clock"]] },
            { mark: "4·7·9", ro: "ji", label: "special", ex: [["よ", "じ", "", "yo ji", "4 o’clock (not yon)"], ["しち", "じ", "", "shichi ji", "7 o’clock (not nana)"], ["く", "じ", "", "ku ji", "9 o’clock (not kyū)"]] }
          ],
          foot: "To ask: なんじですか (nan ji desu ka) = what time is it? · なんじに (nan ji ni) = at what time? Answer: くじに (ku ji ni) = at 9." }
      ],
      dialogues: [
        { title: "Speak Easy · lunch at the hotel", note: "Pimsleur dialogue, lesson 9. A friendly invitation with 〜ませんか (-masen ka).", lines: [
          ["A", "さとうさん、こんにちは。", "Satō san, konnichiwa", "Hello, Mr. / Ms. Satō."],
          ["B", "あ、パーカーさん、こんにちは。", "a, Pākā san, konnichiwa", "Oh, Mr. / Ms. Parker, hello."],
          ["A", "さとうさん、いまからなにをしますか。", "Satō san, ima kara nani o shimasu ka?", "What are you going to do now?"],
          ["B", "ひるごはんをたべます。パーカーさんもたべませんか。", "hirugohan o tabemasu. Pākā san mo tabemasen ka?", "I’m going to have lunch. Won’t you eat too?"],
          ["A", "ええ、どこでたべますか。", "ee, doko de tabemasu ka?", "Yes. Where shall we eat?"],
          ["B", "そうですね、ホテルのレストランで？", "sō desu ne, hoteru no resutoran de?", "Let me see… at the hotel restaurant?"],
          ["A", "ええ、いいですね。", "ee, ii desu ne", "Yes, sounds good."]
        ]}
      ]
    }
  ]
};
