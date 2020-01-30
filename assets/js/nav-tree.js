$(document).ready(function() {

    $("li.tree-item").click(OnTreeItemClicked); 
});

///
/// Handler for main dropdowns that toggle the display states of the first level dropdowns
/// 
function OnTreeItemClicked(event){
    //let now = 90;
    // The ul that is a tree-group
    let ul = event.target.nextElementSibling;
    console.log(ul);
    // Gets the first element in the squence
    let icon = $(ul).prev().children()[0];
    console.log(icon);
    // When display is none, switch to block
    if ($(ul).css("display") === "none") {
        $(ul).css("display", "block");
        
        icon.className += " active";     
    }      
    // When display block, switch to none 
    else {
        $(ul).css("display", "none");
        icon.className = "tree-expander-indicator";    
    }    
}