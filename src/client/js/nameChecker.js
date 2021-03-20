function checkForName(name) {
    const urlname = name.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(urlname == null){
        alert("Please enter URL");
            return false;
            
         } else
            return true;
}

export {checkForName }