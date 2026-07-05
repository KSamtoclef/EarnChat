const App = {
    currentScreen: "loading",
    currentUser: null,

    init() {
        this.showLoading();

        setTimeout(() => {
            this.restoreSession();
        }, 2500);
    },

    async restoreSession() {

        // Supabase session check will be added here later

        this.showLanding();

    },

    render(html) {
        document.getElementById("app").innerHTML = html;
    },

    showLoading() {

        this.currentScreen = "loading";

        this.render(`
            <div class="loading-screen">

                <div class="logo">
                    EarnChat
                </div>

                <div class="loader"></div>

                <div class="loading-status" id="status">
                    Connecting...
                </div>

            </div>
        `);

        const messages = [
            "Connecting...",
            "Checking Session...",
            "Loading Account...",
            "Preparing Dashboard..."
        ];

        let index = 0;

        const interval = setInterval(() => {

            index++;

            if(index >= messages.length){

                clearInterval(interval);
                return;

            }

            const status=document.getElementById("status");

            if(status){

                status.textContent=messages[index];

            }

        },600);

    },

    showLanding() {

        this.currentScreen="landing";

        this.render(`

        <section class="landing">

            <div class="hero">

                <h1>EarnChat</h1>

                <p>
                    Chat with AI companions, complete tasks and earn rewards.
                </p>

                <button id="startButton">
                    Get Started
                </button>

            </div>

        </section>

        `);

        document
            .getElementById("startButton")
            .addEventListener("click",()=>{

                this.showAuth();

            });

    },

    showAuth(){

        this.currentScreen="auth";

        this.render(`

        <div class="auth-page">

            <div class="auth-card">

                <h2>Welcome</h2>

                <p>Sign in or create an account to continue.</p>

                <button class="primary-btn" id="loginBtn">
                    Login
                </button>

                <button class="secondary-btn" id="signupBtn">
                    Create Account
                </button>

            </div>

        </div>

        `);

        document.getElementById("loginBtn").onclick=()=>{

            alert("Next: Login Screen");

        };

        document.getElementById("signupBtn").onclick=()=>{

            alert("Next: Signup Screen");

        };

    }

};

document.addEventListener("DOMContentLoaded",()=>{

    App.init();

});
