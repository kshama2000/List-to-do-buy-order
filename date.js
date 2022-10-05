exports.getDate = function() {
    const today = new Date();
    
    const options = {
        day:"numeric",
        month:"long", 
        year:"numeric",
        weekday:"short",
    };

    return today.toLocaleDateString("en-US",options); 
};


exports.getDay= function() {
    const today = new Date();
    
    const options = {
        weekday:"long",
    };

    return today.toLocaleDateString("en-US",options);
};
