import { connect } from "react-redux";

import {
    fetchUserList,
} from "../../actions/userList";

import UserList from "../../components/ProfilUser/ProfilCatalog";

const mapStateToProps = (state) => ({
  userList: state.userList.userList,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserList: () => {
    dispatch(fetchUserList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
