/////////////////////
// MoreTags 0.0.1  //
// JS Framework    //
// (c)2019 SykeBen //
/////////////////////



// Framework Info (This is standard across all versions).
const MoreTags = {
    
    // Version #.
    version: {
        major: 0, minor: 0, revision: 2
    },
    
    // Copyright.
    copyright: {
        year: 2019, holder: 'SykeBen'
    }
    
};



// <log> Interface.
function MTLog(logName) {
    
    // <log> DOM object.
    this.object = document.querySelector(`log#${logName}`);
    
    // Check if the log has autoscroll enabled.
    this.isScrolling = function() {
        if (this.object.getAttribute('data-autoscroll') !== 'false') return true;
        else return false;
    }
    
    // Print to the log.
    this.print = function(text) {
        
        // Add the specified text.
        if (this.object.innerHTML.length > 0) this.object.innerHTML += '<br>';
        this.object.innerText += text;
        
        // Autoscroll if told.
        if (this.object.getAttribute('data-autoscroll') !== 'false') this.object.scrollTop = this.object.scrollHeight;
        
    }
    
}