import createActions from "../../toy1-2/api-redux-pack/createActions";

const {create} = createActions('users');

export function createUser(data, onComplete) {
    return create(
        data,
        {},
        {notification : {success : '회원가입이 성공적으로 완료되었습니다.'}, onSuccess : onComplete}
    );
}