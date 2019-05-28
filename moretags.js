/////////////////////
// MoreTags 0.0.1  //
// JS Framework    //
// (c)2019 SykeBen //
/////////////////////



// Framework Info (This is standard across all versions).
function MoreTags() {
    
    // Version #.
    this.version = {
        major: 0, minor: 0, revision: 1,
        string: `${this.version.major}.${this.version.minor}.${this.version.revision}`
    };
    
    // Copyright.
    this.copyright = {
        year: 2019, holder: 'SykeBen',
        string: `(c)${this.copyright.year} - ${this.copyright.holder}`
    };
    
}



// <log> Interface.
function Log(logName) {
    
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