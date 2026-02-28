// Generate unique ID
function generateID(){
return "SC" + Date.now();
}

// Get complaints
function getComplaints(){
return JSON.parse(localStorage.getItem("complaints")) || [];
}

// Save complaints
function saveComplaints(data){
localStorage.setItem("complaints", JSON.stringify(data));
}