exports.defineTag = function(dictionary) {
    dictionary.defineTag('reduxActionCreator', {
        mustHaveValue: false,
        mustNotHaveDescription: true,
        canHaveType: false,
        canHaveName: false,
        onTagged: function(doclet, tag) {
            if (!doclet.redux) {
                throw new Error('Please use the @redux tag before @reduxActionCreator');
            }

            tag.description = 'Redux Action Creator';
            doclet.redux[tag.title] = tag;

            Object.assign(doclet, {
                "params": [
                ],
                "returns": [
                    {
                        "type": {
                            "names": [
                                "Redux.Action"
                            ]
                        },
                        "description": "The generated Redux action"
                    }
                ]});

            tag.description = 'Redux Action Creator';
            doclet.redux[tag.title] = tag;
        }
    });
};

exports.newDocletHandler = function(e) {
}
