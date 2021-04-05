const INITIAL_STATE = {
  userlist: {
    items: [],
    isLoaded: false,
  },
  addUser: {
    isLoaded: false,
    success: {
      status: false,
      message: "",
    },
    error: {
      status: false,
      message: "",
    },
  },
};

export default INITIAL_STATE;
