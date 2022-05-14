export default {
  get_user_data() {
    let user_data = localStorage.getItem("user_data");
    if (user_data) {
      return JSON.parse(user_data);
    } else {
      return false;
    }
  },
  user_ip_info() {
    let user_data = localStorage.getItem("user_ip_info");
    if (user_data) {
      return JSON.parse(user_data);
    } else {
      return false;
    }
  },
  is_user_admin() {
    let user_data = this.get_user_data();
    if (user_data && user_data.is_admin) {
      return true;
    } else {
      return false;
    }
  },

  is_user_super_admin() {
    let user_data = this.get_user_data();
    if (user_data && user_data.super_admin) {
      return true;
    } else {
      return false;
    }
  },
  is_user_customer() {
    let user_data = this.get_user_data();
    if (user_data && user_data.iscustomer) {
      return true;
    } else {
      return false;
    }
  },
};
