//
// function afterDelay(time, cb) {
//   setTimeout(() => {
//     cb();
//   }, time);
// }
// afterDelay(3000, function () {
//   console.log("Call back executed...");
// });

function instagramPeJao(username, cb) {
  console.log("Fetching the data");
  setTimeout(() => {
    cb({ name: "harsh", id: 123 });
  }, 1000);
}
function metaPeJao(id, cb) {
  console.log("Fetching Posts");
  setTimeout(function () {
    cb(["Hii", "Hello", "Heyyy"]);
  }, 4000);
}
instagramPeJao("harsh@1223", function (data) {
  console.log(data);
  metaPeJao(data.id, function (allPosts) {
    console.log(allPosts);
  });
});
