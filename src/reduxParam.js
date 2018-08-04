exports.defineTag = function(dictionary) {
    dictionary.defineTag('redux', {
        mustHaveValue: false,
        mustNotHaveDescription: true,
        canHaveType: false,
        canHaveName: false,
        onTagged: function(doclet, tag) {
            doclet.redux = {};
        }
    });
};

exports.newDocletHandler = function(e) {
    if (e.doclet.redux) {
        const keys = Object.keys(e.doclet.redux).sort();
        const redux = e.doclet.redux || {};
        const values = keys.map((k) => {
            const value = redux[k].value;
            const description = redux[k].description;
            const list = [description];

            if (value) {
                list.push(`(${value})`);
            }

            return list.join(' ');
        });

        if (e.doclet.redux) {
            values.unshift('Redux Functionality');
        }

        if (values.length) {
            e.doclet.description += `<ul><li>${values.join('</li><li>')}</li></ul>`;
        }

    }
}
