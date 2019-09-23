var Session = function (json) {
    var obj = {};

    this.json = json;

    this.getObject = function () {
        if (typeof this.json.session === 'undefined') {
            throw new Error('Invalid json data');
        }

        for (var key in this.json.session) {
            obj[key] = this.json.session[key];
        }

        obj.to = to;
        obj.from = from;
        obj.headers = headers;
        obj.parameters = parameters;

        return obj;
    };

};

module.exports = function (json) {
    return new Session(json);
};