scene.onOverlapTile(SpriteKind.Player, assets.tile`tile4`, function (sprite, location) {
    tiles.setTilemap(tilemap`level3`)
    CurrentLevel = 2
    bush = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 7 7 7 7 7 7 7 . . . . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 . . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . . . 7 7 7 7 7 7 7 7 7 7 7 . 
        . . . . . . 7 7 7 7 7 7 7 7 . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    bush.follow(mySprite, 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile26`, function (sprite, location) {
    tiles.setTilemap(tilemap`level5`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setTilemap(tilemap`level4`)
    bush.destroy()
    CurrentLevel = 3
    beach_dude = sprites.create(img`
        . . . . . . e e e e e e . . . . 
        . . . . . . 1 f 5 5 f 1 . . . . 
        . . . . . . 5 5 5 5 5 5 . . . . 
        . . . . . . 5 5 f 5 5 5 . . . . 
        . . . . 4 4 4 4 4 4 4 4 4 4 . . 
        . . . . 5 5 4 4 4 4 4 4 5 5 . . 
        . . . . 5 5 4 4 4 4 4 4 5 5 . . 
        . . . . 5 5 4 4 4 4 4 4 5 5 . . 
        . . . . 5 5 4 4 4 4 4 4 5 5 . . 
        . . . . . . 4 4 4 4 4 4 . . . . 
        . . . . . . 2 2 2 2 2 2 . . . . 
        . . . . . . 2 2 . . 2 2 . . . . 
        . . . . . . 2 2 . . 2 2 . . . . 
        . . . . . . 5 5 . . 5 5 . . . . 
        . . . . . . 5 5 . . 5 5 . . . . 
        . . . . . . 5 5 . . 5 5 . . . . 
        `, SpriteKind.Player)
    beach_dude.follow(mySprite, "you might want to check the mountain for a secret passage ".length)
})
let beach_dude: Sprite = null
let bush: Sprite = null
let mySprite: Sprite = null
let CurrentLevel = 0
tiles.setTilemap(tilemap`level2`)
CurrentLevel = 1
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . . . d d d d d . . . . . . 
    . . . . . 1 f d f 1 . . . . . . 
    . . . . . d d d d d . . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . d 2 2 2 2 2 d . . . . . 
    . . . . d 2 2 2 2 2 d . . . . . 
    . . . . d 2 2 2 2 2 d . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . . . e e . e e . . . . . . 
    . . . . . b b . b b . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
