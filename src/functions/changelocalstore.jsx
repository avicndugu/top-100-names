function changelocalstore(localFav, id, selectedname) {
  const localdata = [];
  if (localStorage.key(0) === "localfavourite") {
    // Update localstorage object
    const currentlocalfavourite = JSON.parse(
      localStorage.getItem("localfavourite")
    );
    // Check if name exist in favourite list by name
    const nameIndex = currentlocalfavourite
      .map((item) => item.name)
      .indexOf(selectedname[0].name);
    if (nameIndex >= 0) {
      // if item is in local storage, set value of the favourite item to false
      selectedname.map((name) => (name.favourite = false));
      // Remove item existing on favourite list
      currentlocalfavourite.splice(nameIndex, 1);
      localStorage.setItem(
        "localfavourite",
        JSON.stringify(currentlocalfavourite)
      );
      return currentlocalfavourite;
    } else {
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
  }
}

export default changelocalstore;
