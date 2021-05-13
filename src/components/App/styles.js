const styles = (theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "row",
  },
  appBar: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    marginRight: "16px",
  },
  exitButton: {
    marginLeft: "16px",
  },
  mainContainerSidebar: {
    flexGrow: 1,
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
  mainContainer: {
    position: "absolute",
    alignItems: "center",
    top: 80,
    left: 20,
    bottom: 20,
    right: 20,
  },
  loading: {
    padding: 8,
  },
  appBarSpacer: {
    height: 64,
  },
  backdrop: {
    zIndex: 99,
    color: "#fff",
  },
});

export default styles;
