import { useState, useEffect } from "react";

export default function sendToWeb3Storage() {
  const [cute, setCute] = useState(false);
  const [cool, setCool] = useState(false);
  const [fun, setFun] = useState(false);
  const [description, setDescription] = useState("");

  useEffect(() => {
    console.log("the current state of fun", fun);
    console.log("the current state of cool", cool);
    console.log("the current state of cute", cute);
    console.log("the current state of description", description);
  });

  //this function should get called when a user submits a form, or something like that. The e refers to the event that executes this function, like a form submit
  async function sendToWeb3Storage(e) {
    //
    e.preventDefault();
    // this is the request body that will be sent to web3.storage. Replace these variables with variables that were saved in state for your app.
    //We're storing these variables because that's what this specific example gathers from the user. 
    const body = {
      description: description,
      cute: cute,
      cool: cool,
      fun: fun,
    };

    try {
      const response = await fetch("/api/store-event-data", {
        //we are writing a POST aka we are writing to web3storage (as opposed to reading)
        method: "POST",
        headers: { "Content-Type": "application/json" },
        //this is the body we defined above
        body: JSON.stringify(body),
      });
      //if the request was not successful
      if (response.status !== 200) {
        alert("Oops! Something went wrong. Please refresh and try again.");
      } else {
        //if the request was successful
        console.log("Form successfully submitted!");
        let responseJSON = await response.json();
        //writing to WEb3Storage will give you a CID, or a content ID, the address of where your content lives.
        //you can access this with 'responseJSON.cid'
      }
      // check response, if success is false, dont take them to success page
    } catch (error) {
      alert(
        `Oops! Something went wrong. Please refresh and try again. Error ${error}`
      );
    }
  }

  return (
    <form className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5 mt-8">
        <div>
          <div>
            <h3 className="text-lg leading-6 font-medium text-white">
              Send User-generated Data to Web3Storage
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-white">
              This information is an example of off-chain storage that we will
              store with Web3.Storage. To use this in your app, you'll need to
              generate an API key for Web3.Storage by registering as a user and
              then requesting a key. You'll paste this key in your .env.local
              file at the root of your project.
            </p>
          </div>

          <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="about"
                className="block text-sm font-medium text-white sm:mt-px sm:pt-2"
              >
                About
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                  defaultValue={""}
                />
                <p className="mt-2 text-sm text-white">
                  Write a few sentences about yourself.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="divide-y divide-gray-200 pt-8 space-y-6 sm:pt-10 sm:space-y-5">
          <div className="space-y-6 sm:space-y-5 divide-y divide-gray-200">
            <div className="pt-6 sm:pt-5">
              <div role="group" aria-labelledby="label-email">
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                  <div>
                    <div
                      className="text-base font-medium text-white sm:text-sm sm:text-white"
                      id="label-email"
                    >
                      Descriptors
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0 sm:col-span-2">
                    <div className="max-w-lg space-y-4">
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="fun"
                            name="fun"
                            type="checkbox"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            onChange={(e) => {
                              setFun(e.target.checked);
                            }}
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="fun"
                            className="font-medium text-white"
                          >
                            Fun
                          </label>
                          <p className="text-white">
                            Your friends say you're a good time.
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="relative flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="cool"
                              name="cool"
                              type="checkbox"
                              onChange={(e) => {
                                setCool(e.target.checked);
                              }}
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="cool"
                              className="font-medium text-white"
                            >
                              Cool
                            </label>
                            <p className="text-white">
                              Your friends say you're cool.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="relative flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="cute"
                              name="cute"
                              type="checkbox"
                              onChange={(e) => {
                                setCute(e.target.checked);
                              }}
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="cute"
                              className="font-medium text-white"
                            >
                              Cute
                            </label>
                            <p className="text-white">
                              Your friends say you're cute.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            onClick={sendToWeb3Storage}
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
