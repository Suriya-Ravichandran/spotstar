function LoginValidation(){
    var db={'Yellow':'CSK','Red':'RCB','Blue':'MI','Orange':'SRH'}
    var Username=document.getElementById("user").value 
    var Password=document.getElementById("pass").value 
    var keyuser=Object.keys(db)
    var flag=false 
    for(var i=0;i<keyuser.length;i++){
        if(keyuser[i]==Username){
            if(db[Username]==Password){
                flag=true
            }
        }
    }
    if(flag==true){
        window.location.href="home.php"
    }else{
        document.getElementById("error").innerHTML="Invalid Credential"
    }

}

// notification js
document.addEventListener('DOMContentLoaded', function() {
    const notificationData = [
        { 
            title: "Welcome to Spotstar",
            body: "Login to enjoy your Fov songs and movies.",
            imgUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/075007f6-42d1-410f-9cfd-105699dc8c31/devzjrq-861495c9-1341-4c60-87c4-8c0c78cacc75.png"  // Specific image URL for the first notification
        },
        // { 
        //     title: "Notification Title b", 
        //     body: "This is the second macOS-style notification for your web application.",
        //     imgUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/075007f6-42d1-410f-9cfd-105699dc8c31/devzjrq-861495c9-1341-4c60-87c4-8c0c78cacc75.png"  // Specific image URL for the second notification
        // },
        // { 
        //     title: "Notification Title c", 
        //     body: "This is the third macOS-style notification for your web application.",
        //     imgUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/075007f6-42d1-410f-9cfd-105699dc8c31/devzjrq-861495c9-1341-4c60-87c4-8c0c78cacc75.png"  // Specific image URL for the third notification
        // }
    ];

    notificationData.forEach((data, index) => {
        setTimeout(() => {
            createNotification(data.title, data.body, data.imgUrl);
        }, 1000 + 5000 * index); // Increase delay for each notification
    });
});

function createNotification(title, body, imgUrl) {
    const container = document.querySelector('.notification-container');

    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification hidden'; // Start hidden to manage transition
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

    // Insert the new notification at the top of the container
    container.prepend(notification); // Ensures new notifications are added at the top

    // Show notification with a delay to allow CSS transition
    setTimeout(() => {
        notification.classList.remove('hidden');
    }, 100);

    // Set auto-hide with cleanup
    setTimeout(() => {
        notification.classList.add('hidden');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 500); // Ensure smooth fading before removal
    }, 30000);

    // Close button functionality
    notification.querySelector('.close-btn').addEventListener('click', () => {
        notification.classList.add('hidden');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 500); // Remove from DOM after transition
    });
}