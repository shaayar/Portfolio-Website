const Visible = () => {
    if (document.visibilityState === "visible") {
        console.log("User has entered $pgname page.");
    } else {
        console.log("User has left the pname page");
    }
};

addEventListener(visibilityState, "Visible");