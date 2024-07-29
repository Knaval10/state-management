import React, { useEffect, useState } from "react";
// import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
// import { login } from "../../utils/api";
// import { toast } from "sonner";
const login = [
  {
    expiry: "Thu Jul 30 2024 9:30:20 GMT+0545",
    token: "qwert123",
  },
];
const Login = () => {
  const navigate = useNavigate();
  const expiry = localStorage.getItem("expiryDate");
  const token = localStorage.getItem("token");
  const currentDate = new Date();
  const onSubmit = async (formData) => {
    const { email, password } = formData;
    login.map((res) => {
      //   if (res) {
      console.log("res", res?.expiry);
      localStorage.setItem("expiryDate", res?.expiry);
      localStorage.setItem("token", res?.token);
      navigate("/personal");
      //   }
    });
  };

  useEffect(() => {
    if (token && expiry) {
      if (new Date(expiry) < currentDate) {
        localStorage.clear();
      } else {
        navigate("/personal");
      }
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="flex bg-[#f2f4f7] flex-col justify-center h-[100vh] items-center">
      <div className="flex bg-white flex-col px-[42px] justify-center py-[41.75px] gap-[32px] rounded-[40px]  shadow-md border-[#EAECF0] border lg:px-[62px] lg:py-[70px]">
        <div className="flex flex-col gap-[9px] self-center">
          <h1 className="text-[24px] leading-[32px] font-[600] lg:text-[30px] lg:leading-[38px]">
            Log in to your USYC ID
          </h1>
          <span className="text-[12px] text-[#667085] leading-[18px] font-[300] items-center text-center lg:text-[16px] lg:leading-[24px] md:px-3">
            Welcome back! Please enter your details.
          </span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col text-[12px] font-normal leading-[18px] gap-[4.5px] ">
              <span className="text-[12px] font-normal leading-[18px] lg:text-[14px] lg:leading-[20px] text-[#344054]">
                USYC ID/Email
              </span>
              <div className=" border border-[#D0D5DD] rounded-lg h-[35px] lg:h-[44px] w-full flex items-center gap-[8px] ">
                {/* <img src={Eye} alt="email" /> */}
                <input
                  type="email"
                  className=" focus:outline-none h-full w-full border-none text-[#667085] font-light text-[16px] leading-[24px] px-[12px]"
                  placeholder="Enter Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
              {/* <InputField
              IconComponent={() => (
                <img src={help} className="h-[18px]" alt="" />
              )}
              placeholder={"Enter your ID or Associated Email"}
              className={
                "border border-[#D0D5DD] rounded-lg h-[33px] lg:h-[44px] w-full "
              }
            /> */}
            </div>
            <div className="flex flex-col gap-[4.5px]">
              <span className="text-[12px] font-normal leading-[18px] lg:text-[14px] lg:leading-[20px] text-[#344054]">
                Password
              </span>
              <div className=" border border-[#D0D5DD] rounded-lg h-[35px] lg:h-[44px] w-full flex items-center gap-[8px]">
                {/* <img src={Eye} alt="email" /> */}
                <input
                  type="password"
                  className=" focus:outline-none h-full w-full border-none text-[#667085] font-light text-[16px] leading-[24px] px-[12px]"
                  placeholder="Enter Password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
              </div>
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
              {/* <InputField
              placeholder="Enter your password"
              value={renderPasswordPlaceholder()}
              type={isPasswordVisible ? "text" : "password"}
              onChange={handlePasswordChange}
              className={
                "border border-[#D0D5DD] rounded-lg h-[33px] lg:h-[44px] w-full"
              }
            /> */}
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-[8px]">
                <input
                  type="checkbox"
                  id="checkbox"
                  name="checkbox"
                  value="checkbox"
                  className="border-[#D0D5DD] border-[1px]"
                />
                <span className="text-[12px] font-normal leading-[18px] lg:text-[14px] lg:leading-[20px] text-[#344054]">
                  Remember for 30 days
                </span>
              </div>
              {/* <div className="flex">
    							<Link to="/forgot-password">
    								<span className="text-[#020A7C] text-[12px] font-[600] leading-[18px] lg:text-[14px] lg:leading-[20px]">
    									Forgot password
    								</span>
    							</Link>
    						</div> */}
            </div>
            <div className="flex flex-col gap-[16px]">
              <div>
                <button
                  className={
                    "py-[7.5px] px-[13.5px] w-full flex justify-center items-center bg-[#020A7C] rounded-full lg:py-[10px] lg:px-[18px] text-[16px] lg:h-[44px]"
                  }
                  type="submit"
                >
                  Sign In
                </button>
              </div>
              {/* <div className="flex justify-center items-center gap-[3px]">
    							<span className="text-[12px] font-[300] leading-[18px] lg:text-[14px] lg:leading-[20px] text-[#344054]">
    								Are you a USYC Alumni?
    							</span>
    							<Link to="/claimid">
    								<span className="text-[#020A7C] font-[600] text-[14px] leading-[20px]">
    									Claim ID
    								</span>
    							</Link>
    						</div> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
