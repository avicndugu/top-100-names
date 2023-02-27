function createlocalstore(namesList) {
  // Check if local storage data exist
  if (localStorage.key(0) === "localfavourite") {
    const currentlocalfav = JSON.parse(localStorage.getItem("localfavourite"));
    // Update state for names on the local database
    if (currentlocalfav.length > 0) {
      namesList.map((name) => {
        currentlocalfav.filter((localname) => {
          if (name.id === localname.id) {
            name.favourite = true;
            return { ...name };
          } else {
            return { ...name };
          }
        });
        return name;
      });
    }
  } else {
    localStorage.setItem("localfavourite", JSON.stringify([]));
  }
}

export default createlocalstore;
