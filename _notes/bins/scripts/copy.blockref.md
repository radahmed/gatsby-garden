<%*
function createBlockHash() {
    let result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 7; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
let id = createBlockHash();
let blockRef;

blockRef = `![[${tp.file.title}#^${id}]]`.split("\n").join("");
tR = tp.file.selection() + ` ^${id}`.split("\n").join("");
selectedText = blockRef;

navigator.clipboard.writeText(blockRef).then(text => text);
-%>