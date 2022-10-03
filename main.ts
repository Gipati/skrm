input.onButtonPressed(Button.A, function () {
    Udfordring = randint(1, 10)
    if (Udfordring == 1) {
        OLED.writeStringNewLine("Lav ti")
        OLED.writeString("spraellemaend")
        OLED.writeString("MUHAHAHAH!")
    } else if (Udfordring == 2) {
        OLED.clear()
        OLED.writeStringNewLine("Har du nogensinde lojet for dine venner?")
    } else if (Udfordring == 3) {
        OLED.clear()
        OLED.writeStringNewLine("Find en børnebog og sporg")
        OLED.writeString("bibliotekaren om han/hun ville")
        OLED.writeString("anbefale bogen")
        OLED.writeString("MUHAHAHAH!")
    } else {
    	
    }
})
let Udfordring = 0
OLED.init(128, 64)
OLED.writeStringNewLine("Hej og velkommen")
OLED.writeString("er du klar?")
basic.pause(5000)
OLED.clear()
