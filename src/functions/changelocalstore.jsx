function changelocalstore(localFav, id, selectedname) {
  const localdata = [];
  if (localStorage.key(0) === "localfavourite") {
    // Update localstorage object
    const currentlocalfavourite = JSON.parse(
      localStorage.getItem("localfavourite")
    );
    console.log(currentlocalfavourite);
    console.log(id, selectedname);
    // Check if name exist in favourite list
    const index = currentlocalfavourite.map((item) => item.id).indexOf(id);
    if (index >= 0) {
      // if item is in local storage, set value of the favourite item to false
      selectedname.map((name) => (name.favourite = false));
      // Remove item existing on favourite list
      currentlocalfavourite.splice(index, 1);
      console.log(currentlocalfavourite);
      localStorage.setItem(
        "localfavourite",
        JSON.stringify(currentlocalfavourite)
      );
      return currentlocalfavourite;
    } else {
      console.log(selectedname);
      // if item is not in local storage, set value of the favourite item to true
      selectedname.map((name) => (name.favourite = true));
      // Add new item on favourite list
      currentlocalfavourite.push(selectedname[0]);
      localStorage.setItem(
        "localfavourite",
        JSON.stringify(currentlocalfavourite)
      );
      return currentlocalfavourite;
    }
  } else {
    // if local storage is empty, set the value of first favourite item to true
    selectedname.map((name) => (name.favourite = true));
    // Create localstorage object for the first time
    localdata.push(selectedname[0]);
    localStorage.setItem(
      "localfavourite",
      JSON.stringify([...localFav, selectedname[0]])
    );
    return localdata;
    // return [...localFav, selectedname[0]]
  }
}

export default changelocalstore;
