// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001020202020202020202020202020203040000000000000000000000000000080400000000000000000000000000000804000000000000000000000000000008040000000000000000000000000000080400000000000000000000090909090804000000000000000000000909090908040000000000000000000009090909080400000000000000000000000000000804000000000000000000000000000008040000000000000000000000000000080400000000000000000000000000000804000000000000000000000000000008040000000000000000000000000000080400000000000000000000000000000805060606060606060606060606060607`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . 2 2 2 2 2 
2 . . . . . . . . . . 2 2 2 2 2 
2 . . . . . . . . . . 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tileDarkGrass2], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`10001000060606060606060606060f0c01010101060303030303060d0d0e0d0c01010101060602030303060b06060c0c010101010608040403030303030601010101010106090a0a0a0a0a0a0a060101010101010609040405050303030601010101010106060404060606060606010101010101060606060606060606060101010101010101010107070707070707070101010101010101070101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . 2 . . . . 2 2 2 2 2 
2 . 2 . . . 2 . 2 2 2 2 2 2 2 2 
2 . 2 . . . . . . 2 2 2 2 2 2 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 . . . . . . 2 2 2 2 2 2 2 
2 . . . . . . . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthEast1,sprites.builtin.forestTiles23,sprites.castle.tileGrass2,sprites.castle.tileGrass3,sprites.castle.tileGrass1,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.stairNorth,sprites.dungeon.stairSouth,sprites.dungeon.hazardWater,sprites.dungeon.doorLockedNorth,myTiles.tile1,myTiles.tile2,myTiles.tile3,sprites.dungeon.chestOpen], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100007070702070709070707070707090709070707020707070707070709070707070202030207070707070907070707090707070707070707070707070709070709070707070707070707070707070707070404040404060707070709070709070908080808080507070707070707070707080808080805070707070707070707070808080808050707070707070707070708080808080507070707070707070707080808080805070707070707070707070202020202020203020202020202020202010101010101010101010101010102020101010101010101010101010101020202020202020202020202020202020202020202020202020202020202020202`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . 2 . . . . . . . 2 . . . 2 
2 2 . 2 . . . . . 2 . . . . 2 2 
2 . . . . . . . . . . . 2 . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 . 2 2 2 . . . . 2 . . 2 . 2 
2 . . . . 2 . . . . . . . . . 2 
2 . . . . 2 . . . . . . . . . 2 
2 . . . . 2 . . . . . . . . . 2 
2 . . . . 2 . . . . . . . . . 2 
2 . . . . 2 . . . . . . . . . 2 
2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileDarkGrass3,myTiles.tile1,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,sprites.castle.tileGrass3,sprites.castle.tileGrass2,myTiles.tile8], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile":
            case "tile1":return tile1;
            case "tile0":
            case "tile2":return tile2;
            case "tile4":
            case "tile3":return tile3;
            case "tile9":
            case "tile4":return tile4;
            case "tile10":
            case "tile5":return tile5;
            case "tile11":
            case "tile6":return tile6;
            case "tile12":
            case "tile7":return tile7;
            case "tile13":
            case "tile8":return tile8;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
