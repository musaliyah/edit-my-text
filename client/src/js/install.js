const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.defferedPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler oxn the `butInstall` element
butInstall.addEventListener('click', async () => {
    const start = window.defferedPrompt;

    if(!start) {
        return;
    }
    start.prompt();

    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
