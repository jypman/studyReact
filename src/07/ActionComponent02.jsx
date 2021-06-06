import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import Button from "../04/Button";

class ActionComponent02 extends PureComponent{
    render() {
        const {setLoading, resetLoading, setUser, setCollection, setAge} = this.props;
        const collection = [
            {id: 1, name: 'park', age: 10},
            {id: 2, name: 'jin', age: 20},
            {id: 3, name: 'young', age: 27}
        ];
        return (
            <React.Fragment>

                <Button onPress={() => setLoading(true)}>
                    setLoading
                </Button>

                <Button onPress={() => resetLoading()}>
                    resetLoading
                </Button>

                <Button onPress={() => setCollection(collection)}>
                    setCollection
                </Button>

                <Button onPress={() => setUser({name : 'jyp', age : 20})}>
                    setUser
                </Button>

                <Button onPress={() => setAge(2,55)}>
                    setAge
                </Button>

            </React.Fragment>
        )
    }
}

ActionComponent02.propTypes = {
    setloading : PropTypes.func,
    resetLoading : PropTypes.func,
    setUser : PropTypes.func,
    setCollection : PropTypes.func,
    setAge : PropTypes.func
}

export default ActionComponent02;