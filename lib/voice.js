var Voice = function () {
    this.obj = {};
    this.ask = require(path.join(__dirname, "/voice/ask.js"));
    this.addAsk = function (obj) {
        addAbstract.call(this, 'ask', obj);
        return this;
    };

    this.call = require(path.join(__dirname, "/voice/call.js"));
    this.addCall = function (obj) {
        addAbstract.call(this, 'call', obj);
        return this;
    };

    this.choices = require(path.join(__dirname, "/voice/choices.js"));
    this.addChoices = function (obj) {
        addAbstract.call(this, 'choices', obj);
        return this;
    };

    this.conference = require(path.join(__dirname, "/voice/conference.js"));
    this.addConference = function (obj) {
        addAbstract.call(this, 'conference', obj);
        return this;
    };

    this.joinPrompt = require(path.join(__dirname, "/voice/joinprompt.js"));
    this.addJoinPrompt = function (obj) {
        addAbstract.call(this, 'joinPrompt', obj);
        return this;
    };

    this.leavePrompt = require(path.join(__dirname, "/voice/leaveprompt.js"));
    this.addLeavePrompt = function (obj) {
        addAbstract.call(this, 'leavePrompt', obj);
        return this;
    };

    this.machineDetection = require(
        path.join(__dirname, "/voice/machinedetection.js")
    );
    this.addMachineDetection = function (obj) {
        addAbstract.call(this, 'machineDetection', obj);
        return this;
    };

    this.message = require(path.join(__dirname, "/voice/message.js"));
    this.addMessage = function (obj) {
        addAbstract.call(this, 'message', obj);
        return this;
    };

    this.on = require(path.join(__dirname, "/voice/on.js"));
    this.addOn = function (obj) {
        addAbstract.call(this, 'on', obj);
        return this;
    };

    this.record = require(path.join(__dirname, "/voice/record.js"));
    this.addRecord = function (obj) {
        addAbstract.call(this, 'record', obj);
        return this;
    };

    this.redirect = require(path.join(__dirname, "/voice/redirect.js"));
    this.addRedirect = function (obj) {
        addAbstract.call(this, 'redirect', obj);
        return this;
    };

    this.result = require(path.join(__dirname, "/voice/result.js"));
    this.addResult = function (obj) {
        addAbstract.call(this, 'result', obj);
        return this;
    };

    this.say = require(path.join(__dirname, "/voice/say.js"));
    this.addSay = function (obj) {
        addAbstract.call(this, 'say', obj);
        return this;
    };

    this.session = require(path.join(__dirname, "/voice/session.js"));
    this.addSession = function (obj) {
        addAbstract.call(this, 'session', obj);
        return this;
    };

    this.startRecording = require(
        path.join(__dirname, "/voice/startrecording.js")
    );
    this.addStartRecording = function (obj) {
        addAbstract.call(this, 'startRecording', obj);
        return this;
    };

    this.transcription = require(
        path.join(__dirname, "/voice/tanscription.js")
    );
    this.addTranscription = function (obj) {
        addAbstract.call(this, 'transcription', obj);
        return this;
    };

    this.transfer = require(path.join(__dirname, "/voice/transfer.js"));
    this.addTransfer = function (obj) {
        addAbstract.call(this, 'transfer', obj);
        return this;
    };

    this.wait = require(path.join(__dirname, "/voice/wait.js"));
    this.addWait = function (obj) {
        addAbstract.call(this, 'wait', obj);
        return this;
    };

    this.addHangup = function () {
        addAbstract.call(this, 'hangup', {});
    };

    this.addReject = function () {
        addAbstract.call(this, 'reject', {});
    };

    addAbstract = function (key, obj) {
        if (typeof obj === 'object' && typeof obj.getObject === 'function') {
            obj = obj.getObject();
        }

        addToTropo.call(this, key, obj);
    };

    initTropo = function () {
        if (typeof this.obj.tropo === 'undefined') {
            this.obj.tropo = [];
        }
    };

    addToTropo = function (key, obj) {
        initTropo.call(this);
        var i = this.obj.tropo.length;

        this.obj.tropo[i] = {};
        this.obj.tropo[i][key] = {};
        this.obj.tropo[i][key] = obj;
    };

    this.getObject = function () {
        return this.obj;
    };

    return this;
};

module.exports = function () {
    return new Voice();
};