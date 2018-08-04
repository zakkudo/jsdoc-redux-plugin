exports.defineTag = function(dictionary) {
    dictionary.defineTag('reduxActionType', {
        mustHaveValue: true,
        mustNotHaveDescription: true,
        canHaveType: false,
        canHaveName: false,
        onTagged: function(doclet, tag) {
            if (!doclet.redux) {
                throw new Error('Please use the @redux tag before @reduxActionType');
            }

            tag.description = 'Redux Action Type';
            doclet.redux[tag.title] = tag;
        }
    });
};

exports.newDocletHandler = function(e) {
}
