import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  box: {
    height: "max-content",
    margin: "50px auto",
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    "-webkit-box-shadow": "-1px 0px 31px 6px rgba(0,0,0,0.29)",
    "-moz-box-shadow": "-1px 0px 31px 6px rgba(0,0,0,0.29)",
    "box-shadow": "-1px 0px 31px 6px rgba(0,0,0,0.29)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    margin: "20px auto",
    alignSelf: "flex-end",
    width: "50%",
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
});
