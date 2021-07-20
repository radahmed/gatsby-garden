<%*
//v1.0: Original script

//Get the content of the new note
let fileContent = await tp.system.prompt("New Note Content");

//Leave this blank if you want to use the default file path location (set to '/' to use root of vault)
let folderOverride = '/';

//Name of the note
let qcFileName = await tp.system.prompt("Note Title");

let qcFolderLocation;
if(folderOverride) {
    qcFolderLocation = folderOverride;
} else {
    if(this.app.vault.config.newFileLocation != 'current') {
        qcFolderLocation = this.app.fileManager.getNewFileParent().path;
    } else {
        qcFolderLocation = '/';
    }
}
if(qcFolderLocation != ''){qcFolderLocation = qcFolderLocation + '/'}
qcFolderLocation = qcFolderLocation.replace(/\/\//g,'/');
if(qcFolderLocation == '/'){qcFolderLocation = ''}
if(qcFolderLocation.startsWith('/')){qcFolderLocation = qcFolderLocation.substring(1)}

let qcFilePath = qcFolderLocation + qcFileName + '.md';
let qcFile = this.app.vault.getAbstractFileByPath(qcFilePath);
if(!qcFile) {
    qcFile = await this.app.vault.create(qcFilePath, '');
}

if(qcFile) { this.app.vault.modify(qcFile, fileContent); }
%>