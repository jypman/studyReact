// 빈 그래프 데이터 베이스
const initState = {
    ids : [],
    entities : {}
};

export default (state = initState, action) => {
    const {type, payload} = action;
    switch (type) {
        default:
            return state;
    }
};
