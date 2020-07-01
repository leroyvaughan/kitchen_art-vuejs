console.log("globals init...");


global.Promise = require('bluebird');
//extend bluebird Promise for sequential batch processing
Promise.series = (promiseArr, param) => {
    return Promise.reduce(promiseArr, (values, promise) => {
        return promise(param).then((result) => {
            values.push(result);
            return values;
        });
    }, []);
};


Promise.seriesWithParam = function (arrFunc, paramArr) {
    var funcArr = [], ix = -1;

    var myCnt = paramArr.length;

    //make function call for each item in paramArr
    //ie: pID, oID
    for (var x = 0; x < paramArr.length; x++) {
        if (isNull(paramArr[x])) {
            // consoleLog("null? " + x, 3, 4);
            throw "null object in paramArr";
        }
        funcArr.push(arrFunc);
    }

    /// values = returnObj, promise = funcArr-item
    return Promise.reduce(funcArr, (values, promise) => {
        ix++;
        return promise(paramArr[ix])
            .then((result) => {
                //values.push(result);
                return "";
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
};



global.sortJsonByKey = function (prop) {
    return function (a, b) {
        var one = a[prop];
        var two = b[prop];

        //make it case-insensitive
        if (!isNull(one)) {
            if (typeof (one) == 'string')
                one = one.toLowerCase();
        }
        if (!isNull(two)) {
            if (typeof (two) == 'string')
                two = two.toLowerCase();
        }

        if (one > two) {
            return 1;
        } else if (one < two) {
            return -1;
        }
        return 0;
    }
};



/**
 * **************************************************************
    MISCELLANEOUS FUNCTIONS
 * **************************************************************
 */


global.isNull = function (inVar) {
    if (typeof inVar === 'undefined') {
        return true;
    }
    else if (typeof inVar === 'string') {
        if (inVar === '') {
            return true;
        }
    }
    else if (typeof inVar === 'object') {
        if (inVar.length === 0) {
            return true;
        }
    }
    else if (Number.isInteger(inVar)) {
        if (inVar < 1) {
            return true;
        }
    }
    else if (inVar === null) {
        return true;
    }

    return false;
};