controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let value of favoriteFoods) {
        value.setPosition(Math.randomRange(0, 170), Math.randomRange(0, 120))
    }
})
let favoriteFoods: Sprite[] = []
favoriteFoods = [sprites.create(img`
. . . . . . . . . . . . . b e e b b b b . . . . . . . . . . . . 
. . . . . . . . . . . . e e b b b b 4 b b . . . . . . . . . . . 
. . . . . . . . . . . . e b 3 4 4 b b 4 b b . . . . . . . . . . 
. . . . . . . . . . . . e 4 4 3 3 4 b b 4 b b . . . . . . . . . 
. . . . . . . . . . . . e b 4 3 3 3 4 4 b 4 b e . . . . . . . . 
. . . . . . . . . . . . 4 e b 4 3 3 4 4 4 4 4 b e . . . . . . . 
. . . . . . . . . . . b d 4 e b 4 3 3 3 3 3 4 4 b b . . . . . . 
. . . . . . . . . . b 4 5 5 d 4 4 4 3 3 3 3 4 4 4 b b . . . . . 
. . . . . . . . . . 4 d 5 5 5 5 d 4 4 4 3 3 3 4 4 4 b b . . . . 
. . . . . . . . . 4 5 5 5 5 5 5 d d 4 b 4 4 4 3 4 4 4 b e . . . 
. . . . . . . . b d 5 5 5 5 d 5 5 5 d 4 b b 4 4 4 4 4 4 e e . . 
. . . . . . . . b 5 5 d d d f f 5 5 5 5 b b 4 b 4 4 4 4 4 e e . 
. . . . . . . b d 5 5 5 5 f b b f 5 5 5 5 4 e b b 4 4 4 4 4 e b 
. . . . . . . 4 3 4 4 4 5 5 f f 5 5 5 5 5 d 4 e e b 4 4 b 4 e e 
. . . . . . b 4 4 4 3 3 4 d d d 5 5 5 4 4 4 d 4 e e b b b 4 b e 
. . . . . . b e 4 4 4 3 4 e d 5 5 5 4 4 3 3 4 d b 4 e b b b b e 
. . . . . b d e 4 4 4 4 4 e 5 5 5 e 4 4 4 3 4 e d d 4 b b b b e 
. . . . . b 5 4 e 4 4 4 e 3 5 5 5 e 4 4 4 4 4 e d d d 4 e b e 1 
. . . . b d 5 5 4 e e e 3 5 5 5 5 4 e 4 4 4 e 3 5 5 5 4 4 e e 1 
. . . . f f 5 d d 5 5 5 5 5 5 5 5 5 4 e e e 3 5 5 d d 4 d e e 1 
. . . f b b f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 5 5 4 d 4 e e 
. . . 4 f f 5 4 4 4 5 5 5 d d d d f f 5 5 5 5 1 5 4 4 d 4 e e e 
. . b 4 5 5 4 4 3 3 4 5 5 5 d d f b b f 1 1 d 4 4 4 d d e e e . 
. . 4 d 5 4 4 4 4 3 4 e 5 5 5 5 5 f f 1 d 4 4 d d d 4 e e e . . 
. b d d 5 e 4 4 4 4 4 e 5 5 5 1 1 5 1 1 4 d 5 4 d 4 e e . . . . 
. b 5 5 d 4 e 4 4 4 e 3 5 1 1 4 4 d 1 d 5 5 e e e e . . . . . . 
b d 5 d d d 4 e e e 3 d 4 4 4 5 5 5 d d 4 e . . . . . . . . . . 
b 5 5 5 1 1 5 d d d d 5 5 d 5 4 4 e e d e . . . . . . . . . . . 
4 5 1 1 d 4 4 4 d 5 5 4 4 e e . . . 4 d e . . . . . . . . . . . 
4 1 d 4 5 5 5 d 4 e e . . . . . . . . 4 4 . . . . . . . . . . . 
4 1 5 5 4 e e d e . . . . . . . . . . . . . . . . . . . . . . . 
4 4 e e . . . 4 e . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player), sprites.create(img`
. . . . . . . . . . . . . . e e e e e e e . . . . . . . . . . . 
. . . . . . . . . . . . e e 4 5 5 6 6 7 7 7 e . . . . . . . . . 
. . . . . . . . . . e e 4 5 5 5 6 7 7 7 7 7 6 8 8 . . . . . . . 
. . . . . . . . . e 4 6 7 7 6 6 7 7 7 7 7 7 7 7 7 6 6 8 . . . . 
. . . . . . . . e 4 6 7 7 7 7 7 7 7 5 7 7 7 7 6 7 6 7 7 8 . . . 
. . . . . . . 4 4 4 8 7 7 7 7 7 7 7 7 7 7 6 6 7 7 7 6 7 8 . . . 
. . . . . . 4 5 2 7 7 7 7 7 7 6 5 6 7 7 7 7 6 6 6 7 6 6 6 8 . . 
. . . . . 4 7 7 7 7 7 7 7 6 5 5 5 7 7 6 6 6 e e e e e 8 8 8 . . 
. . . . 4 5 7 7 7 6 7 5 7 5 5 7 7 7 7 e 4 5 5 5 d d d d 4 8 . . 
. . . 4 4 5 6 7 5 7 7 7 7 7 7 7 7 e 4 5 5 d d d d d d d d d 4 . 
. . . e 6 6 7 5 5 7 7 7 7 7 7 e 4 5 5 d d d d 5 5 5 5 4 d d 4 4 
. . e 4 6 7 7 7 7 7 7 6 7 7 e 5 5 d d 5 5 5 5 5 d 5 5 d d d d 4 
. . e 5 6 6 8 6 7 7 6 6 6 e 5 d d 5 5 5 5 5 5 5 5 5 5 5 5 d d e 
. e 4 5 7 4 4 e 8 7 7 6 e 5 d 5 5 5 5 5 4 5 5 5 5 5 5 5 5 5 d e 
. e 5 5 7 7 7 7 e 7 7 e 5 d 5 5 5 5 d 5 5 5 5 5 d d d d 5 4 d e 
. e 5 7 7 6 7 7 7 7 7 5 d 5 d 5 5 5 5 5 5 d 5 d 5 d d d d d d e 
e 4 5 7 7 7 7 7 7 e 4 5 d 5 5 5 5 5 5 5 5 5 5 5 d d 4 d d d e . 
e 5 7 6 7 7 7 7 7 e 5 d 5 5 5 5 5 5 5 5 d 5 5 5 5 d d d d e . . 
e 6 7 7 6 7 7 6 7 4 5 d 5 5 5 5 5 5 5 5 5 5 5 5 d d d d e . . . 
e 5 e 7 7 7 7 7 7 5 d 5 5 d 5 5 5 d 5 5 5 5 d 5 d d d e . . . . 
e 5 f 7 7 f 7 7 e 5 d 5 5 5 4 5 5 5 5 5 5 5 d d d 4 e . . . . . 
e 5 f f f f f f e 5 4 5 5 5 5 5 5 5 d 5 d 4 d d e e . . . . . . 
e 5 4 e f e f f 4 5 d 5 5 d 5 5 5 5 5 d d d d e . . . . . . . . 
e 5 e e e f f e 5 d d 5 5 5 5 5 4 5 d d d e e . . . . . . . . . 
e 4 e e e f f f 5 d 5 5 5 5 d 5 5 d d d e . . . . . . . . . . . 
e 4 e f e f f f 5 d 5 d 5 5 5 5 5 d 4 e . . . . . . . . . . . . 
. e 4 e f f f e 5 d 5 5 5 5 5 5 d e e . . . . . . . . . . . . . 
. e 5 4 e e e e 5 d 5 4 5 d d 4 e . . . . . . . . . . . . . . . 
. . e 5 5 4 e e 5 d d d d d e e . . . . . . . . . . . . . . . . 
. . . e e 5 5 4 4 d d d e e . . . . . . . . . . . . . . . . . . 
. . . . . e e e e e e e . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player), sprites.create(img`
. . . . . 4 4 4 4 4 4 . . . . . 
. . . 4 4 4 4 4 4 4 4 4 4 . . . 
. . 4 4 4 d d d d d d d 4 4 . . 
. 4 4 d d d d d d c d d 4 4 4 . 
. 4 d d d d c d d d d d d d 4 . 
. 4 d 7 d d d d 7 d c c c d 4 . 
. 4 4 d d d d c d d d d d 4 4 . 
. 4 4 4 d d d d d d 7 d 4 4 4 . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
. . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player), sprites.create(img`
. . . . . 1 1 1 1 1 1 . . . . . 
. . . 1 1 1 1 1 1 1 1 1 1 . . . 
. . 1 1 1 7 7 d 7 7 7 7 1 1 . . 
. 1 1 7 7 7 7 7 7 7 7 7 1 1 1 . 
. 1 7 7 7 7 7 7 7 7 f 7 7 7 1 . 
. 1 7 7 7 7 7 7 d 7 7 f 7 7 1 . 
. 1 7 d 7 7 7 7 7 7 7 7 d 1 1 . 
. 1 7 f 7 d 7 7 7 7 7 7 f 1 1 . 
. 1 7 7 7 7 f 7 7 d 7 7 7 7 1 . 
. 1 1 7 7 7 7 7 7 7 7 f 7 7 1 . 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
. . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player), sprites.create(img`
. . . . . 1 1 1 1 1 1 . . . . . 
. . . 1 1 1 1 1 1 1 1 1 1 . . . 
. . 1 1 1 4 4 f f f f f 1 1 . . 
. 1 1 f f f 4 f f 4 4 f 1 1 1 . 
. 1 4 f 4 f f f 4 f f f 4 4 1 . 
. 1 4 f f 4 f 4 f 4 4 f f f 1 . 
. 1 4 f f 4 f 4 f 4 f 4 f 4 1 . 
. 1 4 f 4 4 4 f f f 4 f f 4 1 . 
. 1 4 f 4 4 4 f 4 f f f f 4 1 . 
. 1 4 f f f f f 4 4 f f 4 4 1 . 
. 1 1 4 4 4 4 f f f f 4 4 1 1 . 
. . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)]
scene.setBackgroundColor(8)
