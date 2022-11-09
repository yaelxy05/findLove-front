import { connect } from "react-redux";

import {
    fetchUserList,
} from "../../actions/userList";
import {
  newConversationCreation,
} from "../../actions/conversation";

import UserList from "../../components/ProfilUser/ProfilCatalog";

const mapStateToProps = (state) => ({
  userList: state.userList.userList,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserList: () => {
    dispatch(fetchUserList());
  },
  newConversationCreation: (userId) => {
    dispatch(newConversationCreation(userId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
