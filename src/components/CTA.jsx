import React, { useEffect, useRef, useState } from "react";
import "./CTA.css";

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
            className="large_form_3_css bg-teal-500 text-white p-10 font-sans text-center text-lg min-w-[240px]"
            id="SIGNUP_PAGE"
          >
            <div className="my-0 mx-auto">
              <div
                id="imgBlock"
                name="LOGO_DIV"
                data-logo="true" // Use data- attribute for custom data
                className="w-600 mx-auto mb-0 text-center"
              />
            </div>
            <br />
            <div
              id="signupMainDiv"
              className="mx-auto w-full min-w-[230px] max-w-600"
              name="SIGNUPFORM"
              changeid="SIGNUPFORM"
              changename="SIGNUPFORM"
            >
              <div>
                <div className="relative">
                  <div
                    id="Zc_SignupSuccess"
                    className="hidden absolute left-4 w-90 bg-white p-3 border border-green-500 mt-10 mb-10 text-wrap"
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
                              className="text-teal-400 font-sans text-lg text-wrap"
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
                  className="m-0"
                  action="https://zohuta-cmpzourl.maillist-manage.com/weboptin.zc"
                  target="_zcSignup"
                >
                  <div
                    id="SIGNUP_BODY_ALL"
                    name="SIGNUP_BODY_ALL"
                    className="border-teal-600 border-4"
                  >
                    <h1
                      id="SIGNUP_HEADING"
                      name="SIGNUP_HEADING"
                      changeid="SIGNUP_MSG"
                      changetype="SIGNUP_HEADER"
                      className="text-[#434343] bg-[#f5f5f5] border-b border-transparent p-8 m-0 font-sans font-semibold text-center text-lg
                       text-wrap"
                    >
                      <span>
                        Learn more about our Global and Local Education Funding
                        Opportunities
                      </span>
                    </h1>
                    <div
                      id="SIGNUP_BODY"
                      name="SIGNUP_BODY"
                      className="bg-white text-gray-400 p-8 font-sans text-center bottom-2 text-xs opacity-100 w-full"
                    >
                      <div className="mx-auto text-left">
                        <div
                          id="SIGNUP_DESCRIPTION"
                          changeid="SIGNUP_MSG"
                          changetype="SIGNUP_DESCRIPTION"
                          className="leading-loose"
                        />
                        <div
                          id="errorMsgDiv"
                          className="hidden bg-rose-100 text-red-500 p-4 text-xs my-10 border border-rose-200"
                        >
                          &nbsp;&nbsp;Please correct the marked field(s) below.
                        </div>
                        <div>
                          <div
                            name="fieldsdivSf"
                            className="zcsffieldsdiv text-sm mt-4"
                          >
                            <div
                              className="zcsffield py-0 px-0"
                              fieldid="1222562000000000023"
                            >
                              <div>
                                {/* Check for email/required fields (logic not included) */}
                                <input
                                  className="w-full text-gray-400 bg-white border border-gray-300 p-1 font-sans text-sm text-indent-2 h-8"
                                  maxLength="100"
                                  placeholder="First Name"
                                  name="FIRSTNAME"
                                  changeitem="SIGNUP_FORM_FIELD"
                                  type="text" // Change to "email" if necessary
                                />
                                &nbsp;
                                <span id="dt_FIRSTNAME" className="hidden">
                                  1,false,1,First Name,2
                                </span>
                              </div>

                              <div style={{ clear: "both" }}></div>
                            </div>
                            <div
                              className="zcsffield py-2 px-0"
                              fieldid="1222562000000000021"
                            >
                              <div>
                                {/* <!-- check to mark emailid field as type email, and other mandatory fields as type required --> */}
                                <input
                                  className="w-full text-gray-400 bg-white border border-gray-300 p-1 font-sans text-sm text-indent-2 h-8"
                                  maxLength="100"
                                  placeholder="Email"
                                  name="CONTACT_EMAIL"
                                  changeitem="SIGNUP_FORM_FIELD"
                                  type="email"
                                />
                                &nbsp;
                                <span
                                  name="SIGNUP_REQUIRED"
                                  className="text-red-500 font-sans text-xs"
                                >
                                  *
                                </span>
                                <span className="hidden" id="dt_CONTACT_EMAIL">
                                  1,true,6,Contact Email,2
                                </span>
                              </div>
                              <div style={{ clear: "both" }}></div>
                            </div>
                            <div
                              className="zcsffield py-2 px-0"
                              fieldid="1222562000000000029"
                            >
                              <div>
                                {/* Check for email/required fields (logic not included) */}
                                <input
                                  className="w-full text-gray-400 bg-white border border-gray-300 p-1 font-sans text-sm text-indent-2 h-8"
                                  maxLength="100"
                                  placeholder="Phone"
                                  name="PHONE"
                                  changeitem="SIGNUP_FORM_FIELD"
                                  type="text" // Change to "tel" if necessary
                                />
                                &nbsp;
                                <span id="dt_PHONE" className="hidden">
                                  1,false,1,Phone,2
                                </span>
                              </div>
                              <div style={{ clear: "both" }}></div>
                            </div>

                            <div
                              className="zcsffield py-2 px-0"
                              fieldid="1222562000000118023"
                            >
                              <div>
                                {/* Check for email/required fields (logic not included) */}
                                <input
                                  className="w-full text-gray-400 bg-white border border-gray-300 p-1 font-sans text-sm text-indent-2 h-8"
                                  maxLength="100"
                                  placeholder="Country of Residence"
                                  name="CONTACT_CF4"
                                  changeitem="SIGNUP_FORM_FIELD"
                                  type="text" // No change in type needed here
                                />
                                &nbsp;
                                <span id="dt_CONTACT_CF4" className="hidden">
                                  1,false,1,Country of Residence,2
                                </span>
                              </div>
                              <div style={{ clear: "both" }}></div>
                            </div>

                            <div
                              className="zcsffield py-2 px-0"
                              fieldid="1222562000000000035"
                            >
                              <div>
                                {/* Check for email/required fields (logic not included) */}
                                <input
                                  className="w-full text-gray-400 bg-white border border-gray-300 p-1 font-sans text-sm text-indent-2 h-8"
                                  maxLength="100"
                                  placeholder="State"
                                  name="STATE"
                                  changeitem="SIGNUP_FORM_FIELD"
                                  type="text" // No change in type needed here
                                />
                                &nbsp;
                                <span id="dt_STATE" className="hidden">
                                  1,false,1,State,2
                                </span>
                              </div>
                              <div style={{ clear: "both" }}></div>
                            </div>

                            <div
                              className="zcsffield py-2 px-0"
                              fieldid="1222562000000118011"
                            >
                              <div>
                                <div className="relative">
                                  <select
                                    name="CONTACT_CF3"
                                    changeitem="SIGNUP_FORM_FIELD"
                                    multiple
                                    className="w-full text-gray-400 bg-white border border-gray-300 p-1 font-sans text-sm text-indent-2 h-21"
                                    zc_display_name="Who are you enquiring for?"
                                  >
                                    <option value="dummy" disabled>
                                      Who are you enquiring for?
                                    </option>
                                    <option className="text-black text-sm" value="Myself">Myself</option>
                                    <option className="text-black text-sm" value="My child or Minor">
                                      My child or Minor
                                    </option>
                                    <option className="text-black text-sm" value="3rd party adult">
                                      3rd party adult
                                    </option>
                                  </select>
                                  &nbsp;
                                  <span id="dt_CONTACT_CF3" className="hidden">
                                    1,false,13,Who are you enquiring for?,2
                                  </span>
                                </div>
                              </div>
                              <div className="clear-both"></div>
                            </div>
                          </div>

                          {/* <!-- Captcha for Signup --> */}
                          <div
                            id="captchaOld"
                            name="captchaContainer"
                            className={`${
                              isCaptchaVisible ? "block" : "hidden"
                            }`}
                          >
                            <div>
                              <div
                                id="captchaParent"
                                className="w-[59%] md:w-full min-w-sm max-w-3xl float-left"
                              >
                                <img
                                  src="//campaigns.zoho.com/images/refresh_icon.png"
                                  className="cursor-pointer float-right mr-2"
                                  onClick={handleRefreshCaptcha}
                                  id="relCaptcha"
                                  alt="Refresh Captcha"
                                />
                                <div
                                  id="captchaDiv"
                                  captcha="true"
                                  name=""
                                  className="p-5 bg-white border border-gray-300 w-full"
                                >
                                  {/* Captcha image will be loaded here */}
                                </div>
                                <input
                                  placeholder="Captcha"
                                  id="captchaText"
                                  name="captchaText"
                                  changeitem="SIGNUP_FORM_FIELD"
                                  className="mt-2 w-full text-gray-400 bg-white border border-gray-300 p-1 font-sans text-sm text-indent-2 h-8"
                                  maxLength="100"
                                  type="text"
                                />
                                <span
                                  name="SIGNUP_REQUIRED"
                                  id="capRequired"
                                  className="text-red-500 mt-4 mr-1 float-right font-sans text-xs"
                                >
                                  *
                                </span>
                              </div>
                            </div>
                            <div className="clear-both"></div>
                          </div>

                          <input
                            type="hidden"
                            id="secretid"
                            value="6LdNeDUUAAAAAG5l7cJfv1AA5OKLslkrOa_xXxLs"
                          />
                          {/* <!-- Captcha for Signup End--><!-- Other Lists Subscription Start--> */}
                          <div className="border-b border-dashed border-gray-400 mt-4 clear-both"></div>
                          <div
                            id="REQUIRED_FIELD_TEXT"
                            changetype="REQUIRED_FIELD_TEXT"
                            name="SIGNUP_REQUIRED"
                            className="text-red-500 py-[10px] px-0 font-sans text-xs"
                          >
                            *Required Fields
                          </div>
                          <div className="p-[10px] text-center">
                            <input
                              type="button"
                              action="Save"
                              id="zcWebOptin"
                              name="SIGNUP_SUBMIT_BUTTON"
                              changetype="SIGNUP_SUBMIT_BUTTON_TEXT"
                              className="cursor-pointer focus:outline-none text-white bg-red-500 hover:bg-opacity-75 py-2 px-4 font-sans text-base rounded-md border border-red-500 border-solid"
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
                className="mx-auto mt-5 text-left h-24"
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
            className="hidden"
            alt="" // Add an alt attribute for accessibility
          />
        </div>
      </div>

      <div
        id="zcOptinOverLay"
        onContextMenu={handleContextMenu}
        className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 hidden cursor-default"
      />

      <div
        id="zcOptinSuccessPopup"
        className="fixed top-16 left-1/4 w-full md:w-800 h-auto bg-white border border-gray-300 shadow-md p-10 z-50 hidden"
      >
        <span
          className="absolute top-[-16px] right-[-14px] z-50 cursor-pointer"
          id="closeSuccess"
        >
          <img
            src="https://zohuta-cmpzourl.maillist-manage.com/images/videoclose.png"
            className="absolute top-[-16px] right-[-14px] z-50 cursor-pointer"
          />
        </span>
        <div id="zcOptinSuccessPanel"></div>
      </div>
    </div>
  );
};

export default CTA;
