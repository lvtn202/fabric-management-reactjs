const styles = (theme) => ({
  root: {
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
    position: "absolute",
    alignItems: "center",
    top: 80,
    left: 240,
    paddingLeft: 20,
    bottom: 20,
    right: 20,
    borderLeft: "rgba(0, 0, 0, 0.12) solid 1px",
  },
  mainContainer: {
    position: "absolute",
    alignItems: "center",
    top: 80,
    left: 20,
    bottom: 20,
    right: 20,
  },
});

export default styles;
