const App = {
    initialized: false,
    currentUser: null,

    async init() {
        if (this.initialized) return;

        this.initialized = true;

        document.getElementById("app").innerHTML = `
            <div class="loading-screen">
                <div class="logo">EarnChat</div>

                <div class="loader"></div>

                <div class="loading-text" id="loadingText">
                    Connecting...
                </div>
            </div>
        `;

        const messages = [
            "Connecting...",
            "Checking session...",
            "Loading profile...",
            "Preparing dashboard..."
        ];

        let i = 0;

        const timer = setInterval(() => {
            i++;

            if (i < messages.length) {
                document.getElementById("loadingText").textContent = messages[i];
            } else {
                clearInterval(timer);

                // We'll replace this with Supabase session restore later
                this.showLanding();
            }
        }, 800);
    },

    showLanding() {
        document.getElementById("app").innerHTML = `
            <div class="landing-container">
                <h1>EarnChat</h1>

                <p>Chat. Earn. Withdraw.</p>

                <button id="startBtn">
                    Get Started
                </button>
            </div>
        `;

        document
            .getElementById("startBtn")
            .addEventListener("click", () => {
                alert("Next step: Login / Signup screen");
            });
    }
};

document.addEventListener("DOMContentLoaded", () => {
    App.init();
});
