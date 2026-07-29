export type RumCategory = 'value' | 'interesting' | 'special' | 'special-lite'

export type Rum = {
  name: string
  slug: string
  category: RumCategory
  priceRange: string
  note?: string
  tastingNotes: string
  image?: string
}

export type Session = {
  id: number
  title: string
  intro: string
  rums: Rum[]
}

export const categoryMeta: Record<
  RumCategory,
  { label: string; badgeClass: string }
> = {
  value: { label: 'Value', badgeClass: 'bg-emerald-700 text-white' },
  interesting: {
    label: 'Interesting',
    badgeClass: 'bg-bison-theme-bg text-white',
  },
  special: { label: 'Special', badgeClass: 'bg-amber-600 text-white' },
  'special-lite': {
    label: 'Special-lite',
    badgeClass: 'bg-amber-500/80 text-white',
  },
}

export const sessions: Session[] = [
  {
    id: 1,
    title: 'Intro',
    intro:
      "An orientation flight that sketches the whole map to come: a spiced Demerara with home bar ambitions, unaged Jamaican funk at full roar, the definitive dark overproof blend, and a polished anniversary sipper. Almost by accident, it covers all three of the club's categories and sets the reference points every later session will argue with.",
    rums: [
      {
        name: 'Lemon Hart Blackpool',
        slug: 'lemon-hart-blackpool',
        category: 'value',
        priceRange: '6 to 9',
        tastingNotes:
          "Built on dark Demerara rum from Guyana's Diamond Distillery, Blackpool Spiced opens with treacle, burnt caramel and toasted marshmallow wrapped around a warm core of vanilla custard. The palate layers toffee, butterscotch and cocoa over dark dried fruit before the spice cabinet arrives mid-sip: cinnamon, fresh nutmeg, clove and a nip of ginger. It stays lightly sweet rather than cloying, and the finish trails off through gentle bourbon-oak, steeped black tea and a whisper of black pepper.",
      },
      {
        name: 'Wray & Nephew White Overproof',
        slug: 'wray-nephew-overproof',
        category: 'interesting',
        priceRange: '6 to 9',
        tastingNotes:
          "Jamaica's ubiquitous unaged overproof leads with a pungent, estery blast of overripe banana, pineapple and orange zest over rich molasses and a streak of desiccated coconut. Beneath the 63% fire the palate is surprisingly flavorful, with caramel-nutted molasses opening into passion fruit and more tropical funk. The finish is long and fiery, starting sharp and slowly fading through fruit, which is exactly why a little of it electrifies punches and tiki drinks.",
      },
      {
        name: 'Plantation O.F.T.D.',
        slug: 'plantation-oftd',
        category: 'interesting',
        priceRange: '15 to 20',
        tastingNotes:
          'This 69% blend of Guyana, Jamaica and Barbados rums smells like a molasses-and-ginger cookie steeped in black coffee, with orange peel, plum jam and a dark earthy truffle note underneath. On the palate it delivers caramel cream, dark chocolate and vanilla shot through with clove, nutmeg, cinnamon and black pepper, framed by dry oak and a touch of char. Taken neat it is ferociously hot, though water coaxes out extra sweetness; it was designed by a panel of tiki luminaries to be the definitive dark overproof cocktail rum, and one bar-spoon float shows why.',
      },
      {
        name: 'Plantation XO 20th Anniversary',
        slug: 'plantation-xo-20th',
        category: 'special',
        priceRange: '21 to 24',
        tastingNotes:
          'A blend of long-aged Barbados rums given a second maturation in small French oak in Cognac, the XO 20th Anniversary is unabashedly dessert-like. Fresh and toasted coconut dominates the nose alongside vanilla, tobacco leaf and cinnamon, while the palate pours on honeyed caramel, toffee apple, almond and soft oak spice. It is plush, rounded and distinctly sweet — critics of dosage find it verges on coconut liqueur, while fans consider it one of the great after-dinner sippers. The finish lingers on cream, sarsaparilla and gentle baking spice.',
      },
    ],
  },
  {
    id: 2,
    title: 'Jamaica, the funk',
    intro:
      'This session builds your ester vocabulary: three intensities of Jamaican pot still funk, from clean silver through fiery overproof to a polished navy blend. Expect overripe banana, olive brine, and burnt sugar, and expect to leave understanding exactly what people mean by "hogo."',
    rums: [
      {
        name: 'Worthy Park Silver',
        slug: 'worthy-park-silver',
        category: 'value',
        priceRange: '6 to 9',
        tastingNotes:
          "Worthy Park's unaged pot-still white blends several estate marks with fermentations running from thirty hours to three weeks, delivering genuine Jamaican character at an approachable 40%. The nose is all ripe banana and mango with light vanilla and a faintly vegetal, grassy edge, while the palate leads with honey and banana before stewed tropical fruit and black pepper move in. A curious mineral note builds as the fruit fades, and though it can taste a touch blunt neat, it turns a daiquiri absolutely alive.",
      },
      {
        name: 'Rum Fire White Overproof',
        slug: 'rum-fire-overproof',
        category: 'interesting',
        priceRange: '10 to 14',
        tastingNotes:
          "Hampden Estate's unaged overproof carries roughly two to three times the ester load of Wray & Nephew, and it shows: the nose erupts with ripe and rotting pineapple, banana, fresh sugarcane and full-throttle hogo that drifts into blue cheese, varnish and cider vinegar territory. The palate is fiery but rich, moving through molasses, mango, papaya and a hint of coconut with pear and citrus in the body. Licorice and bittersweet molasses steer a dry, spicy finish. At 63% it demands care, but for funk-hunters this is about as vivid as white rum gets.",
      },
      {
        name: 'Smith and Cross Navy',
        slug: 'smith-and-cross',
        category: 'special-lite',
        priceRange: '15 to 20',
        note: 'Pot still Jamaica at 57%; punches like a 21+ pour.',
        tastingNotes:
          'A benchmark navy-strength Jamaican, Smith & Cross blends pot-still Wedderburn and Plummer marks into an unapologetically old-school profile. Flambeed banana leads the nose, backed by leather, smoke, warm baking spice and syrupy molasses — the savory hogo character that made its reputation. The full-bodied palate hits with grilled pineapple, banana bread and molasses sweetness before cinnamon, nutmeg and spicy ginger take over mid-sip, alongside a grassy, faintly medicinal edge. For 57% it drinks remarkably composed, and the long, warming finish rides out on caramel and pepper.',
      },
    ],
  },
  {
    id: 3,
    title: 'Guyana / Demerara',
    intro:
      "The purpose here is deconstruction: taste two of Guyana's heritage wooden stills in isolation, then a long-aged blend built from stills like them. You'll go home able to pick apart your own ED 12 and Lemon Hart 1824, and expect dark, smoky, dried-fruit depth throughout.",
    rums: [
      {
        name: 'El Dorado Single Pot Still Enmore',
        slug: 'el-dorado-enmore',
        category: 'interesting',
        priceRange: '15 to 20',
        note: 'Wooden coffey still.',
        tastingNotes:
          "Distilled on the last wooden Coffey still on earth and aged twelve years in Guyana, this Demerara opens with butterscotch, toasted coconut, and baked orchard fruit shaded by a faint earthy smokiness. The palate stays rich but gentle, folding baked peach, chocolate fudge, roasted nuts, and molasses into the still's signature woody character, with warm baking spice underneath. It closes round and smoky, trailing cedar, soft licorice, and a wisp of coffee.",
      },
      {
        name: 'El Dorado Single Pot Still Versailles',
        slug: 'el-dorado-versailles',
        category: 'interesting',
        priceRange: '15 to 20',
        note: 'Single wooden pot still.',
        tastingNotes:
          "From Guyana's Versailles wooden pot still, this twelve-year Demerara leads with a brooding nose of cedar, plum, black licorice, and dried fruit over butterscotch and burnt sugar. The palate turns soft and distinctly chocolatey, layering fudge, coffee, roasted hazelnuts, and dark cherries into sweet molasses and peppery oak. Many tasters rank it the most complex of the three single-still bottlings, and it finishes long and smooth with cigar-box wood, cocoa, and a hint of dried orange peel.",
      },
      {
        name: 'El Dorado 21',
        slug: 'el-dorado-21',
        category: 'special',
        priceRange: '25 to 29',
        note: 'What blending and age do to those components.',
        tastingNotes:
          'A deep mahogany blend of Demerara rums matured at least 21 years just off the equator, with an intense nose of soft brown sugar, mocha, toffee, tobacco, and dark baking spice. The palate is velvety and lush, almost Christmas pudding in a glass, moving through dark dried fruits, tropical notes, coffee, leather, and rich toffee-caramel over a molasses core. The long finish turns nutty and lightly smoky, with tobacco and chocolate garnished by gentle spice, making it one of the definitive statements of long-aged Guyanese rum.',
      },
    ],
  },
  {
    id: 4,
    title: 'Martinique agricole',
    intro:
      'This is your introduction to cane juice rum and the AOC agricole tradition: grassy, vegetal, and bright where molasses rum is rich and sweet. The two St. James pours show what barrel time does to that character, and the Homère Clément shows how elegant it gets with decades. Expect the biggest "this is rum?" moment of the club so far.',
    rums: [
      {
        name: 'St. James Blanc',
        slug: 'st-james-blanc',
        category: 'value',
        priceRange: '6 to 9',
        tastingNotes:
          "A bright, unaged expression of fresh-pressed Martinique cane, with a lively nose of grassy sugarcane, tropical fruit, apple blossom, and a flick of white pepper. The palate is crisp and tangy, mixing green cane sweetness with unripe banana, mango, and a creamy hint of coconut before a clean, peppery finish. A textbook entry point to agricole and a natural fit for ti' punch and daiquiris.",
      },
      {
        name: 'St. James Ambre',
        slug: 'st-james-ambre',
        category: 'value',
        priceRange: '6 to 9',
        note: 'Blanc vs ambre side by side: what aging does to cane juice.',
        tastingNotes:
          "Briefly rested in oak, this amber agricole softens Saint James's grassy cane character with vanilla, overripe banana, and coconut husk on the nose. The palate starts with dry cane, sweetens and creams up mid-sip, then pivots to a rush of pepper, dry cacao, and oak, keeping a distinctly vegetal agricole streak throughout. An approachable, cocktail-friendly introduction to aged Martinique rhum rather than a contemplative sipper.",
      },
      {
        name: 'Rhum J.M. Blanc',
        slug: 'rhum-jm-blanc',
        category: 'interesting',
        priceRange: '15 to 20',
        tastingNotes:
          "Bottled at a punchy 100 proof, J.M's unaged agricole throws off a vivid nose of fresh-cut sugarcane, citrus peel, ripe banana, ginger, and black pepper with a savory, almost green-onion vegetal edge. The palate bursts with citrus and pineapple juice before diving into earthy, grassy depth, salted vanilla, and a background hum of bell pepper and licorice. The finish is long, hot, and herbaceous — a spirited, high-energy blanc built for ti' punch but rewarding for adventurous neat drinkers.",
      },
      {
        name: "Homère Clément Hors d'Age",
        slug: 'homere-clement-hors-dage',
        category: 'special',
        priceRange: '30+',
        tastingNotes:
          "Clément's tribute to its founder blends the cellar's highest-rated vintage rhums, aged in French Limousin barriques and re-charred bourbon casks. The nose is decadent with butterscotch and salted caramel over leather, tobacco smoke, dried fruit, and anise, still carrying a whisper of agricole grassiness underneath. A buttery, viscous palate delivers hazelnut, chocolate, dried fruits, licorice root, and peppery oak with floral and herbal nuance woven through. It closes on a long, gently drying finish of spiced oak and caramel — an hors d'age that argues age statements aren't everything.",
      },
    ],
  },
  {
    id: 5,
    title: 'Haiti clairin splurge',
    intro:
      "Clairin is wild-fermented, village-distilled cane spirit made essentially the way it was 200 years ago, and this session is about tasting a living tradition rather than a polished product. Expect funk beyond even Jamaica, huge variation between producers, and the most divisive pours of the entire club; some of the table will hate these, and that's part of the lesson.",
    rums: [
      {
        name: 'Boukman Ambrée',
        slug: 'boukman-ambree',
        category: 'interesting',
        priceRange: '15 to 20',
        tastingNotes:
          'A cane-juice rhum infused with wild-foraged Haitian barks and spices, Boukman leads with a heady nose of clove, cinnamon and dried florals over grassy fresh cane. The palate is surprisingly plush for a dry spirit, layering black pepper and warm baking spice against bitter orange peel, almond and a gently vegetal cane-juice core, with vanilla and fragrant wood rounding the edges. It finishes dry and lifted, cardamom and aromatic bark lingering longest. Complex and perfumed, it drinks almost like the midpoint between an agricole and a botanical gin.',
      },
      {
        name: 'Clairin St. Benevolence',
        slug: 'clairin-st-benevolence',
        category: 'special',
        priceRange: '21 to 24',
        tastingNotes:
          "Wild-fermented from a field blend of indigenous cane grown around Saint Michel de l'Attalaye, this 100-proof clairin opens with a funky, savory nose of green olive brine, underripe banana, woodsmoke and wet stone. The palate is richer than its rustic reputation suggests, mingling ripe plum and mango with toasted white peppercorn, clove and a distinctly mezcal-like smoky, mineral streak. It closes on barbecue smoke and a late cane-syrup sweetness that softens the wildness. A challenging, characterful pour that rewards drinkers ready for its rough-and-ready charm.",
      },
      {
        name: 'Clairin Sajous',
        slug: 'clairin-sajous',
        category: 'special',
        priceRange: '25 to 29',
        tastingNotes:
          'Made by Michel Sajous at the Chelo distillery from wild-yeast-fermented Cristalline cane juice, pot-distilled and bottled straight from the still, Sajous smells like a salted-rim margarita crossed with a hedge trimmer: lime zest, olive brine, cut grass and pickle water. The oily palate moves from sweet fresh sugarcane and mint through pineapple rind, grapefruit and green bell pepper, all riding a stony mineral backbone. The finish turns peppery and briny with a whisper of licorice and a gently bitter fade. Untamed, terroir-driven, and utterly unlike polished white rum.',
      },
    ],
  },
  {
    id: 6,
    title: 'Barbados',
    intro:
      'Barbados is rum\'s birthplace and its center of balance: pot and column blended, nothing hidden, no added sugar. The intent is to recalibrate after two wild sessions and learn what "correct" tastes like, with Probitas showing how exciting restraint can be. Expect clean, honest rums that reward attention rather than demand it.',
    rums: [
      {
        name: 'Mount Gay Eclipse',
        slug: 'mount-gay-eclipse',
        category: 'value',
        priceRange: '6 to 9',
        tastingNotes:
          "Barbados's ubiquitous entry-level blend offers a friendly nose of banana, coconut, vanilla and butterscotch with a floral honey lift. The light-bodied palate keeps things easy: caramel and tropical fruit brushed with toasty oak and a pinch of white pepper. A short, clean finish brings a flash of clove and ginger warmth. Simple but well-mannered, it is built for rum punches and highballs rather than contemplative sipping.",
      },
      {
        name: 'The Real McCoy 3 Yo',
        slug: 'real-mccoy-3',
        category: 'interesting',
        priceRange: '10 to 14',
        tastingNotes:
          "Foursquare's filtered white rum spends three years in ex-bourbon casks before losing its color, and the age shows in the glass. The nose brims with banana, mango and raspberry over vanilla and light florals, while the palate balances sweet fruit and cream against black pepper, nutmeg and a hint of cardamom picked up from the oak. It finishes crisp and gently drying with spice outlasting the fruit. Arguably the benchmark daiquiri rum: clean like a white, but with real barrel-born depth underneath.",
      },
      {
        name: 'Foursquare Probitas',
        slug: 'foursquare-probitas',
        category: 'special-lite',
        priceRange: '15 to 20',
        note: 'Cult white blend with Hampden pot still in it.',
        tastingNotes:
          "A landmark collaboration marrying unaged Hampden pot-still rum from Jamaica with Foursquare's Coffey-still and two-year pot-still distillates, bottled unfiltered at 47%. The nose tumbles out tropical fruit and baking spice: overripe plantain, strawberry, pineapple and a creamy mascarpone note, with a polite dose of Jamaican funk humming underneath. The unfiltered texture carries grassy underripe mango, coconut oil and marzipan across the palate. Black pepper, allspice and grilled pineapple stretch through a long, flavorful finish. Complex enough to sip, but it makes one of the great modern daiquiris.",
      },
    ],
  },
  {
    id: 7,
    title: 'Navy strength and 151s',
    intro:
      "This session covers rum's working-class history: the blends built for sailors, floats, and flaming garnishes. The intent is to learn how proof changes flavor delivery and why tiki recipes call for these specifically. Expect heat, molasses, and surprising complexity underneath, and pace yourself; this is the highest-ABV session of the club.",
    rums: [
      {
        name: "Lamb's 151",
        slug: 'lambs-151',
        category: 'value',
        priceRange: '6 to 9',
        tastingNotes:
          'This 75.5% behemoth blends rums from Guyana, Barbados, Trinidad and Jamaica, though the roasted demerara character clearly leads. Beneath the obvious alcoholic heat sit dense molasses, treacle, licorice and vanilla, with volleys of baking spice firing in the background. The finish is long, hot and woody, as one would expect from something at this strength. Not a sipper by any stretch: this is a mixer and float rum that brings dark, smoldering weight to punches and tiki drinks.',
      },
      {
        name: "Gosling's Black Seal",
        slug: 'goslings-black-seal',
        category: 'value',
        priceRange: '6 to 9',
        note: "The Dark 'n' Stormy benchmark alongside the overproofs.",
        tastingNotes:
          "Bermuda's famous black rum pours nearly opaque, and the nose leads with molasses, caramel and dried fruit dusted with allspice and clove. The palate is rich and almost creamy, moving from butterscotch and dark brown sugar into vanilla, licorice and baking spice. A warm, gently drying finish of caramelized sugar and herbal spice lingers longer than its 80 proof suggests. Bold and a touch sweet on its own, it truly comes alive under ginger beer — this is the rum the Dark 'n' Stormy was built around.",
      },
      {
        name: 'Worthy Park 109',
        slug: 'worthy-park-109',
        category: 'interesting',
        priceRange: '10 to 14',
        tastingNotes:
          "A dark, navy-styled Jamaican bottled at a hefty 54.5%, all copper pot still from Worthy Park's own estate cane. The nose throws classic Jamaican funk — overripe banana, toasted sugar and pineapple — over molasses, oak and vanilla. On the palate it turns dense and dark: chocolate, licorice, toffee and caramel with tropical fruit flashing underneath and plenty of allspice heat. The finish is long and warming, leaving toasted oak, coffee grounds, baking spice and dried fruit. Borderline as a neat sipper but ferocious in a cocktail, where its ester-driven punch cuts through anything.",
      },
      {
        name: "Wood's Old Navy (vintage)",
        slug: 'woods-old-navy',
        category: 'special-lite',
        priceRange: '15 to 20',
        note: 'Discontinued bottling; drink it while it exists.',
        tastingNotes:
          "A venerable UK navy-style bottling of pot- and column-distilled Demerara rum from Guyana's Diamond Distillery, delivered at a proper 57%. The nose is dark and dense: licorice, molasses and coffee wrapped in thick caramel with cinnamon, clove and pepper. The palate follows with burnt sugar, muscovado and soft toffee, the spice building as it goes. It closes long and warm on dried fruit and lingering dark spice — an old-school, unsweetened introduction to the brooding Demerara style.",
      },
    ],
  },
  {
    id: 8,
    title: 'Cuba',
    intro:
      "One brand name, two companies, one lawsuit spanning decades: Bacardi's Puerto Rican Havana Club against the real Cuban house. The intent is to taste the light, grassy Cuban style at three levels while drinking the story of rum's most famous feud. Expect delicacy rather than power, and a Selección de Maestros that quietly outclasses everything else on the table.",
    rums: [
      {
        name: 'Havana Club PR Gold',
        slug: 'havana-club-pr-gold',
        category: 'value',
        priceRange: '6 to 9',
        note: "Bacardi's Puerto Rican Havana Club.",
        tastingNotes:
          "Bacardi's Puerto Rican claim to the Havana Club name is a light gold rum aged one to three years in oak. The nose keeps things simple: vanilla and brown sugar with faint fruit and a whisper of molasses and spice. The palate opens on those same vanilla-caramel tones before quick flickers of pineapple, dried papaya and raisin, with a touch of cinnamon and barrel char. Light-bodied and easy, it fades fairly fast with a slightly dry, grainy edge — a serviceable mixing gold rather than a contemplative pour.",
      },
      {
        name: 'Havana Club Cuban Smoky',
        slug: 'havana-club-cuban-smoky',
        category: 'interesting',
        priceRange: '6 to 9',
        tastingNotes:
          'An unusual Cuban experiment in which part of the blend rests in casks that previously held Islay malt whisky. The nose is light and balanced, with dried and tropical fruit drifting through a delicate curl of peat smoke and toasted oak. On the palate the smoke firms up against gentle sweetness, cocoa, caramel and molasses. It finishes elegant and dry, with soft smoke, oak and a lingering spiciness — a curiosity that rewards a simple neat pour or a single large cube.',
      },
      {
        name: 'Havana Club Selección de Maestros',
        slug: 'havana-club-seleccion-de-maestros',
        category: 'special',
        priceRange: '21 to 24',
        tastingNotes:
          "Cuba's maestros roneros hand-pick these casks, and the extra strength at 45% shows their confidence. The nose is lightly floral and generously fruity — apricot and peach over caramel, nuts, nutmeg and a nip of ginger. The palate is beautifully knit: crushed red berries and black cherry sprinkled with woody caramel, tobacco, vanilla and a whiff of smoke, sweet but never cloying. A long, dry, spiced finish of burnt caramel and oak leaves a faintly creamy impression. Smooth yet genuinely complex, it is one of the strongest arguments for the Cuban style.",
      },
    ],
  },
  {
    id: 9,
    title: 'Spanish style and solera',
    intro:
      "The Spanish style spans from bone dry to dessert sweet, and this session deliberately pours the extremes: Brugal's austere oak, Bacardi's odd rye cask experiment, then Diplomático's Venezuelan opulence. The intent is to form your own opinion on the sweetness debate that divides rum nerds. Expect smooth, approachable pours and a genuinely stark contrast between first and last.",
    rums: [
      {
        name: 'Brugal Añejo',
        slug: 'brugal-anejo',
        category: 'value',
        priceRange: '6 to 9',
        note: 'The dry, oaky end of the spectrum.',
        tastingNotes:
          'A blend of Dominican rums aged two to five years in American white oak, and firmly in the dry camp. The nose is clean and restrained, offering light wood, vanilla and a subtle thread of chocolate. The palate is buttery in texture but dry in character, with oak firmly in charge over modest caramel and a tannic grip. It closes with moderate length on oak, spice and only a faint sweetness — less a dessert rum than a crisp, wood-driven workhorse that shines as a cocktail base.',
      },
      {
        name: 'Bacardi Ocho Rye Cask',
        slug: 'bacardi-ocho-rye-cask',
        category: 'value',
        priceRange: '6 to 9',
        note: 'An unusual cask play from the biggest name in the style.',
        tastingNotes:
          "Bacardi's eight-year reserva takes a detour through American rye whiskey barrels, and the whiskey influence is unmistakable from the first sniff: gingerbread, maple sweetness, and vanilla custard laced with a peppery prickle. The palate opens on caramelized brown sugar and toasted vanilla before the rye casks assert themselves with clove, baking spice, young tobacco, and a gentle chili warmth. A medium-weight body carries it into a drying finish where oak smoke and a faint dark-chocolate bitterness linger. It's a spicier, edgier take on Ocho that holds up beautifully in an Old Fashioned yet stays polished enough to sip.",
      },
      {
        name: 'Diplomático Mantuano',
        slug: 'diplomatico-mantuano',
        category: 'interesting',
        priceRange: '10 to 14',
        tastingNotes:
          "Mantuano is Diplomatico's workhorse blend, aged up to eight years, and it leads with a classic Venezuelan nose of molasses, brown sugar, and soft vanilla over earthy oak and a whisper of allspice. The palate is silky and approachable, layering toffee and honeyed cane with orchard and dried fruit — think pear, fig, and apricot — plus a modest thread of spice. It closes drier than you'd expect from this house, with cocoa, cinnamon, and a hint of toasted coconut and coffee on a medium finish. Uncomplicated but generous, it's an easy sipper that really shines as a cocktail base.",
      },
      {
        name: 'Diplomático Selección de Familia',
        slug: 'diplomatico-seleccion-de-familia',
        category: 'special',
        priceRange: '21 to 24',
        note: 'Venezuelan opulence against the dry openers.',
        tastingNotes:
          "The master blender's family selection, drawn from American oak, ex-bourbon, and ex-sherry casks and bottled at 43%, is a noticeably drier, more serious Diplomatico. The nose unfolds slowly: caramelized vanilla and orange zest first, then a dark procession of prunes, dates, figs, and blackened fruitcake with rolling tobacco and white pepper underneath. On the palate, ripe fruit and toffee ride up front while clove, cinnamon, and allspice build a firm oak-spice foundation beneath them. The finish is long and beautifully balanced, a brief tobacco-leaf astringency giving way to mingled fruit, oak, and sherried sweetness. It rewards slow, neat sipping far more than the sweeter entries in the range.",
      },
    ],
  },
  {
    id: 10,
    title: 'Cane juice oddities',
    intro:
      "This is the frontier session: cane spirits from outside the rum mainstream, made with wild fermentation and zero interest in convention. Cachaça gives you Brazil's baseline, then the two Paranubes pours take you to an Oaxacan mountain farm. Expect sour, lactic, vegetal flavors closer to mezcal culture than Caribbean rum, and the rarest liquid of the club in the Caña Morado.",
    rums: [
      {
        name: 'Cachaça 51',
        slug: 'cachaca-51',
        category: 'value',
        priceRange: '6 to 9',
        tastingNotes:
          "Brazil's ubiquitous supermarket cachaça is unaged, sugarcane-bright, and unapologetically rustic. The nose jumps with banana, green apple, and lemon-lime citrus over a grassy, faintly winey fresh-cane funk. The palate is sweet and simple — sugary cane and lemongrass with a floral, herbaceous streak and a flicker of spearmint — before a short, warm finish with a touch of raw heat. Nobody sips it neat in Pirassununga; muddle it with lime and sugar and it becomes exactly the caipirinha it was born to make.",
      },
      {
        name: 'Paranubes',
        slug: 'paranubes',
        category: 'interesting',
        priceRange: '15 to 20',
        note: 'Oaxacan cane aguardiente, wild fermentation.',
        tastingNotes:
          "Wild-fermented from fresh-pressed cane juice in the cloud forests of Oaxaca's Sierra Mazateca, Paranubes tastes like no other cane spirit: the nose is startlingly savory, all brine, green olive, and pine resin over an intense burst of raw sugarcane. The palate turns sweeter and rounder than the nose suggests, moving from vivid grassy-vegetal cane into overripe tropical fruit with a saline undercurrent throughout. A silky texture carries it to a medium finish of fennel and fresh-cut grass. Funky enough to fascinate agricole lovers, yet smooth enough to sip — and it makes a wickedly good daiquiri.",
      },
      {
        name: 'Paranubes Caña Morado',
        slug: 'paranubes-cana-morado',
        category: 'special',
        priceRange: '25 to 29',
        note: 'Purple cane varietal, genuinely rare.',
        tastingNotes:
          'A rare single-varietal release distilled entirely from purple cane, made only when a fermentation tank frees up at the palenque, so each batch is small and seasonal. It keeps the Paranubes signature — dry, saline, and savory, with olives, pine, and a vegetal tomato-vine edge over vibrant fresh cane — but the Morada cane adds an unexpected explosion of sweet cinnamon spice, like Big Red gum or fireball candy crackling over the maritime funk. At around 54% it sips surprisingly well, and that spice-and-brine combination is spectacular in a Mai Tai or Zombie.',
      },
    ],
  },
  {
    id: 11,
    title: 'Japan and Asia splurge',
    intro:
      'The purpose is to see what happens when rum leaves the Caribbean: Filipino mass-market charm, Indian tropical aging, and two Japanese cask stories. The Minoki against the Three Rivers is the heart of it, mizunara oak versus Jamaican distillate matured in Tokyo. Expect refinement and cask influence as the theme, and the second-highest bar tab of the club.',
    rums: [
      {
        name: 'Tanduay Gold',
        slug: 'tanduay-gold',
        category: 'value',
        priceRange: '6 to 9',
        tastingNotes:
          "The Philippines' flagship export rum is column-distilled from first-press Grade A molasses of heritage Philippine cane, then rested up to seven years in ex-bourbon casks without color filtering. The nose is honeyed and elegant, with almond, caramel, orange peel, vanilla, and toasted oak. On the palate it stays mellow and surprisingly dry for the style, offering vanilla, coconut, tropical fruit, and a dusting of nutmeg in good balance with its gentle sweetness. Caramel and soft wood notes persist through an easy, harmonious finish — a friendly, affordable pour that mixes beautifully.",
      },
      {
        name: 'Amrut Two Indies',
        slug: 'amrut-two-indies',
        category: 'interesting',
        priceRange: '10 to 14',
        tastingNotes:
          "Bangalore's famed whisky distillery blends Caribbean rums from the West Indies with its own Indian cane spirit, and the marriage is more characterful than the price suggests. A soft Jamaican-style funk leads the nose, trailed by brown sugar, caramel, dried banana, coconut, and a grassy hint of fresh cane. The palate is thick and lightly creamy, with juicy pineapple and mango, caramelized banana, a curious thread of aniseed, and building ginger spice. The finish runs medium-long and oaky, sweet at first before a pleasant burnt-caramel bitterness rises and fades. At 42.8% it's an intriguing East-meets-West sipper.",
      },
      {
        name: 'Minoki Mizunara Cask',
        slug: 'minoki-mizunara',
        category: 'special',
        priceRange: '21 to 24',
        tastingNotes:
          "Billed as the world's first mizunara-finished rum, this coral-filtered Japanese spirit opens with a delicate bouquet of ripe plum, tropical fruit, and vanilla underscored by the sandalwood-and-incense signature of Japanese oak. The palate is light and creamy rather than punchy, drifting through pineapple, mango, and spiced coconut with stone fruit at the center and just a whisper of funk beneath. It closes on a gently oaky note of spiced vanilla, soft caramel, and a faint saline-mineral edge that nods to its coral filtration.",
      },
      {
        name: 'Three Rivers Tokyo Monymusk 16 Yo',
        slug: 'three-rivers-monymusk-16',
        category: 'special',
        priceRange: '30+',
        note: 'Jamaican distillate aged in Japan; pairs beautifully against the Minoki.',
        tastingNotes:
          "A single-cask joint bottling from The Whisky Agency and Tokyo's Three Rivers, distilled at Monymusk (Clarendon) in 2004 and bottled in 2021 at 52.4%. Published reviews of this exact cask are scarce, but its pedigree points to classic high-ester Monymusk character: overripe banana and bruised pineapple wrapped in varnishy Jamaican funk, with sixteen years of maturation layering in polished oak, dried fruit, and warm spice. Expect the cask-strength delivery to carry that ester intensity through a long, drying, fruit-and-oak finish. (Tasting description inferred from the distillery's documented profile rather than reviews of this specific release.)",
      },
    ],
  },
  {
    id: 12,
    title: 'St. Lucia',
    intro:
      'One island, one distillery, three faces: St. Lucia Distillers makes everything here, so this is a study in house range rather than regional style. The intent is to see how a single producer speaks in different voices, from workhorse blend to columnar elegance to their flagship 1931. Expect balanced, slightly smoky rums that punch above their reputation.',
    rums: [
      {
        name: "Chairman's Reserve",
        slug: 'chairmans-reserve',
        category: 'value',
        priceRange: '10 to 14',
        tastingNotes:
          "St. Lucia Distillers' flagship blend of pot and column still rums aged in ex-bourbon and Tennessee whiskey casks, and it wears that pot-still backbone proudly. The nose offers cooked banana, caramelized fruit, and vanilla-laced oak with a gentle waft of island funk and coconut husk. The mid-palate is structured and quietly complex, working through chocolate, golden raisin, apricot, tobacco, and clove before everything softens into a long, creamy finish with fleeting floral notes. Sweet and characterful enough to sip, sturdy enough for a serious tiki drink.",
      },
      {
        name: 'Admiral Rodney',
        slug: 'admiral-rodney',
        category: 'interesting',
        priceRange: '10 to 14',
        tastingNotes:
          "St. Lucia Distillers' stately column-still rum, aged around twelve years in ex-bourbon casks and famed for its polish. The nose leads with brown sugar, caramel, and molasses shaded by banana, a squeeze of citrus, and a dark licorice hint where the caramel nearly scorches. On the palate it is soft, round, and medium-bodied, with dried fruit, tobacco, and brown baking spice riding a peppery undercurrent that keeps the sweetness honest. It slips away in a smooth, medium-dry finish that makes it an easy recommendation as a contemplative sipper.",
      },
      {
        name: "Chairman's Reserve 1931",
        slug: 'chairmans-reserve-1931',
        category: 'special',
        priceRange: '25 to 29',
        tastingNotes:
          "A commemorative blend of pot and column rums aged six to eleven years in bourbon and Port casks, bottled at a confident 46%. The nose is the serious sibling of the standard Chairman's: sweet raisin and burnt caramel over toasty oak, leather, tobacco, and a punchy but well-mannered thread of pot-still hogo. The palate opens austere, then blossoms with sultana, creme caramel, and buttery oak while tropical pineapple and dark chocolate build steadily in the glass. The finish is long, dry, and layered, moving from raisined fruit through oak tannin, spice, and a final grassy cane sweetness.",
      },
    ],
  },
  {
    id: 13,
    title: 'Pacific islands',
    intro:
      'A geography session: Fiji\'s surprisingly funky distillate, Hawaii\'s young craft scene, and a serious indy-bottled South Pacific cask. The intent is to test whether "island character" survives across an ocean of distance from the Caribbean. Expect variety over coherence, and the Bira! to be the sleeper of the whole roadmap.',
    rums: [
      {
        name: 'Plantation Isle of Fiji',
        slug: 'plantation-isle-of-fiji',
        category: 'value',
        priceRange: '10 to 14',
        tastingNotes:
          'Fijian pot and column still rum aged a few years in the tropics before a finishing rest in French oak at Maison Ferrand. The nose is loud and cheerful: tropical fruit, unripe banana, and nutmeg tangled up with a green, vegetal funk that almost reads as agricole. The palate starts lighter than expected, with brown sugar and boozy melon giving way to honey, caramelized pineapple, vanilla custard, and an oddly charming charred-marshmallow note. A patient finish stretches the toasted sweetness out over lingering tropical fruit and a light dusting of nutmeg and allspice.',
      },
      {
        name: 'Koloa Dark',
        slug: 'koloa-dark',
        category: 'interesting',
        priceRange: '15 to 20',
        note: 'Hawaii.',
        tastingNotes:
          "Kaua'i's small-batch dark rum, distilled from Hawaiian cane sugar and mountain rainwater, is really a dessert-leaning vanilla showcase. The nose pours out vanilla, semi-sweet chocolate, and caramel with a final flourish of espresso, and the palate follows suit: plush, sweet, and vanilla-driven with mocha and gentle spice rather than the heavy molasses attack of many dark rums. It stays easygoing through a soft, lightly spiced finish; those who like their rum dry may find it candied, but it is an effortless crowd-pleaser over ice or in a mai tai.",
      },
      {
        name: 'Bira! South Pacific 12 Yo',
        slug: 'bira-south-pacific-12',
        category: 'special',
        priceRange: '30+',
        tastingNotes:
          "A Canadian independent bottling of pot-still rum distilled at Fiji's South Pacific Distilleries in 2008, tropically aged in ex-bourbon casks and bottled at a muscular 55% from a nine-barrel blend. The nose mingles honey and molasses with nutmeg, cinnamon, florals, and a distinctly medicinal, briny edge that announces this is no gentle island pour. The palate delivers rich pineapple and banana against tar, rubber, and sea brine, with oak and roasted notes holding the wilder elements in check. It winds down with citrus, lingering spice, and drying oak, rewarding drinkers who enjoy a funky, characterful Pacific rum at full throttle.",
      },
    ],
  },
  {
    id: 14,
    title: 'Jamaica II, aged and refined',
    intro:
      "The bookend to session 2: the same island's funk, now tamed by age and blending instead of shouted at full proof. The intent is to measure how far your palate has come, since the esters you had to learn to identify early on should now read as familiar friends inside the Appleton 21. Expect polish, oak, and orange peel where session 2 gave you banana and brine.",
    rums: [
      {
        name: 'Coruba Jamaica Rum',
        slug: 'coruba',
        category: 'value',
        priceRange: '10 to 14',
        note: 'Old school dark Jamaican against the Appleton house style.',
        tastingNotes:
          "A jet-black Jamaican blender's rum where molasses does most of the talking: the nose piles burnt sugar and treacle over ripe banana, baking spice, and a whiff of leather. The palate is thick and faintly oily, moving from blackstrap and brown sugar into clove, raisin, and a touch of orange peel, with a warm, molasses-sweet finish edged with pepper. Built more for dark tiki drinks and rum-and-cokes than solo sipping, but honest and characterful for the price.",
      },
      {
        name: 'Rum Bar Gold',
        slug: 'rum-bar-gold',
        category: 'interesting',
        priceRange: '10 to 14',
        tastingNotes:
          "Worthy Park's entry pot-still gold, four years in ex-Jack Daniel's barrels, and it leads with banana in every form — fresh, overripe, and baked into bread — alongside stewed apple, canned pineapple, and a dab of marmalade. The palate keeps the fruit up front while the oak folds in vanilla and a treacly sweetness, with black tea and gentle spice keeping it from getting sugary. At 40% it stays friendly enough to sip yet punchy enough to carry a daiquiri.",
      },
      {
        name: 'Appleton 21 Yo',
        slug: 'appleton-21',
        category: 'special',
        priceRange: '30+',
        tastingNotes:
          "One of the benchmark long-aged Jamaicans, and it wears its two-plus decades of tropical ageing with unusual grace. The nose is layered rather than loud: candied orange peel, vanilla and sandalwood from the barrel, nutmeg, coffee, and a thread of cocoa. The palate arrives oily and bright, with a pastry-like richness — crème brûlée, turbinado sugar, toasted walnut — that never tips into actual sweetness, the estate's pot-still character humming quietly underneath. It dries out elegantly toward the close, leaving a long finish of oak, stone fruit, brown sugar, and a wisp of tobacco. A contemplative sipper that rewards patience and a splash-free glass.",
      },
    ],
  },
  {
    id: 15,
    title: 'Finale, lost distilleries and history',
    intro:
      "The closing session is about rum you can only drink, never rebuy: a recreation of the Royal Navy's actual blending stock, and 20-year-old spirit from Caroni, a distillery that no longer exists. Screech opens it with a wink of Canadian content. Expect petrol and dark magic from the Caroni, a toast-worthy mood, and the best story you'll tell about the whole club.",
    rums: [
      {
        name: 'Newfoundland Screech',
        slug: 'newfoundland-screech',
        category: 'value',
        priceRange: '6 to 9',
        note: 'Mandatory Canadian content to close it out.',
        tastingNotes:
          "Newfoundland's famous initiation rum is Jamaican distillate bottled in Canada, and the island heritage shows: burnt sugar, caramel, and a slightly funky, charry edge on the nose. The palate is straightforward molasses and brown sugar with flashes of banana and orange peel, some woody grip, and a finish that carries a bit of honest heat. More a cheerful mixer and ceremonial dram (kiss the cod, drink the Screech) than a sipper, but smoother than its reputation suggests.",
      },
      {
        name: 'Black Tot Historic Solera',
        slug: 'black-tot-historic-solera',
        category: 'special',
        priceRange: '25 to 29',
        note: 'Built around actual Royal Navy blending stock.',
        tastingNotes:
          "Elixir Distillers' tribute to navy-rum tradition runs Guyana and Barbados stock with a dash of high-ester Jamaican pot still through a three-tier solera built on sherry-seasoned bourbon casks, and the PX influence is unmistakable. The nose is all dark indulgence — figs, plums, chocolate fudge, coffee, and orange peel with a curl of tobacco. The palate opens on toffee and sherried sweetness before darker fruit, roasted nuts, and a firm grip of oak spice push back, keeping the richness from cloying. A velvety, dessert-leaning navy rum at 46.2% that works neat or in a serious Old Fashioned.",
      },
      {
        name: 'TBRC Caroni 20 Yo',
        slug: 'tbrc-caroni-20',
        category: 'special',
        priceRange: '30+',
        note: 'The bucket-list pour. Caroni closed in 2002.',
        tastingNotes:
          "Two decades of age soften but never tame Caroni's signature industrial soul: the nose leads with tar, warm rubber, medicinal smoke, and linseed oil, yet underneath sits an improbable sweetness of blackcurrant jam, ripe banana, honey, and muscovado. The palate is dense and drying, layering molasses and vanilla cream over dried apricot, bitter licorice, chocolate-orange, coffee bean, and a savoury, almost gamey depth. It finishes long and smoky with black pepper and dried plum, the petrol note hanging in the air well after the sip. A time capsule from Trinidad's lost distillery — polarising, brooding, and unforgettable.",
      },
    ],
  },
]
