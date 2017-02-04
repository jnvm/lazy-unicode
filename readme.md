# Lazy Unicode

Access to all 128,172 unicode characters by [block](https://github.com/mathiasbynens/unicode-9.0.0/tree/master/Block) in < 8kb.

For reference, a string of all unicode characters in a text file is approximately 1mb.

Since unicode blocks are contiguous, this stores only start and length values per block,
and getters construct the full block string once upon first invocation and immediately overwrite the property to the static string.

## Install
	npm i lazy-unicode

## Example
	> var u=require("lazy-unicode-blocks")
	undefined
	> u.MAHJONG_TILES //substitute for any block name, take a look by tabbing at u.|
	'🀀🀁🀂🀃🀄🀅🀆🀇🀈🀉🀊🀋🀌🀍🀎🀏🀐🀑🀒🀓🀔🀕🀖🀗🀘🀙🀚🀛🀜🀝🀞🀟🀠🀡🀢🀣🀤🀥🀦🀧🀨🀩🀪🀫🀬🀭🀮🀯🀰'

All [blocks](https://github.com/mathiasbynens/unicode-9.0.0/tree/master/Block) are available.