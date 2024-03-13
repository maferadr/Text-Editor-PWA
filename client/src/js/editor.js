// Import the methods to save and get data from the indexedDB database
import { getDb, postDb } from "./database";
import { header } from './header';

export default class {
    constructor(){
        const localData = localStorage.getItem('content');

        //check if CodeMirror is laoded
        if(typeof CodeMirror ==='undefined'){
            throw new Error('CodeMirror is not loaded');
        }

        this.editor = CodeMirror(document.querySelector('#main'), {
            value: '',
            mode: 'javascript',
            theme: 'monokai',
            lineNumbers: true,
            lineWrapping: true,
            autofocus: true,
            indentUnit: 2,
            tabSize: 2,
        });

        //When the editor is ready, set the Value to whatever is stored in indexedDb or localdata.
        // Fall back to localStorage if nothing is being stored in indexedDb, and if neither it'll be save in the header.
        getDb().then((data)=>{
            console.info(`Loaded data from IndexedDb, injecting into the editor`);
            this.editor.setValue( data || localData || header );
        });

        this.editor.on('change', () =>{
            localStorage.setItem('content', this.editor.getValue());
        });

        //Save the content of the editor when the editor itself is loses focus.
        this.editor.on('blur', () =>{
            console.log(`The editor has lost focus`);
            putDb(localStorage.getItem('content'));
        });
    }
}