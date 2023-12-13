const cardList = [
  {
    title: "Kitten 2",
    image: "images/kitten-2.jpg",
    link: "About Kitten 2",
    desciption: "Demo desciption about kitten 2",
  },
  {
    title: "Kitten 3",
    image: "images/kitten-3.jpg",
    link: "About Kitten 3",
    desciption: "Demo desciption about kitten 3",
  },
];

function postCat(cat, callback) {
  cardList.insertOne(cat, callback);
}

function getAllCats(callback) {
  // cardList.find({}).toArray(callback);
  callback(null, cardList);
}

// module.exports = { postCat, getAllCats };
module.exports.postCat = postCat;
module.exports.getAllCats = getAllCats;
