//
function loginUser(username, db) {
  console.log("Please wait while we fetch the details...");
  setTimeout(function () {
    db({ name: "harsh", id: 21 });
  }, 3000);
}
function fetchPermissions(id, db) {
  console.log("Fetching permissions...");
  setTimeout(function () {
    db({
      permission1: "Proceed further",
      permission2: "Load the dashboard",
    });
  }, 4000);
}
function loadDashboard(permissions, db) {
  console.log("Loading the dashboard...");
  if (permissions.permission2 === "Load the dashboard") {
    setTimeout(db, 3000);
  }
}

loginUser("harsh@123", function (data) {
  console.log(data);
  fetchPermissions(data.id, function (permissions) {
    console.log(permissions);
    loadDashboard(permissions, function () {
      console.log("Dashboard Loaded");
    });
  });
});
