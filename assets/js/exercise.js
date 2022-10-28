var codeBlock = document.getElementById('codeBlock');
var codeContent = $.trim($('#codeBlock').text());
$('#codeBlock').html('');
$("#codeBlock").height(400);

// create
var editorCodeBlock = monaco.editor.create(codeBlock, {
    value: codeContent,
    language: '',
    theme: 'vs',
    lineNumber: 'on',
    glyphMargin: false,
    vertical: 'auto',
    horizontal: 'auto',
    verticalScrollbarSize: 10,
    horizontalScrollbarSize: 10,
    scrollBeyondLastLine: false,
    readOnly: false,
    automaticLayout: true,
    minimap: {
        enabled: false
    },
    lineHeight: 19,

});

//change theme
var uiSelector = document.querySelector("#ui_Selector");
uiSelector.addEventListener('change', (event) => {
    monaco.editor.setTheme(event.target.value);
});

//getInput
var input = "";
codeBlock.addEventListener('input', (event) => {
    input = event.target.value;
    console.log(input);
});
console.log(typeof (input));

//change language
var languageSelector = document.querySelector("#language_Selector");
languageSelector.addEventListener('change', (event) => {
    codeBlock.textContent = "";
    var editorCodeBlock = monaco.editor.create(codeBlock, {
        value: input,
        language: event.target.value,
        theme: uiSelector.value,
        lineNumber: 'on',
        glyphMargin: false,
        vertical: 'auto',
        horizontal: 'auto',
        verticalScrollbarSize: 10,
        horizontalScrollbarSize: 10,
        scrollBeyondLastLine: false,
        readOnly: false,
        automaticLayout: true,
        minimap: {
            enabled: false
        },
        lineHeight: 19,
    });
});


//reset code block
var btnReset = document.querySelector("#btn-reset");
btnReset.addEventListener('click', (event) => {
    var oldLanguage = languageSelector.value;
    codeBlock.textContent = "";
    var editorCodeBlock = monaco.editor.create(codeBlock, {
        value: codeContent,
        language: oldLanguage,
        theme: uiSelector.value,
        lineNumber: 'on',
        glyphMargin: false,
        vertical: 'auto',
        horizontal: 'auto',
        verticalScrollbarSize: 10,
        horizontalScrollbarSize: 10,
        scrollBeyondLastLine: false,
        readOnly: false,
        automaticLayout: true,
        minimap: {
            enabled: false
        },
        lineHeight: 19,
    });
});