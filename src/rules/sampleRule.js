module.exports = exports = {};

exports.type = "token"; // token, ast, ignore
// exports.order = 100;

exports.rule = /(.)/;

exports.resolver = function sample (context, groups) {
    return groups.toString();
}