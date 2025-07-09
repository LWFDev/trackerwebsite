
import React from "react";
import LoginForm from "@/components/auth/LoginForm";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8">
        <div className="mb-8 text-center">
          <Link to="/" className="inline-block">
            <h1 className="text-3xl font-bold text-gold-gradient">
              Track My Business
            </h1>
          </Link>
        </div>
        
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
