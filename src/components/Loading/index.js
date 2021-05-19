import React, {Component, Fragment} from 'react'
import Loader from "react-loader-spinner";
import { connect } from 'react-redux'
import './loading'; 

class Loading extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {isLoading} = this.props;
        return (
            <Fragment>
                {isLoading ? (
                    <div className="loading-container">
                        <Loader
                            type="Bars"
                            color="#51B78E"
                            height={100}
                            width={100}
                            //timeout={3000}
                        />
                    </div>
                ) : null}
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    isLoading: state.loadingReducer.isLoading
})

export default connect(mapStateToProps, null)(Loading)


