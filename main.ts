scene.onOverlapTile(SpriteKind.Player, assets.tile`tile4`, function (sprite, location) {
    tiles.setTilemap(tilemap`level3`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setTilemap(tilemap`level4`)
    beach_dude = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . 5 5 5 . . . . 5 5 5 5 5 . . . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 . 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 . . . 
        5 5 5 5 5 5 5 5 5 5 5 5 . . . . 
        5 5 5 5 5 5 5 5 5 . . . . . . . 
        5 5 5 . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    beach_dude.follow(mySprite, "you might want to check the mountain for a secret passage ".length)
})
let beach_dude: Sprite = null
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level2`)
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
