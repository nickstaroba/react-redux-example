export const generateTypes = (...actions) =>
    Object.freeze(
        actions.reduce((res, action) => {
            res[action] = action;
            return res;
        }, {})
    );

export const makeAction = (type, payload) => Object.freeze({ type, payload });

export default generateTypes;
