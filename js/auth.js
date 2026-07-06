const Auth = {

    init() {

        this.bindEvents();

    },

    bindEvents() {

        const loginBtn = document.getElementById("loginBtn");
        const signupBtn = document.getElementById("signupBtn");

        if(loginBtn){

            loginBtn.onclick = () => {

                this.showLogin();

            };

        }

        if(signupBtn){

            signupBtn.onclick = () => {

                this.showSignup();

            };

        }

    },

    showLogin(){

        App.render(`

        <div class="auth-page">

            <div class="auth-card">

                <h2>Login</h2>

                <p>Welcome back.</p>

                <input
                    class="input"
                    id="loginEmail"
                    type="email"
                    placeholder="Email"
                >

                <input
                    class="input"
                    id="loginPassword"
                    type="password"
                    placeholder="Password"
                >

                <button class="primary-btn" id="loginSubmit">
                    Login
                </button>

                <button class="secondary-btn" id="backLanding">
                    Back
                </button>

            </div>

        </div>

        `);

        this.bindLogin();

    },

    showSignup(){

        App.render(`

        <div class="auth-page">

            <div class="auth-card">

                <h2>Create Account</h2>

                <p>Let's get you started.</p>

                <input
                    class="input"
                    id="signupName"
                    placeholder="Full Name"
                >

                <input
                    class="input"
                    id="signupEmail"
                    type="email"
                    placeholder="Email"
                >

                <input
                    class="input"
                    id="signupPassword"
                    type="password"
                    placeholder="Password"
                >

                <button class="primary-btn" id="signupSubmit">
                    Create Account
                </button>

                <button class="secondary-btn" id="backLanding">
                    Back
                </button>

            </div>

        </div>

        `);

        this.bindSignup();

    },

   bindLogin(){

    document.getElementById("backLanding").onclick = () => {

        App.showLanding();

    };

    document.getElementById("loginSubmit").onclick = async () => {

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;

        if(!email || !password){
            alert("Please enter your email and password.");
            return;
        }

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if(error){
            alert(error.message);
            return;
        }

        App.currentUser = data.user;

        Dashboard.show();

    };

},

bindSignup(){

    document.getElementById("backLanding").onclick = () => {

        App.showLanding();

    };

    document.getElementById("signupSubmit").onclick = async () => {

        const name = document.getElementById("signupName").value.trim();
        const email = document.getElementById("signupEmail").value.trim();
        const password = document.getElementById("signupPassword").value;

        if(!name || !email || !password){
            alert("Please fill in all fields.");
            return;
        }

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    full_name: name
                }
            }
        });

        if(error){
            alert(error.message);
            return;
        }

        App.currentUser = data.user;

        Dashboard.show();

    };

}
