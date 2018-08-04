exports.defineTag = function(dictionary) {
    dictionary.defineTag('reduxActionScope', {
        mustHaveValue: true,
        mustNotHaveDescription: true,
        canHaveType: false,
        canHaveName: false,
        onTagged: function(doclet, tag) {
            if (!doclet.redux) {
                throw new Error('Please use the @redux tag before @reduxActionScope');
            }

            tag.description = 'Redux Actions have a prefixed scope';
            doclet.redux[tag.title] = tag;
        }
    });
};

exports.newDocletHandler = function(e) {
}
