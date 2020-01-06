import {State} from "../redux/state";
import {closeCopyLinkSnackBar} from "../redux/actions/copy-link-snackbar";
import {connect} from "react-redux";
import CopyLinkSnackbar from "../components/copy-link-snackbar";

function mapDispatchToProps(dispatch: any) {
    return {
        closeCopyLinkSnackBar: () => dispatch(closeCopyLinkSnackBar())
    }
}

function mapStateToProps(state: State) {
    return {
        isActive: state.copyLinkSnackBar.isActive
    }
}

const CopyLinkSnackBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CopyLinkSnackbar);

export default CopyLinkSnackBarContainer;