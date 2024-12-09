import React from "react";
import Image from "next/image";
import { authAPIList } from "@/lib/apiList";
import { BACKEND_URL, THIRD_PARTY_URLS } from "@/utils/constants";

const GoogleOAuthComponent = () => {
  //functions
  const handleGoogleOAuth = () => {
    window.open(BACKEND_URL.dev + authAPIList.googleOAuth, "_self");
  };
  return (
    <div
      className="flex items-center justify-center gap-3 p-2 border border-solid border-gray-300 cursor-pointer"
      onClick={handleGoogleOAuth}
    >
      <Image
        width={20}
        height={20}
        src={THIRD_PARTY_URLS.googleImg}
        alt="google-img"
      />
      <p>Sign up with Google</p>
    </div>
  );
};

const OAuthComponent = () => {
  return (
    <div>
      <GoogleOAuthComponent />
    </div>
  );
};

export default OAuthComponent;
