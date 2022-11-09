import React from "react";
import {
  FaDatabase,
  FaAsterisk,
  FaAccusoft,
  FaFacebook,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

function Content() {
  return (
    <div className="w-full h-full bg-dark-grey">
      <div className="max-w-6xl py-8 px-4 m-auto">
        <div className="grid grid-cols-2">
          <div className="p-4 h-3/4 flex flex-col justify-center">
            <h1 className="text-4xl text-white font-bold">
              Data to enrich your
            </h1>
            <h1>
              <span className="text-primary-color">online business</span>
            </h1>
            <p className="text-base text-text-grey mt-4">
              Lorem ipsum dolor sit amet, consec tetur adipisicing elit.
              Architecto iure fuga deleniti sit! Cum doloribus, nesciunt
              laboriosam eos praesentium veritatis!
            </p>
            <div>
              <p className="text-text-light-grey mt-8 mr-0 mb-4 ml-0">
                USED BY
              </p>
              <div className="flex">
                <i className="text-text-grey mr-4">
                  <FaDatabase /> Staxx
                </i>
                <i className="text-text-grey mr-4">
                  <FaAsterisk /> Star AI
                </i>
                <i className="text-text-grey mr-4">
                  <FaAccusoft /> Accusoft
                </i>
              </div>
            </div>
          </div>
          <div className="p-8 h-3/4 flex flex-col justify-center text-md my-8">
            <div className="w-96 m-auto bg-white rounded-md">
              <div className="py-6 px-8 text-center">
                <p className="mb-2.5 text-text-grey">Sign in with</p>
                <div className="flex justify-center align-center mb-4">
                  <i className="rounded-md border-solid border-text-grey mr-2">
                    <FaFacebook
                      className="rounded-md border-solid border-text-grey"
                      size={20}
                    />
                  </i>
                  <i>
                    <FaTwitter
                      className="rounded-md border-solid border-text-grey"
                      size={20}
                    />
                  </i>
                  <i>
                    <FaGithub
                      className="rounded-md border-solid border-text-grey ml-2"
                      size={20}
                    />
                  </i>
                </div>
                <div>
                  <p className="text-text-grey w-full text-center border">
                    <span>Or</span>
                  </p>
                </div>
                <form>
                  <input
                    className="block w-full my-5 mx-0 p-2 border border-text-grey"
                    type="text"
                    placeholder="Name"
                  />
                  <input
                    className="block w-full my-5 mx-0 p-2 border border-text-grey"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    className="block w-full my-5 mx-0 p-2 border border-text-grey"
                    type="password"
                    placeholder="Password"
                  />
                  <button>Create your account</button>
                </form>
              </div>
              <div
                style={{
                  borderBottomRightRadius: "8px",
                  borderBottomLeftRadius: "8px",
                }}
                className="border-t border-sky-500 bg-[#f8f8f8]"
              >
                <p className="text-text-grey py-6 px-8">
                  By signing up, you agree to our
                  <span className="primary-color"> Terms, Data Policy</span> and
                  <span className="primary-color"> Cookies Policy</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
