/////////////////////
// MoreTags 0.0.4  //
// JS Framework    //
// (c)2019 SykeBen //
/////////////////////



// Framework Info (This is standard across all versions).
const MoreTags = {
    
    // Version #.
    version: {
        major: 0, minor: 0, revision: 4
    },
    
    // Copyright.
    copyright: {
        year: 2019, holder: 'SykeBen'
    }
    
};



// Internal Functions.
const MTFunctions = {
    
    // If a statement it true, return a value.
    iftrue: function(statement, value) {
        if (statement) return value;
    }
    
}



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



// <result> Runner. (Bad code can kill your page!)
function MTResults() {
    
    // Load all <result> tags.
    var tags = document.getElementsByTagName('result');
    
    // Run each one.
    for (var i=0; i<tags.length; i++) {
        
        // Prep result.
        var result = '';
        
        // If it has code, run it.
        if (tags[i].getAttribute('code') !== null) {
            try { result = eval(tags[i].getAttribute('code')); }
            catch(err) { result = err.message; }
        }
            
        // If it doesn't, write an error.
        else {
            result = 'No code supplied.';
        }
        
        // Write out result and label space if there is any.
        tags[i].innerHTML += `${MTFunctions.iftrue(tags[i].innerHTML.length>0, ' ')}<rdisp><pre>${result}</pre></rdisp>`;
        
    }
    
}



// Final setup (run onload functions).
window.onload = function() {
    
    // Evaluate <result>'s
    MTResults();
    
};