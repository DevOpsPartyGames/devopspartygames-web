const path = require("path")
const jimp = require("jimp")

async function onCreateNode({ node, actions }) {

async function createOGImage(playerID, playerName, playerImage) {
  try {
    const location = `./public/images/people/${playerID}-card.jpg`
    const titleFont = await jimp.loadFont(`${__dirname}/fonts/WhiteTitle72.fnt`)
    const detailFont = await jimp.loadFont(`${__dirname}/fonts/OrangeTitle.fnt`)
    const playerThing = await jimp.read(`${__dirname}/../../static/images/people/${playerImage}`);

    return Promise.all([jimp.read(`${__dirname}/templates/player-social.png`)]).then(
      ([image]) => {
        image.blit(playerThing, 622, 50)
        image
          .print(
            titleFont,
            50,
            220,
            {
              text: playerName,
              alignmentX: jimp.HORIZONTAL_ALIGN_LEFT,
              alignmentY: jimp.VERTICAL_ALIGN_MIDDLE,
            },
            400,
            300
          )
          .write(location)
      }
    )

  } catch (error) {
    console.warn(error)
  }

}

if (node.internal.type !== `PeopleJson`) {
  return
}

createOGImage(
  node.id,
  node.name,
  node.image
)

}

exports.onCreateNode = onCreateNode