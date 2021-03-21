class manipulateOverlay {

    styleArrayToString(arr) {
        let sstring = ""

        for (let i = 0; arr.length > i; i++) {
            sstring = sstring + arr[i] + ";"
        }
        return sstring
    }

    addComponent(c) {
        let style = ["position: absolute", "top:0px"]
        c.setStyle(this.styleArrayToString(style))
    }
}

export
default new manipulateOverlay