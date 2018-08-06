exports.defineTag = function(dictionary) {
    dictionary.defineTag('reduxReducer', {
        mustHaveValue: false,
        mustNotHaveDescription: true,
        canHaveType: false,
        canHaveName: false,
        onTagged: function(doclet, tag) {
            if (!doclet.redux) {
                throw new Error('Please use the @redux tag before @reduxReducer');
            }

            Object.assign(doclet, {
                "params": [
                    {
                        "type": {
                            "names": [
                                "Redux.Store"
                            ]
                        },
                        "description": "The current state",
                        "name": "previousState"
                    },
                    {
                        "type": {
                            "names": [
                                "Redux.Action"
                            ]
                        },
                        "description": "An action to execute to update the store",
                        "name": "action"
                    }
                ],
                "returns": [
                    {
                        "type": {
                            "names": [
                                "Redux.Store"
                            ]
                        },
                        "description": "The next state"
                    }
                ]});

            tag.description = 'Redux Reducer';
            doclet.redux[tag.title] = tag;
        }
    });
};

exports.newDocletHandler = function(e) {
}
