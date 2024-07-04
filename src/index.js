const path = require('path');

function escapeFileName(str) {
    return `svg-${path.basename(str, '.svg')}`;
}

const transform = (src, filePath) => {
    const name = escapeFileName(filePath);
    return {
        code: `module.exports = "<svg data-file-name='${name}'></svg>";`,
    };
};

module.exports = {
    process: transform,
};