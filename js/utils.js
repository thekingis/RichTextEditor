var phonePrefixes = ['0809', '0817', '0818', '0909', '0908', '0701', '0708', '0802', '0808', '0812', '0901', '0902', '0904', '0907', '0912', '0911', '0705', '0805', '0807', '0811', '0815', '0905', '0915', '0703', '0706', '0803', '0806', '0810', '0813', '0814', '0816', '0903', '0906', '0913', '0916', '07025', '07026', '0704', '07027', '0709', '0804', '07020', '07028', '07029', '0819', '0707'];

String.prototype.isEmpty = function () {
    var str = this.replace(/[ ]/g, "");;
    return str === '';
}

String.prototype.startsWithValue = function (array) {
    return array.some(val => this.startsWith(val));
}

String.prototype.firstToUpperCase = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.sliceLast = function (l) {
    return this.substring(0, this.length - l);
}

String.prototype.toBool = function () {
	s = this.toLowerCase().trim();
    switch(s){
        case "true": 
        case "yes": 
        case "1": 
          return true;

        case "false": 
        case "no": 
        case "0": 
        case null: 
          return false;

        default: 
          return Boolean(this);
    }
};

Number.prototype.inRange = function (min, max) {
    return this >= min && this <= max;
}

Array.prototype.lastItem = function () {
    return this[this.length - 1];
}

$.fn.hasAttr = function (name) {
    return this.is('['+name+']');
}

$.fn.toggleAttr = function (name) {
    var hasAttr = this.hasAttr(name);
    if(hasAttr)
        this.removeAttr(name);
    else 
        this.attr(name, true);
}

Array.prototype.remove = function (item) {
    if(this.includes(item)){
        const index = this.indexOf(item);
        this.splice(index, 1);
    }
}

function showToast(text, alertClass, timeoutSec){
    if(typeof $alertDivMain !== 'undefined')
        $alertDivMain.remove();
    $alertCloseButton = $('<nav>');
    $alertDivMain = $('<div>');
    $alertCloseButton.addClass('position-absolute')
        .addClass('end-0')
        .addClass('fs-5')
        .addClass('top-50')
        .addClass('cursor-pointer')
        .addClass('translate-middle-y')
        .addClass('me-3')
        .attr({title: 'close', onclick: '$alertDivMain.remove()'})
        .html('&#10006;');
    $alertDivMain.addClass('alert')
        .addClass('fixed-bottom')
        .addClass('m-3')
        .addClass('text-center')
        .addClass(alertClass)
        .attr('role', 'alert')
        .css('z-index', 999)
        .html(text);
    $alertDivMain.append($alertCloseButton);
    $('body').append($alertDivMain);
    if(typeof timeoutSec !== 'undefined'){
        if(typeof timeout !== 'undefined')
            clearTimeout(timeout);
        timeout = setTimeout(function(){
            $alertDivMain.fadeOut();
        }, timeoutSec);
    }
}
            
function createClass(){
    return function(args){
        if ( this instanceof arguments.callee ) {
            if ( typeof this.init == "function" )
                this.init.apply( this, (args && args.callee) ? args : arguments );
        } else
            return new arguments.callee( arguments );
    };
}

function convertDateToString(dateStr){
    if(dateStr == '')
        return 'Date not specified';
    date = new Date(dateStr);
    mday = date.getDate();
    month = date.toLocaleString('default', { month: 'long' });
    year = date.getFullYear();

    return month+' '+mday+' '+year;
}