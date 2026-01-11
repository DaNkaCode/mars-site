export class PlaceholderHandler {
    constructor() {
        this.inputsElements = document.querySelectorAll('input[type="text"], input[type="number"]');

        this.inputsElements.forEach(input => {
            const originalPlaceholderText = input.getAttribute("placeholder");
            input.setAttribute("placeholder", originalPlaceholderText + " ");
        });

        this.originalPlaceholdersText = {};
        this.intervalIDs = {};

        this.init();
    }

    getTextWidth(text, font) {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        
        context.font = font;

        const metrics = context.measureText(text);

        return metrics.width;
    }


    checkPlaceholdersSize() {
        for (let id in this.intervalIDs) {
            console.log(id);
            clearInterval(this.intervalIDs[id]);
        }

        this.intervalIDs = {};

        this.inputsElements.forEach(input => {
            const originalPlaceholderText = input.getAttribute("placeholder");
            console.log('*****' + originalPlaceholderText);

            const inputID = input.id;

            if(!this.originalPlaceholdersText[inputID]) {
                this.originalPlaceholdersText[inputID] = originalPlaceholderText;
            }

            const inputWidth = input.clientWidth;
            const textWidth = this.getTextWidth(originalPlaceholderText, getComputedStyle(input).font);

            if(textWidth > inputWidth && !this.intervalIDs[input]) {
                this.intervalIDs[inputID] = setInterval(() => {
                    const placeholderText = input.getAttribute("placeholder");
                    const scrolledText = placeholderText.substring(1) + placeholderText[0];

                    input.setAttribute("placeholder", scrolledText);
                }, 150)
            }
            else {
                input.setAttribute("placeholder", this.originalPlaceholdersText[inputID]);
            }
        })
    }

    init() {
        window.addEventListener("resize", () => {
            this.checkPlaceholdersSize();
        });

        this.checkPlaceholdersSize();
    }
}