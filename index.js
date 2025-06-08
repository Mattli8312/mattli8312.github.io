/**
 * Adding event handlers and animations
 */

// Current State
let state;
const defaultState = "OutsideOfWorkButton"

// Mappers
const button_page_mapper = {
    "HomeButton": "HomePage",
    "WhoAmIButton": "WhoAmIPage",
    "OutsideOfWorkButton": "OutsideOfWorkPage"
}

const button_event_handler = {
    "HomeButton": null,
    "WhoAmIButton": null,
    "OutsideOfWorkButton": null,
}

function workspace_toolbar_handler(click_state){
    // If there is no state, set it to the default page 
    state = click_state ?? defaultState;

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

function night_mode_handler(){
    // grab elements we will update
    const mode = document.getElementById("theme_mode");
    const body = document.getElementsByTagName("body")[0];
    const contentheaders = document.getElementsByClassName("contentheader");
    const contentblocks = document.getElementsByClassName("contentblock");
    const navigatorbuttons = document.getElementsByClassName("iconProperty");
    let content = []; content = [...content, ...Array.from(contentheaders), ...Array.from(contentblocks), ...Array.from(navigatorbuttons)];
    // add the event listener
    mode.addEventListener("click", ()=>{
        // flip the current signal
        let light = mode.getAttribute("mode") === "light" ? false : true;
        // update the content
        mode.setAttribute("mode",light ? 'light' : 'dark');
        body.style.setProperty("background", `var(--${light ? "main-bg-color" : "alternate-color"})`);
        content.forEach(elm => elm.setAttribute("light", light));
        // update the icon: I know this line of code is super gross
        mode.children[0].children[0].setAttribute("class", `fa-solid fa-${light ? 'moon' : 'sun'}`);
    })
}

workspace_toolbar_handler();
night_mode_handler();