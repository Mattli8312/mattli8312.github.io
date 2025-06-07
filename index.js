/**
 * Adding event handlers and animations
 */

// Current State
let state;

// Mappers
const button_page_mapper = {
    "HomeButton": "HomePage",
    "WhoAmIButton": "WhoAmIPage",
}

const button_event_handler = {
    "HomeButton": null,
    "WhoAmIButton": null,
}

function workspace_toolbar_handler(click_state){
    // If there is no state, set it to the default page 
    state = click_state ?? "WhoAmIButton";

    const workspacebuttons = document.getElementsByClassName("pagebutton");
    for(let i = 0; i < workspacebuttons.length; i++){
        const id = workspacebuttons[i].getAttribute("id");
        // Shouldn't happen
        if(id === undefined) continue;

        // Create an event handler if we haven't already
        if(button_event_handler[id] === null){
            workspacebuttons[i].addEventListener("click", () => {
                workspace_toolbar_handler(id);
            })
            button_event_handler[id] = 1;
        }

        if(button_page_mapper[id]){
            const page = document.getElementById(button_page_mapper[id]);
            if(id === state){
                // Display the page
                page?.style.setProperty("display", "flex");
                // Bold the control button
                workspacebuttons[i].style.setProperty("font-weight", "bold");
            }
            else{ 
                // Display the page
                page?.style.setProperty("display", "none");
                // Unbold the button
                workspacebuttons[i].style.setProperty("font-weight", "normal");
            }
        }
    }
}

workspace_toolbar_handler();