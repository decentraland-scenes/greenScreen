//Shapes
let planeShape1 = new PlaneShape()
planeShape1.withCollisions = false

let buttonShape = new SphereShape()



//Materials
let greenMat = new BasicMaterial()
greenMat.texture = new Texture("images/green.png")

let blueMat = new BasicMaterial()
blueMat.texture = new Texture("images/blue.png")

let redMat = new BasicMaterial()
redMat.texture = new Texture("images/red.png")

let yellowMat = new BasicMaterial()
yellowMat.texture = new Texture("images/yellow.png")

let whiteMat = new BasicMaterial()
whiteMat.texture = new Texture("images/white.png")

let blackMat = new BasicMaterial()
blackMat.texture = new Texture("images/black.png")

let greyMat = new BasicMaterial()
greyMat.texture = new Texture("images/grey.png")

let orangeMat = new BasicMaterial()
orangeMat.texture = new Texture("images/orange.png")

let purpleMat = new BasicMaterial()
purpleMat.texture = new Texture("images/purple.png")



//Walls
const floorPlane = new Entity()
floorPlane.addComponent(new Transform({position: new Vector3(8,0,8), scale: new Vector3(16,16,16), rotation:Quaternion.Euler(90,0,0)}))
floorPlane.addComponent(planeShape1)
floorPlane.addComponent(greenMat)
engine.addEntity(floorPlane)

const northPlane = new Entity()
northPlane.addComponent(new Transform({position: new Vector3(8,7,15), scale: new Vector3(14,14,14), rotation:Quaternion.Euler(0,0,0)}))
northPlane.addComponent(planeShape1)
northPlane.addComponent(greenMat)
engine.addEntity(northPlane)

const southPlane = new Entity()
southPlane.addComponent(new Transform({position: new Vector3(8,7,1), scale: new Vector3(14,14,14), rotation:Quaternion.Euler(0,0,0)}))
southPlane.addComponent(planeShape1)
southPlane.addComponent(greenMat)
engine.addEntity(southPlane)

const eastPlane = new Entity()
eastPlane.addComponent(new Transform({position: new Vector3(15,7,8), scale: new Vector3(14,14,14), rotation:Quaternion.Euler(0,90,0)}))
eastPlane.addComponent(planeShape1)
eastPlane.addComponent(greenMat)
engine.addEntity(eastPlane)

const westPlane = new Entity()
westPlane.addComponent(new Transform({position: new Vector3(1,7,8), scale: new Vector3(14,14,14), rotation:Quaternion.Euler(0,90,0)}))
westPlane.addComponent(planeShape1)
westPlane.addComponent(greenMat)
engine.addEntity(westPlane)

const topPlane = new Entity()
topPlane.addComponent(new Transform({position: new Vector3(8,14,8), scale: new Vector3(14,14,14), rotation:Quaternion.Euler(90,0,0)}))
topPlane.addComponent(planeShape1)
topPlane.addComponent(greenMat)
engine.addEntity(topPlane)



//Buttons
const redButton = new Entity()
redButton.addComponent(buttonShape)
redButton.addComponent(new Transform({position: new Vector3(0.5,1.5,0.5), scale: new Vector3(0.2,0.2,0.2), rotation:Quaternion.Euler(0,0,0)}))
redButton.addComponent(redMat)
engine.addEntity(redButton)

const orangeButton = new Entity()
orangeButton.addComponent(buttonShape)
orangeButton.addComponent(new Transform({position: new Vector3(0.5,1.5,1), scale: new Vector3(0.2,0.2,0.2), rotation:Quaternion.Euler(0,0,0)}))
orangeButton.addComponent(orangeMat)
engine.addEntity(orangeButton)

const yellowButton = new Entity()
yellowButton.addComponent(buttonShape)
yellowButton.addComponent(new Transform({position: new Vector3(0.5,1.5,1.5), scale: new Vector3(0.2,0.2,0.2), rotation:Quaternion.Euler(0,0,0)}))
yellowButton.addComponent(yellowMat)
engine.addEntity(yellowButton)

const greenButton = new Entity()
greenButton.addComponent(buttonShape)
greenButton.addComponent(new Transform({position: new Vector3(0.5,1.5,2), scale: new Vector3(0.2,0.2,0.2), rotation:Quaternion.Euler(0,0,0)}))
greenButton.addComponent(greenMat)
engine.addEntity(greenButton)

const blueButton = new Entity()
blueButton.addComponent(buttonShape)
blueButton.addComponent(new Transform({position: new Vector3(0.5,1.5,2.5), scale: new Vector3(0.2,0.2,0.2), rotation:Quaternion.Euler(0,0,0)}))
blueButton.addComponent(blueMat)
engine.addEntity(blueButton)

const purpleButton = new Entity()
purpleButton.addComponent(buttonShape)
purpleButton.addComponent(new Transform({position: new Vector3(0.5,1.5,3), scale: new Vector3(0.2,0.2,0.2), rotation:Quaternion.Euler(0,0,0)}))
purpleButton.addComponent(purpleMat)
engine.addEntity(purpleButton)

const whiteButton = new Entity()
whiteButton.addComponent(buttonShape)
whiteButton.addComponent(new Transform({position: new Vector3(0.5,1.5,3.5), scale: new Vector3(0.2,0.2,0.2), rotation:Quaternion.Euler(0,0,0)}))
whiteButton.addComponent(whiteMat)
engine.addEntity(whiteButton)

const greyButton = new Entity()
greyButton.addComponent(buttonShape)
greyButton.addComponent(new Transform({position: new Vector3(0.5,1.5,4), scale: new Vector3(0.2,0.2,0.2), rotation:Quaternion.Euler(0,0,0)}))
greyButton.addComponent(greyMat)
engine.addEntity(greyButton)

const blackButton = new Entity()
blackButton.addComponent(buttonShape)
blackButton.addComponent(new Transform({position: new Vector3(0.5,1.5,4.5), scale: new Vector3(0.2,0.2,0.2), rotation:Quaternion.Euler(0,0,0)}))
blackButton.addComponent(blackMat)
engine.addEntity(blackButton)



//Switch colours
redButton.addComponent(
    new OnPointerDown(
        (e) => {
            floorPlane.addComponentOrReplace(redMat)
            northPlane.addComponentOrReplace(redMat)
            southPlane.addComponentOrReplace(redMat)
            eastPlane.addComponentOrReplace(redMat)
            westPlane.addComponentOrReplace(redMat)
            topPlane.addComponentOrReplace(redMat)
        },
        {
            hoverText: "Switch to Red"
        }
    )
)

orangeButton.addComponent(
    new OnPointerDown(
        (e) => {
            floorPlane.addComponentOrReplace(orangeMat)
            northPlane.addComponentOrReplace(orangeMat)
            southPlane.addComponentOrReplace(orangeMat)
            eastPlane.addComponentOrReplace(orangeMat)
            westPlane.addComponentOrReplace(orangeMat)
            topPlane.addComponentOrReplace(orangeMat)
        },
        {
            hoverText: "Switch to Orange"
        }
    )
)

yellowButton.addComponent(
    new OnPointerDown(
        (e) => {
            floorPlane.addComponentOrReplace(yellowMat)
            northPlane.addComponentOrReplace(yellowMat)
            southPlane.addComponentOrReplace(yellowMat)
            eastPlane.addComponentOrReplace(yellowMat)
            westPlane.addComponentOrReplace(yellowMat)
            topPlane.addComponentOrReplace(yellowMat)
        },
        {
            hoverText: "Switch to Yellow"
        }
    )
)

greenButton.addComponent(
    new OnPointerDown(
        (e) => {
            floorPlane.addComponentOrReplace(greenMat)
            northPlane.addComponentOrReplace(greenMat)
            southPlane.addComponentOrReplace(greenMat)
            eastPlane.addComponentOrReplace(greenMat)
            westPlane.addComponentOrReplace(greenMat)
            topPlane.addComponentOrReplace(greenMat)
        },
        {
            hoverText: "Switch to Green"
        }
    )
)

blueButton.addComponent(
    new OnPointerDown(
        (e) => {
            floorPlane.addComponentOrReplace(blueMat)
            northPlane.addComponentOrReplace(blueMat)
            southPlane.addComponentOrReplace(blueMat)
            eastPlane.addComponentOrReplace(blueMat)
            westPlane.addComponentOrReplace(blueMat)
            topPlane.addComponentOrReplace(blueMat)
        },
        {
            hoverText: "Switch to Blue"
        }
    )
)

purpleButton.addComponent(
    new OnPointerDown(
        (e) => {
            floorPlane.addComponentOrReplace(purpleMat)
            northPlane.addComponentOrReplace(purpleMat)
            southPlane.addComponentOrReplace(purpleMat)
            eastPlane.addComponentOrReplace(purpleMat)
            westPlane.addComponentOrReplace(purpleMat)
            topPlane.addComponentOrReplace(purpleMat)
        },
        {
            hoverText: "Switch to Purple"
        }
    )
)

whiteButton.addComponent(
    new OnPointerDown(
        (e) => {
            floorPlane.addComponentOrReplace(whiteMat)
            northPlane.addComponentOrReplace(whiteMat)
            southPlane.addComponentOrReplace(whiteMat)
            eastPlane.addComponentOrReplace(whiteMat)
            westPlane.addComponentOrReplace(whiteMat)
            topPlane.addComponentOrReplace(whiteMat)
        },
        {
            hoverText: "Switch to White"
        }
    )
)

greyButton.addComponent(
    new OnPointerDown(
        (e) => {
            floorPlane.addComponentOrReplace(greyMat)
            northPlane.addComponentOrReplace(greyMat)
            southPlane.addComponentOrReplace(greyMat)
            eastPlane.addComponentOrReplace(greyMat)
            westPlane.addComponentOrReplace(greyMat)
            topPlane.addComponentOrReplace(greyMat)
        },
        {
            hoverText: "Switch to Grey"
        }
    )
)

blackButton.addComponent(
    new OnPointerDown(
        (e) => {
            floorPlane.addComponentOrReplace(blackMat)
            northPlane.addComponentOrReplace(blackMat)
            southPlane.addComponentOrReplace(blackMat)
            eastPlane.addComponentOrReplace(blackMat)
            westPlane.addComponentOrReplace(blackMat)
            topPlane.addComponentOrReplace(blackMat)
        },
        {
            hoverText: "Switch to Black"
        }
    )
)