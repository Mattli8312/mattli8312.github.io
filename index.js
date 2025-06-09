/**
 * Adding event handlers and animations
 */

// Email JS: Public keys are fine to display
const emailKey="Vw4Gcb-yokGjS1me6";
emailjs.init(emailKey);

// Current State
let state;
const defaultState = "HomeButton"

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
    mode.addEventListener("click", () => {
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

function email_control_handler(){
    const emailbutton = document.getElementById("emailButton");
    const controlpanel = document.getElementById("controlPanel");
    
    const sendEmailButton = document.getElementById("sendEmailButton");
    const cancelEmailButton = document.getElementById("cancelEmailButton");
    
    const nameContent = document.getElementById("nameContent");
    const messageContent = document.getElementById("messageContent");
    
    const messageSuccess = document.getElementById("messageSuccess");
    const messageFailed = document.getElementById("messageFailed");
    // add event listener
    emailbutton.addEventListener("click", () => {
        controlpanel.setAttribute("enabled", true);
    })

    sendEmailButton.addEventListener("click", () => {
        if(nameContent.value.length && messageContent.value.length){
            sendEmail(nameContent.value, messageContent.value);
        }
        else{
            updateMessageStatus(messageFailed);
        }
    })

    cancelEmailButton.addEventListener("click", () => {
        controlpanel.setAttribute("enabled", false);
    })

    function updateMessageStatus(elm){
        elm.setAttribute("enabled", true);
        setTimeout(() => {
            elm.setAttribute("enabled", false);
        }, 2000);
    }

    function sendEmail(inputName, inputMessage){
    // Documentation: https://www.jsdelivr.com/package/npm/emailjs-com
        var templateParams = {
            name: inputName,
            message: inputMessage
        };
        
        // Service and template IDs are fine
        emailjs.send('service_uqqrx7f','template_rz1a4sz', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            updateMessageStatus(messageSuccess);
        }, function(err) {
            console.log('FAILED...', err);
            updateMessageStatus(messageFailed);
        });

    }
}

workspace_toolbar_handler();
night_mode_handler();
email_control_handler();