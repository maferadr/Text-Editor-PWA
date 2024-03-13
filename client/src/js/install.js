const btnInstall = document.getElementById('buttonInstall');

//Logic for installing the PWA

//Deferred installation allows the developer to display the installation prompt only when the user performs certain action.
window.addEventListener('beforeinstallprompt', (event)=>{
    //Store the triggered events
    window.deferredPrompt = event;
    //Remove the hidden class from the button
    btnInstall.classList.toggle('hidden', false);
});

btnInstall.addEventListener('click', async () =>{
    const promptEvent = window.deferredPrompt;
    if(!promptEvent){
        return;
    };

    //Show prompt
    promptEvent.prompt();
    //Reset the deferred prompt variable, it can only be used once.
    window.deferredPrompt = null;
    btnInstall.classList.toggle('hidden', true);

});

window.addEventListener('appinstalled', (event) =>{
    //clear prompt
    window.deferredPrompt = null;
})