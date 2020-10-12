<template>
    <div @mouseover="hover = true" @mouseleave="hover=false" class="highlight">
        <div v-show="showMenu" class="menu" :style="{ left: `${x}px`, top: `${y}px`}" @mousedown.prevent="">
            <span v-show="possibleHighlight" class="item" @mousedown.prevent="highlight()">Highlight</span> <!-- You can add more buttons here -->
            <span v-show="possibleDelete" class="item" @mousedown.prevent="deselect()">Deselect</span>
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
                text: '',
                hover: false,
                possibleHighlight: true,
                possibleDelete: false,
            }
        },
        props: {
            id: String
        },
        computed: {
            highlightableEl() {
                return this.$slots.default[0].elm
            },
            count() {
                return this.$store.state.highlight.count;
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
                console.log(this.hover);
                const selection = window.getSelection()
                const selectionRange = selection.getRangeAt(0) // startNode is the element that the selection starts in
                const startNode = selectionRange.startContainer.parentNode    // endNode is the element that the selection ends in
                const endNode = selectionRange.endContainer.parentNode    // if the selected text is not part of the highlightableEl (i.e. <p>)    // OR    // if startNode !== endNode (i.e. the user selected multiple paragraphs)    // Then    // Don't show the menu (this selection is invalid)
                if (startNode.parentNode.className !== "highlightContent" && startNode.parentNode.parentNode.className !== "highlightContent" || endNode.parentNode.className !== "highlightContent" && endNode.parentNode.parentNode.className !== "highlightContent") {
                    this.showMenu = false
                    return
                }
                if (selection == "") {
                    this.showMenu = false
                    return
                }
                if (this.hover) {
                    this.possibleDelete = false;
                    this.possibleHighlight = true;
                    if (startNode.parentNode.parentNode.parentNode.classList.contains("highlight")) {
                        var starthighlight = startNode.parentNode.parentNode.parentNode.classList[1];
                    } else {
                        starthighlight = startNode.parentNode.parentNode.classList[1];
                    }
                    if (endNode.parentNode.parentNode.parentNode.classList.contains("highlight")) {
                        var endhighlight = endNode.parentNode.parentNode.parentNode.classList[1];
                    } else {
                        endhighlight = endNode.parentNode.parentNode.classList[1];
                    }
                    if (starthighlight !== endhighlight) {
                        this.showMenu = false
                        return
                    }
                    const { x, y, width } = selectionRange.getBoundingClientRect()    // If width === 0 (i.e. no selection)    // Then, hide the menu
                    console.log(selectionRange.getBoundingClientRect());
                    if (startNode.parentNode.className == "highlightContent") {
                        var highlightPosition = startNode.parentNode.parentNode.getBoundingClientRect();
                    } else {
                        highlightPosition = startNode.parentNode.parentNode.parentNode.getBoundingClientRect();
                    }
                    if (!width) {
                        this.showMenu = false
                        return
                    }
                    // Finally, if the selection is valid,    // set the position of the menu element,    // set selectedText to content of the selection    // then, show the menu
                    if (startNode.classList.contains("highlightText")) {
                        this.possibleDelete = true;
                    }
                    if (endNode.classList.contains("highlightText")) {
                        this.possibleDelete = true;
                    }
                    var myFocusNodeValue = window.getSelection().focusNode.nodeValue;
                    var myAnchorNodeValue = window.getSelection().anchorNode.nodeValue;
                    if (myAnchorNodeValue == myFocusNodeValue) {
                        if (startNode.classList.contains("highlightText")) {
                            this.possibleHighlight = false;
                        }
                    } else {
  
                        if (startNode.parentNode.innerHTML.includes('class="highlightText"')) {
                            this.possibleDelete = true;
                        }
                   
                    } 
                    this.x = (x - highlightPosition.x) + (width / 2)
                    this.y = (y - 10) - highlightPosition.y;
                    this.showMenu = true
                } else {
                    this.showMenu = false;
                }
            },
            handleAction(action) {
                this.$emit(action, this.selection)
            },
            deselect() {
                var selection = window.getSelection();               
                const selectionRange = selection.getRangeAt(0)
                var myAnchorNodeValue = window.getSelection().anchorNode.nodeValue;
                var myAnchorOffset = window.getSelection().anchorOffset
                var myFocusOffset = window.getSelection().focusOffset
                var myFocusNodeValue = window.getSelection().focusNode.nodeValue;
                var startFront = true;
                if (myAnchorNodeValue == myFocusNodeValue) {
                    var text = myAnchorNodeValue.slice(myAnchorOffset, myFocusOffset);
                    var text2 = myAnchorNodeValue.slice(myFocusOffset, myAnchorOffset);
                    var newText = text.replaceAll(" ", "");
                    var newText2 = text2.replaceAll(" ", "");
                    var newSelectedText = selection.toString().replaceAll(" ", "");
                    if (newText == newSelectedText) {
                        startFront = true;
                    } else if (newText2 == newSelectedText) {
                        startFront = false;
                    }
                } else {
                    var position = selection.anchorNode.compareDocumentPosition(selection.focusNode);
                    if (position & Node.DOCUMENT_POSITION_FOLLOWING) {
                        startFront = true;
                    } else if (position & Node.DOCUMENT_POSITION_PRECEDING) {
                        startFront = false;
                    }
                }
                if (startFront) {
                
                    var myFocusNodeLength = window.getSelection().focusNode.nodeValue.length;
                    if (window.getSelection().anchorNode.parentElement.className == "highlightText") {
                        window.getSelection().anchorNode.nodeValue = myAnchorNodeValue.slice(0, myAnchorOffset) + "[Delete]" + myAnchorNodeValue.slice(myAnchorOffset);
                    } else {
                        window.getSelection().anchorNode.nodeValue = myAnchorNodeValue + "[delete]";
                    }
                    myFocusNodeValue = window.getSelection().focusNode.nodeValue;
                    if (window.getSelection().focusNode.nodeValue.length - myFocusNodeLength > 0) {
                        myFocusOffset += window.getSelection().focusNode.nodeValue.length - myFocusNodeLength;
                    }
                    if (window.getSelection().focusNode.parentElement.className == "highlightText") {
                        window.getSelection().focusNode.nodeValue = myFocusNodeValue.slice(0, myFocusOffset) + "[/Delete]" + myFocusNodeValue.slice(myFocusOffset);
                    } else {
                        window.getSelection().focusNode.nodeValue = "[deleteStart]" + myFocusNodeValue;
                    }
                    if (window.getSelection().anchorNode.parentElement.className == "highlightText" && window.getSelection().focusNode.parentElement.className == "highlightText") {
                        if (window.getSelection().anchorNode.parentElement != window.getSelection().focusNode.parentElement) {
                            window.getSelection().anchorNode.nodeValue = myAnchorNodeValue.slice(0, myAnchorOffset) + "[Delete]" + myAnchorNodeValue.slice(myAnchorOffset) + "[deleteSpan]";
                            window.getSelection().focusNode.nodeValue = "[deleteStartSpan]" + myFocusNodeValue.slice(0, myFocusOffset) + "[/Delete]" + myFocusNodeValue.slice(myFocusOffset);
                        }
                 }
                } else {
                    var myAnchorNodeLength = window.getSelection().anchorNode.nodeValue.length;
                    if (window.getSelection().focusNode.parentElement.className == "highlightText") {
                        window.getSelection().focusNode.nodeValue = myFocusNodeValue.slice(0, myFocusOffset) + "[Delete]" + myFocusNodeValue.slice(myFocusOffset);
                    } else {
                        window.getSelection().focusNode.nodeValue = myFocusNodeValue + "[delete]";
                    }
                    console.log(window.getSelection().focusNode.nodeValue);
                    myAnchorNodeValue = window.getSelection().anchorNode.nodeValue;
                    if (window.getSelection().anchorNode.nodeValue.length - myAnchorNodeLength > 0) {
                        myAnchorOffset += window.getSelection().anchorNode.nodeValue.length - myAnchorNodeLength;
                    }
                    if (window.getSelection().anchorNode.parentElement.className == "highlightText") {
                        window.getSelection().anchorNode.nodeValue = myAnchorNodeValue.slice(0, myAnchorOffset) + "[/Delete]" + myAnchorNodeValue.slice(myAnchorOffset);
                    } else {
                        window.getSelection().anchorNode.nodeValue = "[deleteStart]" + myAnchorNodeValue;
                    }
                    if (window.getSelection().focusNode.parentElement.className == "highlightText" && window.getSelection().anchorNode.parentElement.className == "highlightText") {
                        if (window.getSelection().anchorNode.parentElement != window.getSelection().focusNode.parentElement) {        
                            window.getSelection().focusNode.nodeValue = myFocusNodeValue.slice(0, myFocusOffset) + "[Delete]" + myFocusNodeValue.slice(myFocusOffset) + "[deleteSpan]";
                            window.getSelection().anchorNode.nodeValue = "[deleteStartSpan]" + myAnchorNodeValue.slice(0, myAnchorOffset) + "[/Delete]" + myAnchorNodeValue.slice(myAnchorOffset);
                        }
                      
                    }
                }
                console.log(document.getElementsByClassName("highlightContent")[0].innerHTML);
                var hightlightLength = document.getElementsByClassName("highlightContent").length;
                if (selectionRange.commonAncestorContainer.className != "highlightContent") {
                    for (var i = 0; i < hightlightLength; i++) {
                        var newClassName = document.getElementsByClassName("highlightContent")[i].innerHTML.replace('[/Delete]</span>', '').replace('<span class="highlightText">[Delete]', ''). replace('[/Delete]', '<span class="highlightText">').replace('[Delete]', '</span>')
                            .replace('[delete]<span class="highlightText">', '').replace('</span>[deleteStart]', '').replace('[deleteSpan]</span>', '').replace('[deleteSpan]<br data-v-ae0e2b74="" data-v-49f8f50e=""></span>', '').replace('<span class="highlightText">[deleteStartSpan]', '');
                       document.getElementsByClassName("highlightContent")[i].innerHTML = newClassName;
                    }
                    this.showMenu = false;
                    this.possibleDelete = false;
                    this.possibleHighlight = true;
                } else {      
                    for (var j = 0; j < hightlightLength; j++) {
                        var newClassName2 = document.getElementsByClassName("highlightContent")[j].innerHTML.replace('[/Delete]</span>', '').replace('<span class="highlightText">[Delete]', '').replace('[/Delete]', '<span class="highlightText">').replace('[Delete]', '</span>').replace('[delete]<span class="highlightText">', '')
                            .replace('</span>[deleteStart]', '').replace('[deleteSpan]</span>', '').replace('[deleteSpan]<br data-v-ae0e2b74="" data-v-49f8f50e=""></span>', '').replace('<span class="highlightText">[deleteStartSpan]', '');
                        document.getElementsByClassName("highlightContent")[j].innerHTML = newClassName2;
                    }
                    this.showMenu = false;
                    this.possibleDelete = false;
                    this.possibleHighlight = true;
                }
                this.updateStore(this.id);
            },
            highlight() {
                var selection = window.getSelection();
                const selectionRange = selection.getRangeAt(0)
                var myAnchorNodeValue = window.getSelection().anchorNode.nodeValue;
                var myAnchorOffset = window.getSelection().anchorOffset
                var myFocusOffset = window.getSelection().focusOffset
                var myFocusNodeValue = window.getSelection().focusNode.nodeValue;
                var startFront = true;
                if (myAnchorNodeValue == myFocusNodeValue) {
                    var text = myAnchorNodeValue.slice(myAnchorOffset, myFocusOffset);
                    var text2 = myAnchorNodeValue.slice(myFocusOffset, myAnchorOffset);
                    var newText = text.replaceAll(" ", "");
          
                    var newText2 = text2.replaceAll(" ", "");
                    var newSelectedText = selection.toString().replaceAll(" ", "");
     
                    if (newText == newSelectedText ) {
                        startFront = true;
                    } else if (newText2 == newSelectedText) {
                        startFront = false;
                    }
                } else {
                    var position = selection.anchorNode.compareDocumentPosition(selection.focusNode);
                    if (position & Node.DOCUMENT_POSITION_FOLLOWING) {
                        startFront = true;
                    } else if (position & Node.DOCUMENT_POSITION_PRECEDING) {
                        startFront = false;
                    }
                }
                if (startFront) {
                    var myFocusNodeLength = window.getSelection().focusNode.nodeValue.length;
                    if (window.getSelection().anchorNode.parentElement.className != "highlightText") {
                        window.getSelection().anchorNode.nodeValue = myAnchorNodeValue.slice(0, myAnchorOffset) + "[Highlight]" + myAnchorNodeValue.slice(myAnchorOffset);
                    } else {
                        window.getSelection().anchorNode.nodeValue = myAnchorNodeValue + "[delete]";
                    }
                    myFocusNodeValue = window.getSelection().focusNode.nodeValue;
                    if (window.getSelection().focusNode.nodeValue.length - myFocusNodeLength > 0) {
                        myFocusOffset += window.getSelection().focusNode.nodeValue.length - myFocusNodeLength;
                    }
                    if (window.getSelection().focusNode.parentElement.className != "highlightText") {
                        window.getSelection().focusNode.nodeValue = myFocusNodeValue.slice(0, myFocusOffset) + "[/Highlight]" + myFocusNodeValue.slice(myFocusOffset);
                    } else {
                        window.getSelection().focusNode.nodeValue = "[deleteStart]" + myFocusNodeValue;
                    }
                } else {
                    var myAnchorNodeLength = window.getSelection().anchorNode.nodeValue.length;
                    if (window.getSelection().focusNode.parentElement.className != "highlightText") {
                        window.getSelection().focusNode.nodeValue = myFocusNodeValue.slice(0, myFocusOffset) + "[Highlight]" + myFocusNodeValue.slice(myFocusOffset);
                    } else {
                        window.getSelection().focusNode.nodeValue = myFocusNodeValue + "[delete]";
                    }
                    console.log(window.getSelection().focusNode.nodeValue);
                        myAnchorNodeValue = window.getSelection().anchorNode.nodeValue;
                    if (window.getSelection().anchorNode.nodeValue.length - myAnchorNodeLength > 0) {
                        myAnchorOffset += window.getSelection().anchorNode.nodeValue.length - myAnchorNodeLength;
                    }
                    if (window.getSelection().anchorNode.parentElement.className != "highlightText") {
                        window.getSelection().anchorNode.nodeValue = myAnchorNodeValue.slice(0, myAnchorOffset) + "[/Highlight]" + myAnchorNodeValue.slice(myAnchorOffset);
                    } else {
                        window.getSelection().anchorNode.nodeValue = "[deleteStart]" + myAnchorNodeValue;
                    }
                }
                console.log(document.getElementsByClassName("highlightContent")[0].innerHTML);
                var hightlightLength = document.getElementsByClassName("highlightContent").length;
                if (selectionRange.commonAncestorContainer.className != "highlightContent") {
                    for (var i = 0; i < hightlightLength; i++) {
                        var newClassName = document.getElementsByClassName("highlightContent")[i].innerHTML.replace('[Highlight]', '<span class="highlightText">').replace('[/Highlight]', '</span>').replace('[delete]</span>', '').replace('<span class="highlightText">[deleteStart]', '');
                        document.getElementsByClassName("highlightContent")[i].innerHTML = newClassName;
                    }
                    this.showMenu = false;
                    this.possibleDelete = false;
                    this.possibleHighlight = true;
                } else {
  
                    var innerText = "[Startdiv]" + selectionRange.commonAncestorContainer.lastChild.innerHTML;
                    selectionRange.commonAncestorContainer.lastChild.innerHTML = innerText;
                    console.log(document.getElementsByClassName("highlightContent")[0].innerHTML);
                    for (var j = 0; j < hightlightLength; j++) {
                        var newClassName2 = document.getElementsByClassName("highlightContent")[j].innerHTML.replace('[Highlight]', '<span class="highlightText">').replace('[/Highlight]', '</span>').replace('[delete]</span>', '').replace('<span class="highlightText">[deleteStart]', '')
                            .replace('[Startdiv]', '<span class="highlightText">').replace('[delete]', '');
                        document.getElementsByClassName("highlightContent")[j].innerHTML = newClassName2;
                    }
                    this.showMenu = false;
                    this.possibleDelete = false;
                    this.possibleHighlight = true;
                }
                this.updateStore();
                
                // this.$store.dispatch('highlight/addHighlight', { text: selection.toString(), id: this.id });
            },
            updateStore() {
                var hightlightLength = this.$vnode.elm.getElementsByClassName("highlightText").length;
                var highlightArray = [];
                for (var j = 0; j < hightlightLength; j++) {
                    var highlightElement = this.$vnode.elm.getElementsByClassName("highlightText")[j].innerHTML;
                    highlightArray.push(highlightElement);
                   
                }
                this.$store.dispatch('highlight/addHighlight', { text: highlightArray, id: this.id });
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