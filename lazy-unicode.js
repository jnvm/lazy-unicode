/* rebuild like so:
var u=require("unicode-9.0.0")
	,o = {};

u.Block.forEach(y=>{
	var b = require(`unicode9.0.0/Block/${y}/code-points`);
	if(b.length>2)
		o[y.toUpperCase()] = [b[0],b.length]
})

console.log(JSON.stringify(o).replace(/"/g,''))

*/
var blocks={ADLAM:[125184,96],AEGEAN_NUMBERS:[65792,64],AHOM:[71424,64],ALCHEMICAL_SYMBOLS:[128768,128],ALPHABETIC_PRESENTATION_FORMS:[64256,80],ANATOLIAN_HIEROGLYPHS:[82944,640],ANCIENT_GREEK_MUSICAL_NOTATION:[119296,80],ANCIENT_GREEK_NUMBERS:[65856,80],ANCIENT_SYMBOLS:[65936,64],ARABIC:[1536,256],ARABIC_EXTENDED_A:[2208,96],ARABIC_MATHEMATICAL_ALPHABETIC_SYMBOLS:[126464,256],ARABIC_PRESENTATION_FORMS_A:[64336,688],ARABIC_PRESENTATION_FORMS_B:[65136,144],ARABIC_SUPPLEMENT:[1872,48],ARMENIAN:[1328,96],ARROWS:[8592,112],AVESTAN:[68352,64],BALINESE:[6912,128],BAMUM:[42656,96],BAMUM_SUPPLEMENT:[92160,576],BASIC_LATIN:[0,128],BASSA_VAH:[92880,48],BATAK:[7104,64],BENGALI:[2432,128],BHAIKSUKI:[72704,112],BLOCK_ELEMENTS:[9600,32],BOPOMOFO:[12544,48],BOPOMOFO_EXTENDED:[12704,32],BOX_DRAWING:[9472,128],BRAHMI:[69632,128],BRAILLE_PATTERNS:[10240,256],BUGINESE:[6656,32],BUHID:[5952,32],BYZANTINE_MUSICAL_SYMBOLS:[118784,256],CJK_COMPATIBILITY:[13056,256],CJK_COMPATIBILITY_FORMS:[65072,32],CJK_COMPATIBILITY_IDEOGRAPHS:[63744,512],CJK_COMPATIBILITY_IDEOGRAPHS_SUPPLEMENT:[194560,544],CJK_RADICALS_SUPPLEMENT:[11904,128],CJK_STROKES:[12736,48],CJK_SYMBOLS_AND_PUNCTUATION:[12288,64],CJK_UNIFIED_IDEOGRAPHS:[19968,20992],CJK_UNIFIED_IDEOGRAPHS_EXTENSION_A:[13312,6592],CJK_UNIFIED_IDEOGRAPHS_EXTENSION_B:[131072,42720],CJK_UNIFIED_IDEOGRAPHS_EXTENSION_C:[173824,4160],CJK_UNIFIED_IDEOGRAPHS_EXTENSION_D:[177984,224],CJK_UNIFIED_IDEOGRAPHS_EXTENSION_E:[178208,5776],CARIAN:[66208,64],CAUCASIAN_ALBANIAN:[66864,64],CHAKMA:[69888,80],CHAM:[43520,96],CHEROKEE:[5024,96],CHEROKEE_SUPPLEMENT:[43888,80],COMBINING_DIACRITICAL_MARKS:[768,112],COMBINING_DIACRITICAL_MARKS_EXTENDED:[6832,80],COMBINING_DIACRITICAL_MARKS_FOR_SYMBOLS:[8400,48],COMBINING_DIACRITICAL_MARKS_SUPPLEMENT:[7616,64],COMBINING_HALF_MARKS:[65056,16],COMMON_INDIC_NUMBER_FORMS:[43056,16],CONTROL_PICTURES:[9216,64],COPTIC:[11392,128],COPTIC_EPACT_NUMBERS:[66272,32],COUNTING_ROD_NUMERALS:[119648,32],CUNEIFORM:[73728,1024],CUNEIFORM_NUMBERS_AND_PUNCTUATION:[74752,128],CURRENCY_SYMBOLS:[8352,48],CYPRIOT_SYLLABARY:[67584,64],CYRILLIC:[1024,256],CYRILLIC_EXTENDED_A:[11744,32],CYRILLIC_EXTENDED_B:[42560,96],CYRILLIC_EXTENDED_C:[7296,16],CYRILLIC_SUPPLEMENT:[1280,48],DESERET:[66560,80],DEVANAGARI:[2304,128],DEVANAGARI_EXTENDED:[43232,32],DINGBATS:[9984,192],DOMINO_TILES:[127024,112],DUPLOYAN:[113664,160],EARLY_DYNASTIC_CUNEIFORM:[74880,208],EGYPTIAN_HIEROGLYPHS:[77824,1072],ELBASAN:[66816,48],EMOTICONS:[128512,80],ENCLOSED_ALPHANUMERIC_SUPPLEMENT:[127232,256],ENCLOSED_ALPHANUMERICS:[9312,160],ENCLOSED_CJK_LETTERS_AND_MONTHS:[12800,256],ENCLOSED_IDEOGRAPHIC_SUPPLEMENT:[127488,256],ETHIOPIC:[4608,384],ETHIOPIC_EXTENDED:[11648,96],ETHIOPIC_EXTENDED_A:[43776,48],ETHIOPIC_SUPPLEMENT:[4992,32],GENERAL_PUNCTUATION:[8192,112],GEOMETRIC_SHAPES:[9632,96],GEOMETRIC_SHAPES_EXTENDED:[128896,128],GEORGIAN:[4256,96],GEORGIAN_SUPPLEMENT:[11520,48],GLAGOLITIC:[11264,96],GLAGOLITIC_SUPPLEMENT:[122880,48],GOTHIC:[66352,32],GRANTHA:[70400,128],GREEK_AND_COPTIC:[880,144],GREEK_EXTENDED:[7936,256],GUJARATI:[2688,128],GURMUKHI:[2560,128],HALFWIDTH_AND_FULLWIDTH_FORMS:[65280,240],HANGUL_COMPATIBILITY_JAMO:[12592,96],HANGUL_JAMO:[4352,256],HANGUL_JAMO_EXTENDED_A:[43360,32],HANGUL_JAMO_EXTENDED_B:[55216,80],HANGUL_SYLLABLES:[44032,11184],HANUNOO:[5920,32],HATRAN:[67808,32],HEBREW:[1424,112],HIGH_PRIVATE_USE_SURROGATES:[56192,128],HIGH_SURROGATES:[55296,896],HIRAGANA:[12352,96],IPA_EXTENSIONS:[592,96],IDEOGRAPHIC_DESCRIPTION_CHARACTERS:[12272,16],IDEOGRAPHIC_SYMBOLS_AND_PUNCTUATION:[94176,32],IMPERIAL_ARAMAIC:[67648,32],INSCRIPTIONAL_PAHLAVI:[68448,32],INSCRIPTIONAL_PARTHIAN:[68416,32],JAVANESE:[43392,96],KAITHI:[69760,80],KANA_SUPPLEMENT:[110592,256],KANBUN:[12688,16],KANGXI_RADICALS:[12032,224],KANNADA:[3200,128],KATAKANA:[12448,96],KATAKANA_PHONETIC_EXTENSIONS:[12784,16],KAYAH_LI:[43264,48],KHAROSHTHI:[68096,96],KHMER:[6016,128],KHMER_SYMBOLS:[6624,32],KHOJKI:[70144,80],KHUDAWADI:[70320,80],LAO:[3712,128],LATIN_1_SUPPLEMENT:[128,128],LATIN_EXTENDED_A:[256,128],LATIN_EXTENDED_ADDITIONAL:[7680,256],LATIN_EXTENDED_B:[384,208],LATIN_EXTENDED_C:[11360,32],LATIN_EXTENDED_D:[42784,224],LATIN_EXTENDED_E:[43824,64],LEPCHA:[7168,80],LETTERLIKE_SYMBOLS:[8448,80],LIMBU:[6400,80],LINEAR_A:[67072,384],LINEAR_B_IDEOGRAMS:[65664,128],LINEAR_B_SYLLABARY:[65536,128],LISU:[42192,48],LOW_SURROGATES:[56320,1024],LYCIAN:[66176,32],LYDIAN:[67872,32],MAHAJANI:[69968,48],MAHJONG_TILES:[126976,48],MALAYALAM:[3328,128],MANDAIC:[2112,32],MANICHAEAN:[68288,64],MARCHEN:[72816,80],MATHEMATICAL_ALPHANUMERIC_SYMBOLS:[119808,1024],MATHEMATICAL_OPERATORS:[8704,256],MEETEI_MAYEK:[43968,64],MEETEI_MAYEK_EXTENSIONS:[43744,32],MENDE_KIKAKUI:[124928,224],MEROITIC_CURSIVE:[68000,96],MEROITIC_HIEROGLYPHS:[67968,32],MIAO:[93952,160],MISCELLANEOUS_MATHEMATICAL_SYMBOLS_A:[10176,48],MISCELLANEOUS_MATHEMATICAL_SYMBOLS_B:[10624,128],MISCELLANEOUS_SYMBOLS:[9728,256],MISCELLANEOUS_SYMBOLS_AND_ARROWS:[11008,256],MISCELLANEOUS_SYMBOLS_AND_PICTOGRAPHS:[127744,768],MISCELLANEOUS_TECHNICAL:[8960,256],MODI:[71168,96],MODIFIER_TONE_LETTERS:[42752,32],MONGOLIAN:[6144,176],MONGOLIAN_SUPPLEMENT:[71264,32],MRO:[92736,48],MULTANI:[70272,48],MUSICAL_SYMBOLS:[119040,256],MYANMAR:[4096,160],MYANMAR_EXTENDED_A:[43616,32],MYANMAR_EXTENDED_B:[43488,32],NKO:[1984,64],NABATAEAN:[67712,48],NEW_TAI_LUE:[6528,96],NEWA:[70656,128],NUMBER_FORMS:[8528,64],OGHAM:[5760,32],OL_CHIKI:[7248,48],OLD_HUNGARIAN:[68736,128],OLD_ITALIC:[66304,48],OLD_NORTH_ARABIAN:[68224,32],OLD_PERMIC:[66384,48],OLD_PERSIAN:[66464,64],OLD_SOUTH_ARABIAN:[68192,32],OLD_TURKIC:[68608,80],OPTICAL_CHARACTER_RECOGNITION:[9280,32],ORIYA:[2816,128],ORNAMENTAL_DINGBATS:[128592,48],OSAGE:[66736,80],OSMANYA:[66688,48],PAHAWH_HMONG:[92928,144],PALMYRENE:[67680,32],PAU_CIN_HAU:[72384,64],PHAGS_PA:[43072,64],PHAISTOS_DISC:[66000,48],PHOENICIAN:[67840,32],PHONETIC_EXTENSIONS:[7424,128],PHONETIC_EXTENSIONS_SUPPLEMENT:[7552,64],PLAYING_CARDS:[127136,96],PRIVATE_USE_AREA:[57344,6400],PSALTER_PAHLAVI:[68480,48],REJANG:[43312,48],RUMI_NUMERAL_SYMBOLS:[69216,32],RUNIC:[5792,96],SAMARITAN:[2048,64],SAURASHTRA:[43136,96],SHARADA:[70016,96],SHAVIAN:[66640,48],SHORTHAND_FORMAT_CONTROLS:[113824,16],SIDDHAM:[71040,128],SINHALA:[3456,128],SINHALA_ARCHAIC_NUMBERS:[70112,32],SMALL_FORM_VARIANTS:[65104,32],SORA_SOMPENG:[69840,48],SPACING_MODIFIER_LETTERS:[688,80],SPECIALS:[65520,16],SUNDANESE:[7040,64],SUNDANESE_SUPPLEMENT:[7360,16],SUPERSCRIPTS_AND_SUBSCRIPTS:[8304,48],SUPPLEMENTAL_ARROWS_A:[10224,16],SUPPLEMENTAL_ARROWS_B:[10496,128],SUPPLEMENTAL_ARROWS_C:[129024,256],SUPPLEMENTAL_MATHEMATICAL_OPERATORS:[10752,256],SUPPLEMENTAL_PUNCTUATION:[11776,128],SUPPLEMENTAL_SYMBOLS_AND_PICTOGRAPHS:[129280,256],SUPPLEMENTARY_PRIVATE_USE_AREA_A:[983040,65536],SUPPLEMENTARY_PRIVATE_USE_AREA_B:[1048576,65536],SUTTON_SIGNWRITING:[120832,688],SYLOTI_NAGRI:[43008,48],SYRIAC:[1792,80],TAGALOG:[5888,32],TAGBANWA:[5984,32],TAGS:[917504,128],TAI_LE:[6480,48],TAI_THAM:[6688,144],TAI_VIET:[43648,96],TAI_XUAN_JING_SYMBOLS:[119552,96],TAKRI:[71296,80],TAMIL:[2944,128],TANGUT:[94208,6144],TANGUT_COMPONENTS:[100352,768],TELUGU:[3072,128],THAANA:[1920,64],THAI:[3584,128],TIBETAN:[3840,256],TIFINAGH:[11568,80],TIRHUTA:[70784,96],TRANSPORT_AND_MAP_SYMBOLS:[128640,128],UGARITIC:[66432,32],UNIFIED_CANADIAN_ABORIGINAL_SYLLABICS:[5120,640],UNIFIED_CANADIAN_ABORIGINAL_SYLLABICS_EXTENDED:[6320,80],VAI:[42240,320],VARIATION_SELECTORS:[65024,16],VARIATION_SELECTORS_SUPPLEMENT:[917760,240],VEDIC_EXTENSIONS:[7376,48],VERTICAL_FORMS:[65040,16],WARANG_CITI:[71840,96],YI_RADICALS:[42128,64],YI_SYLLABLES:[40960,1168],YIJING_HEXAGRAM_SYMBOLS:[19904,64]}
	,o={}

Object.keys(blocks).forEach(name=>
	Object.defineProperty(o,name,{
		configurable:true
		,get(){
			delete o[name]
			var [start,length]=blocks[name]
			o[name]=" ".repeat(length).split(" ").map((x,i)=>String.fromCodePoint(start+i)).join("")
			return o[name]
		}
	})
)

module.exports=o