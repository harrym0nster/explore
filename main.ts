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
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile66`, function (sprite, location) {
    tiles.setTilemap(tilemap`level7`)
    R2.setImage(img`
        . . . 1 1 1 1 1 1 . . . . . . . 
        . . . 1 b b b b 1 . . . . . . . 
        . . . 1 b b b b 1 . . . . . . . 
        . . . 1 b b b b 1 . . . . . . . 
        . 1 1 1 1 b 1 2 8 1 1 . . . . . 
        . 1 1 1 b 1 1 1 1 1 1 . . . . . 
        . 1 1 1 1 b 1 1 1 1 1 . . . . . 
        . 1 1 1 1 1 1 1 1 1 1 . . . . . 
        . b b 1 1 1 1 1 1 b b . . . . . 
        . . . 1 1 1 1 1 1 . . . . . . . 
        . . . 1 1 1 1 1 1 . . . . . . . 
        . . . 8 1 . . 1 1 . . . . . . . 
        . . . 1 1 . . 1 1 . . . . . . . 
        . . . f f . . f f . . . . . . . 
        . . . f f . . f f . . . . . . . 
        . . f f f . . f f f . . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile100`, function (sprite, location) {
    tiles.setTilemap(tilemap`level10`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile26`, function (sprite, location) {
    tiles.setTilemap(tilemap`level5`)
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . 1 f d d f 1 . . . . . 
        . . . . . d d d d d d . . . . . 
        . . . . . d d f d d d . . . . . 
        . . . 4 4 4 4 4 4 4 4 4 4 . . . 
        . . . f d 4 4 4 4 4 4 d f . . . 
        . . . d f 4 4 4 4 4 4 f d . . . 
        . . . f d 4 4 4 4 4 4 d d . . . 
        . . . d d 4 4 4 4 4 4 d d . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . . 4 4 . . 4 4 . . . . . 
        . . . . . 4 4 . . 4 4 . . . . . 
        . . . . . 4 4 . . 4 4 . . . . . 
        . . . . . f f . . f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    beach_dude.destroy()
    CurrentLevel = 4
    prisoner1 = sprites.create(img`
        . . . . f f f f f f . . . . . . 
        . . . . 1 f d d f 1 . . . . . . 
        . . . . d d d d d d . . . . . . 
        . . . . d d f d d d . . . . . . 
        . . 4 4 4 4 4 4 4 4 4 4 . . . . 
        . . d d 4 4 4 4 4 4 d d . . . . 
        . . d d 4 4 4 4 4 4 d d . . . . 
        . . d d 4 4 4 4 4 4 d d . . . . 
        . . d d 4 4 4 4 4 4 d d . . . . 
        . . . . 4 4 4 4 4 4 . . . . . . 
        . . . . 4 4 . . 4 4 . . . . . . 
        . . . . 4 4 . . 4 4 . . . . . . 
        . . . . 4 4 . . 4 4 . . . . . . 
        . . . . 4 4 . . 4 4 . . . . . . 
        . . . . f f . . f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    PRISONER2 = sprites.create(img`
        . . . . e e e e e e . . . . . . 
        . . . . 1 f d d f 1 . . . . . . 
        . . . . d d d d d d . . . . . . 
        . . . . d d f d d d . . . . . . 
        . . 4 4 4 4 4 4 4 4 4 4 . . . . 
        . . d d 4 4 4 4 4 4 d d . . . . 
        . . d d 4 4 4 4 4 4 d d . . . . 
        . . d d 4 4 4 4 4 4 d d . . . . 
        . . d d 4 4 4 4 4 4 d d . . . . 
        . . . . 4 4 4 4 4 4 . . . . . . 
        . . . . 4 4 4 4 4 4 . . . . . . 
        . . . . 4 4 . . 4 4 . . . . . . 
        . . . . 4 4 . . 4 4 . . . . . . 
        . . . . 4 4 . . 4 4 . . . . . . 
        . . . . f f . . f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    prisoner1.setVelocity(-39, 60)
    PRISONER2.setVelocity(15, 99)
    prisoner1.setBounceOnWall(true)
    PRISONER2.setBounceOnWall(true)
    POLICE = sprites.create(img`
        . . . 6 6 6 6 6 6 6 . . . . . . 
        . . . . 1 f d d f 1 . . . . . . 
        . . . . d d d d d d . . . . . . 
        . . . . d f f f f d . . . . . . 
        . . 6 6 6 6 6 6 6 6 6 6 . . . . 
        . . d d 6 5 6 6 6 6 d d . . . . 
        . . d d 6 6 6 6 6 6 d d . . . . 
        . . d d 6 6 6 6 6 6 d d . . . . 
        . . d d 6 6 6 6 6 6 d d . . . . 
        . . . . 6 6 6 6 6 6 . . . . . . 
        . . . . f b b b b f . . . . . . 
        . . . . b b . . b b . . . . . . 
        . . . . b b . . b b . . . . . . 
        . . . . b b . . b b . . . . . . 
        . . . . f f . . f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    POLICE.setBounceOnWall(true)
    POLICE.setVelocity(50, 50)
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile81`, function (sprite, location) {
    tiles.setTilemap(tilemap`level8`)
    mySprite.setImage(img`
        . . . b b b b b b . . . . . . . 
        . . . b 4 4 4 4 b . . . . . . . 
        . . . b 4 4 4 4 b . . . . . . . 
        . . . b 4 4 4 4 b . . . . . . . 
        . b b b b 4 4 b b b b . . . . . 
        . 4 4 b b b b b b 4 4 . . . . . 
        . b b b b 4 b b b b b . . . . . 
        . b b b 4 b b b b b b . . . . . 
        . 4 4 b b 4 b b b 4 4 . . . . . 
        . . . b b b b b b . . . . . . . 
        . . . b b b b b b . . . . . . . 
        . . . 4 4 . . 4 4 . . . . . . . 
        . . . b b . . b b . . . . . . . 
        . . . f f . . f f . . . . . . . 
        . . . f f . . f f . . . . . . . 
        . . f f f . . f f f . . . . . . 
        `)
    R2.destroy()
    astronaght1.destroy()
    astronaut2.destroy()
    lavamonster = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 4 2 4 4 2 4 2 . . . 
        . . . . 2 1 4 2 2 4 2 2 1 . . . 
        . . . . 1 1 4 4 4 4 4 1 1 . . . 
        . . . . . 2 4 4 4 2 2 4 . . . . 
        . . . . . 2 2 2 2 2 2 4 . . . . 
        . . . . . 4 2 2 4 4 2 2 . . . . 
        . . . . . 4 4 1 1 1 4 2 . . . . 
        . . . . . 2 4 1 1 1 4 2 . . . . 
        . . . . . 2 2 4 2 4 4 4 . . . . 
        . . . . . 4 4 4 2 2 2 4 . . . . 
        `, SpriteKind.Player)
    lavanight = sprites.create(img`
        . . . . . 4 . . . 4 . . . . . . 
        . . . . . b b b b b . . . . . . 
        . . . . . b 4 4 4 b . . . . . . 
        . . . . . b b 4 b b . . . . . . 
        . . . . . b b 4 b b . . . . . . 
        . . . b b b b b b b b b . . . . 
        . . . 4 4 b 4 4 4 b 4 4 . . . . 
        . . . 4 4 b 4 4 4 b 4 4 . . . . 
        . . . b b b 4 4 4 b b b . . . . 
        . . . b b b b 4 b b b b . . . . 
        . . . 4 4 b b b b b 4 4 . . . . 
        . . . . . 4 4 b 4 4 . . . . . . 
        . . . . . 4 b . b 4 . . . . . . 
        . . . . . b b . b b . . . . . . 
        . . . . . b b . b b . . . . . . 
        . . . . 4 4 4 . 4 4 4 . . . . . 
        `, SpriteKind.Player)
    lavasnake = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . d 2 d . . . . . . . . . . . 
        . . . 2 2 2 . . . 2 2 . . . . . 
        . . . . 2 4 4 4 4 4 4 4 . . . . 
        . . . 4 . . . . . . . 4 . . . . 
        . . 2 2 4 4 4 4 . . 2 4 . . . . 
        . . 2 4 . . . . 2 2 2 . . . . . 
        . . . 4 . . . . . . . . . . . . 
        . . . . 4 4 4 2 2 2 4 . . . . . 
        . . . . . . . . . . 4 2 2 . . . 
        . . . . . . . . . . . . 2 4 . . 
        . . . . . . . 4 4 2 2 4 . 4 . . 
        . . . . 2 2 4 . . . . 4 4 4 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    lavamonster.setVelocity(24, 74)
    lavanight.setVelocity(24, 56)
    lavasnake.setVelocity(39, 44)
    lavamonster.setBounceOnWall(true)
    lavanight.setBounceOnWall(true)
    lavasnake.setBounceOnWall(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonOrange, function (sprite, location) {
    tiles.setTilemap(tilemap`level9`)
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
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
        `)
    lavamonster.destroy()
    lavanight.destroy()
    lavasnake.destroy()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    tiles.setTilemap(tilemap`level6`)
    prisoner1.destroy()
    POLICE.destroy()
    PRISONER2.destroy()
    astronaght1 = sprites.create(img`
        . . . . 1 1 1 1 1 1 . . . . . . 
        . . . . 1 b b b b 1 . . . . . . 
        . . . . 1 b b b b 1 . . . . . . 
        . . . . 1 b b b b 1 . . . . . . 
        . . . . 1 1 b b 1 1 . . . . . . 
        b 1 1 1 1 1 1 1 1 1 1 1 1 b . . 
        b 1 1 1 1 1 1 1 2 8 1 1 1 b . . 
        . . . . 1 1 1 b 1 1 . . . . . . 
        . . . . 1 1 b 1 1 1 . . . . . . 
        . . . . 1 1 1 b 1 1 . . . . . . 
        . . . . 1 1 1 1 1 1 . . . . . . 
        . . . . 1 1 . . 1 1 . . . . . . 
        . . . . b 1 . . 1 1 . . . . . . 
        . . . . f f . . f f . . . . . . 
        . . . . f f . . f f . . . . . . 
        . . . f f f . . f f f . . . . . 
        `, SpriteKind.Enemy)
    astronaght1.setBounceOnWall(true)
    mySprite.setImage(img`
        . . . . 1 1 1 1 1 1 . . . . . . 
        . . . . 1 b b b b 1 . . . . . . 
        . . . . 1 b b b b 1 . . . . . . 
        . . . . 1 b b b b 1 . . . . . . 
        b 1 1 1 1 1 b b 2 8 1 1 1 b . . 
        b 1 1 1 1 1 b 1 1 1 1 1 1 b . . 
        . . . . 1 b 1 1 1 1 . . . . . . 
        . . . . 1 1 b 1 1 1 . . . . . . 
        . . . . 1 1 1 1 1 1 . . . . . . 
        . . . . 1 1 . . 1 1 . . . . . . 
        . . . . f f . . f f . . . . . . 
        . . . . f f . . f f . . . . . . 
        . . . f f f . . f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    astronaght1.setVelocity(24, -13)
    astronaut2 = sprites.create(img`
        . . . . 1 1 1 1 1 1 . . . . . . 
        . . . . 1 b b b b 1 . . . . . . 
        . . . . 1 b b b b 1 . . . . . . 
        . . . . 1 b b b b 1 . . . . . . 
        . . . . 1 1 b b 1 1 . . . . . . 
        b 1 1 1 1 1 1 1 1 1 1 1 1 b . . 
        b 1 1 1 1 1 1 1 2 8 1 1 1 b . . 
        . . . . 1 1 1 b 1 1 . . . . . . 
        . . . . 1 1 b 1 1 1 . . . . . . 
        . . . . 1 1 1 b 1 1 . . . . . . 
        . . . . 1 1 1 1 1 1 . . . . . . 
        . . . . 1 1 . . 1 1 . . . . . . 
        . . . . b 1 . . 1 1 . . . . . . 
        . . . . f f . . f f . . . . . . 
        . . . . f f . . f f . . . . . . 
        . . . f f f . . f f f . . . . . 
        `, SpriteKind.Enemy)
    astronaut2.setVelocity(61, -32)
    astronaut2.setBounceOnWall(true)
    R2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . 8 f 8 8 8 . . . . . . 
        . . . . . 8 8 8 2 8 . . . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . b 1 1 1 1 1 b . . . . . 
        . . . . b 1 1 b 1 1 b . . . . . 
        . . . . b 1 1 b 1 1 b . . . . . 
        . . . . b 1 1 b 1 1 b . . . . . 
        . . . b b . b b b . b b . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    R2.setBounceOnWall(true)
    R2.setVelocity(81, 68)
})
let lavasnake: Sprite = null
let lavanight: Sprite = null
let lavamonster: Sprite = null
let astronaut2: Sprite = null
let astronaght1: Sprite = null
let POLICE: Sprite = null
let PRISONER2: Sprite = null
let prisoner1: Sprite = null
let beach_dude: Sprite = null
let R2: Sprite = null
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
