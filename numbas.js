
function Numba (first, end) {

    if ( first <= end ) {
        this.min = first;
        this.max = end;
    } else {
        this.max = first;
        this.min = end;
    }

    this.probableMin = this.min;
    this.probableMax = this.max;

    this.diff = this.max - this.min;
    this.diffP = this.probableMax - this.probableMin;

}

Numba.prototype.toString = function() {
    // returns a string representation

    return '[' + this.min + '..' + this.max + ']';

};

Numba.prototype.toStringP = function() {
    // returns a string representation with probables

    return '[' + this.min + '..' + this.max + '] / [P ' + this.probableMin + ' .. P ' + this.probableMax + ']';

};

Numba.prototype.probable = function() {
    // returns probables as a new numba

    return new Numba(this.probableMin, this.probableMax );

};



Numba.prototype.add = function(incoming) {

    // add a number or numba

    if ( isNaN(incoming) ) {

        // if incoming is not a number

        if (incoming instanceof Numba) {

            // if incoming is an instance of Numba

            this.min += incoming.min;
            this.max += incoming.max;
        }

    } else {

        // if incoming is a number

        this.min += incoming;
        this.max += incoming;
    }

    this.probableMin = this.min;
    this.probableMax = this.max;
    this.diff = this.max - this.min;
    this.diffP = this.probableMax - this.probableMin;
    return this;
};

Numba.prototype.substract = function(incoming) {

    // substract a number or numba

    if ( isNaN(incoming) ) {

        // if incoming is not a number

        if (incoming instanceof Numba) {

            // if incoming is an instance of Numba

            this.min -= incoming.max;
            this.max -= incoming.min;
        }

    } else {

        // if incoming is a number

        this.min -= incoming;
        this.max -= incoming;
    }

    this.probableMin = this.min;
    this.probableMax = this.max;
    this.diff = this.max - this.min;
    this.diffP = this.probableMax - this.probableMin;

    return this;
};

Numba.prototype.multiply = function(incoming) {

    // multiply by a number or numba

    if ( isNaN(incoming) ) {

        // if incoming is not a number

        if (incoming instanceof Numba) {

            // if incoming is an instance of Numba

            this.min *= incoming.min;
            this.max *= incoming.max;
        }

    } else {

        // if incoming is a number

        this.min *= incoming;
        this.max *= incoming;
    }

    this.probableMin = this.min;
    this.probableMax = this.max;
    this.diff = this.max - this.min;
    this.diffP = this.probableMax - this.probableMin;
    
    return this;
};


Numba.prototype.divide = function(incoming) {

    // divide by a number or numba

    if ( isNaN(incoming) ) {

        // if incoming is not a number

        if (incoming instanceof Numba) {

            // if incoming is an instance of Numba

            this.min /= incoming.max;
            this.max /= incoming.min;
        }

    } else {

        // if incoming is a number

        this.min /= incoming;
        this.max /= incoming;
    }

    this.probableMin = this.min;
    this.probableMax = this.max;
    this.diff = this.max - this.min;
    this.diffP = this.probableMax - this.probableMin;
    
    return this;
};


var Numbas = (function () {

    return {

        add: function( first, second ) {
            return new Numba(first.min, first.max).add(second);
        },

        substract: function ( first, second ) {
            return new Numba(first.min, first.max).substract(second);
        },

        multiply: function ( first, second ) {
            return new Numba(first.min, first.max).multiply(second);
        },

        divide: function ( first, second ) {
            return new Numba(first.min, first.max).divide(second);
        },

        equals: function ( first, second ) {
            return first.min === second.min && first.max === second.max;
        },

        equalsP: function ( first, second ) {
            return first.probableMin === second.probableMin && first.probableMax === second.probableMax;
        },

        lt: function ( first, second ) {
            return first.min < second.min && first.max < second.max;
        },

        ltP: function ( first, second ) {
            return first.probableMin < second.probableMin && first.probableMax < second.probableMax;
        },

        lte: function ( first, second ) {
            return first.min <= second.min && first.max <= second.max;
        },

        lteP: function ( first, second ) {
            return first.probableMin <= second.probableMin && first.probableMax <= second.probableMax;
        },

        gt: function ( first, second ) {
            return first.min > second.min && first.max > second.max;
        },

        gtP: function ( first, second ) {
            return first.probableMin > second.probableMin && first.probableMax > second.probableMax;
        },

        gte: function ( first, second ) {
            return first.min >= second.min && first.max >= second.max;
        },

        gteP: function ( first, second ) {
            return first.probableMin >= second.probableMin && first.probableMax >= second.probableMax;
        },

        in: function ( first, second ) {
            return first.min >= second.min && first.max <= second.max;
        },

        inP: function ( first, second ) {
            return first.probableMin >= second.probableMin && first.probableMax <= second.probableMax;
        }
    };
})();
