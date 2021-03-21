

export
default {
    name: 'DraggableDiv',
    data: function() {
        return {
            positions: {
                clientX: undefined,
                clientY: undefined,
                movementX: 0,
                movementY: 0
            }
        }
    },
    methods: {
        dragMouseDown: function(event) {
          console.log("a")
            event.preventDefault();
          this.positions.clientX = event.clientX;
          this.positions.clientY = event.clientY; document.onmousemove =
            this.elementDrag; document.onmouseup =
              this.closeDragElement;
        },
        elementDrag: function(event) {
           console.log("b")
          event.preventDefault()

          this.positions.movementX =
            this.positions.clientX - event.clientX

          this.positions.movementY = this.positions.clientY - event.clientY

          this.positions.clientX = event.clientX
          this.positions.clientY = event.clientY
            this.$refs.draggableContainer.style.top = (this.$refs.draggableContainer.offsetTop - this.positions.movementY) + 'px'
            this.$refs.draggableContainer.style.left = (this.$refs.draggableContainer.offsetLeft - this.positions.movementX) + 'px'
        },
        closeDragElement() {
            document.onmouseup = null

          document.onmousemove = null
        }
    }
}