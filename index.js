document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Capture user inputs
    const firstName = document.getElementById("firstName").value;
    const middleName = document.getElementById("middleName").value;
    const lastName = document.getElementById("lastName").value;
    const fullName = `${firstName} ${middleName} ${lastName}`.trim();
    const maritalStatus = document.getElementById("maritalStatus").value;
    const churchDenomination = document.getElementById("Church Denomination").value;
    const bibleStudyClass = document.getElementById("bibleStudyClass").value;
    const pictureFile = document.getElementById("picture").files[0];

    if (!pictureFile) {
        alert("Please upload a picture.");
        return;
    }

    // Show success message temporarily
    const successMessage = document.createElement("div");
    successMessage.innerText = "You have registered successfully!";
    successMessage.style.position = "fixed";
    successMessage.style.top = "20px";
    successMessage.style.left = "50%";
    successMessage.style.transform = "translateX(-50%)";
    successMessage.style.backgroundColor = "green";
    successMessage.style.color = "white";
    successMessage.style.padding = "10px";
    successMessage.style.borderRadius = "5px";
    document.body.appendChild(successMessage);
    setTimeout(() => { successMessage.remove(); }, 3500);

    const reader = new FileReader();
    reader.readAsDataURL(pictureFile);
    reader.onload = function (e) {
        const pictureURL = e.target.result;
        const uniqueID = `ID-${Date.now().toString(36)}`; // Generate unique ID

        // Generate the printable tag
        const tagContent = `
            <html>
            <head>
                <title>Meeting Tag</title>
                <style>
                    body { font-family: Arial, sans-serif; text-align: center; padding: 20px; }
                    .tag-container { border: 2px solid #000; padding: 20px; display: inline-block; }
                    .profile-img { width: 100px; height: 100px; border-radius: 50%; display: block; margin: 10px auto; }
                    .tag-info { font-size: 18px; margin: 5px 0; }
                    .tag-id { font-weight: bold; }
                    .print-btn { margin-top: 15px; padding: 10px; background-color: blue; color: white; border: none; cursor: pointer; }
                </style>
                <script>
                    function printPDF() {
                        window.print();
                    }
                </script>
            </head>
            <body>
                <div class="tag-container">
                    <img src="${pictureURL}" class="profile-img" alt="User Picture">
                    <p class="tag-id">${uniqueID}</p>
                    <p class="tag-info"><strong>Name:</strong> ${fullName}</p>
                    <p class="tag-info"><strong>Marital Status:</strong> ${maritalStatus}</p>
                    <p class="tag-info"><strong>Church Denomination:</strong> ${churchDenomination}</p>
                    <p class="tag-info"><strong>Bible Study Class:</strong> ${bibleStudyClass}</p>
                </div>
                <button class="print-btn" onclick="printPDF()">Print as PDF</button>
            </body>
            </html>
        `;

        // Open new window and print
        const printWindow = window.open("", "", "width=400,height=500");
        printWindow.document.open();
        printWindow.document.write(tagContent);
        printWindow.document.close();
    };
});
const registeredIDs = new Set();

document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Capture user inputs
    const firstName = document.getElementById("firstName").value;
    const middleName = document.getElementById("middleName").value;
    const lastName = document.getElementById("lastName").value;
    const fullName = `${firstName} ${middleName} ${lastName}`.trim();
    const maritalStatus = document.getElementById("maritalStatus").value;
    const churchDenomination = document.getElementById("Church Denomination").value;
    const bibleStudyClass = document.getElementById("bibleStudyClass").value;
    const pictureFile = document.getElementById("picture").files[0];

    if (!pictureFile) {
        alert("Please upload a picture.");
        return;
    }

    const uniqueID = `ID-${Date.now().toString(36)}`; // Generate unique ID
    
    if (registeredIDs.has(uniqueID)) {
        alert("This ID has already been registered!");
        return;
    }
    registeredIDs.add(uniqueID);

    // Show success message temporarily
    const successMessage = document.createElement("div");
    successMessage.innerText = "You have registered successfully!";
    successMessage.style.position = "fixed";
    successMessage.style.top = "20px";
    successMessage.style.left = "50%";
    successMessage.style.transform = "translateX(-50%)";
    successMessage.style.backgroundColor = "green";
    successMessage.style.color = "white";
    successMessage.style.padding = "10px";
    successMessage.style.borderRadius = "5px";
    document.body.appendChild(successMessage);
    setTimeout(() => { successMessage.remove(); }, 3000);

    const reader = new FileReader();
    reader.readAsDataURL(pictureFile);
    reader.onload = function (e) {
        const pictureURL = e.target.result;

        // Generate the printable tag
        const tagContent = `
            <html>
            <head>
                <title>Meeting Tag</title>
            
                <style>
                    body { font-family: Arial, sans-serif; text-align: center; padding: 20px; }
                    .tag-container { border: 2px solid #000; padding: 20px; display: inline-block; }
                    .profile-img { width: 100px; height: 100px; border-radius: 50%; display: block; margin: 10px auto; }
                    .tag-info { font-size: 18px; margin: 5px 0; }
                    .tag-id { font-weight: bold; }
                    .print-btn { margin-top: 15px; padding: 10px; background-color: blue; color: white; border: none; cursor: pointer; }
                </style>
                <script>
                    function printPDF() {
                        window.print();
                    }
                </script>
            </head>
            <body>
                <div class="tag-container">
                    <img src="${pictureURL}" class="profile-img" alt="User Picture">
                    <p class="tag-id">${uniqueID}</p>
                    <p class="tag-info"><strong>Name:</strong> ${fullName}</p>
                    <p class="tag-info"><strong>Marital Status:</strong> ${maritalStatus}</p>
                    <p class="tag-info"><strong>Church Denomination:</strong> ${churchDenomination}</p>
                    <p class="tag-info"><strong>Bible Study Class:</strong> ${bibleStudyClass}</p>
                </div>
                <button class="print-btn" onclick="printPDF()">Print as PDF</button>
            </body>
            </html>
        `;

        // Open new window and print
        const printWindow = window.open("", "", "width=400,height=500");
        printWindow.document.open();
        printWindow.document.write(tagContent);
        printWindow.document.close();
    };

    // Reset form after submission
    document.getElementById("registrationForm").reset();
});