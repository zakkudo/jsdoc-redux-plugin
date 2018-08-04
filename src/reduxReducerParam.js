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

            tag.description = 'Redux Reducer';
            doclet.redux[tag.title] = tag;
        }
    });
};

exports.newDocletHandler = function(e) {
}
