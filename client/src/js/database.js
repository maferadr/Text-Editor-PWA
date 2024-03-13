import { openDB } from 'idb';

const initDb = async () =>
    openDB('jate', 1, {
        upgrade(db){
            if(db.objectStoreNames.contains('jate')){
                console.log(`jate database already exists`);
                return;
            }
            db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
            console.log(`jate database created!`);
        },
    });

    //Add logic to a method that accepts some content and adds it to the database.
    export const putDb = async (content) => {
        console.log(`Adding content to the database`);
        
        //Connection to the database created
        const contentDb = await openDB('jate', 1);
        //New transaction and parameters are being specified
        const tx = contentDb.transaction('jate', 'readwrite');
        //Open up the desired object store.
        const store = tx.objectStore('jate');
        // .add() method on the store and pass in the content.
        const request = store.add( { content: content });
        //GET confirmation of the request.
        const result = await request;
        console.log(`Data saved to the database`, result);
    };

    //Add logic for a method that gets all the content from the database.
    export const getDb = async () =>{
        console.log(`GET all data from the database`);

        const contentDb = await openDB('jate', 1);
        // New transaction to specify the database and data privileges/
        const tx = contentDb.transaction('jate', 'readonly');
        //Object store
        const store = tx.objectStore('jate');
        const request = store.getAll();

        //Confirmation to that request
        const result = await request;
        return result;
    };

    //Call the function to initilize the database
    initDb();