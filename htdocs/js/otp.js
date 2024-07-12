// var GeneratedOTP=Math.floor(Math.random()*999999)
// alert(GeneratedOTP)
// function OTPVerification(){
//     var EnteredOTP=document.getElementById("Enteredotp").value 
//     if(GeneratedOTP==EnteredOTP){
//         window.location.href="index.php"
//     }else{
//         document.getElementById("error").innerHTML="Incorrect OTP"
//     }
// }
// function ResendOTP(){
//     window.location.href="otp.php"
// }
var GeneratedOTP;

    function generateOTP() {
        GeneratedOTP = Math.floor(100000 + Math.random() * 900000); // Ensure a 6-digit OTP
        createNotification("Your OTP Code", "Your OTP is: " + GeneratedOTP, "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/075007f6-42d1-410f-9cfd-105699dc8c31/devzjrq-861495c9-1341-4c60-87c4-8c0c78cacc75.png");
    }

    function OTPVerification() {
        var EnteredOTP = document.getElementById("Enteredotp").value;
        if (GeneratedOTP == EnteredOTP) {
            window.location.href = "index.php";
        } else {
            document.getElementById("error").innerHTML = "Incorrect OTP";
        }
    }

    function ResendOTP() {
        generateOTP();
        document.getElementById("error").innerHTML = "";
    }

    document.addEventListener('DOMContentLoaded', function() {
        const notificationData = [
            { 
                title: "Enter OTP to verify", 
                body: "This is OTP vaild for 5 min",
                imgUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/075007f6-42d1-410f-9cfd-105699dc8c31/devzjrq-861495c9-1341-4c60-87c4-8c0c78cacc75.png"
            },
            // { 
            //     title: "Notification Title b", 
            //     body: "This is the second macOS-style notification for your web application.",
            //     imgUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/075007f6-42d1-410f-9cfd-105699dc8c31/devzjrq-861495c9-1341-4c60-87c4-8c0c78cacc75.png"
            // },
            // { 
            //     title: "Notification Title c", 
            //     body: "This is the third macOS-style notification for your web application.",
            //     imgUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/075007f6-42d1-410f-9cfd-105699dc8c31/devzjrq-861495c9-1341-4c60-87c4-8c0c78cacc75.png"
            // }
        ];

        notificationData.forEach((data, index) => {
            setTimeout(() => {
                createNotification(data.title, data.body, data.imgUrl);
            }, 1000 + 5000 * index);
        });

        generateOTP(); // Generate and display OTP on page load
    });

    function createNotification(title, body, imgUrl) {
        const container = document.querySelector('.notification-container');

        const notification = document.createElement('div');
        notification.className = 'notification hidden';
        notification.innerHTML = `
            <div class="innernoti">
                <img src="${imgUrl}" alt="Icon" class="notification-icon">
                <div class="text-content">
                    <div class="notification-header">
                        <span class="notification-title">${title}</span>
                        <button class="close-btn">&times;</button>
                    </div>
                    <div class="notification-body">${body}</div>
                </div>
            </div>
        `;

        container.prepend(notification);

        setTimeout(() => {
            notification.classList.remove('hidden');
        }, 100);

        setTimeout(() => {
            notification.classList.add('hidden');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 500);
        }, 30000);

        notification.querySelector('.close-btn').addEventListener('click', () => {
            notification.classList.add('hidden');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 500);
        });
    }
