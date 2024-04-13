import React, { useEffect, useRef, useState } from "react";
import './CTA.css'

const CTA = () => {
  const refImage = useRef(null);
  const [isCaptchaVisible, setIsCaptchaVisible] = useState(false); // State to manage captcha visibility

  const handleRefreshCaptcha = () => {
    // Implement logic to reload captcha image here (likely using an API call)
    console.log("Refreshing captcha...");
  };

  useEffect(() => {
    const handleLoad = () => {
      // Your referenceSetter logic here
      console.log("Image loaded"); // Example placeholder
    };

    if (refImage.current) {
      refImage.current.onload = handleLoad;
    }

    return () => {
      if (refImage.current) {
        refImage.current.onload = null; // Cleanup on unmount
      }
    };
  }, []);

  const handleContextMenu = (event) => {
    event.preventDefault(); // Prevents default context menu behavior
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://zohuta-cmpzourl.maillist-manage.com/js/optin.min.js";
    script.async = true; // Optional: Load script asynchronously
    script.onload = () => {
      window.setupSF(
        "sf3z63bf1d4c835c590de9462a8476b0483d2cfc667188102c167a418ff68cd4521a",
        "ZCFORMVIEW",
        false,
        "acc",
        false,
        "2"
      );
    };
    document.body.appendChild(script);

    // Cleanup function (optional): Remove script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div
        id="sf3z63bf1d4c835c590de9462a8476b0483d2cfc667188102c167a418ff68cd4521a"
        data-type="signupform"
      >
        <input type="hidden" id="recapTheme" value="2" />
        <input type="hidden" id="isRecapIntegDone" value="false" />
        <input type="hidden" id="signupFormType" value="LargeForm_Vertical" />
        <div id="customForm">
          <div
            name="SIGNUP_PAGE"
            className="large_form_3_css"
            id="SIGNUP_PAGE"
            style={{
              backgroundColor: "rgb(66, 173, 174)",
              color: "rgb(255, 255, 255)",
              padding: "30px",
              fontFamily: "Arial",
              textAlign: "center",
              fontSize: "14px",
              minWidth: "240px",
            }}
          >
            <div style={{ margin: "0px auto" }}>
              <div
                id="imgBlock"
                name="LOGO_DIV"
                data-logo="true" // Use data- attribute for custom data
                style={{
                  width: "600px",
                  margin: "0px auto",
                  paddingBottom: "10px",
                  textAlign: "center",
                  paddingTop: "10px",
                }}
              />
            </div>
            <br />
            <div
              id="signupMainDiv"
              style={{
                margin: "0px auto",
                width: "100%",
                minWidth: "230px",
                maxWidth: "600px",
              }}
              name="SIGNUPFORM"
              changeid="SIGNUPFORM"
              changename="SIGNUPFORM"
            >
              <div>
                <div style={{ position: "relative" }}>
                  <div
                    id="Zc_SignupSuccess"
                    style={{
                      display: "none",
                      position: "absolute",
                      marginLeft: "4%",
                      width: "90%",
                      backgroundColor: "white",
                      padding: "3px",
                      border: "3px solid rgb(194, 225, 154)",
                      marginTop: "10px",
                      marginBottom: "10px",
                      wordBreak: "break-all",
                    }}
                  >
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      border="0"
                    >
                      <tbody>
                        <tr>
                          <td width="10%">
                            <img
                              className="successicon" // Use className for class names in React
                              src="https://zohuta-cmpzourl.maillist-manage.com/images/challangeiconenable.jpg"
                              alt="Success icon" // Add alt attribute for accessibility
                              align="absmiddle"
                            />
                          </td>
                          <td>
                            <span
                              id="signupSuccessMsg"
                              style={{
                                color: "rgb(73, 140, 132)",
                                fontFamily: "sans-serif",
                                fontSize: "14px",
                                wordBreak: "break-word",
                              }}
                            >
                              &nbsp;&nbsp;Thank you for Signing Up
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <form
                  method="POST"
                  id="zcampaignOptinForm"
                  style={{ margin: "0px" }}
                  action="https://zohuta-cmpzourl.maillist-manage.com/weboptin.zc"
                  target="_zcSignup"
                >
                  <div
                    id="SIGNUP_BODY_ALL"
                    name="SIGNUP_BODY_ALL"
                    style={{
                      borderColor: "rgb(45, 157, 158)",
                      borderWidth: "5px",
                      borderStyle: "solid",
                    }}
                  >
                    <h1
                      id="SIGNUP_HEADING"
                      name="SIGNUP_HEADING"
                      changeid="SIGNUP_MSG"
                      changetype="SIGNUP_HEADER"
                      style={{
                        color: "rgb(67, 67, 67)",
                        backgroundColor: "rgb(245, 245, 245)",
                        border: "1px none rgb(91, 91, 91)",
                        wordBreak: "break-word",
                        padding: "20px",
                        margin: "0px",
                        fontFamily: "Arial",
                        textAlign: "center",
                        fontSize: "17px",
                      }}
                    >
                      <span>
                        Learn more about our Global and Local Education Funding
                        Opportunities
                      </span>
                    </h1>
                    <div
                      id="SIGNUP_BODY"
                      name="SIGNUP_BODY"
                      style={{
                        backgroundColor: "rgb(255, 255, 255)",
                        color: "rgb(68, 68, 68)",
                        padding: "20px",
                        fontFamily: "Arial",
                        textAlign: "center",
                        bottom: "2px",
                        fontSize: "11px",
                        opacity: "1",
                      }}
                    >
                      <div
                        style={{
                          margin: "0px auto",
                          textAlign: "left",
                        }}
                      >
                        <div
                          id="SIGNUP_DESCRIPTION"
                          changeid="SIGNUP_MSG"
                          changetype="SIGNUP_DESCRIPTION"
                          style={{ lineHeight: "1.6" }}
                        />
                        <div
                          id="errorMsgDiv"
                          style={{
                            display: "none",
                            backgroundColor: "#ffebe8",
                            padding: "10px 10px",
                            color: "#d20000",
                            fontSize: "11px",
                            margin: "10px 0px",
                            border: "solid 1px #ffd9d3",
                            marginTop: "20px",
                          }}
                        >
                          &nbsp;&nbsp;Please correct the marked field(s) below.
                        </div>
                        <div>
                          <div
                            style="font-size: 12px; margin-top: 10px"
                            name="fieldsdivSf"
                            className="zcsffieldsdiv"
                          >
                            <div
                              className="zcsffield"
                              fieldid="1222562000000000023"
                              style={{ padding: "10px 0px 10px 0px" }}
                            >
                              <div>
                                {/* Check for email/required fields (logic not included) */}
                                <input
                                  style={{
                                    width: "97%",
                                    color: "rgb(68, 68, 68)",
                                    backgroundColor: "rgb(255, 255, 255)",
                                    border: "1px solid rgb(222, 222, 222)",
                                    padding: "2px",
                                    fontFamily: "Arial",
                                    boxSizing: "border-box",
                                    fontSize: "12px",
                                    textIndent: "5px",
                                    height: "28px",
                                  }}
                                  maxLength="100"
                                  placeholder="First Name"
                                  name="FIRSTNAME"
                                  changeitem="SIGNUP_FORM_FIELD"
                                  type="text" // Change to "email" if necessary
                                />
                                &nbsp;
                                <span
                                  id="dt_FIRSTNAME"
                                  style={{ display: "none" }}
                                >
                                  1,false,1,First Name,2
                                </span>
                              </div>

                              <div style={{ clear: "both" }}></div>
                            </div>
                            <div
                              style={{
                                padding: "10px 0px 10px 0px",
                              }}
                              className="zcsffield"
                              fieldid="1222562000000000021"
                            >
                              <div>
                                {/* <!-- check to mark emailid field as type email, and other mandatory fields as type required --> */}
                                <input
                                  style={{
                                    width: "97%",
                                    color: "rgb(68, 68, 68)",
                                    backgroundColor: "rgb(255, 255, 255)",
                                    border: "1px solid rgb(222, 222, 222)",
                                    padding: "2px",
                                    fontFamily: "Arial",
                                    boxSizing: "border-box",
                                    fontSize: "12px",
                                    textIndent: "5px",
                                    height: "28px",
                                  }}
                                  maxLength="100"
                                  placeholder="Email"
                                  name="CONTACT_EMAIL"
                                  changeitem="SIGNUP_FORM_FIELD"
                                  type="email"
                                />
                                &nbsp;
                                <span
                                  name="SIGNUP_REQUIRED"
                                  style={{
                                    color: "rgb(180, 0, 0)",
                                    fontFamily: "Arial",
                                    fontSize: "11px",
                                  }}
                                >
                                  *
                                </span>
                                <span
                                  style={{ display: "none" }}
                                  id="dt_CONTACT_EMAIL"
                                >
                                  1,true,6,Contact Email,2
                                </span>
                              </div>
                              <div style={{ clear: "both" }}></div>
                            </div>
                            <div
                              className="zcsffield"
                              fieldid="1222562000000000029"
                              style={{ padding: "10px 0px 10px 0px" }}
                            >
                              <div>
                                {/* Check for email/required fields (logic not included) */}
                                <input
                                  style={{
                                    width: "97%",
                                    color: "rgb(68, 68, 68)",
                                    backgroundColor: "rgb(255, 255, 255)",
                                    border: "1px solid rgb(222, 222, 222)",
                                    padding: "2px",
                                    fontFamily: "Arial",
                                    boxSizing: "border-box",
                                    fontSize: "12px",
                                    textIndent: "5px",
                                    height: "28px",
                                  }}
                                  maxLength="100"
                                  placeholder="Phone"
                                  name="PHONE"
                                  changeitem="SIGNUP_FORM_FIELD"
                                  type="text" // Change to "tel" if necessary
                                />
                                &nbsp;
                                <span id="dt_PHONE" style={{ display: "none" }}>
                                  1,false,1,Phone,2
                                </span>
                              </div>
                              <div style={{ clear: "both" }}></div>
                            </div>

                            <div
                              className="zcsffield"
                              fieldid="1222562000000118023"
                              style={{ padding: "10px 0px 10px 0px" }}
                            >
                              <div>
                                {/* Check for email/required fields (logic not included) */}
                                <input
                                  style={{
                                    width: "97%",
                                    color: "rgb(68, 68, 68)",
                                    backgroundColor: "rgb(255, 255, 255)",
                                    border: "1px solid rgb(222, 222, 222)",
                                    padding: "2px",
                                    fontFamily: "Arial",
                                    boxSizing: "border-box",
                                    fontSize: "12px",
                                    textIndent: "5px",
                                    height: "28px",
                                  }}
                                  maxLength="100"
                                  placeholder="Country of Residence"
                                  name="CONTACT_CF4"
                                  changeitem="SIGNUP_FORM_FIELD"
                                  type="text" // No change in type needed here
                                />
                                &nbsp;
                                <span
                                  id="dt_CONTACT_CF4"
                                  style={{ display: "none" }}
                                >
                                  1,false,1,Country of Residence,2
                                </span>
                              </div>
                              <div style={{ clear: "both" }}></div>
                            </div>

                            <div
                              className="zcsffield"
                              fieldid="1222562000000000035"
                              style={{ padding: "10px 0px 10px 0px" }}
                            >
                              <div>
                                {/* Check for email/required fields (logic not included) */}
                                <input
                                  style={{
                                    width: "97%",
                                    color: "rgb(68, 68, 68)",
                                    backgroundColor: "rgb(255, 255, 255)",
                                    border: "1px solid rgb(222, 222, 222)",
                                    padding: "2px",
                                    fontFamily: "Arial",
                                    boxSizing: "border-box",
                                    fontSize: "12px",
                                    textIndent: "5px",
                                    height: "28px",
                                  }}
                                  maxLength="100"
                                  placeholder="State"
                                  name="STATE"
                                  changeitem="SIGNUP_FORM_FIELD"
                                  type="text" // No change in type needed here
                                />
                                &nbsp;
                                <span id="dt_STATE" style={{ display: "none" }}>
                                  1,false,1,State,2
                                </span>
                              </div>
                              <div style={{ clear: "both" }}></div>
                            </div>

                            <div
                              className="zcsffield"
                              fieldid="1222562000000118011"
                              style={{ padding: "10px 0px 10px 0px" }}
                            >
                              <div>
                                <div style={{ position: "relative" }}>
                                  <select
                                    name="CONTACT_CF3"
                                    changeitem="SIGNUP_FORM_FIELD"
                                    multiple
                                    style={{
                                      width: "97%",
                                      color: "rgb(68, 68, 68)",
                                      backgroundColor: "rgb(255, 255, 255)",
                                      border: "1px solid rgb(222, 222, 222)",
                                      padding: "2px",
                                      fontFamily: "Arial",
                                      boxSizing: "border-box",
                                      fontSize: "12px",
                                      textIndent: "5px",
                                      height: "84px",
                                    }}
                                    zc_display_name="Who are you enquiring for?"
                                  >
                                    <option value="dummy" disabled>
                                      Who are you enquiring for?
                                    </option>
                                    <option value="Myself">Myself</option>
                                    <option value="My child or Minor">
                                      My child or Minor
                                    </option>
                                    <option value="3rd party adult">
                                      3rd party adult
                                    </option>
                                  </select>
                                  &nbsp;
                                  <span
                                    id="dt_CONTACT_CF3"
                                    style={{ display: "none" }}
                                  >
                                    1,false,13,Who are you enquiring for?,2
                                  </span>
                                </div>
                              </div>
                              <div style={{ clear: "both" }}></div>
                            </div>
                          </div>

                          {/* <!-- Captcha for Signup --> */}
                          <div
                            id="captchaOld"
                            name="captchaContainer"
                            style={{
                              display: isCaptchaVisible ? "block" : "none",
                            }}
                          >
                            <div>
                              <div
                                id="captchaParent"
                                style={{
                                  width: "59%",
                                  float: "left",
                                  minWidth: 170,
                                  maxWidth: "70%",
                                }}
                              >
                                <img
                                  src="//campaigns.zoho.com/images/refresh_icon.png"
                                  style={{
                                    cursor: "pointer",
                                    float: "right",
                                    marginRight: 4,
                                  }}
                                  onClick={handleRefreshCaptcha}
                                  id="relCaptcha"
                                  alt="Refresh Captcha"
                                />
                                <div
                                  id="captchaDiv"
                                  captcha="true"
                                  name=""
                                  style={{
                                    padding: 20,
                                    background: "#fff",
                                    border: "1px solid rgb(222, 222, 222)",
                                    boxSizing: "border-box",
                                    width: "98.8%",
                                  }}
                                >
                                  {/* Captcha image will be loaded here */}
                                </div>
                                <input
                                  placeholder="Captcha"
                                  id="captchaText"
                                  name="captchaText"
                                  changeitem="SIGNUP_FORM_FIELD"
                                  style={{
                                    marginTop: 5,
                                    width: "98.7%",
                                    color: "rgb(68, 68, 68)",
                                    backgroundColor: "rgb(255, 255, 255)",
                                    border: "1px solid rgb(222, 222, 222)",
                                    padding: 2,
                                    fontFamily: "Arial",
                                    boxSizing: "border-box",
                                    fontSize: 12,
                                    textIndent: 5,
                                    height: 28,
                                  }}
                                  maxLength="100"
                                  type="text"
                                />
                                <span
                                  name="SIGNUP_REQUIRED"
                                  id="capRequired"
                                  style={{
                                    color: "rgb(180, 0, 0)",
                                    marginTop: -16,
                                    marginRight: -2,
                                    float: "right",
                                    fontFamily: "Arial",
                                    fontSize: 11,
                                  }}
                                >
                                  *
                                </span>
                              </div>
                            </div>
                            <div style={{ clear: "both" }}></div>
                          </div>

                          <input
                            type="hidden"
                            id="secretid"
                            value="6LdNeDUUAAAAAG5l7cJfv1AA5OKLslkrOa_xXxLs"
                          />
                          {/* <!-- Captcha for Signup End--><!-- Other Lists Subscription Start--> */}
                          <div
                            style={{
                              borderBottom: "1px dotted #ebebeb",
                              marginTop: "10px",
                              clear: "both",
                            }}
                          ></div>
                          <div
                            id="REQUIRED_FIELD_TEXT"
                            changetype="REQUIRED_FIELD_TEXT"
                            name="SIGNUP_REQUIRED"
                            style={{
                              color: "rgb(180, 0, 0)",
                              padding: "10px 10px 10px 0px",
                              fontFamily: "Arial",
                              fontSize: "11px",
                            }}
                          >
                            *Required Fields
                          </div>
                          <div
                            style={{
                              padding: "10px",
                              textAlign: "center",
                            }}
                          >
                            <input
                              type="button"
                              action="Save"
                              id="zcWebOptin"
                              name="SIGNUP_SUBMIT_BUTTON"
                              changetype="SIGNUP_SUBMIT_BUTTON_TEXT"
                              style={{
                                cursor: "pointer",
                                appearance: "none",
                                color: "rgb(255, 255, 255)",
                                backgroundColor: "rgb(212, 73, 73)",
                                whiteSpace: "normal",
                                padding: "5px 15px",
                                borderColor: "rgb(212, 73, 73)",
                                textAlign: "center",
                                outline: "none",
                                fontFamily: "Arial",
                                borderRadius: "3px",
                                borderWidth: "5px",
                                fontSize: "14px",
                                backgroundPosition: "center bottom",
                                borderStyle: "solid",
                                backgroundRepeat: "repeat-x",
                              }}
                              value="Yes, please."
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Do not edit the below Zoho Campaigns hidden tags --> */}
                    <input type="hidden" id="fieldBorder" value="" />
                    <input
                      type="hidden"
                      name="zc_trackCode"
                      id="zc_trackCode"
                      value="ZCFORMVIEW"
                    />
                    <input
                      type="hidden"
                      name="viewFrom"
                      id="viewFrom"
                      value="URL_ACTION"
                    />
                    <input
                      type="hidden"
                      id="submitType"
                      name="submitType"
                      value="optinCustomView"
                    />
                    <input
                      type="hidden"
                      id="lD"
                      name="lD"
                      value="110f769a95de56821"
                    />
                    <input
                      type="hidden"
                      name="emailReportId"
                      id="emailReportId"
                      value=""
                    />
                    <input
                      type="hidden"
                      name="zx"
                      id="cmpZuid"
                      value="1326caec3"
                    />
                    <input type="hidden" name="zcvers" value="3.0" />
                    <input
                      type="hidden"
                      name="oldListIds"
                      id="allCheckedListIds"
                      value=""
                    />
                    <input
                      type="hidden"
                      id="mode"
                      name="mode"
                      value="OptinCreateView"
                    />
                    <input
                      type="hidden"
                      id="zcld"
                      name="zcld"
                      value="110f769a95de56821"
                    />
                    <input
                      type="hidden"
                      id="zctd"
                      name="zctd"
                      value="110f769a95de4d7a9"
                    />
                    <input type="hidden" id="document_domain" value="" />
                    <input
                      type="hidden"
                      id="zc_Url"
                      value="zohuta-cmpzourl.maillist-manage.com"
                    />
                    <input type="hidden" id="new_optin_response_in" value="0" />
                    <input
                      type="hidden"
                      id="duplicate_optin_response_in"
                      value="0"
                    />
                    <input
                      type="hidden"
                      id="zc_formIx"
                      name="zc_formIx"
                      value="3z63bf1d4c835c590de9462a8476b0483d2cfc667188102c167a418ff68cd4521a"
                    />
                    {/* <!-- End of the campaigns hidden tags --> */}
                  </div>
                </form>
              </div>

              <div
                style={{
                  margin: "0px auto",
                  marginTop: "20px",
                  textAlign: "left",
                  height: "76px",
                }}
                id="privacyNotes"
                data-identity="privacyNotes" // Use data- attribute for custom data
              >
                <span>
                  Note: It is our responsibility to protect your privacy and we
                  guarantee that your data will be completely confidential.
                </span>
              </div>
            </div>
          </div>

          <input type="hidden" id="isCaptchaNeeded" value="false" />
          <input type="hidden" id="superAdminCap" value="0" />
          <img
            src="https://zohuta-cmpzourl.maillist-manage.com/images/spacer.gif"
            ref={refImage}
            id="refImage"
            style={{ display: "none" }}
            alt="" // Add an alt attribute for accessibility
          />
        </div>
      </div>

      <div
        id="zcOptinOverLay"
        onContextMenu={handleContextMenu}
        style={{
          display: "none",
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Use rgba for opacity
          zIndex: 100,
          position: "fixed",
          width: "100%",
          top: 0,
          left: 0,
          height: "988px",
          cursor: "default",
        }}
      />

      <div
        id="zcOptinSuccessPopup"
        style={{
          display: "none",
          zIndex: 9999,
          width: "800px",
          height: "40%",
          top: "84px",
          position: "fixed",
          left: "26%",
          backgroundColor: "#ffffff",
          borderColor: "#e6e6e6",
          borderStyle: "solid",
          borderWidth: "1px",
          boxShadow: "0 1px 10px #424242",
          padding: "35px",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "-16px",
            right: "-14px",
            zIndex: 99999,
            cursor: "pointer",
          }}
          id="closeSuccess"
        >
          <img src="https://zohuta-cmpzourl.maillist-manage.com/images/videoclose.png" />
        </span>
        <div id="zcOptinSuccessPanel"></div>
      </div>
    </div>
  );
};

export default CTA;
