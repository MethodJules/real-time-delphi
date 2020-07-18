
<template>
    <div class="highlight">
        <div v-show="showMenu" class="menu" :style="{ left: `${x}px`, top: `${y}px`}" @mousedown.prevent="">
            <span class="item" @mousedown.prevent="handleAction('highlight')">Share</span>
            <span class="item" @mousedown.prevent="highlight()">Highlight</span> <!-- You can add more buttons here -->
        
        </div><!-- The insterted text should be displayed here --> 
        <br /> 
        <div class="highlightContent">
            <slot />
        </div>
        
    </div>
</template>


<script>
    export default {
        data() {           
            return {
                x: 0,
                y: 0,
                showMenu: false,
                selectedText: '',
                text: ''
            }
        },
        computed: {
            highlightableEl() {
                
                return this.$slots.default[0].elm

            }

        },


        mounted() {
            window.addEventListener('mouseup', this.onMouseup)
        },

        beforeDestroy() {
            window.removeEventListener('mouseup', this.onMouseup)
        },
        methods: {




            onMouseup() {
                
                const selection = window.getSelection()
                console.log("Test");
                console.log(selection);

                const selectionRange = selection.getRangeAt(0) // startNode is the element that the selection starts in
                const startNode = selectionRange.startContainer.parentNode    // endNode is the element that the selection ends in
                const endNode = selectionRange.endContainer.parentNode    // if the selected text is not part of the highlightableEl (i.e. <p>)    // OR    // if startNode !== endNode (i.e. the user selected multiple paragraphs)    // Then    // Don't show the menu (this selection is invalid)

                if (startNode.parentNode.className !== "highlightContent" && startNode.parentNode.parentNode.className !== "highlightContent" || endNode.parentNode.className !== "highlightContent" && endNode.parentNode.parentNode.className !== "highlightContent") {
                    alert("Test");
                    this.showMenu = false
                    return
                }

                if (selection == "") {
                    this.showMenu = false
                    return             
                }
                /*
                if (!startNode.isSameNode(this.highlightableEl) || !startNode.isSameNode(endNode)) {
                    this.showMenu = false
                    return
                }    // Get the x, y, and width of the selection
                */
                const { x, y, width } = selectionRange.getBoundingClientRect()    // If width === 0 (i.e. no selection)    // Then, hide the menu


                console.log(selectionRange.getBoundingClientRect());

                var highlightPosition = document.getElementsByClassName("highlight")[0].getBoundingClientRect();



                if (!width) {
                    this.showMenu = false
                    return
                }    // Finally, if the selection is valid,    // set the position of the menu element,    // set selectedText to content of the selection    // then, show the menu

                this.x = (x - highlightPosition.x) + (width / 2)

                this.y = (y - 10) - highlightPosition.y; 
         
                this.showMenu = true
            }, 

            handleAction(action) {

                this.$emit(action, this.selection)
            },

            highlight() {
                
                var selection = window.getSelection();

                var lengthSelection = selection.toString().length;

                console.log(lengthSelection);
                    
                var myAnchorNodeValue = window.getSelection().anchorNode.nodeValue;
          
                var myAnchorOffset = window.getSelection().anchorOffset
                var myFocusOffset = window.getSelection().focusOffset

               //  var start = myAnchorNodeValue.slice(myAnchorOffset);
                /*
                if (start.length <= lengthSelection) {

                    console.log("Test");
                } else {
                    var check = start.substring(0, lengthSelection);
                    alert(check);
                }
                */
                var myFocusNodeLength = window.getSelection().focusNode.nodeValue.length;

                if (window.getSelection().anchorNode.parentElement.className != "highlightText") {
                    window.getSelection().anchorNode.nodeValue = myAnchorNodeValue.slice(0, myAnchorOffset) + "[Highlight]" + myAnchorNodeValue.slice(myAnchorOffset);
                } else {
                    window.getSelection().anchorNode.nodeValue = myAnchorNodeValue + "[delete]";
                }
 
                var myFocusNodeValue = window.getSelection().focusNode.nodeValue;

                if (window.getSelection().focusNode.nodeValue.length - myFocusNodeLength > 0) {
                    myFocusOffset += window.getSelection().focusNode.nodeValue.length - myFocusNodeLength;
                }

                this.selectedText = {
                    start: selection.anchorOffset,
                    end: selection.focusOffset,
                    text: selection.toString()
                }

                if (window.getSelection().focusNode.parentElement.className != "highlightText") {
                    window.getSelection().focusNode.nodeValue = myFocusNodeValue.slice(0, myFocusOffset) + "[/Highlight]" + myFocusNodeValue.slice(myFocusOffset);
                } else {
                    window.getSelection().focusNode.nodeValue = "[deleteStart]" + myFocusNodeValue;
                }

                var newClassName = document.getElementsByClassName("highlightContent")[0].innerHTML.replace('[Highlight]', '<span class="highlightText">').replace('[/Highlight]', '</span>').replace('[delete]</span>', '').replace('<span class="highlightText">[deleteStart]', '');

                document.getElementsByClassName("highlightContent")[0].innerHTML = newClassName;

                
            }

        },
    }
</script>

<style scoped>

    .highlight {
        position: relative;
    }

        .menu {
            height: 30px;
            padding: 5px 10px;
            background: #333;
            border-radius: 3px;
            position: absolute;
            top: 0;
            left: 0;
            transform: translate(-50%, -100%);
            transition: 0.2s all;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .menu:after {
            content: '';
            position: absolute;
            left: 50%;
            bottom: -5px;
            transform: translateX(-50%);
            width: 0;
            height: 0;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-top: 6px solid #333;
        }
    
    .item {
        color: #FFF;
        cursor: pointer;
    }

        .item:hover {
            color: #1199ff;
        }

        .item + .item {
            margin-left: 10px;
        }
    
</style>
