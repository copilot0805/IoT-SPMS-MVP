document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.hotspot').forEach(element => {
        element.addEventListener('click', () => {
            const action = element.dataset.action;
            // Process action: mock or call API
            console.log('Gate action:', action);

            if (action === 'enter') {
                // TODO: update to the real enter-gate page when available
                window.location.href = './uc03_idle_enter.html';
                return;
            }

            if (action === 'exit') {
                // TODO: update to the real exit-gate page when available
                window.location.href = './uc03_idle_exit.html';
                return;
            }
        })
    })
})