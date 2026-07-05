const Dashboard = {

    show() {

        App.render(`

        <div class="dashboard">

            <div class="dashboard-header">

                <h2>EarnChat</h2>

                <span>Welcome Back 👋</span>

            </div>

            <div class="balance-card">

                <h3>Available Balance</h3>

                <div class="balance" id="balance">
                    ₦0
                </div>

            </div>

            <div class="dashboard-actions">

                <button class="primary-btn" id="startChatBtn">
                    Start Chat
                </button>

                <button class="secondary-btn">
                    Withdraw
                </button>

            </div>

        </div>

        `);

        this.animateBalance(1500);

    },

    animateBalance(amount){

        let current = 0;

        const balance = document.getElementById("balance");

        const interval = setInterval(()=>{

            current += 25;

            balance.textContent =
                "₦" + current.toLocaleString();

            if(current >= amount){

                balance.textContent =
                    "₦" + amount.toLocaleString();

                clearInterval(interval);

            }

        },20);

    }

};
